<!--  
    Location: src/lib/svelte/components/page/Navbar.svelte
    use:
-->
<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { getRuntimeData } from '$lib/typescript/data/runtime';
	import { siteMetadata } from '$lib/typescript/data/runtime/site-metadata';
	import { searchWiki, type SearchResult } from '$lib/typescript/pages/search';
	import type { NavbarDataType } from '$lib/typescript/components/_index_';

	import Link from '$lib/svelte/components/Link.svelte';

	let { logoPath, searchPath, actions }: NavbarDataType = $props();

	let logo = $derived(getRuntimeData(logoPath));
	let brandLogo = siteMetadata.logos.wide;
	let search = $derived(getRuntimeData(searchPath));
	let searchAction = $derived(getSearchAction(search.href));
	let isNavbarHidden = $state(false);
	let mobileSidebarOpen = $state(false);
	let searchQuery = $state('');
	let searchSuggestions = $derived(
		searchQuery.trim().length >= 2 ? searchWiki(searchQuery).slice(0, 6) : []
	);
	let searchSuggestionsOpen = $state(false);

	function getValidUrl(href: string): string {
		if (!href.startsWith('/')) {
			return href;
		}

		return `${base}${href}`;
	}

	function getSearchAction(href: string): string {
		const url = getValidUrl(href);

		return url.endsWith('/') ? url : `${url}/`;
	}

	onMount(() => {
		const navbar = document.querySelector<HTMLElement>('.navbar');
		const updateNavbarHeight = (): void => {
			if (navbar) {
				const height = `${navbar.getBoundingClientRect().height}px`;
				document.documentElement.style.setProperty('--navbar-height', height);
				document.querySelectorAll<HTMLElement>('.layout').forEach((layout) => {
					layout.style.setProperty('--navbar-height', height);
				});
			}
		};

		updateNavbarHeight();
		const navbarObserver = navbar ? new ResizeObserver(updateNavbarHeight) : undefined;
		navbarObserver?.observe(navbar!);

		const handleSidebarState = (event: Event): void => {
			mobileSidebarOpen = (event as CustomEvent<{ open: boolean }>).detail.open;
		};

		window.addEventListener('dnd-portal:mobile-sidebar-state', handleSidebarState);
		let lastScrollY = window.scrollY;
		const setNavbarHidden = (hidden: boolean): void => {
			document.body.classList.toggle('navbar-hidden', hidden);
		};

		setNavbarHidden(false);

		function handleScroll(): void {
			const currentScrollY = window.scrollY;
			const scrollDelta = currentScrollY - lastScrollY;
			const pastNavbar = currentScrollY > 90;

			if (scrollDelta > 6 && pastNavbar) {
				isNavbarHidden = true;
				setNavbarHidden(true);
			} else if (scrollDelta < -4 || currentScrollY <= 0) {
				isNavbarHidden = false;
				setNavbarHidden(false);
			}

			lastScrollY = currentScrollY;
		}

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			navbarObserver?.disconnect();
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('dnd-portal:mobile-sidebar-state', handleSidebarState);
			setNavbarHidden(false);
		};
	});

	function toggleMobileSidebar(): void {
		window.dispatchEvent(new CustomEvent('dnd-portal:toggle-mobile-sidebar'));
	}

	function getSuggestionHref(result: SearchResult): string {
		return getValidUrl(result.href);
	}

	function closeSuggestions(): void {
		window.setTimeout(() => (searchSuggestionsOpen = false), 120);
	}
</script>

<header class="navbar" class:navbar--hidden={isNavbarHidden}>
	<nav class="navbar__inner" aria-label="Primary">
		<button
			class="navbar__mobile-toggle"
			type="button"
			aria-label={mobileSidebarOpen ? 'Close navigation' : 'Open navigation'}
			aria-expanded={mobileSidebarOpen}
			aria-controls="wiki-sidebar"
			onclick={toggleMobileSidebar}
		>
			<span aria-hidden="true"></span>
		</button>
		<a
			class="navbar__brand"
			href={getValidUrl(logo.href)}
			aria-label="D&D Portal Wiki homepage"
		>
			<img
				class="navbar__brand-img"
				src={brandLogo.href}
				alt={brandLogo.alt}
			>
		</a>

		<form
			class="navbar__search"
			action={searchAction}
			method="GET"
			role="search"
			onfocusout={closeSuggestions}
		>
			<label class="navbar__search-label" for="navbar-search">
				Search the Wiki
			</label>

			<span class="navbar__search-icon" aria-hidden="true"></span>

			<input
				id="navbar-search"
				class="navbar__search-input"
				type="search"
				name="q"
				placeholder="Search rules, classes, species, monsters..."
				autocomplete="off"
				aria-label="Search the Wiki"
				bind:value={searchQuery}
				aria-autocomplete="list"
				aria-controls="navbar-search-suggestions"
				onfocus={() => (searchSuggestionsOpen = true)}
			>

			<button class="navbar__search-submit" type="submit">
				Search
			</button>

			{#if searchSuggestionsOpen && searchSuggestions.length > 0}
				<div id="navbar-search-suggestions" class="navbar__search-suggestions" role="listbox" aria-label="Search suggestions">
					{#each searchSuggestions as result (result.id)}
						<a class="navbar__search-suggestion" href={getSuggestionHref(result)} role="option" aria-selected="false">
							<span class="navbar__search-suggestion-title">{result.title}</span>
							<span class="navbar__search-suggestion-meta">{result.category} · {result.subtitle}</span>
						</a>
					{/each}
				</div>
			{/if}
		</form>

		<div class="navbar__actions" aria-label="Community and preferences">
			{#each actions as action (action.path)}
				<Link
					goto={action.path}
					placeholder={action.label}
					popup="description"
					showIcon
				/>
			{/each}
		</div>
	</nav>
</header>

<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	const items = [
		{ label: 'Home', href: '/', icon: '/icons/white/util/home.svg' },
		{ label: 'Rules', href: '/rules/', icon: '/icons/white/entity/book.svg' },
		{ label: 'Search', href: '/search/', icon: '/icons/white/util/search.svg' },
		{ label: 'Tools', href: '/tools/', icon: '/icons/white/entity/tool.svg' }
	] as const;
	let sidebarOpen = $state(false);
	onMount(() => {
		const handleSidebarState = (event: Event): void => {
			sidebarOpen = (event as CustomEvent<{ open: boolean }>).detail.open;
		};
		window.addEventListener('dnd-portal:mobile-sidebar-state', handleSidebarState);
		return () => window.removeEventListener('dnd-portal:mobile-sidebar-state', handleSidebarState);
	});

	function getHref(href: string): string {
		return `${base}${href}`;
	}
	function isActive(label: string, href: string): boolean {
		const pathname = page.url.pathname;
		if (label === 'Rules') return pathname.startsWith('/rules') || pathname.startsWith('/spells') || pathname.startsWith('/classes') || pathname.startsWith('/species');
		return pathname === href || (href !== '/' && pathname.startsWith(href));
	}

	function openMore(): void {
		window.dispatchEvent(new CustomEvent('dnd-portal:toggle-mobile-sidebar'));
	}
</script>

<nav class="mobile-navigation" aria-label="Mobile navigation">
	{#each items as item}
		<a class="mobile-navigation__item" class:mobile-navigation__item--active={isActive(item.label, item.href)} href={getHref(item.href)}>
			<img src={item.icon} alt="" aria-hidden="true" />
			<span>{item.label}</span>
		</a>
	{/each}
	<button class="mobile-navigation__item" class:mobile-navigation__item--active={sidebarOpen} type="button" aria-expanded={sidebarOpen} onclick={openMore}>
		<img src="/icons/white/util/cog.svg" alt="" aria-hidden="true" />
		<span>More</span>
	</button>
</nav>

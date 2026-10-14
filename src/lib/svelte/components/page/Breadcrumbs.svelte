<!--
	Location: src/lib/svelte/components/page/Breadcrumbs.svelte
	Use: Renders breadcrumbs from the current-page context.
-->
<script lang="ts">
	import { base } from '$app/paths';
	import { page as appPage } from '$app/state';
	import { goto } from '$app/navigation';
	import {
		getCanonicalInternalHref,
		getBreadcrumbBackPath,
		getBreadcrumbItems,
		getDynamicSpellBreadcrumbItems,
		homePagePath
	} from '$lib/typescript/pages/currentPage';
	import type { BreadcrumbItem } from '$lib/typescript/pages/currentPage';
	import { getRuntimeData } from '$lib/typescript/data/runtime';
	import { getCurrentPageContext } from '$lib/svelte/context/currentPage';

	import Link from '$lib/svelte/components/Link.svelte';

	const currentPage = getCurrentPageContext();
	const isDynamicSpellPath = (pathname: string): boolean => {
		const parts = pathname.split('/').filter(Boolean);
		return parts[0] === 'spells' && Boolean(parts[1]) && !['spellcasting', 'cantrips', 'level-1'].includes(parts[1]);
	};
	let { itemsOverride }: { itemsOverride?: readonly BreadcrumbItem[] } = $props();
	let spellBreadcrumbs = $derived.by(() => {
		if (itemsOverride || !isDynamicSpellPath(appPage.url.pathname)) return undefined;
		const parts = appPage.url.pathname.split('/').filter(Boolean);
		if (parts[0] !== 'spells' || !parts[1] || ['spellcasting', 'cantrips', 'level-1'].includes(parts[1])) return undefined;
		const items = getDynamicSpellBreadcrumbItems(parts[1]);
		return items.length ? items : undefined;
	});
	let items = $derived(itemsOverride ?? spellBreadcrumbs ?? getBreadcrumbItems(currentPage.path) ?? []);
	let backPath = $derived(getBreadcrumbBackPath(items));
	let shouldRender = $derived(
		(itemsOverride ? items.length > 0 : (currentPage.path !== null && currentPage.path !== homePagePath) || Boolean(spellBreadcrumbs)) &&
		items.length > 0
	);

	function getInternalUrl(href: string): string {
		return getCanonicalInternalHref(href, base);
	}

	function goBack(): void {
		if (!backPath) {
			return;
		}

		goto(getInternalUrl(getRuntimeData(backPath).href));
	}
</script>

{#if shouldRender}
	<div class="breadcrumbs">
		<button
			class="breadcrumbs__back"
			type="button"
			aria-label="Go back to the parent page"
			onclick={goBack}
		>
			Back
		</button>

		<nav class="breadcrumbs__nav" aria-label="Breadcrumb">
			<ol class="breadcrumbs__list">
				{#each items as item, index (item.key)}
					<li class="breadcrumbs__item">
						{#if index < items.length - 1}
							<Link
								goto={item.path!}
								placeholder={item.label}
								popup="full"
							/>

							<span class="breadcrumbs__separator" aria-hidden="true">
								/
							</span>
						{:else}
							<span class="breadcrumbs__current" aria-current="page">
								{item.label}
							</span>
						{/if}
					</li>
				{/each}
			</ol>
		</nav>
	</div>
{/if}

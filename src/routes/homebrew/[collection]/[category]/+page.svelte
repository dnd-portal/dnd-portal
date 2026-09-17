<script lang="ts">
	import PageCard from '$lib/svelte/components/PageCard.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import { page } from '$app/state';
	import {
		getHomebrewMagicItemPagePath,
		getHomebrewMagicItems
	} from '$lib/typescript/data/internals/homebrew/_index_';

	let category = $derived(page.params.category);
	let items = $derived(getHomebrewMagicItems(page.params.collection ?? '', category ?? ''));
</script>

<article class="wiki-article">
	<PageHeader />

	<section class="wiki-article__section" id="homebrew-category" aria-labelledby="homebrew-category-title">
		<h2 id="homebrew-category-title">{category === 'magic-items' ? 'Magic Items' : category}</h2>
		{#if items.length}
			<div class="wiki-article__image-cards">
				{#each items as item}
					{@const itemPage = getHomebrewMagicItemPagePath(page.params.collection ?? '', item.slug)}
					{#if itemPage}
						<PageCard
							page={itemPage}
							variant="image"
							eyebrow={`${item.type} · ${item.rarity}${item.attunement ? ' · Requires attunement' : ''}`}
						/>
					{/if}
				{/each}
			</div>
		{:else}
			<p>This homebrew category is ready for its entries to be added.</p>
		{/if}
	</section>
</article>

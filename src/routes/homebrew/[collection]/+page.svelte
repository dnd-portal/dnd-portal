<script lang="ts">
	import PageCard from '$lib/svelte/components/PageCard.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import { page } from '$app/state';

	const collectionCards = {
		eldor: ['internals.homebrew.eldor.magicItems.page']
	} as const;

	let cards = $derived(collectionCards[page.params.collection as keyof typeof collectionCards] ?? []);
</script>

<article class="wiki-article">
	<PageHeader />

	<section class="wiki-article__section" id="homebrew-content" aria-labelledby="homebrew-content-title">
		<h2 id="homebrew-content-title">Available content</h2>
		<div class="wiki-article__image-cards">
			{#each cards as card}
				<PageCard page={card} variant="icon" />
			{/each}
		</div>
	</section>
</article>

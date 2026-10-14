<script lang="ts">
	import PageCard from '$lib/svelte/components/PageCard.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import { homebrewCollections } from '$lib/typescript/data/internals/homebrew/_index_';
</script>

<article class="wiki-article">
	<PageHeader />

	<section class="wiki-article__section" id="homebrew-collections" aria-labelledby="homebrew-collections-title">
		<h2 id="homebrew-collections-title">Collections</h2>
		<div class="wiki-article__image-cards">
			{#each homebrewCollections as collection}
				<PageCard page={collection} variant="icon" />
			{/each}
		</div>
	</section>
</article>

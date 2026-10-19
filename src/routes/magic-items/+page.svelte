<script lang="ts">
	import PageCard from '$lib/svelte/components/PageCard.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';

	const itemPage = 'internals.magicItems.mimicStick' as const;
</script>

<article class="wiki-article">
	<PageHeader />
	<section class="wiki-article__section" id="magic-items" aria-labelledby="magic-items-title">
		<h2 id="magic-items-title">Magic Items</h2>
		<div class="wiki-article__image-cards">
			<PageCard page={itemPage} variant="image" />
		</div>
	</section>
</article>

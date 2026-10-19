<script lang="ts">
	import PageCard from '$lib/svelte/components/PageCard.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
</script>

<article class="wiki-article">
	<PageHeader />
	<section class="wiki-article__section" id="companions" aria-labelledby="companions-title">
		<h2 id="companions-title">Companions</h2>
		<div class="wiki-article__image-cards">
			<PageCard page="internals.homebrew.eldor.companions.puddleSlime" variant="image" />
		</div>
	</section>
</article>

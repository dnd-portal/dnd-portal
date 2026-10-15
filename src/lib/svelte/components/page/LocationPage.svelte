<script lang="ts">
	import type {
		PageContentSection as PageContentSectionData,
		PageTableOfContentsSection
	} from '$lib/typescript/data/_index_';
	import PageContentSection from './PageContentSection.svelte';
	import PageHeader from './PageHeader.svelte';
	import TableOfContents from './TableOfContents.svelte';

	let {
		sections,
		tableOfContents
	}: {
		sections: readonly PageContentSectionData[];
		tableOfContents: readonly PageTableOfContentsSection[];
	} = $props();
</script>

<div class="page-layout">
	<article class="wiki-article page-layout__article">
		<PageHeader />

		{#each sections as section}
			<PageContentSection {section} />
		{/each}
	</article>

	{#if tableOfContents.length}
		<aside class="page-layout__toc">
			<TableOfContents sections={tableOfContents} />
		</aside>
	{/if}
</div>

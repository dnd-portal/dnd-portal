<!--
	Location: src/routes/classes/barbarian/[subclass]/+page.svelte
	Use: Data-driven Barbarian subclass pages.
-->
<script lang="ts">
	import { getCurrentPageContext } from '$lib/svelte/context/currentPage';
	import type {
		PageContentSection as PageContentSectionData,
		PageTableOfContentsSection
	} from '$lib/typescript/data/_index_';

	import PageContentSection from '$lib/svelte/components/page/PageContentSection.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import TableOfContents from '$lib/svelte/components/page/TableOfContents.svelte';
	import Faq from '$lib/svelte/components/page/Faq.svelte';
	import type { LinkPath } from '$lib/typescript/data/_index_';
	import { getFaqGroupBySourcePage } from '$lib/typescript/data/internals/faq';

	type SubclassPageContent = {
		readonly source: string;
		readonly featureSections: readonly PageContentSectionData[];
		readonly tableOfContents: readonly PageTableOfContentsSection[];
	};

	function isRecord(value: unknown): value is Readonly<Record<string, unknown>> {
		return typeof value === 'object' && value !== null && !Array.isArray(value);
	}

	function isSubclassPageData(
		value: unknown
	): value is { readonly content: SubclassPageContent } {
		return isRecord(value) && isRecord(value.content);
	}

	const currentPage = getCurrentPageContext();
	let content = $derived(
		isSubclassPageData(currentPage.data) ? currentPage.data.content : null
	);
	let faqGroup = $derived(getFaqGroupBySourcePage(currentPage.path));
	let faqItems = $derived(faqGroup?.questions.map((question) => ({
		question: question.question,
		answer: question.shortAnswer,
		reference: faqGroup.sourcePage as LinkPath,
		referenceLabel: faqGroup.title,
		faqPath: `internals.faq.${faqGroup.slug}.${question.slug}` as LinkPath
	})) ?? []);
</script>

{#if content}
	<div class="page-layout">
		<article class="wiki-article page-layout__article">
			<PageHeader />

			{#each content.featureSections as section}
				<PageContentSection {section} />
			{/each}

			{#if faqItems.length}
				<Faq items={faqItems} />
			{/if}
		</article>

		<aside class="page-layout__toc">
			<TableOfContents sections={content.tableOfContents} />
		</aside>
	</div>
{/if}

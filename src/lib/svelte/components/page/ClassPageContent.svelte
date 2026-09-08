<!--
	Location: src/lib/svelte/components/page/ClassPageContent.svelte
	Use: Renders reusable class page content from central class data.
-->
<script lang="ts">
	import type {
		EquipmentChoiceGroup,
		LinkPath,
		PageContentSection as PageContentSectionData,
		PageTableOfContentsSection,
		ProgressionData
	} from '$lib/typescript/data/_index_';

	import PageContentSection from './PageContentSection.svelte';
	import Faq from './Faq.svelte';
	import PageHeader from './PageHeader.svelte';
	import ProgressionTable from './ProgressionTable.svelte';
	import StartingEquipment from './StartingEquipment.svelte';
	import TableOfContents from './TableOfContents.svelte';
	import { getCurrentPageContext } from '$lib/svelte/context/currentPage';
	import { getFaqGroup } from '$lib/typescript/data/internals/faq';

	type ClassPageContentData = {
		readonly startingEquipment: readonly EquipmentChoiceGroup[];
		readonly progression: ProgressionData<string>;
		readonly sections: {
			readonly identity: PageContentSectionData;
			readonly coreTraits: PageContentSectionData;
			readonly detailSections?: readonly PageContentSectionData[];
			readonly classFeaturesOverview: PageContentSectionData;
			readonly featureSections: readonly PageContentSectionData[];
			readonly subclasses: PageContentSectionData;
			readonly referenceSections?: readonly PageContentSectionData[];
		};
		readonly tableOfContents: readonly PageTableOfContentsSection[];
	};

	let { content }: { content: ClassPageContentData } = $props();
	const currentPage = getCurrentPageContext();
	let faqGroup = $derived(currentPage.path ? getFaqGroup(currentPage.path.split('.')[2] ?? '') : null);
	let faqItems = $derived(faqGroup?.questions.map((question) => ({
		question: question.question,
		answer: question.shortAnswer,
		reference: faqGroup.sourcePage ?? currentPage.path ?? '',
		referenceLabel: faqGroup.title,
		faqPath: `internals.faq.${faqGroup.slug}.${question.slug}`
	})) ?? []);

	let linkedSectionIds = $derived([
		content.sections.identity.id,
		content.sections.coreTraits.id,
		...(content.sections.detailSections ?? []).map((section) => section.id),
		'starting-equipment',
		'progression',
		content.sections.classFeaturesOverview.id,
		...content.sections.featureSections.map((section) => section.id),
		content.sections.subclasses.id,
		...(content.sections.referenceSections ?? []).map((section) => section.id)
	]);
</script>

<div class="page-layout">
	<article class="wiki-article page-layout__article">
		<PageHeader />

		<PageContentSection section={content.sections.identity} />
		<PageContentSection section={content.sections.coreTraits} />

		{#each content.sections.detailSections ?? [] as section}
			<PageContentSection {section} />
		{/each}

		<StartingEquipment
			groups={content.startingEquipment}
			section={{
				id: 'starting-equipment',
				title: 'Starting Equipment'
			}}
		/>

		<ProgressionTable
			data={content.progression}
			{linkedSectionIds}
			section={{
				id: 'progression',
				title: content.progression.heading ?? 'Class Progression'
			}}
		/>

		<PageContentSection section={content.sections.classFeaturesOverview} />

		{#each content.sections.featureSections as section}
			<PageContentSection {section} headingLevel="subsection" />
		{/each}

		<PageContentSection section={content.sections.subclasses} />

		{#each content.sections.referenceSections ?? [] as section}
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

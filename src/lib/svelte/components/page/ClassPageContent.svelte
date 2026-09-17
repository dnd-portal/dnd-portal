<!--
	Location: src/lib/svelte/components/page/ClassPageContent.svelte
	Use: Renders reusable class page content from central class data.
-->
<script lang="ts">
	import type { ClassPageContentData } from '$lib/typescript/pages/class-content-types';
	import type { InlineContentBlock } from '$lib/typescript/pages/content-types';

	import PageContentSection from './PageContentSection.svelte';
	import ClassFeatures from './ClassFeatures.svelte';
	import ClassTraitCards from './ClassTraitCards.svelte';
	import ClassQuickLinks from './ClassQuickLinks.svelte';
	import Faq from './Faq.svelte';
	import PageHeader from './PageHeader.svelte';
	import ProgressionTable from './ProgressionTable.svelte';
	import StartingEquipment from './StartingEquipment.svelte';
	import TableOfContents from './TableOfContents.svelte';
	import type { Snippet } from 'svelte';
	import { getCurrentPageContext } from '$lib/svelte/context/currentPage';
	import { getFaqGroup } from '$lib/typescript/data/internals/faq';

	let {
		content,
		header,
		headerMeta
	}: {
		content: ClassPageContentData;
		header?: {
			title: string;
			subtitle: string;
			description: string;
			descriptionContent?: InlineContentBlock
		};
		headerMeta?: Snippet
	} = $props();
	const currentPage = getCurrentPageContext();
	let faqGroup = $derived(currentPage.path ? getFaqGroup(currentPage.path.split('.')[2] ?? '') : null);
	let generatedFaqItems = $derived(faqGroup?.questions.map((question) => ({
		question: question.question,
		answer: question.shortAnswer,
		reference: faqGroup.sourcePage ?? currentPage.path ?? '',
		referenceLabel: faqGroup.title,
		faqPath: `internals.faq.${faqGroup.slug}.${question.slug}`
	})) ?? []);
	let faqItems = $derived(content.faqItems ?? generatedFaqItems);

	let linkedSectionIds = $derived([
		content.sections.identity.id,
		content.sections.coreTraits.id,
		...(content.sections.detailSections ?? []).map((section) => section.id),
		'starting-equipment',
		'progression',
		content.sections.classFeaturesOverview.id,
		...content.sections.featureSections.map((section) => section.id),
		...(content.sections.subclasses ? [content.sections.subclasses.id] : []),
		...(content.sections.referenceSections ?? []).map((section) => section.id)
	]);

	const traitIcons: Record<string, string> = {
		'Primary Ability': '/icons/white/attribute/bonus.svg',
		'Hit Die': '/icons/white/entity/book.svg',
		'Hit Dice': '/icons/white/entity/book.svg',
		'Saving Throws': '/icons/white/attribute/saving-throw.svg',
		Skills: '/icons/white/attribute/skillcheck.svg',
		Weapons: '/icons/white/weapon/sword.svg',
		Armor: '/icons/white/attribute/ac.svg',
		Alignment: '/icons/white/attribute/skillcheck.svg',
		'Base Attack Bonus': '/icons/white/attribute/bonus.svg',
		'Good Save': '/icons/white/attribute/saving-throw.svg'
	};

	let coreTraitCards = $derived(
		content.sections.coreTraits.blocks.flatMap((block) => {
			if (block.type === 'table' && !Array.isArray(block.columns)) {
				return block.rows.map((row) => ({
					label: row.label,
					value: row.value,
					layout: row.layout && typeof row.layout === 'object' && !Array.isArray(row.layout)
						? row.layout
						: undefined
				}));
			}

			if (block.type === 'field-list') {
				return block.items
					.filter((field) => field.content)
					.map((field) => {
						const items = field.label === 'Skills'
							? field.content!
								.filter((node) => node.type === 'link')
								.map((node) => [node])
							: undefined;
						const value =
							field.label === 'Skills'
								? field.content!.filter((node, index) => node.type === 'text' && index === 0)
								: field.content!;
						return { label: field.label, value, items, layout: field.layout };
					});
			}

			return [];
		})
	);
	let tableOfContents = $derived(
		content.tableOfContents.filter((section) => section.id !== 'implementation-identity').map((section) => ({
			...section,
			id:
				section.id === 'implementation-identity'
					? 'identity'
					: section.id === 'core-class-traits'
						? 'core-traits'
						: section.id,
			children: section.children?.map((child) => ({
				...child,
				id:
					child.id === 'implementation-identity'
						? 'identity'
						: child.id === 'core-class-traits'
							? 'core-traits'
							: child.id
			}))
		}))
	);
</script>

<div class="page-layout">
	<article class="wiki-article page-layout__article">
		<PageHeader
			 titleText={header?.title}
			subtitleText={header?.subtitle}
			descriptionText={header?.description}
			 descriptionContent={header?.descriptionContent}
			showHeaderSections={false}
			headerMeta={headerMeta}
		/>

		{#if content.quickLinks?.length}
			<ClassQuickLinks links={content.quickLinks.map((link) => [link.href, link.title, link.description, link.icon])} />
		{/if}

		<section
			class="core-traits"
			id={content.sections.coreTraits.id === 'core-class-traits' ? 'core-traits' : content.sections.coreTraits.id}
			aria-labelledby={`${content.sections.coreTraits.id === 'core-class-traits' ? 'core-traits' : content.sections.coreTraits.id}-title`}
		>
			<header class="class-section-heading">
				<h2 id={`${content.sections.coreTraits.id === 'core-class-traits' ? 'core-traits' : content.sections.coreTraits.id}-title`}>
					{content.sections.coreTraits.title}
				</h2>
				{#if content.sections.coreTraits.subtitle}
					<p>{content.sections.coreTraits.subtitle}</p>
				{/if}
			</header>
			<ClassTraitCards traits={coreTraitCards} icons={traitIcons} />
		</section>

		{#each content.sections.detailSections ?? [] as section}
			<PageContentSection {section} />
		{/each}

		<StartingEquipment
			groups={content.startingEquipment}
			intro={content.startingEquipmentIntro}
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

		<ClassFeatures
			overview={content.sections.classFeaturesOverview}
			sections={content.sections.featureSections}
			progression={content.progression}
		/>

		{#if content.sections.subclasses}
			<PageContentSection section={content.sections.subclasses} />
		{/if}

		{#each content.sections.referenceSections ?? [] as section}
			<PageContentSection {section} />
		{/each}

		{#if faqItems.length}
			<Faq items={faqItems} />
		{/if}
	</article>

	<aside class="page-layout__toc">
		<TableOfContents sections={tableOfContents} />
	</aside>
</div>

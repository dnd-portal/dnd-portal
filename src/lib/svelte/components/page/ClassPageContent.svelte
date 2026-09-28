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
	import PageActions from './PageActions.svelte';
	import type { PageAction } from '$lib/typescript/pages/page-actions';
	import type { Snippet } from 'svelte';
import type { FaqItem } from '$lib/typescript/pages/faq';

	let {
		content,
		header,
		headerMeta,
		faqItems: providedFaqItems
	}: {
		content: ClassPageContentData;
		header?: {
			title: string;
			subtitle: string;
			description: string;
			descriptionContent?: InlineContentBlock
		};
		headerMeta?: Snippet;
		faqItems?: readonly FaqItem[]
	} = $props();
	let faqItems = $derived(providedFaqItems ?? content.faqItems ?? []);
	let tocOpen = $state(true);

	function jumpToTop(): void {
		window.scrollTo({
			top: 0,
			behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
		});
	}

	const pageActions: readonly PageAction[] = [
		{
			id: 'toc',
			label: 'Table of Contents',
			icon: '/icons/white/util/build.svg',
			onActivate: () => (tocOpen = !tocOpen)
		},
		{
			id: 'top',
			label: 'Jump to top',
			icon: '/icons/white/util/chevron-up.svg',
			onActivate: jumpToTop
		}
	];

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
	function toTableOfContentsSection(section: { id: string; title: string; icon?: string }) {
		return {
			id: section.id === 'core-class-traits' ? 'core-traits' : section.id,
			title: section.title,
			icon: section.icon
		};
	}

	function getFeatureIcon(title: string) {
		const normalizedTitle = title.toLowerCase();
		if (normalizedTitle.includes('rage')) return '/icons/white/d20test/attacking.svg';
		if (normalizedTitle.includes('armor') || normalizedTitle.includes('defense')) return '/icons/white/attribute/ac.svg';
		if (normalizedTitle.includes('weapon') || normalizedTitle.includes('attack') || normalizedTitle.includes('strike')) return '/icons/white/weapon/strike.svg';
		if (normalizedTitle.includes('movement') || normalizedTitle.includes('pounce')) return '/icons/white/movement/walking.svg';
		if (normalizedTitle.includes('sense') || normalizedTitle.includes('instinct')) return '/icons/white/attribute/vision.svg';
		return '/icons/white/attribute/bonus.svg';
	}

	function getFeatureLevelBySectionId() {
		return new Map(
			content.progression.rows.flatMap((row) =>
				row.features
					.filter((feature) => feature.sectionId)
					.map((feature) => [feature.sectionId!, row.level] as const)
			)
		);
	}

	function createFeatureTocGroups() {
		const levelBySectionId = getFeatureLevelBySectionId();
		const grouped = new Map<number | null, Array<(typeof content.sections.featureSections)[number]>>();

		for (const section of content.sections.featureSections) {
			const level = levelBySectionId.get(section.id) ?? null;
			const group = grouped.get(level) ?? [];
			group.push(section);
			grouped.set(level, group);
		}

		return [...grouped.entries()]
			.sort(([firstLevel], [secondLevel]) => {
				if (firstLevel === null) return 1;
				if (secondLevel === null) return -1;
				return firstLevel - secondLevel;
			})
			.map(([level, sections]) => ({
			id: `class-features-level-${level ?? 'additional'}`,
			title: level === null ? 'Additional features' : `Level ${level}`,
			isGroup: true,
			children: sections.map((section) => ({
				...toTableOfContentsSection(section),
				icon: section.icon ?? getFeatureIcon(section.title)
			}))
			}));
	}

	let tableOfContents = $derived([
		toTableOfContentsSection(content.sections.coreTraits),
		...(content.sections.detailSections ?? []).map(toTableOfContentsSection),
		toTableOfContentsSection({ id: 'starting-equipment', title: 'Starting Equipment' }),
		toTableOfContentsSection({
			id: 'progression',
			title: 'Progression Table'
		}),
		{
			...toTableOfContentsSection(content.sections.classFeaturesOverview),
			children: createFeatureTocGroups()
		},
		...(content.sections.subclasses
			? [toTableOfContentsSection(content.sections.subclasses)]
			: []),
		...(content.sections.referenceSections ?? []).map(toTableOfContentsSection),
		...(faqItems.length ? [{ id: 'faq', title: 'FAQ' }] : [])
	]);
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
		<TableOfContents sections={tableOfContents} isOpen={tocOpen} onOpenChange={(value) => (tocOpen = value)} />
	</aside>
</div>

{#if tableOfContents.length >= 3}
	<PageActions actions={pageActions} />
{/if}

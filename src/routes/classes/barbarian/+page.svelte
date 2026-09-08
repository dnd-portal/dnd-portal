<!--
	Location: src/routes/classes/barbarian/+page.svelte
	Use: Data-driven Barbarian page proof of concept.
-->
<script lang="ts">
	import { getData } from '$lib/typescript/data/_index_';

	import PageContentSection from '$lib/svelte/components/page/PageContentSection.svelte';
	import Faq from '$lib/svelte/components/page/Faq.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import ProgressionTable from '$lib/svelte/components/page/ProgressionTable.svelte';
	import StartingEquipment from '$lib/svelte/components/page/StartingEquipment.svelte';
	import TableOfContents from '$lib/svelte/components/page/TableOfContents.svelte';
	import TraitTable from '$lib/svelte/components/page/TraitTable.svelte';
	import InlineContent from '$lib/svelte/components/page/InlineContent.svelte';
	import { barbarianFaqEntries } from '$lib/typescript/data/internals/faq';

	const barbarian = getData('internals.classes.barbarian');
	const classFeatureOverview = barbarian.content.classFeatureSections[0];
	const coreTraitSections = barbarian.content.classFeatureSections.slice(1, 3);
	const classFeatureSections = barbarian.content.classFeatureSections.slice(3);
	const longDescription = barbarian.page.descriptions.long ?? [];
	const linkedSectionIds = [
		barbarian.content.sections.progression.id,
		barbarian.content.sections.coreTraits.id,
		barbarian.content.sections.startingEquipment.id,
		...barbarian.content.classFeatureSections.map((section) => section.id)
	];
	const classInformationIcons: Record<string, string> = {
		'Primary Ability': '/icons/white/attribute/bonus.svg',
		'Hit Dice': '/icons/white/entity/book.svg',
		'Saving Throws': '/icons/white/attribute/saving-throw.svg',
		Armor: '/icons/white/attribute/ac.svg',
		Weapons: '/icons/white/weapon/sword.svg',
		Multiclass: '/icons/white/entity/person.svg'
	};
	const classInformationTraits = barbarian.content.coreTraits.traits
		.filter((trait) => trait.label !== 'Skills')
		.map((trait) => ({
			...trait,
			value: trait.label === 'Hit Dice' ? [{ type: 'text' as const, text: 'd12' }] : trait.value
		}));
	const multiclassSummary = [
		barbarian.page.header?.sections?.[0]?.content?.[1],
		{ type: 'text' as const, text: ' 13' }
	].filter((node): node is NonNullable<typeof node> => Boolean(node));
</script>

	<div class="page-layout page-layout--barbarian">
	<article class="wiki-article page-layout__article">
		<PageHeader
			description="short"
			descriptionText={barbarian.page.descriptions.short}
			showHeaderSections={false}
		>
			<nav class="quick-links" aria-label="Quick links">
				<h2>Quick links</h2>
				<a href="#class-features"><img src="/icons/white/util/build.svg" alt="" aria-hidden="true" />Features</a>
				<a href="#progression"><img src="/icons/white/util/trade.svg" alt="" aria-hidden="true" />Progression</a>
				<a href="#subclasses"><img src="/icons/white/game/party.svg" alt="" aria-hidden="true" />Subclasses</a>
				<a href="#starting-equipment"><img src="/icons/white/entity/pack.svg" alt="" aria-hidden="true" />Starting Equipment</a>
			</nav>
		</PageHeader>

		<section class="class-overview" id="multiclassing" aria-label="Class overview">
			<div class="class-overview__about barbarian-about" aria-labelledby="about-barbarian-title">
				<h2 id="about-barbarian-title">About the Barbarian</h2>
				{#each Array.isArray(longDescription[0]) ? longDescription : [longDescription] as paragraph}
					<p><InlineContent content={paragraph} /></p>
				{/each}
				{#if barbarian.page.sourceMetadata?.length}
					<div class="source-metadata" aria-label="Source metadata">
						{#each barbarian.page.sourceMetadata as source}
							<span class="source-metadata__badge">
								{#if source.icon}<img src={source.icon} alt="" aria-hidden="true" />{/if}
								{source.label}: {source.value}
							</span>
						{/each}
					</div>
				{/if}
				<details class="campaign-notes">
					<summary>
						<img src="/icons/white/entity/person.svg" alt="" aria-hidden="true" />
						<span>Campaign notes &amp; variants</span>
						<span class="campaign-notes__count">{barbarian.page.campaignNotes?.length ?? 0} campaign-specific rules</span>
					</summary>
					{#if barbarian.page.campaignNotes?.length}
						{#each barbarian.page.campaignNotes as note}
							<div class="campaign-notes__entry">
								<strong>{note.party}</strong>{#if note.title} — {note.title}{/if}
								{#each Array.isArray(note.content[0]) ? note.content : [note.content] as paragraph}
									<p><InlineContent content={paragraph} /></p>
								{/each}
							</div>
						{/each}
					{:else}
						<p>No campaign-specific rules</p>
					{/if}
				</details>
			</div>
			<aside class="class-overview__information class-information">
				<h2>Class Information</h2>
				<dl class="class-information__list">
					{#each classInformationTraits as trait}
						<div>
							<dt>
								<img src={classInformationIcons[trait.label]} alt="" aria-hidden="true" />
								{trait.label === 'Hit Dice' ? 'Hit Die' : trait.label}
							</dt>
							<dd><InlineContent content={trait.value} /></dd>
						</div>
					{/each}
					<div>
						<dt><img src={classInformationIcons.Multiclass} alt="" aria-hidden="true" />Multiclass</dt>
						<dd><InlineContent content={multiclassSummary} /></dd>
					</div>
				</dl>
			</aside>
		</section>

		<hr class="class-divider" />

		<section
			class="wiki-article__section"
			id={barbarian.content.sections.coreTraits.id}
			aria-labelledby={`${barbarian.content.sections.coreTraits.id}-title`}
		>
			<h2 id={`${barbarian.content.sections.coreTraits.id}-title`}>
				{barbarian.content.sections.coreTraits.title}
			</h2>
		</section>

		{#each coreTraitSections as section}
			<PageContentSection {section} headingLevel="subsection" />
		{/each}

		<StartingEquipment
			groups={barbarian.content.coreTraits.startingEquipment}
			intro={barbarian.content.startingEquipmentIntro}
			section={barbarian.content.sections.startingEquipment}
			headingLevel="subsection"
		/>

		<ProgressionTable
			data={barbarian.content.progression}
			{linkedSectionIds}
			section={{ ...barbarian.content.sections.progression, title: 'Barbarian Progression' }}
		/>

		<PageContentSection section={classFeatureOverview} />

		{#each classFeatureSections as section}
			{#if section.id === 'primal-path'}
				<div id="subclasses">
					<PageContentSection {section} headingLevel="subsection" />
				</div>
			{:else}
				<PageContentSection {section} headingLevel="subsection" />
			{/if}
		{/each}

		<Faq items={barbarianFaqEntries} />
	</article>

	<aside class="page-layout__toc">
		<TableOfContents sections={barbarian.content.tableOfContents} />
	</aside>
</div>

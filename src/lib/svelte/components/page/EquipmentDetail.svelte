<!-- Detailed generic equipment and magic-item page. -->
<script lang="ts">
	import type {
		EquipmentImage,
		EquipmentItem,
		EquipmentStatistic
	} from '$lib/typescript/data/internals/equipment-items';
	import type { InlineContent, PageContentSection as PageContentSectionData } from '$lib/typescript/data/_index_';

	import InlineContentRenderer from './InlineContent.svelte';
	import PageContentSection from './PageContentSection.svelte';
	import TableOfContents from './TableOfContents.svelte';
	import TraitTable from './TraitTable.svelte';

	type DetailItem = EquipmentItem & {
		readonly artwork?: EquipmentImage;
		readonly content?: readonly PageContentSectionData[];
	};

	let { item }: { item: DetailItem } = $props();
	let artwork: EquipmentImage = $derived(item.artwork ?? item.img);

	function text(value: string): InlineContent {
		return [{ type: 'text', text: value }];
	}

	function joinInlineContent(values: readonly InlineContent[]): InlineContent {
		return values.flatMap((value, index) => [...(index > 0 ? text(', ') : []), ...value]);
	}

	function attunementText(): InlineContent {
		if (!item.attunement) return text('No attunement');
		if (item.attunement === true || !item.attunement.restriction) return text('Requires attunement');
		return [...text('Requires attunement '), ...item.attunement.restriction];
	}

	let contentSections = $derived(item.content ?? []);
	let quickFacts = $derived([
		{ label: 'Item Type', value: text(item.type) },
		{ label: 'Rarity', value: text(item.rarity) },
		{ label: 'Attunement', value: text(item.attunement ? 'Required' : 'Not required') },
		...(item.activation ? [{ label: 'Activation', value: text(item.activation) }] : []),
		...(item.charges ? [{ label: 'Charges', value: text(item.charges.maximum) }] : []),
		...(item.charges?.recharge ? [{ label: 'Recharge', value: text(item.charges.recharge) }] : [])
	]);
	let tableStats = $derived<readonly EquipmentStatistic[]>(item.statistics ?? [
		{ label: 'Name', value: text(item.name) },
		{ label: 'Type', value: text(item.type) },
		...(item.cost ? [{ label: 'Cost', value: text(item.cost) }] : []),
		...(item.damage ? [{ label: 'Damage', value: item.damage }] : []),
		...(item.weight ? [{ label: 'Weight', value: text(item.weight) }] : []),
		...(item.activation ? [{ label: 'Activation', value: text(item.activation) }] : []),
		...(item.requirements ? [{ label: 'Requirements', value: item.requirements }] : []),
		...(item.charges ? [{ label: 'Charges', value: text(item.charges.maximum) }] : []),
		...(item.charges?.recharge ? [{ label: 'Recharge', value: text(item.charges.recharge) }] : []),
		...(item.properties?.length ? [{ label: 'Properties', value: joinInlineContent(item.properties) }] : []),
		{ label: 'Rarity', value: text(item.rarity) },
		{ label: 'Attunement', value: attunementText() },
		{ label: 'Source', value: text(item.source) }
	]);
	let tableOfContents = $derived([
		{ id: 'equipment-description', title: 'Overview' },
		...contentSections.map((section) => ({ id: section.id, title: section.title })),
		...(item.notes?.length ? [{ id: 'equipment-notes', title: 'Notes' }] : []),
		{ id: 'equipment-statistics', title: 'Equipment Statistics' }
	]);
</script>

<div class="page-layout equipment-detail-layout">
	<article class="wiki-article page-layout__article equipment-detail">
		<header class="equipment-detail__header">
			<div class="equipment-detail__intro">
				<p class="equipment-detail__eyebrow">{item.source} Reference</p>
				<h1>{item.name}</h1>
				<p class="equipment-detail__description"><InlineContentRenderer content={item.description} /></p>
				<dl class="equipment-detail__meta" aria-label={`${item.name} summary`}>
					{#each quickFacts.slice(0, 4) as fact}
						<div><dt>{fact.label}</dt><dd><InlineContentRenderer content={fact.value} /></dd></div>
					{/each}
				</dl>
			</div>
			<figure class="equipment-detail__media" aria-label={`${item.name} artwork`}>
				<img src={artwork.href} alt={artwork.alt} />
			</figure>
		</header>

		<section class="equipment-detail__section" id="equipment-description" aria-labelledby="equipment-description-title">
			<header class="equipment-detail__section-heading"><h2 id="equipment-description-title">Overview</h2></header>
			<p><InlineContentRenderer content={item.description} /></p>
		</section>

		<section class="equipment-detail__section equipment-detail__facts" aria-labelledby="equipment-facts-title">
			<header class="equipment-detail__section-heading"><h2 id="equipment-facts-title">Quick Facts</h2></header>
			<div class="equipment-detail__fact-grid">
				{#each quickFacts as fact}
					<dl class="equipment-detail__fact"><dt>{fact.label}</dt><dd><InlineContentRenderer content={fact.value} /></dd></dl>
				{/each}
			</div>
		</section>

		{#if item.mastery}
			<section class="equipment-detail__section" id="equipment-mastery" aria-labelledby="equipment-mastery-title">
				<header class="equipment-detail__section-heading"><h2 id="equipment-mastery-title">Weapon Mastery</h2></header>
				<p><strong>{item.mastery.name}.</strong> <InlineContentRenderer content={item.mastery.description} /></p>
			</section>
		{/if}

		{#if contentSections.length}
			{#each contentSections as section}<PageContentSection {section} />{/each}
		{/if}

		{#if item.notes?.length}
			<section class="equipment-detail__section" id="equipment-notes" aria-labelledby="equipment-notes-title">
				<header class="equipment-detail__section-heading"><h2 id="equipment-notes-title">Notes</h2></header>
				<p><InlineContentRenderer content={item.notes} /></p>
			</section>
		{/if}

		<section class="equipment-detail__section" id="equipment-statistics" aria-labelledby="equipment-statistics-title">
			<header class="equipment-detail__section-heading"><h2 id="equipment-statistics-title">Equipment Statistics</h2></header>
			<div class="table-scroller"><TraitTable caption={`${item.name} statistics`} columns={{ label: 'Property', value: 'Value' }} rows={tableStats} /></div>
		</section>

		{#if item.tags.length}
			<section class="equipment-detail__section" aria-labelledby="equipment-tags-title">
				<header class="equipment-detail__section-heading"><h2 id="equipment-tags-title">Tags</h2></header>
				<ul class="equipment-detail__tags">{#each item.tags as tag}<li>{tag}</li>{/each}</ul>
			</section>
		{/if}
	</article>

	<aside class="page-layout__toc"><TableOfContents sections={tableOfContents} /></aside>
</div>

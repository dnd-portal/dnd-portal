<script lang="ts">
	import { acidSplash35e, spellSources } from '$lib/typescript/data/internals/rules/spellcasting/spells/_index_';
	import { acidSplash35eFaq } from '$lib/typescript/data/internals/spells/acid-splash/3-5e/faq/_index_';
	import acidSplash3e from '$lib/typescript/data/internals/spells/acid-splash/3e/3e';
	import { acidSplash3eFaq } from '$lib/typescript/data/internals/spells/acid-splash/3e/faq/_index_';
	import type { InlineContentNode } from '$lib/typescript/pages/content-types';
	import { damageTypeLinks } from '$lib/typescript/data/internals/classes/barbarian/page';
	import Faq from '$lib/svelte/components/page/Faq.svelte';
	import InlineContent from '$lib/svelte/components/page/InlineContent.svelte';
	import SpellSectionHeading from '$lib/svelte/components/page/SpellSectionHeading.svelte';
	import EditionSelector from '$lib/svelte/components/page/EditionSelector.svelte';

	let { edition = '3-5e' }: { edition?: '3e' | '3-5e' } = $props();
	const text = (value: string): InlineContentNode => ({ type: 'text', text: value });
	const acidSplash3eSummary: readonly InlineContentNode[] = [
		text('Acid Splash is a ranged 0-level spell that creates a small projectile of magical '),
		damageTypeLinks.acid,
		text('. The caster makes a ranged touch attack against one target, dealing '),
		{ type: 'link', path: 'internals.utility.diceRoller', label: '1d3', query: '?d=1d3' },
		text(' acid damage on a hit. The spell allows no saving throw, but the 3e version is subject to spell resistance.')
	];
	let spell = $derived(edition === '3e'
		? {
				...acidSplash3e,
				source: 'magic-of-faerun-3e' as const,
				summary: acidSplash3eSummary,
			content: acidSplash3e.description.map((block) => ({
				type: 'paragraph' as const,
				content: [{ type: 'text' as const, text: block.text }]
			})),
			sections: acidSplash3e.sections.map((section) => ({
				...section,
				blocks: section.blocks.map((block) => ({
					type: 'paragraph' as const,
					content: [{ type: 'text' as const, text: block.content }]
				}))
			}))
		}
		: acidSplash35e);
	let source = $derived(spellSources[spell.source as keyof typeof spellSources] ?? { name: 'Magic of Faerûn', edition: '3e' });

	const formatUnit = (value: string) => value.replaceAll('-', ' ');
	const formatComponents = () =>
		[
			spell.components.verbal ? 'Verbal' : '',
			spell.components.somatic ? 'Somatic' : '',
			spell.components.material ? 'Material' : ''
		]
			.filter(Boolean)
			.join(', ') || 'None';
	const formatRange = () =>
		`${spell.range.type} (${spell.range.base} ${spell.range.unit}; +${spell.range.scaling.distance} ${spell.range.unit} per ${spell.range.scaling.perCasterLevels} caster levels)`;
	let levelLabel = $derived(spell.level === 0 ? 'Cantrip' : String(spell.level));
	const descriptorIcons: Record<string, string> = {
		Acid: '/icons/white/damage/acid.svg',
		Fire: '/icons/white/damage/fire.svg',
		Cold: '/icons/white/damage/cold.svg',
		Necrotic: '/icons/white/damage/necrotic.svg',
		Radiant: '/icons/white/damage/radiant.svg',
		Psychic: '/icons/white/damage/psychic.svg'
	};
	let visualIcon = $derived(descriptorIcons[spell.descriptors[0]] ?? '/icons/white/game/spell.svg');
	const sectionIcons: Record<string, string> = {
		'how-acid-splash-works': '/icons/white/game/spell.svg',
		'range-and-targeting': '/icons/white/combat/target.svg',
		'damage-and-combat-use': '/icons/white/damage/acid.svg',
		'class-availability': '/icons/white/game/party.svg'
	};
	let activeFaq = $derived(edition === '3e' ? acidSplash3eFaq : acidSplash35eFaq);
	let faqItems = $derived(activeFaq.map((item) => ({
		question: item.question,
		answer: item.shortAnswer,
		reference: edition === '3e' ? 'internals.newSpells.acidSplash3e' : 'internals.newSpells.acidSplash35e',
		referenceLabel: `Acid Splash ${edition}`,
		faqPath: `internals.faq.acid-splash-${edition}.${item.slug}`,
		faqLabel: 'Read full explanation'
	})));
</script>

<article class="wiki-article spell-detail new-spell-page">
	<div class="spell-detail__hero">
	<header class="spell-detail__header">
		<p>{levelLabel} - {spell.name} - {spell.edition}</p>
		<h1>{spell.name}</h1>
		<div class="spell-detail__chips" aria-label="Spell source and edition">
			<span class="metadata-pill spell-detail__chip"><img src="/icons/white/game/source-book.svg" alt="" aria-hidden="true" />Source: {source.name}</span>
			<EditionSelector current={edition === '3e' ? '3e' : '3.5e'} options={[{ id: '3.5e', label: '3.5e', href: '/new-spells/acid-splash_3-5e/' }, { id: '3e', label: '3e', href: '/new-spells/acid-splash_3e/' }]} />
		</div>
	</header>
	<div class="spell-detail__visual" aria-hidden="true">
		<img src={visualIcon} alt="" />
	</div>

	<dl class="spell-detail__meta">
		<div><dt><img src="/icons/white/game/spell.svg" alt="" aria-hidden="true" />Level</dt><dd>{levelLabel}</dd></div>
		<div class="spell-detail__meta-card spell-detail__meta-card--school"><dt><img src="/icons/white/entity/spellbook.svg" alt="" aria-hidden="true" />School</dt><dd>{spell.school}</dd></div>
		<div><dt><img src="/icons/white/entity/magic-item.svg" alt="" aria-hidden="true" />Subschool</dt><dd>{spell.subschool}</dd></div>
		<div><dt><img src="/icons/white/damage/acid.svg" alt="" aria-hidden="true" />Descriptor</dt><dd>{spell.descriptors.join(', ')}</dd></div>
		<div><dt><img src="/icons/white/combat/action.svg" alt="" aria-hidden="true" />Casting Time</dt><dd>{spell.castingTime.value} {formatUnit(spell.castingTime.unit)}</dd></div>
		<div><dt><img src="/icons/white/attribute/range.svg" alt="" aria-hidden="true" />Range</dt><dd>{formatRange()}</dd></div>
	</dl>
	</div>

	<dl class="spell-detail__meta spell-detail__meta--full">
		<div><dt><img src="/icons/white/combat/target.svg" alt="" aria-hidden="true" />Effect</dt><dd>{spell.effect}</dd></div>
		<div><dt><img src="/icons/white/entity/time.svg" alt="" aria-hidden="true" />Duration</dt><dd>{formatUnit(spell.duration.type)}</dd></div>
		<div><dt><img src="/icons/white/entity/spellbook.svg" alt="" aria-hidden="true" />Components</dt><dd>{formatComponents()}</dd></div>
		<div><dt><img src="/icons/white/d20test/saving-throw.svg" alt="" aria-hidden="true" />Saving Throw</dt><dd>{spell.savingThrow.allowed ? 'Allowed' : 'None'}</dd></div>
		<div><dt><img src="/icons/white/game/lock.svg" alt="" aria-hidden="true" />Spell Resistance</dt><dd>{spell.spellResistance ? 'Yes' : 'No'}</dd></div>
		<div><dt><img src="/icons/white/classes/wizard.svg" alt="" aria-hidden="true" />Spell Lists</dt><dd>{spell.spellLists.map((entry) => `${entry.class} ${entry.level}`).join(', ')}</dd></div>
		<div><dt><img src="/icons/white/combat/ranged.svg" alt="" aria-hidden="true" />Attack</dt><dd>{formatUnit(spell.attack.type)}</dd></div>
		<div><dt><img src="/icons/white/damage/acid.svg" alt="" aria-hidden="true" />Damage</dt><dd>{spell.damage.dice} {spell.damage.type}</dd></div>
	</dl>

	<section class="spell-detail__section" aria-labelledby="new-spell-description-title">
		<p class="spell-detail__summary"><InlineContent content={spell.summary} /></p>
		<SpellSectionHeading id="new-spell-description-title" title="Description" icon="/icons/white/entity/scroll.svg" />
		{#each spell.content as block}
			{#if block.type === 'paragraph'}
				<p><InlineContent content={block.content} /></p>
			{:else if block.type === 'list'}
				<ul>{#each block.items as item}<li><InlineContent content={item} /></li>{/each}</ul>
			{/if}
		{/each}
	</section>

	{#each spell.sections as section}
		<section class="spell-detail__section" aria-labelledby={section.id}>
			<SpellSectionHeading id={section.id} title={section.title} icon={sectionIcons[section.id]} />
			{#each section.blocks as block}
				{#if block.type === 'paragraph'}
					<p><InlineContent content={block.content} /></p>
				{:else if block.type === 'list'}
					<ul>
						{#each block.items as item}<li><InlineContent content={item} /></li>{/each}
					</ul>
				{/if}
			{/each}
		</section>
	{/each}

	<section class="spell-detail__section new-spell-faq" aria-labelledby="new-spell-faq-title">
		<SpellSectionHeading id="new-spell-faq-title" title="FAQ" icon="/icons/white/util/bubble.svg" />
		<Faq items={faqItems} showHeading={false} />
	</section>
</article>

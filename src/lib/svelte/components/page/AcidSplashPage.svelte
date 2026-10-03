<script lang="ts">
	import { acidSplash35e, spellSources } from '$lib/typescript/data/internals/rules/spellcasting/spells/_index_';
	import { acidSplash35eFaq } from '$lib/typescript/data/internals/spells/acid-splash/3-5e/faq/_index_';
	import acidSplash3e from '$lib/typescript/data/internals/spells/acid-splash/3e/3e';
	import acidSplash2e from '$lib/typescript/data/internals/spells/acid-splash/2e/2e';
	import acidSplash1e from '$lib/typescript/data/internals/spells/acid-splash/1e/1e';
	import acidSplash4e from '$lib/typescript/data/internals/spells/acid-splash/4e/4e';
	import acidSplash5e from '$lib/typescript/data/internals/spells/acid-splash/5e/5e';
	import acidSplash55e from '$lib/typescript/data/internals/spells/acid-splash/5-5e/5-5e';
	import { acidSplash3eFaq } from '$lib/typescript/data/internals/spells/acid-splash/3e/faq/_index_';
	import acidSplash2eFaq from '$lib/typescript/data/internals/spells/acid-splash/2e/faq/_index_';
	import acidSplash1eFaq from '$lib/typescript/data/internals/spells/acid-splash/1e/faq/_index_';
	import { acidSplash4eFaq } from '$lib/typescript/data/internals/spells/acid-splash/4e/faq/_index_';
	import { acidSplash5eFaq } from '$lib/typescript/data/internals/spells/acid-splash/5e/faq/_index_';
	import { acidSplash55eFaq } from '$lib/typescript/data/internals/spells/acid-splash/5-5e/faq/_index_';
	import type { InlineContentNode } from '$lib/typescript/pages/content-types';
	import {
		combatLinks,
		damageTypeLinks,
		equipmentLinks,
		d20TestLinks
	} from '$lib/typescript/data/internals/classes/barbarian/page';
	import Faq from '$lib/svelte/components/page/Faq.svelte';
	import InlineContent from '$lib/svelte/components/page/InlineContent.svelte';
	import SpellSectionHeading from '$lib/svelte/components/page/SpellSectionHeading.svelte';
	import EditionSelector from '$lib/svelte/components/page/EditionSelector.svelte';

	let { edition = '5-5e' }: { edition?: '1e' | '2e' | '3e' | '3-5e' | '4e' | '5e' | '5-5e' } = $props();
	const text = (value: string): InlineContentNode => ({ type: 'text', text: value });
	const textOnly = (node: InlineContentNode & { readonly type: 'link' }): InlineContentNode => ({ ...node, showIcon: false });
	const sorcerer = { type: 'link', path: 'internals.classes.sorcerer.page', label: 'Sorcerer' } as const;
	const wizard = { type: 'link', path: 'internals.classes.wizard.page', label: 'Wizard' } as const;
	const diceRoll = (label: string): InlineContentNode => ({ type: 'link', path: 'internals.utility.diceRoller', label, query: `?d=${label}`, showIcon: false });
	const link3eText = (value: string): readonly InlineContentNode[] => {
		const pattern = /(2d6|1d6|1d3|ranged touch attack|ranged attacks?|touch Armor Class|normal Armor Class|Armor Class|spell resistance|acid damage|acid|caster level|critical hits?|saving throw|attack powers?|armor|shields|natural armor|cover|concealment|Sorcerers?|Wizards?)/g;
		const nodes: InlineContentNode[] = [];
		let lastIndex = 0;
		for (const match of value.matchAll(pattern)) {
			const index = match.index ?? 0;
			if (index > lastIndex) nodes.push(text(value.slice(lastIndex, index)));
			const term = match[0];
			const normalized = term.toLowerCase();
			if (term === '1d3') nodes.push(diceRoll(term));
			else if (normalized === 'acid' || normalized === 'acid damage') nodes.push(normalized === 'acid' ? damageTypeLinks.acid : damageTypeLinks.acid);
			else if (normalized.includes('armor class')) nodes.push(normalized === 'armor class' ? combatLinks.armorClass : textOnly(combatLinks.armorClass));
			else if (normalized === 'ranged touch attack' || normalized === 'ranged attack' || normalized === 'ranged attacks' || normalized === 'attack power' || normalized === 'attack powers') nodes.push(textOnly({ type: 'link', path: 'internals.rules.combat.attackRoll', label: term }));
			else if (normalized === 'spell resistance') nodes.push(text(term));
			else if (normalized === 'saving throw') nodes.push(textOnly(d20TestLinks.savingThrow));
			else if (normalized === 'critical hit' || normalized === 'critical hits') nodes.push(textOnly(combatLinks.criticalHit));
			else if (normalized === 'shields') nodes.push(textOnly(equipmentLinks.shield));
			else if (normalized === 'sorcerer' || normalized === 'sorcerers') nodes.push(sorcerer);
			else if (normalized === 'wizard' || normalized === 'wizards') nodes.push(wizard);
			else nodes.push(text(term));
			lastIndex = index + term.length;
		}
		if (lastIndex < value.length) nodes.push(text(value.slice(lastIndex)));
		return nodes;
	};
	const acidSplash3eSummary: readonly InlineContentNode[] = [
		text('Acid Splash is a ranged 0-level spell that creates a small projectile of magical '),
		damageTypeLinks.acid,
		text('. The caster makes a ranged touch attack against one target, dealing '),
		{ type: 'link', path: 'internals.utility.diceRoller', label: '1d3', query: '?d=1d3' },
		text(' acid damage on a hit. The spell allows no saving throw, but the 3e version is subject to spell resistance.')
	];
	let spell = $derived(edition === '1e'
		? {
				...acidSplash1e,
				source: acidSplash1e.source,
				subschool: undefined,
				descriptors: [],
				range: { type: 'fixed', base: acidSplash1e.range.value, scaling: { distance: 0, perCasterLevels: 1 }, unit: acidSplash1e.range.unit },
				effect: acidSplash1e.areaOfEffect.display,
				savingThrow: { allowed: true },
				spellResistance: acidSplash1e.magicResistance.applies,
				spellLists: [{ class: 'Magic-User', level: acidSplash1e.level }],
				attack: { type: 'saving throw vs. spell' },
				damage: { dice: '1', type: acidSplash1e.damage.type },
				summary: link3eText(acidSplash1e.summary),
				content: acidSplash1e.description.map((block) => ({ type: 'paragraph' as const, content: link3eText(block.text) })),
				sections: acidSplash1e.sections.map((section) => ({ ...section, blocks: section.blocks.map((block) => ({ type: 'paragraph' as const, content: link3eText(block.content) })) }))
			}
		: edition === '2e'
		? {
				...acidSplash2e,
				source: acidSplash2e.source,
				subschool: undefined,
				descriptors: [],
				range: { type: 'fixed', base: acidSplash2e.range.value, scaling: { distance: 0, perCasterLevels: 1 }, unit: acidSplash2e.range.unit },
				effect: acidSplash2e.areaOfEffect.primary,
				savingThrow: { allowed: true },
				spellResistance: false,
				spellLists: [{ class: 'Wizard', level: acidSplash2e.level }],
				attack: { type: 'saving throw vs. spell' },
				damage: { dice: acidSplash2e.damage.primary.dice, type: acidSplash2e.damage.primary.type },
				summary: link3eText(acidSplash2e.summary),
				content: acidSplash2e.description.map((block) => ({ type: 'paragraph' as const, content: link3eText(block.text) })),
				sections: acidSplash2e.sections.map((section) => ({ ...section, blocks: section.blocks.map((block) => ({ type: 'paragraph' as const, content: link3eText(block.content) })) }))
			}
		: edition === '3e'
		? {
				...acidSplash3e,
				source: 'magic-of-faerun-3e' as const,
				summary: acidSplash3eSummary,
			content: acidSplash3e.description.map((block) => ({
				type: 'paragraph' as const,
				content: link3eText(block.text)
			})),
			sections: acidSplash3e.sections.map((section) => ({
				...section,
				blocks: section.blocks.map((block) => ({
					type: 'paragraph' as const,
					content: link3eText(block.content)
				}))
			}))
		}
		: edition === '4e'
			? {
					id: acidSplash4e.id,
					edition: acidSplash4e.edition,
					contentStatus: acidSplash4e.contentStatus,
					source: 'portal-conversion-4e' as const,
					name: acidSplash4e.name,
					level: acidSplash4e.power.level,
					school: acidSplash4e.power.source,
					subschool: acidSplash4e.power.type,
					descriptors: acidSplash4e.keywords,
					castingTime: { value: 1, unit: `${acidSplash4e.action.type}-action` },
					range: { type: acidSplash4e.range.type, base: acidSplash4e.range.squares, scaling: { distance: 0, perCasterLevels: 1 }, unit: 'squares' },
					effect: acidSplash4e.target,
					duration: { type: 'instantaneous' },
					components: { verbal: false, somatic: false, material: false },
					savingThrow: { allowed: false },
					spellResistance: false,
					spellLists: acidSplash4e.classes.map((variant) => ({ class: variant.class, level: variant.level })),
					attack: { type: `vs ${acidSplash4e.attack.defense}` },
					damage: { dice: acidSplash4e.hit.damage.dice, type: acidSplash4e.hit.damage.type },
					summary: link3eText(acidSplash4e.summary),
					content: acidSplash4e.description.map((block) => ({ type: 'paragraph' as const, content: link3eText(block.text) })),
					sections: acidSplash4e.sections.map((section) => ({ ...section, blocks: section.blocks.map((block) => ({ type: 'paragraph' as const, content: link3eText(block.content) })) })),
					faq: acidSplash4e.faq
				}
			: edition === '5-5e'
				? {
						...acidSplash55e,
						source: acidSplash55e.source,
						subschool: undefined,
						descriptors: [],
						range: { type: 'fixed', base: acidSplash55e.range.value, scaling: { distance: 0, perCasterLevels: 1 }, unit: acidSplash55e.range.unit },
						effect: 'A 5-foot-radius Sphere centered on a point within range',
						savingThrow: { allowed: true },
						spellResistance: false,
						attack: { type: 'saving throw' },
						spellLists: acidSplash55e.spellLists,
						summary: link3eText(acidSplash55e.summary),
						content: acidSplash55e.description.map((block) => ({ type: 'paragraph' as const, content: link3eText(block.text) })),
						sections: acidSplash55e.sections.map((section) => ({ ...section, blocks: section.blocks.map((block) => ({ type: 'paragraph' as const, content: link3eText(block.content) })) }))
					}
			: edition === '5e'
				? {
						...acidSplash5e,
						source: acidSplash5e.source,
						subschool: undefined,
						descriptors: [],
						range: { type: 'fixed', base: acidSplash5e.range.value, scaling: { distance: 0, perCasterLevels: 1 }, unit: acidSplash5e.range.unit },
						effect: 'One or two creatures you can see within range',
						savingThrow: { allowed: true },
						spellResistance: false,
						attack: { type: 'saving throw' },
						spellLists: acidSplash5e.spellLists,
						summary: link3eText(acidSplash5e.summary),
						content: acidSplash5e.description.map((block) => ({ type: 'paragraph' as const, content: link3eText(block.text) })),
						sections: acidSplash5e.sections.map((section) => ({ ...section, blocks: section.blocks.map((block) => ({ type: 'paragraph' as const, content: link3eText(block.content) })) }))
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
	const format5eScaling = (damage: typeof acidSplash5e.damage) =>
		[`${damage.dice} ${damage.type}`, ...damage.scaling.levels.map((entry) => `${entry.dice} at level ${entry.level}`)].join('; ');
	const formatPowerDamage = (damage: unknown): string => {
		if (typeof damage === 'string' || typeof damage === 'number') return String(damage);
		if (!damage || typeof damage !== 'object') return '';
		const value = damage as { dice?: unknown; modifier?: unknown; type?: unknown; label?: unknown };
		if (typeof value.label === 'string') return value.label;
		const modifier = value.modifier === 'spellcasting-ability' ? 'spellcasting ability modifier' : value.modifier;
		return [value.dice, modifier, value.type]
			.filter((part): part is string | number => typeof part === 'string' || typeof part === 'number')
			.join(' + ')
			.replace(' + acid', ' acid');
	};
	const formatPowerTarget = (target: { readonly label?: string; readonly type?: string; readonly count?: number } | string) =>
		typeof target === 'string' ? target : target.label ?? `${target.count ?? 1} ${target.type ?? 'target'}`;
	let levelLabel = $derived(spell.level === 0 ? 'Cantrip' : String(spell.level));
	let editionLabel = $derived(spell.edition === '3-5e' ? '3.5e' : spell.edition === '5-5e' ? '5.5e' : spell.edition);
	let eyebrowLevel = $derived(edition === '4e' ? 'Level 1 At-Will Power' : edition === '2e' && spell.level === 1 ? '1st level' : levelLabel);
	let eyebrow = $derived(`${eyebrowLevel} - ${spell.name} - ${editionLabel} - ${source.name}`);
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
		'cantrip-preparation-and-use': '/icons/white/game/spell.svg',
		'range-and-targeting': '/icons/white/combat/target.svg',
		'damage-and-saving-throws': '/icons/white/damage/acid.svg',
		'range-and-area': '/icons/white/attribute/range.svg',
		'damage-and-combat-use': '/icons/white/damage/acid.svg',
		'objects-and-equipment': '/icons/white/entity/tool.svg',
		'class-availability': '/icons/white/game/party.svg',
		'why-this-is-not-a-cantrip': '/icons/white/game/spell.svg',
		'portal-conversion-notes': '/icons/white/entity/book.svg',
		'edition-notes': '/icons/white/entity/book.svg',
		'what-changed-from-2014': '/icons/white/skill/history.svg'
	};
	let activeFaq = $derived(edition === '1e' ? acidSplash1eFaq : edition === '2e' ? acidSplash2eFaq : edition === '3e' ? acidSplash3eFaq : edition === '4e' ? acidSplash4eFaq : edition === '5e' ? acidSplash5eFaq : edition === '5-5e' ? acidSplash55eFaq : acidSplash35eFaq);
	let faqItems = $derived(activeFaq.map((item) => ({
		question: item.question,
		answer: item.shortAnswer,
		reference: 'internals.spells.acidSplash55e',
		referenceLabel: `Acid Splash ${edition}`,
		faqPath: `internals.faq.acid-splash-${edition}.${item.slug}`,
		faqLabel: 'Read full explanation'
	})));
</script>

	<article class="wiki-article spell-detail new-spell-page" class:spell-detail--5e={edition === '5e' || edition === '5-5e'} class:spell-detail--legacy-edition={edition === '1e' || edition === '2e' || edition === '3e' || edition === '3-5e'}>
	<div class="spell-detail__hero">
	<header class="spell-detail__header" class:spell-detail__header--conversion={spell.contentStatus === 'portal-conversion'}>
		<p>{eyebrow}</p>
		<h1>{spell.name}</h1>
		<div class="spell-detail__chips" aria-label="Spell source and edition">
			<span class="metadata-pill spell-detail__chip"><img src="/icons/white/game/source-book.svg" alt="" aria-hidden="true" />Source: {source.name}</span>
			<EditionSelector current={edition === '1e' ? '1e' : edition === '2e' ? '2e' : edition === '3e' ? '3e' : edition === '4e' ? '4e' : edition === '5e' ? '5e' : edition === '5-5e' ? '5.5e' : '3.5e'} options={[{ id: '1e', label: '1e', href: '/spells/acid-splash/1e/' }, { id: '2e', label: '2e', href: '/spells/acid-splash/2e/' }, { id: '3e', label: '3e', href: '/spells/acid-splash/3e/' }, { id: '3.5e', label: '3.5e', href: '/spells/acid-splash/3-5e/' }, { id: '4e', label: '4e', href: '/spells/acid-splash/4e/' }, { id: '5e', label: '5e', href: '/spells/acid-splash/5e/' }, { id: '5.5e', label: '5.5e', href: '/spells/acid-splash/' }]} />
		</div>
	</header>
	</div>

	<div class="spell-detail__overview-flow">
		<div class="spell-detail__visual" aria-hidden="true">
			<img src={visualIcon} alt="" />
		</div>
		<p class="spell-detail__summary"><InlineContent content={spell.summary} /></p>

	<div class="spell-detail__metadata-area">
		<div class="spell-detail__overview-meta">
		{#if edition === '4e'}
		<dl class="spell-detail__meta spell-detail__meta--power">
			<div class="spell-detail__meta-card--compact"><dt><img src="/icons/white/game/spell.svg" alt="" aria-hidden="true" />Power Level</dt><dd>{acidSplash4e.power.level}</dd></div>
			<div class="spell-detail__meta-card--compact"><dt><img src="/icons/white/entity/time.svg" alt="" aria-hidden="true" />Usage</dt><dd>{acidSplash4e.power.usage}</dd></div>
			<div class="spell-detail__meta-card--compact"><dt><img src="/icons/white/entity/spellbook.svg" alt="" aria-hidden="true" />Power Source</dt><dd>{acidSplash4e.power.source}</dd></div>
			<div class="spell-detail__meta-card--normal"><dt><img src="/icons/white/damage/acid.svg" alt="" aria-hidden="true" />Keywords</dt><dd>{acidSplash4e.keywords.join(', ')}</dd></div>
			<div class="spell-detail__meta-card--normal"><dt><img src="/icons/white/combat/action.svg" alt="" aria-hidden="true" />Action</dt><dd>{acidSplash4e.action.label}</dd></div>
			<div class="spell-detail__meta-card--normal"><dt><img src="/icons/white/attribute/range.svg" alt="" aria-hidden="true" />Range</dt><dd>{acidSplash4e.range.label}</dd></div>
			<div class="spell-detail__meta-card--compact"><dt><img src="/icons/white/combat/target.svg" alt="" aria-hidden="true" />Target</dt><dd>{acidSplash4e.target.label}</dd></div>
			<div class="spell-detail__meta-card--normal"><dt><img src="/icons/white/classes/wizard.svg" alt="" aria-hidden="true" />Spellcasting Ability</dt><dd>Wizard: {acidSplash4e.spellcastingAbility.Wizard}; Sorcerer: {acidSplash4e.spellcastingAbility.Sorcerer}</dd></div>
			<div class="spell-detail__meta-card--normal"><dt><img src="/icons/white/combat/ranged.svg" alt="" aria-hidden="true" />Attack</dt><dd>{acidSplash4e.attack.label}</dd></div>
		</dl>
		{:else if edition === '5e' || edition === '5-5e'}
		<dl class="spell-detail__meta spell-detail__meta--5e">
			<div class="spell-detail__meta-card--compact"><dt><img src="/icons/white/game/spell.svg" alt="" aria-hidden="true" />Level</dt><dd>{levelLabel}</dd></div>
			<div class="spell-detail__meta-card--normal"><dt><img src="/icons/white/entity/spellbook.svg" alt="" aria-hidden="true" />School</dt><dd>{spell.school}</dd></div>
			<div class="spell-detail__meta-card--normal"><dt><img src="/icons/white/combat/action.svg" alt="" aria-hidden="true" />Casting Time</dt><dd>{spell.castingTime.value} {formatUnit(spell.castingTime.unit)}</dd></div>
			<div class="spell-detail__meta-card--normal"><dt><img src="/icons/white/attribute/range.svg" alt="" aria-hidden="true" />Range</dt><dd>{spell.range.base} {spell.range.unit}</dd></div>
		</dl>
		{:else}
		<dl class="spell-detail__meta spell-detail__meta--legacy">
			<div class="spell-detail__meta-card--compact"><dt><img src="/icons/white/game/spell.svg" alt="" aria-hidden="true" />Level</dt><dd>{levelLabel}</dd></div>
			<div class="spell-detail__meta-card--normal spell-detail__meta-card--school"><dt><img src="/icons/white/entity/spellbook.svg" alt="" aria-hidden="true" />School</dt><dd>{spell.school}</dd></div>
			{#if edition !== '1e' && edition !== '2e'}
				<div class="spell-detail__meta-card--normal"><dt><img src="/icons/white/entity/magic-item.svg" alt="" aria-hidden="true" />Subschool</dt><dd>{spell.subschool}</dd></div>
				<div class="spell-detail__meta-card--compact"><dt><img src="/icons/white/damage/acid.svg" alt="" aria-hidden="true" />Descriptor</dt><dd>{spell.descriptors.join(', ')}</dd></div>
			{/if}
			<div class="spell-detail__meta-card--normal"><dt><img src="/icons/white/combat/action.svg" alt="" aria-hidden="true" />Casting Time</dt><dd>{spell.castingTime.value} {formatUnit(spell.castingTime.unit)}</dd></div>
			<div class="spell-detail__meta-card--wide"><dt><img src="/icons/white/attribute/range.svg" alt="" aria-hidden="true" />Range</dt><dd>{formatRange()}</dd></div>
		</dl>
		{/if}

		<div class="spell-detail__overview-bottom">
	{#if edition === '4e'}
	<dl class="spell-detail__meta spell-detail__meta--full">
		<div class="spell-detail__meta-card--normal"><dt><img src="/icons/white/damage/acid.svg" alt="" aria-hidden="true" />Hit</dt><dd>{formatPowerDamage(acidSplash4e.hit.damage)}</dd></div>
		<div class="spell-detail__meta-card--wide"><dt><img src="/icons/white/damage/acid.svg" alt="" aria-hidden="true" />Splash</dt><dd>{acidSplash4e.splash.label}</dd></div>
		<div class="spell-detail__meta-card--compact"><dt><img src="/icons/white/combat/target.svg" alt="" aria-hidden="true" />Miss</dt><dd>{acidSplash4e.miss.label}</dd></div>
		<div class="spell-detail__meta-card--extra-wide"><dt><img src="/icons/white/spell/upcast.svg" alt="" aria-hidden="true" />Level 21</dt><dd>{acidSplash4e.scaling[0].label}</dd></div>
	</dl>
	{:else if edition === '5e'}
	<dl class="spell-detail__meta spell-detail__meta--full spell-detail__meta--5e-full">
		<div class="spell-detail__meta-card--normal"><dt><img src="/icons/white/entity/spellbook.svg" alt="" aria-hidden="true" />Components</dt><dd>{formatComponents()}</dd></div>
		<div class="spell-detail__meta-card--compact"><dt><img src="/icons/white/entity/time.svg" alt="" aria-hidden="true" />Duration</dt><dd>{formatUnit(spell.duration.type)}</dd></div>
		<div class="spell-detail__meta-card--normal"><dt><img src="/icons/white/combat/target.svg" alt="" aria-hidden="true" />Target</dt><dd>{edition === '5e' ? 'One or two visible creatures' : 'Creatures in a 5-foot-radius Sphere'}</dd></div>
		<div class="spell-detail__meta-card--normal"><dt><img src="/icons/white/d20test/saving-throw.svg" alt="" aria-hidden="true" />Saving Throw</dt><dd>Dexterity</dd></div>
		<div class="spell-detail__meta-card--wide"><dt><img src="/icons/white/damage/acid.svg" alt="" aria-hidden="true" />Damage</dt><dd>{format5eScaling(edition === '5e' ? acidSplash5e.damage : acidSplash55e.damage)}</dd></div>
		<div class="spell-detail__meta-card--normal"><dt><img src="/icons/white/classes/wizard.svg" alt="" aria-hidden="true" />Spell Lists</dt><dd>{spell.spellLists.map((entry: { class: string; level: number }) => `${entry.class} ${entry.level}`).join(', ')}</dd></div>
	</dl>
	{:else}
	<dl class="spell-detail__meta spell-detail__meta--full">
		<div><dt><img src="/icons/white/combat/target.svg" alt="" aria-hidden="true" />Effect</dt><dd>{spell.effect}</dd></div>
		<div><dt><img src="/icons/white/entity/time.svg" alt="" aria-hidden="true" />Duration</dt><dd>{formatUnit(spell.duration.type)}</dd></div>
		<div><dt><img src="/icons/white/entity/spellbook.svg" alt="" aria-hidden="true" />Components</dt><dd>{formatComponents()}</dd></div>
		<div><dt><img src="/icons/white/d20test/saving-throw.svg" alt="" aria-hidden="true" />Saving Throw</dt><dd>{spell.savingThrow.allowed ? 'Allowed' : 'None'}</dd></div>
		<div><dt><img src="/icons/white/game/lock.svg" alt="" aria-hidden="true" />Spell Resistance</dt><dd>{spell.spellResistance ? 'Yes' : 'No'}</dd></div>
		<div><dt><img src="/icons/white/classes/wizard.svg" alt="" aria-hidden="true" />Spell Lists</dt><dd>{spell.spellLists.map((entry: { class: string; level: number }) => `${entry.class} ${entry.level}`).join(', ')}</dd></div>
		<div><dt><img src="/icons/white/combat/ranged.svg" alt="" aria-hidden="true" />Attack</dt><dd>{formatUnit(spell.attack.type)}</dd></div>
		<div><dt><img src="/icons/white/damage/acid.svg" alt="" aria-hidden="true" />Damage</dt><dd>{spell.damage.dice} {spell.damage.type}</dd></div>
	</dl>
	{/if}
		</div>
	</div>
	</div>
	</div>
	<section class="spell-detail__section" aria-labelledby="new-spell-description-title">
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

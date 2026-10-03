export const question = {
	slug: 'why-is-acid-splash-a-zero-level-cantrip-in-1e',

	question: 'Why is Acid Splash a 0-level cantrip in AD&D 1e?',

	shortAnswer:
		'The D&D Portal conversion uses level 0 because Unearthed Arcana introduced a true 0-level cantrip system for AD&D 1e Magic-Users. Acid Splash is deliberately reduced to only 1 point of acid damage so it can fit that apprentice-magic framework. This differs from the Portal 2e version, where the edition handles cantrips differently and Acid Splash is instead converted as a 1st-level Wizard spell.',

	introduction:
		'The word cantrip has not meant the same thing in every D&D edition. In modern editions, it often means repeatable level-0 magic. AD&D 1e cantrips are also level 0, but they belong to a very specific apprenticeship and memorization system introduced in Unearthed Arcana.\n\nThat system gives Acid Splash a plausible native 1e home, provided the damage is kept minor enough to remain cantrip-scale magic.',

	sections: [
		{
			id: 'unearthed-arcana-cantrips-are-level-zero',
			title: 'Unearthed Arcana cantrips are level 0',
			blocks: [
				{
					type: 'paragraph',
					content:
						'AD&D 1e Unearthed Arcana describes Magic-User and Illusionist cantrips as 0-level spells. Apprentice spellcasters learn these small magics before becoming normal 1st-level members of their class.'
				},
				{
					type: 'paragraph',
					content:
						'That makes level 0 an edition-native option rather than a modern rule imported backward from 3e or 5e. D&D Portal can therefore preserve Acid Splash\'s identity as minor magic without inventing an entirely new spell tier.'
				},
				{
					type: 'paragraph',
					content:
						'The Portal conversion records the rules profile explicitly because not every 1e campaign necessarily uses the Unearthed Arcana cantrip subsystem.'
				}
			]
		},
		{
			id: 'cantrip-does-not-mean-at-will',
			title: 'A 1e cantrip is not at-will magic',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Calling Acid Splash a cantrip does not mean the caster can repeat it without limit. Unearthed Arcana cantrips are memorized resources and apprentices have a limited number available per day.'
				},
				{
					type: 'paragraph',
					content:
						'A Magic-User who reaches normal class level can retain cantrips, but retained cantrips continue to consume memorization capacity. Up to four cantrips can take the place of one 1st-level spell under that option.'
				},
				{
					type: 'paragraph',
					content:
						'This resource structure is a major reason the Portal page must not explain the 1e spell using modern assumptions about unlimited cantrip casting.'
				}
			]
		},
		{
			id: 'why-the-damage-is-only-one-point',
			title: 'Why the conversion deals only 1 point of damage',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Official 1e cantrips are intentionally minor. Person-affecting cantrips can cause pain, distraction, blindness, silence, or similar brief effects without functioning like ordinary combat spells.'
				},
				{
					type: 'paragraph',
					content:
						'D&D Portal gives Acid Splash 1 point of damage as a deliberately conservative homebrew exception. That preserves the defining offensive identity of Acid Splash while keeping each individual casting far below normal leveled damage spells.'
				},
				{
					type: 'paragraph',
					content:
						'Giving the cantrip a full damage die would become much more significant when several cantrips can replace one 1st-level spell. The fixed 1-point value prevents the conversion from becoming a superior way to split a normal combat spell into several strong attacks.'
				}
			]
		},
		{
			id: 'why-the-2e-version-is-different',
			title: 'Why the 2e conversion is different',
			blocks: [
				{
					type: 'paragraph',
					content:
						'D&D Portal does not assume that adjacent editions should express the same spell with identical mechanics. AD&D 2e handles cantrip magic differently enough that the Portal version there is designed as a 1st-level Wizard spell.'
				},
				{
					type: 'paragraph',
					content:
						'For 1e, the Unearthed Arcana 0-level structure is a better match for the concept. That version therefore trades almost all of the later spell\'s damage for the benefit of remaining genuine minor magic.'
				},
				{
					type: 'paragraph',
					content:
						'The difference is intentional edition-native design, not an attempt to claim that one of the two conversions reproduces a lost official Acid Splash rule.'
				}
			]
		}
	]
} as const;

export default question;

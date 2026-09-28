export const question = {
	slug: 'does-acid-splash-damage-scale-with-caster-level-in-3e',

	question: 'Does Acid Splash damage scale with caster level in D&D 3e?',

	shortAnswer:
		"No. Acid Splash normally deals 1d3 acid damage regardless of the caster's level in D&D 3e. Increasing caster level does not automatically add damage dice or increase the size of the damage die. Caster level does increase the spell's Close range, however, so a higher-level caster can use Acid Splash from farther away.",

	introduction:
		'Acid Splash does scale with caster level in one respect, but that scaling applies to its range rather than its damage.\n\nThe distinction is easy to miss because many offensive spells become more damaging as the caster gains levels. Acid Splash keeps its normal 1d3 damage while its maximum casting distance gradually increases.',

	sections: [
		{
			id: 'acid-splash-deals-fixed-damage',
			title: 'Acid Splash deals a fixed 1d3 acid damage',
			blocks: [
				{
					type: 'paragraph',
					content:
						'On a successful ranged touch attack, Acid Splash deals 1d3 acid damage.'
				},
				{
					type: 'paragraph',
					content:
						'The spell does not include a progression that adds extra damage dice at higher caster levels.'
				},
				{
					type: 'paragraph',
					content:
						'A 1st-level caster and a much higher-level caster therefore use the same normal 1d3 base damage unless another rule modifies the spell.'
				}
			]
		},

		{
			id: 'caster-level-increases-the-range',
			title: 'Caster level increases the spell’s range',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Splash uses the Close range category, which begins at 25 feet and increases by 5 feet for every two caster levels.'
				},
				{
					type: 'paragraph',
					content:
						'This means caster level still has a direct effect on the spell even though it does not increase the spell’s damage.'
				}
			]
		},

		{
			id: 'acid-splash-range-examples',
			title: 'Examples of Acid Splash range',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The Close range formula gradually extends the distance from which Acid Splash can be cast.'
				},
				{
					type: 'list',
					items: [
						'Caster level 1: 25 feet;',
						'Caster level 2: 30 feet;',
						'Caster level 4: 35 feet;',
						'Caster level 6: 40 feet;',
						'Caster level 10: 50 feet.'
					]
				},
				{
					type: 'paragraph',
					content:
						'These increases change where the spell can reach, not how much damage the projectile deals when it hits.'
				}
			]
		},

		{
			id: 'other-effects-can-modify-the-damage',
			title: 'Other effects can still modify the damage',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The lack of built-in caster-level scaling does not mean the damage can never change.'
				},
				{
					type: 'paragraph',
					content:
						'Feats, class features, critical-hit rules, magic effects, or other game mechanics may alter the result if their requirements are met.'
				},
				{
					type: 'paragraph',
					content:
						'Those changes come from the external rule or effect rather than from Acid Splash gaining additional damage automatically as caster level rises.'
				}
			]
		},

		{
			id: 'damage-and-range-scaling-are-separate',
			title: 'Damage scaling and range scaling are separate',
			blocks: [
				{
					type: 'paragraph',
					content:
						'When determining how Acid Splash changes with caster level, it is useful to treat its damage and its range as two separate mechanics.'
				},
				{
					type: 'paragraph',
					content:
						'The damage remains 1d3 under the spell’s normal rules, while the Close range formula continues to improve as caster level increases.'
				}
			]
		}
	]
} as const;

export default question;
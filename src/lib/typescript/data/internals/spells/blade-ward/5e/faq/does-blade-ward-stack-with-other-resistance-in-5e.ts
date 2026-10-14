export const question = {
	slug: 'does-blade-ward-stack-with-other-resistance-in-5e',

	question: 'Does Blade Ward stack with other resistance in D&D 5e?',

	shortAnswer:
		'No, not by repeatedly halving the same damage. Under the 2014 resistance rules, multiple instances of resistance that apply to the same damage count as only one instance. If Blade Ward and another feature both give you resistance to the same qualifying slashing damage, that damage is still halved once rather than being reduced to one quarter. Blade Ward can still combine with defenses that work differently, such as Armor Class bonuses, Disadvantage on attacks, or flat damage reduction.',

	introduction:
		'Blade Ward grants actual damage resistance, so it follows the normal 2014 rules for resistance rather than creating a special stacking rule of its own.\n\nThat means gaining the same resistance from more than one source does not make each source halve the damage again.',

	sections: [
		{
			id: 'resistance-does-not-multiply',
			title: 'Multiple Resistances Do Not Multiply',
			blocks: [
				{
					type: 'paragraph',
					content:
						'If two different features both grant resistance to the same instance of damage, the target still has resistance only once for that damage.'
				},
				{
					type: 'paragraph',
					content:
						'For example, if Blade Ward and another feature both apply to 20 points of slashing damage from a weapon attack, the result is not 10 damage and then 5 damage.'
				},
				{
					type: 'paragraph',
					content:
						'The applicable resistance is counted once, so the qualifying damage is halved according to the normal rules.'
				}
			]
		},
		{
			id: 'overlapping-resistance-can-still-matter',
			title: 'Overlapping Resistance Can Still Matter in Different Situations',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Two resistance sources can overlap without being identical in scope. One feature might protect only against nonmagical attacks, while Blade Ward protects qualifying weapon attacks without a nonmagical restriction.'
				},
				{
					type: 'paragraph',
					content:
						'When both apply to the same damage, there is still only one halving. When only one applies, that single resistance can still protect the character.'
				},
				{
					type: 'paragraph',
					content:
						'This makes overlapping defenses potentially useful for coverage even though they do not multiply their reduction on the same damage.'
				}
			]
		},
		{
			id: 'different-defensive-mechanics-can-combine',
			title: 'Different Defensive Mechanics Can Combine',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The no-stacking rule concerns multiple instances of resistance or vulnerability affecting the same damage. It does not mean every defensive effect is mutually exclusive.'
				},
				{
					type: 'paragraph',
					content:
						'An Armor Class bonus can make the weapon attack less likely to hit before Blade Ward ever becomes relevant. Disadvantage can also make the attack roll less reliable.'
				},
				{
					type: 'paragraph',
					content:
						'If the attack still hits, a separate flat damage reduction can be applied according to its own rules before the remaining qualifying damage is halved by resistance.'
				}
			]
		},
		{
			id: 'mixed-damage-is-evaluated-by-type',
			title: 'Mixed Damage Is Evaluated by Damage Type',
			blocks: [
				{
					type: 'paragraph',
					content:
						'A single weapon attack can deal more than one type of damage. Blade Ward only provides resistance to its listed physical damage types.'
				},
				{
					type: 'paragraph',
					content:
						'If another feature gives resistance to the attack’s fire damage, that resistance can reduce the fire portion while Blade Ward reduces the qualifying slashing, piercing, or bludgeoning portion.'
				},
				{
					type: 'paragraph',
					content:
						'That is not the same resistance stacking twice on one damage amount; each resistance is being applied to a different damage component.'
				}
			]
		}
	]
} as const;

export default question;

export const question = {
	slug: 'how-much-damage-does-blade-ward-reduce-in-1e',
	question: 'How much damage does Blade Ward reduce in AD&D 1e?',
	shortAnswer:
		'Blade Ward reduces each qualifying physical damage die by 1, to a minimum result of 1 on each die. Flat damage modifiers are not reduced. A 2d6 + 2 attack that rolls 5 and 3 therefore becomes 4 and 2, then adds the unchanged +2 modifier for a total of 8 damage instead of 10.',
	introduction:
		'The 1e conversion uses per-die mitigation rather than half damage or a flat reduction from the final total. This mirrors a style of physical protection that already appears in AD&D 1e rules.\n\nThe mechanic is intentionally small enough for a cantrip but becomes slightly more valuable against attacks that roll several physical damage dice.',
	sections: [
		{
			id: 'reduce-each-die',
			title: 'Reduce Each Physical Damage Die Separately',
			blocks: [
				{ type: 'paragraph', content: 'When a qualifying physical attack hits, examine each physical damage die rolled by that attack.' },
				{ type: 'paragraph', content: 'Subtract 1 from each die result.' },
				{ type: 'paragraph', content: 'No die can be reduced below 1 by Blade Ward.' }
			]
		},
		{
			id: 'flat-bonuses',
			title: 'Flat Damage Bonuses Are Unchanged',
			blocks: [
				{ type: 'paragraph', content: 'Strength bonuses, magical enhancement bonuses, specialization bonuses, and other fixed modifiers are not damage dice.' },
				{ type: 'paragraph', content: 'Blade Ward therefore leaves those bonuses untouched.' },
				{ type: 'paragraph', content: 'Only the rolled physical damage dice receive the reduction.' }
			]
		},
		{
			id: 'example',
			title: 'Example',
			blocks: [
				{ type: 'paragraph', content: 'A monster attack deals 3d6 + 3 physical damage and rolls 6, 4, and 2.' },
				{ type: 'paragraph', content: 'Blade Ward changes those dice to 5, 3, and 1. The +3 modifier is then added normally.' },
				{ type: 'paragraph', content: 'The attack deals 12 damage instead of 15.' }
			]
		},
		{
			id: 'multiple-attacks',
			title: 'Multiple Attacks During the Round',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward remains active for 1 round rather than ending after the first hit.' },
				{ type: 'paragraph', content: 'Every qualifying physical attack during that period can have its damage dice reduced.' },
				{ type: 'paragraph', content: 'This makes the ward more effective against several small attacks than against a single attack dominated by a large flat damage bonus.' }
			]
		}
	]
} as const;

export default question;

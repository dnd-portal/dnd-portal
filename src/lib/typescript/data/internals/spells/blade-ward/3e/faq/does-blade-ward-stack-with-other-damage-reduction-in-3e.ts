export const question = {
	slug: 'does-blade-ward-stack-with-other-damage-reduction-in-3e',
	question: 'Does Blade Ward stack with other Damage Reduction in D&D 3e?',
	shortAnswer:
		'No. Blade Ward’s DR 1/— does not add numerically to another Damage Reduction value. When more than one DR effect could apply, use the best applicable reduction for the attack under the normal 3e rules. Blade Ward can still matter when a larger DR is bypassed, because its own DR has no weapon-enhancement threshold.',
	introduction:
		'Damage Reduction is not designed as a pile of additive armor layers. A character can possess several forms of DR at the same time, but that does not mean their numerical values are simply added together.\n\nBlade Ward therefore remains a separate defensive effect even when the caster already has Damage Reduction from another source.',
	sections: [
		{
			id: 'values-do-not-add',
			title: 'The DR Values Do Not Add Together',
			blocks: [
				{ type: 'paragraph', content: 'If Blade Ward grants DR 1/— and another effect grants DR 5/+1, the character does not have DR 6.' },
				{ type: 'paragraph', content: 'Each source keeps its own value and bypass condition.' },
				{ type: 'paragraph', content: 'When an attack occurs, determine which available form of DR gives the best applicable protection.' }
			]
		},
		{
			id: 'bypass-can-change-the-best-option',
			title: 'A Bypass Can Change Which DR Is Useful',
			blocks: [
				{ type: 'paragraph', content: 'Against a mundane attack, DR 5/+1 would normally provide more protection than Blade Ward’s DR 1/—.' },
				{ type: 'paragraph', content: 'Against a weapon that meets the +1 bypass threshold, the larger DR can fail while Blade Ward remains applicable.' },
				{ type: 'paragraph', content: 'In that situation, the tiny DR 1/— still removes 1 point of qualifying damage.' }
			]
		},
		{
			id: 'blade-ward-is-a-fallback',
			title: 'Blade Ward Functions as a Fallback Defense',
			blocks: [
				{ type: 'paragraph', content: 'The cantrip is not intended to strengthen another DR value directly.' },
				{ type: 'paragraph', content: 'Its value comes from being a separate, difficult-to-bypass physical reduction for a very short duration.' },
				{ type: 'paragraph', content: 'That makes it potentially useful even for characters who already have stronger but more easily bypassed Damage Reduction.' }
			]
		},
		{
			id: 'other-defenses-can-combine',
			title: 'Other Defensive Mechanics Are Separate',
			blocks: [
				{ type: 'paragraph', content: 'The DR non-stacking rule does not mean that Blade Ward prevents the character from benefiting from Armor Class, concealment, saving throw bonuses, or energy resistance.' },
				{ type: 'paragraph', content: 'Those mechanics protect the character in different ways and are resolved under their own rules.' },
				{ type: 'paragraph', content: 'Blade Ward only creates another source of Damage Reduction.' }
			]
		}
	]
} as const;

export default question;

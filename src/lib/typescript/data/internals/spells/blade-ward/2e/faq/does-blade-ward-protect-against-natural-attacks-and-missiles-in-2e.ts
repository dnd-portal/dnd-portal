export const question = {
	slug: 'does-blade-ward-protect-against-natural-attacks-and-missiles-in-2e',
	question: 'Does Blade Ward protect against natural attacks and missiles in AD&D 2e?',
	shortAnswer:
		'Yes. Blade Ward is intended to reduce damage from successful physical attacks broadly, including hand-held weapons, thrown weapons, projectile weapons, unarmed blows, and natural attacks such as claws or bites. Each qualifying physical damage die is reduced by 1, to a minimum of 1 per die.',
	introduction:
		'The 2e conversion does not use the later formal phrase “weapon attack.” Instead, it looks at whether the caster is being struck by a direct physical attack.\n\nThat allows the ward to cover the broad family of attacks that fit its intended fantasy without requiring modern attack classifications.',
	sections: [
		{
			id: 'missiles',
			title: 'Missile Weapons Qualify',
			blocks: [
				{ type: 'paragraph', content: 'Arrows, crossbow bolts, sling stones, thrown axes, spears, and similar missiles are physical attacks.' },
				{ type: 'paragraph', content: 'Their qualifying damage dice can therefore be reduced by Blade Ward.' },
				{ type: 'paragraph', content: 'The spell does not grant total immunity to missiles; it only reduces each physical damage die by 1.' }
			]
		},
		{
			id: 'natural-attacks',
			title: 'Natural Weapons Qualify',
			blocks: [
				{ type: 'paragraph', content: 'Claws, bites, horns, tail strikes, and similar direct physical monster attacks can also qualify.' },
				{ type: 'paragraph', content: 'A creature does not need to hold a manufactured weapon for Blade Ward to protect the caster.' },
				{ type: 'paragraph', content: 'What matters is that the caster is being struck by a physical attack that deals ordinary physical damage dice.' }
			]
		},
		{
			id: 'unarmed-attacks',
			title: 'Unarmed Attacks Qualify',
			blocks: [
				{ type: 'paragraph', content: 'Punches, kicks, and other ordinary unarmed blows are also physical attacks.' },
				{ type: 'paragraph', content: 'Their damage dice are reduced by Blade Ward under the same rule.' },
				{ type: 'paragraph', content: 'Any special nonphysical effect delivered with the blow is resolved separately.' }
			]
		}
	]
} as const;

export default question;

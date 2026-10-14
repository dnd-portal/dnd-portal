export const question = {
	slug: 'does-blade-ward-work-against-magical-weapons-in-2e',
	question: 'Does Blade Ward work against magical weapons in AD&D 2e?',
	shortAnswer:
		'Yes. A magical weapon is still a physical weapon for Blade Ward’s purposes. Its qualifying physical damage dice are reduced by 1 each, to a minimum of 1 per die. Additional magical energy damage or a separate spell-like effect attached to the weapon is not automatically reduced.',
	introduction:
		'Blade Ward is meant to blunt physical attacks rather than distinguish between mundane steel and enchanted steel. Magical enhancement therefore does not cause the ward to fail.\n\nThe important distinction is between the weapon’s physical damage and any separate magical effect delivered alongside it.',
	sections: [
		{
			id: 'magical-weapons-qualify',
			title: 'Magical Weapons Still Qualify',
			blocks: [
				{ type: 'paragraph', content: 'A +1 sword, enchanted axe, magical arrow, or similar weapon still makes a physical attack.' },
				{ type: 'paragraph', content: 'Blade Ward therefore reduces the qualifying physical damage dice from that attack in the same way it would for a mundane weapon.' },
				{ type: 'paragraph', content: 'The spell does not contain a magical-weapon bypass condition.' }
			]
		},
		{
			id: 'enhancement-bonus',
			title: 'The Weapon’s Flat Enhancement Bonus Is Not Reduced',
			blocks: [
				{ type: 'paragraph', content: 'A magical weapon may add a fixed enhancement bonus to damage.' },
				{ type: 'paragraph', content: 'Blade Ward changes damage dice, not flat modifiers, so that fixed bonus remains unchanged.' },
				{ type: 'paragraph', content: 'The ward therefore reduces the rolled physical damage while leaving the weapon’s numerical enhancement intact.' }
			]
		},
		{
			id: 'extra-energy',
			title: 'Extra Magical Energy Damage Is Separate',
			blocks: [
				{ type: 'paragraph', content: 'A magical weapon can sometimes deal additional fire, cold, electrical, or other magical damage.' },
				{ type: 'paragraph', content: 'That extra energy damage is not part of the physical weapon dice Blade Ward is designed to reduce.' },
				{ type: 'paragraph', content: 'The physical portion can be reduced while the magical energy portion is resolved normally.' }
			]
		}
	]
} as const;

export default question;

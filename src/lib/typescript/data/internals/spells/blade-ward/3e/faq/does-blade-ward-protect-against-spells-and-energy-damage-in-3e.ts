export const question = {
	slug: 'does-blade-ward-protect-against-spells-and-energy-damage-in-3e',
	question: 'Does Blade Ward protect against spells and energy damage in D&D 3e?',
	shortAnswer:
		'Normally, no. Blade Ward grants Damage Reduction, not universal damage resistance. Ordinary 3e DR does not reduce energy damage and does not automatically apply to spell, spell-like, supernatural, or touch-attack effects. A specific rule can override that general rule, but Blade Ward itself creates no such exception.',
	introduction:
		'The dash in DR 1/— makes Blade Ward difficult for weapons to bypass, but it does not broaden the categories of damage that Damage Reduction can affect. The spell remains a defense against qualifying physical attacks rather than a one-round reduction to everything that can hurt the caster.\n\nThis distinction becomes especially important when one attack deals both weapon damage and magical energy damage.',
	sections: [
		{
			id: 'energy-damage-is-separate',
			title: 'Energy Damage Is Separate from Weapon Damage',
			blocks: [
				{ type: 'paragraph', content: 'Acid, cold, electricity, fire, and sonic damage use their own energy-defense rules rather than ordinary Damage Reduction.' },
				{ type: 'paragraph', content: 'Blade Ward therefore does not subtract 1 from an ordinary fireball, lightning effect, acid attack, or similar energy source.' },
				{ type: 'paragraph', content: 'The same principle applies when energy damage is attached to a physical weapon attack.' }
			]
		},
		{
			id: 'mixed-damage-attacks',
			title: 'Mixed-Damage Attacks Are Split by Damage Type',
			blocks: [
				{ type: 'paragraph', content: 'Suppose a weapon attack deals normal physical damage plus additional fire damage from a magical property.' },
				{ type: 'paragraph', content: 'The physical weapon damage can be reduced by Blade Ward when the normal DR rules apply.' },
				{ type: 'paragraph', content: 'The fire damage remains unchanged unless the caster has a separate defense against fire.' }
			]
		},
		{
			id: 'spells-and-special-abilities',
			title: 'Spells and Special Abilities Do Not Automatically Use DR',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward does not say that it reduces damage from every spell, spell-like ability, or supernatural ability.' },
				{ type: 'paragraph', content: 'Those effects are handled according to the normal 3e rules governing Damage Reduction and the specific effect being used.' },
				{ type: 'paragraph', content: 'A spell should not have 1 damage removed simply because its damage is described as a physical impact.' }
			]
		},
		{
			id: 'specific-rules-can-override',
			title: 'Specific Rules Can Override the General Rule',
			blocks: [
				{ type: 'paragraph', content: 'Some unusual effects can explicitly tell the reader to apply Damage Reduction or to treat their damage as weapon damage.' },
				{ type: 'paragraph', content: 'When that happens, the specific instruction takes precedence over the ordinary rule.' },
				{ type: 'paragraph', content: 'Blade Ward does not need its own exception list; it simply participates in the existing DR system.' }
			]
		}
	]
} as const;

export default question;

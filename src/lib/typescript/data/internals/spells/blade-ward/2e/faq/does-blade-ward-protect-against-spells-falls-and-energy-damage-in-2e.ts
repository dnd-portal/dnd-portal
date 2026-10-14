export const question = {
	slug: 'does-blade-ward-protect-against-spells-falls-and-energy-damage-in-2e',
	question: 'Does Blade Ward protect against spells, falls, and energy damage in AD&D 2e?',
	shortAnswer:
		'No. Blade Ward only reduces qualifying damage dice from direct physical attacks. It does not normally reduce energy damage, direct spell damage, falling damage, acid immersion, suffocation, constriction, poison gas, collapsing terrain, or similar non-attack hazards. A magical weapon can still qualify as a physical attack, but a spell that merely looks like a weapon does not.',
	introduction:
		'Blade Ward is intentionally narrow. It protects the caster from being physically struck, not from every source of harm that can occur during the round.\n\nThis keeps the spell distinct from broader magical protection and prevents a 1st-level ward from becoming a universal damage reducer.',
	sections: [
		{
			id: 'energy-damage',
			title: 'Energy Damage Is Not Reduced',
			blocks: [
				{ type: 'paragraph', content: 'Fire, cold, electricity, acid, and similar magical or elemental damage are outside the ward’s normal protection.' },
				{ type: 'paragraph', content: 'Blade Ward does not subtract 1 from every energy damage die simply because the caster is protected.' },
				{ type: 'paragraph', content: 'A separate defensive spell or resistance is required to reduce those damage types.' }
			]
		},
		{
			id: 'spell-attacks',
			title: 'Spell-Generated Attacks Are Not Physical Weapon Attacks',
			blocks: [
				{ type: 'paragraph', content: 'A magical effect can appear as a blade, missile, claw, or other physical object without becoming an ordinary weapon attack.' },
				{ type: 'paragraph', content: 'Blade Ward therefore does not automatically reduce the damage of a spell merely because its description uses weapon-like imagery.' },
				{ type: 'paragraph', content: 'An actual magical weapon remains different: its physical weapon damage still qualifies.' }
			]
		},
		{
			id: 'falls-and-hazards',
			title: 'Falls and Hazards Are Not Attacks',
			blocks: [
				{ type: 'paragraph', content: 'Falling from a height can cause severe physical harm, but the ground is not making a successful physical attack against the caster.' },
				{ type: 'paragraph', content: 'The same logic excludes collapsing terrain, crushing environmental hazards, suffocation, and similar sources of damage.' },
				{ type: 'paragraph', content: 'Blade Ward is a combat ward against attacks, not a general shield against physical reality.' }
			]
		},
		{
			id: 'poison-and-constriction',
			title: 'Poison and Constriction Are Resolved Separately',
			blocks: [
				{ type: 'paragraph', content: 'Poison, constriction, suffocation, and other special forms of harm are not automatically reduced by the spell.' },
				{ type: 'paragraph', content: 'If a qualifying physical attack also delivers poison, Blade Ward can reduce the attack’s physical damage dice while the poison is resolved normally.' },
				{ type: 'paragraph', content: 'The ward does not grant poison immunity or resistance to the secondary effect.' }
			]
		}
	]
} as const;

export default question;

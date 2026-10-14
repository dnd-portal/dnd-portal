export const question = {
	slug: 'does-blade-ward-protect-against-spells-energy-damage-and-falls-in-1e',
	question: 'Does Blade Ward protect against spells, energy damage, and falls in AD&D 1e?',
	shortAnswer:
		'No. Blade Ward is a ward against direct physical attacks, not a universal damage reducer. It does not normally reduce fire, cold, electricity, acid, direct spell damage, falling damage, suffocation, environmental crushing, or similar hazards. A magical weapon can still qualify as a physical attack, but a spell that merely resembles a weapon does not automatically qualify.',
	introduction:
		'Blade Ward is intentionally narrow because it is only a 0-level cantrip. It helps when the caster is struck by a physical attack, but it does not substitute for elemental protection, anti-magic defenses, or protection from environmental hazards.\n\nThis boundary also matches the way older AD&D protection spells distinguish ordinary physical missiles and blows from direct magical effects.',
	sections: [
		{
			id: 'energy-damage',
			title: 'Energy Damage Is Not Reduced',
			blocks: [
				{ type: 'paragraph', content: 'Fire, cold, electricity, acid, and similar energy damage remain unaffected by Blade Ward.' },
				{ type: 'paragraph', content: 'The ward does not subtract 1 from every damage die merely because the damage occurs while the spell is active.' },
				{ type: 'paragraph', content: 'A separate defensive effect is needed to protect against those forms of harm.' }
			]
		},
		{
			id: 'direct-spell-damage',
			title: 'Direct Spell Damage Is Not a Physical Weapon Attack',
			blocks: [
				{ type: 'paragraph', content: 'Magic Missile, Fireball, Lightning Bolt, and similar direct magical attacks do not become qualifying attacks simply because they cause damage.' },
				{ type: 'paragraph', content: 'A spell can also resemble a blade or projectile without becoming an ordinary physical weapon for Blade Ward.' },
				{ type: 'paragraph', content: 'Actual magical weapons remain different because they still deliver physical weapon damage.' }
			]
		},
		{
			id: 'falling',
			title: 'Falling Damage Is Not Reduced',
			blocks: [
				{ type: 'paragraph', content: 'Falling can cause physical injury, but it is not a successful attack against the caster.' },
				{ type: 'paragraph', content: 'Blade Ward therefore does not reduce the damage caused by hitting the ground after a fall.' },
				{ type: 'paragraph', content: 'The same logic applies to most environmental crushing, collapsing terrain, and similar non-attack hazards.' }
			]
		},
		{
			id: 'poison-and-other-effects',
			title: 'Poison and Other Secondary Harm Is Separate',
			blocks: [
				{ type: 'paragraph', content: 'Poison delivered through a bite or weapon is not automatically reduced or negated by the ward.' },
				{ type: 'paragraph', content: 'Blade Ward can reduce the physical damage dice from the qualifying attack while the poison or other rider is resolved normally.' },
				{ type: 'paragraph', content: 'The cantrip provides no special saving throw bonus or immunity to those effects.' }
			]
		}
	]
} as const;

export default question;

export const question = {
	slug: 'does-blade-ward-work-against-spell-attacks-in-5e',

	question: 'Does Blade Ward work against spell attacks in D&D 5e?',

	shortAnswer:
		'Normally, no. The 2014 Blade Ward protects against bludgeoning, piercing, and slashing damage dealt by weapon attacks. A melee or ranged spell attack is a spell attack rather than a weapon attack, so it does not meet that source requirement even if it somehow deals one of those physical damage types. An effect that involves an actual weapon attack as part of a spell is different and must be evaluated based on the underlying attack and the damage being dealt.',

	introduction:
		'The 2014 version of Blade Ward is much narrower than the 2024 rewrite. It does not trigger on every attack roll; it specifically grants resistance to certain damage when that damage comes from a weapon attack.\n\nThis makes the distinction between a weapon attack and a spell attack mechanically important.',

	sections: [
		{
			id: 'spell-attacks-are-not-weapon-attacks',
			title: 'Spell Attacks Are Not Weapon Attacks',
			blocks: [
				{
					type: 'paragraph',
					content:
						'A melee spell attack or ranged spell attack uses an attack roll, but it belongs to the spell-attack category rather than the weapon-attack category.'
				},
				{
					type: 'paragraph',
					content:
						'Blade Ward does not say that it protects against all attacks, all attack rolls, or all sources of physical damage. It specifically refers to damage dealt by weapon attacks.'
				},
				{
					type: 'paragraph',
					content:
						'A normal spell attack therefore falls outside the spell’s protection.'
				}
			]
		},
		{
			id: 'damage-type-alone-is-not-enough',
			title: 'The Damage Type Alone Is Not Enough',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Even if a spell attack deals bludgeoning, piercing, or slashing damage, that does not automatically make Blade Ward apply.'
				},
				{
					type: 'paragraph',
					content:
						'The spell requires both a protected damage type and the correct source: a weapon attack.'
				},
				{
					type: 'paragraph',
					content:
						'This is the same reason falling damage is not reduced even though falling normally deals bludgeoning damage.'
				}
			]
		},
		{
			id: 'spells-that-call-for-weapon-attacks',
			title: 'Spells That Call for Weapon Attacks Are Different',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Some spells instruct a creature to make an attack with a weapon as part of the spell’s resolution. In those cases, the underlying attack can still be a weapon attack even though a spell caused it to happen.'
				},
				{
					type: 'paragraph',
					content:
						'If that weapon attack deals bludgeoning, piercing, or slashing damage, Blade Ward can reduce that qualifying portion of the weapon attack.'
				},
				{
					type: 'paragraph',
					content:
						'Any separate spell damage attached to the attack must be evaluated independently. Blade Ward does not automatically grant resistance to thunder, fire, or another additional damage type.'
				}
			]
		},
		{
			id: 'contrast-with-2024',
			title: 'The 2024 Version Works Differently',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The 2024 Blade Ward does not use the 2014 weapon-attack restriction. Instead, it reduces attack rolls made against the caster by 1d4.'
				},
				{
					type: 'paragraph',
					content:
						'Because spell attacks use attack rolls, the 2024 version can interfere with them.'
				},
				{
					type: 'paragraph',
					content:
						'That rule should not be imported backward into the 2014 spell. The two editions use fundamentally different defensive mechanics.'
				}
			]
		}
	]
} as const;

export default question;

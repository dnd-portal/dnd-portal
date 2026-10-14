export const question = {
	slug: 'does-blade-ward-reduce-falling-or-environmental-damage-in-5e',

	question: 'Does Blade Ward reduce falling or environmental damage in D&D 5e?',

	shortAnswer:
		'Normally, no. The 2014 Blade Ward does not grant general resistance to bludgeoning, piercing, and slashing damage; those damage types must be dealt by a weapon attack. Falling damage, collapsing debris, many traps, and similar environmental hazards are not weapon attacks, so Blade Ward does not reduce them merely because they deal bludgeoning, piercing, or slashing damage.',

	introduction:
		'Blade Ward is easy to misread as temporary resistance to the three common physical damage types. The source restriction is just as important as the damage types themselves.\n\nEnvironmental damage often uses bludgeoning, piercing, or slashing damage, but most environmental hazards are not weapon attacks.',

	sections: [
		{
			id: 'falling-damage-does-not-qualify',
			title: 'Falling Damage Does Not Qualify',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Falling normally causes bludgeoning damage, which is one of Blade Ward’s three listed damage types.'
				},
				{
					type: 'paragraph',
					content:
						'However, a fall is not a weapon attack. The spell’s source requirement is therefore not met.'
				},
				{
					type: 'paragraph',
					content:
						'Blade Ward does not normally halve the damage from hitting the ground after a fall.'
				}
			]
		},
		{
			id: 'environmental-hazards',
			title: 'Environmental Hazards Usually Fall Outside the Spell',
			blocks: [
				{
					type: 'paragraph',
					content:
						'A collapsing ceiling might deal bludgeoning damage, sharp rubble might deal piercing or slashing damage, and other hazards can use the same physical damage types as weapons.'
				},
				{
					type: 'paragraph',
					content:
						'Those similarities in damage type do not make the hazard a weapon attack.'
				},
				{
					type: 'paragraph',
					content:
						'Unless the effect is actually resolved as a qualifying weapon attack, Blade Ward provides no resistance to that damage.'
				}
			]
		},
		{
			id: 'traps-depend-on-how-they-attack',
			title: 'Traps Depend on How They Are Resolved',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Traps are not all resolved in the same way. Some make attack rolls, while others require saving throws or automatically deal damage.'
				},
				{
					type: 'paragraph',
					content:
						'An attack roll by itself is still not sufficient; Blade Ward requires a weapon attack specifically.'
				},
				{
					type: 'paragraph',
					content:
						'The trap’s actual rules determine whether it qualifies. A DM should not treat every physical trap as a weapon attack simply because it uses arrows, blades, spikes, or another weapon-like object.'
				}
			]
		},
		{
			id: 'why-source-matters',
			title: 'Why the Damage Source Matters',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Resistance can be limited by both damage type and source. Blade Ward is an example of a source-limited resistance.'
				},
				{
					type: 'paragraph',
					content:
						'The spell is therefore narrower than a feature that simply says you have resistance to bludgeoning, piercing, and slashing damage with no additional restriction.'
				},
				{
					type: 'paragraph',
					content:
						'For accurate Portal rendering, the source restriction should remain explicit rather than being simplified to three general damage resistances.'
				}
			]
		}
	]
} as const;

export default question;

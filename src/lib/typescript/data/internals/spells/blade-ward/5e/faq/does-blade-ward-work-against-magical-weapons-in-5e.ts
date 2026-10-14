export const question = {
	slug: 'does-blade-ward-work-against-magical-weapons-in-5e',

	question: 'Does Blade Ward work against magical weapons in D&D 5e?',

	shortAnswer:
		'Yes. The 2014 version of Blade Ward grants resistance to bludgeoning, piercing, and slashing damage dealt by weapon attacks, and it does not limit that protection to nonmagical attacks. A magical sword, bow, mace, or other magical weapon attack can therefore still have its qualifying bludgeoning, piercing, or slashing damage halved. If the same attack also deals another damage type, such as fire or radiant damage, Blade Ward does not automatically reduce that additional damage.',

	introduction:
		'Many 2014 monster resistances specifically distinguish between magical and nonmagical attacks, so it is easy to assume Blade Ward does the same. It does not.\n\nThe spell cares about two things: whether the damage came from a weapon attack and whether the damage type is bludgeoning, piercing, or slashing. Magical status is not an additional restriction in the spell.',

	sections: [
		{
			id: 'there-is-no-nonmagical-restriction',
			title: 'Blade Ward Has No Nonmagical Restriction',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The 2014 Blade Ward effect is written around damage dealt by weapon attacks. It does not add wording that restricts the source to a nonmagical weapon or nonmagical attack.'
				},
				{
					type: 'paragraph',
					content:
						'A magical longsword attack is still a weapon attack. If that attack deals slashing damage, the slashing damage meets the spell’s normal requirements.'
				},
				{
					type: 'paragraph',
					content:
						'This differs from creature traits that explicitly grant resistance only to bludgeoning, piercing, and slashing damage from nonmagical attacks. Those traits have an extra restriction that Blade Ward does not.'
				}
			]
		},
		{
			id: 'only-protected-damage-types-are-halved',
			title: 'Only the Protected Damage Types Are Halved',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward grants resistance to bludgeoning, piercing, and slashing damage from qualifying attacks. It does not grant resistance to every type of damage that a magical weapon might deal.'
				},
				{
					type: 'paragraph',
					content:
						'If a magical weapon attack deals slashing damage plus fire damage, Blade Ward can halve the slashing portion while the fire portion remains unchanged.'
				},
				{
					type: 'paragraph',
					content:
						'The same principle applies to poison, radiant, necrotic, cold, lightning, thunder, or other additional damage types attached to a weapon attack.'
				}
			]
		},
		{
			id: 'magical-does-not-mean-spell-attack',
			title: 'A Magical Attack Is Not Automatically a Spell Attack',
			blocks: [
				{
					type: 'paragraph',
					content:
						'A weapon attack can be magical without becoming a spell attack. A magic weapon remains capable of making a weapon attack.'
				},
				{
					type: 'paragraph',
					content:
						'This distinction matters because Blade Ward protects qualifying weapon-attack damage but does not generally protect damage from a spell attack.'
				},
				{
					type: 'paragraph',
					content:
						'When resolving the spell, use the attack category and damage types stated by the relevant attack rather than treating every magical source as the same kind of attack.'
				}
			]
		},
		{
			id: 'example-mixed-damage',
			title: 'Example: A Magical Weapon with Mixed Damage',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Suppose a magical melee weapon attack deals 12 slashing damage and 8 fire damage. The attack is still a weapon attack, so the slashing damage qualifies for Blade Ward.'
				},
				{
					type: 'paragraph',
					content:
						'Blade Ward reduces the 12 slashing damage according to the normal resistance rules. The 8 fire damage is not covered by the spell and is resolved normally.'
				},
				{
					type: 'paragraph',
					content:
						'This is why D&D Portal should represent the spell as restricted by both source and damage type rather than as general resistance to an entire weapon attack.'
				}
			]
		}
	]
} as const;

export default question;

export const question = {
	slug: 'does-blade-ward-work-against-natural-weapons-and-unarmed-strikes-in-5e',

	question: 'Does Blade Ward work against natural weapons and Unarmed Strikes in D&D 5e?',

	shortAnswer:
		'Usually, yes when the attack is a weapon attack and deals bludgeoning, piercing, or slashing damage. In the 2014 rules, natural weapons are weapons, and many monster bites, claws, tails, and similar attacks are explicitly listed as melee or ranged weapon attacks. Unarmed Strikes are not weapons themselves, but they count as melee weapon attacks under the 2014 rules, so their normal bludgeoning damage can also qualify for Blade Ward.',

	introduction:
		'The phrase “weapon attack” in 2014 D&D is a rules category and is broader than “an attack made with a manufactured weapon.” That distinction becomes important when Blade Ward is used against monsters, natural weapons, or characters fighting without equipment.\n\nThe correct approach is to look at the attack category and damage type rather than asking whether the attacker is physically holding a weapon.',

	sections: [
		{
			id: 'natural-weapons-can-qualify',
			title: 'Natural Weapons Can Qualify',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Natural weapons such as claws, bites, horns, and tails can be treated as weapons by the rules. Monster stat blocks also commonly identify their attacks as melee or ranged weapon attacks.'
				},
				{
					type: 'paragraph',
					content:
						'If a claw is listed as a melee weapon attack and deals slashing damage, Blade Ward can grant resistance to that slashing damage.'
				},
				{
					type: 'paragraph',
					content:
						'Likewise, a bite that is a weapon attack and deals piercing damage can qualify. The fact that the monster is using part of its body rather than a manufactured weapon does not automatically exclude the attack.'
				}
			]
		},
		{
			id: 'unarmed-strikes-are-a-special-case',
			title: 'Unarmed Strikes Are a Special Case',
			blocks: [
				{
					type: 'paragraph',
					content:
						'An Unarmed Strike is not itself considered a weapon in the 2014 rules. However, it still counts as a melee weapon attack.'
				},
				{
					type: 'paragraph',
					content:
						'That means the attack category required by Blade Ward is present even though no weapon object is being used.'
				},
				{
					type: 'paragraph',
					content:
						'When an Unarmed Strike deals bludgeoning damage, that damage can therefore be reduced by Blade Ward.'
				}
			]
		},
		{
			id: 'read-the-attack-entry',
			title: 'Read the Attack Entry, Not Just the Description',
			blocks: [
				{
					type: 'paragraph',
					content:
						'A monster ability may sound like a physical attack without necessarily using the weapon-attack rules. The mechanical attack entry is what matters.'
				},
				{
					type: 'paragraph',
					content:
						'If the stat block identifies the action as a melee weapon attack or ranged weapon attack, the source requirement for Blade Ward is satisfied.'
				},
				{
					type: 'paragraph',
					content:
						'If the ability instead forces a saving throw or simply deals damage without a weapon attack, Blade Ward does not apply merely because claws, teeth, spikes, or another physical body part are involved in the description.'
				}
			]
		},
		{
			id: 'additional-damage-is-resolved-separately',
			title: 'Additional Damage Is Resolved Separately',
			blocks: [
				{
					type: 'paragraph',
					content:
						'A monster weapon attack can deal one of the protected physical damage types plus another damage type such as poison, fire, or acid.'
				},
				{
					type: 'paragraph',
					content:
						'Blade Ward reduces only the bludgeoning, piercing, or slashing portion that satisfies the spell’s conditions.'
				},
				{
					type: 'paragraph',
					content:
						'The additional damage is not automatically resisted simply because it was delivered by the same bite, claw, or other weapon attack.'
				}
			]
		}
	]
} as const;

export default question;

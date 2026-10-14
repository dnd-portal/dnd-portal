const power = {
	id: 'blade-ward',
	edition: '4e',

	name: 'Blade Ward',

	contentStatus: 'published',

	publication: {
		edition: '4e',
		year: 2008,
		source: 'players-handbook-4e',
		errataApplied: true
	},

	class: 'Ranger',
	level: 23,
	powerType: 'Attack',
	usage: 'Encounter',
	powerSource: 'Martial',

	actionType: 'Immediate Interrupt',

	range: {
		type: 'melee-weapon'
	},

	trigger: {
		type: 'creature-makes-melee-attack-against-you'
	},

	targeting: {
		type: 'triggering-creature',
		target: 'the-attacking-creature'
	},

	attack: {
		ability: 'Strength',
		defense: 'AC'
	},

	hit: {
		weaponDamage: '2[W]',
		modifier: 'Strength',
		damageType: null
	},

	effect: {
		type: 'attack-roll-penalty',
		target: 'attacking-creature',
		appliesAgainst: 'you',
		value: {
			type: 'ability-modifier',
			ability: 'Wisdom'
		},
		duration: {
			until: 'end-of-your-next-turn'
		},
		requiresHit: false
	},

	keywords: ['Martial', 'Weapon'],
	subschool: null,
	descriptors: [],

	source: 'players-handbook-4e',
	rulesSource: null,

	tags: [
		'ranger',
		'encounter-power',
		'immediate-interrupt',
		'melee',
		'weapon',
		'defense',
		'counterattack'
	],

	summary:
		'Blade Ward is a level 23 Ranger encounter attack power in D&D 4e. When a creature makes a melee attack against you, you can use an Immediate Interrupt to make a Strength vs. AC melee weapon attack against that creature. On a hit, the counterattack deals 2[W] + your Strength modifier damage. Whether the counterattack hits or misses, the attacker takes a penalty to attack rolls against you equal to your Wisdom modifier until the end of your next turn. Because the power is an Immediate Interrupt, its effect resolves before the triggering melee attack finishes.',

	sections: [
		{
			id: 'how-blade-ward-works',
			title: 'How Blade Ward Works',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward is an official level 23 Ranger attack power from the 4th Edition Player’s Handbook. It is an Encounter power with the Martial and Weapon keywords, making it fundamentally different from the defensive cantrip that later editions use under the same name.'
				},
				{
					type: 'paragraph',
					content:
						'The power is used as an Immediate Interrupt when a creature makes a melee attack against you. Instead of waiting for that attack to resolve, Blade Ward interrupts the triggering action and resolves first.'
				},
				{
					type: 'paragraph',
					content:
						'You make a melee weapon attack against the creature that triggered the power, using Strength against Armor Class. If the counterattack hits, it deals 2[W] plus your Strength modifier damage using the weapon employed for the power.'
				},
				{
					type: 'paragraph',
					content:
						'The power also imposes a defensive penalty on the attacker. Until the end of your next turn, that creature takes a penalty to attack rolls against you equal to your Wisdom modifier.'
				},
				{
					type: 'paragraph',
					content:
						'The penalty is listed as an Effect rather than part of the Hit entry. It therefore applies whether your counterattack hits or misses.'
				}
			]
		},
		{
			id: 'immediate-interrupt-timing',
			title: 'Immediate Interrupt Timing',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Immediate Interrupts in 4e occur when their trigger happens but before the triggering action finishes resolving. Blade Ward therefore resolves before the melee attack that triggered it.'
				},
				{
					type: 'paragraph',
					content:
						'This timing matters because Blade Ward’s attack-roll penalty begins as part of the interrupt. The attacker is penalized against you before its triggering melee attack finishes resolving.'
				},
				{
					type: 'paragraph',
					content:
						'As a result, the Wisdom-based penalty can affect the very attack that triggered Blade Ward, not only later attacks made before the end of your next turn.'
				},
				{
					type: 'paragraph',
					content:
						'Using Blade Ward also consumes your immediate action for the round. You cannot use another Immediate Interrupt or Immediate Reaction until your immediate action becomes available again under the normal 4e rules.'
				}
			]
		},
		{
			id: 'attack-and-damage',
			title: 'Attack and Damage',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward uses Strength vs. AC. This makes it a melee-oriented Ranger power and ties the accuracy of the counterattack to Strength rather than Dexterity.'
				},
				{
					type: 'paragraph',
					content:
						'The attack has the Weapon keyword and uses melee weapon range. The weapon’s damage expression supplies the [W] value used by the power.'
				},
				{
					type: 'paragraph',
					content:
						'After official errata, the Hit entry deals 2[W] plus your Strength modifier damage. The original Player’s Handbook printing used only 1[W], so the corrected 2[W] value should be treated as the canonical 4e version.'
				},
				{
					type: 'paragraph',
					content:
						'The defensive Effect does not depend on dealing damage. A miss loses the Hit damage but does not remove the Wisdom-based attack penalty.'
				}
			]
		},
		{
			id: 'wisdom-based-ward',
			title: 'The Wisdom-Based Ward',
			blocks: [
				{
					type: 'paragraph',
					content:
						'After Blade Ward is used, the triggering creature takes a penalty to its attack rolls against you equal to your Wisdom modifier until the end of your next turn.'
				},
				{
					type: 'paragraph',
					content:
						'The penalty applies only when that creature attacks you. Its attacks against your allies are not penalized by Blade Ward.'
				},
				{
					type: 'paragraph',
					content:
						'Because the Effect is separate from the power’s attack roll, Strength and Wisdom contribute to different parts of Blade Ward. Strength determines the counterattack’s accuracy and damage, while Wisdom determines the defensive penalty.'
				},
				{
					type: 'paragraph',
					content:
						'The duration extends through the remainder of the triggering creature’s turn, later turns in the round, and your next turn, ending when your next turn finishes.'
				}
			]
		},
		{
			id: 'weapon-and-target-requirements',
			title: 'Weapon and Target Requirements',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward is a melee weapon power, so you need an appropriate melee weapon to make the counterattack. The power does not contain a separate Requirement saying that you must wield two melee weapons.'
				},
				{
					type: 'paragraph',
					content:
						'That distinction matters because the flavor describes defending with one blade and striking with another, but flavor text does not add a two-weapon mechanical requirement that is absent from the power’s rules.'
				},
				{
					type: 'paragraph',
					content:
						'The target of Blade Ward is always the creature whose melee attack triggered the power. You cannot redirect the counterattack to another nearby enemy.'
				},
				{
					type: 'paragraph',
					content:
						'The trigger requires a melee attack against you. A ranged attack against you does not trigger Blade Ward, and neither does an attack against one of your allies.'
				}
			]
		},
		{
			id: 'encounter-power',
			title: 'Using Blade Ward as an Encounter Power',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward is an Encounter power rather than an At-Will or Daily power. Once used, it is normally unavailable again until it is recovered under the standard rules for encounter powers.'
				},
				{
					type: 'paragraph',
					content:
						'Its reactive action type means it does not consume your standard action on your own turn. Instead, you reserve the possibility of spending your immediate action when a qualifying melee attack occurs.'
				},
				{
					type: 'paragraph',
					content:
						'This gives the power both an offensive and defensive role: it delivers a weapon counterattack while weakening the triggering enemy’s ability to hit you.'
				},
				{
					type: 'paragraph',
					content:
						'As a level 23 Ranger power, Blade Ward belongs to epic-tier play rather than the low-level spellcasting role associated with Blade Ward in 5e and 5.5e.'
				}
			]
		},
		{
			id: 'relation-to-later-editions',
			title: 'How This Differs from Later Blade Ward Spells',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The 4e Blade Ward is not an earlier rules version of the 5e cantrip in the normal mechanical sense. It shares the same name, but it is a high-level martial Ranger power rather than a spell.'
				},
				{
					type: 'paragraph',
					content:
						'In 5e, Blade Ward became an Abjuration cantrip that grants short-lived resistance to certain physical damage from weapon attacks.'
				},
				{
					type: 'paragraph',
					content:
						'In 5.5e, the cantrip was redesigned again to impose a 1d4 penalty on attack rolls against the caster while Concentration is maintained.'
				},
				{
					type: 'paragraph',
					content:
						'The 4e power is therefore best understood as a separate historical use of the Blade Ward name: a Ranger counterattack that combines immediate weapon damage with a temporary personal defense against one attacker.'
				}
			]
		}
	],

	faq: [
		'does-blade-wards-penalty-apply-to-the-triggering-attack-in-4e',
		'does-blade-wards-effect-apply-if-the-counterattack-misses-in-4e',
		'does-blade-ward-require-two-melee-weapons-in-4e',
		'can-blade-ward-trigger-on-ranged-or-spell-attacks-in-4e',
		'what-did-the-errata-change-about-blade-ward-in-4e'
	]
};

export default power;

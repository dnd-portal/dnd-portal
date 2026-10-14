const spell = {
	id: 'blade-ward',
	edition: '5e',

	name: 'Blade Ward',

	contentStatus: 'published',

	publication: {
		edition: '5e',
		year: 2014,
		source: 'players-handbook-5e'
	},

	level: 0,
	school: 'Abjuration',
	subschool: null,
	descriptors: [],

	castingTime: {
		value: 1,
		unit: 'action'
	},

	range: {
		type: 'self'
	},

	duration: {
		type: 'rounds',
		value: 1,
		unit: 'round',
		concentration: false,
		endsAt: 'end-of-casters-next-turn'
	},

	components: {
		verbal: true,
		somatic: true,
		material: false
	},

	targeting: {
		type: 'self'
	},

	effect: {
		type: 'damage-resistance',
		damageTypes: [
			'bludgeoning',
			'piercing',
			'slashing'
		],
		sourceRestriction: 'weapon-attacks'
	},

	scaling: null,

	spellLists: [
		{ class: 'Bard', level: 0 },
		{ class: 'Sorcerer', level: 0 },
		{ class: 'Warlock', level: 0 },
		{ class: 'Wizard', level: 0 }
	],

	source: 'players-handbook-5e',
	rulesSource: null,

	tags: ['defense', 'warding', 'resistance'],

	summary:
		'Blade Ward is an Abjuration cantrip that protects you until the end of your next turn. During that time, you have resistance to bludgeoning, piercing, and slashing damage dealt by weapon attacks, causing each qualifying damage type to be halved. The protection can apply to magical and nonmagical weapon attacks alike because the spell does not restrict itself to nonmagical attacks, but it does not reduce spell-attack damage, falling damage, or other damage that is not dealt by a weapon attack. Blade Ward requires no Concentration and has no level-based scaling.',

	description: [
		{
			type: 'paragraph',
			text:
				'You create a short-lived magical ward around yourself. Until the end of your next turn, qualifying weapon attacks deal only half their bludgeoning, piercing, and slashing damage to you. The ward protects only you, does not require Concentration, and does not reduce damage types or sources outside those restrictions.'
		}
	],

	sections: [
		{
			id: 'how-blade-ward-works',
			title: 'How Blade Ward Works',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward is a defensive Abjuration cantrip with a casting time of one action and a range of Self. It does not target another creature and does not require an attack roll or saving throw.'
				},
				{
					type: 'paragraph',
					content:
						'After the spell is cast, you gain resistance to bludgeoning, piercing, and slashing damage when that damage is dealt by a weapon attack. Resistance halves the relevant damage after the normal damage modifiers are applied.'
				},
				{
					type: 'paragraph',
					content:
						'The protection lasts until the end of your next turn. This covers the remainder of the turn on which you cast the cantrip, the intervening turns of other creatures, and your following turn until that turn ends.'
				},
				{
					type: 'paragraph',
					content:
						'Blade Ward does not require Concentration. Taking damage cannot end the spell through a Concentration check, and concentrating on another spell does not by itself interfere with Blade Ward.'
				},
				{
					type: 'paragraph',
					content:
						'The cantrip has no level-based improvement. Its duration and the resistance it grants remain the same at every character level.'
				}
			]
		},
		{
			id: 'qualifying-damage',
			title: 'Which Damage Does Blade Ward Reduce?',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Two requirements must both be satisfied for Blade Ward to reduce damage. The damage must be bludgeoning, piercing, or slashing, and that damage must be dealt by a weapon attack.'
				},
				{
					type: 'paragraph',
					content:
						'A sword strike dealing slashing damage, an arrow dealing piercing damage, or a mace dealing bludgeoning damage are straightforward examples. If the attack qualifies, the protected damage type is halved because of resistance.'
				},
				{
					type: 'paragraph',
					content:
						'The spell does not contain a nonmagical restriction. A magical weapon attack can therefore still qualify when it deals bludgeoning, piercing, or slashing damage.'
				},
				{
					type: 'paragraph',
					content:
						'If a qualifying weapon attack deals additional damage of another type, Blade Ward only reduces the protected bludgeoning, piercing, or slashing portion. Fire, poison, radiant, necrotic, or other additional damage is not reduced by Blade Ward merely because it came from the same attack.'
				},
				{
					type: 'paragraph',
					content:
						'Conversely, bludgeoning, piercing, or slashing damage from a source that is not a weapon attack does not qualify. The damage type alone is not enough.'
				}
			]
		},
		{
			id: 'weapon-attacks-and-monsters',
			title: 'Weapon Attacks and Monster Attacks',
			blocks: [
				{
					type: 'paragraph',
					content:
						'In the 2014 rules, “weapon attack” is a rules category rather than a requirement that the attacker be holding a manufactured sword, axe, bow, or similar object.'
				},
				{
					type: 'paragraph',
					content:
						'Many monster claws, bites, tails, and other natural attacks are presented as melee or ranged weapon attacks. When such an attack deals bludgeoning, piercing, or slashing damage, Blade Ward can reduce that damage.'
				},
				{
					type: 'paragraph',
					content:
						'An Unarmed Strike also counts as a melee weapon attack under the 2014 rules even though the attacker’s body is not itself treated as a weapon. Its normal bludgeoning damage can therefore qualify for Blade Ward.'
				},
				{
					type: 'paragraph',
					content:
						'The safest way to resolve a monster ability is to read the attack entry. If it is identified as a weapon attack and deals one of the three protected physical damage types, Blade Ward applies to that portion of the damage.'
				}
			]
		},
		{
			id: 'what-blade-ward-does-not-protect-against',
			title: 'What Blade Ward Does Not Protect Against',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward is not general resistance to bludgeoning, piercing, and slashing damage. The damage must also originate from a weapon attack.'
				},
				{
					type: 'paragraph',
					content:
						'Falling damage is bludgeoning damage, but a fall is not a weapon attack. Blade Ward therefore does not normally reduce falling damage.'
				},
				{
					type: 'paragraph',
					content:
						'Environmental hazards, traps, collapsing structures, and other effects can also deal physical damage without being weapon attacks. Those sources are outside the cantrip’s normal protection even when the damage type is bludgeoning, piercing, or slashing.'
				},
				{
					type: 'paragraph',
					content:
						'Spell attacks are also a separate category from weapon attacks. A melee or ranged spell attack is not protected simply because it uses an attack roll.'
				},
				{
					type: 'paragraph',
					content:
						'Effects that require saving throws rather than weapon attack rolls are likewise unaffected unless they separately deal qualifying damage through a weapon attack.'
				}
			]
		},
		{
			id: 'duration-and-action-economy',
			title: 'Duration and Action Economy',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward costs an action to cast, which is a significant part of the 2014 spell’s balance. A character who spends their action on Blade Ward usually gives up another action they could have used for an attack, another spell, or a different defensive option.'
				},
				{
					type: 'paragraph',
					content:
						'The ward begins immediately and remains active until the end of your next turn. Because the endpoint is your next turn rather than the start of it, the protection remains active throughout that following turn.'
				},
				{
					type: 'paragraph',
					content:
						'Features that alter how a cantrip can be cast can change the practical value of Blade Ward. For example, a feature that permits a cantrip to be used without consuming the character’s entire normal action can make the defensive effect easier to combine with offense.'
				},
				{
					type: 'paragraph',
					content:
						'Those interactions come from the separate feature rather than from Blade Ward itself. The spell’s ordinary casting time remains one action.'
				}
			]
		},
		{
			id: 'resistance-and-stacking',
			title: 'Resistance and Stacking',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward grants resistance rather than applying a flat numerical damage reduction. A qualifying damage amount is therefore halved according to the normal 2014 resistance rules.'
				},
				{
					type: 'paragraph',
					content:
						'Multiple instances of resistance to the same damage do not multiply together. If you already have resistance to qualifying slashing damage and Blade Ward would also grant resistance to that damage, it is still halved only once.'
				},
				{
					type: 'paragraph',
					content:
						'Blade Ward can still be useful alongside other defenses that work differently. An effect that increases Armor Class, imposes Disadvantage, or reduces damage by a flat amount can interact with Blade Ward according to its own rules.'
				},
				{
					type: 'paragraph',
					content:
						'When one attack deals more than one damage type, resistance is evaluated by damage type. Blade Ward may halve one component of the attack while leaving another component unchanged.'
				}
			]
		},
		{
			id: 'class-availability',
			title: 'Class Availability',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward appears on the Bard, Sorcerer, Warlock, and Wizard cantrip lists in the 2014 Player’s Handbook.'
				},
				{
					type: 'paragraph',
					content:
						'The spell’s defensive effect does not use the caster’s spellcasting ability. It has no spell attack roll, no saving throw DC, and no ability modifier added to the resistance.'
				},
				{
					type: 'paragraph',
					content:
						'A Bard, Sorcerer, Warlock, or Wizard therefore receives the same base defensive effect from Blade Ward regardless of whether the class uses Charisma or Intelligence for spellcasting.'
				},
				{
					type: 'paragraph',
					content:
						'Other character options can grant access to Blade Ward separately. Those later access methods should be recorded independently from the core 2014 spell-list metadata.'
				}
			]
		},
		{
			id: 'what-changed-in-2024',
			title: 'What Changed in the 2024 Version',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The 2014 and 2024 versions are both Abjuration cantrips with a casting time of one action, a range of Self, and verbal and somatic components, but their defensive mechanics are fundamentally different.'
				},
				{
					type: 'paragraph',
					content:
						'The 2014 version lasts for one round, requires no Concentration, and grants resistance to bludgeoning, piercing, and slashing damage from weapon attacks.'
				},
				{
					type: 'paragraph',
					content:
						'The 2024 version lasts for up to 1 minute with Concentration and no longer grants that physical damage resistance. Instead, creatures making attack rolls against the caster subtract 1d4 from those rolls.'
				},
				{
					type: 'paragraph',
					content:
						'As a result, the 2014 spell lets qualifying attacks hit normally and then reduces specific damage, while the 2024 spell tries to prevent attacks from hitting at all.'
				},
				{
					type: 'paragraph',
					content:
						'The 2024 version also applies to spell attacks because it refers broadly to attack rolls, while the 2014 version specifically requires damage dealt by weapon attacks.'
				}
			]
		}
	],

	faq: [
		'does-blade-ward-work-against-magical-weapons-in-5e',
		'does-blade-ward-work-against-natural-weapons-and-unarmed-strikes-in-5e',
		'does-blade-ward-work-against-spell-attacks-in-5e',
		'does-blade-ward-reduce-falling-or-environmental-damage-in-5e',
		'does-blade-ward-stack-with-other-resistance-in-5e'
	]
};

export default spell;

const spell = {
	id: 'blade-ward',
	edition: '3-5e',

	name: 'Blade Ward',

	contentStatus: 'portal-conversion',
	basedOnEdition: '5e',

	publication: {
		edition: '3-5e',
		source: 'dnd-portal-conversion'
	},

	level: 0,
	school: 'Abjuration',
	subschool: null,
	descriptors: [],

	spellLists: [
		{ class: 'Bard', level: 0 },
		{ class: 'Sorcerer', level: 0 },
		{ class: 'Wizard', level: 0 }
	],

	components: {
		verbal: true,
		somatic: true,
		material: false,
		focus: false,
		divineFocus: false
	},

	castingTime: {
		value: 1,
		unit: 'standard-action'
	},

	range: {
		type: 'personal'
	},

	target: {
		type: 'self',
		label: 'You'
	},

	duration: {
		type: 'rounds',
		value: 1,
		unit: 'round',
		dismissible: false
	},

	savingThrow: null,
	spellResistance: null,

	effect: {
		type: 'damage-reduction',
		damageReduction: {
			amount: 1,
			bypass: '—'
		}
	},

	scaling: null,

	source: 'dnd-portal-conversion',
	rulesSource: 'srd-3-5',

	tags: [
		'defense',
		'warding',
		'damage-reduction',
		'personal',
		'portal-conversion'
	],

	summary:
		'Blade Ward is a D&D Portal conversion of the later defensive cantrip into D&D 3.5e. It is a 0-level Abjuration spell for Bards, Sorcerers, and Wizards that takes a standard action to cast and protects only the caster for 1 round. While the ward lasts, you gain damage reduction 1/—. This reduces damage from most weapons, unarmed attacks, and natural weapons by 1 point per qualifying attack, and no weapon type or magical enhancement bypasses the ward. Normal 3.5e damage reduction rules still apply: energy damage, spells, spell-like abilities, supernatural abilities, and touch attacks are not reduced unless a specific rule says otherwise. The spell does not scale with caster level.',

	sections: [
		{
			id: 'conversion-status',
			title: 'D&D Portal Conversion',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward does not appear as an official spell in the D&D 3.5e Player’s Handbook, Spell Compendium, Complete Arcane, or Complete Mage. This page is therefore a D&D Portal conversion rather than a reproduction of an official 3.5e spell.'
				},
				{
					type: 'paragraph',
					content:
						'The conversion uses the 2014 Blade Ward spell as its conceptual basis: a very low-level arcane ward that briefly reduces harm from physical attacks. Its mechanics have been rebuilt around systems that are native to 3.5e rather than translating later-edition terminology word for word.'
				},
				{
					type: 'paragraph',
					content:
						'In particular, the later concept of resistance to bludgeoning, piercing, and slashing weapon damage is represented through 3.5e damage reduction. This keeps the spell readable and interoperable with the edition’s existing rules for weapons, natural attacks, energy damage, and overlapping defensive effects.'
				}
			]
		},
		{
			id: 'how-blade-ward-works',
			title: 'How Blade Ward Works',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward is a 0-level Abjuration spell with verbal and somatic components. Casting it is a standard action, its range is Personal, and its target is You.'
				},
				{
					type: 'paragraph',
					content:
						'For 1 round, you gain damage reduction 1/—. Each qualifying attack has its physical damage reduced by 1 point before that damage is applied to your hit points.'
				},
				{
					type: 'paragraph',
					content:
						'The dash after the slash is important. Unlike damage reduction written as DR 1/magic, DR 1/silver, or another bypass type, DR 1/— cannot be overcome merely by using a particular kind of weapon.'
				},
				{
					type: 'paragraph',
					content:
						'Blade Ward has no saving throw, attack roll, or level-based scaling. Because it is a Personal spell, the normal 3.5e presentation does not need a Saving Throw or Spell Resistance entry for another creature.'
				}
			]
		},
		{
			id: 'why-damage-reduction',
			title: 'Why the Conversion Uses Damage Reduction',
			blocks: [
				{
					type: 'paragraph',
					content:
						'D&D 3.5e does not normally express protection from ordinary weapon damage using the later-edition resistance mechanic. Instead, the edition has a dedicated damage reduction system for reducing damage from weapons, unarmed attacks, and natural weapons.'
				},
				{
					type: 'paragraph',
					content:
						'Using DR therefore makes Blade Ward interact with the rest of 3.5e in the same language as other defensive effects. Protection from arrows, for example, uses damage reduction against ranged weapons rather than halving physical damage.'
				},
				{
					type: 'paragraph',
					content:
						'The value is deliberately only DR 1/— because Blade Ward is a 0-level spell. Existing 0-level defensive magic such as resistance provides a small defensive modifier, while substantially stronger damage reduction appears on higher-level effects.'
				},
				{
					type: 'paragraph',
					content:
						'This conversion is intended to feel like a cantrip-sized ward, not a replacement for spells such as protection from arrows, stoneskin, or other higher-level defensive magic.'
				}
			]
		},
		{
			id: 'what-the-ward-protects-against',
			title: 'What the Ward Protects Against',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Under the normal 3.5e damage reduction rules, DR applies to damage from most weapons and natural attacks. It also applies to ordinary unarmed attacks.'
				},
				{
					type: 'paragraph',
					content:
						'A sword, arrow, mace, claw, bite, or unarmed blow can therefore have its qualifying damage reduced by Blade Ward. The effect does not care whether the physical attack is melee or ranged.'
				},
				{
					type: 'paragraph',
					content:
						'Because the ward is DR 1/—, magical enhancement does not bypass it. A +1 longsword, a mundane longsword, and a natural weapon are all subject to the same reduction when the normal damage reduction rules apply.'
				},
				{
					type: 'paragraph',
					content:
						'The reduction is applied separately to each qualifying attack. Multiple attacks in a full attack can therefore each be reduced by 1 point while the spell remains active.'
				}
			]
		},
		{
			id: 'what-the-ward-does-not-protect-against',
			title: 'What the Ward Does Not Protect Against',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Damage reduction is not universal damage resistance. Under the general 3.5e rules, spells, spell-like abilities, supernatural abilities, and energy attacks ignore damage reduction.'
				},
				{
					type: 'paragraph',
					content:
						'Blade Ward therefore does not normally reduce fire, cold, acid, electricity, or sonic damage. Energy damage added to a weapon attack is also unaffected even when the weapon’s ordinary physical damage is reduced.'
				},
				{
					type: 'paragraph',
					content:
						'Damage reduction also does not negate touch attacks. If an effect resolves as a touch attack and deals damage that damage reduction does not normally apply to, Blade Ward provides no special exception.'
				},
				{
					type: 'paragraph',
					content:
						'A specific rule can override the general rule. If another 3.5e effect explicitly says that damage reduction applies to its damage, that specific instruction remains in force.'
				}
			]
		},
		{
			id: 'when-damage-is-reduced-to-zero',
			title: 'When Blade Ward Reduces Damage to Zero',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Reducing a small attack to 0 damage can matter beyond the lost hit point. The 3.5e damage reduction rules state that when damage reduction completely negates an attack’s damage, it also negates many special effects that depend on injury.'
				},
				{
					type: 'paragraph',
					content:
						'Examples include injury poison, a monk’s Stunning Fist effect delivered through the attack, and injury-based disease. These effects are not automatically blocked when the attack still deals damage after damage reduction.'
				},
				{
					type: 'paragraph',
					content:
						'An attack that deals no damage because of damage reduction also does not disrupt spellcasting through damage. This gives DR 1/— occasional tactical value beyond simply preserving a single hit point.'
				},
				{
					type: 'paragraph',
					content:
						'These are consequences of the normal 3.5e damage reduction rules rather than additional benefits invented by Blade Ward.'
				}
			]
		},
		{
			id: 'damage-reduction-and-stacking',
			title: 'Damage Reduction and Stacking',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Damage reduction from multiple sources does not stack in D&D 3.5e. If Blade Ward and another effect both grant damage reduction, you use the best applicable damage reduction for the attack rather than adding the values together.'
				},
				{
					type: 'paragraph',
					content:
						'For example, a character with DR 3/magic who is also protected by Blade Ward does not gain DR 4 against a mundane weapon. The two values remain separate effects.'
				},
				{
					type: 'paragraph',
					content:
						'Which effect is best can depend on the attack. A magical weapon would bypass DR 3/magic, but it would not bypass Blade Ward’s DR 1/—, so Blade Ward could still reduce that attack by 1.'
				},
				{
					type: 'paragraph',
					content:
						'This can make a small amount of untyped damage reduction useful even on a character who already possesses a larger but bypassable form of DR.'
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
						'The Portal conversion places Blade Ward on the Bard and Sorcerer/Wizard 0-level spell lists. All three classes use 0-level arcane spells in 3.5e, making them the closest native spellcasting homes for the later cantrip.'
				},
				{
					type: 'paragraph',
					content:
						'Unlike 5e, a 3.5e cantrip is not automatically an at-will spell. Bards, Sorcerers, and Wizards have limited spell use or prepared spell capacity according to their normal class rules.'
				},
				{
					type: 'paragraph',
					content:
						'The 3.5e Warlock is deliberately not listed as a spellcasting class for Blade Ward. Complete Arcane defines warlock invocations as spell-like abilities rather than spells, and warlocks do not learn ordinary spell-list cantrips in the same way as Bards, Sorcerers, or Wizards.'
				},
				{
					type: 'paragraph',
					content:
						'A separate Blade Ward-themed invocation could be designed if D&D Portal ever wants a warlock-specific conversion, but that would be a distinct class feature rather than this spell.'
				}
			]
		},
		{
			id: 'abjurant-champion',
			title: 'Interaction with Abjurant Champion',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward is an Abjuration spell, so several Abjurant Champion class features from Complete Mage interact with it in useful ways.'
				},
				{
					type: 'paragraph',
					content:
						'Abjurant Armor does not increase Blade Ward’s DR. That feature improves an armor bonus or shield bonus to AC granted by an abjuration spell, while Blade Ward grants damage reduction instead of either AC bonus type.'
				},
				{
					type: 'paragraph',
					content:
						'Extended Abjuration does apply because Blade Ward has a noninstantaneous duration. Doubling its 1-round duration produces a 2-round ward under the normal duration-doubling rules.'
				},
				{
					type: 'paragraph',
					content:
						'Swift Abjuration can also apply once the character has that class feature. Because Blade Ward is a 0-level Abjuration spell, it falls comfortably within the spell-level limit and can be cast as a swift action rather than a standard action.'
				}
			]
		},
		{
			id: 'relationship-to-5e',
			title: 'Relationship to the 5e Spell',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The 2014 Blade Ward cantrip grants resistance to bludgeoning, piercing, and slashing damage from weapon attacks until the end of the caster’s next turn.'
				},
				{
					type: 'paragraph',
					content:
						'Simply importing that wording would not fit 3.5e cleanly because the edition handles physical damage defenses through damage reduction rather than the later resistance system.'
				},
				{
					type: 'paragraph',
					content:
						'DR 1/— preserves the core fantasy of briefly shrugging off ordinary physical attacks while producing results that follow familiar 3.5e rules. The conversion intentionally reduces a fixed amount of damage instead of halving it.'
				},
				{
					type: 'paragraph',
					content:
						'The standard-action casting time, Personal range, verbal and somatic components, brief duration, and lack of scaling preserve the recognizable identity of Blade Ward without forcing 5e mechanics into an older rules engine.'
				}
			]
		}
	],

	faq: [
		'did-blade-ward-exist-in-dnd-3-5e',
		'why-does-blade-ward-use-damage-reduction-in-3-5e',
		'do-magic-weapons-bypass-blade-ward-in-3-5e',
		'does-blade-ward-reduce-spell-or-energy-damage-in-3-5e',
		'does-blade-ward-stack-with-other-damage-reduction-in-3-5e',
		'how-does-blade-ward-interact-with-abjurant-champion-in-3-5e'
	]
};

export default spell;

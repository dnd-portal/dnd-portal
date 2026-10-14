const spell = {
	id: 'blade-ward',
	edition: '1e',

	name: 'Blade Ward',

	contentStatus: 'portal-conversion',
	basedOnEdition: '5e',

	publication: {
		edition: '1e',
		source: 'dnd-portal-conversion'
	},

	level: 0,
	school: 'Abjuration',
	subschool: null,
	descriptors: [],

	cantripCategory: 'Personal',

	spellLists: [
		{ class: 'Magic-User', level: 0 }
	],

	illusionistAccess: {
		available: true,
		method: 'magic-user-cantrip-access'
	},

	components: {
		verbal: true,
		somatic: true,
		material: false
	},

	range: {
		type: 'zero'
	},

	duration: {
		value: 1,
		unit: 'round'
	},

	castingTime: {
		value: 0.5,
		unit: 'segment'
	},

	areaOfEffect: {
		type: 'caster-only'
	},

	savingThrow: 'None',

	effect: {
		type: 'damage-die-reduction',
		appliesTo: [
			'hand-held-weapons',
			'thrown-weapons',
			'projectile-weapons',
			'unarmed-attacks',
			'natural-attacks'
		],
		reductionPerDie: 1,
		minimumPerDie: 1,
		appliesToMagicalWeapons: true,
		excludes: [
			'energy-damage',
			'direct-spell-damage',
			'spell-generated-attacks',
			'secondary-effects',
			'falls',
			'non-attack-hazards'
		]
	},

	scaling: null,

	source: 'dnd-portal-conversion',
	rulesSource: null,

	tags: [
		'defense',
		'warding',
		'physical-damage',
		'personal',
		'cantrip',
		'portal-conversion'
	],

	summary:
		'Blade Ward is a D&D Portal conversion of the later defensive spell into AD&D 1e using the Unearthed Arcana cantrip framework. It is a 0-level Magic-User Abjuration in the Personal cantrip category with Range 0, Casting Time 1/2 segment, and a duration of 1 round. While the ward lasts, reduce each damage die from a successful physical weapon, missile, unarmed, or natural attack by 1, to a minimum of 1 point per die. Magical weapons are affected normally. Flat damage modifiers, energy damage, direct spell damage, secondary effects, falls, and other non-attack hazards are not reduced. The cantrip does not scale with caster level.',

	description: [
		{
			type: 'paragraph',
			text:
				'You draw a brief ward around yourself that blunts physical blows. For 1 round, each damage die from a successful qualifying physical attack is reduced by 1, to a minimum of 1 point per die. The ward protects only the caster and does not reduce energy damage, direct spell damage, falls, or other non-attack hazards.'
		}
	],

	sections: [
		{
			id: 'conversion-status',
			title: 'D&D Portal Conversion',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward is not presented as an official AD&D 1e spell or cantrip. This page is a D&D Portal conversion built to fit the official 1e cantrip framework introduced in Unearthed Arcana.'
				},
				{
					type: 'paragraph',
					content:
						'The conversion preserves the later spell’s identity as a short-lived personal defense against physical attacks. It does not import later mechanics such as resistance, concentration, standard actions, or 3e-style Damage Reduction.'
				},
				{
					type: 'paragraph',
					content:
						'Instead, Blade Ward is expressed as a Personal Magic-User cantrip with 1e casting-time terminology and a small per-die reduction modeled on physical-protection mechanics that already exist in the edition.'
				}
			]
		},
		{
			id: 'why-level-zero',
			title: 'Why Blade Ward Is a 0-Level Cantrip',
			blocks: [
				{
					type: 'paragraph',
					content:
						'AD&D 1e gained a formal 0-level cantrip system in Unearthed Arcana. Magic-Users and Illusionists can learn minor magical effects separately from ordinary 1st-level spells.'
				},
				{
					type: 'paragraph',
					content:
						'That makes a 0-level version of Blade Ward much more natural in 1e than in 2e, where the core spell system treats Cantrip as a 1st-level Wizard spell rather than as a broad level of individual combat cantrips.'
				},
				{
					type: 'paragraph',
					content:
						'Blade Ward remains cantrip-sized by lasting only 1 round, protecting only the caster, reducing each qualifying damage die by only 1, and never allowing a damage die to fall below 1.'
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
						'Blade Ward is a 0-level Magic-User Abjuration in the Personal cantrip category. It has Range 0, affects only the caster, requires verbal and somatic components, and has a Casting Time of 1/2 segment.'
				},
				{
					type: 'paragraph',
					content:
						'For 1 round, each damage die from a successful qualifying physical attack is reduced by 1 point. A die result cannot be reduced below 1 by Blade Ward.'
				},
				{
					type: 'paragraph',
					content:
						'For example, an attack dealing 2d6 + 2 physical damage that rolls 5 and 3 becomes 4 and 2 before the unchanged +2 modifier is added. The attack therefore deals 8 damage instead of 10.'
				},
				{
					type: 'paragraph',
					content:
						'Static modifiers are not reduced. Strength bonuses, magical enhancement bonuses, specialization bonuses, and other flat additions remain unchanged.'
				}
			]
		},
		{
			id: 'cantrip-framework',
			title: 'Using Blade Ward as an AD&D 1e Cantrip',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward uses the Unearthed Arcana cantrip framework rather than functioning like a modern at-will cantrip. Learning and preparing cantrips follows the special 1e rules for apprentice magic.'
				},
				{
					type: 'paragraph',
					content:
						'A Magic-User who retains cantrip use after apprenticeship does not gain unlimited spellcasting. Cantrips still occupy part of the character’s available magical preparation under the normal 1e cantrip rules.'
				},
				{
					type: 'paragraph',
					content:
						'Cantrip casting is extremely fast, which is why Blade Ward uses a Casting Time of 1/2 segment rather than the longer casting times expected from many ordinary spells.'
				},
				{
					type: 'paragraph',
					content:
						'The conversion assumes a campaign using the official Unearthed Arcana cantrip rules. A table limited strictly to the original Player’s Handbook may not use this 0-level framework at all.'
				}
			]
		},
		{
			id: 'qualifying-physical-attacks',
			title: 'Qualifying Physical Attacks',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward protects against direct physical attacks rather than relying on a later formal category called a weapon attack.'
				},
				{
					type: 'paragraph',
					content:
						'Hand-held weapons, thrown weapons, projectile weapons, unarmed blows, and natural attacks such as claws, bites, horns, and tail strikes can all qualify.'
				},
				{
					type: 'paragraph',
					content:
						'A giant-thrown rock or similar large physical projectile can also qualify because the caster is being struck by a direct physical attack.'
				},
				{
					type: 'paragraph',
					content:
						'When a monster ability mixes a physical blow with poison, energy, paralysis, or another special effect, Blade Ward reduces only the qualifying physical damage dice. The secondary effect is resolved normally.'
				}
			]
		},
		{
			id: 'magical-weapons',
			title: 'Magical Weapons',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Magical weapons remain physical attacks for Blade Ward. A +1 sword, enchanted arrow, or similar weapon does not bypass the ward merely because it is magical.'
				},
				{
					type: 'paragraph',
					content:
						'The physical damage dice from the magical weapon are reduced in the same way as damage dice from a mundane weapon.'
				},
				{
					type: 'paragraph',
					content:
						'Any separate energy damage or magical effect produced by the weapon is not automatically reduced. Blade Ward only modifies the qualifying physical damage dice.'
				},
				{
					type: 'paragraph',
					content:
						'Flat magical enhancement bonuses to damage remain unchanged because the cantrip reduces dice rather than fixed modifiers.'
				}
			]
		},
		{
			id: 'spells-and-energy',
			title: 'Direct Magic and Energy Damage',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward is not a general defense against magic. Fire, cold, electricity, acid, and similar energy damage are outside the ward’s intended protection.'
				},
				{
					type: 'paragraph',
					content:
						'Direct spell damage is also excluded. A spell that creates a magical missile, blade, blast, or other attack-shaped effect does not automatically become a qualifying physical weapon attack.'
				},
				{
					type: 'paragraph',
					content:
						'This keeps Blade Ward distinct from more specialized magical defenses and follows the general 1e distinction between ordinary physical projectiles and direct magical attacks.'
				}
			]
		},
		{
			id: 'falls-and-hazards',
			title: 'Falls and Environmental Hazards',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward does not reduce falling damage. A fall causes physical harm but is not a successful physical attack against the caster.'
				},
				{
					type: 'paragraph',
					content:
						'The ward likewise does not normally protect against lava, acid immersion, suffocation, crushing environmental hazards, or similar non-attack sources of harm.'
				},
				{
					type: 'paragraph',
					content:
						'If an unusual hazard is actually resolved as a direct physical attack, the Dungeon Master can judge it using the same attack-based boundary as any other physical effect.'
				}
			]
		},
		{
			id: 'secondary-effects',
			title: 'Poison and Secondary Effects',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward does not grant immunity to poison, disease, paralysis, level drain, or other special effects simply because those effects are delivered by a qualifying physical attack.'
				},
				{
					type: 'paragraph',
					content:
						'If a poisonous bite deals physical damage and also requires a poison saving throw, Blade Ward can reduce the bite’s damage dice while the poison is resolved normally.'
				},
				{
					type: 'paragraph',
					content:
						'The same principle applies to other riders: reduce the physical damage dice and resolve the separate effect under its own rules.'
				}
			]
		},
		{
			id: 'stacking',
			title: 'Stacking with Other Defensive Magic',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward does not stack with itself. Multiple instances do not subtract multiple points from each damage die.'
				},
				{
					type: 'paragraph',
					content:
						'The cantrip can function alongside defenses that work differently, such as Armor Class changes, attack penalties, or effects that cause attacks to miss.'
				},
				{
					type: 'paragraph',
					content:
						'If another magical effect directly reduces the same physical damage, use the greater applicable reduction rather than adding both reductions together. This is a D&D Portal conversion ruling intended to prevent several similar wards from multiplying their effect.'
				},
				{
					type: 'paragraph',
					content:
						'If another effect completely negates the attack or its damage, Blade Ward has no remaining damage to modify for that attack.'
				}
			]
		},
		{
			id: 'class-access',
			title: 'Magic-User and Illusionist Access',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward is listed as a Magic-User 0 cantrip because that is the primary cantrip list used for the conversion.'
				},
				{
					type: 'paragraph',
					content:
						'Illusionists can gain access through the normal AD&D 1e rules that allow them to learn and use Magic-User cantrips in addition to their own specialized minor illusions.'
				},
				{
					type: 'paragraph',
					content:
						'Illusionist access therefore does not require a second independent spell-list entry on the Blade Ward statblock.'
				}
			]
		},
		{
			id: 'relationship-to-2e',
			title: 'Relationship to the 2e Conversion',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The 1e and 2e Portal conversions use the same core per-die damage reduction because that mechanic fits physical-protection magic in both editions.'
				},
				{
					type: 'paragraph',
					content:
						'Their place in the spell systems is very different. The 1e version is a 0-level Magic-User cantrip under the Unearthed Arcana rules, while the 2e version is a normal 1st-level Wizard spell.'
				},
				{
					type: 'paragraph',
					content:
						'The 1e version also uses a Casting Time of 1/2 segment and the Personal cantrip category, while the 2e version uses the normal 2e Casting Time 1 format.'
				},
				{
					type: 'paragraph',
					content:
						'Separate edition pages are therefore necessary even though their damage-reduction formulas are intentionally similar.'
				}
			]
		}
	],

	faq: [
		'did-blade-ward-exist-in-adnd-1e',
		'why-is-blade-ward-a-0-level-cantrip-in-1e',
		'how-do-adnd-1e-cantrips-work-for-a-magic-user',
		'how-much-damage-does-blade-ward-reduce-in-1e',
		'does-blade-ward-work-against-magical-weapons-natural-attacks-and-missiles-in-1e',
		'does-blade-ward-protect-against-spells-energy-damage-and-falls-in-1e',
		'how-does-blade-ward-interact-with-shield-protection-from-normal-missiles-and-stoneskin-in-1e'
	]
};

export default spell;

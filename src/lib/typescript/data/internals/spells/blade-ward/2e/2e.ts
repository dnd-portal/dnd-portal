const spell = {
	id: 'blade-ward',
	edition: '2e',

	name: 'Blade Ward',

	contentStatus: 'portal-conversion',
	basedOnEdition: '5e',

	publication: {
		edition: '2e',
		source: 'dnd-portal-conversion'
	},

	level: 1,
	school: 'Abjuration',
	subschool: null,
	descriptors: [],

	spellLists: [
		{ class: 'Wizard', level: 1 }
	],

	bardAccess: {
		available: true,
		method: 'normal-wizard-spell-learning'
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
		value: 1,
		unit: 'segment'
	},

	areaOfEffect: {
		type: 'caster'
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
			'spell-generated-attacks',
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
		'portal-conversion'
	],

	summary:
		'Blade Ward is a D&D Portal conversion of the later defensive spell into AD&D 2e. It is a 1st-level Wizard Abjuration with Range 0, Casting Time 1, and a duration of 1 round. While the ward lasts, reduce each damage die from a successful physical weapon, missile, unarmed, or natural attack by 1, to a minimum of 1 point per die. Magical weapons are affected normally. Energy damage, attacks produced directly by spells or similar magical effects, falls, and other non-attack hazards are not reduced. The spell does not scale with caster level.',

	description: [
		{
			type: 'paragraph',
			text:
				'You surround yourself with a brief defensive ward that blunts physical blows. For 1 round, each damage die from a successful physical weapon, missile, unarmed, or natural attack is reduced by 1, to a minimum of 1 point per die. The ward protects only the caster and does not reduce energy damage, spell-produced attacks, falls, or similar hazards.'
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
						'Blade Ward is not an official AD&D 2e spell. The D&D Portal version is a conversion of the later Blade Ward concept into mechanics designed to feel native to 2nd Edition.'
				},
				{
					type: 'paragraph',
					content:
						'The conversion keeps the core identity of Blade Ward: a short-lived defensive spell that makes physical attacks less damaging. It does not import later-edition terms such as resistance, Damage Reduction, Concentration, or spell slots.'
				},
				{
					type: 'paragraph',
					content:
						'Instead, the spell follows the presentation and defensive logic of AD&D 2e Wizard spells, including Range 0, Area of Effect: The caster, Casting Time 1, and a fixed 1-round duration.'
				}
			]
		},
		{
			id: 'why-first-level',
			title: 'Why Blade Ward Is a 1st-Level Spell',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Core AD&D 2e does not use the same general 0-level cantrip structure found in later editions. Cantrip itself is a 1st-level Wizard spell used to produce minor magical effects.'
				},
				{
					type: 'paragraph',
					content:
						'Blade Ward provides a meaningful combat defense rather than a trivial magical flourish, so placing it at 1st level fits the edition better than creating a separate 0-level combat spell category.'
				},
				{
					type: 'paragraph',
					content:
						'The spell is intentionally narrow and short-lived so that it remains appropriate for 1st level rather than competing with stronger defensive magic such as Protection from Normal Missiles, Protection from Normal Edged Weapons, or Stoneskin.'
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
						'Blade Ward is a 1st-level Abjuration spell for Wizards. It has Range 0, affects only the caster, requires verbal and somatic components, and has Casting Time 1.'
				},
				{
					type: 'paragraph',
					content:
						'For 1 round, each damage die from a successful qualifying physical attack is reduced by 1 point. No die can be reduced below 1 point by Blade Ward.'
				},
				{
					type: 'paragraph',
					content:
						'For example, a hit that normally deals 2d6 + 3 physical damage and rolls 5 and 2 becomes 4 and 1 before the +3 modifier is added. The attack would therefore deal 8 damage rather than 10.'
				},
				{
					type: 'paragraph',
					content:
						'Static bonuses are not reduced. Blade Ward modifies the damage dice themselves, not Strength bonuses, magical enhancement bonuses, specialization bonuses, or other flat modifiers.'
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
						'Blade Ward is intended to protect against ordinary physical blows. Hand-held weapons, thrown weapons, projectile weapons, unarmed strikes, and natural weapons can all qualify.'
				},
				{
					type: 'paragraph',
					content:
						'A sword slash, mace strike, spear thrust, arrow, thrown axe, claw, bite, horn, tail strike, or similar physical attack can therefore have its damage dice reduced by the ward.'
				},
				{
					type: 'paragraph',
					content:
						'The spell does not depend on a modern rules category called a weapon attack. AD&D 2e does not use that later terminology in the same formal way.'
				},
				{
					type: 'paragraph',
					content:
						'When an unusual monster attack is involved, use the nature of the attack. A direct physical blow can qualify; a magical, energy-based, constricting, environmental, or otherwise non-attack effect normally does not.'
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
						'Magical weapons are not excluded from Blade Ward. A +1 sword, enchanted arrow, or other magical weapon can still have its physical damage dice reduced.'
				},
				{
					type: 'paragraph',
					content:
						'This follows the same broad design logic as stronger AD&D 2e protective spells that continue to reduce certain damage even when the attacking weapon is magical.'
				},
				{
					type: 'paragraph',
					content:
						'The weapon’s magical status does not cause Blade Ward to fail. However, extra energy damage or a separate magical effect produced by the weapon is not automatically reduced.'
				},
				{
					type: 'paragraph',
					content:
						'For example, if a weapon deals normal physical damage plus additional fire damage, Blade Ward reduces the physical damage dice but leaves the fire damage unchanged.'
				}
			]
		},
		{
			id: 'spells-and-energy-damage',
			title: 'Spells and Energy Damage',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward is not general resistance to damage. It does not reduce fire, cold, electricity, acid, or other energy damage simply because the caster is currently warded.'
				},
				{
					type: 'paragraph',
					content:
						'Attacks created directly by spells or similar magical effects are also outside the ward’s normal protection. A spell that merely looks like a sword, missile, or claw does not become a qualifying physical weapon attack because of its appearance.'
				},
				{
					type: 'paragraph',
					content:
						'This distinction keeps Blade Ward focused on mundane and magical physical attacks while leaving direct magical offense to other defensive spells.'
				}
			]
		},
		{
			id: 'non-attack-hazards',
			title: 'Falls and Other Non-Attack Hazards',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward does not reduce falling damage. A fall is physical harm, but it is not a successful physical attack against the caster.'
				},
				{
					type: 'paragraph',
					content:
						'The ward likewise does not normally reduce damage from collapsing terrain, immersion in acid, flaming oil, suffocation, constriction, inhaled poison, or similar hazards.'
				},
				{
					type: 'paragraph',
					content:
						'The key distinction is between being struck by an attack and suffering harm from the environment or another non-attack effect.'
				}
			]
		},
		{
			id: 'duration-and-action-economy',
			title: 'Duration and Casting Time',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward lasts for 1 round. It is meant to be a brief emergency defense rather than a long-duration protective spell.'
				},
				{
					type: 'paragraph',
					content:
						'Its Casting Time is 1, using native AD&D 2e spell terminology. The spell is therefore quick relative to many other spells but still occupies the caster’s spellcasting action for the round.'
				},
				{
					type: 'paragraph',
					content:
						'The duration does not increase with level. A 1st-level Wizard and a much higher-level Wizard receive the same 1-round ward.'
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
						'Blade Ward does not stack with itself. Casting it again does not produce a double reduction on the same damage dice.'
				},
				{
					type: 'paragraph',
					content:
						'It can function alongside defenses that work through a different mechanic, such as Armor Class changes, attack penalties, or miss chances.'
				},
				{
					type: 'paragraph',
					content:
						'If another magical effect directly reduces the same physical damage, use the greater applicable reduction instead of adding both reductions together. This prevents multiple similar wards from turning a modest 1st-level defense into disproportionately large per-die damage reduction.'
				},
				{
					type: 'paragraph',
					content:
						'If another effect completely prevents the attack or its damage, there is no remaining damage for Blade Ward to modify.'
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
						'Blade Ward is presented as a 1st-level Wizard spell. It belongs to the Wizard spell system rather than a modern multi-class spell-list structure.'
				},
				{
					type: 'paragraph',
					content:
						'Bards can gain access through the normal AD&D 2e rules that allow them to learn and cast Wizard spells. Bard therefore does not need a separate spell-list entry on the Blade Ward statblock.'
				},
				{
					type: 'paragraph',
					content:
						'Sorcerer and Warlock are not added retroactively. They are not part of the core AD&D 2e class structure represented by this conversion.'
				}
			]
		},
		{
			id: 'relationship-to-later-editions',
			title: 'Relationship to Later Blade Ward Versions',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The 2e conversion preserves the later spell’s basic identity: a short defensive ward against physical attacks.'
				},
				{
					type: 'paragraph',
					content:
						'It does not preserve the exact 5e mechanic of resistance and half damage. AD&D 2e has its own defensive language and several official protection spells reduce or negate physical attacks in other ways.'
				},
				{
					type: 'paragraph',
					content:
						'Reducing each physical damage die by 1 creates a result that feels native to AD&D 2e while keeping the spell clearly weaker than higher-level protection spells.'
				}
			]
		}
	],

	faq: [
		'did-blade-ward-exist-in-adnd-2e',
		'why-is-blade-ward-a-1st-level-spell-in-2e',
		'how-much-damage-does-blade-ward-reduce-in-2e',
		'does-blade-ward-work-against-magical-weapons-in-2e',
		'does-blade-ward-protect-against-natural-attacks-and-missiles-in-2e',
		'does-blade-ward-protect-against-spells-falls-and-energy-damage-in-2e',
		'how-does-blade-ward-stack-with-other-defensive-spells-in-2e'
	]
};

export default spell;

const spell = {
	id: 'acid-splash',
	edition: '5e',

	name: 'Acid Splash',

	contentStatus: 'published',

	publication: {
		edition: '5e',
		year: 2014,
		source: 'players-handbook-5e'
	},

	rulesSource: 'srd-5-1',

	level: 0,
	school: 'Conjuration',

	castingTime: {
		value: 1,
		unit: 'action'
	},

	range: {
		type: 'distance',
		value: 60,
		unit: 'feet'
	},

	duration: {
		type: 'instantaneous'
	},

	components: {
		verbal: true,
		somatic: true,
		material: false
	},

	targeting: {
		minTargets: 1,
		maxTargets: 2,
		targetType: 'creature',
		requiresSight: true,
		whenMultipleTargets: {
			maxDistanceBetweenTargets: {
				value: 5,
				unit: 'feet'
			}
		}
	},

	resolution: {
		type: 'saving-throw',
		attackRoll: false,
		savingThrow: {
			ability: 'Dexterity',
			onFailure: 'full-damage',
			onSuccess: 'no-damage'
		}
	},

	damage: {
		dice: '1d6',
		type: 'acid',
		scaling: {
			type: 'character-level',
			levels: [
				{
					level: 5,
					dice: '2d6'
				},
				{
					level: 11,
					dice: '3d6'
				},
				{
					level: 17,
					dice: '4d6'
				}
			]
		}
	},

	spellLists: [
		{
			class: 'Sorcerer',
			level: 0
		},
		{
			class: 'Wizard',
			level: 0
		}
	],

	source: 'players-handbook-5e',

	summary:
		'Acid Splash is a Conjuration cantrip with a range of 60 feet that targets one or two creatures you can see. If two creatures are chosen, they must be within 5 feet of each other. Each target makes its own Dexterity saving throw, taking 1d6 acid damage on a failed save and no damage on a successful one. The damage increases to 2d6 at character level 5, 3d6 at level 11, and 4d6 at level 17.',

	quickRules: [
		{
			label: 'Save',
			value: 'Dexterity'
		},
		{
			label: 'Failure',
			value: '1d6 acid damage'
		},
		{
			label: 'Success',
			value: 'No damage'
		},
		{
			label: 'Targets',
			value: 'One or two visible creatures'
		},
		{
			label: 'Two Targets',
			value: 'Must be within 5 feet of each other'
		},
		{
			label: 'Level 5',
			value: '2d6 acid damage'
		},
		{
			label: 'Level 11',
			value: '3d6 acid damage'
		},
		{
			label: 'Level 17',
			value: '4d6 acid damage'
		}
	],

	description: [
		{
			type: 'paragraph',
			text:
				'You form a small mass of magical acid and send it toward one or two creatures you can see within range. Each chosen creature must avoid the incoming acid with a Dexterity saving throw. A creature that fails the save takes acid damage, while a successful save avoids the damage entirely. If you choose two creatures, they must be standing within 5 feet of one another.'
		}
	],

	sections: [
		{
			id: 'how-acid-splash-works',
			title: 'How Acid Splash Works',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Splash is a Conjuration cantrip that takes one action to cast and requires verbal and somatic components. Its duration is instantaneous, so the spell is resolved when it is cast rather than remaining active on the battlefield.'
				},
				{
					type: 'paragraph',
					content:
						'The caster chooses either one or two creatures they can see within 60 feet. The caster does not make a spell attack. Instead, each chosen creature makes its own Dexterity saving throw against the caster\'s spell save DC.'
				},
				{
					type: 'paragraph',
					content:
						'A creature that fails the saving throw takes 1d6 acid damage. A creature that succeeds takes no damage. Acid Splash does not include a half-damage result on a successful save.'
				},
				{
					type: 'paragraph',
					content:
						'When two creatures are targeted, they resolve their saving throws independently. One target can fail while the other succeeds, and each target that fails takes the spell\'s full current damage rather than sharing or dividing the damage between them.'
				},
				{
					type: 'paragraph',
					content:
						'The spell does not create ongoing acid damage, a pool of acid, a damaging surface, or another persistent environmental effect. Unless another rule creates a separate consequence, the normal magical effect ends immediately after the saving throws and damage are resolved.'
				}
			]
		},

		{
			id: 'range-and-targeting',
			title: 'Range and Targeting',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Splash has a fixed range of 60 feet. Unlike the Close range used by the 3e and 3.5e versions, the 2014 spell does not extend its range as the caster gains levels.'
				},
				{
					type: 'paragraph',
					content:
						'The caster may choose one visible creature or two visible creatures. If two creatures are selected, both must be within the spell\'s 60-foot range and they must also be within 5 feet of each other.'
				},
				{
					type: 'paragraph',
					content:
						'The 2014 version is not an area-of-effect spell. Choosing two nearby creatures does not create a 5-foot-radius zone or automatically affect every creature standing nearby. The chosen creatures are individual targets of the same casting.'
				},
				{
					type: 'paragraph',
					content:
						'Visibility is part of the targeting requirement. A creature that the caster cannot see is not a valid target for this version of Acid Splash merely because the caster knows or guesses where that creature is located.'
				},
				{
					type: 'paragraph',
					content:
						'The spell targets creatures rather than creatures or objects. A door, lock, rope, weapon, container, or other object is therefore not a valid direct target of the 2014 Acid Splash spell.'
				}
			]
		},

		{
			id: 'damage-and-combat-use',
			title: 'Damage and Combat Use',
			blocks: [
				{
					type: 'paragraph',
					content:
						'At character levels 1 through 4, a target that fails its Dexterity saving throw takes 1d6 acid damage. The damage increases to 2d6 at character level 5, 3d6 at level 11, and 4d6 at level 17.'
				},
				{
					type: 'paragraph',
					content:
						'This progression uses total character level rather than the level of the class that granted the cantrip. A multiclass character therefore uses the same cantrip scaling as any other character of the same total level.'
				},
				{
					type: 'paragraph',
					content:
						'For example, a Sorcerer 1 / Fighter 4 is a 5th-level character. That character\'s Acid Splash deals 2d6 acid damage on a failed saving throw even though only one of those levels is a Sorcerer level.'
				},
				{
					type: 'paragraph',
					content:
						'The spell is most efficient when two enemies are close enough to satisfy the 5-foot separation requirement. Each creature makes a separate save, and each creature that fails can take the full current damage. The spell does not divide one damage roll between the two targets.'
				},
				{
					type: 'paragraph',
					content:
						'Acid Splash does not make an attack roll, so it does not score critical hits through the normal critical-hit rules. Effects that grant advantage on attack rolls likewise do not directly improve the spell because its resolution is based on the targets\' Dexterity saving throws.'
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
						'Acid Splash appears on both the Sorcerer and Wizard cantrip lists in the 2014 core rules. For both classes, it is a 0-level spell and can be cast without expending a spell slot.'
				},
				{
					type: 'paragraph',
					content:
						'Sorcerers use Charisma when determining the spell save DC for Acid Splash, while Wizards use Intelligence. The spell\'s range, targeting, damage dice, scaling, and Dexterity-saving-throw requirement do not otherwise change between the two classes.'
				},
				{
					type: 'paragraph',
					content:
						'Because the spell uses a saving throw rather than a spell attack, the most important class-dependent number is the spell save DC. A higher spellcasting ability modifier can make the Dexterity save more difficult even though it does not add directly to Acid Splash\'s damage.'
				},
				{
					type: 'paragraph',
					content:
						'Later 5e material introduced additional ways to gain Acid Splash, including later class access. Those later options should be tracked separately from the original 2014 Sorcerer and Wizard spell-list entries so publication history remains clear.'
				}
			]
		},

		{
			id: 'edition-notes',
			title: 'Edition Notes',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The 2014 version of Acid Splash differs substantially from the 3e and 3.5e spell. The older versions relied on a ranged touch attack against a single target, while the 2014 spell instead allows one or two creatures to make Dexterity saving throws.'
				},
				{
					type: 'paragraph',
					content:
						'The damage profile also changed. The 3.x spell dealt a fixed 1d3 acid damage, while the 2014 cantrip begins at 1d6 and automatically increases as the character reaches levels 5, 11, and 17.'
				},
				{
					type: 'paragraph',
					content:
						'The 2014 version should also not be confused with the 2024 revision. The later rules redesign Acid Splash as an actual small area effect, so targeting questions must always be answered using the specific edition selected on the page.'
				}
			]
		}
	],

	faq: [
		'can-acid-splash-target-two-creatures-in-5e',
		'can-acid-splash-target-objects-in-5e',
		'can-acid-splash-be-used-with-twinned-spell-in-5e',
		'does-evasion-work-against-acid-splash-in-5e',
		'does-acid-splash-scale-with-caster-level-in-5e'
	]
};

export default spell;

const spell = {
	id: 'acid-splash',
	edition: '4e',
	contentStatus: 'portal-conversion',

	name: 'Acid Splash',

	conversion: {
		isConverted: true,
		convertedBy: 'D&D Portal',
		targetEdition: '4e',
		status: 'homebrew-conversion',
		rulesCompatibility: 'designed-for-native-edition-rules',

		officialSpellOrPowerExists: false,

		officialNameConflict: {
			exists: true,
			type: 'feat',
			name: 'Acid Splash',
			source: 'dragon-380',
			page: 42
		},

		notes: [
			'Acid Splash was not published as a spell or attack power for D&D 4e.',
			'An official D&D 4e feat named Acid Splash exists, but it is unrelated to this converted spell.',
			'This conversion is designed as a level 1 at-will arcane attack power.',
			'Wizard and Sorcerer variants use their normal primary attack abilities.',
			'The earlier ranged touch attack is represented as an attack against Reflex.',
			'A limited adjacent splash effect was added to give the converted power its own tactical identity.'
		]
	},

	power: {
		level: 1,
		usage: 'at-will',
		type: 'attack',
		source: 'Arcane'
	},

	keywords: [
		'Acid',
		'Arcane',
		'Implement'
	],

	action: {
		type: 'standard-action',
		label: 'Standard Action'
	},

	range: {
		type: 'ranged',
		squares: 10,
		label: 'Ranged 10'
	},

	target: {
		type: 'creature',
		count: 1,
		label: 'One creature'
	},

	classes: [
		{
			class: 'Wizard',
			level: 1,
			spellcastingAbility: 'Intelligence'
		},
		{
			class: 'Sorcerer',
			level: 1,
			spellcastingAbility: 'Charisma'
		}
	],

	spellcastingAbility: {
		Wizard: 'Intelligence',
		Sorcerer: 'Charisma'
	},

	attack: {
		ability: 'spellcasting-ability',
		defense: 'Reflex',
		label: 'Spellcasting ability vs. Reflex'
	},

	hit: {
		damage: {
			dice: '1d6',
			modifier: 'spellcasting-ability',
			type: 'acid'
		},

		label:
			'1d6 + spellcasting ability modifier acid damage.'
	},

	splash: {
		trigger: 'on-hit',

		target: {
			type: 'enemy',
			count: 1,
			position: 'adjacent-to-primary-target'
		},

		damage: {
			dice: null,
			modifier: 'spellcasting-ability',
			type: 'acid'
		},

		attackRoll: false,

		label:
			'On a hit, choose one enemy adjacent to the target. That enemy takes acid damage equal to your spellcasting ability modifier.'
	},

	miss: {
		damage: 0,
		label: 'No damage.'
	},

	scaling: [
		{
			level: 21,

			hit: {
				damage: {
					dice: '2d6',
					modifier: 'spellcasting-ability',
					type: 'acid'
				}
			},

			splash: {
				changes: false
			},

			label:
				'Primary damage increases to 2d6 + spellcasting ability modifier. Splash damage remains unchanged.'
		}
	],

	rangedBasicAttack: false,

	summary:
		'Acid Splash is a D&D Portal conversion for D&D 4e. It is a level 1 at-will Arcane attack power with a range of 10 squares that targets one creature. On a hit, the target takes 1d6 + spellcasting ability modifier acid damage, and one adjacent enemy can take acid damage equal to the same modifier. Wizards use Intelligence and Sorcerers use Charisma as their spellcasting ability.',

	combatSummary: [
		{
			label: 'Spellcasting Ability',
			text:
				'Intelligence for Wizards; Charisma for Sorcerers.'
		},
		{
			label: 'Attack',
			text:
				'Spellcasting ability vs. Reflex.'
		},
		{
			label: 'Hit',
			text:
				'1d6 + spellcasting ability modifier acid damage.'
		},
		{
			label: 'Splash',
			text:
				'On a hit, choose one enemy adjacent to the target. That enemy takes acid damage equal to your spellcasting ability modifier.'
		},
		{
			label: 'Miss',
			text:
				'No damage.'
		},
		{
			label: 'Level 21',
			text:
				'Primary damage increases to 2d6 + spellcasting ability modifier. Splash damage remains unchanged.'
		}
	],

	description: [
		{
			type: 'paragraph',
			text:
				'You gather unstable magical acid into a compact projectile and send it toward one creature within 10 squares. Make an attack using your spellcasting ability against the target’s Reflex defense. Wizards use Intelligence and Sorcerers use Charisma.'
		},
		{
			type: 'paragraph',
			text:
				'On a hit, the target takes 1d6 + your spellcasting ability modifier acid damage. You can then choose one enemy adjacent to the target; that enemy takes acid damage equal to your spellcasting ability modifier. On a miss, the power deals no damage.'
		},
		{
			type: 'paragraph',
			text:
				'At 21st level, the primary damage increases to 2d6 + your spellcasting ability modifier. The splash damage remains equal to your spellcasting ability modifier.'
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
						'Acid Splash is a level 1 at-will Arcane attack power created as a D&D Portal conversion for D&D 4e. It takes a standard action, has a range of 10 squares, targets one creature, and uses the Acid, Arcane, and Implement keywords.'
				},
				{
					type: 'paragraph',
					content:
						'The caster makes an attack against the target’s Reflex defense. Wizards use Intelligence for this attack, while Sorcerers use Charisma. D&D Portal refers to whichever of those abilities applies as the caster’s spellcasting ability.'
				},
				{
					type: 'paragraph',
					content:
						'On a hit, the primary target takes 1d6 plus the caster’s spellcasting ability modifier in acid damage. The caster can then choose one enemy adjacent to the primary target, which takes acid damage equal to that same modifier.'
				},
				{
					type: 'paragraph',
					content:
						'The adjacent enemy is not attacked separately. The splash damage is a secondary result of successfully hitting the primary target.'
				},
				{
					type: 'paragraph',
					content:
						'If the primary attack misses, the power deals no primary or splash damage.'
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
						'Acid Splash is a Ranged 10 power. The caster chooses one creature within 10 squares as the primary target and makes the normal attack against that creature’s Reflex defense.'
				},
				{
					type: 'paragraph',
					content:
						'The splash effect can only occur after the primary target has been hit. The caster can then choose one enemy adjacent to that target.'
				},
				{
					type: 'paragraph',
					content:
						'The secondary enemy does not need to be attacked separately because the splash damage is part of the successful primary hit rather than another attack.'
				},
				{
					type: 'paragraph',
					content:
						'If there is no eligible adjacent enemy, Acid Splash still deals its normal primary damage. The splash portion is simply unused.'
				},
				{
					type: 'paragraph',
					content:
						'Normal D&D 4e rules for ranged attacks, line of sight, line of effect, cover, concealment, and similar combat circumstances continue to apply.'
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
						'At levels 1 through 20, a successful Acid Splash attack deals 1d6 plus the caster’s spellcasting ability modifier in acid damage to the primary target.'
				},
				{
					type: 'paragraph',
					content:
						'For a Wizard, the spellcasting ability is Intelligence. A Wizard with an Intelligence modifier of +4 therefore deals 1d6 + 4 acid damage to the primary target.'
				},
				{
					type: 'paragraph',
					content:
						'For a Sorcerer, the spellcasting ability is Charisma. A Sorcerer with a Charisma modifier of +4 likewise deals 1d6 + 4 acid damage.'
				},
				{
					type: 'paragraph',
					content:
						'After a successful hit, one enemy adjacent to the primary target can take additional acid damage equal to the same ability modifier. With a +4 modifier, that secondary enemy therefore takes 4 acid damage.'
				},
				{
					type: 'paragraph',
					content:
						'At 21st level, the primary damage increases to 2d6 plus the spellcasting ability modifier. The secondary splash does not gain another damage die and remains equal to the ability modifier.'
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
						'The Portal conversion supports both Wizard and Sorcerer characters. The two class variants share the same power level, usage, action, range, target, keywords, damage dice, splash mechanic, and level scaling.'
				},
				{
					type: 'paragraph',
					content:
						'Wizards use Intelligence as their spellcasting ability for Acid Splash. Their attack is Intelligence vs. Reflex, their primary damage is 1d6 + Intelligence modifier, and their splash damage equals their Intelligence modifier.'
				},
				{
					type: 'paragraph',
					content:
						'Sorcerers use Charisma instead. Their attack is Charisma vs. Reflex, their primary damage is 1d6 + Charisma modifier, and their splash damage equals their Charisma modifier.'
				},
				{
					type: 'paragraph',
					content:
						'The class-specific ability is the only intended mechanical difference between the two versions of this conversion.'
				}
			]
		},

		{
			id: 'dnd-portal-conversion-notes',
			title: 'D&D Portal Conversion Notes',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Splash was not officially published as a spell or attack power for D&D 4e. This page therefore presents a D&D Portal conversion rather than historical official content.'
				},
				{
					type: 'paragraph',
					content:
						'The conversion uses a level 1 At-Will Attack structure because that is the normal 4e framework for reusable offensive class powers available from the beginning of play.'
				},
				{
					type: 'paragraph',
					content:
						'The ranged touch attack used by earlier editions has been converted into an attack against Reflex, allowing the power to use the normal 4e attack-versus-defense system.'
				},
				{
					type: 'paragraph',
					content:
						'The adjacent splash damage is an original D&D Portal conversion mechanic intended to give the spell a distinct battlefield role while preserving the Acid Splash identity.'
				},
				{
					type: 'paragraph',
					content:
						'The conversion is not considered a ranged basic attack. That distinction helps separate Acid Splash from the official Sorcerer power Acid Orb.'
				}
			]
		}
	],

	faq: [
		'did-acid-splash-exist-as-a-spell-in-4e',
		'is-the-dnd-portal-4e-acid-splash-official',
		'what-is-the-difference-between-acid-splash-and-acid-orb-in-4e',
		'why-does-acid-splash-attack-reflex-instead-of-touch-ac-in-4e',
		'can-acid-splash-be-used-as-a-ranged-basic-attack-in-4e'
	]
};

export default spell;

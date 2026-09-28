const spell = {
	id: 'acid-splash',
	edition: '3e',

	name: 'Acid Splash',

	level: 0,
	school: 'Conjuration',
	subschool: 'Creation',
	descriptors: ['Acid'],

	castingTime: {
		value: 1,
		unit: 'action'
	},

	range: {
		type: 'close',
		base: 25,
		scaling: {
			distance: 5,
			perCasterLevels: 2
		},
		unit: 'feet'
	},

	effect: 'One acid projectile',

	duration: {
		type: 'instantaneous'
	},

	components: {
		verbal: true,
		somatic: true,
		material: false
	},

	savingThrow: {
		allowed: false
	},

	spellResistance: true,

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

	attack: {
		type: 'ranged-touch'
	},

	damage: {
		dice: '1d3',
		type: 'acid'
	},

	source: 'magic-of-faerun-3e',

	summary:
		'Acid Splash is a ranged 0-level spell that creates a small projectile of magical acid. The caster makes a ranged touch attack against one target, dealing 1d3 acid damage on a hit. The spell allows no saving throw, but the 3e version is subject to spell resistance.',

	description: [
		{
			type: 'paragraph',
			text:
				'You create a small amount of magical acid and propel it toward a target within range. Resolve the spell with a ranged touch attack. If the attack hits, the target takes 1d3 acid damage. If the attack misses, the spell ends without dealing damage or creating a secondary splash effect.'
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
						'Acid Splash is a 0-level Conjuration spell with the Creation subschool and the Acid descriptor. It takes one action to cast and requires verbal and somatic components. The spell produces a single projectile of magical acid that the caster directs toward a target within range.'
				},
				{
					type: 'paragraph',
					content:
						'The spell does not automatically affect its target. After casting Acid Splash, the caster makes a ranged touch attack. A successful attack deals 1d3 acid damage, while a failed attack deals no damage. Despite the name of the spell, missing does not create a separate splash effect around the target or point of impact.'
				},
				{
					type: 'paragraph',
					content:
						'Acid Splash has an instantaneous duration. Its normal effect is resolved as part of the attack and does not continue dealing acid damage during later rounds. The spell does not create an ongoing pool, cloud, coating, or other persistent area of acid.'
				},
				{
					type: 'paragraph',
					content:
						'The 3e version is subject to spell resistance. When Acid Splash is used against a creature that has spell resistance, landing the ranged touch attack is not necessarily enough: the caster must also overcome that resistance before the spell can affect the creature. This is one of the important differences between the original 3e spell and its later 3.5e revision.'
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
						'Acid Splash uses the Close range category. Its maximum range begins at 25 feet and increases by 5 feet for every two caster levels. Increasing caster level therefore allows the spell to reach progressively farther targets even though its base damage does not increase.'
				},
				{
					type: 'paragraph',
					content:
						'Because Acid Splash requires a ranged touch attack, the attack is resolved against the target’s touch Armor Class rather than its normal Armor Class. Defenses based primarily on physically stopping an attack, such as armor, shields, and natural armor, therefore do not protect the target in the same way they would against an ordinary attack.'
				},
				{
					type: 'paragraph',
					content:
						'Touch Armor Class can still benefit from defenses that remain relevant to touch attacks, so Acid Splash is not automatically easy to land. A mobile target, a small creature, or a target protected by appropriate magical defenses may still have a comparatively strong touch AC.'
				},
				{
					type: 'paragraph',
					content:
						'The spell creates one projectile and resolves one attack against its intended target. It has no listed area and does not automatically affect creatures standing nearby. Normal combat rules involving ranged attacks, line of effect, cover, concealment, and similar circumstances still apply when relevant.'
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
						'When its ranged touch attack succeeds, Acid Splash deals 1d3 acid damage. The spell has no built-in damage progression based on caster level, so increasing caster level does not automatically add more dice or increase the size of the damage die.'
				},
				{
					type: 'paragraph',
					content:
						'Caster level still matters because it increases the spell’s Close range and can matter when the caster needs to overcome spell resistance. This means a more experienced caster can use Acid Splash from farther away and may be better able to affect resistant creatures without the spell itself becoming more damaging.'
				},
				{
					type: 'paragraph',
					content:
						'Acid Splash can be useful against opponents whose normal Armor Class is much higher than their touch Armor Class. Heavy physical protection may make an ordinary weapon attack difficult while providing much less protection against the spell’s ranged touch attack.'
				},
				{
					type: 'paragraph',
					content:
						'The 3e version also has an important limitation: spell resistance applies. Against a resistant creature, Acid Splash may therefore require both a successful ranged touch attack and a successful attempt to overcome spell resistance before its acid damage can take effect.'
				},
				{
					type: 'paragraph',
					content:
						'The word “Splash” should not be interpreted as granting the spell the rules of a thrown splash weapon. A missed attack does not damage adjacent creatures, and there is no separate splash-damage value or radius. The spell resolves according to its own ranged touch attack and damage rules.'
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
						'Acid Splash is available to both Sorcerers and Wizards as a 0-level spell in its original 3e appearance. Unlike the later 3.5e version, it was introduced outside the core Player’s Handbook and appears in Magic of Faerûn.'
				},
				{
					type: 'paragraph',
					content:
						'Sorcerers can select Acid Splash through their normal spells-known rules, while Wizards can add and prepare it through the Wizard spellcasting and spellbook systems. For both classes, it remains a 0-level arcane spell with the same range, attack, damage, saving throw, and spell-resistance mechanics.'
				},
				{
					type: 'paragraph',
					content:
						'Its low spell level makes Acid Splash a minor offensive option rather than a major source of damage. Its main mechanical characteristics are the ranged touch attack, acid damage type, lack of a saving throw, and interaction with spell resistance rather than raw damage output.'
				},
				{
					type: 'paragraph',
					content:
						'Other character options may grant access to the spell or modify the way it is cast, but those effects are separate from the base Acid Splash rules. Unless another rule explicitly changes the spell, its underlying 3e mechanics remain the same.'
				}
			]
		}
	],

	faq: [
		'does-acid-splash-use-touch-ac-in-3e',
		'does-acid-splash-allow-a-saving-throw-in-3e',
		'does-spell-resistance-apply-to-acid-splash-in-3e',
		'does-acid-splash-damage-scale-with-caster-level-in-3e',
		'does-acid-splash-deal-splash-damage-if-it-misses-in-3e'
	]
};

export default spell;
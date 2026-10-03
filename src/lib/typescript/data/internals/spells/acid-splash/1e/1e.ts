const spell = {
	id: 'acid-splash',
	edition: '1e',

	name: 'Acid Splash',

	contentStatus: 'portal-conversion',
	rulesProfile: 'adnd-1e-with-unearthed-arcana-cantrips',

	conversion: {
		isConverted: true,
		convertedBy: 'D&D Portal',
		basedOnEdition: '3e',
		targetEdition: '1e',
		status: 'homebrew-conversion',
		rulesCompatibility: 'designed-for-native-edition-rules',
		officialVersionExists: false,
		notes: [
			'Acid Splash was not published as a spell in AD&D 1st Edition.',
			'This conversion uses the 0-level Magic-User cantrip system introduced in Unearthed Arcana.',
			'The conversion is intended for AD&D 1e games that use Unearthed Arcana cantrips.',
			'Damage is limited to 1 hit point to preserve the minor nature of 1e apprentice magic.',
			'The target receives a saving throw vs. spell rather than the caster making an attack roll.',
			'Normal AD&D 1e magic resistance applies before the saving throw.',
			'The spell does not cause secondary splash damage or automatic item damage.'
		]
	},

	level: 0,
	class: 'Magic-User',
	cantrip: true,
	cantripCategory: 'Person-Affecting',
	school: 'Evocation',

	range: {
		value: 1,
		unit: 'scale-inch',
		display: '1"',
		indoorEquivalent: {
			value: 10,
			unit: 'feet'
		},
		outdoorEquivalent: {
			value: 10,
			unit: 'yards'
		}
	},

	duration: {
		type: 'instantaneous'
	},

	areaOfEffect: {
		type: 'single-creature',
		display: 'One creature'
	},

	components: {
		verbal: true,
		somatic: true,
		material: false
	},

	castingTime: {
		value: 0.5,
		unit: 'segment',
		display: '1/2 segment'
	},

	savingThrow: {
		type: 'spell',
		result: 'negates',
		display: 'Spell negates'
	},

	magicResistance: {
		applies: true,
		display: 'Applies'
	},

	damage: {
		value: 1,
		type: 'acid',
		display: '1 acid damage'
	},

	scaling: null,

	source: 'dnd-portal-conversion',
	rulesReferences: [
		'unearthed-arcana-1e-cantrips',
		'adnd-1e-magic-resistance',
		'adnd-1e-distance-scale',
		'melfs-acid-arrow-1e'
	],

	summary:
		'Acid Splash is a D&D Portal conversion for AD&D 1st Edition using the cantrip rules introduced in Unearthed Arcana. It is a 0-level Magic-User Evocation cantrip with a range of 1 inch of game scale. One creature within range must save vs. spell or take 1 point of acid damage; a successful save negates the damage. Normal magic resistance applies, the spell does not scale with caster level, and it causes no secondary splash damage.',

	description: [
		{
			type: 'paragraph',
			text:
				'You conjure a tiny burst of magical acid and direct it at one creature within range. If the creature has magic resistance, resolve that resistance first. If the spell reaches the creature, it must save vs. spell or suffer 1 point of acid damage. The acid vanishes as the instantaneous cantrip ends and does not continue burning the target.'
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
						'Acid Splash is a 0-level Magic-User cantrip created as a D&D Portal conversion for AD&D 1st Edition. It assumes the cantrip system introduced in Unearthed Arcana, where apprentice Magic-Users learn and memorize minor spells before gaining access to normal 1st-level magic.'
				},
				{
					type: 'paragraph',
					content:
						'Casting Acid Splash takes one-half segment and requires verbal and somatic components. The caster chooses one creature within a range of 1 inch of game scale. The spell does not use a weapon or missile attack roll.'
				},
				{
					type: 'paragraph',
					content:
						'If the target has magic resistance, that resistance is resolved before the saving throw. A successful resistance check prevents the cantrip from affecting the creature at all.'
				},
				{
					type: 'paragraph',
					content:
						'If the spell is not stopped by magic resistance, the target makes a saving throw vs. spell. A failed save causes 1 point of acid damage, while a successful save prevents the damage completely.'
				},
				{
					type: 'paragraph',
					content:
						'The effect is instantaneous. Acid Splash does not create continuing acid damage, a lingering pool, a secondary splash radius, or an ongoing penalty after the damage has been resolved.'
				}
			]
		},
		{
			id: 'cantrip-preparation-and-use',
			title: 'Cantrip Preparation and Use',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Splash is not at-will magic. Under the Unearthed Arcana cantrip system, cantrips are memorized in advance in the same general manner as more powerful spells, and an apprentice has only a limited number available each day.'
				},
				{
					type: 'paragraph',
					content:
						'Once a Magic-User reaches 1st level, cantrip knowledge is normally left behind in favor of normal spells. A Magic-User can instead retain cantrip magic by keeping a cantrip spellbook and using the retention option provided by the cantrip rules.'
				},
				{
					type: 'paragraph',
					content:
						'Under that option, up to four retained cantrips can occupy the place of one 1st-level spell. Acid Splash therefore remains a prepared resource rather than becoming something a Magic-User can repeat indefinitely every round.'
				},
				{
					type: 'paragraph',
					content:
						'The conversion keeps the damage at only 1 point partly because several cantrips can replace a single 1st-level spell. Increasing the damage to a normal damage die would make repeated offensive cantrips compete too strongly with true 1st-level combat magic.'
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
						'Acid Splash has a range of 1 inch of AD&D game scale. Indoors or underground, 1 inch of spell range represents 10 feet. Outdoors, the same 1-inch range represents 10 yards.'
				},
				{
					type: 'paragraph',
					content:
						'The conversion preserves the scale-inch notation rather than replacing it with only a modern distance because the indoor and outdoor range distinction is part of AD&D 1e spellcasting.'
				},
				{
					type: 'paragraph',
					content:
						'Acid Splash affects one creature. Despite the name, the spell does not create an area around that creature and cannot automatically affect nearby creatures.'
				},
				{
					type: 'paragraph',
					content:
						'The caster does not roll against Armor Class. Instead, the target attempts a saving throw vs. spell after any applicable magic resistance has been resolved.'
				},
				{
					type: 'paragraph',
					content:
						'Because the spell does not use a missile attack, weapon attack matrices, missile adjustments, and the target\'s Armor Class do not directly determine whether Acid Splash deals damage.'
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
						'A target that fails its saving throw vs. spell takes exactly 1 point of acid damage. The damage does not receive an ability-score modifier and does not use a damage die.'
				},
				{
					type: 'paragraph',
					content:
						'The damage never increases with Magic-User level. Acid Splash remains a very minor offensive option even when retained by an experienced Magic-User.'
				},
				{
					type: 'paragraph',
					content:
						'This limited damage is intentional. Unearthed Arcana cantrips are apprentice-level magic, while stronger acid projectiles already exist among normal leveled spells. Melf\'s Acid Arrow, for example, occupies 2nd-level Magic-User magic and has a substantially more dangerous combat effect.'
				},
				{
					type: 'paragraph',
					content:
						'Acid Splash can still be tactically useful when a single point of damage matters, when the caster wants to attack without using a weapon, or when the target has poor saving throws. Its purpose is minor magical pressure rather than replacing normal combat spells.'
				}
			]
		},
		{
			id: 'objects-and-equipment',
			title: 'Objects and Equipment',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The Portal conversion targets one creature and does not automatically damage objects, equipment, armor, weapons, scrolls, spellbooks, or other possessions carried by the target.'
				},
				{
					type: 'paragraph',
					content:
						'Acid Splash also does not force item saving throws merely because the target suffers acid damage. Adding automatic equipment destruction would give a 0-level cantrip consequences far beyond its intended power.'
				},
				{
					type: 'paragraph',
					content:
						'AD&D 1e contains minor magic that explicitly affects objects, so object interaction does not need to be inferred from the Acid damage type. When a cantrip is intended to destroy or alter an object, its own rules can state that directly.'
				},
				{
					type: 'paragraph',
					content:
						'A Dungeon Master can still adjudicate unusual environmental uses of magical acid. Such a ruling is separate from the default Portal conversion and does not create a general object-damage rule for Acid Splash.'
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
						'This conversion is a Magic-User cantrip. It is not placed on a Sorcerer list because the later Sorcerer class is not part of the AD&D 1e class structure.'
				},
				{
					type: 'paragraph',
					content:
						'The conversion also does not automatically place Acid Splash on the Illusionist cantrip list. Unearthed Arcana provides separate cantrip traditions for Magic-Users and Illusionists, and this acid projectile is designed specifically for the Magic-User side.'
				},
				{
					type: 'paragraph',
					content:
						'Characters use Acid Splash through the same acquisition, spellbook, memorization, and retention framework that the campaign applies to other Unearthed Arcana Magic-User cantrips.'
				}
			]
		},
		{
			id: 'portal-conversion-notes',
			title: 'D&D Portal Conversion Notes',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Splash was not published as an AD&D 1st Edition spell. D&D Portal therefore marks this version as a Portal Conversion rather than presenting it as historical official content.'
				},
				{
					type: 'paragraph',
					content:
						'The conversion uses the Unearthed Arcana 0-level cantrip framework because that is the closest native 1e structure for the minor magic that later editions call Acid Splash.'
				},
				{
					type: 'paragraph',
					content:
						'The Evocation school is used as an edition-native design choice informed by 1e acid projectile magic such as Melf\'s Acid Arrow. The school should therefore be understood as part of the Portal conversion rather than a recovered official Acid Splash classification.'
				},
				{
					type: 'paragraph',
					content:
						'The conversion deliberately omits secondary splash damage. Its single-creature, 1-point effect keeps the spell within the very minor scale expected of retained apprentice cantrip magic.'
				}
			]
		}
	],

	faq: [
		'did-acid-splash-exist-in-adnd-1e',
		'why-is-acid-splash-a-zero-level-cantrip-in-1e',
		'how-do-you-prepare-and-cast-acid-splash-in-1e',
		'does-acid-splash-require-an-attack-roll-in-1e',
		'does-magic-resistance-work-against-acid-splash-in-1e'
	]
};

export default spell;

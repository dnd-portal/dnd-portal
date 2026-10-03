const spell = {
	id: 'acid-splash',
	edition: '2e',

	name: 'Acid Splash',

	contentStatus: 'portal-conversion',

	conversion: {
		isConverted: true,
		convertedBy: 'D&D Portal',
		basedOnEdition: '3e',
		targetEdition: '2e',
		status: 'homebrew-conversion',
		rulesCompatibility: 'designed-for-native-edition-rules',
		officialVersionExists: false,
		notes: [
			'Acid Splash was not published as a spell in AD&D 2nd Edition.',
			'The AD&D 2e Cantrip spell is intended for minor magical effects rather than direct hit point damage, so this conversion is a separate 1st-level Wizard spell.',
			'The conversion uses the Conjuration/Summoning school to fit AD&D 2e spell-school terminology and the edition’s existing acid magic.',
			'The primary target and creatures caught by the splash use saving throws vs. spell rather than attack rolls.',
			'A small secondary splash effect was added using AD&D 2e acid and grenade-like missile rules as design inspiration.',
			'The spell itself does not use grenade-like missile attack, range-band, or scatter rules.',
			'The spell does not scale with caster level and does not normally force item saving throws against carried equipment.'
		]
	},

	level: 1,
	class: 'Wizard',
	school: 'Conjuration/Summoning',

	castingTime: {
		value: 1,
		unit: 'segment'
	},

	range: {
		type: 'distance',
		value: 30,
		unit: 'yards'
	},

	duration: {
		type: 'instantaneous'
	},

	components: {
		verbal: true,
		somatic: true,
		material: false
	},

	areaOfEffect: {
		primary: 'One creature',
		splash: {
			radius: 3,
			unit: 'feet',
			origin: 'primary-target'
		}
	},

	savingThrow: {
		type: 'spell',
		result: 'negates',
		appliesSeparately: true
	},

	damage: {
		primary: {
			dice: '1d4',
			type: 'acid'
		},
		splash: {
			value: 1,
			type: 'acid'
		}
	},

	scaling: null,

	source: 'dnd-portal-conversion',

	summary:
		'Acid Splash is a D&D Portal conversion for AD&D 2nd Edition. It is a 1st-level Conjuration/Summoning Wizard spell with a range of 30 yards. The primary target makes a saving throw vs. spell; on a failed save, it takes 1d4 acid damage. Other creatures within 3 feet of the primary target make their own saving throws vs. spell and take 1 point of acid damage on a failure. Successful saves negate the relevant damage, and the spell does not scale with caster level.',

	description: [
		{
			type: 'paragraph',
			text:
				'You conjure a small burst of corrosive magical liquid around one creature within range. The primary target can avoid the brunt of the acid with a successful saving throw vs. spell; on a failure, it suffers 1d4 acid damage. A small amount of acid sprays onto nearby creatures, which must make their own saves or take 1 point of acid damage. The acid exists only for the instantaneous magical effect and does not continue burning in later rounds.'
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
						'Acid Splash is a 1st-level Wizard spell created as a D&D Portal conversion for AD&D 2nd Edition. It was not published as an official 2e spell. The conversion is designed to use 2e spell terminology and resolution rather than importing the later-edition cantrip structure unchanged.'
				},
				{
					type: 'paragraph',
					content:
						'The spell belongs to the Conjuration/Summoning school, takes a casting time of 1 segment, and requires verbal and somatic components. The caster chooses one creature within 30 yards as the primary target.'
				},
				{
					type: 'paragraph',
					content:
						'The primary target makes a saving throw vs. spell. On a failed save, it takes 1d4 acid damage. On a successful save, the primary damage is completely negated.'
				},
				{
					type: 'paragraph',
					content:
						'The acid also splashes onto nearby creatures. Every other creature within 3 feet of the primary target makes its own saving throw vs. spell. A creature that fails takes 1 point of acid damage; a successful save prevents that splash damage.'
				},
				{
					type: 'paragraph',
					content:
						'The spell is instantaneous. It does not continue dealing damage on later rounds, create a persistent pool of acid, or remain on the target as an ongoing corrosive effect.'
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
						'Acid Splash has a range of 30 yards. The caster selects one creature within that distance as the primary target; the spell does not require a missile attack roll against Armor Class or THAC0.'
				},
				{
					type: 'paragraph',
					content:
						'The primary target’s saving throw vs. spell determines whether it suffers the main 1d4 acid damage. This keeps the resolution compact and gives the conversion a distinctly AD&D-style defensive roll rather than reproducing the ranged touch attack used by 3e.'
				},
				{
					type: 'paragraph',
					content:
						'The 3-foot splash is measured from the primary target. Other creatures inside that distance are not additional primary targets; they are exposed only to the minor secondary acid effect.'
				},
				{
					type: 'paragraph',
					content:
						'Each creature caught by the splash resolves its own saving throw. The primary creature might succeed while a nearby creature fails, or the primary creature might take damage while every nearby creature avoids the splash.'
				},
				{
					type: 'paragraph',
					content:
						'Acid Splash does not use the grenade-like missile scatter system. There are no thrown-object range bands, miss-location rolls, bottle-breakage checks, or scatter distances associated with this spell.'
				}
			]
		},
		{
			id: 'damage-and-saving-throws',
			title: 'Damage and Saving Throws',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The primary target takes 1d4 acid damage on a failed saving throw vs. spell. A successful saving throw negates the primary damage completely; there is no half-damage result.'
				},
				{
					type: 'paragraph',
					content:
						'Creatures caught only by the splash take 1 point of acid damage on a failed save. The small fixed amount is intentional: it gives the spell a recognizable splash effect without turning a 1st-level spell into a strong area-damage option.'
				},
				{
					type: 'paragraph',
					content:
						'The conversion does not increase its damage with caster level. A higher-level Wizard gains no additional dice, additional splash damage, or larger splash radius from the base spell.'
				},
				{
					type: 'paragraph',
					content:
						'That fixed damage helps preserve space for stronger acid magic at higher spell levels. Acid Splash is intended as a minor offensive spell rather than a replacement for more powerful projectile, persistent, or area acid spells.'
				},
				{
					type: 'paragraph',
					content:
						'Creatures with magic resistance use the normal AD&D 2e magic-resistance rules when the spell would directly affect them. If magic resistance does not negate the spell, any saving throw normally allowed by Acid Splash is then resolved as usual.'
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
						'The D&D Portal conversion is a Wizard spell. AD&D 2nd Edition does not use the later standard Sorcerer class that shares Acid Splash with Wizards in 3e and 5e, so the conversion does not invent a Sorcerer spell-list entry.'
				},
				{
					type: 'paragraph',
					content:
						'As a Conjuration/Summoning spell, Acid Splash follows the normal school access and opposition-school restrictions used by the campaign. A specialist Wizard must still be permitted to use the school before the spell can be learned or prepared.'
				},
				{
					type: 'paragraph',
					content:
						'The spell is learned, written into a spellbook, memorized, and expended using the normal AD&D 2e Wizard spellcasting system. It is not at-will magic and cannot be repeatedly cast without being prepared again.'
				},
				{
					type: 'paragraph',
					content:
						'Campaign-specific classes, kits, magical research, or other rules may provide additional ways to learn the spell. Those options are separate from the base D&D Portal conversion and should follow their own access rules.'
				}
			]
		},
		{
			id: 'why-this-is-not-a-cantrip',
			title: 'Why This Is Not a Cantrip',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The name Acid Splash is strongly associated with cantrips in later editions, but AD&D 2e uses the term differently. The edition includes a 1st-level Wizard spell named Cantrip that produces minor magical effects rather than a modern level-0 spell category.'
				},
				{
					type: 'paragraph',
					content:
						'Those minor effects are not intended to inflict direct hit point damage. Treating Acid Splash as one of those effects would therefore conflict with the limits of the 2e Cantrip spell.'
				},
				{
					type: 'paragraph',
					content:
						'D&D Portal instead represents Acid Splash as its own 1st-level Wizard spell. This preserves the spell’s offensive identity while fitting the way AD&D 2e separates minor magical tricks from spells that directly injure creatures.'
				},
				{
					type: 'paragraph',
					content:
						'The level change is therefore a deliberate edition conversion, not a claim that an official 2e version of Acid Splash existed at 1st level.'
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
						'Acid Splash was first published in a later edition, so this AD&D 2e entry is original D&D Portal homebrew rather than recovered historical content. The page should be visibly labelled as a D&D Portal Conversion.'
				},
				{
					type: 'paragraph',
					content:
						'The conversion uses the 3e spell as its conceptual starting point, but its mechanics were redesigned for 2e. The ranged touch attack became a saving throw vs. spell, the spell became 1st level, and the school terminology changed to Conjuration/Summoning.'
				},
				{
					type: 'paragraph',
					content:
						'The 1-point secondary splash is a new Portal design choice inspired by the way AD&D 2e handles minor acid splash around grenade-like acid attacks. The spell intentionally does not inherit the complete physical grenade or scatter subsystem.'
				},
				{
					type: 'paragraph',
					content:
						'By default, the conversion also avoids automatic item saving throws against equipment carried by the target. That keeps a small 1st-level spell from gaining disproportionate equipment-destruction utility unless the DM chooses a special environmental ruling.'
				}
			]
		}
	],

	faq: [
		'did-acid-splash-exist-in-adnd-2e',
		'why-is-acid-splash-a-1st-level-spell-in-2e',
		'does-acid-splash-require-an-attack-roll-in-2e',
		'does-acid-splash-use-grenade-like-missile-rules-in-2e',
		'can-acid-splash-damage-items-or-equipment-in-2e'
	]
};

export default spell;

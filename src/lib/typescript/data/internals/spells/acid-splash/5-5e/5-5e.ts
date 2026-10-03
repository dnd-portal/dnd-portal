const spell = {
	id: 'acid-splash',
	edition: '5-5e',

	name: 'Acid Splash',

	contentStatus: 'published',

	publication: {
		edition: '5-5e',
		year: 2024,
		source: 'players-handbook-2024'
	},

	level: 0,
	school: 'Evocation',

	castingTime: {
		value: 1,
		unit: 'action'
	},

	range: {
		type: 'distance',
		value: 60,
		unit: 'feet'
	},

	area: {
		shape: 'sphere',
		radius: 5,
		unit: 'feet',
		origin: {
			type: 'point-within-range'
		}
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
		type: 'area',
		affects: 'each-creature-in-area',
		spellTextRequiresSight: false
	},

	savingThrow: {
		ability: 'Dexterity',
		onSuccess: 'no-damage'
	},

	damage: {
		dice: '1d6',
		type: 'acid',
		scaling: {
			type: 'character-level',
			levels: [
				{ level: 5, dice: '2d6' },
				{ level: 11, dice: '3d6' },
				{ level: 17, dice: '4d6' }
			]
		}
	},

	spellLists: [
		{ class: 'Sorcerer', level: 0 },
		{ class: 'Wizard', level: 0 }
	],

	source: 'players-handbook-2024',
	rulesSource: 'srd-5-2-1',

	summary:
		'Acid Splash is an Evocation cantrip that creates a 5-foot-radius Sphere of magical acid at a point within 60 feet. Every creature in the Sphere makes a Dexterity saving throw, taking 1d6 acid damage on a failed save and no damage on a successful one. The spell can affect any number of creatures that fit inside the area, including allies, and its damage increases to 2d6 at character level 5, 3d6 at level 11, and 4d6 at level 17.',

	description: [
		{
			type: 'paragraph',
			text:
				'You create a volatile bubble of magical acid at a point within range. It bursts outward in a 5-foot-radius Sphere, forcing every creature caught in the area to make a Dexterity saving throw. A creature that fails takes acid damage, while a creature that succeeds avoids the damage. The spell ends as soon as the burst is resolved and leaves no persistent pool or damaging zone behind.'
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
						'Acid Splash is an Evocation cantrip that takes one action to cast and requires verbal and somatic components. Unlike the 2014 version, the caster does not choose one or two creatures directly. The 2024 spell instead creates its effect at a point within 60 feet.'
				},
				{
					type: 'paragraph',
					content:
						'The acidic bubble explodes in a 5-foot-radius Sphere centered on that point. Every creature inside the Sphere is affected and makes its own Dexterity saving throw against the caster’s spell save DC.'
				},
				{
					type: 'paragraph',
					content:
						'A creature that fails the save takes 1d6 acid damage. A creature that succeeds takes no damage. When multiple creatures are caught in the Sphere, each saving throw is resolved separately, so different creatures can have different results from the same casting.'
				},
				{
					type: 'paragraph',
					content:
						'Because the spell now uses an area of effect, it has no fixed maximum number of creature targets. The practical number depends on how many creatures are actually inside the 5-foot-radius Sphere when the spell resolves.'
				},
				{
					type: 'paragraph',
					content:
						'Acid Splash has an instantaneous duration. Once the saving throws and damage are resolved, the spell ends. It does not normally leave behind a pool of acid, an ongoing damage effect, a hazardous surface, or another persistent area.'
				}
			]
		},
		{
			id: 'range-and-area',
			title: 'Range and Area',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The caster chooses a point within 60 feet as the origin of Acid Splash. The effect then extends 5 feet outward from that point in all directions as a Sphere.'
				},
				{
					type: 'paragraph',
					content:
						'The 5-foot-radius Sphere is a formal area of effect rather than a two-creature targeting rule. Every creature whose space is included in the area can be affected, subject to the normal rules for determining whether a location is inside an area of effect.'
				},
				{
					type: 'paragraph',
					content:
						'The spell description does not say that the caster must see the chosen point. This differs from the 2014 version, which specifically required the caster to choose creatures they could see.'
				},
				{
					type: 'paragraph',
					content:
						'Lack of an explicit sight requirement does not allow the spell to ignore obstructions. The general 2024 rules for areas of effect and Total Cover still determine where the point of origin appears and which locations can be reached by the Sphere.'
				},
				{
					type: 'paragraph',
					content:
						'If the caster places the origin at an unseen point but a wall or similar obstruction lies between the caster and that point, the area-of-effect rules can cause the point of origin to appear on the near side of the obstruction instead. Total Cover can also exclude locations from the Sphere when the effect cannot extend to them from its origin.'
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
						'At character levels 1 through 4, each creature that fails its Dexterity saving throw takes 1d6 acid damage. A successful save prevents all of that damage.'
				},
				{
					type: 'paragraph',
					content:
						'The damage increases with total character level. It becomes 2d6 at level 5, 3d6 at level 11, and 4d6 at level 17. The spell does not use a higher-level spell slot to gain this damage because Acid Splash is a cantrip.'
				},
				{
					type: 'paragraph',
					content:
						'The area-based design allows Acid Splash to affect more than two creatures when several creatures are tightly clustered. There is no rule that divides the damage between them; every creature that fails takes the spell’s full current damage.'
				},
				{
					type: 'paragraph',
					content:
						'That broader area also creates friendly-fire risk. The spell affects each creature in the Sphere rather than only enemies or creatures chosen by the caster. An ally caught inside must make the same Dexterity saving throw unless another feature changes that result.'
				},
				{
					type: 'paragraph',
					content:
						'Acid Splash uses a saving throw rather than an attack roll, so it does not normally score critical hits. Features that modify attack rolls also do not apply unless their own rules specifically interact with the spell in another way.'
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
						'Acid Splash appears on the Sorcerer and Wizard spell lists in the 2024 core rules. Both classes use the same range, area, damage dice, Dexterity saving throw, and Cantrip Upgrade progression.'
				},
				{
					type: 'paragraph',
					content:
						'A Sorcerer normally uses Charisma to determine the spell save DC when Acid Splash is gained through Sorcerer spellcasting. A Wizard normally uses Intelligence when the spell is gained through Wizard spellcasting.'
				},
				{
					type: 'paragraph',
					content:
						'The difference in spellcasting ability changes the save DC but does not alter the spell’s written area or damage. The Sphere remains 5 feet in radius and the damage continues to scale at character levels 5, 11, and 17.'
				},
				{
					type: 'paragraph',
					content:
						'Other character options can grant access to Acid Splash through their own rules. Those additional access methods should be tracked separately from the core Sorcerer and Wizard publication metadata rather than being silently merged into the original spell lists.'
				}
			]
		},
		{
			id: 'what-changed-from-2014',
			title: 'What Changed from the 2014 Version',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The 2024 version changes Acid Splash from Conjuration to Evocation. This is more than a presentation change because features that care about a spell’s school can now interact with Acid Splash differently.'
				},
				{
					type: 'paragraph',
					content:
						'The largest mechanical change is the targeting model. The 2014 spell selected one or two visible creatures, and two chosen creatures had to be within 5 feet of each other. The 2024 spell instead creates a 5-foot-radius Sphere at a point within range.'
				},
				{
					type: 'paragraph',
					content:
						'This removes the old two-creature maximum. Any number of creatures can be affected if they are inside the Sphere, but the caster also loses the ability to choose only the creatures they want to harm when allies share the area.'
				},
				{
					type: 'paragraph',
					content:
						'The explicit requirement to see the chosen creatures also disappears because the spell no longer selects creatures directly. General area-of-effect, point-of-origin, clear-path, and Total Cover rules remain relevant even though the spell text itself does not require sight.'
				},
				{
					type: 'paragraph',
					content:
						'The spell retains its 60-foot range, verbal and somatic components, instantaneous duration, Dexterity saving throw, 1d6 base damage, and damage increases at character levels 5, 11, and 17.'
				}
			]
		}
	],

	faq: [
		'how-many-creatures-can-acid-splash-hit-in-5-5e',
		'does-acid-splash-hit-allies-in-5-5e',
		'do-you-need-to-see-where-you-cast-acid-splash-in-5-5e',
		'can-acid-splash-damage-objects-in-5-5e',
		'can-sculpt-spells-protect-creatures-from-acid-splash-in-5-5e'
	]
};

export default spell;

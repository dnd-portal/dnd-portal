const spell = {
	id: 'acid-splash',
	edition: '3-5e',

	name: 'Acid Splash',

	level: 0,
	school: 'Conjuration',
	subschool: 'Creation',
	descriptors: ['Acid'],

	castingTime: {
		value: 1,
		unit: 'standard-action'
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

	effect: 'One missile of acid',

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

	spellResistance: false,

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

	summary:
		'Acid Splash is a simple ranged cantrip that creates a small missile of acid. It requires a ranged touch attack, deals 1d3 acid damage on a hit, allows no saving throw, and is not affected by spell resistance.',

	description: [
		{
			type: 'paragraph',
			text:
				'You conjure a small amount of magical acid and launch it toward a target within range. Make a ranged touch attack against the target. On a successful hit, the target takes 1d3 acid damage. The acid exists only as part of the instantaneous magical effect unless another rule specifically causes a lasting result.'
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
						'Acid Splash is a 0-level Conjuration spell with the Creation subschool and the Acid descriptor. Casting it takes one standard action and requires both verbal and somatic components. The spell creates a single missile of magical acid that is directed at a target within range.'
				},
				{
					type: 'paragraph',
					content:
						'The spell is resolved with a ranged touch attack rather than a saving throw. If the attack succeeds, the target takes 1d3 acid damage. A failed attack deals no damage. Acid Splash is instantaneous, so the spell does not create an ongoing damaging effect after the attack has been resolved.'
				},
				{
					type: 'paragraph',
					content:
						'Spell resistance does not apply to Acid Splash. This makes the spell capable of affecting a creature with spell resistance without requiring a caster level check to overcome that resistance, although the ranged touch attack still has to hit.'
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
						'Acid Splash uses the Close range category. Its range begins at 25 feet and increases by 5 feet for every two caster levels. A 1st-level caster therefore has a range of 25 feet, while increasing caster level gradually extends the distance from which the spell can be used.'
				},
				{
					type: 'paragraph',
					content:
						'Because Acid Splash uses a ranged touch attack, the attack is made against the target’s touch Armor Class rather than its normal Armor Class. Protection that depends on armor, shields, or natural armor is therefore less useful against the attack, while bonuses that still apply to touch AC continue to matter.'
				},
				{
					type: 'paragraph',
					content:
						'The spell creates only one missile and resolves only one attack. It does not create an area of effect and does not splash damage onto nearby creatures. Normal rules for ranged attacks, line of effect, cover, concealment, and spellcasting in combat still apply where relevant.'
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
						'On a successful hit, Acid Splash deals 1d3 points of acid damage. The damage does not automatically increase with caster level. Higher caster level improves the spell’s Close range, but the base damage remains 1d3 unless another rule, feat, class feature, or effect modifies it.'
				},
				{
					type: 'paragraph',
					content:
						'Its damage is small, but the combination of a ranged touch attack, no saving throw, and no spell resistance gives Acid Splash a distinct role. It can be useful when a target has a high normal Armor Class but a substantially lower touch AC, or when spell resistance would make another offensive spell less reliable.'
				},
				{
					type: 'paragraph',
					content:
						'Because Acid Splash requires an attack roll and deals damage, it can interact with general rules that apply to damaging spell attacks. For example, attack-roll spells can score critical hits under the normal critical-hit rules.'
				},
				{
					type: 'paragraph',
					content:
						'Acid damage can also interact with objects under the normal object-damage rules. That does not mean Acid Splash automatically melts doors, locks, weapons, or other objects. Hardness and hit points still matter, and the spell’s 1d3 damage is often too low to damage sturdy materials.'
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
						'Acid Splash appears on both the Sorcerer and Wizard spell lists as a 0-level spell. For both classes, it functions as a low-level offensive option that does not require a higher-level spell slot.'
				},
				{
					type: 'paragraph',
					content:
						'Sorcerers use Acid Splash through their normal spells-known and spellcasting rules, while Wizards use it through the Wizard spellbook and spell preparation system. The spell itself does not behave differently depending on which of the two classes casts it.'
				},
				{
					type: 'paragraph',
					content:
						'Other classes, prestige classes, feats, magic items, or campaign options may provide access to Acid Splash separately. Those forms of access do not change the spell’s base rules unless the feature granting access explicitly says otherwise.'
				}
			]
		}
	],

	faq: [
		'does-acid-splash-use-touch-ac-in-3-5e',
		'does-acid-splash-allow-a-saving-throw-in-3-5e',
		'does-spell-resistance-apply-to-acid-splash-in-3-5e',
		'does-acid-splash-damage-scale-with-caster-level-in-3-5e',
		'can-acid-splash-damage-objects-in-3-5e'
	]
};

export default spell;
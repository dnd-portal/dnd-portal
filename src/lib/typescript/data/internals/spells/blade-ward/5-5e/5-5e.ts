const spell = {
	id: 'blade-ward',
	edition: '5-5e',
	name: 'Blade Ward',
	contentStatus: 'published',

	publication: {
		edition: '5-5e',
		year: 2024,
		source: 'players-handbook-2024'
	},

	level: 0,
	school: 'Abjuration',
	subschool: null,
	descriptors: [],

	castingTime: { value: 1, unit: 'action' },
	range: { type: 'self' },
	duration: {
		type: 'timed',
		value: 1,
		unit: 'minute',
		concentration: true
	},

	components: {
		verbal: true,
		somatic: true,
		material: false
	},

	targeting: { type: 'self' },

	effect: {
		type: 'attack-roll-penalty',
		trigger: 'attack-roll-against-caster',
		penalty: { dice: '1d4' },
		appliesTo: 'attacker'
	},

	scaling: null,

	spellLists: [
		{ class: 'Bard', level: 0 },
		{ class: 'Sorcerer', level: 0 },
		{ class: 'Warlock', level: 0 },
		{ class: 'Wizard', level: 0 }
	],

	source: 'players-handbook-2024',
	rulesSource: null,

	tags: ['defense', 'warding', 'attack-roll'],

	summary:
		'Blade Ward is an Abjuration cantrip that surrounds you with defensive magic for up to 1 minute while you maintain Concentration. Whenever a creature makes an attack roll against you during the spell, that attacker subtracts 1d4 from the roll. The protection applies to any attack roll against you, including melee, ranged, weapon, Unarmed Strike, and spell attacks, but it does not affect effects that require saving throws instead. Blade Ward has no level-based scaling.',

	sections: [
		{
			id: 'how-blade-ward-works',
			title: 'How Blade Ward Works',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward is a defensive Abjuration cantrip that takes one action to cast. Its range is Self, so the spell protects only the caster rather than another creature.' },
				{ type: 'paragraph', content: 'Once active, Blade Ward can last for up to 1 minute as long as the caster maintains Concentration. Whenever another creature makes an attack roll against the protected caster, that creature subtracts 1d4 from the attack roll.' },
				{ type: 'paragraph', content: 'The 1d4 modifies the attacker’s roll rather than increasing the caster’s Armor Class. This means Blade Ward can function alongside other defenses that improve AC, impose Disadvantage, or otherwise alter the attack through a different rule.' },
				{ type: 'paragraph', content: 'Blade Ward does not require the caster to make a spell attack, and attackers do not make a saving throw against the cantrip. The protection applies automatically whenever an attack roll is made against the caster while the spell is active.' },
				{ type: 'paragraph', content: 'The cantrip has no level-based upgrade. Its defensive penalty remains 1d4 regardless of the caster’s character level.' }
			]
		},
		{
			id: 'which-attacks-does-it-affect',
			title: 'Which Attacks Does It Affect?',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward applies whenever a creature makes an attack roll against the caster. The spell is not limited to attacks made with blades, melee weapons, or physical weapons despite its name.' },
				{ type: 'paragraph', content: 'Melee weapon attacks and ranged weapon attacks are affected because both use attack rolls. Unarmed Strikes that use an attack roll are affected for the same reason.' },
				{ type: 'paragraph', content: 'Spell attacks are also affected. If a spell or magical feature instructs a creature to make a melee or ranged spell attack against the protected caster, that attack roll is reduced by 1d4.' },
				{ type: 'paragraph', content: 'Blade Ward does not directly affect effects that require a saving throw instead of an attack roll. A Dexterity, Constitution, Wisdom, or other saving throw proceeds normally because there is no attack roll for Blade Ward to modify.' },
				{ type: 'paragraph', content: 'Automatic damage or other effects that do not involve an attack roll are likewise unaffected unless another rule says otherwise.' }
			]
		},
		{
			id: 'concentration-and-duration',
			title: 'Concentration and Duration',
			blocks: [
				{ type: 'paragraph', content: 'The 2024 version of Blade Ward can remain active for up to 1 minute, but it requires Concentration. The caster must therefore choose between Blade Ward and any other spell or effect that also requires their Concentration.' },
				{ type: 'paragraph', content: 'Starting to concentrate on another effect ends Blade Ward immediately. The cantrip also ends if the caster becomes unable to maintain Concentration under the normal rules.' },
				{ type: 'paragraph', content: 'When the caster takes damage, they make the normal Constitution saving throw to maintain Concentration. Failing that saving throw causes Blade Ward to end.' },
				{ type: 'paragraph', content: 'Blade Ward can indirectly help protect its own Concentration by causing some attacks to miss. An attack that misses deals no attack damage, which can prevent a Concentration saving throw that would otherwise have been required.' },
				{ type: 'paragraph', content: 'Once the 1-minute duration ends, or Concentration is broken earlier, the 1d4 attack-roll penalty no longer applies.' }
			]
		},
		{
			id: 'blade-ward-does-not-increase-ac',
			title: 'Blade Ward Does Not Increase Armor Class',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward does not grant a bonus to Armor Class. Your AC remains whatever it would normally be from armor, Dexterity, shields, class features, spells, and other applicable rules.' },
				{ type: 'paragraph', content: 'Instead, the attacker rolls normally and then subtracts 1d4 from that attack roll. The reduced total is compared against your unchanged AC.' },
				{ type: 'paragraph', content: 'For example, if your AC is 18 and an attacker reaches a total of 19 before Blade Ward, a Blade Ward roll of 3 reduces that attack total to 16. The attack misses, but your AC was still 18 throughout the resolution.' },
				{ type: 'paragraph', content: 'This distinction allows Blade Ward to combine naturally with defenses that actually change AC. A separate effect that grants an AC bonus can make the target number harder to reach while Blade Ward simultaneously lowers the attacker’s roll.' }
			]
		},
		{
			id: 'critical-hits',
			title: 'Critical Hits',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward can turn many ordinary hits into misses by reducing the attacker’s total, but it does not normally stop an attack roll whose d20 shows a natural 20.' },
				{ type: 'paragraph', content: 'A natural 20 on an attack roll hits regardless of modifiers or the target’s Armor Class under the normal 2024 attack rules. The result is also a Critical Hit unless another rule changes that outcome.' },
				{ type: 'paragraph', content: 'The 1d4 penalty still mathematically changes the attack total, but that lower total does not override the natural-20 rule that determines whether the attack hits.' }
			]
		},
		{
			id: 'class-availability',
			title: 'Class Availability',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward appears on the Bard, Sorcerer, Warlock, and Wizard cantrip lists in the 2024 core rules.' },
				{ type: 'paragraph', content: 'The spell’s main effect does not use the caster’s spellcasting ability. It has no spell attack roll, no saving throw DC, and no ability modifier added to the 1d4 penalty.' },
				{ type: 'paragraph', content: 'As a result, the ward provides the same 1d4 attack-roll penalty regardless of whether the spell was learned through a class using Charisma or Intelligence.' },
				{ type: 'paragraph', content: 'Other features can grant access to Blade Ward outside these four class lists. Those sources of access should be tracked separately from the core publication metadata.' }
			]
		},
		{
			id: 'what-changed-from-2014',
			title: 'What Changed from the 2014 Version',
			blocks: [
				{ type: 'paragraph', content: 'The 2024 version keeps Blade Ward as an Abjuration cantrip with a casting time of one action, a range of Self, and verbal and somatic components. The defensive effect itself, however, was substantially redesigned.' },
				{ type: 'paragraph', content: 'The 2014 version lasted only until the end of the caster’s next turn and granted resistance to bludgeoning, piercing, and slashing damage from weapon attacks. It reduced damage after a qualifying attack had already hit.' },
				{ type: 'paragraph', content: 'The 2024 version instead lasts for up to 1 minute with Concentration and reduces attack rolls against the caster by 1d4. It tries to prevent attacks from hitting in the first place rather than reducing qualifying damage afterward.' },
				{ type: 'paragraph', content: 'Because the revised spell refers broadly to attack rolls, it can interfere with weapon attacks, Unarmed Strike attack rolls, and spell attacks. Its protection is no longer tied to bludgeoning, piercing, or slashing damage.' },
				{ type: 'paragraph', content: 'The redesign adds a Concentration cost and leaves saving-throw effects unaffected. Neither version has level-based scaling.' }
			]
		}
	],

	faq: [
		'does-blade-ward-work-against-spell-attacks-in-5-5e',
		'does-blade-ward-work-against-saving-throws-in-5-5e',
		'does-blade-ward-stack-with-shield-in-5-5e',
		'can-blade-ward-stop-a-critical-hit-in-5-5e',
		'what-happens-if-you-take-damage-while-concentrating-on-blade-ward-in-5-5e'
	]
};

export default spell;

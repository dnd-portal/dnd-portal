export const question = {
	slug: 'does-acid-splash-allow-a-saving-throw-in-3e',

	question: 'Does Acid Splash allow a saving throw in D&D 3e?',

	shortAnswer:
		'No. Acid Splash does not allow a saving throw in D&D 3e. The caster instead makes a ranged touch attack against the target. If the attack hits, the spell can deal 1d3 acid damage; if it misses, no damage is dealt. Spell resistance is a separate defense and can still prevent the 3e version of Acid Splash from affecting a creature.',

	introduction:
		'Acid Splash uses an attack roll rather than a saving throw to determine whether its acid projectile connects with the target.\n\nThis means Fortitude, Reflex, and Will saves are not used to avoid the spell. The important defenses are instead the target’s touch Armor Class, any applicable spell resistance, and defenses against acid damage.',

	sections: [
		{
			id: 'acid-splash-has-no-saving-throw',
			title: 'Acid Splash has no saving throw',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The 3e version of Acid Splash lists no saving throw. The target therefore does not roll Fortitude, Reflex, or Will when the spell is cast.'
				},
				{
					type: 'paragraph',
					content:
						'There is also no special result for succeeding on a save, such as taking half damage, because there is no saving throw to make.'
				}
			]
		},

		{
			id: 'the-attack-roll-determines-whether-it-hits',
			title: 'The ranged touch attack determines whether it hits',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Instead of allowing the target to make a save, Acid Splash requires the caster to make a ranged touch attack.'
				},
				{
					type: 'paragraph',
					content:
						"If the attack roll meets or exceeds the target's touch Armor Class, the projectile hits. If the attack misses, the spell deals no damage."
				},
				{
					type: 'paragraph',
					content:
						'This is why Acid Splash should not be treated like an area spell that automatically affects a target and then allows a saving throw afterward.'
				}
			]
		},

		{
			id: 'there-is-no-half-damage-result',
			title: 'There is no half-damage result',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Many damaging spells use a saving throw to determine whether a target takes full damage, reduced damage, or no damage.'
				},
				{
					type: 'paragraph',
					content:
						'Acid Splash does not work that way. Its normal result is much simpler: the ranged touch attack hits and the spell deals 1d3 acid damage, or the attack misses and the spell deals no damage.'
				}
			]
		},

		{
			id: 'saving-throw-bonuses-do-not-help',
			title: 'Saving throw bonuses do not directly help against Acid Splash',
			blocks: [
				{
					type: 'paragraph',
					content:
						"Because Acid Splash never calls for a saving throw, bonuses to a creature's Fortitude, Reflex, or Will saves do not directly improve its chances of avoiding the spell."
				},
				{
					type: 'paragraph',
					content:
						'Other defenses may still matter. A higher touch Armor Class can cause the attack to miss, spell resistance can stop the 3e version of the spell after a successful attack, and acid resistance or immunity can reduce or prevent the damage.'
				}
			]
		},

		{
			id: 'spell-resistance-is-not-a-saving-throw',
			title: 'Spell resistance is separate from a saving throw',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The fact that Acid Splash has no saving throw does not mean every successful ranged touch attack automatically damages every creature.'
				},
				{
					type: 'paragraph',
					content:
						'In D&D 3e, Acid Splash is subject to spell resistance. A creature with spell resistance may therefore still prevent the spell from affecting it even after the caster has successfully hit its touch AC.'
				},
				{
					type: 'paragraph',
					content:
						'This distinction is especially important when comparing the 3e and 3.5e versions, because the later 3.5e version no longer allows spell resistance.'
				}
			]
		}
	]
} as const;

export default question;
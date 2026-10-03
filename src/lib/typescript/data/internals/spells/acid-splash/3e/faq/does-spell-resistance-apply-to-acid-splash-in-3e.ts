export const question = {
	slug: 'does-spell-resistance-apply-to-acid-splash-in-3e',

	question: 'Does spell resistance apply to Acid Splash in D&D 3e?',

	shortAnswer:
		"Yes. Acid Splash is subject to spell resistance in D&D 3e. Hitting the target with the spell's ranged touch attack is therefore not always enough: if the target has spell resistance, the caster must also successfully overcome that resistance for Acid Splash to affect it. This differs from the later D&D 3.5e version, where Acid Splash has Spell Resistance: No.",

	introduction:
		'Spell resistance is one of the most important edition-specific differences in Acid Splash.\n\nThe original D&D 3e version allows spell resistance, while the revised 3.5e version does not. Players moving between those editions can therefore reach different answers even though both spells have the same name and many of the same basic mechanics.',

	sections: [
		{
			id: 'acid-splash-allows-spell-resistance',
			title: 'The 3e version allows spell resistance',
			blocks: [
				{
					type: 'paragraph',
					content:
						'In D&D 3e, Acid Splash is listed as a spell to which spell resistance applies.'
				},
				{
					type: 'paragraph',
					content:
						'That means a creature with spell resistance has an additional defense against the spell beyond the ranged touch attack.'
				},
				{
					type: 'paragraph',
					content:
						'A creature without spell resistance does not gain this additional defensive step.'
				}
			]
		},

		{
			id: 'the-touch-attack-and-spell-resistance-are-separate',
			title: 'The touch attack and spell resistance are separate checks',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The ranged touch attack determines whether the acid projectile successfully connects with the target.'
				},
				{
					type: 'paragraph',
					content:
						'Spell resistance determines whether the magic can actually affect a resistant creature.'
				},
				{
					type: 'paragraph',
					content:
						'A successful ranged touch attack therefore does not automatically mean the spell deals damage to a creature with spell resistance.'
				}
			]
		},

		{
			id: 'overcoming-spell-resistance',
			title: 'The caster must overcome spell resistance',
			blocks: [
				{
					type: 'paragraph',
					content:
						'When Acid Splash is used against a creature with spell resistance, the normal spell-resistance rules determine whether the spell penetrates that defense.'
				},
				{
					type: 'paragraph',
					content:
						'If the caster fails to overcome the creature’s spell resistance, Acid Splash does not affect that creature even if the ranged touch attack itself was successful.'
				},
				{
					type: 'paragraph',
					content:
						'If the caster successfully overcomes spell resistance, the spell can resolve normally and deal its acid damage.'
				}
			]
		},

		{
			id: 'spell-resistance-is-not-acid-resistance',
			title: 'Spell resistance and acid resistance are different',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Spell resistance protects against the magical effect of Acid Splash. Resistance to acid damage deals with the damage type after the spell is able to affect the creature.'
				},
				{
					type: 'paragraph',
					content:
						'A creature can therefore have spell resistance, acid resistance, both defenses, or neither.'
				},
				{
					type: 'paragraph',
					content:
						'Overcoming spell resistance does not cause the spell to ignore resistance or immunity to acid damage.'
				}
			]
		},

		{
			id: 'difference-between-3e-and-3-5e',
			title: 'Why 3e and 3.5e give different answers',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Splash was revised when it became part of D&D 3.5e. One of the mechanical changes was its interaction with spell resistance.'
				},
				{
					type: 'paragraph',
					content:
						'The 3e version allows spell resistance, while the 3.5e version explicitly does not.'
				},
				{
					type: 'paragraph',
					content:
						'This is why a ruling, character guide, or rules discussion written for one edition should not automatically be applied to the other.'
				}
			]
		}
	]
} as const;

export default question;
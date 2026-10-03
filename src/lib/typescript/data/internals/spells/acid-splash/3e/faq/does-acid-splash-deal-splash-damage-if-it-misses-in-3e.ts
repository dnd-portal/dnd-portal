export const question = {
	slug: 'does-acid-splash-deal-splash-damage-if-it-misses-in-3e',

	question: 'Does Acid Splash deal splash damage if it misses in D&D 3e?',

	shortAnswer:
		'No. Despite its name, Acid Splash does not deal secondary splash damage when its ranged touch attack misses in D&D 3e. The spell creates one acid projectile and resolves one ranged touch attack. If that attack misses, the spell deals no damage to the intended target and does not automatically damage nearby creatures or spaces.',

	introduction:
		'The word “Splash” can make Acid Splash sound like an area attack, but the D&D 3e spell does not function like a splash weapon or an area-of-effect spell.\n\nIt creates a single magical acid projectile aimed at one target. The attack either hits that target or misses; the spell does not produce a second damage effect around the point where the projectile lands.',

	sections: [
		{
			id: 'acid-splash-creates-one-projectile',
			title: 'Acid Splash creates one projectile',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Splash creates a single projectile of magical acid and uses one ranged touch attack to determine whether it hits.'
				},
				{
					type: 'paragraph',
					content:
						'The spell does not describe multiple missiles, a burst, a radius, or an area that is affected around the target.'
				},
				{
					type: 'paragraph',
					content:
						'Only the result of that one attack determines whether Acid Splash deals its normal damage.'
				}
			]
		},

		{
			id: 'a-missed-attack-deals-no-damage',
			title: 'A missed attack deals no damage',
			blocks: [
				{
					type: 'paragraph',
					content:
						'If the ranged touch attack fails to hit the target’s touch Armor Class, Acid Splash deals no damage.'
				},
				{
					type: 'paragraph',
					content:
						'There is no secondary roll to determine where the acid lands and no automatic damage to a nearby square or creature.'
				}
			]
		},

		{
			id: 'acid-splash-is-not-a-splash-weapon',
			title: 'Acid Splash is not a splash weapon',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The spell should not be resolved using the separate rules for thrown splash weapons merely because the spell’s name contains the word “Splash.”'
				},
				{
					type: 'paragraph',
					content:
						'Those items have their own rules for direct hits, misses, and damage to nearby creatures. Acid Splash uses the spell’s own ranged touch attack and damage rules instead.'
				}
			]
		},

		{
			id: 'nearby-creatures-are-not-automatically-hit',
			title: 'Nearby creatures are not automatically damaged',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Splash does not normally damage creatures standing next to the intended target.'
				},
				{
					type: 'paragraph',
					content:
						'The spell has no listed radius or secondary splash-damage value, so adjacency by itself does not expose another creature to the spell’s 1d3 acid damage.'
				}
			]
		},

		{
			id: 'why-the-name-can-be-confusing',
			title: 'Why the name can be confusing',
			blocks: [
				{
					type: 'paragraph',
					content:
						'D&D uses the word “splash” in several different contexts, including splash weapons that really do affect creatures near the point of impact.'
				},
				{
					type: 'paragraph',
					content:
						'Acid Splash is different. The spell’s mechanics define a single ranged touch attack rather than a splash-weapon attack or an area-of-effect spell.'
				},
				{
					type: 'paragraph',
					content:
						'When the name of a spell suggests one thing but its rules define another, the spell’s actual mechanics determine how it is resolved.'
				}
			]
		},

		{
			id: 'what-happens-on-a-successful-hit',
			title: 'What happens on a successful hit?',
			blocks: [
				{
					type: 'paragraph',
					content:
						'When the ranged touch attack succeeds, Acid Splash can deal its normal 1d3 acid damage to the target.'
				},
				{
					type: 'paragraph',
					content:
						'The 3e version is also subject to spell resistance, so a creature with spell resistance may still prevent the spell from affecting it even after the projectile successfully hits.'
				}
			]
		}
	]
} as const;

export default question;
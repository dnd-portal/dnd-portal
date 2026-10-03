export const question = {
	slug: 'does-acid-splash-require-an-attack-roll-in-2e',
	question: 'Does Acid Splash require an attack roll in AD&D 2e?',
	shortAnswer:
		'No. The D&D Portal 2e conversion does not use THAC0, Armor Class, or a missile attack roll. The primary target makes a saving throw vs. spell; on a failed save it takes 1d4 acid damage, and on a successful save it takes none. Creatures caught by the 3-foot splash also make their own saving throws vs. spell, taking 1 acid damage only if they fail.',
	introduction:
		'Later and contemporary AD&D spells use several different ways to resolve offensive magic, so an acid projectile does not automatically imply a weapon-style attack roll. D&D Portal deliberately chose the saving-throw route for this conversion.\n\nThat keeps a very small 1st-level spell from requiring an attack roll and then additional defensive rolls for a tiny amount of damage.',
	sections: [
		{
			id: 'the-primary-target-saves-vs-spell',
			title: 'The primary target makes a saving throw vs. spell',
			blocks: [
				{ type: 'paragraph', content: 'After Acid Splash is cast at a creature within 30 yards, the caster does not roll to hit. The selected creature instead makes a saving throw vs. spell.' },
				{ type: 'paragraph', content: 'A failed save causes 1d4 acid damage. A successful save negates the damage completely.' },
				{ type: 'paragraph', content: 'Because there is no attack roll, the target\'s Armor Class and the caster\'s THAC0 do not determine whether the primary acid damage occurs.' }
			]
		},
		{
			id: 'nearby-creatures-save-separately',
			title: 'Nearby creatures save separately',
			blocks: [
				{ type: 'paragraph', content: 'Other creatures within 3 feet of the primary target are exposed to the minor splash rather than the main 1d4 damage.' },
				{ type: 'paragraph', content: 'Each of those creatures makes an individual saving throw vs. spell. A failed save deals 1 point of acid damage, while success prevents it.' },
				{ type: 'paragraph', content: 'The primary target\'s save does not control the nearby creatures. Different creatures can therefore have different outcomes from the same casting.' }
			]
		},
		{
			id: 'why-the-conversion-uses-a-save',
			title: 'Why the conversion uses a saving throw',
			blocks: [
				{ type: 'paragraph', content: 'The 3e Acid Splash uses a ranged touch attack, but AD&D 2e has no directly equivalent touch-AC mechanic to preserve.' },
				{ type: 'paragraph', content: 'Using a save vs. spell gives the target an edition-native defense and avoids creating a special miniature attack subsystem solely for Acid Splash.' },
				{ type: 'paragraph', content: 'It also differentiates the conversion from spells such as Melf\'s Acid Arrow, which already occupy the projectile attack-roll space in 2e.' }
			]
		},
		{
			id: 'magic-resistance-comes-before-the-save-when-applicable',
			title: 'Magic resistance is a separate defense',
			blocks: [
				{ type: 'paragraph', content: 'A creature with AD&D 2e magic resistance can use that defense when Acid Splash would directly affect it, following the normal magic-resistance rules.' },
				{ type: 'paragraph', content: 'If magic resistance negates the spell for that creature, the spell has no effect on it. If the resistance does not negate the spell, the creature still receives the saving throw vs. spell allowed by Acid Splash.' },
				{ type: 'paragraph', content: 'Magic resistance and the saving throw are therefore separate defensive layers. The conversion does not replace one with the other.' }
			]
		}
	]
} as const;
export default question;

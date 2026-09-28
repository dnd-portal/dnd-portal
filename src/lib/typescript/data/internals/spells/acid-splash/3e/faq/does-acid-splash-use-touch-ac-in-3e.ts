export const question = {
	slug: 'does-acid-splash-use-touch-ac-in-3e',

	question: 'Does Acid Splash use touch AC in D&D 3e?',

	shortAnswer:
		"Yes. Acid Splash requires a ranged touch attack in D&D 3e, so the caster makes an attack roll against the target's touch Armor Class rather than its normal Armor Class. Armor, shield, and natural armor bonuses normally do not help against the attack, although Dexterity, size, deflection, and other modifiers that apply to touch AC can still protect the target.",

	introduction:
		"Acid Splash is not an automatic-hit spell in D&D 3e.\n\nThe caster still has to make an attack roll, but because Acid Splash uses a ranged touch attack, the target is defended by touch Armor Class rather than its full Armor Class. This makes the spell interact very differently with heavily armored creatures than an ordinary weapon attack would.",

	sections: [
		{
			id: 'acid-splash-requires-a-ranged-touch-attack',
			title: 'Acid Splash requires a ranged touch attack',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Casting Acid Splash creates a single projectile of magical acid. The caster then makes a ranged touch attack to determine whether that projectile connects with the intended target.'
				},
				{
					type: 'paragraph',
					content:
						"The attack is compared against the target's touch Armor Class rather than its normal Armor Class. If the attack roll is too low to hit touch AC, Acid Splash misses and deals no damage."
				},
				{
					type: 'paragraph',
					content:
						'The word “touch” does not mean the caster has to stand next to the target. Acid Splash is specifically a ranged touch attack, so it can be used at range while still resolving against touch AC.'
				}
			]
		},

		{
			id: 'what-touch-ac-ignores',
			title: 'What touch Armor Class ignores',
			blocks: [
				{
					type: 'paragraph',
					content:
						'A touch attack represents an effect that only needs to make contact with the target rather than penetrate its physical protection.'
				},
				{
					type: 'paragraph',
					content:
						'Because of that, several common forms of physical protection normally do not contribute to Armor Class against Acid Splash.'
				},
				{
					type: 'list',
					items: [
						'armor bonuses;',
						'shield bonuses;',
						'natural armor bonuses.'
					]
				},
				{
					type: 'paragraph',
					content:
						'A creature can therefore have an excellent normal Armor Class while being considerably easier to hit with Acid Splash.'
				}
			]
		},

		{
			id: 'what-still-applies-to-touch-ac',
			title: 'What still applies to touch Armor Class',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Touch Armor Class is not automatically equal to 10. Defenses that do not depend on physically blocking the attack can still apply.'
				},
				{
					type: 'list',
					items: [
						'Dexterity modifiers;',
						'size modifiers;',
						'deflection bonuses;',
						'dodge bonuses;',
						'other modifiers that specifically continue to apply to touch attacks.'
					]
				},
				{
					type: 'paragraph',
					content:
						'This means a quick, evasive, or magically protected creature may still be difficult to hit even if it is wearing little or no armor.'
				}
			]
		},

		{
			id: 'why-touch-ac-matters-for-acid-splash',
			title: 'Why touch AC matters for Acid Splash',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The use of touch AC is one of the main advantages of Acid Splash as an offensive 0-level spell. A heavily armored opponent may be much easier to hit with a ranged touch attack than with an ordinary weapon attack.'
				},
				{
					type: 'paragraph',
					content:
						'That advantage does not make the spell automatically reliable. The caster still has to make the attack roll, and the 3e version of Acid Splash is also subject to spell resistance.'
				},
				{
					type: 'paragraph',
					content:
						'Against a creature with both a low touch AC and spell resistance, the caster may therefore succeed on the attack roll but still fail to affect the creature if the spell does not overcome its spell resistance.'
				}
			]
		},

		{
			id: 'touch-ac-and-normal-ac-are-separate-defenses',
			title: 'Touch AC and normal AC are separate defenses',
			blocks: [
				{
					type: 'paragraph',
					content:
						'It is important not to compare the Acid Splash attack roll against the target’s normal Armor Class first and then apply touch AC afterward. The spell simply uses touch AC as the relevant Armor Class for that attack.'
				},
				{
					type: 'paragraph',
					content:
						'Other defenses, such as concealment, cover, spell resistance, or resistance to acid damage, can still matter separately if the normal rules for those defenses apply.'
				}
			]
		}
	]
} as const;

export default question;
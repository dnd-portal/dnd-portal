export const question = {
	slug: 'why-does-acid-splash-attack-reflex-instead-of-touch-ac-in-4e',

	question: 'Why does Acid Splash attack Reflex instead of touch AC in D&D 4e?',

	shortAnswer:
		'The D&D Portal 4e conversion attacks Reflex because 4e does not use the 3e/3.5e touch-Armor-Class system as the normal way to resolve spell attacks. Attack powers instead roll against AC, Fortitude, Reflex, or Will. Reflex is the most natural defense for Acid Splash because the power represents an incoming magical acid projectile that a creature can avoid, and the official 4e Sorcerer power Acid Orb also attacks Reflex. The change is therefore an edition conversion rather than a renamed version of touch AC.',

	introduction:
		'One of the biggest mistakes in cross-edition conversions is preserving a familiar rule term even after the destination edition has changed the underlying resolution system. Acid Splash used a ranged touch attack in 3e and 3.5e, but 4e organizes attacks around four defenses rather than normal AC plus touch AC.\n\nThe Portal conversion therefore keeps the intent of the older mechanic—an attack that is more about avoiding contact than penetrating armor—while expressing that intent through Reflex, a defense that actually exists within the native 4e attack framework.',

	sections: [
		{
			id: '4e-uses-four-defenses',
			title: 'D&D 4e uses AC, Fortitude, Reflex, and Will',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Attack powers in 4e normally specify one of four defenses: Armor Class, Fortitude, Reflex, or Will. The attacker rolls against that defense and the hit or miss result determines what part of the power occurs.'
				},
				{
					type: 'paragraph',
					content:
						'This structure replaces several older resolution patterns. A 3.x spell might use a touch attack, allow a saving throw, or require a separate spell-resistance check, while a 4e attack power generally packages its primary accuracy check into attack versus defense.'
				},
				{
					type: 'paragraph',
					content:
						'Adding touch AC back into the conversion would create a fifth defensive calculation that is not part of the normal 4e power framework. Using one of the existing defenses therefore produces a cleaner and more edition-native result.'
				}
			]
		},
		{
			id: 'reflex-fits-the-projectile',
			title: 'Reflex fits an avoidable acid projectile',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Splash is represented as a projectile of magical acid traveling toward a creature. Conceptually, the target is trying to avoid contact with the projectile rather than relying primarily on toughness or mental resistance.'
				},
				{
					type: 'paragraph',
					content:
						'Reflex therefore matches the intended interaction better than Fortitude or Will. It also preserves some of the identity of the older ranged touch attack, where heavy armor was not the main obstacle to landing the spell.'
				},
				{
					type: 'paragraph',
					content:
						'That does not mean Reflex is mathematically equivalent to touch AC. The defenses are built differently and interact with different rules. The conversion preserves the concept of an avoidable magical projectile, not the exact numbers of the old system.'
				}
			]
		},
		{
			id: 'acid-orb-supports-the-choice',
			title: 'Acid Orb supports Reflex as a 4e design choice',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Orb is an official level 1 Sorcerer at-will spell that also represents a ranged projectile of acid. Its attack is Charisma versus Reflex.'
				},
				{
					type: 'paragraph',
					content:
						'That official power provides strong evidence that Reflex is an established defensive target for this style of arcane acid attack in 4e. D&D Portal therefore does not need to invent a new defense or force the conversion to attack AC.'
				},
				{
					type: 'paragraph',
					content:
						'The comparison stops there. Acid Splash does not copy Acid Orb’s Ranged 20 distance, 1d10 damage die, or ranged-basic-attack feature. Reflex is used as part of the edition’s design language rather than as evidence that the powers are the same.'
				}
			]
		},
		{
			id: 'there-is-no-defensive-saving-throw-for-the-hit',
			title: 'The target does not make a saving throw to avoid the initial hit',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Players coming from later editions may expect a Dexterity or Reflex saving throw against an acid projectile. The Portal 4e conversion does not use that structure for the initial attack.'
				},
				{
					type: 'paragraph',
					content:
						'The caster makes the attack roll against the target’s Reflex defense. If the attack meets or exceeds Reflex, the primary hit occurs and can trigger the adjacent splash damage. If the attack misses, the hit effect does not occur.'
				},
				{
					type: 'paragraph',
					content:
						'4e saving throws have a different common role, especially for ending ongoing effects and conditions. They are not the standard replacement for the attack-versus-defense roll used by a power such as this conversion of Acid Splash.'
				}
			]
		},
		{
			id: 'why-not-armor-class',
			title: 'Why does the conversion not attack Armor Class?',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Using AC would make physical protection a much more central part of resisting Acid Splash. That would move the conversion farther away from the identity of the earlier ranged touch attack.'
				},
				{
					type: 'paragraph',
					content:
						'Reflex instead emphasizes movement, reaction, and avoiding the attack. It also places Acid Splash alongside official 4e magical attacks that resolve against Reflex rather than against the target’s armored defense.'
				},
				{
					type: 'paragraph',
					content:
						'The choice is ultimately part of the homebrew conversion and is documented for that reason. It is not presented as an official ruling that “touch AC became Reflex”; it is a deliberate adaptation to the mechanics available in 4e.'
				}
			]
		}
	]
} as const;

export default question;

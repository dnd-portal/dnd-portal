export const question = {
	slug: 'how-does-blade-ward-interact-with-abjurant-champion-in-3-5e',
	question: 'How does Blade Ward interact with Abjurant Champion in D&D 3.5e?',
	shortAnswer:
		'Blade Ward benefits from Extended Abjuration and Swift Abjuration, but not from Abjurant Armor. Extended Abjuration doubles the spell’s 1-round duration to 2 rounds. Swift Abjuration can reduce its casting time to a swift action once the character has that feature. Abjurant Armor does nothing because Blade Ward grants damage reduction rather than an armor bonus or shield bonus to AC.',
	introduction:
		'Complete Mage’s Abjurant Champion is an especially relevant 3.5e interaction because Blade Ward is an Abjuration spell intended for combat defense. Its class features do not all affect the spell in the same way.\n\nThe key is to read exactly what each feature modifies: duration, casting time, or a specific AC bonus type.',
	sections: [
		{
			id: 'abjurant-armor',
			title: 'Abjurant Armor Does Not Increase Blade Ward',
			blocks: [
				{ type: 'paragraph', content: 'Abjurant Armor improves an armor bonus or shield bonus to AC granted by an abjuration spell.' },
				{ type: 'paragraph', content: 'Blade Ward grants DR 1/— and does not grant either of those AC bonus types.' },
				{ type: 'paragraph', content: 'The damage reduction therefore remains DR 1/— regardless of the character’s Abjurant Champion level.' }
			]
		},
		{
			id: 'extended-abjuration',
			title: 'Extended Abjuration Doubles the Duration',
			blocks: [
				{ type: 'paragraph', content: 'Extended Abjuration doubles the duration of abjuration spells as though Extend Spell had been applied without increasing spell level or casting time.' },
				{ type: 'paragraph', content: 'Blade Ward normally lasts 1 round, so an Abjurant Champion with this feature can maintain the ward for 2 rounds.' },
				{ type: 'paragraph', content: 'The amount of damage reduction does not increase; only the duration changes.' }
			]
		},
		{
			id: 'swift-abjuration',
			title: 'Swift Abjuration Can Make Blade Ward a Swift Action',
			blocks: [
				{ type: 'paragraph', content: 'Beginning at 2nd level, Abjurant Champion can cast qualifying abjuration spells as swift actions, subject to the feature’s spell-level limit.' },
				{ type: 'paragraph', content: 'Blade Ward is a 0-level Abjuration spell, so it falls within that limit once Swift Abjuration is available.' },
				{ type: 'paragraph', content: 'This changes the action economy dramatically: the ward can be raised while leaving the character’s standard action available for another activity.' }
			]
		},
		{
			id: 'why-this-matters',
			title: 'Why This Interaction Matters',
			blocks: [
				{ type: 'paragraph', content: 'A standard-action defensive cantrip is deliberately situational for an ordinary caster because using it can cost most of the caster’s turn.' },
				{ type: 'paragraph', content: 'Abjurant Champion is specifically designed to make combat abjurations faster and more practical, so improving Blade Ward through duration and action economy is a natural edition-specific interaction.' },
				{ type: 'paragraph', content: 'The interaction strengthens the spell without changing its basic DR value or creating a special exception to the prestige class rules.' }
			]
		}
	]
} as const;

export default question;

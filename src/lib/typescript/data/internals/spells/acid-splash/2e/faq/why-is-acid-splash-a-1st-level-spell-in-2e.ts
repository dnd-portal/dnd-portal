export const question = {
	slug: 'why-is-acid-splash-a-1st-level-spell-in-2e',
	question: 'Why is Acid Splash a 1st-level spell in AD&D 2e?',
	shortAnswer:
		'Because AD&D 2e does not use cantrips the way later editions do. Its Cantrip spell is itself a 1st-level Wizard spell used for minor magical effects, and those effects are not intended to cause direct hit point damage. A damaging Acid Splash therefore fits more naturally as its own 1st-level Wizard spell. The level is a D&D Portal conversion decision, not an official historical classification.',
	introduction:
		'The word cantrip creates an immediate edition trap. In 3e and especially 5e, Acid Splash is associated with level-0 or freely repeatable minor magic. AD&D 2e uses a different model.\n\nD&D Portal therefore treats the spell level as something that must be converted rather than preserved literally. The goal is to keep the spell small and accessible without contradicting the limits of 2e minor magic.',
	sections: [
		{
			id: '2e-cantrip-means-something-different',
			title: 'Cantrip means something different in AD&D 2e',
			blocks: [
				{ type: 'paragraph', content: 'AD&D 2e includes a Wizard spell named Cantrip. It is a 1st-level spell that allows the caster to produce minor magical effects rather than a general category of level-0 spells.' },
				{ type: 'paragraph', content: 'Those minor effects are deliberately limited in power. They are intended for small magical tricks and utility rather than direct offensive damage.' },
				{ type: 'paragraph', content: 'Calling Acid Splash a 2e cantrip in the later-edition sense would therefore import a rules category that does not function the same way in AD&D 2e.' }
			]
		},
		{
			id: 'direct-damage-needs-its-own-spell',
			title: 'Direct damage needs a real spell entry',
			blocks: [
				{ type: 'paragraph', content: 'The Portal version deals hit point damage, so it exceeds the role of the minor effects produced by the 2e Cantrip spell.' },
				{ type: 'paragraph', content: 'Making Acid Splash a separate 1st-level spell gives it a normal range, casting time, saving throw, damage entry, school, and memorization cost.' },
				{ type: 'paragraph', content: 'That also means using Acid Splash has a real opportunity cost. A Wizard must devote one of their limited 1st-level spell preparations to it rather than receiving a free repeatable attack.' }
			]
		},
		{
			id: 'why-level-one-is-appropriate',
			title: 'Why 1st level fits the conversion',
			blocks: [
				{ type: 'paragraph', content: 'Acid Splash is intentionally weak for a damaging 1st-level spell: the primary target takes only 1d4 acid damage, a successful save negates it, and the damage does not scale with caster level.' },
				{ type: 'paragraph', content: 'Its secondary benefit is only 1 point of splash damage to nearby creatures that fail their own saves. That keeps the spell below stronger low-level offensive choices while still giving it a distinct role.' },
				{ type: 'paragraph', content: 'The result is meant to be a minor prepared attack spell rather than a centerpiece of a Wizard\'s offense. Higher-level acid magic remains substantially stronger.' }
			]
		},
		{
			id: 'the-level-is-homebrew',
			title: 'The level is part of the Portal Conversion',
			blocks: [
				{ type: 'paragraph', content: 'No official AD&D 2e Acid Splash spell exists, so there is no historical spell level to recover.' },
				{ type: 'paragraph', content: 'D&D Portal chose 1st level because it is the lowest normal Wizard spell level and because the spell\'s offensive effect does not fit the edition\'s minor Cantrip magic.' },
				{ type: 'paragraph', content: 'A campaign is free to rebalance that homebrew choice, but such a change should be recorded as a house rule rather than presented as an official 2e value.' }
			]
		}
	]
} as const;
export default question;

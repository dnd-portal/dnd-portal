export const question = {
	slug: 'what-is-the-difference-between-acid-splash-and-acid-orb-in-4e',

	question: 'What is the difference between Acid Splash and Acid Orb in D&D 4e?',

	shortAnswer:
		'Acid Orb is an official D&D 4e Sorcerer level 1 at-will spell, while Acid Splash is a D&D Portal homebrew conversion. Acid Orb is built as a long-range single-target attack: it has Ranged 20, deals 1d10 + Charisma modifier acid damage, scales to 2d10 at level 21, and can be used as a ranged basic attack. The Portal Acid Splash conversion instead uses shorter range and lower primary damage, but a successful hit can also damage one enemy adjacent to the primary target. They are therefore different powers with different tactical roles.',

	introduction:
		'Acid Orb is the most obvious official comparison for a 4e Acid Splash conversion because both are repeatable low-level arcane acid attacks. That similarity makes Acid Orb valuable as a balance reference, but it can also make the two powers look more interchangeable than they really are.\n\nD&D Portal keeps the distinction explicit. Acid Orb remains the official Sorcerer option from Player’s Handbook 2, while Acid Splash is a separate conversion designed around shorter range and limited secondary pressure against clustered enemies.',

	sections: [
		{
			id: 'acid-orb-is-official-and-acid-splash-is-converted',
			title: 'Acid Orb is official; Acid Splash is converted',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Orb was published as a Sorcerer Attack 1 power in Player’s Handbook 2. It is an official at-will spell and can be selected and used according to the normal rules for Sorcerer powers.'
				},
				{
					type: 'paragraph',
					content:
						'The Acid Splash power on D&D Portal was not published as a 4e spell. It is an original conversion intended to preserve the identity of the earlier Acid Splash concept while expressing it through 4e power mechanics.'
				},
				{
					type: 'paragraph',
					content:
						'That difference in source status is important in actual play. Acid Orb belongs to the official rules, while Acid Splash requires a campaign to allow the Portal conversion or an equivalent house rule.'
				}
			]
		},
		{
			id: 'acid-orb-is-a-long-range-single-target-power',
			title: 'Acid Orb is a long-range single-target power',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Orb has Ranged 20, targets one creature, and attacks Reflex using Charisma. On a hit it deals 1d10 + Charisma modifier acid damage, increasing to 2d10 + Charisma modifier at level 21.'
				},
				{
					type: 'paragraph',
					content:
						'That profile makes Acid Orb a focused ranged attack. The power gives a Sorcerer a substantial reach advantage and does not depend on enemies standing next to one another to deliver its normal value.'
				},
				{
					type: 'paragraph',
					content:
						'Its single-target damage is also intentionally stronger than the Portal Acid Splash conversion. Acid Orb spends its power budget on reach, damage, and basic-attack flexibility rather than on affecting an additional adjacent enemy.'
				}
			]
		},
		{
			id: 'acid-splash-trades-range-and-damage-for-splash',
			title: 'Acid Splash trades range and primary damage for splash damage',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The D&D Portal Acid Splash conversion uses Ranged 10 rather than Ranged 20. Its primary hit also uses a 1d6 damage die instead of Acid Orb’s 1d10.'
				},
				{
					type: 'paragraph',
					content:
						'In exchange, a successful Acid Splash hit can deal acid damage equal to the caster’s relevant ability modifier to one enemy adjacent to the primary target. That secondary effect is the defining tactical benefit of the conversion.'
				},
				{
					type: 'paragraph',
					content:
						'The power therefore becomes more attractive when enemies cluster together. Against an isolated target, the caster receives no secondary damage and Acid Orb retains the more efficient single-target profile.'
				}
			]
		},
		{
			id: 'acid-orb-can-be-a-ranged-basic-attack',
			title: 'Acid Orb can be used as a ranged basic attack',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Orb contains a specific rule allowing it to be used as a ranged basic attack. That is more than descriptive wording: it changes which other powers, class features, and granted-attack effects can interact with Acid Orb.'
				},
				{
					type: 'paragraph',
					content:
						'The Portal Acid Splash conversion deliberately does not include the same permission. It is an at-will ranged attack power, but it remains distinct from a ranged basic attack unless another rule specifically changes that status.'
				},
				{
					type: 'paragraph',
					content:
						'This is one of the clearest mechanical boundaries between the powers. Acid Orb offers broader interaction with the basic-attack system, while Acid Splash receives its positional secondary damage instead.'
				}
			]
		},
		{
			id: 'acid-splash-is-not-a-full-area-power',
			title: 'Acid Splash is not a full area power',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The name “Splash” does not turn the Portal conversion into an Area burst or Close blast. The caster still makes one primary attack against one creature.'
				},
				{
					type: 'paragraph',
					content:
						'Only after that attack hits can one adjacent enemy take the smaller splash damage. There is no second attack roll and no automatic attack against every creature surrounding the primary target.'
				},
				{
					type: 'paragraph',
					content:
						'This restriction prevents Acid Splash from competing directly with dedicated Wizard area at-wills. It rewards a useful enemy formation without providing the coverage of a power designed to attack an entire burst.'
				}
			]
		},
		{
			id: 'which-one-is-better-for-a-character',
			title: 'Which one is better for a character?',
			blocks: [
				{
					type: 'paragraph',
					content:
						'There is no single answer independent of campaign rules and battlefield circumstances. Acid Orb is the official option and is generally stronger when a Sorcerer wants reliable long-range pressure against one target.'
				},
				{
					type: 'paragraph',
					content:
						'Acid Splash is an optional homebrew alternative for a campaign that wants the older spell represented in 4e and values a small amount of secondary damage when enemies stand together.'
				},
				{
					type: 'paragraph',
					content:
						'The design goal is not for Acid Splash to replace Acid Orb. Their tradeoffs are intentional: Acid Orb emphasizes reach, single-target damage, and basic-attack utility; Acid Splash emphasizes controlled secondary pressure and the identity of the converted spell.'
				}
			]
		}
	]
} as const;

export default question;

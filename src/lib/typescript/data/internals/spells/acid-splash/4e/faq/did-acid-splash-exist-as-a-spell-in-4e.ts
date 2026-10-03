export const question = {
	slug: 'did-acid-splash-exist-as-a-spell-in-4e',

	question: 'Did Acid Splash exist as a spell in D&D 4e?',

	shortAnswer:
		'No. Acid Splash was not published as a spell or attack power in D&D 4e. An official 4e feat named Acid Splash does exist in Dragon #380, but that feat is a separate game element rather than a version of the earlier spell. The closest official low-level Sorcerer comparison is Acid Orb, a level 1 at-will spell from Player’s Handbook 2. The Acid Splash entry on D&D Portal is therefore a clearly labeled Portal Conversion rather than an official 4e spell.',

	introduction:
		'The name Acid Splash does appear in official D&D 4e material, which makes the history less straightforward than simply saying that the name disappeared. The important distinction is what kind of game element used the name. In 4e, Acid Splash was published as a feat, not as a Wizard or Sorcerer attack power that continued the 3e and 3.5e spell.\n\nD&D Portal separates those two facts so that a reader can follow the spell concept across editions without being told that a homebrew adaptation was historically published. The 4e spell page is therefore intentionally presented as a Portal Conversion designed to behave like native 4e material.',

	sections: [
		{
			id: 'acid-splash-was-not-an-official-4e-spell',
			title: 'Acid Splash was not an official 4e spell',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The Acid Splash spell known from 3e and 3.5e did not receive a direct published 4e spell or attack-power entry under the same name. There is no official Wizard Attack or Sorcerer Attack power called Acid Splash that continues the earlier spell’s rules.'
				},
				{
					type: 'paragraph',
					content:
						'That distinction matters more in 4e than it might in another edition because offensive spells are normally expressed as class powers. A genuine 4e continuation would be expected to have a class, power level, usage frequency, action type, range, target, attack defense, keywords, and a hit or effect entry.'
				},
				{
					type: 'paragraph',
					content:
						'Because no such official Acid Splash power exists, D&D Portal does not present the 4e page as a recovered or reconstructed official rule. The edition entry is explicitly marked as a Portal Conversion so the historical record and the playable conversion remain separate.'
				}
			]
		},
		{
			id: 'an-official-feat-uses-the-name-acid-splash',
			title: 'An official feat uses the name Acid Splash',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Official 4e material did reuse the name Acid Splash for a Paragon-tier Wizard feat published in Dragon #380. That feat interacts with acid Wizard powers, so it belongs to the broader acid-magic theme but is not itself an attack power.'
				},
				{
					type: 'paragraph',
					content:
						'The feat does not recreate the 3e or 3.5e spell. It does not function as a reusable acid projectile and should not be treated as the 4e edition of the spell merely because it shares the same name.'
				},
				{
					type: 'paragraph',
					content:
						'This naming overlap is one reason searches for “Acid Splash 4e” can produce confusing answers. A result showing the official feat proves that the name existed in 4e, but it does not prove that an official spell or attack power with that name existed.'
				}
			]
		},
		{
			id: 'acid-orb-is-the-closest-official-comparison',
			title: 'Acid Orb is the closest official comparison',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Player’s Handbook 2 includes Acid Orb as a level 1 Sorcerer at-will spell. It is a ranged arcane acid attack that uses an implement, targets one creature, and attacks Reflex.'
				},
				{
					type: 'paragraph',
					content:
						'Acid Orb therefore occupies some of the same broad gameplay space that Acid Splash occupied in earlier editions: low-level, repeatable ranged acid damage. For conversion work, it is one of the most useful official benchmarks for understanding what a 4e acid projectile can look like.'
				},
				{
					type: 'paragraph',
					content:
						'Acid Orb is still its own power rather than an official renamed Acid Splash. It has Ranged 20, stronger single-target damage, and specific permission to function as a ranged basic attack. D&D Portal therefore uses it as a design reference instead of treating the two names as interchangeable.'
				}
			]
		},
		{
			id: 'why-dnd-portal-created-a-4e-conversion',
			title: 'Why D&D Portal created a 4e conversion',
			blocks: [
				{
					type: 'paragraph',
					content:
						'D&D Portal is intended to let readers move through the history of a spell across editions. When an edition contains an official version, the site can document that published version. When the spell is absent, a conversion can fill the playable gap without rewriting history.'
				},
				{
					type: 'paragraph',
					content:
						'The 4e conversion therefore asks how the earlier Acid Splash concept could be expressed through native 4e mechanics. That means using an At-Will attack power, an implement, an attack against a defense, class-appropriate ability scores, and level-based damage scaling rather than importing the older 3.x spell framework unchanged.'
				},
				{
					type: 'paragraph',
					content:
						'The result is original D&D Portal homebrew informed by 4e design conventions. It should be judged and used as a conversion for 4e play, not cited as evidence that Wizards published an Acid Splash spell for the edition.'
				}
			]
		},
		{
			id: 'how-to-tell-official-and-converted-content-apart',
			title: 'How to tell official and converted content apart',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The 4e edition entry should visibly include the Portal Conversion label. That label is part of the content status, not a minor footnote, because it tells the reader that the mechanics on the page were created by D&D Portal.'
				},
				{
					type: 'paragraph',
					content:
						'Official references should remain separate. The Acid Splash feat from Dragon #380 and Acid Orb from Player’s Handbook 2 can be discussed as published 4e material, while the converted Acid Splash power should be discussed as a compatibility-oriented homebrew option.'
				},
				{
					type: 'paragraph',
					content:
						'This separation also prevents edition history from becoming ambiguous later. A future reader, search engine, or rules discussion should be able to distinguish “official 4e content called Acid Splash” from “an official 4e Acid Splash spell,” because only the first statement is supported.'
				}
			]
		}
	]
} as const;

export default question;

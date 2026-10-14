export const question = {
	slug: 'how-do-adnd-1e-cantrips-work-for-a-magic-user',
	question: 'How do AD&D 1e cantrips work for a Magic-User?',
	shortAnswer:
		'AD&D 1e cantrips are not unlimited at-will spells. Under the Unearthed Arcana framework, they are minor apprentice magics learned and prepared through special cantrip rules. A Magic-User who retains cantrip use after apprenticeship can prepare several cantrips in place of normal spell capacity, and cantrip casting is extremely fast but still follows the edition’s restrictions on spell use within a round.',
	introduction:
		'The word cantrip means something very different in AD&D 1e from what it means in modern D&D. A level-0 Blade Ward should therefore not be interpreted as a spell that can be cast endlessly every round without preparation.\n\nUnderstanding the Unearthed Arcana cantrip system is important for judging both the power and the opportunity cost of the conversion.',
	sections: [
		{
			id: 'not-at-will',
			title: 'Cantrips Are Not Modern At-Will Spells',
			blocks: [
				{ type: 'paragraph', content: 'A Magic-User does not gain unlimited access to every cantrip they know.' },
				{ type: 'paragraph', content: 'Cantrips are prepared and used according to the special rules for apprentice magic.' },
				{ type: 'paragraph', content: 'Blade Ward therefore consumes part of the character’s available magical preparation rather than functioning as a free defensive action every round.' }
			]
		},
		{
			id: 'preparation-tradeoff',
			title: 'Preparing Cantrips Has an Opportunity Cost',
			blocks: [
				{ type: 'paragraph', content: 'A Magic-User who continues using cantrips after apprenticeship can exchange ordinary spell preparation capacity for several cantrips.' },
				{ type: 'paragraph', content: 'That creates a real tradeoff: preparing Blade Ward means choosing minor magic instead of using all available capacity for higher-level spells.' },
				{ type: 'paragraph', content: 'The conversion is balanced with that cost in mind rather than with the unlimited-casting assumptions of 5e.' }
			]
		},
		{
			id: 'fast-casting',
			title: 'Cantrips Cast Very Quickly',
			blocks: [
				{ type: 'paragraph', content: 'AD&D 1e cantrips use extremely short casting times compared with many normal spells.' },
				{ type: 'paragraph', content: 'Blade Ward uses a Casting Time of 1/2 segment, placing it at the slower end of the normal cantrip range while still making it very quick defensive magic.' },
				{ type: 'paragraph', content: 'The short casting time is part of the spell’s identity, but it does not remove the normal restrictions on how magical actions are used within the round.' }
			]
		},
		{
			id: 'ua-assumption',
			title: 'The Conversion Assumes Unearthed Arcana Cantrips',
			blocks: [
				{ type: 'paragraph', content: 'The original Player’s Handbook does not contain the later Unearthed Arcana level-0 cantrip framework.' },
				{ type: 'paragraph', content: 'A campaign that deliberately excludes Unearthed Arcana cantrips therefore has no automatic place for Blade Ward as a level-0 spell.' },
				{ type: 'paragraph', content: 'D&D Portal should make that assumption visible rather than implying that every possible 1e table uses the same optional-era material.' }
			]
		}
	]
} as const;

export default question;

export const question = {
	slug: 'did-blade-ward-exist-in-dnd-3-5e',
	question: 'Did Blade Ward exist in D&D 3.5e?',
	shortAnswer:
		'No official Blade Ward spell was found in the D&D 3.5e Player’s Handbook, Spell Compendium, Complete Arcane, or Complete Mage, and it does not appear in the 3.5 SRD spell lists checked for this conversion. The D&D Portal 3.5e version is therefore a Portal Conversion rather than official published content. It is based on the later defensive spell concept and rebuilt using native 3.5e damage reduction rules.',
	introduction:
		'Blade Ward is familiar as a spell name in later editions, but that does not mean the same spell existed in every earlier rules set. For the 3.5e Portal page, source status matters because the page should never imply that a conversion was printed in an official book.\n\nThe conversion is designed to sit naturally beside real 3.5e spells while remaining clearly labeled as D&D Portal content.',
	sections: [
		{
			id: 'sources-checked',
			title: 'The 3.5e Sources Checked',
			blocks: [
				{ type: 'paragraph', content: 'The D&D Portal research pass checked the Player’s Handbook, Spell Compendium, Complete Arcane, and Complete Mage for an exact Blade Ward spell entry.' },
				{ type: 'paragraph', content: 'Those sources contain many blade-themed spells and defensive abjurations, but no official spell named Blade Ward was found.' },
				{ type: 'paragraph', content: 'The 3.5 SRD spell lists checked during the same research also do not contain a Blade Ward entry.' }
			]
		},
		{
			id: 'portal-conversion-status',
			title: 'Why It Is Marked as a Portal Conversion',
			blocks: [
				{ type: 'paragraph', content: 'The spell name and broad defensive concept come from later D&D, but the 3.5e mechanics presented by D&D Portal are newly designed for this edition.' },
				{ type: 'paragraph', content: 'That means the page should use contentStatus: portal-conversion and identify D&D Portal Conversion as its publication source.' },
				{ type: 'paragraph', content: 'The label distinguishes the conversion from official 3.5e material without preventing the page from using normal 3.5e rules terminology.' }
			]
		},
		{
			id: 'what-is-official',
			title: 'The Underlying 3.5e Rules Are Still Native',
			blocks: [
				{ type: 'paragraph', content: 'Although Blade Ward itself is a conversion, damage reduction is a normal 3.5e defensive mechanic.' },
				{ type: 'paragraph', content: 'Official spells such as protection from arrows use damage reduction to represent protection from weapon damage, so the conversion is built around an established edition mechanic.' },
				{ type: 'paragraph', content: 'The resulting spell is homebrew content expressed through official-era rules rather than a later-edition rule pasted into 3.5e.' }
			]
		},
		{
			id: 'how-to-cite-the-page',
			title: 'How the Portal Page Should Present the Source',
			blocks: [
				{ type: 'paragraph', content: 'The source shown to users should be D&D Portal Conversion rather than Player’s Handbook or Spell Compendium.' },
				{ type: 'paragraph', content: 'The page can separately identify the 3.5 SRD and core books as the rules basis for concepts such as damage reduction, standard actions, Personal range, and 0-level spells.' },
				{ type: 'paragraph', content: 'This keeps historical publication status separate from the rules framework used to construct the conversion.' }
			]
		}
	]
} as const;

export default question;

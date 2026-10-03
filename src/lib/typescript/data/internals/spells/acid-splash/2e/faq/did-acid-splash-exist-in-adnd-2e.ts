export const question = {
	slug: 'did-acid-splash-exist-in-adnd-2e',
	question: 'Did Acid Splash exist in AD&D 2nd Edition?',
	shortAnswer:
		'No. Acid Splash was not published as an official AD&D 2nd Edition spell. D&D Portal therefore presents its 2e version as a homebrew Portal Conversion rather than as historical rules content. AD&D 2e did publish other acid spells, such as Melf\'s Acid Arrow and higher-level acid effects, but those are separate spells and should not be treated as official versions of Acid Splash.',
	introduction:
		'Acid Splash is familiar from later editions, which can make it seem as though every older edition must also have contained a version of the spell. That is not the case for AD&D 2nd Edition.\n\nThe D&D Portal entry fills that gap deliberately. It asks how the later Acid Splash concept could function as a native 2e Wizard spell while clearly separating that homebrew conversion from the edition\'s actual published spell catalogue.',
	sections: [
		{
			id: 'no-official-2e-acid-splash',
			title: 'There is no official 2e Acid Splash spell',
			blocks: [
				{ type: 'paragraph', content: 'Acid Splash does not appear as an official Wizard spell in the AD&D 2e core spell lists under that name. D&D Portal should therefore never label the 2e entry as published content.' },
				{ type: 'paragraph', content: 'That absence is important because the conversion changes several mechanics to fit 2e. Those changes are design decisions rather than lost or reconstructed official statistics.' },
				{ type: 'paragraph', content: 'The edition selector and source field should both communicate the distinction. A reader should be able to tell immediately that 2e Acid Splash is optional D&D Portal material.' }
			]
		},
		{
			id: 'other-acid-spells-did-exist',
			title: 'AD&D 2e did have other acid spells',
			blocks: [
				{ type: 'paragraph', content: 'The lack of Acid Splash does not mean acid magic was absent from AD&D 2e. The edition includes other spells that deal acid damage or create corrosive effects.' },
				{ type: 'paragraph', content: 'Melf\'s Acid Arrow is an important low-level comparison because it is a Wizard acid spell that uses a projectile-style attack and deals more substantial damage than the Portal Acid Splash conversion.' },
				{ type: 'paragraph', content: 'Higher-level acid spells occupy stronger offensive roles, including persistent and area-based effects. Those existing spells help define how modest a new 1st-level Acid Splash should remain.' }
			]
		},
		{
			id: 'why-a-conversion-exists',
			title: 'Why D&D Portal includes a conversion',
			blocks: [
				{ type: 'paragraph', content: 'D&D Portal tracks spell concepts across editions. When a spell exists officially, the site records the published version; when it does not, a clearly labelled conversion can provide an optional edition-native interpretation.' },
				{ type: 'paragraph', content: 'The 2e conversion is not a direct mechanical translation. It changes level, resolution, school terminology, and splash behavior so the result fits AD&D 2e play more naturally.' },
				{ type: 'paragraph', content: 'That approach follows the Portal principle that a conversion should answer how the spell might have been designed for that edition, not merely replace modern terminology with older labels.' }
			]
		},
		{
			id: 'how-to-cite-the-version',
			title: 'How the Portal version should be identified',
			blocks: [
				{ type: 'paragraph', content: 'The 2e page should be displayed as “2e • D&D Portal Conversion” rather than simply “2e.” Its source should likewise be D&D Portal Conversion rather than an official TSR or Wizards rulebook.' },
				{ type: 'paragraph', content: 'Official AD&D 2e acid spells can still be cited as design references where useful, but they do not become the publication source of Acid Splash.' },
				{ type: 'paragraph', content: 'Keeping those labels explicit protects the historical accuracy of the wiki and lets players decide whether their campaign allows the homebrew option.' }
			]
		}
	]
} as const;
export default question;

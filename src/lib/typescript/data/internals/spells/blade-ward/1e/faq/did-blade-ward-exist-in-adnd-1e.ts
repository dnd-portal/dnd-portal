export const question = {
	slug: 'did-blade-ward-exist-in-adnd-1e',
	question: 'Did Blade Ward exist in AD&D 1e?',
	shortAnswer:
		'No official AD&D 1e spell or cantrip named Blade Ward was identified in the material used for this conversion. The D&D Portal 1e version is therefore a Portal Conversion. It uses the official Unearthed Arcana cantrip framework but gives Blade Ward newly designed mechanics based on the later spell’s defensive concept.',
	introduction:
		'Blade Ward is a later D&D spell name rather than a standard AD&D 1e entry. D&D Portal therefore treats this page as an edition conversion instead of presenting it as historical TSR content.\n\nThe conversion uses real 1e spell and cantrip structures, but the Blade Ward effect itself is original Portal rules text.',
	sections: [
		{
			id: 'portal-conversion-status',
			title: 'Blade Ward Is a Portal Conversion',
			blocks: [
				{ type: 'paragraph', content: 'The spell should be labeled D&D Portal Conversion rather than attributed to the Player’s Handbook or Unearthed Arcana.' },
				{ type: 'paragraph', content: 'Unearthed Arcana supplies the cantrip framework used by the conversion, but it does not supply an official Blade Ward cantrip.' },
				{ type: 'paragraph', content: 'This distinction keeps the historical source of the rules framework separate from the source of the converted spell itself.' }
			]
		},
		{
			id: 'why-use-the-cantrip-framework',
			title: 'Why the Conversion Uses the 1e Cantrip Framework',
			blocks: [
				{ type: 'paragraph', content: 'AD&D 1e officially gained 0-level Magic-User and Illusionist cantrips through Unearthed Arcana.' },
				{ type: 'paragraph', content: 'That makes a low-power Blade Ward much more natural as a cantrip than as a full 1st-level spell.' },
				{ type: 'paragraph', content: 'The spell is intentionally kept small enough to fit that framework: self only, 1 round, and only 1 point removed from each qualifying damage die.' }
			]
		},
		{
			id: 'not-the-4e-power',
			title: 'The Conversion Is Based on the Later Defensive Spell',
			blocks: [
				{ type: 'paragraph', content: 'The 4e Ranger power named Blade Ward is a separate historical use of the name and is not the basis of this conversion.' },
				{ type: 'paragraph', content: 'The 1e version instead preserves the later cantrip’s identity as a temporary personal defense against physical attacks.' },
				{ type: 'paragraph', content: 'Its mechanics are rebuilt from scratch for 1e rather than translated word for word.' }
			]
		}
	]
} as const;

export default question;

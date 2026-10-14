export const question = {
	slug: 'did-blade-ward-exist-in-dnd-3e',
	question: 'Did Blade Ward exist in D&D 3e?',
	shortAnswer:
		'No official Blade Ward spell was found in the D&D 3e spell material checked for this conversion. The D&D Portal 3e version is therefore a Portal Conversion rather than an official published spell. It takes the later defensive cantrip concept and rebuilds it around native 3e Damage Reduction, 0-level spellcasting, and 3.0 action terminology.',
	introduction:
		'Blade Ward is a familiar spell name in later D&D, but it was not part of the standard D&D 3e spell repertoire used as the basis for this page. D&D Portal therefore treats this edition as a conversion rather than silently presenting later content as historical 3.0 material.\n\nThe rules used by the conversion are deliberately native to the edition even though the spell itself is new to it.',
	sections: [
		{
			id: 'portal-conversion-status',
			title: 'Blade Ward Is a Portal Conversion',
			blocks: [
				{ type: 'paragraph', content: 'The D&D Portal 3e page is not intended to claim that Blade Ward appeared in an official 3.0 rulebook.' },
				{ type: 'paragraph', content: 'Its content status should therefore remain portal-conversion and its publication source should be D&D Portal Conversion.' },
				{ type: 'paragraph', content: 'This distinction is especially important on a multi-edition wiki where later versions of the same spell name can otherwise make an invented historical entry look official.' }
			]
		},
		{
			id: 'what-is-being-converted',
			title: 'What Is Being Converted',
			blocks: [
				{ type: 'paragraph', content: 'The conceptual source is the later Blade Ward spell: a low-level arcane ward that gives the caster brief protection against physical attacks.' },
				{ type: 'paragraph', content: 'The conversion preserves that identity rather than attempting to reproduce every later-edition number or keyword.' },
				{ type: 'paragraph', content: 'The result is a 0-level Abjuration that uses Damage Reduction because that is the appropriate 3e mechanic for the intended defensive role.' }
			]
		},
		{
			id: 'native-rules-not-later-terminology',
			title: 'The Mechanics Use Native 3e Rules',
			blocks: [
				{ type: 'paragraph', content: 'The spell uses 1 action rather than the 3.5e phrase 1 standard action.' },
				{ type: 'paragraph', content: 'It uses Personal range, the caster as the target, and a 1-round duration instead of introducing 5e concentration or resistance mechanics.' },
				{ type: 'paragraph', content: 'Its DR 1/— is written using notation that exists naturally in D&D 3e.' }
			]
		},
		{
			id: 'why-the-label-matters',
			title: 'Why the Label Matters',
			blocks: [
				{ type: 'paragraph', content: 'A Portal Conversion can still be mechanically complete and usable at the table.' },
				{ type: 'paragraph', content: 'The label communicates provenance, not quality or playability: the rule was created for D&D Portal rather than printed as an official 3e spell.' },
				{ type: 'paragraph', content: 'That lets readers distinguish historical rules from edition-native homebrew without losing access to a consistent seven-edition spell page.' }
			]
		}
	]
} as const;

export default question;

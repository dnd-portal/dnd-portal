export const question = {
	slug: 'is-the-dnd-portal-4e-acid-splash-official',

	question: 'Is the D&D Portal 4e version of Acid Splash official?',

	shortAnswer:
		'No. The D&D Portal 4e version of Acid Splash is a homebrew Portal Conversion, not an official Wizards of the Coast spell or attack power. It is deliberately written with native 4e concepts such as At-Will usage, implements, attacks against Reflex, class-specific ability scores, and level-based damage scaling, but those mechanics were assembled by D&D Portal to adapt the earlier spell. A campaign using official-only character options should therefore not treat this version as automatically available.',

	introduction:
		'D&D Portal uses Portal Conversion as a specific content status. It means the page is designed for the rules of the selected edition even though that edition did not publish the spell in that form. Compatibility with an edition and official publication are not the same thing.\n\nAcid Splash is a particularly important case to label clearly because 4e does contain an official feat with that name. The Portal spell page therefore has to distinguish both its mechanical compatibility and its source status.',

	sections: [
		{
			id: 'the-4e-power-is-homebrew',
			title: 'The 4e Acid Splash power is homebrew',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The attack power shown on the D&D Portal Acid Splash page was created for the Portal conversion project. Wizards did not publish that stat block as an Acid Splash spell in 4e.'
				},
				{
					type: 'paragraph',
					content:
						'Its Ranged 10 distance, 1d6 primary damage, adjacent splash effect, separate Wizard and Sorcerer ability scores, and decision not to count as a ranged basic attack are therefore conversion choices rather than recovered official statistics.'
				},
				{
					type: 'paragraph',
					content:
						'Players should consequently treat the power like any other campaign homebrew. A DM can approve it, modify it, restrict it, or decline to use it depending on the rules and balance expectations of the campaign.'
				}
			]
		},
		{
			id: 'native-4e-rules-do-not-make-it-official',
			title: 'Using native 4e rules does not make it official',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The conversion intentionally uses familiar 4e structures. It is a level 1 At-Will Attack power, takes a standard action, uses the Arcane and Implement framework, attacks Reflex, and improves its primary damage in the epic tier.'
				},
				{
					type: 'paragraph',
					content:
						'Those choices are there so the power can be read and resolved like other 4e powers. A player should not need to import 3.5e touch AC, spell slots, or spell resistance simply because the original version of Acid Splash used those mechanics.'
				},
				{
					type: 'paragraph',
					content:
						'Rules compatibility only describes how well the homebrew fits the edition. It does not change authorship or publication history, which is why D&D Portal keeps the Portal Conversion label visible even when the mechanical presentation closely resembles an official power.'
				}
			]
		},
		{
			id: 'official-powers-are-used-as-design-references',
			title: 'Official powers are used as design references',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Official powers are useful reference points when checking whether a conversion belongs in the 4e power economy. Acid Orb provides a direct Sorcerer example of a level 1 at-will acid attack using Charisma against Reflex.'
				},
				{
					type: 'paragraph',
					content:
						'Wizard powers such as Scorching Burst and Ray of Frost provide additional reference points for level 1 at-will damage, target structures, range, and epic-tier scaling. They help establish the edition’s design language without becoming templates that must be copied exactly.'
				},
				{
					type: 'paragraph',
					content:
						'The Portal Acid Splash conversion deliberately occupies a different tactical niche. Its shorter range and smaller primary damage are balanced against a controlled secondary splash effect so it does not simply duplicate Acid Orb or an existing Wizard area power.'
				}
			]
		},
		{
			id: 'the-dm-decides-whether-it-is-available',
			title: 'The DM decides whether the conversion is available',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Nothing about the Portal page automatically adds Acid Splash to every Wizard or Sorcerer power list. The page supplies a conversion that a campaign can choose to adopt.'
				},
				{
					type: 'paragraph',
					content:
						'A DM might allow the power exactly as written, restrict it to one class, require it to replace another at-will power, adjust the splash damage, or reject it in a campaign that uses only published options.'
				},
				{
					type: 'paragraph',
					content:
						'Those campaign decisions do not alter the official 4e rules. They simply determine how this particular homebrew conversion is integrated into one table’s version of the game.'
				}
			]
		},
		{
			id: 'why-clear-labeling-matters',
			title: 'Why the Portal Conversion label matters',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Clear labeling prevents a playable homebrew page from gradually being mistaken for historical rules content. That risk is especially real when a page uses authentic edition terminology and sits beside genuinely published versions from other editions.'
				},
				{
					type: 'paragraph',
					content:
						'It also resolves the naming conflict with the official Acid Splash feat. A reader can see that the feat is official 4e content while the spell page is a Portal conversion with a separate purpose.'
				},
				{
					type: 'paragraph',
					content:
						'For D&D Portal, that distinction is part of the data model rather than merely a disclaimer. Search results, edition navigation, source information, and standalone FAQ pages should all preserve the same converted-versus-published distinction.'
				}
			]
		}
	]
} as const;

export default question;

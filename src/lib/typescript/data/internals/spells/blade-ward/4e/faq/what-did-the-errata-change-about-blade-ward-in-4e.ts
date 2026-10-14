export const question = {
	slug: 'what-did-the-errata-change-about-blade-ward-in-4e',

	question: 'What did the errata change about Blade Ward in D&D 4e?',

	shortAnswer:
		'Official 4e errata increased Blade Ward’s Hit damage from 1[W] + Strength modifier to 2[W] + Strength modifier. The trigger, Immediate Interrupt timing, Strength vs. AC attack, Wisdom-based attack-roll penalty, and duration of that penalty were not changed by that correction. D&D Portal should therefore use 2[W] + Strength modifier as the canonical corrected damage.',

	introduction:
		'The original 2008 Player’s Handbook printing and the later corrected version differ in one important numerical detail. The power was officially updated after publication.\n\nFor an edition-history wiki, keeping the erratum visible is useful because readers may encounter scans, books, or older references that still show the original 1[W] damage.',

	sections: [
		{
			id: 'original-printing',
			title: 'The Original Printing Used 1[W]',
			blocks: [
				{ type: 'paragraph', content: 'The first Player’s Handbook printing gives Blade Ward a Hit value of 1[W] plus the Ranger’s Strength modifier.' },
				{ type: 'paragraph', content: 'That value can still appear in older physical books, scans, power cards, and websites that reproduced the original printing.' },
				{ type: 'paragraph', content: 'Seeing 1[W] in an old source does not mean there are two separate versions of the power intended to coexist.' }
			]
		},
		{
			id: 'official-correction',
			title: 'Official Errata Raised the Damage to 2[W]',
			blocks: [
				{ type: 'paragraph', content: 'The official update instructs readers to replace the 1[W] value in Blade Ward’s Hit entry with 2[W].' },
				{ type: 'paragraph', content: 'The corrected Hit therefore deals 2[W] plus Strength modifier damage.' },
				{ type: 'paragraph', content: 'For rules data, the errata-adjusted number is the appropriate canonical value.' }
			]
		},
		{
			id: 'what-did-not-change',
			title: 'The Rest of the Power Did Not Change',
			blocks: [
				{ type: 'paragraph', content: 'The update did not change Blade Ward from an Encounter power or alter its Martial and Weapon keywords.' },
				{ type: 'paragraph', content: 'Its Immediate Interrupt trigger, target, Strength vs. AC attack, and Wisdom-based defensive Effect remain the same.' },
				{ type: 'paragraph', content: 'The erratum is therefore a damage correction rather than a redesign of the power.' }
			]
		},
		{
			id: 'portal-treatment',
			title: 'How D&D Portal Should Present It',
			blocks: [
				{ type: 'paragraph', content: 'The main 4e Blade Ward page should display 2[W] plus Strength modifier damage without making users reconstruct the correction themselves.' },
				{ type: 'paragraph', content: 'The page can still note that the original Player’s Handbook printing showed 1[W], because that explains conflicting historical references.' },
				{ type: 'paragraph', content: 'This preserves both play accuracy and edition-history context without treating obsolete damage as the current rule.' }
			]
		}
	]
} as const;

export default question;

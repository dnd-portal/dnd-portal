import type {
	EquipmentChoiceGroup,
	PageContentSection,
	PageTableOfContentsSection,
	ProgressionData
} from './content-types';

export type ClassPageContentData = {
	readonly startingEquipment: readonly EquipmentChoiceGroup[];
	readonly startingEquipmentIntro?: import('./content-types').InlineContent;
	readonly quickLinks?: readonly {
		readonly href: string;
		readonly title: string;
		readonly description: string;
		readonly icon: string;
	}[];
	readonly faqItems?: readonly {
		readonly question: string;
		readonly answer: string;
		readonly reference: string;
		readonly referenceLabel: string;
		readonly faqPath?: string;
	}[];
	readonly progression: ProgressionData<string>;
	readonly sections: {
		readonly identity: PageContentSection;
		readonly coreTraits: PageContentSection;
		readonly detailSections?: readonly PageContentSection[];
		readonly classFeaturesOverview: PageContentSection;
		readonly featureSections: readonly PageContentSection[];
		readonly subclasses?: PageContentSection;
		readonly referenceSections?: readonly PageContentSection[];
	};
	readonly tableOfContents: readonly PageTableOfContentsSection[];
};

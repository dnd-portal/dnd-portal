import type { LinkData } from './LinkData';
import type {
	HeaderContentSection,
	InlineContentBlock
} from '$lib/typescript/pages/content-types';

export type ImageGender = 'female' | 'male';
export type ImageSize = 's' | 'm' | 'l';

export type ResponsiveImageData = {
	readonly alt: string;
	readonly caption?: string;
	readonly position?: string;

	readonly sources: Record<ImageSize, string>;
};

export type PageSourceMetadata = {
	readonly label: string;
	readonly value: string;
	readonly icon?: string;
};

export type CampaignNote = {
	readonly party: string;
	readonly type: 'homebrew' | 'variant' | 'campaign-rule';
	readonly title?: string;
	readonly content: InlineContentBlock;
};

export type PageData = LinkData & {
	readonly external: false;
	readonly label?: string;
	readonly seoTitle?: string;

	readonly descriptions?: {
		readonly short?: string;
		readonly medium?: string;
		readonly long?: InlineContentBlock;
	};

	readonly header?: {
		readonly sections?: readonly HeaderContentSection[];
	};

	readonly images?: {
		readonly card?: Partial<Record<
			ImageGender,
			ResponsiveImageData
		>>;
		readonly header?: Partial<Record<
			ImageGender,
			ResponsiveImageData
		>>;
	};

	readonly navigation?: {
		readonly label?: string;
		readonly parent?: string;
		readonly hidden?: boolean;
	};

	readonly tags?: readonly string[];
	readonly sourceMetadata?: readonly PageSourceMetadata[];
	readonly campaignNotes?: readonly CampaignNote[];
};

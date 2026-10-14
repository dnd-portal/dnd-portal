import type { EquipmentAttunement, EquipmentImage, EquipmentItem } from '../equipment-items';
import type { PageContentSection } from '$lib/typescript/pages/content-types';

export type HomebrewCollectionMetadata = {
	readonly setting: {
		readonly name: string;
	};
	readonly creator: {
		readonly name: string;
		readonly href?: string;
	};
	readonly copyright: {
		readonly holder: string;
		readonly notice: string;
	};
	readonly about: {
		readonly title: string;
		readonly description: string;
		readonly attribution: string;
		readonly disclaimer: string;
	};
};

/** Generic homebrew magic item data, intentionally compatible with EquipmentDetail. */
export type HomebrewMagicItem = EquipmentItem & {
	readonly id: string;
	readonly collection: string;
	readonly attunement: EquipmentAttunement;
	readonly artwork?: EquipmentImage;
	readonly content?: readonly PageContentSection[];
};

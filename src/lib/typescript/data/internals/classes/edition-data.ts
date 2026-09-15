import type { EditionId } from '../editions';
import type { ClassEditionData } from './edition-types';
import { page as barbarian5e } from './barbarian/editions/5e/page';
import { page as barbarian4e } from './barbarian/editions/4e/page';
import { page as barbarian35e } from './barbarian/editions/3-5e/page';
import { page as barbarian3e } from './barbarian/editions/3e/page';

const editionData: Readonly<Record<string, Partial<Record<EditionId, ClassEditionData>>>> = {
	barbarian: {
		'5e': barbarian5e,
		'4e': barbarian4e,
		'3.5e': barbarian35e,
		'3e': barbarian3e
	}
};

export function getClassEditionData(
	baseClassSlug: string,
	edition: EditionId
): ClassEditionData | null {
	return editionData[baseClassSlug]?.[edition] ?? null;
}

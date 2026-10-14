import { page, content as pageContent } from './page';
import { progression } from './progression';
import { features } from './features';
import { subclasses } from './subclasses/_index_';

export const edition = '5.5e' as const;
export const availableEditions = ['5.5e', '5e', '4e', '3.5e', '3e'] as const;

export const barbarian = {
	edition,
	availableEditions,
	page,
	subclasses,
	content: { ...pageContent, progression, classFeatureSections: features }
} as const;
export default barbarian;

import { page, content as pageContent } from './page';
import { progression } from './progression';
import { features } from './features';
import { subclasses } from './subclasses/_index_';

export const barbarian = { page, subclasses, content: { ...pageContent, progression, classFeatureSections: features } } as const;
export default barbarian;

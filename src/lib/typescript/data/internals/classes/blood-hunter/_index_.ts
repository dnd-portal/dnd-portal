import { page, content as pageContent } from './page';
import { progression } from './progression';
import { features } from './features';
import { subclasses } from './subclasses/_index_';

export const bloodHunter = { page, subclasses, content: { ...pageContent, progression, sections: features } } as const;
export default bloodHunter;

import { page, content as pageContent } from './page';
import { progression } from './progression';
import { features } from './features';
import { subclasses } from './subclasses/_index_';
import { equipmentItems, npcItems } from './page';
export const pugilist = { page, subclasses, content: { ...pageContent, progression, sections: features }, equipmentItems, npcItems } as const;
export default pugilist;
export * from './page';

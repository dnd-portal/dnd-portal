import howManyCreatures from './how-many-creatures-can-acid-splash-hit-in-5-5e';
import doesItHitAllies from './does-acid-splash-hit-allies-in-5-5e';
import requiresSight from './do-you-need-to-see-where-you-cast-acid-splash-in-5-5e';
import canDamageObjects from './can-acid-splash-damage-objects-in-5-5e';
import canSculptSpellsProtect from './can-sculpt-spells-protect-creatures-from-acid-splash-in-5-5e';

export const acidSplash55eFaq = [
	howManyCreatures,
	doesItHitAllies,
	requiresSight,
	canDamageObjects,
	canSculptSpellsProtect
] as const;

export default acidSplash55eFaq;

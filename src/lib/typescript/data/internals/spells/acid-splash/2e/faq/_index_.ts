export { default as didAcidSplashExistInAdnd2e } from './did-acid-splash-exist-in-adnd-2e';
export { default as whyIsAcidSplashA1stLevelSpellIn2e } from './why-is-acid-splash-a-1st-level-spell-in-2e';
export { default as doesAcidSplashRequireAnAttackRollIn2e } from './does-acid-splash-require-an-attack-roll-in-2e';
export { default as doesAcidSplashUseGrenadeLikeMissileRulesIn2e } from './does-acid-splash-use-grenade-like-missile-rules-in-2e';
export { default as canAcidSplashDamageItemsOrEquipmentIn2e } from './can-acid-splash-damage-items-or-equipment-in-2e';

import didAcidSplashExistInAdnd2e from './did-acid-splash-exist-in-adnd-2e';
import whyIsAcidSplashA1stLevelSpellIn2e from './why-is-acid-splash-a-1st-level-spell-in-2e';
import doesAcidSplashRequireAnAttackRollIn2e from './does-acid-splash-require-an-attack-roll-in-2e';
import doesAcidSplashUseGrenadeLikeMissileRulesIn2e from './does-acid-splash-use-grenade-like-missile-rules-in-2e';
import canAcidSplashDamageItemsOrEquipmentIn2e from './can-acid-splash-damage-items-or-equipment-in-2e';

export const acidSplash2eFaq = [
	didAcidSplashExistInAdnd2e,
	whyIsAcidSplashA1stLevelSpellIn2e,
	doesAcidSplashRequireAnAttackRollIn2e,
	doesAcidSplashUseGrenadeLikeMissileRulesIn2e,
	canAcidSplashDamageItemsOrEquipmentIn2e
] as const;

export default acidSplash2eFaq;

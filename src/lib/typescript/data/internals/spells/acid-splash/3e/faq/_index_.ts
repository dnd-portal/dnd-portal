import doesAcidSplashUseTouchAc from './does-acid-splash-use-touch-ac-in-3e';
import doesAcidSplashAllowSavingThrow from './does-acid-splash-allow-a-saving-throw-in-3e';
import doesSpellResistanceApply from './does-spell-resistance-apply-to-acid-splash-in-3e';
import doesAcidSplashDamageScale from './does-acid-splash-damage-scale-with-caster-level-in-3e';
import doesAcidSplashDealSplashDamage from './does-acid-splash-deal-splash-damage-if-it-misses-in-3e';

export const acidSplash3eFaq = [
	doesAcidSplashUseTouchAc,
	doesAcidSplashAllowSavingThrow,
	doesSpellResistanceApply,
	doesAcidSplashDamageScale,
	doesAcidSplashDealSplashDamage
] as const;

export default acidSplash3eFaq;

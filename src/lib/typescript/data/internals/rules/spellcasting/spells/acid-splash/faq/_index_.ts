import canAcidSplashDamageObjects from './can-acid-splash-damage-objects-in-3-5e';
import doesAcidSplashAllowSavingThrow from './does-acid-splash-allow-a-saving-throw-in-3-5e';
import doesAcidSplashDamageScale from './does-acid-splash-damage-scale-with-caster-level-in-3-5e';
import doesAcidSplashUseTouchAc from './does-acid-splash-use-touch-ac-in-3-5e';
import doesSpellResistanceApply from './does-spell-resistance-apply-to-acid-splash-in-3-5e';

export {
	canAcidSplashDamageObjects,
	doesAcidSplashAllowSavingThrow,
	doesAcidSplashDamageScale,
	doesAcidSplashUseTouchAc,
	doesSpellResistanceApply
};

export const acidSplashFaq = [
	doesAcidSplashUseTouchAc,
	doesAcidSplashAllowSavingThrow,
	doesSpellResistanceApply,
	doesAcidSplashDamageScale,
	canAcidSplashDamageObjects
] as const;

export default acidSplashFaq;

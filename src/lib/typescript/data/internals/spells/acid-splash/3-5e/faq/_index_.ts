import doesAcidSplashUseTouchAc from './does-acid-splash-use-touch-ac-in-3-5e';
import doesAcidSplashAllowSavingThrow from './does-acid-splash-allow-a-saving-throw-in-3-5e';
import doesSpellResistanceApply from './does-spell-resistance-apply-to-acid-splash-in-3-5e';
import doesAcidSplashDamageScale from '$lib/typescript/data/internals/rules/spellcasting/spells/acid-splash/faq/does-acid-splash-damage-scale-with-caster-level-in-3-5e';
import canAcidSplashDamageObjects from './can-acid-splash-damage-objects-in-3-5e';

export const acidSplash35eFaq = [
	doesAcidSplashUseTouchAc,
	doesAcidSplashAllowSavingThrow,
	doesSpellResistanceApply,
	doesAcidSplashDamageScale,
	canAcidSplashDamageObjects
] as const;

export default acidSplash35eFaq;

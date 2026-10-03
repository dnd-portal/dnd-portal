import canTargetTwoCreatures from './can-acid-splash-target-two-creatures-in-5e';
import canTargetObjects from './can-acid-splash-target-objects-in-5e';
import canUseTwinnedSpell from './can-acid-splash-be-used-with-twinned-spell-in-5e';
import doesEvasionWork from './does-evasion-work-against-acid-splash-in-5e';
import doesDamageScale from './does-acid-splash-scale-with-caster-level-in-5e';

export const acidSplash5eFaq = [
	canTargetTwoCreatures,
	canTargetObjects,
	canUseTwinnedSpell,
	doesEvasionWork,
	doesDamageScale
] as const;

export default acidSplash5eFaq;

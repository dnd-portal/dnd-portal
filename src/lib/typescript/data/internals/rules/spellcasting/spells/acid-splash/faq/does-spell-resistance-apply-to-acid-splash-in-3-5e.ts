export const question = {
	slug: 'does-spell-resistance-apply-to-acid-splash-in-3-5e',
	question: 'Does spell resistance apply to Acid Splash in D&D 3.5e?',
	shortAnswer: 'No. Acid Splash has Spell Resistance: No in D&D 3.5e. A caster does not make a caster level check to overcome spell resistance when using Acid Splash, although the ranged touch attack must still hit and other defenses such as acid resistance can still affect the damage.',
	introduction: 'Spell resistance is not one of the defenses that stops Acid Splash in D&D 3.5e.\n\nThis makes Acid Splash useful against some creatures with spell resistance because the caster does not need to overcome that resistance before the spell can hit.',
	sections: [
		{ id: 'none', title: 'Acid Splash does not allow spell resistance', blocks: [{ type: 'paragraph', content: 'The spell\'s Spell Resistance: No entry means spell resistance does not negate or block its effect.' }] },
		{ id: 'check', title: 'No caster level check is required', blocks: [{ type: 'paragraph', content: 'The caster does not roll a caster level check to overcome spell resistance when casting Acid Splash.' }] },
		{ id: 'different', title: 'Spell resistance is not acid resistance', blocks: [{ type: 'paragraph', content: 'Spell resistance and acid resistance are separate defenses. Acid resistance can still reduce the damage after a successful hit.' }] },
		{ id: 'attack', title: 'The ranged touch attack still matters', blocks: [{ type: 'paragraph', content: 'Spell resistance does not replace the attack roll. The ranged touch attack must still hit the target.' }] },
		{ id: 'useful', title: 'Why this can be useful', blocks: [{ type: 'paragraph', content: 'Against a creature whose spell resistance would hinder another offensive spell, Acid Splash avoids that extra caster level check while retaining its touch-attack requirement.' }] }
	]
} as const;

export default question;

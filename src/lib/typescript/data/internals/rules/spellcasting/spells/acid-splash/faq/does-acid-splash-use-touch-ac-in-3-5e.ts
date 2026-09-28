export const question = {
	slug: 'does-acid-splash-use-touch-ac-in-3-5e',
	question: 'Does Acid Splash use touch AC in D&D 3.5e?',
	shortAnswer: 'Yes. Acid Splash requires a ranged touch attack, so the attack is made against the target\'s touch Armor Class rather than its normal Armor Class. Armor, shield, and natural armor bonuses do not apply to touch AC, while modifiers such as Dexterity, size, and deflection still can.',
	introduction: 'Acid Splash does not automatically hit its target in D&D 3.5e.\n\nThe spell requires a ranged touch attack, which means it follows the rules for touch Armor Class rather than making an attack against the target\'s full AC.',
	sections: [
		{ id: 'ranged-touch', title: 'Acid Splash is a ranged touch attack', blocks: [{ type: 'paragraph', content: 'The caster makes a ranged touch attack against the target. If that attack misses, Acid Splash deals no damage.' }] },
		{ id: 'ignored', title: 'What touch AC ignores', blocks: [{ type: 'paragraph', content: 'Armor, shield, and natural armor bonuses are not included when determining AC against this touch attack.' }] },
		{ id: 'applies', title: 'What still applies to touch AC', blocks: [{ type: 'paragraph', content: 'Touch AC is not automatically 10. Dexterity, size, deflection, dodge, and other applicable modifiers can still matter.' }] },
		{ id: 'why', title: 'Why touch AC matters for Acid Splash', blocks: [{ type: 'paragraph', content: 'An armored creature may have high normal AC but lower touch AC, while fast or magically protected creatures can still be difficult targets.' }] },
		{ id: 'critical', title: 'Can Acid Splash score a critical hit?', blocks: [{ type: 'paragraph', content: 'Yes. Because Acid Splash requires an attack roll and deals hit point damage, the normal 3.5e rules for critical hits by damaging spell attacks can apply.' }] }
	]
} as const;

export default question;

export const question = {
	slug: 'does-acid-splash-allow-a-saving-throw-in-3-5e',
	question: 'Does Acid Splash allow a saving throw in D&D 3.5e?',
	shortAnswer: 'No. Acid Splash does not allow a saving throw in D&D 3.5e. Instead, the caster must succeed on a ranged touch attack. A successful attack deals 1d3 acid damage, while a missed attack deals no damage.',
	introduction: 'Acid Splash uses an attack roll instead of a saving throw.\n\nThis distinction is important because saving-throw bonuses do not help against Acid Splash, but the target\'s touch Armor Class still determines whether the spell hits.',
	sections: [
		{ id: 'no-save', title: 'Acid Splash has no saving throw', blocks: [{ type: 'paragraph', content: 'The spell permits no Fortitude, Reflex, or Will save. Its saving-throw entry is None.' }] },
		{ id: 'attack', title: 'The attack roll determines whether it hits', blocks: [{ type: 'paragraph', content: 'The ranged touch attack decides whether the missile reaches the target and deals its damage.' }] },
		{ id: 'no-half', title: 'There is no half-damage result', blocks: [{ type: 'paragraph', content: 'There is no successful-save-for-half mechanic. The attack either hits for 1d3 acid damage or misses.' }] },
		{ id: 'bonuses', title: 'Saving throw bonuses do not help against Acid Splash', blocks: [{ type: 'paragraph', content: 'Save bonuses do not directly defend against this spell, although touch AC, attack-related defenses, and acid resistance can still matter.' }] },
		{ id: 'evasion', title: 'Does Evasion work against Acid Splash?', blocks: [{ type: 'paragraph', content: 'Evasion provides no saving throw to exploit here because Acid Splash does not permit a Reflex save.' }] }
	]
} as const;

export default question;

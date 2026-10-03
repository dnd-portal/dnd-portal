export const question = {
	slug: 'does-acid-splash-damage-scale-with-caster-level-in-3-5e',
	question: 'Does Acid Splash damage scale with caster level in D&D 3.5e?',
	shortAnswer: 'No. Acid Splash normally deals 1d3 acid damage regardless of caster level. Its damage does not scale automatically. Its range does scale, however, because the spell uses Close range: 25 feet plus 5 feet for every two caster levels.',
	introduction: 'Caster level affects Acid Splash, but not by increasing its normal damage.\n\nThe spell always starts with 1d3 acid damage. What improves automatically with caster level is the distance from which Acid Splash can be used.',
	sections: [
		{ id: 'damage', title: 'Acid Splash deals 1d3 acid damage', blocks: [{ type: 'paragraph', content: 'The spell\'s normal damage is 1d3 acid damage and does not gain additional dice merely because the caster gains levels.' }] },
		{ id: 'range', title: 'The range does scale with caster level', blocks: [{ type: 'paragraph', content: 'Close range begins at 25 feet and adds 5 feet for every two caster levels.' }] },
		{ id: 'examples', title: 'Acid Splash range examples', blocks: [{ type: 'list', items: ['Caster level 1: 25 feet', 'Caster level 2: 30 feet', 'Caster level 4: 35 feet', 'Caster level 6: 40 feet', 'Caster level 10: 50 feet'] }] },
		{ id: 'modifiers', title: 'Other effects can still modify the damage', blocks: [{ type: 'paragraph', content: 'A feat, class feature, magic item, or other rule can modify damage if its own text applies. That is different from automatic caster-level scaling.' }] },
		{ id: 'separate', title: 'Damage scaling and range scaling are separate', blocks: [{ type: 'paragraph', content: 'Increasing the spell\'s range does not imply increasing its damage. These are separate parts of the spell\'s mechanics.' }] }
	]
} as const;

export default question;

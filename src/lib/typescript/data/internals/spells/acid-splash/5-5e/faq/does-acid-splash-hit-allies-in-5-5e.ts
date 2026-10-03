export const question = {
	slug: 'does-acid-splash-hit-allies-in-5-5e',

	question: 'Does Acid Splash hit allies in D&D 5.5e?',

	shortAnswer:
		'Yes. The 2024 version of Acid Splash affects each creature inside its 5-foot-radius Sphere, not only enemies or creatures chosen by the caster. An ally inside the area must therefore make the same Dexterity saving throw as an enemy and takes the spell’s acid damage on a failed save. The caster must place the Sphere carefully or use another feature that can protect an ally.',

	introduction:
		'The answer changed in practical importance with the 2024 redesign. The 2014 version allowed the caster to choose one or two creatures, making it easy to select enemies while leaving nearby allies alone.\n\nThe 2024 spell instead uses an area of effect. Once the Sphere is placed, creature allegiance does not determine whether a creature is included.',

	sections: [
		{
			id: 'the-spell-says-each-creature',
			title: 'The Sphere affects each creature inside it',
			blocks: [
				{ type: 'paragraph', content: 'Acid Splash does not use wording such as “each enemy” or “creatures of your choice.” Its area affects each creature inside the Sphere.' },
				{ type: 'paragraph', content: 'An allied creature is still a creature for this rule. If that ally is inside the affected area, the ally becomes subject to the spell and makes a Dexterity saving throw.' },
				{ type: 'paragraph', content: 'The same rule applies to neutral or otherwise non-hostile creatures. Acid Splash does not distinguish between hostile, friendly, and neutral creatures when determining who is caught in the Sphere.' }
			]
		},
		{
			id: 'allies-make-the-normal-save',
			title: 'An ally uses the normal Dexterity save',
			blocks: [
				{ type: 'paragraph', content: 'An ally caught in the Sphere does not automatically succeed and does not receive reduced damage simply because the caster does not intend to harm them.' },
				{ type: 'paragraph', content: 'The ally makes a Dexterity saving throw against the caster’s spell save DC. On a failed save, the ally takes the same acid damage an enemy would take.' },
				{ type: 'paragraph', content: 'On a successful save, the ally takes no Acid Splash damage because the spell has no half-damage result on a successful save.' }
			]
		},
		{
			id: 'positioning-is-part-of-the-spell',
			title: 'Careful placement is part of using Acid Splash',
			blocks: [
				{ type: 'paragraph', content: 'The caster chooses the point of origin, so battlefield positioning is the primary way to avoid friendly fire. Moving the point even a small distance can change which creature spaces are included in the Sphere.' },
				{ type: 'paragraph', content: 'This creates a tactical tradeoff. A placement that catches several enemies might also include an ally, while a safer placement might hit fewer enemies.' },
				{ type: 'paragraph', content: 'That tradeoff is part of the 2024 version’s identity. It can potentially affect more creatures than the 2014 spell, but the caster has less direct control over exactly which nearby creatures are excluded.' }
			]
		},
		{
			id: 'some-features-can-protect-allies',
			title: 'Other features can protect an ally',
			blocks: [
				{ type: 'paragraph', content: 'Class features and other rules can modify the normal outcome. The 2024 Evoker Wizard’s Sculpt Spells feature is one example because Acid Splash is now an Evocation spell.' },
				{ type: 'paragraph', content: 'When Sculpt Spells applies, the Wizard can choose eligible creatures affected by the Evocation and cause them to automatically succeed on their saving throws.' },
				{ type: 'paragraph', content: 'Acid Splash deals no damage on a successful save, so an eligible protected creature takes no damage. That protection comes from Sculpt Spells, not from Acid Splash distinguishing allies on its own.' }
			]
		}
	]
} as const;

export default question;

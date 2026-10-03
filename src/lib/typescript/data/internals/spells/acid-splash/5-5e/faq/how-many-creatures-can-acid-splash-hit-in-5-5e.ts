export const question = {
	slug: 'how-many-creatures-can-acid-splash-hit-in-5-5e',

	question: 'How many creatures can Acid Splash hit in D&D 5.5e?',

	shortAnswer:
		'Acid Splash has no fixed maximum number of creatures in D&D 5.5e. The 2024 version creates a 5-foot-radius Sphere at a point within 60 feet, and every creature inside that Sphere must make a Dexterity saving throw. The practical number of creatures affected therefore depends on positioning, creature size, the battle map, and which spaces are actually included in the area.',

	introduction:
		'The 2014 version of Acid Splash could target at most two creatures, so it is easy to carry that limit into the 2024 rules by mistake. The revised spell no longer selects one or two creatures directly.\n\nInstead, Acid Splash is an area-of-effect cantrip. Once the point of origin is chosen, the 5-foot-radius Sphere determines which creatures are affected.',

	sections: [
		{
			id: 'there-is-no-two-creature-limit',
			title: 'There is no longer a two-creature limit',
			blocks: [
				{ type: 'paragraph', content: 'The 2024 spell does not contain a maximum number of creature targets. It creates a Sphere and affects each creature inside that area.' },
				{ type: 'paragraph', content: 'If only one creature is inside the Sphere, only that creature makes the saving throw. If several creatures occupy spaces included in the Sphere, each of those creatures can be affected by the same casting.' },
				{ type: 'paragraph', content: 'This is a fundamental change from the 2014 spell. The old wording deliberately limited a casting to one or two creatures even when more creatures were clustered nearby.' }
			]
		},
		{
			id: 'the-area-determines-the-targets',
			title: 'The Sphere determines which creatures are affected',
			blocks: [
				{ type: 'paragraph', content: 'In the 2024 rules, an area of effect determines what the spell targets. Acid Splash uses a 5-foot-radius Sphere whose origin is a point chosen within the spell’s 60-foot range.' },
				{ type: 'paragraph', content: 'The caster does not make a separate target selection for every creature inside the Sphere. Once the area is placed, creatures inside it are affected according to the spell.' },
				{ type: 'paragraph', content: 'That means the caster cannot keep an enemy inside the Sphere while simply declaring that an adjacent ally in the same affected area is ignored. Avoiding the ally requires different placement or a feature that specifically protects creatures.' }
			]
		},
		{
			id: 'there-is-no-universal-grid-maximum',
			title: 'There is no useful universal maximum to memorize',
			blocks: [
				{ type: 'paragraph', content: 'It can be tempting to convert the 5-foot-radius Sphere into a single fixed number of grid squares and declare that number to be the spell’s maximum targets. That is not a reliable general rule.' },
				{ type: 'paragraph', content: 'Creature sizes, occupied spaces, exact positioning, grid conventions, and whether combat is being played on a grid can all change how many creatures are actually inside the area.' },
				{ type: 'paragraph', content: 'D&D Portal should therefore describe Acid Splash as having no fixed creature cap. The correct question at the table is which creatures are inside the Sphere, not whether the spell has reached a hidden target limit.' }
			]
		},
		{
			id: 'each-creature-saves-separately',
			title: 'Every affected creature makes its own saving throw',
			blocks: [
				{ type: 'paragraph', content: 'Creatures caught in the Sphere do not share one Dexterity saving throw. Each affected creature rolls separately against the caster’s spell save DC.' },
				{ type: 'paragraph', content: 'One creature can therefore fail and take the full acid damage while another creature in the same Sphere succeeds and takes no damage.' },
				{ type: 'paragraph', content: 'The damage is not divided between the creatures. Every failed save takes the spell’s full current damage: 1d6 initially, increasing to 2d6, 3d6, and 4d6 at the listed character levels.' }
			]
		}
	]
} as const;

export default question;

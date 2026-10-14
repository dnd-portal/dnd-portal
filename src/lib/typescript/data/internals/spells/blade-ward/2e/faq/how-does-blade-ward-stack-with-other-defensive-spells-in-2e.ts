export const question = {
	slug: 'how-does-blade-ward-stack-with-other-defensive-spells-in-2e',
	question: 'How does Blade Ward stack with other defensive spells in AD&D 2e?',
	shortAnswer:
		'Blade Ward can function alongside defenses that use different mechanics, such as Armor Class changes, attack penalties, or miss chances. It does not stack with itself. If another magical effect directly reduces the same physical damage, use the greater applicable reduction rather than adding the reductions together. If another spell completely prevents the attack or its damage, Blade Ward has nothing left to reduce.',
	introduction:
		'AD&D 2e does not have one universal modern stacking framework for every magical defense, so the Portal Conversion needs a clear rule for overlapping physical protection.\n\nThe safest approach is to let different defensive mechanics coexist while preventing multiple direct per-die damage reducers from being added together.',
	sections: [
		{
			id: 'armor-class-effects',
			title: 'Armor Class Effects Can Work Alongside Blade Ward',
			blocks: [
				{ type: 'paragraph', content: 'A spell that improves Armor Class changes whether an attack hits in the first place.' },
				{ type: 'paragraph', content: 'Blade Ward only matters after a qualifying attack succeeds and damage dice are rolled.' },
				{ type: 'paragraph', content: 'Because those mechanics operate at different stages, they can normally function together.' }
			]
		},
		{
			id: 'blur-and-miss-chance',
			title: 'Miss-Chance Effects Can Also Work Alongside It',
			blocks: [
				{ type: 'paragraph', content: 'A defensive effect such as Blur can cause attacks to fail before damage is rolled.' },
				{ type: 'paragraph', content: 'If the attack misses because of that effect, Blade Ward never needs to reduce damage.' },
				{ type: 'paragraph', content: 'If the attack still succeeds, Blade Ward can then reduce the qualifying physical damage dice.' }
			]
		},
		{
			id: 'direct-damage-reducers',
			title: 'Direct Damage Reductions Do Not Add Together',
			blocks: [
				{ type: 'paragraph', content: 'If another spell directly reduces the same physical damage dice, do not add both reductions together.' },
				{ type: 'paragraph', content: 'Use the greater applicable reduction for that damage instead.' },
				{ type: 'paragraph', content: 'This prevents a 1st-level Blade Ward from becoming disproportionately strong when combined with a stronger protection spell that already reduces damage per die.' }
			]
		},
		{
			id: 'complete-negation',
			title: 'Complete Negation Happens First',
			blocks: [
				{ type: 'paragraph', content: 'Some stronger defensive magic can completely prevent a physical attack or negate its damage.' },
				{ type: 'paragraph', content: 'If no damage remains after that effect, Blade Ward provides no additional benefit against that attack.' },
				{ type: 'paragraph', content: 'The spell remains active for the rest of its duration and can still reduce later qualifying attacks.' }
			]
		},
		{
			id: 'self-stacking',
			title: 'Blade Ward Does Not Stack with Itself',
			blocks: [
				{ type: 'paragraph', content: 'Multiple castings of Blade Ward do not each subtract another point from every damage die.' },
				{ type: 'paragraph', content: 'A second instance simply overlaps the same type of ward rather than creating a doubled reduction.' },
				{ type: 'paragraph', content: 'This keeps the spell predictable and prevents abusive stacking through multiple casters or unusual spell-storage effects.' }
			]
		}
	]
} as const;

export default question;

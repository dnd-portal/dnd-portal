export const question = {
	slug: 'can-blade-ward-stop-a-critical-hit-in-5-5e',
	question: 'Can Blade Ward stop a critical hit in D&D 5.5e?',
	shortAnswer:
		'Not when the Critical Hit comes from a natural 20 on the d20. Blade Ward still subtracts 1d4 from the attack roll, but the normal 2024 attack rules say that a natural 20 hits regardless of modifiers or the target’s Armor Class and becomes a Critical Hit. Blade Ward can cause many ordinary high attack totals to miss, but it does not override the special natural-20 rule.',
	introduction:
		'Blade Ward changes attack totals, which makes it reasonable to ask whether a sufficiently large 1d4 penalty could turn a Critical Hit into a normal hit or a miss. Under the normal 2024 attack rules, a natural 20 is handled specially.\n\nThe d20 result itself determines that the attack hits and becomes a Critical Hit, so ordinary modifiers do not cancel that outcome.',
	sections: [
		{
			id: 'natural-twenty-hits',
			title: 'A Natural 20 Hits Regardless of Modifiers',
			blocks: [
				{ type: 'paragraph', content: 'When the d20 used for an attack roll shows 20, the attack hits regardless of the final numerical total or the defender’s Armor Class.' },
				{ type: 'paragraph', content: 'Blade Ward can reduce the final attack total by as much as 4, but that reduction does not remove the natural 20 that was rolled on the die.' },
				{ type: 'paragraph', content: 'The attack therefore still hits even if the modified total would normally be below the target’s Armor Class.' }
			]
		},
		{
			id: 'still-critical',
			title: 'The Hit Is Still a Critical Hit',
			blocks: [
				{ type: 'paragraph', content: 'Under the normal rules, an attack roll that produces a natural 20 is also a Critical Hit.' },
				{ type: 'paragraph', content: 'Blade Ward contains no special language that cancels a Critical Hit, changes the d20 result, or converts a natural 20 into another number.' },
				{ type: 'paragraph', content: 'The attack therefore resolves as a Critical Hit unless some separate rule specifically changes that outcome.' }
			]
		},
		{
			id: 'ordinary-high-rolls',
			title: 'Ordinary High Attack Rolls Can Still Be Stopped',
			blocks: [
				{ type: 'paragraph', content: 'Not every very high attack total is a natural 20. An attacker might roll 18 or 19 on the d20 and still reach a large total through modifiers.' },
				{ type: 'paragraph', content: 'Blade Ward can reduce those ordinary totals enough to fall below your Armor Class, causing the attack to miss.' },
				{ type: 'paragraph', content: 'The important distinction is between a high modified result and the special rule attached to an actual natural 20 on the d20.' }
			]
		},
		{
			id: 'other-critical-rules',
			title: 'Other Critical Hit Rules Can Exist',
			blocks: [
				{ type: 'paragraph', content: 'Some features can create special Critical Hit interactions or change when a Critical Hit occurs.' },
				{ type: 'paragraph', content: 'Blade Ward does not automatically resolve every unusual Critical Hit rule in the game. The relevant feature must be checked alongside the cantrip.' },
				{ type: 'paragraph', content: 'For the standard natural-20 Critical Hit, however, Blade Ward’s 1d4 penalty does not prevent the hit or the critical result.' }
			]
		}
	]
} as const;

export default question;

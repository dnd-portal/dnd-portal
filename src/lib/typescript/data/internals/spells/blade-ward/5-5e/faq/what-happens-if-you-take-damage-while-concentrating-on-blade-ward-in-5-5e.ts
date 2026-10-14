export const question = {
	slug: 'what-happens-if-you-take-damage-while-concentrating-on-blade-ward-in-5-5e',
	question: 'What happens if you take damage while concentrating on Blade Ward in D&D 5.5e?',
	shortAnswer:
		'You make the normal Constitution saving throw required to maintain Concentration. If you succeed, Blade Ward continues; if you fail, the cantrip ends. The normal 2024 Concentration DC is 10 or half the damage taken, rounded down, whichever is higher, with the usual maximum DC of 30. Blade Ward can reduce how often this happens by causing some attack rolls to miss before they deal damage.',
	introduction:
		'The 2024 Blade Ward lasts much longer than its 2014 predecessor, but that duration is balanced by Concentration. Taking damage can therefore end the cantrip before its full 1-minute duration expires.\n\nBlade Ward does not use a special Concentration rule of its own. It follows the normal 2024 rules for maintaining Concentration after taking damage.',
	sections: [
		{
			id: 'damage-triggers-save',
			title: 'Damage Can Trigger a Concentration Saving Throw',
			blocks: [
				{ type: 'paragraph', content: 'When you take damage while concentrating on Blade Ward, you make a Constitution saving throw to determine whether you maintain the spell.' },
				{ type: 'paragraph', content: 'The normal DC is 10 or half the damage taken, rounded down, whichever number is higher. The 2024 rules also place a maximum of 30 on this Concentration DC.' },
				{ type: 'paragraph', content: 'This check is separate from the attack roll that might have caused the damage. Blade Ward affects the attack roll, while the Concentration save happens afterward if the attack still hits and deals damage.' }
			]
		},
		{
			id: 'success',
			title: 'A Successful Save Keeps Blade Ward Active',
			blocks: [
				{ type: 'paragraph', content: 'If you succeed on the Constitution saving throw, your Concentration continues and Blade Ward remains active.' },
				{ type: 'paragraph', content: 'Future creatures making attack rolls against you continue to subtract 1d4 as long as the spell has not otherwise ended.' },
				{ type: 'paragraph', content: 'Succeeding on the Concentration save does not reset the spell’s duration. The original 1-minute duration continues counting normally.' }
			]
		},
		{
			id: 'failure',
			title: 'A Failed Save Ends the Cantrip',
			blocks: [
				{ type: 'paragraph', content: 'If you fail the Constitution saving throw, your Concentration ends and Blade Ward immediately stops protecting you.' },
				{ type: 'paragraph', content: 'Attack rolls made against you after that point no longer receive the 1d4 penalty from Blade Ward.' },
				{ type: 'paragraph', content: 'You can cast Blade Ward again on a later turn, but doing so requires another action and begins a new duration.' }
			]
		},
		{
			id: 'protects-own-concentration',
			title: 'Blade Ward Can Help Protect Its Own Concentration',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward does not grant a bonus to Constitution saves, but its attack-roll penalty can indirectly make Concentration easier to maintain.' },
				{ type: 'paragraph', content: 'If the 1d4 penalty causes an attack to miss, that attack normally deals no attack damage. Without damage from that attack, there is no damage-triggered Concentration save from it.' },
				{ type: 'paragraph', content: 'This creates a defensive feedback loop: Blade Ward can prevent some hits, and preventing those hits can reduce the number of opportunities for the spell’s Concentration to be broken.' }
			]
		},
		{
			id: 'other-causes',
			title: 'Damage Is Not the Only Way Concentration Can End',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward also ends if you voluntarily stop concentrating, begin concentrating on another effect, or are affected by another rule that ends Concentration.' },
				{ type: 'paragraph', content: 'Taking no damage does not guarantee that Blade Ward will last the full minute if one of those other conditions occurs.' },
				{ type: 'paragraph', content: 'The 1-minute duration is therefore the maximum duration rather than a guarantee that the protection remains active for ten rounds.' }
			]
		}
	]
} as const;

export default question;

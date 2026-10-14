export const question = {
	slug: 'can-blade-ward-trigger-on-ranged-or-spell-attacks-in-4e',

	question: 'Can Blade Ward trigger on ranged or spell attacks in D&D 4e?',

	shortAnswer:
		'Blade Ward triggers only when a creature makes a melee attack against you. A ranged attack does not trigger it. A spell or other nonmartial power can trigger Blade Ward if the attack itself is mechanically a melee attack, because the trigger does not say “melee weapon attack”; it only requires a melee attack against you.',

	introduction:
		'The trigger for Blade Ward is narrower than “an enemy attacks you,” but broader than “an enemy hits you with a melee weapon.” The relevant 4e attack type is melee.\n\nThis means the power cares about how the triggering attack is classified, not about whether the attacker uses the Martial power source or a conventional weapon.',

	sections: [
		{
			id: 'ranged-attacks-do-not-trigger-it',
			title: 'Ranged Attacks Do Not Trigger Blade Ward',
			blocks: [
				{ type: 'paragraph', content: 'A ranged attack against you fails the trigger because Blade Ward specifically requires a melee attack.' },
				{ type: 'paragraph', content: 'The attacker being adjacent does not turn a ranged attack into a melee attack. The attack’s actual type is what matters.' },
				{ type: 'paragraph', content: 'You therefore cannot use Blade Ward merely because a ranged attacker happens to be close enough for your weapon counterattack.' }
			]
		},
		{
			id: 'melee-attacks-from-other-power-sources',
			title: 'Melee Attacks from Other Power Sources Can Trigger It',
			blocks: [
				{ type: 'paragraph', content: 'The trigger does not restrict the enemy to a melee weapon attack or a Martial power.' },
				{ type: 'paragraph', content: 'If an Arcane, Divine, Primal, Psionic, or other power is mechanically a melee attack against you, it can satisfy the trigger.' },
				{ type: 'paragraph', content: 'The source of the attack is less important than its melee attack classification.' }
			]
		},
		{
			id: 'the-target-must-be-you',
			title: 'The Melee Attack Must Be Against You',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward also requires that the melee attack be made against you.' },
				{ type: 'paragraph', content: 'A creature attacking your ally does not trigger the power even if the attacker is within your melee reach.' },
				{ type: 'paragraph', content: 'The power is a personal defensive counter rather than a general interception ability for nearby allies.' }
			]
		},
		{
			id: 'trigger-is-not-hit',
			title: 'The Trigger Is the Attack, Not a Hit',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward triggers when the creature makes the melee attack. It does not require the enemy to hit you first.' },
				{ type: 'paragraph', content: 'That timing is necessary for the Immediate Interrupt to affect the triggering attack before it resolves.' },
				{ type: 'paragraph', content: 'You therefore choose to use Blade Ward in response to the attack being made, before knowing the final consequences of that attack under normal interrupt timing.' }
			]
		}
	]
} as const;

export default question;

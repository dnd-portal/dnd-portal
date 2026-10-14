export const question = {
	slug: 'does-blade-wards-effect-apply-if-the-counterattack-misses-in-4e',

	question: "Does Blade Ward's effect apply if the counterattack misses in D&D 4e?",

	shortAnswer:
		'Yes. Blade Ward separates its Hit entry from its Effect entry. Missing the Strength vs. AC counterattack means you do not deal the Hit damage, but the Effect still applies. The triggering creature therefore still takes the penalty to attack rolls against you equal to your Wisdom modifier until the end of your next turn.',

	introduction:
		'4e powers distinguish carefully between Hit, Miss, and Effect entries. An Effect is not automatically dependent on hitting unless the power explicitly says that it is.\n\nBlade Ward uses that structure to make its defensive benefit reliable even when its weapon counterattack fails.',

	sections: [
		{
			id: 'hit-and-effect-are-separate',
			title: 'Hit and Effect Are Separate Parts of the Power',
			blocks: [
				{ type: 'paragraph', content: 'The Hit entry determines the weapon damage caused when the Strength vs. AC attack succeeds.' },
				{ type: 'paragraph', content: 'The attack-roll penalty is instead written as an Effect. That means it is resolved independently from whether the attack hits.' },
				{ type: 'paragraph', content: 'Blade Ward therefore has an offensive part that can fail and a defensive part that still functions.' }
			]
		},
		{
			id: 'what-a-miss-loses',
			title: 'What a Miss Actually Loses',
			blocks: [
				{ type: 'paragraph', content: 'If the counterattack misses, you do not receive the 2[W] plus Strength modifier Hit damage.' },
				{ type: 'paragraph', content: 'There is no separate Miss entry granting reduced damage, so the missed counterattack deals no damage from the power’s Hit line.' },
				{ type: 'paragraph', content: 'The Wisdom-based penalty remains because it is not part of the Hit line.' }
			]
		},
		{
			id: 'the-defensive-purpose-remains',
			title: 'The Defensive Purpose Remains',
			blocks: [
				{ type: 'paragraph', content: 'This structure makes Blade Ward more reliable as a defensive encounter power than it would be if every benefit depended on hitting.' },
				{ type: 'paragraph', content: 'Even a poor attack roll can still weaken the triggering enemy’s attacks against you.' },
				{ type: 'paragraph', content: 'The Effect also begins before the triggering melee attack finishes because Blade Ward is an Immediate Interrupt.' }
			]
		},
		{
			id: 'do-not-turn-effect-into-hit-effect',
			title: 'Do Not Treat the Effect as a Hit Effect',
			blocks: [
				{ type: 'paragraph', content: 'A common reading mistake is to treat everything below the attack line as though it only happens on a hit.' },
				{ type: 'paragraph', content: '4e formatting gives Hit and Effect different mechanical meanings. If the penalty were intended to depend on a successful attack, it would need to be tied to the Hit entry or otherwise state that dependency.' },
				{ type: 'paragraph', content: 'For Portal data, requiresHit should therefore remain false for the attack-roll penalty.' }
			]
		}
	]
} as const;

export default question;

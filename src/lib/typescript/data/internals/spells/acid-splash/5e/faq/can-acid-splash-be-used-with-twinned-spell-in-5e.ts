export const question = {
	slug: 'can-acid-splash-be-used-with-twinned-spell-in-5e',

	question: 'Can Acid Splash be used with Twinned Spell in D&D 5e?',

	shortAnswer:
		'No. Under the 2014 Twinned Spell rules and their official errata, Acid Splash is not eligible because the spell is capable of targeting more than one creature at its current level. This remains true even if the Sorcerer chooses only one creature for a particular casting. Twinned Spell checks what the spell is capable of targeting, not merely how many targets the caster happened to choose that time.',

	introduction:
		'Acid Splash and Twinned Spell look compatible at first glance because Acid Splash can be cast at only one creature if the caster wants. The problem is that the 2014 Twinned Spell eligibility rule is stricter than simply counting the targets chosen for a particular casting.\n\nOfficial errata clarified that an eligible spell must be incapable of targeting more than one creature at the spell’s current level. Acid Splash can naturally select two creatures without any Metamagic, so it fails that requirement.',

	sections: [
		{
			id: 'acid-splash-can-naturally-target-two-creatures',
			title: 'Acid Splash can already target two creatures',
			blocks: [
				{ type: 'paragraph', content: 'The 2014 Acid Splash spell allows one or two visible creatures to be selected. The two targets must be within 5 feet of one another, but they are still two separate creatures affected by one casting.' },
				{ type: 'paragraph', content: 'That built-in second target is enough to make the spell capable of affecting more than one creature. The fact that the second target has a positioning restriction does not make Acid Splash a single-target-only spell.' },
				{ type: 'paragraph', content: 'Twinned Spell is therefore unnecessary as a way to make Acid Splash reach a second creature, and the eligibility rule prevents the Metamagic from being layered onto the spell for an additional target.' }
			]
		},
		{
			id: 'twinned-spell-checks-capability',
			title: 'Twinned Spell checks what the spell is capable of targeting',
			blocks: [
				{ type: 'paragraph', content: 'The 2014 errata for Twinned Spell states that the spell must be incapable of targeting more than one creature at its current level. That wording focuses on the spell’s possible targets, not only the targets selected in the current casting.' },
				{ type: 'paragraph', content: 'Acid Splash fails that test because two creatures are an ordinary legal choice. Nothing has to be upcast, modified, or triggered for the spell to gain that capability.' },
				{ type: 'paragraph', content: 'This is why the answer differs from a genuinely single-target cantrip such as Ray of Frost. Ray of Frost cannot normally select a second creature, while Acid Splash can.' }
			]
		},
		{
			id: 'choosing-one-target-does-not-change-eligibility',
			title: 'Choosing only one target does not make Acid Splash eligible',
			blocks: [
				{ type: 'paragraph', content: 'A Sorcerer can cast Acid Splash at one creature when there is no suitable second target or when the caster simply prefers not to affect another creature.' },
				{ type: 'paragraph', content: 'That choice does not rewrite the spell into a single-target-only spell. It remains capable of choosing two creatures under the same spell description and at the same spell level.' },
				{ type: 'paragraph', content: 'Twinned Spell therefore cannot be enabled by voluntarily using fewer targets. Eligibility is determined by the spell’s rules, not by intentionally declining one of its available targets.' }
			]
		},
		{
			id: 'acid-splash-is-a-cantrip-but-that-is-not-the-problem',
			title: 'Being a cantrip is not what prevents Twinned Spell',
			blocks: [
				{ type: 'paragraph', content: 'Twinned Spell can work with eligible cantrips. The 2014 feature even specifies a sorcery-point cost for twinning a cantrip.' },
				{ type: 'paragraph', content: 'Acid Splash is disqualified because of its targeting capability, not because it is level 0, deals acid damage, or uses a saving throw.' },
				{ type: 'paragraph', content: 'A different cantrip that targets only one creature and satisfies the other Twinned Spell requirements can still be a valid choice.' }
			]
		},
		{
			id: 'other-metamagic-options-are-separate-questions',
			title: 'Other Metamagic options are separate questions',
			blocks: [
				{ type: 'paragraph', content: 'Failing the Twinned Spell requirements does not mean Acid Splash is incompatible with every Metamagic option. Each Metamagic feature has its own trigger and restrictions.' },
				{ type: 'paragraph', content: 'For example, a Metamagic option that modifies a saving throw, casting time, range, or components has to be evaluated under that option’s own wording rather than under the Twinned Spell restriction.' },
				{ type: 'paragraph', content: 'The important point is that Twinned Spell has a specific multi-target limitation. Acid Splash violates that limitation before any decision is made about which one or two creatures are actually chosen.' }
			]
		}
	]
} as const;

export default question;

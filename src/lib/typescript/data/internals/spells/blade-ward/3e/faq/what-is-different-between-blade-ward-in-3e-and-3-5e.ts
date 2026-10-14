export const question = {
	slug: 'what-is-different-between-blade-ward-in-3e-and-3-5e',
	question: 'What is different between Blade Ward in D&D 3e and 3.5e?',
	shortAnswer:
		'The two D&D Portal conversions intentionally have nearly identical visible effects: both are 0-level Abjurations that grant DR 1/— for 1 round. The important differences come from the editions around them. The 3e version uses a casting time of 1 action and exists in the 3.0 Damage Reduction system, where enhancement thresholds such as +1 or +2 are common bypasses. The 3.5e version uses 1 standard action and the revised 3.5 Damage Reduction rules.',
	introduction:
		'At first glance, the two Portal statblocks look almost suspiciously similar. That is intentional: DR 1/— happens to be a legal and useful expression of the Blade Ward concept in both editions.\n\nThe surrounding systems are still different enough that the pages should remain separate.',
	sections: [
		{
			id: 'casting-time-language',
			title: 'The Casting-Time Terminology Changed',
			blocks: [
				{ type: 'paragraph', content: 'The 3e conversion uses Casting Time: 1 action.' },
				{ type: 'paragraph', content: 'The 3.5e conversion uses Casting Time: 1 standard action, matching the revised action terminology.' },
				{ type: 'paragraph', content: 'The practical role is similar, but the statblocks should preserve the native language of their editions.' }
			]
		},
		{
			id: 'damage-reduction-system',
			title: 'The Damage Reduction System Was Revised',
			blocks: [
				{ type: 'paragraph', content: 'D&D 3e commonly uses enhancement thresholds such as DR 10/+1, DR 10/+2, and similar entries.' },
				{ type: 'paragraph', content: 'D&D 3.5e revised many forms of DR into categories such as magic, silver, cold iron, adamantine, alignment, or damage type.' },
				{ type: 'paragraph', content: 'Blade Ward uses DR 1/— in both editions, but the meaning of surrounding DR interactions must be read within the appropriate edition.' }
			]
		},
		{
			id: 'same-number-does-not-mean-same-ruleset',
			title: 'The Same Number Does Not Mean the Same Ruleset',
			blocks: [
				{ type: 'paragraph', content: 'The fact that both conversions say DR 1/— does not justify combining their pages or treating one as a redirect to the other.' },
				{ type: 'paragraph', content: 'Questions about other DR sources, bypass conditions, prestige classes, feats, and combat terminology can receive edition-specific answers.' },
				{ type: 'paragraph', content: 'Separate pages let D&D Portal explain those interactions without importing revised 3.5 rules backward into 3.0.' }
			]
		},
		{
			id: 'shared-design-goal',
			title: 'Both Conversions Preserve the Same Design Goal',
			blocks: [
				{ type: 'paragraph', content: 'Both versions are intended to be tiny, short-lived physical defenses suitable for a 0-level arcane spell.' },
				{ type: 'paragraph', content: 'Neither version scales with caster level, grants AC, or attempts to reproduce the 5e half-damage mechanic directly.' },
				{ type: 'paragraph', content: 'Their similarity is therefore a result of reaching the same design goal through two closely related but distinct rules systems.' }
			]
		}
	]
} as const;

export default question;

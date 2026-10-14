export const question = {
	slug: 'why-is-blade-ward-a-0-level-cantrip-in-1e',
	question: 'Why is Blade Ward a 0-level cantrip in AD&D 1e?',
	shortAnswer:
		'Because Unearthed Arcana introduced a formal 0-level cantrip system for AD&D 1e Magic-Users and Illusionists. Blade Ward is intentionally designed as a very small defensive effect: self only, 1 round, and only 1 point removed from each qualifying physical damage die. That keeps it within cantrip-scale power while preserving its later identity as minor defensive magic.',
	introduction:
		'The 1e and 2e conversions do not use the same spell level because the editions handle cantrips differently. In AD&D 1e, Unearthed Arcana provides actual level-0 cantrips. In AD&D 2e, Cantrip is instead a normal 1st-level Wizard spell in the core spell structure.\n\nFor that reason, level 0 is genuinely native to the 1e version.',
	sections: [
		{
			id: 'official-zero-level-framework',
			title: 'AD&D 1e Has an Official 0-Level Cantrip Framework',
			blocks: [
				{ type: 'paragraph', content: 'Unearthed Arcana introduced individual minor cantrips for Magic-Users and Illusionists.' },
				{ type: 'paragraph', content: 'These cantrips are treated separately from ordinary 1st-level spells and use their own preparation and casting rules.' },
				{ type: 'paragraph', content: 'Blade Ward can therefore occupy level 0 without importing a modern spell-level convention into the edition.' }
			]
		},
		{
			id: 'why-the-effect-is-small-enough',
			title: 'The Effect Is Kept Small Enough for a Cantrip',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward lasts for only 1 round and protects only the caster.' },
				{ type: 'paragraph', content: 'It reduces each qualifying physical damage die by only 1 and cannot reduce any die below 1.' },
				{ type: 'paragraph', content: 'It does not grant Armor Class, saving throw bonuses, immunity, energy resistance, or scaling with level.' }
			]
		},
		{
			id: 'why-not-level-one',
			title: 'Why It Is Not a 1st-Level Spell',
			blocks: [
				{ type: 'paragraph', content: 'A full 1st-level defensive spell in AD&D 1e can provide much more substantial protection.' },
				{ type: 'paragraph', content: 'Blade Ward is deliberately weaker and shorter-lived than that class of magic.' },
				{ type: 'paragraph', content: 'Placing it at level 0 therefore better reflects both its later identity and the actual 1e cantrip framework.' }
			]
		}
	]
} as const;

export default question;

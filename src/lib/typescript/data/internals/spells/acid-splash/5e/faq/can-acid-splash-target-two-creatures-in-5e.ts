export const question = {
	slug: 'can-acid-splash-target-two-creatures-in-5e',

	question: 'Can Acid Splash target two creatures in D&D 5e?',

	shortAnswer:
		'Yes. In D&D 5e (2014), Acid Splash can target either one creature or two creatures you can see within 60 feet. If you choose two creatures, they must be within 5 feet of each other. Each target makes its own Dexterity saving throw, so one creature can succeed while the other fails. A creature that fails takes the spell’s full current acid damage, while a successful save takes no damage.',

	introduction:
		'Acid Splash is unusual among 2014 cantrips because a single casting can directly target two separate creatures. It is not an area spell, however, and the second target is not created by a splash radius around the first target.\n\nInstead, the caster chooses one or two visible creatures when the spell is cast. The two-target option has its own positioning restriction, and each creature resolves the spell independently with its own Dexterity saving throw.',

	sections: [
		{
			id: 'acid-splash-can-have-one-or-two-targets',
			title: 'Acid Splash can have one or two targets',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The 2014 version of Acid Splash allows the caster to choose one creature or two creatures. Choosing only one target is always valid; the spell does not require a second creature to be present.'
				},
				{
					type: 'paragraph',
					content:
						'If two targets are chosen, they are both direct targets of the same casting. The second creature is not hit automatically because the first creature failed its save, and the spell does not first select a primary target and then spread outward from that creature.'
				},
				{
					type: 'paragraph',
					content:
						'This matters for rules that care about how many creatures a spell is capable of targeting. Acid Splash is inherently a spell that can target more than one creature, even if the caster happens to choose only one creature for a particular casting.'
				}
			]
		},
		{
			id: 'both-targets-must-be-valid',
			title: 'Both creatures must be valid targets',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Every chosen creature must be within the spell’s 60-foot range and must be visible to the caster. A creature that is outside the range cannot be included simply because it is standing next to the other target.'
				},
				{
					type: 'paragraph',
					content:
						'When two creatures are selected, they must also be within 5 feet of each other. That is a separate requirement from the 60-foot range: both creatures must be within range of the caster, and the distance between the two creatures must be no more than 5 feet.'
				},
				{
					type: 'paragraph',
					content:
						'If only one creature meets all of those conditions, the caster can still cast Acid Splash at that one creature. The failure to find a legal second target does not prevent the spell from being used as a single-target cantrip.'
				}
			]
		},
		{
			id: 'each-target-makes-a-separate-saving-throw',
			title: 'Each target makes a separate Dexterity saving throw',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Splash does not use one saving throw for the entire casting. Each creature targeted by the spell makes its own Dexterity saving throw against the caster’s spell save DC.'
				},
				{
					type: 'paragraph',
					content:
						'The results can therefore be different. One creature might fail and take the spell’s acid damage while the other creature succeeds and takes no damage.'
				},
				{
					type: 'paragraph',
					content:
						'The damage is not divided between the targets. At character levels 1–4, each creature that fails takes 1d6 acid damage. At later character levels, each failed save takes the full scaled amount for that casting.'
				}
			]
		},
		{
			id: 'acid-splash-is-not-an-area-of-effect',
			title: 'The two-target option is not an area of effect',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The 2014 spell does not create a sphere, cone, cube, line, or other defined area. The caster selects creatures directly, which makes Acid Splash mechanically different from a spell that affects everyone inside a space.'
				},
				{
					type: 'paragraph',
					content:
						'Because there is no area, a third creature standing beside the two chosen targets is not affected. Only the one or two creatures selected when the spell is cast make saving throws.'
				},
				{
					type: 'paragraph',
					content:
						'This distinction becomes especially important when comparing editions. The 2024 revision of Acid Splash uses a different targeting model, so its area rules should not be imported into the 2014 version.'
				}
			]
		},
		{
			id: 'can-the-same-creature-be-chosen-twice',
			title: 'Can the same creature be chosen twice?',
			blocks: [
				{
					type: 'paragraph',
					content:
						'No additional damage is gained by trying to select the same creature twice. Acid Splash gives the caster the option to choose one creature or two creatures; it does not provide a rule for applying two separate instances of the spell to one creature.'
				},
				{
					type: 'paragraph',
					content:
						'When the spell is used on one creature, that creature makes one Dexterity saving throw and takes one instance of the spell’s damage on a failed save. The two-target option exists to affect a second creature, not to double the damage against the first.'
				},
				{
					type: 'paragraph',
					content:
						'If another spell or feature allows multiple projectiles or explicitly permits repeated targeting of the same creature, that rule will normally say so. Acid Splash contains no such instruction.'
				}
			]
		}
	]
} as const;

export default question;

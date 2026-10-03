export const question = {
	slug: 'does-magic-resistance-work-against-acid-splash-in-1e',

	question: 'Does magic resistance work against Acid Splash in AD&D 1e?',

	shortAnswer:
		'Yes. The D&D Portal 1e conversion is a magical effect directed at a creature, so normal AD&D 1e magic resistance applies. Resolve the target’s magic resistance before its saving throw vs. spell. If magic resistance succeeds, Acid Splash has no effect on that creature. If the resistance fails or the creature has none, the creature then makes its normal save vs. spell to avoid the 1 point of acid damage.',

	introduction:
		'Magic resistance and saving throws are separate defenses in AD&D 1e. A creature can potentially benefit from both when a spell is subject to magic resistance and also allows a saving throw.\n\nThe Portal conversion deliberately keeps that structure instead of importing the later-edition Spell Resistance mechanic or ignoring resistant monsters because Acid Splash is only a cantrip.',

	sections: [
		{
			id: 'magic-resistance-applies-to-the-cantrip',
			title: 'Normal magic resistance applies to Acid Splash',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Splash is magical creature-affecting cantrip magic. A creature with magic resistance can therefore use that defense against the Portal conversion.'
				},
				{
					type: 'paragraph',
					content:
						'The fact that Acid Splash deals only 1 point of damage does not cause the spell to bypass magic resistance. The defense is concerned with whether the magic affects the creature, not whether the spell is powerful enough to deal a large amount of damage.'
				},
				{
					type: 'paragraph',
					content:
						'A creature without magic resistance skips this step and proceeds directly to the saving throw vs. spell.'
				}
			]
		},
		{
			id: 'resolve-magic-resistance-first',
			title: 'Resolve magic resistance before the saving throw',
			blocks: [
				{
					type: 'paragraph',
					content:
						'When the target has magic resistance, resolve that percentage-based defense first. A successful magic-resistance result means the spell fails against the creature.'
				},
				{
					type: 'paragraph',
					content:
						'If resistance stops the spell, the target does not then need a saving throw to avoid Acid Splash. There is no damage result left to resolve because the magic never successfully affects the creature.'
				},
				{
					type: 'paragraph',
					content:
						'If the resistance check does not stop the spell, the normal Acid Splash saving throw is still made. Failing to resist magic does not automatically mean the creature takes damage.'
				}
			]
		},
		{
			id: 'saving-throw-is-a-second-defense',
			title: 'The saving throw remains a second defense',
			blocks: [
				{
					type: 'paragraph',
					content:
						'After magic resistance has been passed, the target makes its saving throw vs. spell. A successful save negates the cantrip\'s 1 point of acid damage.'
				},
				{
					type: 'paragraph',
					content:
						'The creature therefore has two opportunities to avoid the effect when both defenses are available: first resistance to the magic itself, then the saving throw granted by the spell.'
				},
				{
					type: 'paragraph',
					content:
						'This is intentionally different from treating magic resistance as a replacement saving throw. The two mechanics have distinct roles in the 1e rules structure.'
				}
			]
		},
		{
			id: 'this-is-not-3e-spell-resistance',
			title: 'Do not resolve it as 3e Spell Resistance',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Players familiar with 3e may recognize the general idea but should not import the later caster-level-check system. AD&D 1e magic resistance uses its own rules and percentage values.'
				},
				{
					type: 'paragraph',
					content:
						'The Portal page should therefore display “Magic Resistance: Applies” rather than “Spell Resistance: Yes.” The latter belongs to a different edition\'s terminology and resolution procedure.'
				},
				{
					type: 'paragraph',
					content:
						'Keeping the terminology edition-native helps prevent the conversion from looking like a 3e spell whose field names were merely relabelled.'
				}
			]
		}
	]
} as const;

export default question;

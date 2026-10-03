export const question = {
	slug: 'how-do-you-prepare-and-cast-acid-splash-in-1e',

	question: 'How do you prepare and cast Acid Splash in AD&D 1e?',

	shortAnswer:
		'Acid Splash follows the Unearthed Arcana Magic-User cantrip framework used by this Portal conversion. It must be known and memorized rather than being available at will. Apprentice Magic-Users have a limited daily cantrip allowance, while a 1st-level or higher Magic-User who retains cantrip magic can use up to four cantrips in place of one 1st-level spell. Casting Acid Splash then takes 1/2 segment, uses verbal and somatic components, and expends that memorized cantrip.',

	introduction:
		'The biggest rules trap with the 1e version is assuming that “cantrip” means unlimited casting. Unearthed Arcana uses a prepared-resource model instead.\n\nThe D&D Portal conversion follows that structure so Acid Splash behaves like 1e apprentice magic rather than like a modern at-will attack.',

	sections: [
		{
			id: 'acid-splash-must-be-known-and-memorized',
			title: 'Acid Splash must be known and memorized',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Splash is treated as a Magic-User cantrip within the Portal rules profile. It belongs to the caster\'s cantrip knowledge and is memorized before use rather than being generated spontaneously whenever desired.'
				},
				{
					type: 'paragraph',
					content:
						'Apprentice Magic-Users have a limited number of cantrips they can use each day. Their progression through the neophyte, initiate, and apprentice stages increases that daily allowance before the character becomes a normal 1st-level Magic-User.'
				},
				{
					type: 'paragraph',
					content:
						'The conversion does not add a special exception for Acid Splash. If the character has not memorized the cantrip or has already expended it, the spell is not available until the campaign\'s normal recovery and memorization procedure allows it again.'
				}
			]
		},
		{
			id: 'retaining-cantrips-after-first-level',
			title: 'A Magic-User can retain cantrips after apprenticeship',
			blocks: [
				{
					type: 'paragraph',
					content:
						'When a Magic-User advances into ordinary 1st-level spellcasting, cantrip knowledge is normally set aside for more powerful magic. Unearthed Arcana provides an option to retain cantrips instead.'
				},
				{
					type: 'paragraph',
					content:
						'Under that option, the Magic-User keeps the cantrip spellbook and can memorize as many as four cantrips in place of one 1st-level spell. Acid Splash can be one of those retained cantrips in a campaign that approves the Portal conversion.'
				},
				{
					type: 'paragraph',
					content:
						'Four Acid Splash preparations would therefore represent four separate castings, not four uses of one persistent spell. Each casting is expended individually.'
				}
			]
		},
		{
			id: 'casting-time-and-components',
			title: 'Casting Acid Splash takes only part of a segment',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The Portal conversion assigns Acid Splash a casting time of one-half segment, which falls within the very short casting times used by the Unearthed Arcana cantrip framework.'
				},
				{
					type: 'paragraph',
					content:
						'The cantrip uses verbal and somatic components but no material component. The magical effect is therefore produced through the caster\'s brief words and gestures rather than a consumed or reusable physical ingredient.'
				},
				{
					type: 'paragraph',
					content:
						'Its short casting time does not mean the cantrip ignores the normal timing of the round. Initiative, surprise, and other circumstances that matter to spell timing continue to apply.'
				}
			]
		},
		{
			id: 'what-happens-when-it-is-cast',
			title: 'What happens when Acid Splash is cast',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The caster selects one creature within the cantrip\'s 1-inch range. If that creature has magic resistance, resolve the resistance first.'
				},
				{
					type: 'paragraph',
					content:
						'If magic resistance does not stop the effect, the creature makes a saving throw vs. spell. A failed save causes 1 point of acid damage, and a successful save negates that damage.'
				},
				{
					type: 'paragraph',
					content:
						'The effect is instantaneous. Once the spell has been resolved, the memorized cantrip is expended and there is no continuing acid effect to track in later segments or rounds.'
				}
			]
		}
	]
} as const;

export default question;

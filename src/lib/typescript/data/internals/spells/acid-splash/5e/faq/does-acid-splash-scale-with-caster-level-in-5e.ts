export const question = {
	slug: 'does-acid-splash-scale-with-caster-level-in-5e',

	question: 'Does Acid Splash scale with caster level in D&D 5e?',

	shortAnswer:
		'No. Acid Splash does not use a separate caster-level calculation in D&D 5e (2014). Its damage increases according to the character’s total level: 1d6 at levels 1–4, 2d6 at level 5, 3d6 at level 11, and 4d6 at level 17. This means multiclass levels still count toward the damage increase. A Sorcerer 1 / Fighter 4, for example, is a 5th-level character and therefore deals 2d6 Acid Splash damage on a failed save.',

	introduction:
		'Players coming from 3e or 3.5e often use the phrase caster level, and multiclass characters can make 5e spell progression look similar at first glance. Cantrip damage progression follows a simpler rule.\n\nAcid Splash lists level thresholds directly, and the 2014 multiclass spellcasting rules clarify that a cantrip that improves at higher levels uses total character level rather than the level of the class that granted the cantrip.',

	sections: [
		{
			id: 'acid-splash-uses-character-level',
			title: 'Acid Splash uses total character level',
			blocks: [
				{ type: 'paragraph', content: 'Acid Splash begins at 1d6 acid damage. Its damage increases to 2d6 when the character reaches level 5, 3d6 at level 11, and 4d6 at level 17.' },
				{ type: 'paragraph', content: 'Those thresholds refer to the character’s overall level. They do not require the character to reach level 5 as a Sorcerer or level 5 as a Wizard specifically.' },
				{ type: 'paragraph', content: 'As a result, levels in non-spellcasting classes can still move a character across an Acid Splash damage threshold. The character’s total adventuring level is what matters for this cantrip progression.' }
			]
		},
		{
			id: 'multiclass-levels-count',
			title: 'Multiclass levels still count toward the damage increase',
			blocks: [
				{ type: 'paragraph', content: 'Consider a character with Sorcerer 1 and Fighter 4. Only one of those levels is a Sorcerer level, but the character has five total character levels.' },
				{ type: 'paragraph', content: 'That character’s Acid Splash therefore deals 2d6 acid damage on a failed save. The four Fighter levels are relevant to the cantrip’s level threshold even though Fighter did not grant the spell.' },
				{ type: 'paragraph', content: 'The same principle applies to other multiclass combinations. Once the character reaches total levels 11 and 17, Acid Splash advances to 3d6 and 4d6 respectively.' }
			]
		},
		{
			id: 'caster-level-is-not-the-5e-mechanic',
			title: 'Caster level is not the mechanic being used here',
			blocks: [
				{ type: 'paragraph', content: 'Older editions used caster level as a dedicated value for many spell variables. Range, duration, damage, and interactions such as spell resistance could depend on it.' },
				{ type: 'paragraph', content: 'The 2014 Acid Splash spell does not ask for a caster-level value. Its range remains 60 feet, its duration remains instantaneous, and its damage increases only at the listed character-level thresholds.' },
				{ type: 'paragraph', content: 'Using the phrase caster level for Acid Splash in 5e can therefore create unnecessary confusion, especially for multiclass characters. Character level is the clearer and rules-accurate term for its damage progression.' }
			]
		},
		{
			id: 'spellcaster-levels-and-spell-slots-are-separate',
			title: 'Multiclass spell-slot progression is a separate rule',
			blocks: [
				{ type: 'paragraph', content: 'Multiclass spellcasters also calculate spell slots using a separate multiclass progression. That calculation can combine some or all levels from different spellcasting classes.' },
				{ type: 'paragraph', content: 'That slot calculation does not control Acid Splash damage. Acid Splash is a cantrip and does not consume a spell slot, so having higher-level spell slots does not increase its damage.' },
				{ type: 'paragraph', content: 'A character can therefore have unusual spell-slot progression while Acid Splash still follows the simple total-character-level thresholds of 5, 11, and 17.' }
			]
		},
		{
			id: 'scaling-damage-does-not-change-other-spell-statistics',
			title: 'The damage increase does not change the rest of the spell',
			blocks: [
				{ type: 'paragraph', content: 'Reaching a damage threshold changes the number of d6s rolled when a target fails its save. It does not increase Acid Splash’s 60-foot range or allow additional creatures to be selected.' },
				{ type: 'paragraph', content: 'The spell still targets at most two visible creatures, and the two creatures must still be within 5 feet of one another. Each target still makes its own Dexterity saving throw.' },
				{ type: 'paragraph', content: 'The caster’s spell save DC is also a separate calculation based on the spellcasting ability and proficiency bonus associated with the source of the spell. The cantrip’s damage progression should not be confused with that save DC.' }
			]
		}
	]
} as const;

export default question;

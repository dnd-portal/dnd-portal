export const question = {
	slug: 'did-acid-splash-exist-in-adnd-1e',

	question: 'Did Acid Splash exist in AD&D 1st Edition?',

	shortAnswer:
		'No. Acid Splash was not published as an official AD&D 1st Edition spell. The D&D Portal 1e version is a homebrew conversion built around the 0-level Magic-User cantrip system introduced in Unearthed Arcana. It is intended to answer how the later Acid Splash concept could function using native 1e spell structure without implying that the spell historically appeared in a 1e rulebook.',

	introduction:
		'Acid Splash is familiar from later editions, so seeing a 1e entry can easily create the impression that the spell has always existed. It did not. The D&D Portal page fills a gap in the edition history with a clearly labelled conversion.\n\nThe conversion uses real AD&D 1e concepts such as Magic-User cantrips, game-scale range, saving throws vs. spell, segments, and magic resistance, but the combined Acid Splash spell is original D&D Portal content.',

	sections: [
		{
			id: 'there-was-no-official-acid-splash-spell',
			title: 'There was no official 1e Acid Splash spell',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Splash does not appear as an official AD&D 1st Edition spell under that name. The spell concept became a distinct published spell later, with the 3e version serving as the basis for the Portal conversion lineage.'
				},
				{
					type: 'paragraph',
					content:
						'D&D Portal therefore does not assign an official 1e book as the source of this spell. The page source is D&D Portal Conversion, and the edition selector should display the conversion status directly.'
				},
				{
					type: 'paragraph',
					content:
						'That distinction matters for historical reference. A reader looking for original 1e material should not mistake the Portal mechanics for text or rules printed in an official TSR-era spell list.'
				}
			]
		},
		{
			id: 'first-edition-still-had-cantrips',
			title: 'AD&D 1e did have a 0-level cantrip system',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Although Acid Splash itself did not exist, Unearthed Arcana introduced genuine 0-level cantrips for apprentice Magic-Users and Illusionists. These minor spells were memorized and used as part of apprenticeship before ordinary 1st-level spellcasting.'
				},
				{
					type: 'paragraph',
					content:
						'The cantrip system gives the conversion a native place to live. Instead of turning Acid Splash into a normal 1st-level combat spell, D&D Portal models it as extremely minor apprentice magic with correspondingly small damage.'
				},
				{
					type: 'paragraph',
					content:
						'This is also why the 1e and 2e Portal conversions are different. The editions handle minor magic differently, so D&D Portal does not force the same level or spell structure onto both versions.'
				}
			]
		},
		{
			id: 'the-conversion-is-designed-for-unearthed-arcana-cantrips',
			title: 'The conversion assumes Unearthed Arcana cantrips',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The Portal version is specifically designed for an AD&D 1e rules profile that uses the Unearthed Arcana cantrip system. It is not intended to imply that every 1e campaign automatically includes those optional or supplemental rules.'
				},
				{
					type: 'paragraph',
					content:
						'A campaign that does not use those cantrips would need to adopt the cantrip framework, convert Acid Splash differently, or simply omit the spell. The Portal page should make that rules-profile dependency visible.'
				},
				{
					type: 'paragraph',
					content:
						'This allows D&D Portal to remain both playable and historically clear: the mechanical vocabulary is 1e-native, while the page still admits that the specific spell is homebrew.'
				}
			]
		},
		{
			id: 'official-acid-magic-provides-design-context',
			title: 'Official 1e acid magic provides design context',
			blocks: [
				{
					type: 'paragraph',
					content:
						'AD&D 1e does contain official acid-themed magic, including Melf\'s Acid Arrow as a higher-level Magic-User spell. Such spells show that magical acid projectiles fit the edition even though Acid Splash itself was absent.'
				},
				{
					type: 'paragraph',
					content:
						'D&D Portal uses those spells only as design context. Their damage, attack procedures, components, and other special rules are not copied onto the cantrip.'
				},
				{
					type: 'paragraph',
					content:
						'The resulting Acid Splash is intentionally much weaker because it occupies the 0-level cantrip space rather than the normal leveled-spell progression.'
				}
			]
		}
	]
} as const;

export default question;

export const question = {
	slug: 'did-blade-ward-exist-in-adnd-2e',
	question: 'Did Blade Ward exist in AD&D 2e?',
	shortAnswer:
		'No official AD&D 2e spell named Blade Ward was identified in the spell material used for this conversion. The D&D Portal 2e version is therefore a Portal Conversion rather than official published content. It preserves the later spell’s identity as a brief physical defense but rebuilds the mechanics using AD&D 2e spell structure and damage-reduction conventions.',
	introduction:
		'Blade Ward is familiar from later D&D editions, but that name does not belong to the standard AD&D 2e Wizard spell repertoire. D&D Portal therefore treats the 2e page as a conversion rather than silently placing a later spell into an older rules set.\n\nThe conversion is designed to look and play like a native AD&D 2e Wizard spell while keeping its nonofficial status explicit.',
	sections: [
		{
			id: 'portal-conversion',
			title: 'Blade Ward Is a Portal Conversion',
			blocks: [
				{ type: 'paragraph', content: 'The 2e Blade Ward page should be marked as D&D Portal Conversion rather than as a spell from the Player’s Handbook or another TSR source.' },
				{ type: 'paragraph', content: 'That status tells readers that the spell has been newly adapted for the edition.' },
				{ type: 'paragraph', content: 'It does not mean the mechanics are edition-agnostic; the conversion deliberately uses 2e terminology, spell levels, casting time, range, and defensive conventions.' }
			]
		},
		{
			id: 'conceptual-source',
			title: 'The Concept Comes from Later Blade Ward',
			blocks: [
				{ type: 'paragraph', content: 'The conversion starts from the later Blade Ward concept: briefly protecting the caster against physical attacks.' },
				{ type: 'paragraph', content: 'It does not import the 4e Ranger power or copy the 5e resistance mechanic directly.' },
				{ type: 'paragraph', content: 'The goal is to preserve the fantasy of the spell rather than its later rules vocabulary.' }
			]
		},
		{
			id: 'native-2e-presentation',
			title: 'The Spell Uses Native AD&D 2e Presentation',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward is presented as a 1st-level Wizard Abjuration with Range 0, Casting Time 1, Area of Effect: The caster, and Saving Throw: None.' },
				{ type: 'paragraph', content: 'Those fields are native to AD&D 2e spell entries and replace later concepts such as Self range, standard actions, and concentration.' },
				{ type: 'paragraph', content: 'The actual defensive effect is likewise expressed through per-die physical damage reduction rather than 5e-style resistance.' }
			]
		}
	]
} as const;

export default question;

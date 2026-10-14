export const question = {
	slug: 'why-is-blade-ward-a-1st-level-spell-in-2e',
	question: 'Why is Blade Ward a 1st-level spell in AD&D 2e?',
	shortAnswer:
		'Because core AD&D 2e does not use the later general model of combat-capable 0-level cantrips. Cantrip itself is a 1st-level Wizard spell used for minor magical effects. Blade Ward provides a real combat defense, so D&D Portal places it at 1st level and keeps the effect short and modest enough to fit that tier.',
	introduction:
		'Modern D&D players may expect Blade Ward to be a cantrip because that is how the spell appears in 5e and 5.5e. AD&D 2e organizes low-level magic differently.\n\nA native conversion should respect that structure rather than inventing a later-edition cantrip tier where the core 2e Wizard spell system does not use one in the same way.',
	sections: [
		{
			id: 'cantrip-is-a-spell',
			title: 'Cantrip Is Itself a 1st-Level Spell',
			blocks: [
				{ type: 'paragraph', content: 'In AD&D 2e, Cantrip is a named 1st-level Wizard spell that produces minor magical effects.' },
				{ type: 'paragraph', content: 'That is fundamentally different from later editions where cantrip is a general spell level containing many separate at-will combat and utility spells.' },
				{ type: 'paragraph', content: 'Blade Ward should therefore not automatically remain level 0 simply because its later incarnation is called a cantrip.' }
			]
		},
		{
			id: 'combat-effect',
			title: 'Blade Ward Has a Real Combat Effect',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward reduces damage from successful attacks and can affect several attacks during its short duration.' },
				{ type: 'paragraph', content: 'That is more mechanically significant than the minor magical tricks associated with the Cantrip spell.' },
				{ type: 'paragraph', content: 'Treating Blade Ward as a normal 1st-level Wizard spell therefore better matches its actual battlefield function.' }
			]
		},
		{
			id: 'why-it-is-not-higher-level',
			title: 'Why It Is Not a Higher-Level Spell',
			blocks: [
				{ type: 'paragraph', content: 'The spell protects only the caster and lasts only 1 round.' },
				{ type: 'paragraph', content: 'It reduces each qualifying damage die by only 1 and can never reduce a die below 1.' },
				{ type: 'paragraph', content: 'That leaves substantial room above Blade Ward for stronger protection spells that grant immunity, longer duration, broader coverage, or complete negation of attacks.' }
			]
		}
	]
} as const;

export default question;

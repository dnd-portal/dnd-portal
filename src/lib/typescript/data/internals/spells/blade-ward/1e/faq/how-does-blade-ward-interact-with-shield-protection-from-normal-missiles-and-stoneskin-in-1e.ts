export const question = {
	slug: 'how-does-blade-ward-interact-with-shield-protection-from-normal-missiles-and-stoneskin-in-1e',
	question: 'How does Blade Ward interact with Shield, Protection from Normal Missiles, and Stoneskin in AD&D 1e?',
	shortAnswer:
		'Blade Ward can work alongside defenses that use different mechanics, such as Shield’s Armor Class protection. It does not stack with itself. If another magical effect completely negates the attack or its damage, Blade Ward has nothing left to reduce. If another magical effect directly reduces the same physical damage dice, the D&D Portal conversion rule is to use the greater reduction rather than adding both reductions together.',
	introduction:
		'AD&D 1e defensive magic uses several very different mechanisms: changing Armor Class, negating particular attacks, absorbing damage, or blocking entire attack sequences. Blade Ward should interact with those effects without creating a modern universal stacking engine that the edition never had.\n\nFor that reason, the conversion uses a simple hierarchy: different defensive mechanics can coexist, but overlapping direct damage reductions do not add together.',
	sections: [
		{
			id: 'shield',
			title: 'Shield and Blade Ward Can Both Matter',
			blocks: [
				{ type: 'paragraph', content: 'Shield primarily changes how likely certain attacks are to hit the caster and offers specialized protection against particular magical attacks.' },
				{ type: 'paragraph', content: 'Blade Ward only modifies physical damage after a qualifying attack has successfully hit.' },
				{ type: 'paragraph', content: 'Because the effects operate at different stages, a caster can benefit from Shield and Blade Ward at the same time.' }
			]
		},
		{
			id: 'protection-from-normal-missiles',
			title: 'Protection from Normal Missiles Can Make Blade Ward Irrelevant',
			blocks: [
				{ type: 'paragraph', content: 'If Protection from Normal Missiles completely prevents a normal missile from dealing damage, Blade Ward has no remaining damage dice to reduce.' },
				{ type: 'paragraph', content: 'If another protection effect instead reduces physical missile damage without negating it completely, use the greater applicable direct reduction rather than adding both per-die reductions together.' },
				{ type: 'paragraph', content: 'That non-additive rule is a D&D Portal conversion ruling intended to keep Blade Ward from multiplying stronger protection magic.' }
			]
		},
		{
			id: 'stoneskin',
			title: 'Stoneskin Resolves Before Blade Ward Matters',
			blocks: [
				{ type: 'paragraph', content: 'Stoneskin can completely absorb qualifying physical attacks rather than merely reducing their damage dice.' },
				{ type: 'paragraph', content: 'When Stoneskin negates the attack, there is no physical damage left for Blade Ward to modify.' },
				{ type: 'paragraph', content: 'Blade Ward remains active for the rest of its 1-round duration and can still affect later attacks that are not completely negated.' }
			]
		},
		{
			id: 'self-stacking',
			title: 'Blade Ward Does Not Stack with Itself',
			blocks: [
				{ type: 'paragraph', content: 'Two simultaneous Blade Ward effects do not reduce every qualifying damage die by 2.' },
				{ type: 'paragraph', content: 'Overlapping instances provide the same ward rather than adding multiple copies of the reduction.' },
				{ type: 'paragraph', content: 'This prevents unusual multi-caster or stored-spell interactions from turning a minor cantrip into heavy damage absorption.' }
			]
		},
		{
			id: 'different-defenses',
			title: 'Different Defensive Mechanics Can Coexist',
			blocks: [
				{ type: 'paragraph', content: 'Armor Class effects, attack penalties, attack negation, and direct damage reduction are different kinds of protection.' },
				{ type: 'paragraph', content: 'Blade Ward is only restricted from stacking additively with another effect that directly reduces the same physical damage.' },
				{ type: 'paragraph', content: 'This preserves useful combinations without allowing several similar damage reducers to compound excessively.' }
			]
		}
	]
} as const;

export default question;

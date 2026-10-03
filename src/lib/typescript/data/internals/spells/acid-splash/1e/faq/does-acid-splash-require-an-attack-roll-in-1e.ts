export const question = {
	slug: 'does-acid-splash-require-an-attack-roll-in-1e',

	question: 'Does Acid Splash require an attack roll in AD&D 1e?',

	shortAnswer:
		'No. The D&D Portal 1e conversion does not use an attack roll. The caster selects one creature within the 1-inch range; after any applicable magic resistance is resolved, the target makes a saving throw vs. spell. A failed save causes 1 point of acid damage and a successful save negates it. Armor Class, weapon attack matrices, and normal missile attack modifiers therefore do not determine whether the cantrip deals damage.',

	introduction:
		'Later versions of Acid Splash sometimes use attack-roll mechanics, while other editions use saving throws. The Portal conversion deliberately chooses the saving-throw approach because it fits the minor person-affecting cantrip framework cleanly and avoids turning the cantrip into a weapon-like missile attack.\n\nThat means the target\'s defenses are resolved through magic resistance and a save vs. spell rather than through Armor Class.',

	sections: [
		{
			id: 'the-caster-does-not-roll-to-hit',
			title: 'The caster does not roll to hit',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Casting Acid Splash does not call for a weapon attack, missile attack, or separate spell attack roll. The caster only needs a legal creature within the spell\'s range.'
				},
				{
					type: 'paragraph',
					content:
						'There is therefore no attack result to compare against the target\'s Armor Class. A heavily armored creature and an unarmored creature can have very different AC values without those values directly changing Acid Splash\'s resolution.'
				},
				{
					type: 'paragraph',
					content:
						'The cantrip should not be treated as Melf\'s Acid Arrow with smaller damage. That higher-level acid spell has its own projectile procedure, while Acid Splash uses a simpler save-based mechanic.'
				}
			]
		},
		{
			id: 'the-target-saves-vs-spell',
			title: 'The target makes a saving throw vs. spell',
			blocks: [
				{
					type: 'paragraph',
					content:
						'If magic resistance does not stop Acid Splash, the targeted creature makes a saving throw vs. spell. That roll determines whether the minor burst of acid causes hit-point damage.'
				},
				{
					type: 'paragraph',
					content:
						'A successful save negates the damage completely. A failed save causes exactly 1 point of acid damage.'
				},
				{
					type: 'paragraph',
					content:
						'There is no half-damage outcome. The cantrip is intentionally binary because its total damage is already extremely small.'
				}
			]
		},
		{
			id: 'armor-class-does-not-resolve-the-spell',
			title: 'Armor Class does not resolve Acid Splash',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Because Acid Splash does not make an attack roll, descending Armor Class does not determine whether the spell succeeds. The cantrip bypasses the ordinary weapon-versus-AC resolution step entirely.'
				},
				{
					type: 'paragraph',
					content:
						'Likewise, adjustments that modify normal missile attacks do not automatically modify Acid Splash. The spell is resolved as magic, not as a thrown flask, dart, arrow, or other projectile weapon.'
				},
				{
					type: 'paragraph',
					content:
						'A specific rule that alters saving throws, blocks magic, grants immunity, or provides magic resistance can still matter because those mechanics interact with the actual resolution used by the cantrip.'
				}
			]
		},
		{
			id: 'why-the-conversion-uses-a-save',
			title: 'Why the Portal conversion uses a saving throw',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The save-based design keeps the spell simple enough for 0-level apprentice magic. It avoids adding a projectile attack procedure, scatter rules, or a second resolution step to a cantrip that deals only 1 point of damage.'
				},
				{
					type: 'paragraph',
					content:
						'Official person-affecting cantrips provide precedent for living targets receiving saves vs. spell. D&D Portal follows that general design language while adding the original 1-point damage mechanic.'
				},
				{
					type: 'paragraph',
					content:
						'The saving throw is therefore part of the homebrew conversion design. It should not be cited as evidence that an official 1e Acid Splash spell used the same procedure.'
				}
			]
		}
	]
} as const;

export default question;

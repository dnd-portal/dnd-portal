export const question = {
	slug: 'does-blade-ward-reduce-spell-or-energy-damage-in-3-5e',
	question: 'Does Blade Ward reduce spell or energy damage in D&D 3.5e?',
	shortAnswer:
		'Normally, no. Blade Ward uses 3.5e damage reduction, and the general damage reduction rules do not reduce energy attacks, spells, spell-like abilities, supernatural abilities, or touch attacks. Energy damage added to a weapon attack is also unaffected. A specific effect can override the general rule if it explicitly says that damage reduction applies to its damage.',
	introduction:
		'DR 1/— is broad against weapons because no weapon bypass defeats it, but it is not universal damage reduction. The normal 3.5e DR rules sharply distinguish physical weapon damage from spell and energy damage.\n\nThat distinction prevents the conversion from functioning like all-purpose damage resistance.',
	sections: [
		{
			id: 'spells-ignore-dr',
			title: 'Spells Normally Ignore Damage Reduction',
			blocks: [
				{ type: 'paragraph', content: 'The general 3.5e rules state that spells ignore damage reduction.' },
				{ type: 'paragraph', content: 'A damaging spell therefore does not lose 1 point of damage simply because Blade Ward is active.' },
				{ type: 'paragraph', content: 'This remains true even if the spell’s damage is described physically unless the spell specifically says that damage reduction applies.' }
			]
		},
		{
			id: 'energy-damage-is-not-reduced',
			title: 'Energy Damage Is Not Reduced',
			blocks: [
				{ type: 'paragraph', content: 'Acid, cold, electricity, fire, and sonic damage use energy defenses rather than ordinary damage reduction.' },
				{ type: 'paragraph', content: 'If a flaming weapon deals physical weapon damage plus fire damage, Blade Ward affects only the qualifying physical portion.' },
				{ type: 'paragraph', content: 'The fire damage is resolved in full unless the target has a separate form of fire resistance or another applicable defense.' }
			]
		},
		{
			id: 'touch-attacks',
			title: 'Touch Attacks Are Not Negated by DR',
			blocks: [
				{ type: 'paragraph', content: 'The damage reduction rules also state that DR does not negate touch attacks.' },
				{ type: 'paragraph', content: 'Blade Ward therefore does not become a defense against every melee touch spell or ranged touch spell merely because an attack roll is involved.' },
				{ type: 'paragraph', content: 'The 3.5e conversion protects against the kinds of physical attacks that DR normally protects against, not all attack rolls.' }
			]
		},
		{
			id: 'specific-over-general',
			title: 'Specific Rules Can Override the General Rule',
			blocks: [
				{ type: 'paragraph', content: 'Some 3.5e spell effects explicitly instruct players to apply damage reduction to their damage.' },
				{ type: 'paragraph', content: 'When that happens, the specific spell text overrides the ordinary rule that spell damage ignores DR.' },
				{ type: 'paragraph', content: 'Blade Ward does not need to repeat those exceptions; it simply uses the normal DR system and lets specific effects modify that system when appropriate.' }
			]
		}
	]
} as const;

export default question;

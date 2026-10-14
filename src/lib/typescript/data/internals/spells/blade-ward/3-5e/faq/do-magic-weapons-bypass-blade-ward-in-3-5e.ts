export const question = {
	slug: 'do-magic-weapons-bypass-blade-ward-in-3-5e',
	question: 'Do magic weapons bypass Blade Ward in D&D 3.5e?',
	shortAnswer:
		'No. The Portal Conversion grants damage reduction 1/—. In 3.5e, the dash means no weapon type is listed as a bypass, so merely being magical does not ignore this damage reduction. A magic sword, mundane sword, natural weapon, or other qualifying physical attack is reduced by 1 unless a more specific rule says that the attack ignores damage reduction entirely.',
	introduction:
		'Many 3.5e damage reduction entries use a bypass such as magic, silver, cold iron, adamantine, an alignment, or a weapon damage type. Blade Ward intentionally does not use one of those bypasses.\n\nThis is represented by the dash in DR 1/—.',
	sections: [
		{
			id: 'what-the-dash-means',
			title: 'What DR 1/— Means',
			blocks: [
				{ type: 'paragraph', content: 'The number before the slash is the amount of qualifying damage ignored. Blade Ward therefore removes 1 point from a qualifying attack.' },
				{ type: 'paragraph', content: 'The information after the slash normally identifies the kind of weapon that overcomes the damage reduction.' },
				{ type: 'paragraph', content: 'A dash indicates that no weapon category is the listed bypass.' }
			]
		},
		{
			id: 'magic-weapons-still-qualify',
			title: 'Magic Weapons Still Have Their Damage Reduced',
			blocks: [
				{ type: 'paragraph', content: 'A +1 enhancement bonus lets a weapon overcome DR that specifically requires a magic weapon.' },
				{ type: 'paragraph', content: 'Blade Ward does not have DR 1/magic, so that rule is irrelevant to this particular ward.' },
				{ type: 'paragraph', content: 'The magical weapon’s normal physical damage is still reduced by 1 under the general damage reduction rules.' }
			]
		},
		{
			id: 'energy-damage-is-separate',
			title: 'Magical Energy Damage Is Separate',
			blocks: [
				{ type: 'paragraph', content: 'A magic weapon can also deal energy damage, such as extra fire damage from a flaming weapon.' },
				{ type: 'paragraph', content: 'Damage reduction does not normally reduce energy damage dealt along with an attack.' },
				{ type: 'paragraph', content: 'Blade Ward might reduce the sword’s physical slashing damage by 1 while leaving the added fire damage unchanged.' }
			]
		},
		{
			id: 'specific-rules-can-ignore-dr',
			title: 'Specific Rules Can Still Ignore Damage Reduction',
			blocks: [
				{ type: 'paragraph', content: 'DR 1/— does not make the caster immune to every physical-looking effect in the game.' },
				{ type: 'paragraph', content: 'Spells, spell-like abilities, supernatural abilities, energy attacks, and effects that specifically ignore damage reduction follow their own rules.' },
				{ type: 'paragraph', content: 'The dash only means that no normal weapon bypass listed after the slash defeats the DR.' }
			]
		}
	]
} as const;

export default question;

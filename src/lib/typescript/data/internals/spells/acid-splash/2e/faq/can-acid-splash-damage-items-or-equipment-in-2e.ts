export const question = {
	slug: 'can-acid-splash-damage-items-or-equipment-in-2e',
	question: 'Can Acid Splash damage items or equipment in AD&D 2e?',
	shortAnswer:
		'Not automatically in the D&D Portal 2e conversion. A creature damaged by Acid Splash does not normally force saving throws for its armor, weapons, scrolls, clothing, or other carried equipment. The conversion intentionally avoids that extra consequence because the spell is a small 1st-level attack. A DM can still adjudicate a special interaction with an unattended or particularly vulnerable object, but that is not part of the spell’s default effect.',
	introduction:
		'Acid is one of the damage types most likely to raise questions about equipment in AD&D. Some official acid effects and physical acid rules can interact with items, so it would be easy to assume that every Acid Splash casting should threaten a character\'s gear as well as hit points.\n\nD&D Portal deliberately does not give this minor conversion that automatic equipment-destruction layer.',
	sections: [
		{
			id: 'carried-equipment-is-not-automatically-affected',
			title: 'Carried equipment is not automatically affected',
			blocks: [
				{ type: 'paragraph', content: 'When a creature fails its save against the primary effect, that creature takes 1d4 acid damage. The spell does not instruct the player or DM to make additional saving throws for every item the creature carries.' },
				{ type: 'paragraph', content: 'The same is true for the 1-point secondary splash. Taking splash damage does not automatically expose armor, weapons, packs, scrolls, or other gear to separate destruction checks.' },
				{ type: 'paragraph', content: 'This keeps the spell\'s actual consequence proportional to its low damage and 1st-level slot cost.' }
			]
		},
		{
			id: 'other-acid-effects-can-have-different-rules',
			title: 'Other acid effects can use different item rules',
			blocks: [
				{ type: 'paragraph', content: 'AD&D 2e contains stronger acid spells, monsters, hazards, and physical acid rules that can be more destructive to equipment than this Portal conversion.' },
				{ type: 'paragraph', content: 'Those rules do not automatically transfer to Acid Splash. A separate spell or hazard can explicitly call for item saving throws without establishing a universal rule for every acid effect.' },
				{ type: 'paragraph', content: 'D&D Portal therefore treats equipment damage as effect-specific rather than assuming it from the word acid alone.' }
			]
		},
		{
			id: 'unattended-objects-are-a-dm-ruling',
			title: 'Unattended objects are a DM adjudication',
			blocks: [
				{ type: 'paragraph', content: 'The base conversion selects a creature as its primary target, so an unattended object is not part of the normal target procedure.' },
				{ type: 'paragraph', content: 'A DM may still decide that magical acid can interact with a fragile rope, parchment, exposed organic material, or another especially vulnerable object in a particular scene.' },
				{ type: 'paragraph', content: 'That ruling should be treated as situational adjudication. It does not turn Acid Splash into a general-purpose lock-dissolving or equipment-destruction spell.' }
			]
		},
		{
			id: 'why-the-conversion-is-conservative',
			title: 'Why the conversion is conservative about item damage',
			blocks: [
				{ type: 'paragraph', content: 'Equipment destruction can be much more consequential than losing a few hit points, especially in an edition where scrolls, spellbooks, armor, and carried supplies can represent major character resources.' },
				{ type: 'paragraph', content: 'Giving those consequences to a 1st-level spell that can also produce splash damage would make Acid Splash much more powerful in practice than its 1d4 damage suggests.' },
				{ type: 'paragraph', content: 'The default Portal version therefore limits itself to creature hit point damage and leaves exceptional material interactions to the DM.' }
			]
		}
	]
} as const;
export default question;

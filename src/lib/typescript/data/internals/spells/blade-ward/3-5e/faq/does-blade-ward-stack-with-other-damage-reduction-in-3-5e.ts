export const question = {
	slug: 'does-blade-ward-stack-with-other-damage-reduction-in-3-5e',
	question: 'Does Blade Ward stack with other damage reduction in D&D 3.5e?',
	shortAnswer:
		'No. Multiple forms of damage reduction do not add together in D&D 3.5e. If Blade Ward gives you DR 1/— and another effect gives you a larger form of DR, you use the best applicable damage reduction for that attack. Blade Ward can still matter when the larger DR is bypassed, because DR 1/— has no weapon bypass.',
	introduction:
		'The conversion intentionally uses ordinary damage reduction, so it inherits the edition’s non-stacking rule. This prevents players from adding many small DR values into one large reduction.\n\nDifferent bypass conditions can still make apparently weaker DR useful in specific situations.',
	sections: [
		{
			id: 'dr-values-do-not-add',
			title: 'Damage Reduction Values Do Not Add Together',
			blocks: [
				{ type: 'paragraph', content: 'If two damage reduction effects both apply, you do not add their numerical values.' },
				{ type: 'paragraph', content: 'DR 1/— from Blade Ward and DR 3/magic from another source do not become DR 4.' },
				{ type: 'paragraph', content: 'Instead, determine which available damage reduction gives the best result against the specific attack.' }
			]
		},
		{
			id: 'bypass-conditions-matter',
			title: 'Bypass Conditions Can Change Which DR Is Best',
			blocks: [
				{ type: 'paragraph', content: 'A mundane weapon does not bypass DR 3/magic, so that larger reduction would normally be superior to Blade Ward.' },
				{ type: 'paragraph', content: 'A magic weapon bypasses DR 3/magic, but the same weapon does not bypass DR 1/—.' },
				{ type: 'paragraph', content: 'Against that magical attack, Blade Ward can still reduce the damage by 1 even though the larger DR fails.' }
			]
		},
		{
			id: 'blade-ward-is-not-an-upgrade',
			title: 'Blade Ward Does Not Upgrade Existing DR',
			blocks: [
				{ type: 'paragraph', content: 'Casting Blade Ward on a character with existing damage reduction creates another defensive effect; it does not improve the number or bypass condition of the older effect.' },
				{ type: 'paragraph', content: 'The effects remain independent and are evaluated according to the normal rules whenever damage is taken.' },
				{ type: 'paragraph', content: 'This keeps the cantrip useful without turning it into a generic enhancement for every damage reduction build.' }
			]
		},
		{
			id: 'other-defenses-can-still-combine',
			title: 'Other Defensive Mechanics Can Still Combine',
			blocks: [
				{ type: 'paragraph', content: 'The non-stacking rule is specifically about multiple forms of damage reduction.' },
				{ type: 'paragraph', content: 'Armor Class bonuses, miss chances, energy resistance, temporary hit points, and other defenses are separate mechanics and can interact according to their own rules.' },
				{ type: 'paragraph', content: 'Blade Ward can therefore be part of a broader defensive setup even though its DR does not numerically stack with another DR value.' }
			]
		}
	]
} as const;

export default question;

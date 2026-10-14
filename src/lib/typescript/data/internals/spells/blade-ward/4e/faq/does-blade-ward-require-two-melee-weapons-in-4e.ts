export const question = {
	slug: 'does-blade-ward-require-two-melee-weapons-in-4e',

	question: 'Does Blade Ward require two melee weapons in D&D 4e?',

	shortAnswer:
		'No explicit two-weapon requirement appears in Blade Ward. The power is a melee weapon power and therefore requires an appropriate melee weapon for its attack, but it does not contain a Requirement stating that you must wield two melee weapons. The flavor describes defending with one blade and striking with another, but that description does not create an additional mechanical requirement.',

	introduction:
		'Blade Ward’s flavor strongly evokes a two-blade Ranger, which can make it look as though the power requires both hands to be armed. In 4e, however, mechanical requirements are stated explicitly in the power block.\n\nBlade Ward has the Weapon keyword and melee weapon range, but it does not include a two-weapon Requirement.',

	sections: [
		{
			id: 'there-is-no-two-weapon-requirement',
			title: 'There Is No Two-Weapon Requirement',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward does not say that the Ranger must be wielding two melee weapons.' },
				{ type: 'paragraph', content: 'That absence matters because other Ranger powers do include an explicit Requirement when two weapons are necessary.' },
				{ type: 'paragraph', content: 'The power should therefore not gain a hidden restriction solely from its descriptive text.' }
			]
		},
		{
			id: 'a-melee-weapon-is-still-needed',
			title: 'A Melee Weapon Is Still Needed',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward is a Weapon power with melee weapon range, so its attack uses a melee weapon.' },
				{ type: 'paragraph', content: 'The weapon provides the [W] value used for the Hit damage and determines the normal properties relevant to the weapon attack.' },
				{ type: 'paragraph', content: 'A Ranger cannot ignore the weapon portion of the power simply because there is no separate two-weapon Requirement.' }
			]
		},
		{
			id: 'flavor-is-not-a-requirement',
			title: 'Flavor Text Is Not a Mechanical Requirement',
			blocks: [
				{ type: 'paragraph', content: 'The descriptive line presents the Ranger as parrying with one blade and counterattacking with another.' },
				{ type: 'paragraph', content: 'That imagery explains the intended fantasy of the power but does not replace the formal fields that determine legal use.' },
				{ type: 'paragraph', content: 'D&D Portal should preserve that distinction rather than converting narrative flavor into an unsupported rule.' }
			]
		},
		{
			id: 'comparison-with-cloak-of-thorns',
			title: 'Nearby Ranger Powers Show the Difference',
			blocks: [
				{ type: 'paragraph', content: 'The same level of Ranger powers includes abilities that explicitly state a requirement to wield two melee weapons.' },
				{ type: 'paragraph', content: 'That demonstrates that 4e knows how to express a two-weapon restriction when one is intended.' },
				{ type: 'paragraph', content: 'Blade Ward lacks that Requirement, so its own rules should be followed as written.' }
			]
		}
	]
} as const;

export default question;

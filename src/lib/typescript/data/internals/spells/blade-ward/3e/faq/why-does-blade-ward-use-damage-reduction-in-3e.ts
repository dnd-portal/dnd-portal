export const question = {
	slug: 'why-does-blade-ward-use-damage-reduction-in-3e',
	question: 'Why does Blade Ward use Damage Reduction in D&D 3e?',
	shortAnswer:
		'Because Damage Reduction is the native D&D 3e mechanic for subtracting a fixed amount of damage from many weapons, natural attacks, and unarmed attacks. Importing the later 5e resistance mechanic would not fit the edition cleanly. The Portal Conversion therefore uses DR 1/— for 1 round, preserving Blade Ward’s role as a brief physical defense while remaining small enough for a 0-level spell.',
	introduction:
		'A good edition conversion should preserve the function and identity of a spell while expressing that concept through the rules language of the target edition. Blade Ward is meant to make physical attacks hurt less for a very short time.\n\nD&D 3e already has a system designed to do exactly that: Damage Reduction.',
	sections: [
		{
			id: 'damage-reduction-is-native',
			title: 'Damage Reduction Is the Native 3e Mechanic',
			blocks: [
				{ type: 'paragraph', content: 'Damage Reduction subtracts a fixed number of points from qualifying attacks before the remaining damage is applied.' },
				{ type: 'paragraph', content: 'It is used for protection from many weapon, natural, and unarmed attacks, making it a better fit for Blade Ward than a newly invented physical-resistance rule.' },
				{ type: 'paragraph', content: 'Published defensive effects in the edition also use DR to represent protection against weapon damage, so the mechanic is already familiar to 3e players.' }
			]
		},
		{
			id: 'why-dr-one',
			title: 'Why the Value Is Only DR 1/—',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward is a 0-level spell, so the conversion should stay within cantrip-scale power.' },
				{ type: 'paragraph', content: 'Reducing each qualifying attack by 1 point can still matter against weak enemies, multiple attacks, or repeated low-damage hits without becoming a major defensive buff.' },
				{ type: 'paragraph', content: 'A substantially larger DR value would compete too directly with higher-level magic and class features.' }
			]
		},
		{
			id: 'why-not-half-damage',
			title: 'Why It Does Not Halve Physical Damage',
			blocks: [
				{ type: 'paragraph', content: 'The later 5e spell uses resistance, which halves qualifying damage.' },
				{ type: 'paragraph', content: 'Directly carrying that mechanic backward would create an unusually strong 0-level defensive effect and would not resemble how ordinary 3e weapon defenses are expressed.' },
				{ type: 'paragraph', content: 'A fixed DR value preserves the idea of blunting blows while making the result behave like a normal D&D 3e defense.' }
			]
		},
		{
			id: 'why-the-dash',
			title: 'Why the Bypass Is Written as a Dash',
			blocks: [
				{ type: 'paragraph', content: 'D&D 3e often places an enhancement threshold after the slash, such as DR 10/+1.' },
				{ type: 'paragraph', content: 'Using DR 1/+1 for Blade Ward would mean that a +1 weapon completely ignores the cantrip, which is not a useful translation of the later spell’s identity.' },
				{ type: 'paragraph', content: 'DR 1/— instead gives the ward a tiny amount of physical protection that is not automatically defeated by weapon enhancement bonuses.' }
			]
		}
	]
} as const;

export default question;

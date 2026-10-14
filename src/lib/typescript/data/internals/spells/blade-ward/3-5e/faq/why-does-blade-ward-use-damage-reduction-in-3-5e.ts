export const question = {
	slug: 'why-does-blade-ward-use-damage-reduction-in-3-5e',
	question: 'Why does Blade Ward use damage reduction in D&D 3.5e?',
	shortAnswer:
		'Because damage reduction is the native 3.5e mechanic for ignoring a fixed amount of damage from most weapons, unarmed attacks, and natural weapons. The later Blade Ward concept uses resistance to physical weapon damage, but importing that mechanic directly would not fit 3.5e cleanly. The Portal Conversion therefore grants DR 1/— for 1 round, preserving the spell’s physical-defense identity while using the edition’s own rules.',
	introduction:
		'Edition conversions work best when they preserve a spell’s purpose rather than copying terminology mechanically. In 5e, Blade Ward can halve certain physical weapon damage through resistance. In 3.5e, damage reduction already exists to answer a similar rules question.\n\nUsing DR lets the spell interact correctly with magic weapons, natural attacks, energy damage, injury effects, and other damage reduction sources.',
	sections: [
		{
			id: 'damage-reduction-is-native',
			title: 'Damage Reduction Is the Native Physical Defense',
			blocks: [
				{ type: 'paragraph', content: 'The 3.5e rules define damage reduction as a defense that ignores a specified amount of damage from most weapons and natural attacks.' },
				{ type: 'paragraph', content: 'It is also used by published defensive magic. Protection from arrows, for example, grants DR against ranged weapons instead of using a later-edition resistance mechanic.' },
				{ type: 'paragraph', content: 'That makes damage reduction the most natural system for a short-lived ward against physical attacks.' }
			]
		},
		{
			id: 'why-the-value-is-one',
			title: 'Why the Conversion Uses DR 1/—',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward is a 0-level spell, so its effect should remain small enough to sit beside other 3.5e cantrips.' },
				{ type: 'paragraph', content: 'DR 1/— reduces each qualifying attack by only 1 point but can still matter over several attacks or against low-damage enemies.' },
				{ type: 'paragraph', content: 'Higher values would begin to compete with more substantial defensive spells and class features, particularly at very low character levels.' }
			]
		},
		{
			id: 'why-the-bypass-is-a-dash',
			title: 'Why the Bypass Entry Is a Dash',
			blocks: [
				{ type: 'paragraph', content: 'The 2014 Blade Ward spell does not stop working merely because an attacker uses a magic weapon.' },
				{ type: 'paragraph', content: 'Using DR 1/magic would reverse that behavior by allowing magical weapons to ignore the conversion entirely.' },
				{ type: 'paragraph', content: 'DR 1/— instead means that no ordinary weapon quality is the designated bypass, preserving the later spell’s broad protection against physical weapon attacks.' }
			]
		},
		{
			id: 'fixed-reduction-instead-of-half-damage',
			title: 'Why It Reduces a Fixed Amount Instead of Half',
			blocks: [
				{ type: 'paragraph', content: 'Halving weapon damage is powerful and is not how ordinary 3.5e damage reduction is expressed.' },
				{ type: 'paragraph', content: 'A fixed reduction produces results that are easier to combine with the edition’s existing combat rules and defensive effects.' },
				{ type: 'paragraph', content: 'The conversion therefore preserves the idea of briefly shrugging off physical blows without preserving the exact numerical behavior of 5e resistance.' }
			]
		}
	]
} as const;

export default question;

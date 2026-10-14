export const question = {
	slug: 'does-blade-ward-stack-with-shield-in-5-5e',
	question: 'Does Blade Ward stack with Shield in D&D 5.5e?',
	shortAnswer:
		'Yes, provided both effects are active and apply to the attack. Blade Ward subtracts 1d4 from the attacker’s attack roll, while Shield increases your Armor Class. Because they modify different parts of the attack resolution, they can work together. The attacker uses the reduced attack total from Blade Ward and then compares that total against your Armor Class after Shield has increased it.',
	introduction:
		'Blade Ward and Shield are both defensive spells, but they do not provide the same kind of defense. Blade Ward changes the attacker’s roll; Shield changes the defender’s Armor Class.\n\nBecause those effects operate differently, a character can benefit from both during the same attack if the normal requirements of each spell are satisfied.',
	sections: [
		{
			id: 'blade-ward-reduces-the-attack-roll',
			title: 'Blade Ward Reduces the Attack Roll',
			blocks: [
				{ type: 'paragraph', content: 'While Blade Ward is active, a creature making an attack roll against you subtracts 1d4 from that attack roll.' },
				{ type: 'paragraph', content: 'Your Armor Class does not change because of Blade Ward. The spell only lowers the number that the attacker is trying to compare against your AC.' },
				{ type: 'paragraph', content: 'This makes Blade Ward a roll modifier rather than an Armor Class bonus.' }
			]
		},
		{
			id: 'shield-increases-armor-class',
			title: 'Shield Increases Your Armor Class',
			blocks: [
				{ type: 'paragraph', content: 'Shield protects you in a different way by increasing your Armor Class for its duration.' },
				{ type: 'paragraph', content: 'Because the AC increase and Blade Ward’s attack-roll penalty are different effects, one does not replace the other.' },
				{ type: 'paragraph', content: 'An attack can therefore become less accurate while also needing to meet a higher Armor Class.' }
			]
		},
		{
			id: 'example',
			title: 'Example of the Two Spells Together',
			blocks: [
				{ type: 'paragraph', content: 'Suppose your normal AC is 16 and an attacker reaches an attack total of 20 before Blade Ward. Blade Ward rolls a 3, reducing that total to 17.' },
				{ type: 'paragraph', content: 'If Shield has increased your AC above 17, the reduced attack now misses. Without Blade Ward, the original total of 20 might still have hit depending on your final AC.' },
				{ type: 'paragraph', content: 'One spell therefore makes the attack total lower while the other raises the number needed to hit.' }
			]
		},
		{
			id: 'concentration',
			title: 'Shield Does Not Compete for Concentration',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward requires Concentration, but Shield does not normally require Concentration.' },
				{ type: 'paragraph', content: 'Casting Shield therefore does not automatically end Blade Ward by starting a second Concentration effect.' },
				{ type: 'paragraph', content: 'The caster still has to maintain Blade Ward normally and can lose it if their Concentration is broken by damage or another applicable rule.' }
			]
		}
	]
} as const;

export default question;

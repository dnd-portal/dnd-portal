export const question = {
	slug: 'does-acid-splash-use-grenade-like-missile-rules-in-2e',
	question: 'Does Acid Splash use grenade-like missile rules in AD&D 2e?',
	shortAnswer:
		'No. The D&D Portal 2e conversion borrows the idea of minor acid splash damage from AD&D 2e grenade-like acid rules, but the spell does not use the grenade-like missile subsystem itself. You do not make a thrown-object attack roll, calculate grenade range bands, roll for scatter, or determine where a missed flask lands. Acid Splash uses its own spell range and saving throws vs. spell.',
	introduction:
		'AD&D 2e has detailed rules for thrown acid and other grenade-like missiles, including direct hits, splash damage, misses, and scatter. Those rules are useful design inspiration for a spell named Acid Splash.\n\nUsing the entire subsystem for a small 1st-level Wizard spell would make the conversion much slower and more complicated than its damage justifies, so D&D Portal keeps only the thematic idea of a minor splash.',
	sections: [
		{
			id: 'the-spell-has-its-own-resolution',
			title: 'Acid Splash has its own spell resolution',
			blocks: [
				{ type: 'paragraph', content: 'The caster chooses one creature within the spell\'s 30-yard range. The target then makes a saving throw vs. spell.' },
				{ type: 'paragraph', content: 'There is no missile attack roll and therefore no normal attack miss that needs to be converted into a scatter result.' },
				{ type: 'paragraph', content: 'Nearby creatures within 3 feet also make saves against the secondary splash. Those saves are part of the spell rather than consequences of a physical flask landing somewhere.' }
			]
		},
		{
			id: 'what-was-borrowed-from-grenade-like-acid',
			title: 'The 1-point splash is the main design inspiration',
			blocks: [
				{ type: 'paragraph', content: 'AD&D 2e grenade-like acid rules establish the idea that a direct acid hit can be accompanied by much smaller damage to nearby creatures.' },
				{ type: 'paragraph', content: 'The Portal conversion echoes that pattern by giving the primary creature 1d4 potential damage and nearby creatures only 1 point.' },
				{ type: 'paragraph', content: 'That resemblance is intentional, but it does not mean the spell is mechanically treated as a thrown acid flask.' }
			]
		},
		{
			id: 'what-the-spell-does-not-use',
			title: 'The spell does not use scatter or grenade range bands',
			blocks: [
				{ type: 'paragraph', content: 'Physical grenade-like missiles can involve short, medium, and long ranges, attack modifiers, and rules for determining where a missed throw lands.' },
				{ type: 'paragraph', content: 'None of those steps apply to Acid Splash. Its range is always the spell\'s listed 30 yards, and its success is determined by saving throws rather than weapon-attack accuracy.' },
				{ type: 'paragraph', content: 'The spell also has no bottle to break and no physical projectile that remains on the battlefield after a miss.' }
			]
		},
		{
			id: 'why-the-distinction-matters',
			title: 'Why the distinction matters at the table',
			blocks: [
				{ type: 'paragraph', content: 'Treating Acid Splash as a grenade-like missile would add several rolls and special cases to a spell whose primary damage is only 1d4.' },
				{ type: 'paragraph', content: 'It could also create unintended interactions with weapon proficiencies, missile modifiers, physical ammunition, and item rules that the conversion was not designed to use.' },
				{ type: 'paragraph', content: 'Keeping the systems separate makes the spell fast to resolve while still giving it an AD&D-flavored splash effect.' }
			]
		}
	]
} as const;
export default question;

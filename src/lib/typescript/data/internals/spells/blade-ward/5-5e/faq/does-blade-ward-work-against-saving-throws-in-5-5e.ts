export const question = {
	slug: 'does-blade-ward-work-against-saving-throws-in-5-5e',
	question: 'Does Blade Ward work against saving throws in D&D 5.5e?',
	shortAnswer:
		'No. Blade Ward only reduces attack rolls made against you. If an effect requires you to make a saving throw instead, there is no attack roll for Blade Ward to modify. The spell therefore does not increase your saving throw, reduce the enemy’s save DC, or otherwise protect you from a saving-throw effect unless another rule separately provides that protection.',
	introduction:
		'Attack rolls and saving throws are different resolution systems in D&D 5.5e. Blade Ward interacts with only one of them: attack rolls made against the protected caster.\n\nA hostile effect can still be extremely dangerous while completely bypassing Blade Ward if that effect uses a saving throw instead of an attack roll.',
	sections: [
		{
			id: 'blade-ward-needs-an-attack-roll',
			title: 'Blade Ward Needs an Attack Roll to Modify',
			blocks: [
				{ type: 'paragraph', content: 'The 2024 spell applies when a creature makes an attack roll against you. The attacker then subtracts 1d4 from that roll.' },
				{ type: 'paragraph', content: 'If no attack roll is being made, that trigger never occurs. A saving-throw effect therefore proceeds without the Blade Ward penalty.' },
				{ type: 'paragraph', content: 'This remains true even if the saving-throw effect deals damage. The type or amount of damage does not convert the effect into an attack roll.' }
			]
		},
		{
			id: 'blade-ward-does-not-improve-your-save',
			title: 'Blade Ward Does Not Improve Your Saving Throw',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward does not add 1d4 to your Dexterity, Constitution, Wisdom, or other saving throws.' },
				{ type: 'paragraph', content: 'It also does not grant Advantage on saving throws and does not create Resistance to damage caused by failed saves.' },
				{ type: 'paragraph', content: 'Any protection you have against saving-throw effects must come from another spell, feature, item, trait, or rule.' }
			]
		},
		{
			id: 'blade-ward-does-not-reduce-save-dc',
			title: 'Blade Ward Does Not Reduce the Enemy’s Save DC',
			blocks: [
				{ type: 'paragraph', content: 'The enemy’s spell save DC or feature save DC is not an attack roll. Blade Ward therefore does not subtract 1d4 from that DC.' },
				{ type: 'paragraph', content: 'For example, if an effect requires a Dexterity saving throw against DC 16, the DC remains 16 even while Blade Ward is active.' },
				{ type: 'paragraph', content: 'This makes the distinction between attack-roll defense and saving-throw defense important when deciding whether Blade Ward is useful in a particular encounter.' }
			]
		},
		{
			id: 'some-enemies-use-both',
			title: 'Some Enemies Use Both Kinds of Effects',
			blocks: [
				{ type: 'paragraph', content: 'A creature is not globally affected or unaffected by Blade Ward. The spell is evaluated separately for each offensive action or effect.' },
				{ type: 'paragraph', content: 'If an enemy makes an attack roll on one turn, the Blade Ward penalty applies. If the same enemy later uses an effect that forces a saving throw, Blade Ward does not modify that saving throw.' },
				{ type: 'paragraph', content: 'The relevant question is always how the specific effect is resolved, not what kind of creature or class is producing it.' }
			]
		}
	]
} as const;

export default question;

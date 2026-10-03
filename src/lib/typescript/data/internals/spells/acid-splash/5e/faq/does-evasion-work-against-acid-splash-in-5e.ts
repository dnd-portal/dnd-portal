export const question = {
	slug: 'does-evasion-work-against-acid-splash-in-5e',

	question: 'Does Evasion work against Acid Splash in D&D 5e?',

	shortAnswer:
		'Normally, Evasion does not change the result of Acid Splash in D&D 5e (2014). Acid Splash uses a Dexterity saving throw, but a successful save already causes the target to take no damage. The 2014 Evasion feature applies to effects that use a Dexterity saving throw for half damage on a success. A special interaction can arise if another feature, such as the 2014 Evocation Wizard’s Potent Cantrip, changes Acid Splash so that a successful save deals half damage; the exact Evasion interaction in that modified case is not directly resolved by an official ruling and can require DM adjudication.',

	introduction:
		'It is easy to assume that Evasion applies to every damaging Dexterity saving throw, but the 2014 feature is more specific. Its trigger refers to effects where a successful Dexterity save would normally reduce the damage to half.\n\nAcid Splash has a different success result: the target takes damage only on a failed save. That means ordinary Acid Splash already gives a successful target the same zero-damage outcome that Evasion would normally improve another effect to.',

	sections: [
		{
			id: 'normal-acid-splash-deals-no-damage-on-a-success',
			title: 'Normal Acid Splash already deals no damage on a successful save',
			blocks: [
				{ type: 'paragraph', content: 'Acid Splash forces each target to make a Dexterity saving throw. On a failed save, the target takes the spell’s acid damage.' },
				{ type: 'paragraph', content: 'On a successful save, the spell does not specify half damage or another reduced amount. The target simply takes no Acid Splash damage.' },
				{ type: 'paragraph', content: 'Because success already means zero damage, a creature with Evasion does not receive an additional reduction from the feature during an ordinary Acid Splash casting.' }
			]
		},
		{
			id: 'evasion-is-not-every-dexterity-save',
			title: 'Evasion is not triggered by every Dexterity saving throw',
			blocks: [
				{ type: 'paragraph', content: 'The 2014 Evasion feature is written around effects that allow a Dexterity saving throw to take only half damage. Classic examples include effects where failure causes full damage and success normally causes half damage.' },
				{ type: 'paragraph', content: 'Evasion improves that pattern: a successful save becomes no damage, and a failed save becomes only half damage. Acid Splash does not normally use that full-or-half pattern.' },
				{ type: 'paragraph', content: 'The presence of a Dexterity save by itself is therefore not sufficient. The damage result associated with that saving throw also matters when determining whether the 2014 Evasion wording applies.' }
			]
		},
		{
			id: 'evasion-does-not-help-on-a-failed-normal-save',
			title: 'Evasion does not halve a failed normal Acid Splash save',
			blocks: [
				{ type: 'paragraph', content: 'A common mistake is to see that Evasion can produce half damage on a failed Dexterity save and apply that result to Acid Splash automatically.' },
				{ type: 'paragraph', content: 'Under the normal spell wording, Acid Splash is not an effect that offers a successful save for half damage. The Evasion trigger is therefore not satisfied merely because the target failed a Dexterity save against a damaging spell.' },
				{ type: 'paragraph', content: 'Without another feature changing the interaction, a creature that fails its Acid Splash save takes the spell’s normal full damage even if that creature has Evasion.' }
			]
		},
		{
			id: 'potent-cantrip-changes-the-success-result',
			title: 'Potent Cantrip creates a special interaction',
			blocks: [
				{ type: 'paragraph', content: 'The 2014 School of Evocation feature Potent Cantrip changes the result of successful saving throws against damaging cantrips. Instead of taking no damage, a creature that succeeds can take half of the cantrip’s damage.' },
				{ type: 'paragraph', content: 'Official Sage Advice confirms that Potent Cantrip applies to saving-throw cantrips such as Acid Splash. An Acid Splash cast by an Evocation Wizard with that feature can therefore have a different successful-save result from ordinary Acid Splash.' },
				{ type: 'paragraph', content: 'At that point, Potent Cantrip and Evasion point in opposite directions: one feature makes a successful save deal half damage, while Evasion is designed to turn certain half-damage Dexterity saves into no damage.' }
			]
		},
		{
			id: 'the-potent-cantrip-evasion-case-can-require-a-ruling',
			title: 'Potent Cantrip versus Evasion can require a DM ruling',
			blocks: [
				{ type: 'paragraph', content: 'There is no direct official ruling that conclusively resolves the exact ordering of Potent Cantrip and Evasion for Acid Splash. Community rules discussions have produced more than one reading.' },
				{ type: 'paragraph', content: 'One reading treats Potent Cantrip as making the effect one where the successful Dexterity save now results in half damage, allowing Evasion to apply. Another reading treats Evasion’s trigger as depending on the underlying spell’s normal saving-throw structure before Potent Cantrip modifies the result.' },
				{ type: 'paragraph', content: 'D&D Portal should therefore distinguish the clear base rule from the disputed edge case: ordinary Acid Splash receives no additional benefit from Evasion, while Acid Splash modified by Potent Cantrip may require the DM to decide how the two class features interact.' }
			]
		}
	]
} as const;

export default question;

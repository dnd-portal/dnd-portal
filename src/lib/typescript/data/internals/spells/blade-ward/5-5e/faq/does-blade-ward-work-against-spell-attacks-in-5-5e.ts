export const question = {
	slug: 'does-blade-ward-work-against-spell-attacks-in-5-5e',
	question: 'Does Blade Ward work against spell attacks in D&D 5.5e?',
	shortAnswer:
		'Yes. The 2024 version of Blade Ward applies whenever a creature makes an attack roll against you, and that includes melee and ranged spell attacks. The attacker subtracts 1d4 from the spell attack roll in the same way it would for a weapon attack. Blade Ward does not care whether the attack comes from a weapon, an Unarmed Strike, or a spell; the important requirement is that an attack roll is being made against you.',
	introduction:
		'The name Blade Ward can make the cantrip sound like protection specifically against swords or other weapons, but the 2024 spell is broader than its name suggests. Its trigger is an attack roll against the protected caster.\n\nSpell attacks use attack rolls, so they fall under the same defensive mechanic unless a specific effect says otherwise.',
	sections: [
		{
			id: 'spell-attacks-are-attack-rolls',
			title: 'Spell Attacks Are Still Attack Rolls',
			blocks: [
				{ type: 'paragraph', content: 'A spell attack is resolved with an attack roll rather than a saving throw. It therefore satisfies Blade Ward’s requirement that a creature be making an attack roll against the protected caster.' },
				{ type: 'paragraph', content: 'The distinction between weapon and spell attacks does not matter for Blade Ward’s normal 2024 effect. The spell does not restrict itself to weapon attacks.' },
				{ type: 'paragraph', content: 'If a hostile caster makes a melee spell attack or ranged spell attack against you while Blade Ward is active, that attacker subtracts 1d4 from the attack roll.' }
			]
		},
		{
			id: 'the-name-does-not-limit-the-effect',
			title: 'The Name Does Not Limit the Effect to Blades',
			blocks: [
				{ type: 'paragraph', content: 'Spell names are descriptive, but the rules text determines what a spell actually affects. Blade Ward does not contain a special limitation for swords, blades, melee weapons, or physical damage.' },
				{ type: 'paragraph', content: 'The same 1d4 penalty can therefore apply to an arrow, an axe, an Unarmed Strike attack roll, or a hostile spell attack.' },
				{ type: 'paragraph', content: 'This is one of the major differences from the 2014 version, which protected specifically against certain damage from weapon attacks rather than broadly modifying attack rolls.' }
			]
		},
		{
			id: 'saving-throw-spells-are-different',
			title: 'Saving-Throw Spells Are Different',
			blocks: [
				{ type: 'paragraph', content: 'A spell can be hostile without making an attack roll. Many damaging or controlling spells instead force the target to make a saving throw.' },
				{ type: 'paragraph', content: 'Blade Ward does not modify those saving throws because there is no attack roll for the 1d4 penalty to reduce.' },
				{ type: 'paragraph', content: 'When determining whether Blade Ward applies, check the actual resolution method of the hostile effect rather than asking whether the effect is a spell.' }
			]
		},
		{
			id: 'blade-ward-does-not-change-save-dc',
			title: 'Blade Ward Does Not Change Spell Save DC',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward modifies attack rolls made against you. It does not reduce the enemy’s spellcasting ability, proficiency bonus, or spell save DC.' },
				{ type: 'paragraph', content: 'If the enemy uses a spell attack, the 1d4 applies to the attack roll. If the enemy instead forces you to make a saving throw, their save DC is unchanged.' },
				{ type: 'paragraph', content: 'This keeps Blade Ward focused on attack-roll defense rather than functioning as a general penalty to every offensive spell.' }
			]
		}
	]
} as const;

export default question;

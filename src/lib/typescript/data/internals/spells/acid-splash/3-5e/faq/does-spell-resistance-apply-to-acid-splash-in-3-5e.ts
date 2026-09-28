export const question = {
	slug: 'does-spell-resistance-apply-to-acid-splash-in-3-5e',
	question: 'Does spell resistance apply to Acid Splash in D&D 3.5e?',
	shortAnswer:
		"No. Acid Splash has Spell Resistance: No in D&D 3.5e. A caster does not make a caster level check to overcome spell resistance when using Acid Splash, although the ranged touch attack must still hit and other defenses such as resistance or immunity to acid can still reduce or prevent the damage. This is also an edition-specific rule: the earlier 3e version of Acid Splash was subject to spell resistance.",
	introduction:
		"Spell resistance is not one of the defenses that stops Acid Splash in D&D 3.5e. A creature may have substantial spell resistance and still be targeted by Acid Splash without forcing the caster to make the normal caster level check associated with spells that allow spell resistance.\n\nThat does not make Acid Splash automatic or unstoppable. The caster must still land the spell's ranged touch attack, and defenses that apply to acid damage remain relevant. The distinction becomes especially important when comparing 3.5e with the original 3e version of Acid Splash, because the interaction with spell resistance changed between those editions.",
	sections: [
		{
			id: 'acid-splash-ignores-spell-resistance',
			title: 'Acid Splash does not allow spell resistance',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The D&D 3.5e spell entry for Acid Splash lists Spell Resistance as No. That entry determines that a creature’s spell resistance does not create a separate chance for the spell to fail after the attack has connected.'
				},
				{
					type: 'paragraph',
					content:
						'A creature can therefore possess a very high spell-resistance value without making Acid Splash check against that number. The spell simply does not use that defensive mechanic in this edition.'
				},
				{
					type: 'paragraph',
					content:
						'This is a property of Acid Splash itself rather than a general property of acid spells or Conjuration spells. Other spells may still list Spell Resistance: Yes and must be resolved according to their own entries.'
				}
			]
		},
		{
			id: 'no-caster-level-check-is-required',
			title: 'No caster level check is required',
			blocks: [
				{
					type: 'paragraph',
					content:
						'When a spell is subject to spell resistance, the caster normally makes a caster level check to determine whether the magic can affect the resistant creature. The target’s spell resistance effectively adds another defensive hurdle after the spell would otherwise reach it.'
				},
				{
					type: 'paragraph',
					content:
						'Acid Splash skips that entire step in D&D 3.5e because its Spell Resistance entry is No. The caster does not roll against the creature’s spell resistance and does not need to overcome it before applying the spell’s normal result.'
				},
				{
					type: 'paragraph',
					content:
						'Caster level can still matter for other aspects of Acid Splash, such as its Close range, but it is not used to make a spell-resistance check for this spell. That is why raising caster level does not make Acid Splash “better at beating SR” in 3.5e: there is no SR check to beat.'
				}
			]
		},
		{
			id: 'spell-resistance-is-not-acid-resistance',
			title: 'Spell resistance is not acid resistance',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Ignoring spell resistance does not mean Acid Splash ignores every defensive ability. Spell resistance and energy resistance are separate mechanics that operate at different stages of resolving an effect.'
				},
				{
					type: 'paragraph',
					content:
						'A creature with resistance to acid can still reduce the 1d3 acid damage after Acid Splash hits. If that resistance is high enough, it can absorb all of the spell’s damage even though spell resistance had no effect on the casting.'
				},
				{
					type: 'paragraph',
					content:
						'Acid immunity can likewise prevent the damage entirely if the creature is immune to acid. The Spell Resistance: No entry only answers the spell-resistance question; it does not override defenses tied specifically to the Acid damage type.'
				}
			]
		},
		{
			id: 'the-touch-attack-still-matters',
			title: 'The ranged touch attack still matters',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Spell resistance cannot stop Acid Splash in D&D 3.5e, but the spell is not an automatic hit. The caster must still make a ranged touch attack against the target’s touch Armor Class.'
				},
				{
					type: 'paragraph',
					content:
						'If that attack misses, the spell deals no damage regardless of the target’s spell resistance. A creature with no spell resistance at all can still avoid Acid Splash simply because the ranged touch attack fails to connect.'
				},
				{
					type: 'paragraph',
					content:
						'Cover, concealment, touch AC, range, and other relevant attack rules can therefore matter even though spell resistance does not. Removing one defensive layer does not remove the normal requirements of the spell’s attack roll.'
				}
			]
		},
		{
			id: 'why-this-can-be-useful',
			title: 'Why this can be useful',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Against a creature with substantial spell resistance, an offensive spell that allows spell resistance can become less reliable because the caster may need to succeed at both the spell’s normal resolution and a caster level check against spell resistance.'
				},
				{
					type: 'paragraph',
					content:
						'Acid Splash avoids that additional spell-resistance check. If the target also has a relatively low touch AC, the spell can sometimes be a dependable way to deal a small amount of damage when other low-level offensive spells face more defensive hurdles.'
				},
				{
					type: 'paragraph',
					content:
						'The trade-off is damage. Acid Splash only deals 1d3 acid damage under its normal rules, so bypassing spell resistance does not turn it into a high-damage option. Its value comes from how it interacts with defenses rather than from raw damage output.'
				}
			]
		},
		{
			id: 'example-resistant-creature',
			title: 'Example: attacking a creature with spell resistance',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Imagine a creature with strong spell resistance but a modest touch Armor Class. A different offensive spell that lists Spell Resistance: Yes may require the caster to overcome that resistance before the spell can affect the creature.'
				},
				{
					type: 'paragraph',
					content:
						'With Acid Splash in 3.5e, the caster instead focuses on the ranged touch attack. If that attack hits, there is no spell-resistance roll between the successful hit and the spell’s acid damage.'
				},
				{
					type: 'paragraph',
					content:
						'If the same creature also has acid resistance, that resistance can still reduce the damage afterward. The example therefore shows why the attack roll, spell resistance, and energy resistance must be treated as separate mechanics.'
				}
			]
		},
		{
			id: 'difference-between-3e-and-3-5e',
			title: 'Why the answer differs between 3e and 3.5e',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Splash existed before the 3.5e revision, but its interaction with spell resistance changed. The earlier D&D 3e version was subject to spell resistance, while the revised 3.5e version lists Spell Resistance: No.'
				},
				{
					type: 'paragraph',
					content:
						'That means a rules answer written for 3e can be incorrect when applied to 3.5e even though the spell name, level, attack type, range, and damage are very similar. The edition label matters for this question.'
				},
				{
					type: 'paragraph',
					content:
						'D&D Portal therefore treats the 3e and 3.5e versions as separate spell entries rather than silently applying the revised rule backward. When checking spell resistance, use the rule belonging to the edition being played.'
				}
			]
		}
	]
} as const;

export default question;

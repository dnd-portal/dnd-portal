export const question = {
	slug: 'does-acid-splash-use-touch-ac-in-3-5e',
	question: 'Does Acid Splash use touch AC in D&D 3.5e?',
	shortAnswer:
		"Yes. Acid Splash requires a ranged touch attack in D&D 3.5e, so the caster rolls against the target's touch Armor Class rather than its normal Armor Class. Armor, shield, and natural armor bonuses do not apply to touch AC, while modifiers such as Dexterity, size, deflection, dodge, cover, and other applicable defenses can still matter. Acid Splash is therefore often easier to land against heavily armored creatures, but it is never an automatic hit.",
	introduction:
		"Acid Splash is a spell, but it still uses an attack roll to determine whether its acid missile connects. The important difference from an ordinary weapon attack is that Acid Splash is a ranged touch attack, so the relevant defense is touch Armor Class rather than the target's full Armor Class.\n\nThis distinction matters most against creatures whose protection comes from armor, shields, or natural armor. Those defenses can make a creature difficult to hit with ordinary attacks while doing much less against an effect that only needs to make contact. Touch AC still includes other applicable defenses, however, so the spell should not be treated as though it simply ignores Armor Class altogether.",
	sections: [
		{
			id: 'acid-splash-is-a-ranged-touch-attack',
			title: 'Acid Splash is a ranged touch attack',
			blocks: [
				{
					type: 'paragraph',
					content:
						"Casting Acid Splash creates one missile of acid, but that missile does not automatically strike its target. The caster makes a ranged touch attack, using the normal attack-roll process while comparing the result to the target's touch AC instead of its normal AC."
				},
				{
					type: 'paragraph',
					content:
						'If the ranged touch attack fails to hit, Acid Splash deals no damage. If it hits, the spell deals its normal 1d3 acid damage. There is no separate saving throw that replaces the attack roll or gives the target another chance to avoid the hit.'
				},
				{
					type: 'paragraph',
					content:
						'The word “touch” can be misleading because the caster does not need to stand next to the target. Acid Splash uses a ranged touch attack, meaning the spell reaches the target at range while still using the touch-attack rules for Armor Class.'
				}
			]
		},
		{
			id: 'what-touch-ac-ignores',
			title: 'What touch AC ignores',
			blocks: [
				{
					type: 'paragraph',
					content:
						"A touch attack represents an attack that only needs to make contact rather than penetrate the target's physical protection. Because of that, armor bonuses, shield bonuses, and natural armor bonuses are not included in the target's touch Armor Class."
				},
				{
					type: 'paragraph',
					content:
						'This is why a creature in heavy armor can have an excellent normal Armor Class but a much lower touch AC. The armor still protects the creature from ordinary attacks, but it does not help against an effect that only needs to touch the target.'
				},
				{
					type: 'paragraph',
					content:
						'Natural armor is treated the same way for this purpose. A creature with a thick hide, scales, or another large natural armor bonus may be hard to wound normally while remaining much easier to hit with Acid Splash if its other touch-AC modifiers are modest.'
				}
			]
		},
		{
			id: 'what-still-applies-to-touch-ac',
			title: 'What still applies to touch AC',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Touch AC is not automatically 10. Modifiers that represent avoiding contact or magically deflecting an attack can still contribute, including Dexterity, size, deflection, dodge, and other bonuses or penalties that specifically apply to touch attacks.'
				},
				{
					type: 'paragraph',
					content:
						'A lightly armored but extremely agile creature may therefore have a touch AC close to its normal AC. Likewise, a small creature can gain a useful size bonus, and magical effects that provide deflection can remain effective even though armor and shield bonuses do not.'
				},
				{
					type: 'paragraph',
					content:
						'Penalties still matter as well. If a target loses Dexterity to AC or suffers another condition that lowers the modifiers contributing to touch AC, Acid Splash may become easier to land even though the spell itself has not changed.'
				}
			]
		},
		{
			id: 'why-touch-ac-matters-for-acid-splash',
			title: 'Why touch AC matters for Acid Splash',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The use of touch AC is one of the main practical advantages of Acid Splash. A heavily armored opponent may be very difficult to hit with a weapon but comparatively easy to touch with a spell attack, allowing Acid Splash to remain relevant even though its damage is only 1d3.'
				},
				{
					type: 'paragraph',
					content:
						'For example, a creature with normal AC 21 and touch AC 11 presents two very different targets. An ordinary attack may need to reach AC 21, while Acid Splash only needs to reach 11. The spell gains no extra damage from this difference, but the chance to connect can be substantially better.'
				},
				{
					type: 'paragraph',
					content:
						'That advantage depends entirely on how the target builds its Armor Class. A creature with normal AC 18 and touch AC 17 gains most of its defense from modifiers that still apply to touch attacks, so Acid Splash receives very little practical benefit from targeting touch AC in that matchup.'
				}
			]
		},
		{
			id: 'cover-concealment-and-other-defenses',
			title: 'Cover, concealment, and other defenses still matter',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Using touch AC does not cause Acid Splash to ignore the rest of the ranged-combat rules. Cover can still improve a target’s defense, and concealment can still create a miss chance even when the attack roll would otherwise be high enough to hit touch AC.'
				},
				{
					type: 'paragraph',
					content:
						'Line of effect and range also remain relevant. The caster still needs a legal path for the spell and must keep the target within Acid Splash’s Close range. Touch AC only answers which Armor Class modifiers apply when the attack roll is resolved.'
				},
				{
					type: 'paragraph',
					content:
						'This is an important distinction when adjudicating the spell: “ranged touch attack” does not mean “ignore defenses.” It means that the attack uses the touch-attack rules while every other applicable combat rule continues to function normally.'
				}
			]
		},
		{
			id: 'can-acid-splash-crit',
			title: 'Can Acid Splash score a critical hit?',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Yes. D&D 3.5e allows damaging spells that require attack rolls to score critical hits, and Acid Splash qualifies because it uses a ranged touch attack and deals hit point damage.'
				},
				{
					type: 'paragraph',
					content:
						'Under the normal critical-hit rules, an attack generally threatens on a natural 20 and uses a ×2 multiplier unless another rule changes those values. For Acid Splash, the spell’s normal 1d3 damage is therefore rolled more than once when a critical hit is confirmed.'
				},
				{
					type: 'paragraph',
					content:
						'The reason is the attack roll, not the fact that the effect is magical. A damaging spell that does not require an attack roll cannot score a critical hit merely because it reduces hit points.'
				}
			]
		}
	]
} as const;

export default question;

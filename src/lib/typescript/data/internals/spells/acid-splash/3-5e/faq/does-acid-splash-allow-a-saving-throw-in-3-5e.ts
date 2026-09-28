export const question = {
	slug: 'does-acid-splash-allow-a-saving-throw-in-3-5e',
	question: 'Does Acid Splash allow a saving throw in D&D 3.5e?',
	shortAnswer:
		"No. Acid Splash does not allow a saving throw in D&D 3.5e. The caster instead makes a ranged touch attack against the target's touch Armor Class. A successful attack deals 1d3 acid damage and a missed attack deals no damage; there is no Fortitude, Reflex, or Will save for half damage or to negate the spell. Other defenses, such as touch AC, cover, concealment, and resistance or immunity to acid, can still matter.",
	introduction:
		"Acid Splash uses an attack roll instead of a saving throw. That makes it mechanically different from many damaging spells that automatically affect an area or target and then ask for a Reflex, Fortitude, or Will save.\n\nFor Acid Splash, the first question is whether the caster can land the ranged touch attack. Saving throw bonuses do not help with that roll, but this does not make the spell unavoidable: the target can still benefit from defenses that apply to the attack itself and from defenses that reduce or prevent acid damage after a hit.",
	sections: [
		{
			id: 'acid-splash-has-no-saving-throw',
			title: 'Acid Splash has no saving throw',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The D&D 3.5e spell entry for Acid Splash lists its Saving Throw as None. The target therefore does not make a Fortitude, Reflex, or Will saving throw when the spell is cast at it.'
				},
				{
					type: 'paragraph',
					content:
						'This is different from spells that automatically reach their target and then give that target a chance to resist or reduce the effect with a saving throw. Acid Splash determines its initial success with an attack roll instead.'
				},
				{
					type: 'paragraph',
					content:
						'A creature with excellent Fortitude, Reflex, and Will saves gains no direct benefit from those bonuses against Acid Splash because the spell never asks for any of those rolls.'
				}
			]
		},
		{
			id: 'the-attack-roll-replaces-the-save',
			title: 'The attack roll determines whether Acid Splash hits',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Instead of allowing a saving throw, Acid Splash requires the caster to make a ranged touch attack. The attack result is compared with the target’s touch Armor Class rather than its normal Armor Class.'
				},
				{
					type: 'paragraph',
					content:
						'If that attack hits, the spell deals 1d3 acid damage. If the attack misses, the spell deals no damage. There is no automatic partial effect simply because the caster successfully completed the spell.'
				},
				{
					type: 'paragraph',
					content:
						'This also means that abilities and conditions that affect attack rolls or touch Armor Class can matter more to Acid Splash than bonuses to saving throws. The defensive question is “can the spell hit me?” rather than “can I save against it?”'
				}
			]
		},
		{
			id: 'there-is-no-half-damage-result',
			title: 'There is no half-damage result',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Splash does not have a successful-save result such as half damage because there is no saving throw in the first place. The spell’s normal resolution is much more binary.'
				},
				{
					type: 'paragraph',
					content:
						'On a successful ranged touch attack, the target takes the spell’s 1d3 acid damage. On a miss, the target takes none of that damage. Nothing in the base spell creates a middle result between those two outcomes.'
				},
				{
					type: 'paragraph',
					content:
						'External effects can still modify the final damage after a hit, such as acid resistance or immunity, but those are separate rules. They do not turn Acid Splash into a saving-throw spell or create a half-damage save.'
				}
			]
		},
		{
			id: 'saving-throw-bonuses-do-not-help',
			title: 'Saving throw bonuses do not directly help against Acid Splash',
			blocks: [
				{
					type: 'paragraph',
					content:
						"Because Acid Splash does not call for a saving throw, a creature's Fortitude, Reflex, and Will bonuses do not directly improve its chance to avoid the spell. A high Reflex save, for example, does not make the ranged touch attack harder to hit."
				},
				{
					type: 'paragraph',
					content:
						'The creature’s touch Armor Class is the relevant defensive number for the attack roll. Dexterity, size, deflection, dodge, cover, concealment, and other applicable attack defenses can still influence whether Acid Splash connects.'
				},
				{
					type: 'paragraph',
					content:
						'After a hit, resistance or immunity to acid can still reduce or prevent the damage. The absence of a saving throw therefore removes one defensive mechanism, not every possible defense against the spell.'
				}
			]
		},
		{
			id: 'acid-splash-and-evasion',
			title: 'Does Evasion work against Acid Splash?',
			blocks: [
				{
					type: 'paragraph',
					content:
						'No. Evasion is designed for effects that allow a Reflex saving throw for half damage. When a creature with Evasion succeeds on a qualifying Reflex save, the ability can reduce that damage to zero.'
				},
				{
					type: 'paragraph',
					content:
						'Acid Splash does not provide a Reflex saving throw at all. It is resolved with a ranged touch attack, so there is no qualifying Reflex save for Evasion to improve and no save-based half-damage result for the ability to replace.'
				},
				{
					type: 'paragraph',
					content:
						'Improved Evasion does not change this interaction. Improved Evasion still modifies the result of Reflex saving throws, while Acid Splash never calls for one. A creature must instead rely on defenses that affect the touch attack or the acid damage itself.'
				}
			]
		},
		{
			id: 'saving-throws-touch-ac-and-resistance-are-separate',
			title: 'Saving throws, touch AC, and resistance are separate defenses',
			blocks: [
				{
					type: 'paragraph',
					content:
						'It helps to separate the different defensive layers involved. A saving throw is a roll made by the target when a spell or effect allows one, while touch AC is the Armor Class used when an attacker makes a touch attack.'
				},
				{
					type: 'paragraph',
					content:
						'Acid Splash uses touch AC and does not use a saving throw. In D&D 3.5e it also lists Spell Resistance: No, so spell resistance does not introduce an additional caster level check after the touch attack.'
				},
				{
					type: 'paragraph',
					content:
						'Energy resistance is different again. A creature with acid resistance can still reduce the acid damage after the spell hits. Understanding those mechanics separately prevents several common rules mix-ups around this cantrip.'
				}
			]
		}
	]
} as const;

export default question;

export const question = {
	slug: 'can-acid-splash-damage-objects-in-3-5e',
	question: 'Can Acid Splash damage objects in D&D 3.5e?',
	shortAnswer:
		"Yes. Acid Splash can damage most objects in D&D 3.5e. The spell is not restricted to creature targets, and the object-damage rules allow acid attacks to deal damage to most objects normally after a successful hit. The object's hardness is then subtracted from the damage before any remaining damage is removed from its hit points, so the spell's small 1d3 damage often cannot harm durable materials at all.",
	introduction:
		"Acid Splash can be aimed at objects in D&D 3.5e, but that does not mean a cantrip automatically melts locks, weapons, doors, walls, or other obstacles. Objects have their own Armor Class, hardness, and hit point rules, and those rules continue to apply when the spell deals acid damage.\n\nAcid is actually one of the more effective energy types against most objects because its damage is not automatically reduced before hardness in the way some other energy types are. Acid Splash still has a practical limitation, however: with only 1d3 base damage, even moderate hardness can absorb every possible damage roll.",
	sections: [
		{
			id: 'acid-splash-is-not-limited-to-creatures',
			title: 'Acid Splash is not limited to creatures',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The D&D 3.5e version of Acid Splash does not contain a Target entry that restricts the spell to creatures. Instead, the spell creates one missile of acid and requires a ranged touch attack to hit the chosen target.'
				},
				{
					type: 'paragraph',
					content:
						'Because the spell is not written as “one creature” or another creature-only target, objects can be valid things to attack when the normal rules allow the caster to target and hit them. The object then uses the appropriate object and combat rules to resolve the attack.'
				},
				{
					type: 'paragraph',
					content:
						'This point is edition-specific. Later versions of Acid Splash use different wording and targeting mechanics, so an answer based on 5e or another edition should not automatically be applied to the 3.5e spell.'
				}
			]
		},
		{
			id: 'acid-can-damage-objects',
			title: 'Acid damage is applied normally to most objects',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The D&D 3.5e object-damage rules specifically allow acid attacks to damage most objects. After Acid Splash successfully hits an object, roll its 1d3 acid damage and then resolve that damage using the object rules.'
				},
				{
					type: 'paragraph',
					content:
						'Acid is treated differently from several other energy types when objects are damaged. Fire and electricity normally deal reduced damage to most objects, while cold is reduced even further before hardness is applied. Acid does not receive that automatic reduction against most objects.'
				},
				{
					type: 'paragraph',
					content:
						'That does not mean acid ignores an object’s defenses. Acid Splash still has to hit, and hardness is still applied after the damage roll. The spell benefits from acid’s favorable object-damage treatment, but its very small damage die remains a major limitation.'
				}
			]
		},
		{
			id: 'hardness-still-applies',
			title: 'Object hardness still applies',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Objects in D&D 3.5e have hardness as well as hit points. Whenever an object takes damage, its hardness is subtracted from that damage before any remaining points are removed from the object’s hit points.'
				},
				{
					type: 'paragraph',
					content:
						'Because Acid Splash deals only 1d3 damage, an object does not need much hardness to become effectively immune to the spell’s normal damage. If the hardness equals or exceeds the maximum possible damage roll, every normal casting is completely absorbed.'
				},
				{
					type: 'paragraph',
					content:
						'Hardness is applied to each damaging hit separately. Repeatedly casting Acid Splash does not pool several 1d3 rolls together before hardness unless another rule specifically says that it should; each successful hit is resolved on its own.'
				}
			]
		},
		{
			id: 'example-acid-splash-against-hardness',
			title: 'Example: Acid Splash against hardness',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Suppose Acid Splash hits an object with hardness 2. On a damage roll of 1 or 2, hardness absorbs all of the damage. On a roll of 3, one point remains after hardness and is removed from the object’s hit points.'
				},
				{
					type: 'paragraph',
					content:
						'Now suppose the object has hardness 5. Acid Splash can normally roll no higher than 3, so every possible damage result is absorbed. Under those normal conditions, repeated castings do not damage the object’s hit points at all.'
				},
				{
					type: 'paragraph',
					content:
						'This is why the answer to “Can Acid Splash damage objects?” is yes in the rules but often no in a particular practical situation. The spell can interact with objects, yet the material’s hardness determines whether that interaction produces actual hit point damage.'
				}
			]
		},
		{
			id: 'acid-splash-does-not-automatically-melt-objects',
			title: 'Acid Splash does not automatically melt objects',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The fact that Acid Splash creates acid does not introduce a separate rule that automatically dissolves whatever it touches. The spell deals a defined amount of acid damage, and the object rules determine what that damage accomplishes.'
				},
				{
					type: 'paragraph',
					content:
						'A metal lock, reinforced door, stone wall, weapon, or similar sturdy object can therefore remain completely unharmed if its hardness absorbs the spell’s full damage. Describing the effect as acid does not override the numerical durability rules.'
				},
				{
					type: 'paragraph',
					content:
						'The DM can still apply other rules where appropriate, such as special vulnerability to a particular attack, but that is separate from Acid Splash’s basic effect. The spell itself does not grant a universal “melt object” ability.'
				}
			]
		},
		{
			id: 'attacking-held-or-worn-objects',
			title: 'Held and worn objects can be more complicated',
			blocks: [
				{
					type: 'paragraph',
					content:
						'An unattended object is usually simpler to attack because it is not being actively protected by another creature. Objects have their own Armor Class rules, and stationary objects can be much easier to hit than creatures.'
				},
				{
					type: 'paragraph',
					content:
						'A carried, held, worn, or otherwise protected object can involve additional combat rules. The fact that Acid Splash can damage objects does not automatically let the caster ignore the normal procedures for attacking an item that another creature possesses.'
				},
				{
					type: 'paragraph',
					content:
						'If the attempt is legal and the object is successfully hit, its hardness and hit points still determine the result. Acid damage does not cause the item to bypass those object defenses simply because it is being carried by someone.'
				}
			]
		},
		{
			id: 'can-acid-splash-critically-hit-an-object',
			title: 'Can Acid Splash critically hit an object?',
			blocks: [
				{
					type: 'paragraph',
					content:
						'No. Although Acid Splash can normally score a critical hit against a creature because it uses an attack roll, the object rules state that objects are immune to critical hits.'
				},
				{
					type: 'paragraph',
					content:
						'That means a natural 20 on an Acid Splash attack against an object does not create the normal extra damage associated with a critical hit. The successful attack still deals its ordinary acid damage before hardness is applied.'
				},
				{
					type: 'paragraph',
					content:
						'This is another example of why the target type matters. The same spell attack can interact differently with a creature and an object because the object-damage rules introduce immunities and durability mechanics that creatures do not normally use.'
				}
			]
		},
		{
			id: 'why-edition-matters',
			title: 'Why the edition matters',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Questions about using Acid Splash on doors, locks, ropes, weapons, and other objects often produce conflicting answers because players are discussing different editions of Dungeons & Dragons.'
				},
				{
					type: 'paragraph',
					content:
						'The D&D 3.5e spell uses a ranged touch attack and is not restricted to creature targets in the same way some later spell versions are. The edition’s object-damage rules also define how acid interacts with hardness and hit points.'
				},
				{
					type: 'paragraph',
					content:
						'For that reason, a ruling quoted from 5e, 2024 rules, or another edition should not automatically be used for the 3.5e version. Use the spell entry and object rules belonging to the edition being played.'
				}
			]
		}
	]
} as const;

export default question;

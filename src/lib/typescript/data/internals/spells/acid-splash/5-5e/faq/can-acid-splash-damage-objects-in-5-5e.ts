export const question = {
	slug: 'can-acid-splash-damage-objects-in-5-5e',

	question: 'Can Acid Splash damage objects in D&D 5.5e?',

	shortAnswer:
		'Not by its normal written damage effect. The 2024 version of Acid Splash creates a 5-foot-radius Sphere at a point within range, but its damage rule applies to each creature in that Sphere. Objects are not included in that damage instruction. Choosing a point on or near an object therefore does not automatically make the object take Acid Splash damage, although a DM can still allow situational environmental effects as an adjudication.',

	introduction:
		'The 2024 rewrite changes Acid Splash from direct creature targeting to a point-based area, which can make object interactions look less obvious than they were in 2014. Being able to place the Sphere at a point near an object does not automatically make every object in the area a damage recipient.\n\nThe spell still specifies what inside the area actually resolves the Dexterity save and damage: creatures.',

	sections: [
		{
			id: 'the-origin-can-be-near-an-object',
			title: 'The point of origin can be near an object',
			blocks: [
				{ type: 'paragraph', content: 'Acid Splash asks the caster to create its acidic bubble at a point within range. A point can be located near a door, chest, lock, wall, rope, weapon, or other object.' },
				{ type: 'paragraph', content: 'That determines where the 5-foot-radius Sphere appears. It does not by itself change the list of things that the spell’s damage instruction affects.' },
				{ type: 'paragraph', content: 'Point placement and damage eligibility are therefore separate questions. A legal point of origin does not mean every object touching the Sphere takes damage.' }
			]
		},
		{
			id: 'the-damage-rule-refers-to-creatures',
			title: 'The damage rule applies to creatures in the Sphere',
			blocks: [
				{ type: 'paragraph', content: 'The 2024 Acid Splash rule requires each creature in the Sphere to make a Dexterity saving throw. A failed save causes that creature to take the acid damage.' },
				{ type: 'paragraph', content: 'Objects are not instructed to make a save and are not given an automatic damage result. The spell also lacks separate wording saying that unattended objects, structures, or surfaces take the acid damage.' },
				{ type: 'paragraph', content: 'The normal written result is therefore creature damage only, despite the fact that the spell creates an acid-themed area around the chosen point.' }
			]
		},
		{
			id: 'acid-damage-is-not-general-object-permission',
			title: 'Acid damage is not general permission to damage objects',
			blocks: [
				{ type: 'paragraph', content: 'The Acid damage type describes the kind of damage dealt to valid recipients. It does not create a universal rule that every acid effect automatically corrodes every nearby object.' },
				{ type: 'paragraph', content: 'Some spells and game effects explicitly mention objects or structures when they can affect them. Acid Splash contains no equivalent object-damage instruction.' },
				{ type: 'paragraph', content: 'This keeps the spell’s written mechanics distinct from narrative expectations about real-world acid. The latter can still inform a DM ruling without becoming part of the default spell stat block.' }
			]
		},
		{
			id: 'the-dm-can-adjudicate-environmental-effects',
			title: 'A DM can still adjudicate environmental effects',
			blocks: [
				{ type: 'paragraph', content: 'A DM can decide that a particular use of magical acid reasonably affects a fragile or unusual object in the environment. That is part of normal table adjudication.' },
				{ type: 'paragraph', content: 'Such a decision does not mean Acid Splash gains a general rule for damaging every door, wall, weapon, lock, or other object whenever they fall inside the Sphere.' },
				{ type: 'paragraph', content: 'D&D Portal should therefore present the base answer as creature-only damage while clearly separating optional environmental rulings from the published spell mechanics.' }
			]
		}
	]
} as const;

export default question;

import { createBasicClass, link, text } from '$lib/typescript/data/internals/classes/_basic-class';

export const data = {
	name: 'Messenger',
	slug: 'messenger',
	role: 'Mobile envoy',
	source: 'The Lord of the Rings Roleplaying, published by Free League',
	primaryAbility: [
		link('internals.rules.abilityScores.dexterity', 'Dexterity'),
		text(' or '),
		link('internals.rules.abilityScores.charisma', 'Charisma')
	],
	hitDie: 'd8',
	armor: [text('Light armor')],
	weapons: [text('Simple weapons and finesse weapons')],
	tools: [text('One vehicle, language, or social tool suited to travel')],
	savingThrows: [
		link('internals.rules.abilityScores.dexterity', 'Dexterity'),
		text(', '),
		link('internals.rules.abilityScores.charisma', 'Charisma')
	],
	skills: [text('Choose travel, social, stealth, and perception skills.')],
	description: 'A fast-moving envoy who survives by speed, information, route knowledge, and sharp negotiation.',
	longDescription: [
		[
			text(
				'Messengers are specialists in reaching places others cannot, carrying information through danger, and staying alive on hostile roads.'
			)
		],
		[
			text(
				'The class leans into mobility, contacts, observation, and practical problem solving rather than standing still in a fair fight.'
			)
		],
		[
			text(
				'In a party, a Messenger is a scout, face, courier, and escape planner who turns distance and information into advantage.'
			)
		]
	],
	features: [
		{
			level: 1,
			title: 'Folk-lore',
			description: [text('Use the published Folk-lore feature to represent knowledge gained from travelling between different peoples and settlements.')]
		},
		{
			level: 1,
			title: 'Tireless and Swift',
			description: [
				text('Improve travel endurance and '),
				link('internals.rules.movement.speed', 'movement'),
				text(' according to the published calling rules.')
			]
		},
		{
			level: 1,
			title: 'Unarmoured Defence',
			description: [text('While meeting the equipment restrictions, calculate AC using Dexterity and Charisma.')]
		},
		{
			level: 2,
			title: 'Sneak Attack',
			description: [text('Deal the published once-per-turn extra damage when the qualifying attack and positioning requirements are met.')]
		},
		{
			level: 2,
			title: 'Virtues / Crafts',
			description: [text('Choose the published Virtues or Crafts that customise the Messenger calling.')]
		},
		{
			level: 3,
			title: 'Errand Runner',
			description: [text('Apply the published broad-experience bonus to qualifying ability checks where full proficiency does not already apply.')]
		},
		{
			level: 3,
			title: 'Messenger Path',
			description: [text('Choose the Counsellor or Herald Messenger Path.')]
		},
		{
			level: 5,
			title: 'Uncanny Dodge',
			description: [text('Use the published reaction-based defense to reduce qualifying attack damage.')]
		}
	],
	tags: ['mobility', 'social', 'exploration', 'dexterity']
};

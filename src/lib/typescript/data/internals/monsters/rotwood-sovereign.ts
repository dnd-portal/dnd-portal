import { createInternalPage } from '../_helpers_';

export type MonsterAction = {
	name: string;
	description: string;
	usage?: string;
};

export type MonsterEntry = {
	slug: string;
	pagePath: string;
	name: string;
	alternativeName: string;
	type: string;
	size: string;
	alignment: string;
	ruleset: string;
	contentType: string;
	world: string;
	challengeRating: string;
	xp: string;
	role: string;
	artwork: { src: string; alt: string };
	description: string;
	armorClass: string;
	hitPoints: string;
	speed: string;
	proficiencyBonus: string;
	abilities: readonly { name: string; score: number; modifier: string }[];
	savingThrows: readonly string[];
	skills: readonly string[];
	damageResistances: string;
	damageVulnerabilities: string;
	conditionImmunities: string;
	senses: string;
	languages: string;
	traits: readonly MonsterAction[];
	actions: readonly MonsterAction[];
	legendaryActions: readonly MonsterAction[];
	bossMechanic: readonly MonsterAction[];
	encounterInformation: readonly { label: string; value: string }[];
};

export const rotwoodSovereignPage = createInternalPage({
		href: '/monsters/the-rotwood-sovereign/',
	title: 'D&D Portal Wiki - The Rotwood Sovereign',
	subTitle: 'Homebrew Monster',
	label: 'The Rotwood Sovereign',
	description: 'The Rotwood Sovereign (De Verdorven Woudheerser), a Gargantuan chaotic evil plant and Eldor boss monster.',
	img: { href: '/icons/white/game/monster.svg', alt: 'Monster icon representing The Rotwood Sovereign.' },
	navigation: { parent: 'internals.monsters.page' },
	tags: ['plant', 'gargantuan', 'CR 10', 'homebrew', 'eldor']
});

export const rotwoodSovereign: MonsterEntry = {
	slug: 'the-rotwood-sovereign', pagePath: 'internals.homebrew.eldor.monsters.rotwoodSovereign',
	name: 'The Rotwood Sovereign', alternativeName: 'De Verdorven Woudheerser', world: 'Eldor',
	type: 'Plant', size: 'Gargantuan', alignment: 'Chaotic Evil', ruleset: 'D&D 5e (2014)', contentType: 'Homebrew',
	challengeRating: '10', xp: '5,900 XP', role: 'Boss Monster',
	artwork: { src: '/images/homebrew/eldor/monsters/Rotwood-Sovereign.webp', alt: 'The Rotwood Sovereign looming among corrupted forest roots.' },
	description: 'Deep in cursed forests, ancient tree spirits lie buried. When a forest is tainted by necromantic magic, its guardian slowly becomes a predator. The Rotwood Sovereign feeds on living creatures and uses their bodies to strengthen its roots. Its body consists of enormous twisted branches, corrupted wooden limbs, ancient roots, dark moss, and decaying bark. Two glowing amber eyes illuminate its monstrous face.',
	armorClass: '17 (Natural Armor)', hitPoints: '297 (18d20 + 108)', speed: '30 ft.', proficiencyBonus: '+4',
	abilities: [
		{ name: 'STR', score: 24, modifier: '+7' }, { name: 'DEX', score: 8, modifier: '-1' },
		{ name: 'CON', score: 22, modifier: '+6' }, { name: 'INT', score: 10, modifier: '+0' },
		{ name: 'WIS', score: 16, modifier: '+3' }, { name: 'CHA', score: 12, modifier: '+1' }
	],
	savingThrows: ['Strength +11', 'Constitution +10', 'Wisdom +7'], skills: ['Perception +7', 'Stealth +3 (in forests)'],
	damageResistances: 'Necrotic; bludgeoning and piercing from nonmagical attacks', damageVulnerabilities: 'Fire',
	conditionImmunities: 'Charmed, frightened, poisoned', senses: 'Darkvision 120 ft., tremorsense 60 ft., passive Perception 17',
	languages: 'Understands Common, Druidic, and Sylvan, but cannot speak.',
	traits: [
		{ name: 'False Appearance', description: 'While the Rotwood Sovereign remains motionless, it is indistinguishable from an enormous dead tree.' },
		{ name: 'Grasping Forest', description: 'The ground within 20 feet of the Sovereign is difficult terrain for hostile creatures. The Sovereign ignores this effect.' },
		{ name: 'Regeneration', description: 'The Sovereign regains 10 HP at the start of its turn if it has at least 1 HP. Taking fire damage prevents this regeneration at the start of its next turn.' },
		{ name: 'Siege Monster', description: 'The Sovereign deals double damage to objects and structures.' }
	],
	actions: [
		{ name: 'Multiattack', description: 'The Sovereign makes two Root Slam attacks.' },
		{ name: 'Root Slam', description: 'Melee Weapon Attack: +11 to hit, reach 15 ft., one creature. Hit: 20 (3d8 + 7) bludgeoning damage.' },
		{ name: 'Thorn Impalement', usage: 'Recharge 5–6', description: 'The Sovereign causes enormous thorns to erupt from the ground in a 20-foot-radius circle centered on a point it can see within 90 feet. Each creature in the area must make a DC 18 Dexterity saving throw. Failed Save: 27 (6d8) piercing damage and Restrained. Successful Save: Half damage and not Restrained. A Restrained creature can use its action to attempt a DC 18 Strength (Athletics) check, ending the condition on a success. The thorns disappear after 1 minute.' },
		{ name: 'Devouring Roots', description: 'The Sovereign targets one creature Restrained by its Thorn Impalement within 60 feet. The target takes 18 (4d8) necrotic damage. The Sovereign regains HP equal to the damage dealt.' }
	],
	legendaryActions: [
		{ name: 'Root Strike — Cost: 1 Action', description: 'The Sovereign makes one Root Slam attack.' },
		{ name: 'Creeping Roots — Cost: 1 Action', description: 'The Sovereign moves up to half its speed without provoking opportunity attacks.' },
		{ name: "Forest's Wrath — Cost: 2 Actions", description: 'Each hostile creature within 15 feet must succeed on a DC 18 Strength saving throw or take 13 (3d8) bludgeoning damage and fall Prone.' }
	],
	bossMechanic: [
		{ name: 'Trigger', description: 'When the Rotwood Sovereign drops below half its maximum HP for the first time, its trunk cracks open and reveals a glowing corrupted wooden heart.' },
		{ name: 'Rot Aura', description: 'Every hostile creature that starts its turn within 10 feet of the Sovereign takes 5 necrotic damage.' },
		{ name: 'Enraged Roots', description: 'Root Slam deals an additional 1d8 necrotic damage.' },
		{ name: 'Weak Point', description: 'A creature within 15 feet can target the exposed heart. Heart: AC 15, 40 HP, a separate target that does not benefit from the Sovereign’s damage resistances or regeneration. When destroyed, the Sovereign permanently loses Regeneration, Rot Aura, and Enraged Roots, but remains alive until its normal HP reaches zero.' }
	],
	encounterInformation: [
		{ label: 'Recommended Party', value: '4–5 adventurers, approximately levels 9–11.' }, { label: 'Encounter Type', value: 'Boss Encounter.' },
		{ label: 'Environment', value: 'Corrupted forests, ancient groves, abandoned woodland shrines.' },
		{ label: 'Difficulty Note', value: 'CR 10 is provisional and has not been formally playtested or balanced against the custom abilities.' },
		{ label: 'Dungeon Master Tip', value: 'At first, let the players mistake it for a dead forest. When someone steps onto the path, two glowing eyes open among the roots and the surrounding trees slowly begin to move.' }
	]
};

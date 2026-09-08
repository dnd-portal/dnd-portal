import type { LinkPath, PagePath } from '$lib/typescript/data/_index_';
import { getPageLabel } from './currentPage';

export type FaqItem = {
	readonly question: string;
	readonly answer: string;
	readonly reference: LinkPath;
	readonly referenceLabel: string;
	readonly faqPath?: LinkPath;
	readonly faqLabel?: string;
};

function item(question: string, reference: PagePath, answer: string, faqPath?: LinkPath): FaqItem {
	return {
		question,
		answer,
		reference,
		referenceLabel: getPageLabel(reference),
		...(faqPath ? { faqPath, faqLabel: question } : {})
	};
}

function label(path: PagePath): string {
	return getPageLabel(path);
}

export function getFaqItems(path: PagePath | null): readonly FaqItem[] {
	if (!path) return [];

	if (path === 'internals.classes.page') {
		return [
			item('What are the classes in D&D?', path, 'D&D classes define a character’s core abilities, progression, and role in a party.'),
			item('Which D&D class is best for beginners?', path, 'The best starting class depends on how complex you want your first character to be and what role you want to play.'),
			item('How do I choose a class in D&D?', path, 'Choose a class by matching its play style, primary abilities, and class features to the kind of character you want to play.'),
			item('What is the difference between D&D classes and subclasses?', path, 'A class provides the main character progression; a subclass adds a more specialised identity and feature path.'),
			item('Can you have more than one class in D&D?', path, 'Yes. Multiclassing lets a character take levels in more than one class when the character meets the relevant requirements.')
		];
	}

	if (path.startsWith('internals.classes.') && path.endsWith('.page')) {
		const className = label(path);
		const classQuestions = [
			[`What is a ${className} in D&D?`, `${className} is a D&D class with its own role, progression, core traits, and class features.`],
			[`How do you play a ${className}?`, `Playing a ${className} means using its core features and primary ability scores to fulfil its role during exploration and combat.`],
			[`What ability scores are best for a ${className}?`, `The important ability scores for a ${className} are determined by its class features, attack options, spellcasting, and progression.`],
			[`What are the main ${className} class features?`, `The ${className} class page lists the class features gained at each level and explains how they work.`],
			[`What subclasses can a ${className} choose?`, `Subclasses expand the identity of a ${className} by adding a specialised feature path to the base class.`]
		];

		return classQuestions.map(([question, answer], index) =>
			item(question, path, answer)
		);
	}

	if (path.includes('.subclasses.')) {
		const subclassName = label(path);
		return [
			item(`What is the ${subclassName} subclass?`, path, `${subclassName} is a specialised subclass option that builds on the features and progression of its parent class.`),
			item(`How does the ${subclassName} subclass work?`, path, `The ${subclassName} subclass changes the character’s play style through its own feature progression.`),
			item(`What features does a ${subclassName} get?`, path, `The subclass page lists the features gained by a ${subclassName} and explains their effects.`),
			item(`Is ${subclassName} a good subclass?`, path, `Whether ${subclassName} is a good choice depends on the role, abilities, and play style you want for the character.`),
			item(`How do you play a ${subclassName}?`, path, `Use the subclass features to specialise the normal class play pattern and support the role you chose.`)
		];
	}

	if (path === 'internals.spells.page') {
		return [
			item('How do spells work in D&D?', path, 'Spells use defined casting rules for time, range, components, duration, targets, and effects.'),
			item('How do spell slots work?', path, 'Spell slots are the resource many spellcasters spend to cast leveled spells.'),
			item('How do you learn or prepare spells?', path, 'A character’s class determines whether spells are known, prepared, or otherwise available to cast.'),
			item('What are the different spell levels?', path, 'Spell levels describe the increasing power and resource cost of leveled spells, from 1st through 9th level.'),
			item('What is the difference between a spell and a cantrip?', path, 'Cantrips are spells that can be cast without spending a spell slot.')
		];
	}

	if (path.startsWith('internals.rules.')) {
		const ruleName = label(path);
		return [
			item(`What is ${ruleName} in D&D?`, path, `${ruleName} is a rules reference that explains one part of character creation, exploration, combat, or spellcasting.`),
			item(`How does ${ruleName} work?`, path, `The ${ruleName} page explains the rule, its requirements, and the result during play.`),
			item(`How do you use ${ruleName} during play?`, path, `Use the ${ruleName} rules when the situation described on the page occurs during a game.`)
		];
	}

	if (path === 'internals.species.page') {
		return [
			item('What are species in D&D?', path, 'A species provides physical, cultural, and character options that shape a player character.'),
			item('How do you choose a species for your character?', path, 'Choose a species by considering its traits, features, story, and how they fit the character you want to play.'),
			item('What abilities do D&D species give you?', path, 'Species can provide traits, movement options, senses, proficiencies, spells, and other character features.'),
			item("Does your species affect your character's class?", path, 'A species and class are separate choices, but species traits can complement a class’s abilities and play style.'),
			item('What is the best species for a new D&D player?', path, 'The best species is the one whose traits and concept fit the character you want to play and understand.')
		];
	}

	if (path === 'internals.monsters.page') {
		return [
			item('What are monsters in D&D?', path, 'Monsters are creatures controlled by the DM that can challenge, help, or interact with player characters.'),
			item('How do monster stat blocks work?', path, 'A monster stat block summarises its statistics, actions, traits, movement, defenses, and other encounter rules.'),
			item('What is Challenge Rating in D&D?', path, 'Challenge Rating is a guide for comparing a monster’s difficulty with the level and number of characters in an encounter.'),
			item('How do you choose monsters for an encounter?', path, 'Choose monsters by considering the party’s level, number of characters, encounter difficulty, environment, and desired story.'),
			item('What do monster resistances and immunities mean?', path, 'Resistance reduces certain damage, while immunity prevents the specified damage or effect from working normally.')
		];
	}

	if (path === 'internals.equipment.page') {
		return [
			item('How does equipment work in D&D?', path, 'Equipment gives characters weapons, armor, tools, supplies, and other objects used during adventures.'),
			item('What weapons can characters use?', path, 'Characters can use weapons they are proficient with and that fit their equipment options and class features.'),
			item('How does armor affect Armor Class?', path, 'Armor sets or contributes to Armor Class according to its category, base value, and Dexterity rules.'),
			item('How does weapon and armor Proficiency work?', path, 'Proficiency lets a character use the relevant equipment without the penalties that apply when they lack training.'),
			item('How much does equipment cost?', path, 'Equipment costs depend on the item, its category, and the prices recorded in the equipment references.')
		];
	}

	return [];
}

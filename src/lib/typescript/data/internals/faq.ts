import * as core from '../core/_index_';
import { createInternalPage } from './_helpers_';
import { barbarianFaq } from './classes/barbarian/faq/_index_';
import { bardFaq } from './classes/bard/faq/_index_';
import { artificerFaq } from './classes/artificer/faq/_index_';
import { bloodHunterFaq } from './classes/blood-hunter/faq/_index_';
import { clericFaq } from './classes/cleric/faq/_index_';
import { druidFaq } from './classes/druid/faq/_index_';
import { fighterFaq } from './classes/fighter/faq/_index_';
import { monkFaq } from './classes/monk/faq/_index_';
import { paladinFaq } from './classes/paladin/faq/_index_';
import { pugilistFaq } from './classes/pugilist/faq/_index_';
import { rangerFaq } from './classes/ranger/faq/_index_';
import { rogueFaq } from './classes/rogue/faq/_index_';
import { rogueSubclassFaqGroups } from './classes/rogue/subclasses/_faq-index_';
import { shinobiFaq } from './classes/shinobi/faq/_index_';
import { shinobiSubclassFaqGroups } from './classes/shinobi/subclasses/_faq-index_';
import { sorcererFaq } from './classes/sorcerer/faq/_index_';
import { warlockFaq } from './classes/warlock/faq/_index_';
import { wizardFaq } from './classes/wizard/faq/_index_';
import { scholarFaq } from './classes/scholar/faq/_index_';
import { treasureHunterFaq } from './classes/treasure-hunter/faq/_index_';
import { vanguardFaq } from './classes/vanguard/faq/_index_';
import { captainFaq } from './classes/captain/faq/_index_';
import { championFaq } from './classes/champion/faq/_index_';
import { gunslingerFaq } from './classes/gunslinger/faq/_index_';
import { illriggerFaq } from './classes/illrigger/faq/_index_';
import { monsterHunterFaq } from './classes/monster-hunter/faq/_index_';
import { wardenFaq } from './classes/warden/faq/_index_';
import { messengerFaq } from './classes/messenger/faq/_index_';
import { barbarianSubclassFaqGroups } from './classes/barbarian/subclasses/_faq-index_';
import { clericSubclassFaqGroups } from './classes/cleric/subclasses/_faq-index_';
import { monstersFaq } from './monsters/faq/_index_';
import { movementFaq } from './rules/movement/faq/_index_';
import { spellsFaq } from './spells/faq/_index_';
import { equipmentFaq } from './equipment/faq/_index_';
import { classesFaq } from './classes/faq/_index_';
import { rulesFaq } from './rules/faq/_index_';
import { speciesFaq } from './species/faq/_index_';
import { humanFaq } from './faq-groups/human/_index_';
import { elfFaq } from './faq-groups/elf/_index_';
import { astralElfFaq } from './faq-groups/astral-elf/_index_';
import { fightingFaq } from './faq-groups/fighting/_index_';

export type FaqContentBlock =
	| { readonly type: 'paragraph'; readonly content: string }
	| { readonly type: 'list'; readonly items: readonly string[] };
export type FaqSection = {
	readonly title: string;
	readonly paragraphs: readonly string[];
	readonly blocks?: readonly FaqContentBlock[];
};
export type FaqProvenance = {
	readonly pageType?: string;
	readonly parentPage?: string;
	readonly rulesBasis?: string;
	readonly sourceContext?: readonly string[];
	readonly publicationContext?: readonly string[];
	readonly specializationTerm?: string;
};
export type FaqQuestion = {
	readonly slug: string;
	readonly question: string;
	readonly shortAnswer: string;
	readonly fullAnswer: { readonly introduction: string; readonly sections: readonly FaqSection[] };
};
export type FaqGroup = {
	readonly slug: string;
	readonly title: string;
	readonly description: string;
	readonly sourcePage?: string;
	readonly provenance?: FaqProvenance;
	readonly questions: readonly FaqQuestion[];
};

const website = core.internals.website;
const faqParent = 'internals.utility.faq';
const section = (title: string, ...paragraphs: string[]): FaqSection => ({ title, paragraphs });

const baseFaqGroups = [
	{
		slug: 'barbarian', title: 'Barbarian',
		description: 'Frequently asked questions about the Barbarian class.',
		sourcePage: 'internals.classes.barbarian.page',
		questions: [
			{ slug: 'what-is-barbarian-in-dnd', question: 'What is a Barbarian in D&D?', shortAnswer: 'A Barbarian is a martial class built around primal power, Rage, durability, and close-range pressure.', fullAnswer: { introduction: 'The Barbarian is a front-line martial class that turns primal force into resilience and melee pressure.', sections: [section('Class identity', 'Barbarians are designed to survive dangerous fights while staying close to enemies.'), section('How the class plays', 'A Barbarian contributes by reaching important targets, absorbing pressure, and using class features when a fight demands it.')] } },
			{ slug: 'how-to-play-barbarian-in-dnd', question: 'How do you play a Barbarian in D&D?', shortAnswer: 'Play a Barbarian as a durable front-line warrior: enter important fights, stay mobile, and use Rage and class features to pressure enemies.', fullAnswer: { introduction: 'A Barbarian is most effective when it controls space near the party’s most important targets.', sections: [section('Your role', 'Move toward threats that could reach vulnerable allies.'), section('Practical turn planning', 'Identify the important target, decide whether Rage is worth using, and keep enough movement to stay relevant after the first attack.')] } },
			{ slug: 'how-does-rage-work-for-a-barbarian', question: 'How does Rage work for a Barbarian?', shortAnswer: 'Rage is the Barbarian’s signature combat feature. It improves the class’s ability to endure and apply physical pressure while it lasts.', fullAnswer: { introduction: 'Rage defines the Barbarian’s combat rhythm: choose the right moment, commit to the fight, and use its benefits before it ends.', sections: [section('What Rage changes', 'Rage supports the Barbarian’s durability and melee identity. The exact benefits and limits are listed in the Barbarian class feature data.'), section('When to use Rage', 'Use Rage when the encounter is important enough to justify the resource and when you expect to remain involved.'), section('Common misunderstanding', 'Rage is a class mechanic with defined activation, duration, resource, and ending rules; it is not merely a description of anger.')] } },
			{ slug: 'what-is-the-hit-dice-for-barbarian-in-dnd', question: 'What is the Hit Die for a Barbarian?', shortAnswer: 'A Barbarian uses a d12 Hit Die: 12 hit points plus Constitution at 1st level, then 1d12 or a fixed 7 plus Constitution at later levels.', fullAnswer: { introduction: 'A Barbarian uses a d12 Hit Die, written as 1d12 per Barbarian level.', sections: [section('Hit points', 'At 1st level, the Barbarian starts with 12 plus the Constitution modifier. At higher levels, each Barbarian level adds 1d12 or the fixed average of 7, plus Constitution.'), section('Resting and multiclassing', 'A d12 is also the die spent during short-rest healing. When multiclassing, each class contributes its own Hit Die type; a Barbarian level adds a d12 rather than converting other class dice.'), section('Terminology', 'Hit Die is singular for one die type. Hit Dice is plural for the collection gained from levels and available for short-rest recovery.')] } },
			{ slug: 'what-ability-scores-are-best-for-a-barbarian', question: 'What ability scores are best for a Barbarian?', shortAnswer: 'Strength and Constitution are central to the Barbarian’s class identity; the final priority depends on the build and subclass.', fullAnswer: { introduction: 'Barbarian ability-score priorities should follow the attacks, defenses, and features used by the build.', sections: [section('Strength', 'Strength supports the Barbarian’s physical attacks and close-range play pattern.'), section('Constitution', 'Constitution supports the durability expected from a character who holds dangerous positions.'), section('Build choices', 'A subclass or weapon choice can change the order of secondary ability scores.')] } },
			{ slug: 'what-subclasses-can-a-barbarian-choose', question: 'What subclasses can a Barbarian choose?', shortAnswer: 'Barbarian subclasses add a specialised feature path to the base class, such as a different source or expression of primal power.', fullAnswer: { introduction: 'A Barbarian subclass gives the character a distinct identity while keeping the core Barbarian progression.', sections: [section('Choosing a path', 'Choose according to the story and combat role you want.'), section('Interaction with the class', 'Subclass features are layered onto the base Barbarian features and do not replace core progression unless a feature says so.')] } }
		]
	},
	{
		slug: 'messenger', title: 'Messenger',
		description: 'Frequently asked questions about the Messenger calling from The Lord of the Rings Roleplaying, published by Free League.',
		sourcePage: 'internals.classes.messenger.page',
		questions: [
			{ slug: 'what-is-the-messenger-class-in-dnd', question: 'What is the Messenger class in D&D?', shortAnswer: 'The Messenger is a mobile envoy calling from The Lord of the Rings Roleplaying, published by Free League, focused on travel, information, route knowledge, negotiation, and escaping danger.', fullAnswer: { introduction: 'The Messenger is a published calling from The Lord of the Rings Roleplaying by Free League.', sections: [section('Class identity', 'The Messenger survives through speed, contacts, observation, and practical problem solving.'), section('Party role', 'It can act as scout, face, courier, and escape planner.')] } },
			{ slug: 'how-do-you-play-a-messenger', question: 'How do you play a Messenger?', shortAnswer: 'Use mobility, route knowledge, contacts, observation, and negotiation to reach objectives and keep the party mobile.', fullAnswer: { introduction: 'The Messenger is strongest when an adventure rewards movement, information, and changing position.', sections: [section('Exploration', 'Scout routes, identify safe movement options, carry information, and use travel skills.'), section('Combat', 'Use speed and positioning to reach the right place, support an ally, or create an escape route.')] } },
			{ slug: 'what-ability-scores-are-best-for-a-messenger', question: 'What ability scores are best for a Messenger?', shortAnswer: 'Dexterity and Charisma are the Messenger’s primary abilities in the current class data.', fullAnswer: { introduction: 'The Messenger data explicitly identifies Dexterity or Charisma as its primary ability choice.', sections: [section('Dexterity', 'Dexterity supports speed, mobility, stealth, perception, and survival while moving through danger.'), section('Charisma', 'Charisma supports negotiation, contacts, social tools, and the envoy role.'), section('Build direction', 'Prioritise Dexterity for mobility or Charisma for social and negotiation play.')] } },
			{ slug: 'what-are-the-main-messenger-class-features', question: 'What are the main Messenger class features?', shortAnswer: 'The Messenger’s main features are Folk-lore, Tireless and Swift, Unarmoured Defence, Virtues or Crafts, Sneak Attack, Errand Runner, a Messenger Path, and Uncanny Dodge. Together they create a fast, broadly skilled traveller who can contribute precise damage, survive through positioning and reactions, and specialise as either a Counsellor or Herald.', fullAnswer: { introduction: 'The Messenger does not revolve around one single class resource. Its identity comes from features supporting travel, versatility, communication, and mobility across a ten-level calling progression.', sections: [section('1st level: Folk-lore', 'Folk-lore represents the experience a Messenger gains by travelling between different peoples and settlements. It reflects knowledge of customs, stories, local expectations, and the communities encountered on the road. Its exact mechanical effect comes from the published calling data; its practical value is strongest during exploration, social encounters, journeys, and adventures involving unfamiliar communities.'), section('1st level: Tireless and Swift', 'Tireless and Swift establishes mobility and endurance as major parts of the Messenger identity. The movement and journey benefits in the calling data let a Messenger reach useful positions, move between allies, reach cover, create opportunities for Sneak Attack, and remain effective during journeys. Increased movement is not merely flavour: positioning is one of the Messenger’s mechanical strengths.'), section('1st level: Unarmoured Defence', 'While satisfying the equipment restrictions, the Messenger can calculate Armor Class as 10 + Dexterity modifier + Charisma modifier. Dexterity supports attacks, initiative, saving throws, skills, and mobility, while Charisma supports the Messenger’s envoy role and also contributes directly to defense. Unarmoured Defence is an option; it does not require every Messenger to ignore armor or shields.'), section('2nd level: Sneak Attack', 'Sneak Attack rewards making one useful, accurate attack rather than acting as a heavy front-line damage dealer. It applies once per turn when the qualifying attack and positioning requirements from the published rules are met. This makes target selection, allies, weapon choice, and movement important decisions.'), section('Virtues and Crafts', 'Virtues and Crafts provide customization within The Lord of the Rings Roleplaying progression. They let different Messengers develop different strengths beyond the fixed calling features. Exact choices and restrictions should follow the published progression rather than a generic feat system.'), section('3rd level: Errand Runner', 'Errand Runner represents broad practical experience from a life of travel. Where the Messenger does not already have full proficiency, the feature improves the relevant ability check using the portion of the proficiency bonus specified by the source. This lets a Messenger contribute outside a narrow list of specialist skills without inventing a new proficiency or changing the check’s normal ability.'), section('3rd level: Messenger Path', 'At 3rd level the Messenger chooses a Messenger Path: Counsellor or Herald. Counsellor develops advice, social interaction, councils, helping allies, and communication. Herald develops martial leadership, broader weapon and armor capability where supported, Fighting Style, initiative improvements, and Extra Attack at the appropriate later level. Both paths retain the core Messenger identity.'), section('5th level: Uncanny Dodge', 'When the verified trigger occurs, Uncanny Dodge lets the Messenger use a reaction to reduce qualifying attack damage. Seeing the attacker matters where the rule requires it, and the reaction cost matters because another reaction cannot be used at the same time. The feature gives selective defense when movement and positioning do not prevent a hit.'), section('How the features work together', 'Tireless and Swift improves positioning; better positioning creates useful Sneak Attack opportunities; Dexterity supports attacks and Unarmoured Defence; Charisma supports interaction and also contributes to Unarmoured Defence; Errand Runner broadens usefulness outside specialised skills; Uncanny Dodge provides selective defense; Virtues and Crafts customise the calling; and the Counsellor or Herald choice determines which side of the Messenger becomes dominant. The result is a versatile travelling specialist rather than a class defined by one repeating combat button.')] } },
			{ slug: 'what-subclasses-can-a-messenger-choose', question: 'What subclasses can a Messenger choose?', shortAnswer: 'A Messenger chooses one of two Messenger Paths at 3rd level: Counsellor or Herald. Counsellor specialises in advice, social expertise, councils, and helping allies, while Herald adds martial capability, a Fighting Style, initiative improvements, and Extra Attack at the appropriate level.', fullAnswer: { introduction: 'A Messenger chooses a Messenger Path at 3rd level. The published options used by this Wiki are Counsellor and Herald.', sections: [section('Counsellor', 'Counsellor represents the Messenger as an advisor, negotiator, and trusted voice. Its path features improve social expertise, Charisma checks, councils, and the Help action.'), section('Herald', 'Herald represents a Messenger whose words are backed by martial leadership. Its path features support broader martial capability, a Fighting Style, initiative improvements, and Extra Attack at the appropriate level.'), section('Choosing a path', 'Choose Counsellor when advice, negotiation, and support are the focus. Choose Herald when the Messenger should retain its travel and skill foundation while becoming more capable in direct weapon combat. Neither path replaces the base Messenger identity.')] } }
		]
	}
] as const satisfies readonly FaqGroup[];

const expandedArticles: Record<string, FaqQuestion['fullAnswer']> = {
	'messenger/what-is-the-messenger-class-in-dnd': {
		introduction: 'The Messenger is a playable calling from The Lord of the Rings Roleplaying, published by Free League and available through D&D Beyond. It represents an experienced traveller, advisor, and bearer of important news: someone accustomed to crossing long distances, dealing with different peoples, and reaching places where information or assistance is needed.',
		sections: [
			section('Core class profile', 'The Messenger is a ten-level calling rather than a standard twenty-level Player’s Handbook class. It uses a d8 Hit Die, identifies Dexterity and Charisma as its primary abilities, and is proficient in Dexterity and Charisma saving throws. The repository registers light armor, simple and finesse weapons, and the class’s travel-oriented skill and tool choices; the class page remains the authoritative reference for the exact entries.'),
			section('What makes the Messenger different', 'The class combines mobility, broad competence, social ability, precise weapon attacks, and journey-oriented features. It is not a spellcasting class and is not built around simply standing in heavy armor while trading blows. Its strength comes from being useful in changing situations and from reaching the place where its contribution matters.'),
			section('Mobility and travel', 'Tireless and Swift makes movement and endurance part of the class rather than mere description. In combat, movement can help the Messenger reach a useful enemy, move between allies, reach cover, reposition for a ranged or finesse attack, and create a better opportunity for Sneak Attack. During journeys, the same feature supports the calling’s intended life on the road; its exact progression is defined by the published class data.'),
			section('Combat role', 'A standard Messenger is best understood as a mobile skirmisher. Sneak Attack rewards a qualifying finesse or ranged weapon attack under the published positioning requirements, so target selection and movement matter more than repeatedly attacking from one fixed square. Uncanny Dodge later provides selective protection by reducing qualifying attack damage with a reaction. Herald can move the calling toward a more martial role without removing its core identity.'),
			section('Skills and practical competence', 'Errand Runner broadens the Messenger’s usefulness on ability checks where full proficiency does not already apply, using the portion of the proficiency bonus specified by the source. Folk-lore gives the calling a distinct place when knowledge of peoples, customs, stories, and traditions matters. Together these features make the class relevant during exploration, investigations, travel, councils, and encounters with unfamiliar communities without turning every check into an invented automatic success.'),
			section('Unarmoured Defence', 'When its equipment restrictions are satisfied, the Messenger can calculate Armor Class as 10 + Dexterity modifier + Charisma modifier. This makes Charisma more than a social score: it can contribute directly to defense. Dexterity supports the same character’s initiative, finesse or ranged attacks, mobility, and many useful skills. Unarmoured Defence is an option, not a command that every Messenger must ignore armor or shields.'),
			section('Virtues and Crafts', 'Virtues and Crafts provide customization within The Lord of the Rings Roleplaying progression. They allow two Messengers with the same calling and path to develop different strengths. They should be read using the published terminology and progression, not converted into a generic feat system or supplemented with options that are not in the source.'),
			section('Messenger Paths', 'At 3rd level the Messenger chooses a Messenger Path: Counsellor or Herald. Counsellor emphasizes advice, social expertise, councils, communication, and helping allies. Herald emphasizes martial leadership and the additional weapon, armor, Fighting Style, initiative, and later Extra Attack features confirmed by the path data. Neither path replaces the base mobility, skills, Sneak Attack, or journey identity.'),
			section('How the ten-level calling develops', 'The early levels establish cultural knowledge, movement, Unarmoured Defence, Sneak Attack, Virtues or Crafts, broad ability-check competence, and the Path choice. Later levels improve those systems rather than replacing them with an unrelated play style. The progression table on the Messenger page is the level-by-level authority; this article explains the milestones so the table has context.'),
			section('What the Messenger contributes', 'During exploration and journeys, movement, Folk-lore, skills, and Errand Runner support the group. During social encounters, Charisma and the envoy identity give the Messenger a meaningful role. During combat, movement and Sneak Attack reward careful positioning while Uncanny Dodge limits the cost of a mistake. The result is a flexible specialist rather than a character with only one narrow job.')
		]
	},
	'messenger/how-do-you-play-a-messenger': {
		introduction: 'Play the Messenger as a mobile specialist who turns movement, broad competence, and careful positioning into reliable contributions. The class is strongest when you plan where you need to be before choosing what to do there.',
		sections: [
			section('Start with the class foundation', 'Dexterity and Charisma are the primary abilities. Dexterity supports attacks, initiative, mobility, and defense; Charisma supports interaction and also contributes to Unarmoured Defence. The d8 Hit Die means the Messenger can survive ordinary danger, but it should not assume it can absorb every attack like a heavily armored front-line class.'),
			section('Use movement deliberately', 'Tireless and Swift makes movement part of the Messenger’s mechanical identity. Do not spend every turn walking directly toward the nearest enemy. Move to cover, preserve a route between allies, reach the objective, or create the angle needed for a qualifying Sneak Attack. Extra movement is valuable because it gives choices, not because it is damage by itself.'),
			section('Set up Sneak Attack', 'Sneak Attack rewards a qualifying finesse or ranged weapon attack when its published conditions are met. Before attacking, check the weapon, the target, your position, and whether an ally or another qualifying circumstance enables the extra damage. The feature usually makes one well-chosen attack more important than making a random attack simply because an enemy is nearby.'),
			section('Contribute outside combat', 'Folk-lore and Errand Runner support the Messenger during travel, investigations, social encounters, and unfamiliar communities. Errand Runner does not replace proficiency or change the underlying ability check; it improves the checks covered by the published feature. Use that breadth to attempt useful tasks when the party’s specialist is absent, rather than treating the feature as a reason to ignore specialists.'),
			section('Choose your Path with a purpose', 'Counsellor makes advice, communication, councils, and helping allies more central. Herald moves toward martial leadership and the additional combat tools in its path data. Both retain the base calling. Choose based on which situations you want to solve most often, not because one path erases the Messenger’s other features.'),
			section('A practical combat flow', 'At the start of an encounter, identify the objective and the enemy who matters most. Move to a position that protects your escape route or gives you a qualifying attack. Attack when the Sneak Attack conditions are satisfied, then keep enough movement to respond to a new threat. If an attack still gets through, Uncanny Dodge can reduce qualifying damage, but it costs your reaction, so compare it with any other reaction you might need.'),
			section('Common mistakes', 'A Messenger loses value by standing in the middle of danger without a reason, spending movement before deciding what position is useful, or assuming broad competence means automatic success. It is also a mistake to treat Unarmoured Defence as mandatory or to use Uncanny Dodge without considering the reaction economy. The class rewards deliberate movement and information.')
		]
	},
	'messenger/what-ability-scores-are-best-for-a-messenger': {
		introduction: 'Dexterity and Charisma are the Messenger’s primary abilities. The best final priority depends on whether the character emphasizes attacks and mobility, social expertise and the Counsellor path, or the additional martial capabilities of Herald.',
		sections: [
			section('Dexterity', 'Dexterity supports the Messenger’s common attack approach, initiative, mobility, and many physical or stealth-oriented checks. It also contributes to Unarmoured Defence. A Dexterity-focused Messenger is usually better at reaching a position, acting early, and making the attacks that interact with Sneak Attack.'),
			section('Charisma', 'Charisma supports the envoy side of the class: negotiation, advice, communication, and social interaction. It also contributes directly to the Messenger Unarmoured Defence formula, so it is not only a roleplaying preference. Counsellor builds have especially strong reasons to value it, while every Messenger should consider the defense trade-off.'),
			section('Constitution and durability', 'Constitution increases hit points and helps a character who expects to operate near danger. The d8 Hit Die is neither the smallest nor the largest class die, so Constitution can determine how much risk the Messenger can safely accept when movement does not prevent an attack.'),
			section('Practical priority', 'A common priority is to keep Dexterity and Charisma high enough to support the chosen attacks, defense, and social role, then improve Constitution for durability. Other abilities should follow the skills and campaign demands actually registered for the character. Do not lower both primary abilities merely to become broadly average; the class’s features deliberately reward the Dexterity–Charisma combination.'),
			section('Path and multiclass considerations', 'Herald may make martial capability more important, while Counsellor may make Charisma and social checks more central. Multiclass prerequisites should be checked against the actual character rules rather than inferred from the class name. The class page and source data are the authority for any prerequisite or path-specific requirement.')
		]
	},
	'messenger/what-are-the-main-messenger-class-features': {
		introduction: 'The Messenger does not revolve around one single class resource. Its identity comes from features supporting travel, versatility, communication, and mobility across a ten-level calling progression.',
		sections: [
			section('1st level: Folk-lore', 'Folk-lore represents experience gained by travelling between different peoples and settlements. It gives the Messenger a reason to matter when customs, stories, traditions, and unfamiliar communities shape an adventure. Its exact mechanical effect is defined by the published feature data; the useful lesson is to apply only that registered effect, not invent a general knowledge bonus.'),
			section('1st level: Tireless and Swift', 'Tireless and Swift establishes movement and journey endurance as mechanics. In combat, movement can reach cover, move between allies, close distance without wasting the whole turn, or create a better Sneak Attack position. On the road, its progression supports the calling’s travel identity. The feature is therefore practical positioning power, not just flavor text.'),
			section('1st level: Unarmoured Defence', 'With the equipment restrictions satisfied, Unarmoured Defence uses 10 + Dexterity modifier + Charisma modifier. Dexterity helps attacks, initiative, skills, and mobility; Charisma supports the envoy role and also raises this defense. It is a class option, so armor and equipment choices remain a real build decision.'),
			section('2nd level: Sneak Attack', 'Sneak Attack adds precise damage when the published attack, weapon, and positioning requirements are met, normally no more than once per turn. It rewards target selection and movement. The Messenger is not simply a heavy front-line damage dealer; it is trying to make one valuable attack from a useful position.'),
			section('Virtues and Crafts', 'Virtues and Crafts customize the calling beyond its fixed features. They should be selected and explained using the Lord of the Rings Roleplaying progression, not treated as a generic D&D feat list. This is one of the reasons two Messengers can feel different even before choosing different Paths.'),
			section('3rd level: Errand Runner', 'Errand Runner represents broad practical experience. Where the Messenger lacks full proficiency, it improves qualifying ability checks using the portion of the proficiency bonus specified by the source. It does not invent a new skill proficiency or guarantee success; it means the traveller can still contribute when the problem falls outside their specialist list.'),
			section('3rd level: Messenger Path', 'The Messenger chooses Counsellor or Herald. Counsellor emphasizes advice, social interaction, councils, communication, and helping allies. Herald emphasizes martial leadership and the weapon, armor, Fighting Style, initiative, and later Extra Attack features supported by the path data. Both retain the base Messenger identity.'),
			section('5th level: Uncanny Dodge', 'When its trigger is met, Uncanny Dodge uses a reaction to reduce qualifying attack damage. If the rule requires seeing the attacker, that condition matters. The reaction cost also matters because it competes with other reaction features. It is selective defense for the moments when movement and positioning did not prevent a hit.'),
			section('How the features work together', 'Tireless and Swift improves positioning; positioning creates Sneak Attack opportunities; Dexterity supports attacks and defense; Charisma supports interaction and defense; Errand Runner broadens practical usefulness; Virtues and Crafts customize the foundation; and the Path determines whether support or martial leadership becomes dominant. Together these features create a versatile travelling specialist rather than one repeating combat button.')
		]
	},
	'messenger/what-subclasses-can-a-messenger-choose': {
		introduction: 'At 3rd level, the Messenger chooses a Messenger Path. The two published options represented in this Wiki are Counsellor and Herald.',
		sections: [
			section('When the Path is chosen', 'The Path is the Messenger’s major specialization decision at 3rd level. It adds a direction to the base calling; it does not replace Tireless and Swift, Folk-lore, Sneak Attack, Errand Runner, or the other core features.'),
			section('Counsellor', 'Counsellor develops the Messenger toward advice, social expertise, councils, communication, and helping allies. The path is a natural fit when the character’s most important contributions happen in conversations, planning, and support. Use the registered path features for exact checks, actions, and restrictions rather than assuming every social interaction automatically succeeds.'),
			section('Herald', 'Herald develops the Messenger toward martial leadership. The path data supports broader martial capability, a Fighting Style, initiative improvements, and Extra Attack at the appropriate later level. This gives the Messenger a stronger direct-combat direction while keeping its movement, skill, and envoy foundation.'),
			section('Choosing between them', 'Choose Counsellor when advice, negotiation, and ally support should define the character. Choose Herald when weapon combat and leadership should take more space. Neither is simply an upgrade: they solve different problems and make different parts of the same ten-level calling more prominent.'),
			section('What both Paths retain', 'Both Paths remain Messengers. They retain the class’s travel identity, primary abilities, broad competence, Sneak Attack, and positioning tools unless a specific feature says otherwise. A Herald still carries the calling’s envoy identity, and a Counsellor still has the movement and combat tools needed to participate in danger.'),
			section('Progression beyond 3rd level', 'The path continues to shape the later calling, including the later path features registered in the class data. Consult the Messenger class page for exact level-by-level choices. The important distinction is functional: Counsellor emphasizes social and support play, while Herald emphasizes martial leadership.')
		]
	}
};

const expandedBarbarian: Record<string, FaqQuestion['fullAnswer']> = {
	'barbarian/what-is-barbarian-in-dnd': { introduction: 'The Barbarian is a martial class built to enter danger, withstand punishment, and turn Strength and primal fury into close-range pressure.', sections: [section('Class identity', 'The Barbarian uses a d12 Hit Die, the largest standard class Hit Die, and is proficient in Strength and Constitution saving throws. It is proficient with simple and martial weapons, light and medium armor, and shields.'), section('Rage and resistance', 'Rage is the class foundation. It uses a bonus action, grants its defined damage and Strength benefits, and provides resistance to bludgeoning, piercing, and slashing damage while the rules are satisfied. Rage is limited and can end early, so timing matters.'), section('Offense and durability', 'Strength supports the Barbarian’s weapon attacks, damage, grappling, and Athletics. Reckless Attack can create advantage on Strength-based melee attacks while exposing the Barbarian to attacks in return. Constitution adds hit points and supports an unarmored defense option.'), section('Party and exploration role', 'A Barbarian can hold space near vulnerable allies, threaten important targets, and contribute Athletics, Perception, Survival, or Intimidation depending on the selected skills. Outside combat, the class is not only a damage dealer: strength, endurance, and subclass features can solve physical and environmental problems.'), section('Progression and Primal Paths', 'The class progresses through Extra Attack, Fast Movement, Feral Instinct, Brutal Critical, Relentless Rage, Persistent Rage, Indomitable Might, and Primal Champion. A Primal Path adds a specialized expression of Rage without replacing the base class.') ] },
	'barbarian/how-to-play-barbarian-in-dnd': { introduction: 'Play a Barbarian by deciding which danger must be met directly, then use Rage, movement, and positioning to make that commitment productive.', sections: [section('Build priorities', 'Strength supports attacks, damage, Athletics, grapples, and Reckless Attack. Constitution supports hit points and Unarmored Defense. Dexterity can improve initiative, Dexterity saves, and armor class depending on equipment, while Wisdom can matter for Perception and important saves.'), section('Equipment and defense', 'Light or medium armor and shields are available, and Unarmored Defense is an option rather than a requirement. Compare the actual armor class and the benefits of your equipment; do not assume an unarmored build is automatically better.'), section('When to Rage', 'Rage costs a bonus action and has limited uses. Use it when the encounter is significant and you expect to make qualifying attacks or remain involved long enough to benefit. Entering too early can waste duration; entering too late can leave the party without the durability it needed.'), section('Reckless Attack and positioning', 'Reckless Attack is a risk-reward choice. Advantage improves Strength-based melee attacks, but attacks against you gain advantage until your next turn. Use it when accuracy or damage matters and your position, hit points, resistance, and allies can absorb the risk.'), section('Work with allies', 'A Barbarian is durable, not invulnerable. Coordinate with allies who can control space, remove threats, heal, or exploit the enemies you pressure. Keep enough movement to reach the right target and avoid chasing a minor enemy away from the party.'), section('Common mistakes', 'Raging every encounter, using Reckless Attack automatically, ignoring the bonus-action economy, and treating resistance as immunity are common errors. The best turns connect the resource, the target, and the position.') ] },
	'barbarian/how-does-rage-work-for-a-barbarian': { introduction: 'Rage is a Barbarian bonus-action feature with limited uses and defined benefits, restrictions, and ending conditions under the 2014 rules represented by this class data.', sections: [section('Activating Rage', 'On your turn, entering Rage uses a bonus action. The feature has a limited number of uses that recover as specified by the class progression. Starting Rage is therefore a resource decision, not a free description of being angry.'), section('Benefits while raging', 'While raging, the Barbarian gains advantage on Strength checks and Strength saving throws, adds the listed Rage Damage bonus to qualifying Strength-based melee weapon attacks, and has resistance to bludgeoning, piercing, and slashing damage. The benefits apply only while the Rage rules are satisfied.'), section('Qualifying attacks and equipment', 'Rage damage is tied to the qualifying attacks described by the feature, so it is not automatically added to every damage roll. Under the 2014 rules, the Barbarian does not gain Rage benefits while wearing heavy armor. Check the exact feature wording for edge cases rather than treating every weapon or damage type as equivalent.'), section('Duration and ending early', 'Rage lasts for its stated duration, but under the 2014 rules it ends early if the Barbarian ends the turn without attacking a hostile creature or taking damage since the previous turn. The Barbarian can also end it voluntarily. Spellcasting and concentration are not available while raging, so Rage is not a way to combine ordinary spell concentration with its benefits.'), section('Rage and Reckless Attack', 'The two features solve different problems. Rage improves endurance and qualifying damage; Reckless Attack trades defense for advantage on Strength-based melee attacks. A Barbarian can use both, but the advantage granted to enemies by Reckless Attack still matters even when Rage resistance reduces some of the incoming damage.'), section('Persistent Rage and misconceptions', 'Persistent Rage changes the early-ending pressure at the level where that feature is gained; it does not remove every other restriction. Rage is not resistance to all damage, not immunity, not a bonus to every Strength-related roll, and not permission to cast or concentrate. Read the duration, resource, attack, armor, and spellcasting clauses together.') ] },
	'barbarian/what-ability-scores-are-best-for-a-barbarian': { introduction: 'Strength and Constitution are the usual Barbarian priorities, but the best distribution depends on equipment, subclass, and how much risk the character accepts.', sections: [section('Strength', 'Strength drives the weapon attacks and damage most Barbarians use, improves Athletics, supports grappling and shoving, and is the ability connected to Reckless Attack and Rage’s Strength benefits. A low Strength score undermines the classic Barbarian plan.'), section('Constitution', 'Constitution increases hit points and supports Unarmored Defense. Because the Barbarian expects to stand near threats, additional hit points make resistance and healing more valuable rather than replacing them.'), section('Dexterity and defense', 'Dexterity contributes to initiative, Dexterity saving throws, common skills, and armor class when using Unarmored Defense or armor that benefits from it. It is useful, but usually competes with Strength and Constitution for ability-score increases.'), section('Wisdom and mental scores', 'Wisdom can improve Perception and important Wisdom saving throws. Intelligence and Charisma are usually secondary for the classic build, but a campaign or roleplay concept can make them valuable. Do not treat secondary scores as universally useless.'), section('Multiclassing and alternatives', 'The Barbarian’s multiclassing requirement is a Strength score of 13. Alternative builds can prioritize Dexterity, a particular subclass feature, ranged tactics, or a different armor plan, but those choices should be checked against the actual feature requirements and may not benefit equally from Rage or Reckless Attack.'), section('Practical priority', 'For a conventional front-line Barbarian, raise Strength and Constitution first, then choose Dexterity or a mental ability according to the campaign and build. Compare the resulting attack bonus, damage, armor class, hit points, initiative, and saving throws rather than following a fixed ranking blindly.') ] },
	'barbarian/what-is-the-hit-dice-for-barbarian-in-dnd': { introduction: 'A Barbarian uses a d12 Hit Die, written as 1d12 per Barbarian level. This gives the class its strong hit-point foundation but does not make it immune to danger.', sections: [section('At 1st level', 'A first-level Barbarian starts with 12 hit points plus the Constitution modifier, using the class data’s fixed maximum rather than rolling the Hit Die.'), section('At higher levels', 'After 1st level, each Barbarian level adds 1d12, or the fixed average of 7, plus the Constitution modifier. A table may use the fixed value for predictable progression or roll according to the campaign rules.'), section('Constitution interaction', 'Constitution is added at every Barbarian level, so it affects both the initial total and later growth. It also supports Unarmored Defense and therefore contributes to the class’s durability in more than one way.'), section('Short-rest Hit Dice', 'Hit Dice are also a short-rest resource. A Barbarian can spend d12 Hit Dice during a short rest to recover hit points, adding Constitution to each recovery roll as the normal rules specify.'), section('Multiclassing', 'When multiclassing, each class contributes its own Hit Die type to the character’s pool. A Barbarian level adds a d12; another class level adds that class’s die. The character does not retroactively convert every Hit Die into a d12.'), section('Hit Die versus Hit Dice', '“Hit Die” is singular: one die type, such as a d12. “Hit Dice” is plural: the collection of dice a character has gained from levels and can spend during rests. The distinction matters when describing both hit-point advancement and recovery.') ] }
};

type ModularFaqSource = {
	readonly slug: string;
	readonly title: string;
	readonly questions: readonly {
		readonly slug: string;
		readonly question: string;
		readonly shortAnswer: string;
		readonly introduction: string;
		readonly sections: readonly { readonly title: string; readonly blocks: readonly FaqContentBlock[] }[];
	}[];
};

function createModularFaqGroup(group: ModularFaqSource, description: string, sourcePage?: string): FaqGroup {
	return {
		slug: group.slug,
		title: group.title,
		description,
		...(sourcePage ? { sourcePage } : {}),
	questions: group.questions.map((question) => ({
		slug: question.slug,
		question: question.question,
		shortAnswer: question.shortAnswer,
		fullAnswer: (() => {
			const sourceQuestion = question as typeof question & { readonly fullAnswer?: { readonly introduction?: string; readonly sections?: readonly { readonly title: string; readonly paragraphs?: readonly string[]; readonly blocks?: readonly FaqContentBlock[] }[] } };
			const authored = sourceQuestion.fullAnswer ?? { introduction: sourceQuestion.introduction, sections: sourceQuestion.sections.map((section) => ({ ...section, paragraphs: section.blocks.filter((block) => block.type === 'paragraph').map((block) => block.content), blocks: section.blocks })) };
			return {
				introduction: authored.introduction ?? '',
				sections: (authored.sections ?? []).map((section) => ({
					title: section.title,
					paragraphs: section.paragraphs ?? (section.blocks ?? []).filter((block) => block.type === 'paragraph').map((block) => block.content),
					blocks: section.blocks ?? (section.paragraphs ?? []).map((content) => ({ type: 'paragraph' as const, content }))
				}))
			};
		})()
	}))
};
}

const modularBarbarianFaqGroup = createModularFaqGroup(barbarianFaq, 'Frequently asked questions about the Barbarian class.', 'internals.classes.barbarian.page');
const modularBardFaqGroup = createModularFaqGroup(bardFaq, 'Frequently asked questions about the Bard class.', 'internals.classes.bard.page');
const modularArtificerFaqGroup = createModularFaqGroup(artificerFaq, 'Frequently asked questions about the Artificer class.', 'internals.classes.artificer.page');
const modularBloodHunterFaqGroup = createModularFaqGroup(bloodHunterFaq, 'Frequently asked questions about the Blood Hunter class.', 'internals.classes.bloodHunter.page');
const modularClericFaqGroup = createModularFaqGroup(clericFaq, 'Frequently asked questions about the Cleric class.', 'internals.classes.cleric.page');
const modularDruidFaqGroup = createModularFaqGroup(druidFaq, 'Frequently asked questions about the Druid class.', 'internals.classes.druid.page');
const modularFighterFaqGroup = createModularFaqGroup(fighterFaq, 'Frequently asked questions about the Fighter class.', 'internals.classes.fighter.page');
const modularMonkFaqGroup = createModularFaqGroup(monkFaq, 'Frequently asked questions about the Monk class.', 'internals.classes.monk.page');
const modularPaladinFaqGroup = createModularFaqGroup(paladinFaq, 'Frequently asked questions about the Paladin class.', 'internals.classes.paladin.page');
const modularPugilistFaqGroup = createModularFaqGroup(pugilistFaq, 'Frequently asked questions about the Pugilist class.', 'internals.classes.pugilist.page');
const modularRangerFaqGroup = createModularFaqGroup(rangerFaq, 'Frequently asked questions about the Ranger class.', 'internals.classes.ranger.page');
const modularRogueFaqGroup = createModularFaqGroup(rogueFaq, 'Frequently asked questions about the Rogue class.', 'internals.classes.rogue.page');
const modularShinobiFaqGroup = createModularFaqGroup(shinobiFaq, 'Frequently asked questions about the Shinobi class.', 'internals.classes.shinobi.page');
const modularSorcererFaqGroup = createModularFaqGroup(sorcererFaq, 'Frequently asked questions about the Sorcerer class.', 'internals.classes.sorcerer.page');
const modularWarlockFaqGroup = createModularFaqGroup(warlockFaq, 'Frequently asked questions about the Warlock class.', 'internals.classes.warlock.page');
const modularWizardFaqGroup = createModularFaqGroup(wizardFaq, 'Frequently asked questions about the Wizard class.', 'internals.classes.wizard.page');
const modularScholarFaqGroup = createModularFaqGroup(scholarFaq, 'Frequently asked questions about the Scholar class.', 'internals.classes.scholar.page');
const modularTreasureHunterFaqGroup = createModularFaqGroup(treasureHunterFaq, 'Frequently asked questions about the Treasure Hunter class.', 'internals.classes.treasureHunter.page');
const modularVanguardFaqGroup = createModularFaqGroup(vanguardFaq, 'Frequently asked questions about the Vanguard class.', 'internals.classes.vanguard.page');
const modularCaptainFaqGroup = createModularFaqGroup(captainFaq, 'Frequently asked questions about the Captain class.', 'internals.classes.captain.page');
const modularChampionFaqGroup = createModularFaqGroup(championFaq, 'Frequently asked questions about the Champion class.', 'internals.classes.champion.page');
const modularGunslingerFaqGroup = createModularFaqGroup(gunslingerFaq, 'Frequently asked questions about the Gunslinger class.', 'internals.classes.gunslinger.page');
const modularIllriggerFaqGroup = createModularFaqGroup(illriggerFaq, 'Frequently asked questions about the Illrigger class.', 'internals.classes.illrigger.page');
const modularMonsterHunterFaqGroup = createModularFaqGroup(monsterHunterFaq, 'Frequently asked questions about the Monster Hunter class.', 'internals.classes.monsterHunter.page');
const modularWardenFaqGroup = createModularFaqGroup(wardenFaq, 'Frequently asked questions about the Warden class.', 'internals.classes.warden.page');
const modularMessengerFaqGroup = createModularFaqGroup(messengerFaq, 'Frequently asked questions about the Messenger class.', 'internals.classes.messenger.page');
const modularMonstersFaqGroup = createModularFaqGroup(monstersFaq, 'Frequently asked questions about monsters.', 'internals.monsters.page');
const modularMovementFaqGroup = createModularFaqGroup(movementFaq, 'Frequently asked questions about movement rules.', 'internals.rules.movement.page');
const modularSpellsFaqGroup = createModularFaqGroup(spellsFaq, 'Frequently asked questions about spells.', 'internals.spells.page');
const modularEquipmentFaqGroup = createModularFaqGroup(equipmentFaq, 'Frequently asked questions about equipment.', 'internals.equipment.page');
const modularClassesFaqGroup = createModularFaqGroup(classesFaq, 'Frequently asked questions about classes.', 'internals.classes.page');
const modularRulesFaqGroup = createModularFaqGroup(rulesFaq, 'Frequently asked questions about D&D rules.', 'internals.rules.page');
const modularSpeciesFaqGroup = createModularFaqGroup(speciesFaq, 'Frequently asked questions about species.', 'internals.species.page');
const modularHumanFaqGroup = createModularFaqGroup(humanFaq, 'Frequently asked questions about Human.', undefined);
const modularElfFaqGroup = createModularFaqGroup(elfFaq, 'Frequently asked questions about Elf.', undefined);
const modularAstralElfFaqGroup = createModularFaqGroup(astralElfFaq, 'Frequently asked questions about Astral Elf.', undefined);
const modularFightingFaqGroup = createModularFaqGroup(fightingFaq, 'Frequently asked questions about Fighting.', undefined);
const modularSubclassFaqGroups = [...rogueSubclassFaqGroups, ...shinobiSubclassFaqGroups, ...barbarianSubclassFaqGroups, ...clericSubclassFaqGroups].map((group) => createModularFaqGroup(group as unknown as ModularFaqSource, `Frequently asked questions about ${group.title}.`, group.sourcePage));

const modularFaqGroupSlugs = [modularBarbarianFaqGroup.slug, modularBardFaqGroup.slug, modularArtificerFaqGroup.slug, modularBloodHunterFaqGroup.slug, modularClericFaqGroup.slug, modularDruidFaqGroup.slug, modularFighterFaqGroup.slug, modularMonkFaqGroup.slug, modularPaladinFaqGroup.slug, modularPugilistFaqGroup.slug, modularRangerFaqGroup.slug, modularRogueFaqGroup.slug, modularShinobiFaqGroup.slug, modularSorcererFaqGroup.slug, modularWarlockFaqGroup.slug, modularWizardFaqGroup.slug, modularScholarFaqGroup.slug, modularTreasureHunterFaqGroup.slug, modularVanguardFaqGroup.slug, modularCaptainFaqGroup.slug, modularChampionFaqGroup.slug, modularGunslingerFaqGroup.slug, modularIllriggerFaqGroup.slug, modularMonsterHunterFaqGroup.slug, modularWardenFaqGroup.slug, modularMessengerFaqGroup.slug, modularMonstersFaqGroup.slug, modularMovementFaqGroup.slug, modularSpellsFaqGroup.slug, modularEquipmentFaqGroup.slug, modularClassesFaqGroup.slug, modularRulesFaqGroup.slug, modularSpeciesFaqGroup.slug, modularHumanFaqGroup.slug, modularElfFaqGroup.slug, modularAstralElfFaqGroup.slug, modularFightingFaqGroup.slug, ...modularSubclassFaqGroups.map((group) => group.slug)];
const legacyFaqGroups = baseFaqGroups.filter((group) => !modularFaqGroupSlugs.includes(group.slug));
const existingGroupSlugs = new Set([...legacyFaqGroups, modularBarbarianFaqGroup, modularBardFaqGroup, modularArtificerFaqGroup, modularBloodHunterFaqGroup, modularClericFaqGroup, modularDruidFaqGroup, modularFighterFaqGroup, modularMonkFaqGroup, modularPaladinFaqGroup, modularPugilistFaqGroup, modularRangerFaqGroup, modularRogueFaqGroup, modularShinobiFaqGroup, modularSorcererFaqGroup, modularWarlockFaqGroup, modularWizardFaqGroup, modularScholarFaqGroup, modularTreasureHunterFaqGroup, modularVanguardFaqGroup, modularCaptainFaqGroup, modularChampionFaqGroup, modularGunslingerFaqGroup, modularIllriggerFaqGroup, modularMonsterHunterFaqGroup, modularWardenFaqGroup, modularMessengerFaqGroup, modularMonstersFaqGroup, modularMovementFaqGroup, modularSpellsFaqGroup, modularEquipmentFaqGroup, modularClassesFaqGroup, modularRulesFaqGroup, modularSpeciesFaqGroup, modularHumanFaqGroup, modularElfFaqGroup, modularAstralElfFaqGroup, modularFightingFaqGroup, ...modularSubclassFaqGroups].map((group) => group.slug));
const missingMasterReadyGroups: readonly FaqGroup[] = [];

function mergeMissingProvenance<T extends FaqGroup>(group: T): T {
	return group;
}

export const faqGroups = [modularBarbarianFaqGroup, modularBardFaqGroup, modularArtificerFaqGroup, modularBloodHunterFaqGroup, modularClericFaqGroup, modularDruidFaqGroup, modularFighterFaqGroup, modularMonkFaqGroup, modularPaladinFaqGroup, modularPugilistFaqGroup, modularRangerFaqGroup, modularRogueFaqGroup, modularShinobiFaqGroup, modularSorcererFaqGroup, modularWarlockFaqGroup, modularWizardFaqGroup, modularScholarFaqGroup, modularTreasureHunterFaqGroup, modularVanguardFaqGroup, modularCaptainFaqGroup, modularChampionFaqGroup, modularGunslingerFaqGroup, modularIllriggerFaqGroup, modularMonsterHunterFaqGroup, modularWardenFaqGroup, modularMessengerFaqGroup, modularMonstersFaqGroup, modularMovementFaqGroup, modularSpellsFaqGroup, modularEquipmentFaqGroup, modularClassesFaqGroup, modularRulesFaqGroup, modularSpeciesFaqGroup, modularHumanFaqGroup, modularElfFaqGroup, modularAstralElfFaqGroup, modularFightingFaqGroup, ...modularSubclassFaqGroups, ...legacyFaqGroups, ...missingMasterReadyGroups].map((group) => mergeMissingProvenance({
	...group,
	questions: group.questions.map((question) => ({
		...question,
		fullAnswer: question.fullAnswer
	}))
})) satisfies readonly FaqGroup[];

function createPage(group: FaqGroup, question?: FaqQuestion) {
	return createInternalPage({
			href: question ? `/faq/${group.slug}/${question.slug}` : `/faq/${group.slug}`,
			label: question?.question ?? `${group.title} FAQ`,
			title: `${website.name.short} - ${question?.question ?? `${group.title} FAQ`}`,
			subTitle: question ? `${group.title} FAQ` : `${group.title} frequently asked questions`,
			description: question?.shortAnswer ?? group.description,
			navigation: { parent: faqParent }
		});
}

export const faq = Object.fromEntries(faqGroups.map((group) => [
	group.slug,
	{
		page: createPage(group),
		...Object.fromEntries(group.questions.map((question) => [question.slug, createPage(group, question)]))
	}
]));

export const barbarianFaqEntries = modularBarbarianFaqGroup.questions.map((question) => ({
	question: question.question,
	answer: question.shortAnswer,
	reference: modularBarbarianFaqGroup.sourcePage ?? 'internals.classes.barbarian.page',
	referenceLabel: modularBarbarianFaqGroup.title,
	faqPath: `internals.faq.${modularBarbarianFaqGroup.slug}.${question.slug}`
}));

export function getFaqGroup(slug: string): FaqGroup | null {
	return faqGroups.find((group) => group.slug === slug) ?? null;
}

export function getFaqGroupBySourcePage(sourcePage: string | null): FaqGroup | null {
	return sourcePage ? faqGroups.find((group) => group.sourcePage === sourcePage) ?? null : null;
}

export function getFaqQuestion(groupSlug: string, questionSlug: string): FaqQuestion | null {
	return getFaqGroup(groupSlug)?.questions.find((question) => question.slug === questionSlug) ?? null;
}

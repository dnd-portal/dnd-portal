import type { FaqGroup, FaqSection } from './faq';

const section = (title: string, ...paragraphs: string[]): FaqSection => ({ title, paragraphs });

export const artificerFaqGroup = {
	slug: 'artificer',
	title: 'Artificer',
	description: 'Frequently asked questions about the Artificer class.',
	sourcePage: 'internals.classes.artificer.page',
	questions: [
		{
			slug: 'what-is-an-artificer-in-dnd',
			question: 'What is an Artificer in D&D?',
			shortAnswer: 'An Artificer is an Intelligence-based half-caster who combines magic, tools, crafted equipment, and magical infusions. Rather than relying only on spells, Artificers turn ordinary objects into magical resources, support the party with flexible utility, and specialise at 3rd level as an Alchemist, Armorer, Artillerist, or Battle Smith.',
			fullAnswer: {
				introduction: 'An Artificer is a magical inventor: a character who treats arcane power as something that can be understood, shaped, stored, and applied through tools and objects. The class combines prepared spellcasting with tool expertise, magical equipment, and features that reward planning ahead.',
				sections: [
					section('Core class profile', 'The pre-2024 Artificer uses a d8 Hit Die and has proficiency with light armor, medium armor, shields, simple weapons, and several tools. Intelligence is the central ability score because it determines Artificer spellcasting and powers later class features. The result is a flexible class that can improve equipment, solve exploration problems, support saving throws, and specialize through an Artificer Specialist.'),
					section('A half-caster with prepared spells', 'Artificers gain Spellcasting at 1st level, with slower spell-slot progression than full casters. They prepare spells from the Artificer list using Intelligence and can change those preparations after a long rest. The list covers utility, protection, restoration, support, control, and magical problem-solving. Tools and later infused items can also serve as spellcasting focuses.'),
					section('Infusions and tools', 'At 2nd level, Infuse Item turns suitable nonmagical objects into magic items using learned Artificer Infusions. An Artificer knows more infusions than can be active at once, so active items become a preparation decision for the whole party. Tools also matter mechanically: Tool Expertise later doubles the proficiency bonus for qualifying tool checks, without making every technical problem an automatic success.'),
					section('Flash of Genius and magic items', 'At 7th level, Flash of Genius uses a reaction to add the Artificer’s Intelligence modifier to an ability check or saving throw made by the Artificer or a visible creature in range. Magic Item Adept, Magic Item Savant, Magic Item Master, Spell-Storing Item, and Soul of Artifice increasingly connect the character’s power to magical equipment and infusions.'),
					section('Artificer Specialists', 'At 3rd level, the Artificer chooses Alchemist, Armorer, Artillerist, or Battle Smith. Alchemist emphasizes mixtures and support; Armorer makes Arcane Armor central; Artillerist uses Eldritch Cannon and ranged magical pressure; Battle Smith combines weapon combat with a Steel Defender. The Specialist determines which part of the base class becomes most prominent.'),
					section('Party role', 'An Artificer can provide magical utility, healing, defensive support, improved equipment, tool expertise, saving-throw support, and subclass-specific combat. Its main strength is adaptability. The class rewards a player who prepares for the party’s needs and asks which spell, infusion, tool, or reaction solves the current problem most efficiently.'),
					section('In short', 'The Artificer is an Intelligence-based magical engineer whose power is spread across spells, tools, magical equipment, support features, and Specialist mechanics. It is strongest when the player enjoys preparation, adaptation, and treating the party’s equipment as a shared system.')
				]
			}
		},
		{
			slug: 'how-do-you-play-an-artificer',
			question: 'How do you play an Artificer?',
			shortAnswer: 'Play an Artificer by planning ahead: keep Intelligence high, prepare spells for the expected adventure, choose infusions that benefit the whole party, and use tools and Flash of Genius to solve problems that raw damage cannot. Your Specialist determines whether you lean toward support, armor, ranged magical damage, or weapon combat.',
			fullAnswer: {
				introduction: 'Playing an Artificer well is mostly about preparation and resource allocation. The class has spells, infusions, tools, equipment, reactions, and Specialist abilities, so a strong Artificer decides what role is needed today and prepares around that role.',
				sections: [
					section('Start with Intelligence', 'Intelligence powers Artificer spellcasting, spell save DC, spell attack rolls, prepared spells, Flash of Genius, and several Specialist features. Constitution is commonly the second priority for hit points and concentration, while Dexterity helps initiative, saving throws, and Armor Class depending on equipment.'),
					section('Prepare for the day', 'Artificers can change prepared spells after a long rest and can change which known infusions are active. Exploration may reward utility, mobility, detection, light, and defensive equipment; combat may reward armor, weapons, concentration support, control, and emergency healing. The goal is useful preparation, not perfect prediction.'),
					section('Treat infusions as party resources', 'An infusion does not automatically belong on the Artificer. An ally who attacks every round may gain more value from an offensive item, while a vulnerable character may need a defensive item. Ask which party member extracts the most value from the available active infusions.'),
					section('Manage the action economy', 'Artificer actions, bonus actions, reactions, and concentration can compete with one another. Flash of Genius uses a reaction; some Specialists use bonus actions; spells may require concentration; and Battle Smith may need to consider the Steel Defender. Decide the encounter’s priority before spending every resource at once.'),
					section('Use tools and Flash of Genius', 'Ask whether tools can help inspect a mechanism, repair equipment, open a lock, analyze a trap, craft a replacement, or investigate a device. Flash of Genius is usually best reserved for dangerous saves, irreplaceable checks, and rolls where the Intelligence bonus can realistically change the result.'),
					section('Let the Specialist determine combat', 'Alchemist emphasizes support and alchemical effects, Armorer builds around Arcane Armor, Artillerist uses Eldritch Cannon and magical ranged pressure, and Battle Smith combines weapons with a Steel Defender. The Specialist changes positioning, equipment, spell choices, and action priorities.'),
					section('Common mistakes', 'Common mistakes include keeping every infusion for yourself, forgetting to update prepared spells, ignoring tools, spending Flash of Genius on insignificant rolls, and trying to perform support, offense, control, and utility simultaneously. A good Artificer is prepared but willing to adapt when the plan changes.')
				]
			}
		},
		{
			slug: 'what-ability-scores-are-best-for-an-artificer',
			question: 'What ability scores are best for an Artificer?',
			shortAnswer: 'Intelligence is normally the Artificer’s highest ability score because it powers spellcasting, prepared spells, Flash of Genius, and many Specialist features. Constitution is usually the next priority for hit points and concentration, while Dexterity improves initiative and defense. The exact secondary priorities depend on the chosen Specialist.',
			fullAnswer: {
				introduction: 'The Artificer is one of the clearest Intelligence-focused classes in the pre-2024 rules. After Intelligence, Constitution and Dexterity are common priorities, although the chosen Specialist can change the final order.',
				sections: [
					section('Intelligence', 'Intelligence determines spell attack modifier, spell save DC, and the number of prepared Artificer spells. Flash of Genius later adds the Intelligence modifier to qualifying checks and saves and ties its uses to Intelligence. Several Specialists also depend heavily on Intelligence, making it the default first priority.'),
					section('Constitution', 'The Artificer uses a d8 Hit Die, so Constitution improves moderate baseline durability. It also supports concentration, and the class already has Constitution saving-throw proficiency. This makes Constitution valuable for both survival and maintaining important spells.'),
					section('Dexterity', 'Dexterity improves initiative, Dexterity saving throws, common skills, and Armor Class depending on equipment. Artificers have access to light armor, medium armor, and shields, so Dexterity is useful without always needing to be maximized for defense. Some weapon builds may value it more heavily.'),
					section('Strength, Wisdom, and Charisma', 'Strength may matter for a particular weapon plan, Athletics, carrying capacity, or character concept. Wisdom supports Perception and Wisdom saving throws, while Charisma supports social skills. None powers the base Artificer’s core mechanics, so their value depends on the party and campaign.'),
					section('Specialist and multiclass priorities', 'Alchemist, Armorer, Artillerist, and Battle Smith all give strong reasons to value Intelligence, although their physical combat needs differ. For pre-2024 multiclassing, Intelligence 13 is the important Artificer prerequisite. A conventional priority is Intelligence, then Constitution, then Dexterity, with the remaining scores following the character’s role.')
				]
			}
		},
		{
			slug: 'what-are-the-main-artificer-class-features',
			question: 'What are the main Artificer class features?',
			shortAnswer: 'The Artificer’s main features are Magical Tinkering, prepared Spellcasting, Infuse Item, an Artificer Specialist, The Right Tool for the Job, Tool Expertise, Flash of Genius, Spell-Storing Item, increasingly powerful magic-item attunement, and Soul of Artifice. Together they make the class a flexible magical inventor rather than a conventional caster.',
			fullAnswer: {
				introduction: 'The Artificer is built from several connected systems rather than one dominant resource. Spellcasting provides flexibility, infusions alter equipment, tools solve practical problems, Flash of Genius supports important rolls, and the Specialist defines the combat identity.',
				sections: [
					section('1st level: Magical Tinkering and Spellcasting', 'Magical Tinkering places small magical effects into mundane objects, supporting light, signals, recorded messages, sensory effects, markings, and creative problem-solving. Spellcasting begins at 1st level as Intelligence-based prepared half-caster magic. Magical Tinkering is not the same as the major equipment benefits of Infuse Item.'),
					section('2nd level: Infuse Item', 'Infuse Item lets the Artificer learn magical infusions and place a limited number into qualifying nonmagical objects. Infusions can improve weapons and armor, enhance spellcasting, reproduce useful magic items, or provide specialized utility. Knowing more infusions than can be active makes daily equipment selection important.'),
					section('3rd level: Specialist and The Right Tool for the Job', 'At 3rd level, the Artificer chooses Alchemist, Armorer, Artillerist, or Battle Smith. The Right Tool for the Job can create a set of artisan’s tools when its requirements are met, reinforcing preparation and technical flexibility rather than direct combat damage.'),
					section('6th level: Tool Expertise', 'Tool Expertise doubles the proficiency bonus for qualifying ability checks made with tools in which the Artificer is proficient. Its practical value depends on the campaign, but it makes the Artificer unusually reliable when a tool proficiency actually applies.'),
					section('7th level: Flash of Genius', 'Flash of Genius uses a reaction to improve an ability check or saving throw made by the Artificer or another nearby creature. The bonus equals the Intelligence modifier and the uses are limited. It is one of the class’s strongest ways to support another character without casting a spell.'),
					section('10th–20th level: Magic items and Soul of Artifice', 'Magic Item Adept, Magic Item Savant, and Magic Item Master improve attunement and interaction with magic items. Spell-Storing Item places a qualifying 1st- or 2nd-level Artificer spell into a suitable object for another creature to use. Soul of Artifice links high-level saving throws and survival to attuned magic items and infusions.'),
					section('How the features work together', 'Spells provide options, infusions customize equipment, tools provide practical expertise, Flash of Genius improves important rolls, and the Specialist establishes combat emphasis. The high-level magic-item features reward long-term equipment management, so the Artificer is not simply a weaker Wizard with tools.')
				]
			}
		},
		{
			slug: 'what-subclasses-can-an-artificer-choose',
			question: 'What subclasses can an Artificer choose?',
			shortAnswer: 'The pre-2024 Artificer has four main published Specialists: Alchemist, Armorer, Artillerist, and Battle Smith. The choice is made at 3rd level and strongly changes the class’s role, from support and alchemy to magical armor, arcane artillery, or weapon combat with a Steel Defender.',
			fullAnswer: {
				introduction: 'An Artificer’s subclass is called an Artificer Specialist. The four main published pre-2024 choices are Alchemist, Armorer, Artillerist, and Battle Smith, chosen at 3rd level with additional Specialist features later in the progression.',
				sections: [
					section('Alchemist', 'Alchemist emphasizes magical chemistry, experimental mixtures, and support. It suits a potion-maker, apothecary, magical chemist, or experimental healer. It still retains the normal Artificer infusions and spell list and is not limited to healing.'),
					section('Armorer', 'Armorer makes Arcane Armor the center of the character. The magical suit functions as both equipment and a class feature, supporting different combat approaches. Armorer naturally benefits from Intelligence and can lean toward protection or a more mobile armor-based style.'),
					section('Artillerist', 'Artillerist specializes in magical ranged pressure and arcane artillery. Eldritch Cannon provides a constructed magical battlefield tool with different configurations, while later features improve the relationship between offensive magic and the cannon.'),
					section('Battle Smith', 'Battle Smith combines weapon combat, magical support, and a Steel Defender. The Defender adds another creature to the battlefield, changing positioning and action-economy decisions while the Artificer retains spells, infusions, tools, and magical support.'),
					section('Choosing between Specialists', 'Choose Alchemist for support and alchemy, Armorer for magical armor and durability, Artillerist for ranged magical damage and battlefield pressure, or Battle Smith for weapon combat and companion play. The choice changes emphasis rather than deleting the base class identity.'),
					section('What all four retain', 'Every Specialist keeps the Artificer’s major base systems: Spellcasting, Infuse Item, tools, Flash of Genius, and magic-item progression. An Artillerist still has tools and infusions, a Battle Smith is still a spellcaster, an Armorer still has Flash of Genius, and an Alchemist can still give infused equipment to allies.')
				]
			}
		}
	]
} satisfies FaqGroup;

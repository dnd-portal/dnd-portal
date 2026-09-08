export const question = {
  "slug": "how-do-monster-stat-blocks-work",
  "question": "How do monster stat blocks work?",
  "shortAnswer": "A monster stat block is a compact rules sheet. Read the defensive profile first—AC, hit points, speed, saves, resistances and immunities—then the creature's senses, Challenge Rating, traits, and action options. Attack entries already include the monster's attack bonus, reach or range, targets, average damage, damage dice, and any extra effects. Only specially proficient saving throws and skills are listed; an unlisted save or skill normally uses the relevant ability modifier.",
  "introduction": "A stat block is designed so the DM can run a creature quickly.\n\nEach section answers a different practical question.",
  "sections": [
    {
      "id": "name-size-type-and-alignment",
      "title": "Name, size, type, and alignment",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The first line identifies what the creature is."
        },
        {
          "type": "paragraph",
          "content": "**Size** affects occupied space and several interactions involving movement, grappling, carrying, and reach."
        },
        {
          "type": "paragraph",
          "content": "**Creature type** matters for spells and features that specify targets such as Beast, Fiend, Humanoid, or Undead."
        },
        {
          "type": "paragraph",
          "content": "Alignment is descriptive and can matter to some setting or source-specific effects, but a DM can also portray individual creatures differently when the setting allows."
        }
      ]
    },
    {
      "id": "armor-class",
      "title": "Armor Class",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Armor Class tells you the number an attack roll must meet or exceed to hit the monster."
        },
        {
          "type": "paragraph",
          "content": "A stat block may also explain where the AC comes from:"
        },
        {
          "type": "paragraph",
          "content": "Armor Class 15 (natural armor)"
        },
        {
          "type": "paragraph",
          "content": "or another source."
        },
        {
          "type": "paragraph",
          "content": "The DM normally uses the printed AC rather than reconstructing it from the creature's Dexterity and equipment."
        }
      ]
    },
    {
      "id": "hit-points",
      "title": "Hit Points",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A monster usually has both an average hit-point value and a Hit Dice expression."
        },
        {
          "type": "paragraph",
          "content": "For example, a stat block might present:"
        },
        {
          "type": "paragraph",
          "content": "Hit Points 59 (7d12 + 14)"
        },
        {
          "type": "paragraph",
          "content": "The DM can normally use the average value directly."
        },
        {
          "type": "paragraph",
          "content": "The dice expression exists for groups that want to roll a creature's hit points or understand how the total was constructed."
        },
        {
          "type": "paragraph",
          "content": "Monster Hit Dice in Fifth Edition are related to creature size rather than player-class Hit Dice."
        },
        {
          "type": "paragraph",
          "content": "Older-edition monster Hit Die rules are different systems and do not apply to this Fifth Edition stat-block explanation."
        }
      ]
    },
    {
      "id": "speed",
      "title": "Speed",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Speed lists the creature's movement modes."
        },
        {
          "type": "paragraph",
          "content": "Examples include:"
        },
        {
          "type": "paragraph",
          "content": "30 ft.\nfly 60 ft.\nswim 40 ft.\nburrow 20 ft.\nclimb 30 ft."
        },
        {
          "type": "paragraph",
          "content": "A creature can have more than one speed."
        },
        {
          "type": "paragraph",
          "content": "The general movement rules explain how multiple movement modes interact during the same turn."
        }
      ]
    },
    {
      "id": "ability-scores",
      "title": "Ability scores",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Monsters use the same six abilities as player characters:"
        },
        {
          "type": "paragraph",
          "content": "Strength\nDexterity\nConstitution\nIntelligence\nWisdom\nCharisma"
        },
        {
          "type": "paragraph",
          "content": "The stat block normally prints both the score and its modifier."
        },
        {
          "type": "paragraph",
          "content": "The modifier is used for ordinary ability checks, unlisted saving throws, and other rules that call for that ability."
        }
      ]
    },
    {
      "id": "saving-throws",
      "title": "Saving Throws",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Only monsters with special proficiency in particular saving throws receive a Saving Throws entry."
        },
        {
          "type": "paragraph",
          "content": "For example:"
        },
        {
          "type": "paragraph",
          "content": "Saving Throws Dex +5, Wis +4"
        },
        {
          "type": "paragraph",
          "content": "If Constitution is not listed and the monster makes a Constitution save, it normally uses the Constitution modifier from the ability-score line unless another feature modifies it."
        }
      ]
    },
    {
      "id": "skills",
      "title": "Skills",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The same principle applies to Skills."
        },
        {
          "type": "paragraph",
          "content": "A creature might list:"
        },
        {
          "type": "paragraph",
          "content": "Skills Perception +6, Stealth +5"
        },
        {
          "type": "paragraph",
          "content": "Those are special skill bonuses."
        },
        {
          "type": "paragraph",
          "content": "An unlisted skill is not automatically impossible."
        },
        {
          "type": "paragraph",
          "content": "If the DM calls for an unlisted ability check, use the monster's relevant ability modifier and add proficiency only when a rule actually grants it."
        }
      ]
    },
    {
      "id": "vulnerabilities-resistances-and-immunities",
      "title": "Vulnerabilities, resistances, and immunities",
      "blocks": [
        {
          "type": "paragraph",
          "content": "These lines change how particular damage or conditions affect the monster."
        },
        {
          "type": "paragraph",
          "content": "They can include:"
        },
        {
          "type": "paragraph",
          "content": "Damage Vulnerabilities\nDamage Resistances\nDamage Immunities\nCondition Immunities"
        },
        {
          "type": "paragraph",
          "content": "Read the exact scope."
        },
        {
          "type": "paragraph",
          "content": "“Resistance to fire” is not the same as “resistance to bludgeoning, piercing, and slashing from nonmagical attacks.”"
        }
      ]
    },
    {
      "id": "senses",
      "title": "Senses",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Senses normally includes passive Perception plus special senses such as:"
        },
        {
          "type": "list",
          "items": [
            "Darkvision;",
            "Blindsight;",
            "Tremorsense;",
            "Truesight."
          ]
        },
        {
          "type": "paragraph",
          "content": "The listed distance matters."
        },
        {
          "type": "paragraph",
          "content": "A special sense does not automatically remove every limitation on perception."
        }
      ]
    },
    {
      "id": "languages",
      "title": "Languages",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A stat block tells you which languages the creature can speak, understand, or otherwise use."
        },
        {
          "type": "paragraph",
          "content": "Some creatures understand a language but cannot speak."
        },
        {
          "type": "paragraph",
          "content": "Telepathy, when present, follows its own range and rules."
        }
      ]
    },
    {
      "id": "challenge-rating-and-xp",
      "title": "Challenge Rating and XP",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The Challenge line gives both CR and the monster's normal XP value."
        },
        {
          "type": "paragraph",
          "content": "For example:"
        },
        {
          "type": "paragraph",
          "content": "Challenge 5 (1,800 XP)"
        },
        {
          "type": "paragraph",
          "content": "The CR also corresponds to the monster's proficiency bonus in the 2014 monster-building framework."
        }
      ]
    },
    {
      "id": "traits",
      "title": "Traits",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Traits are passive or triggered abilities that are not ordinary Actions."
        },
        {
          "type": "paragraph",
          "content": "Examples can include:"
        },
        {
          "type": "list",
          "items": [
            "False Appearance;",
            "Magic Resistance;",
            "Pack Tactics;",
            "Regeneration;",
            "special movement;",
            "aura effects."
          ]
        },
        {
          "type": "paragraph",
          "content": "Read these before combat begins."
        },
        {
          "type": "paragraph",
          "content": "A trait can radically change how an otherwise ordinary action works."
        }
      ]
    },
    {
      "id": "actions",
      "title": "Actions",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Actions are the monster's main active options."
        },
        {
          "type": "paragraph",
          "content": "An attack entry normally includes everything needed:"
        },
        {
          "type": "paragraph",
          "content": "Melee Weapon Attack\n+X to hit\nreach X ft.\none target\nHit: average damage (dice + modifier)\nplus any additional effect"
        },
        {
          "type": "paragraph",
          "content": "The number before the dice is the average damage for convenience."
        },
        {
          "type": "paragraph",
          "content": "The DM may use the average or roll the listed dice according to the table's preference."
        }
      ]
    },
    {
      "id": "multiattack",
      "title": "Multiattack",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Multiattack is one monster action that tells the creature which listed attacks it makes."
        },
        {
          "type": "paragraph",
          "content": "It is not automatically identical to the player-character Extra Attack feature."
        },
        {
          "type": "paragraph",
          "content": "If a feature allows “one weapon attack,” that does not automatically grant the monster's entire Multiattack sequence."
        }
      ]
    },
    {
      "id": "recharge",
      "title": "Recharge",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Some monster abilities are written like:"
        },
        {
          "type": "paragraph",
          "content": "Recharge 5–6"
        },
        {
          "type": "paragraph",
          "content": "After the ability has been used, the DM rolls a d6 at the start of the monster's turn."
        },
        {
          "type": "paragraph",
          "content": "The ability recharges on the listed results."
        },
        {
          "type": "paragraph",
          "content": "This creates powerful attacks that are not automatically available every round."
        }
      ]
    },
    {
      "id": "reactions",
      "title": "Reactions",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A Reactions section lists creature-specific responses to triggers."
        },
        {
          "type": "paragraph",
          "content": "These use the normal reaction framework unless the feature says otherwise."
        }
      ]
    },
    {
      "id": "legendary-actions",
      "title": "Legendary actions",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A legendary creature can have special actions taken outside its own turn."
        },
        {
          "type": "paragraph",
          "content": "In the 2014 rules:"
        },
        {
          "type": "list",
          "items": [
            "the creature has a limited number of legendary actions;",
            "one option is used at a time;",
            "they occur at the end of another creature's turn;",
            "spent legendary actions return at the start of the legendary creature's turn;",
            "the creature cannot use them while incapacitated."
          ]
        },
        {
          "type": "paragraph",
          "content": "The stat block states how many actions each option costs."
        }
      ]
    },
    {
      "id": "lair-actions-are-different",
      "title": "Lair actions are different",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A legendary creature with a lair can have lair actions."
        },
        {
          "type": "paragraph",
          "content": "These occur on the initiative count specified by the rules rather than consuming the monster's ordinary Action or legendary-action pool."
        },
        {
          "type": "paragraph",
          "content": "Not every legendary creature has a lair."
        }
      ]
    },
    {
      "id": "read-the-whole-block-before-deciding-tactics",
      "title": "Read the whole block before deciding tactics",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A monster that appears weak from AC and hit points alone may have:"
        },
        {
          "type": "list",
          "items": [
            "flight;",
            "invisibility;",
            "strong resistances;",
            "a debilitating recharge attack;",
            "legendary actions;",
            "a save-or-condition effect."
          ]
        },
        {
          "type": "paragraph",
          "content": "The full stat block is the creature."
        },
        {
          "type": "paragraph",
          "content": "Do not evaluate only its basic weapon attack."
        }
      ]
    }
  ]
} as const;
export default question;

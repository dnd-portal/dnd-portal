export const question = {
  "slug": "what-ability-scores-are-best-for-a-cleric",
  "question": "What ability scores are best for a Cleric?",
  "shortAnswer": "Wisdom is normally the Cleric's highest ability score because it powers spellcasting, prepared spells, and many Domain features. Constitution is usually the next priority for hit points and concentration. Strength or Dexterity depends on armor and weapon choices: heavy-armored or melee Clerics may value Strength, while medium-armored Clerics often benefit from Dexterity. The 2014 multiclassing prerequisite is Wisdom 13.",
  "introduction": "A conventional Cleric prioritises Wisdom first.\n\nAfter that, Constitution and the physical ability that best matches the Cleric's equipment become the main considerations.\n\nThe chosen Divine Domain can significantly change those secondary priorities.",
  "sections": [
    {
      "id": "wisdom",
      "title": "Wisdom",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Wisdom is the Cleric's spellcasting ability."
        },
        {
          "type": "paragraph",
          "content": "It determines:"
        },
        {
          "type": "list",
          "items": [
            "spell attack modifier;",
            "spell save DC;",
            "the number of prepared Cleric spells under the 2014 rules."
          ]
        },
        {
          "type": "paragraph",
          "content": "Many Cleric abilities and Domain mechanics also rely on a strong Wisdom score."
        },
        {
          "type": "paragraph",
          "content": "Because Clerics are full spellcasters, increasing Wisdom usually improves the character more consistently than increasing a weapon ability."
        }
      ]
    },
    {
      "id": "constitution",
      "title": "Constitution",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Constitution increases hit points."
        },
        {
          "type": "paragraph",
          "content": "The Cleric uses a d8 Hit Die, so Constitution helps a character expected to stand closer to danger than many other full casters."
        },
        {
          "type": "paragraph",
          "content": "Constitution also supports concentration saving throws."
        },
        {
          "type": "paragraph",
          "content": "This matters because powerful Cleric buffs and control spells frequently require concentration."
        },
        {
          "type": "paragraph",
          "content": "A Cleric who loses concentration quickly can lose much more than the hit points taken from the triggering attack."
        }
      ]
    },
    {
      "id": "strength",
      "title": "Strength",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Strength becomes more important when the Cleric intends to:"
        },
        {
          "type": "list",
          "items": [
            "wear heavy armor with a Strength requirement;",
            "use Strength-based melee weapons;",
            "contribute through Athletics;",
            "play a martial Domain."
          ]
        },
        {
          "type": "paragraph",
          "content": "Not every Cleric has heavy armor proficiency."
        },
        {
          "type": "paragraph",
          "content": "When a Domain grants it, Strength can become a practical secondary score for characters who want to use that equipment without a speed penalty from unmet armor Strength requirements."
        }
      ]
    },
    {
      "id": "dexterity",
      "title": "Dexterity",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Dexterity improves:"
        },
        {
          "type": "list",
          "items": [
            "initiative;",
            "Dexterity saving throws;",
            "common Dexterity skills;",
            "finesse or ranged attacks;",
            "Armor Class in light and medium armor."
          ]
        },
        {
          "type": "paragraph",
          "content": "Medium armor only gains a limited Armor Class benefit from Dexterity, so a medium-armored Cleric usually does not need to maximise Dexterity purely for defense."
        },
        {
          "type": "paragraph",
          "content": "It can still be more useful than Strength for a Cleric who avoids heavy armor and weapon combat."
        }
      ]
    },
    {
      "id": "charisma",
      "title": "Charisma",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Charisma is one of the Cleric's saving throw proficiencies, but it is not the spellcasting ability."
        },
        {
          "type": "paragraph",
          "content": "It may support Persuasion or another social role."
        },
        {
          "type": "paragraph",
          "content": "A priest, preacher, diplomat, or religious leader can reasonably invest in Charisma for character reasons without the base class requiring it."
        }
      ]
    },
    {
      "id": "intelligence",
      "title": "Intelligence",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Intelligence supports Arcana, History, Investigation, Nature, and Religion."
        },
        {
          "type": "paragraph",
          "content": "A scholarly Cleric or a character heavily involved in religious research may value Intelligence."
        },
        {
          "type": "paragraph",
          "content": "However, Religion checks use Intelligence rather than Wisdom under the normal ability-check rules."
        },
        {
          "type": "paragraph",
          "content": "The class's spellcasting remains Wisdom-based."
        }
      ]
    },
    {
      "id": "multiclassing",
      "title": "Multiclassing",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The 2014 multiclassing prerequisite for Cleric is Wisdom 13."
        },
        {
          "type": "paragraph",
          "content": "A multiclass character should also consider whether the intended Cleric spells rely on a high spell save DC or spell attack modifier."
        },
        {
          "type": "paragraph",
          "content": "A character taking Cleric levels only for support spells that do not depend strongly on Wisdom may make different choices than a primarily Cleric character."
        }
      ]
    },
    {
      "id": "practical-priority",
      "title": "Practical priority",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A common Cleric priority is:"
        },
        {
          "type": "paragraph",
          "content": "Wisdom\n→ Constitution\n→ Strength or Dexterity according to armor / weapon plan\n→ remaining abilities according to role"
        },
        {
          "type": "paragraph",
          "content": "For a heavy-armored melee Cleric, Strength may move higher."
        },
        {
          "type": "paragraph",
          "content": "For a medium-armored caster, Dexterity is often more useful."
        },
        {
          "type": "paragraph",
          "content": "The Domain and intended party role should determine the final distribution."
        }
      ]
    }
  ]
} as const;
export default question;

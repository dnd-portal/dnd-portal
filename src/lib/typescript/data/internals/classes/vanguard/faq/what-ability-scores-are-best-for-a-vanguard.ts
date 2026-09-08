export const question = {
  "slug": "what-ability-scores-are-best-for-a-vanguard",
  "question": "What ability scores are best for a Vanguard?",
  "shortAnswer": "Charisma is the Vanguard's primary ability and spellcasting ability. Wisdom is unusually important because the Tool Point pool equals proficiency bonus plus Wisdom modifier. Constitution is the natural defensive third priority for a d8 support character expected to stand near allies, while Strength and Dexterity depend more on equipment and skills because the class already has broad armor training.",
  "introduction": "The Vanguard's ability priorities are unusual because its spellcasting and resource pool use different mental abilities.",
  "sections": [
    {
      "id": "charisma",
      "title": "Charisma",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Charisma is the primary ability."
        },
        {
          "type": "paragraph",
          "content": "It powers Vanguard spellcasting."
        },
        {
          "type": "paragraph",
          "content": "That makes it the most reliable first priority for a character whose main contribution comes through spells."
        },
        {
          "type": "paragraph",
          "content": "Charisma also supports Persuasion and other social interactions appropriate to a protective leader."
        }
      ]
    },
    {
      "id": "wisdom",
      "title": "Wisdom",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Wisdom contributes directly to the Vanguard's Tool Point pool."
        },
        {
          "type": "paragraph",
          "content": "The pool is based on:"
        },
        {
          "type": "paragraph",
          "content": "Proficiency Bonus + Wisdom modifier"
        },
        {
          "type": "paragraph",
          "content": "That gives Wisdom a resource-economy role even though it is not the spellcasting ability."
        },
        {
          "type": "paragraph",
          "content": "Wisdom also supports Insight, Medicine, Animal Handling, and Perception-related play."
        },
        {
          "type": "paragraph",
          "content": "A Vanguard that intends to use Tool Points aggressively should not treat Wisdom as a dump stat."
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
          "content": "The Vanguard uses a d8 Hit Die and several features reward standing near allies or directly accepting danger."
        },
        {
          "type": "paragraph",
          "content": "Living Shield in particular makes durability extremely important."
        },
        {
          "type": "paragraph",
          "content": "Constitution also helps maintain concentration on spells."
        }
      ]
    },
    {
      "id": "strength",
      "title": "Strength",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Strength can matter for heavy equipment, Athletics, and a particular melee concept."
        },
        {
          "type": "paragraph",
          "content": "However, the base class's central support mechanics do not require Strength."
        },
        {
          "type": "paragraph",
          "content": "A Vanguard does not need to imitate a Paladin simply because heavy armor is available."
        }
      ]
    },
    {
      "id": "dexterity",
      "title": "Dexterity",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Dexterity improves initiative, Dexterity saving throws, and several useful skills."
        },
        {
          "type": "paragraph",
          "content": "It matters less for Armor Class when the character uses heavy armor, but remains useful for characters in lighter equipment."
        }
      ]
    },
    {
      "id": "practical-priority",
      "title": "Practical priority",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A conventional support Vanguard often follows:"
        },
        {
          "type": "paragraph",
          "content": "Charisma\n→ Wisdom / Constitution\n→ the other of Wisdom / Constitution\n→ Strength or Dexterity according to equipment and concept"
        },
        {
          "type": "paragraph",
          "content": "Living Shield may raise Constitution earlier."
        },
        {
          "type": "paragraph",
          "content": "A Tool Point-heavy build may prioritise Wisdom more aggressively."
        },
        {
          "type": "paragraph",
          "content": "A spell-heavy Thaumaturgist or Saboteur will usually want Charisma to remain the highest score."
        }
      ]
    },
    {
      "id": "multiclassing-needs-a-table-ruling",
      "title": "Multiclassing needs a table ruling",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The supplied Vanguard rules include multiclass text but do not establish a clear ability-score prerequisite. A campaign that allows Vanguard multiclassing should therefore set that prerequisite explicitly rather than borrowing one from Cleric, Paladin, or another class."
        },
        {
          "type": "paragraph",
          "content": "The Vanguard's ability-score priorities come from its own class mechanics rather than from Cleric, Paladin, or another superficially similar class."
        }
      ]
    }
  ]
} as const;
export default question;

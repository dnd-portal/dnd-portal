export const question = {
  "slug": "what-ability-scores-are-best-for-a-treasure-hunter",
  "question": "What ability scores are best for a Treasure Hunter?",
  "shortAnswer": "Dexterity is the Treasure Hunter's main ability because it powers most finesse and ranged Sneak Attack weapons, Armor Class, initiative, and common infiltration skills. Intelligence is especially valuable for Spy and investigation-focused builds, while Constitution and Wisdom improve durability and awareness. Under the multiple-calling rules, Treasure Hunter requires Dexterity 13.",
  "introduction": "Dexterity is the clear first priority for most Treasure Hunters.",
  "sections": [
    {
      "id": "dexterity",
      "title": "Dexterity",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Dexterity supports:"
        },
        {
          "type": "list",
          "items": [
            "finesse and ranged attacks;",
            "Sneak Attack weapon use;",
            "Armor Class in light armor;",
            "initiative;",
            "Stealth;",
            "Sleight of Hand;",
            "Acrobatics."
          ]
        },
        {
          "type": "paragraph",
          "content": "Burglar especially rewards high Dexterity."
        }
      ]
    },
    {
      "id": "intelligence",
      "title": "Intelligence",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Intelligence is one of the calling's saving throw proficiencies."
        },
        {
          "type": "paragraph",
          "content": "It supports Investigation, Old Lore, and the Spy's Cunning Eye and Weak Spot mechanics."
        },
        {
          "type": "paragraph",
          "content": "A Spy may therefore treat Intelligence as a major secondary score."
        }
      ]
    },
    {
      "id": "wisdom",
      "title": "Wisdom",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Wisdom improves Perception and Insight."
        },
        {
          "type": "paragraph",
          "content": "These are useful for any explorer and especially relevant to Spy observation."
        }
      ]
    },
    {
      "id": "constitution",
      "title": "Constitution",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Constitution improves hit points on the d8 chassis."
        },
        {
          "type": "paragraph",
          "content": "A melee Treasure Hunter benefits from additional durability."
        }
      ]
    },
    {
      "id": "multiclassing",
      "title": "Multiclassing",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The multiple-calling requirement is:"
        },
        {
          "type": "paragraph",
          "content": "Dexterity 13"
        }
      ]
    },
    {
      "id": "practical-priority",
      "title": "Practical priority",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Burglar:"
        },
        {
          "type": "paragraph",
          "content": "Dexterity\n→ Constitution / Wisdom\n→ Intelligence according to skills\n→ remaining abilities"
        },
        {
          "type": "paragraph",
          "content": "Spy:"
        },
        {
          "type": "paragraph",
          "content": "Dexterity\n→ Intelligence\n→ Wisdom / Constitution\n→ remaining abilities"
        }
      ]
    }
  ]
} as const;
export default question;

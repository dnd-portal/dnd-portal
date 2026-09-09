export const question = {
  "slug": "what-ability-scores-are-best-for-a-monster-hunter",
  "question": "What ability scores are best for a Monster Hunter?",
  "shortAnswer": "A Monster Hunter normally prioritises Strength or Dexterity for weapon attacks and Intelligence for class features such as Expert Strike and Knowledgeable Defense. Constitution is usually the next priority because the class uses a d10 Hit Die and frequently fights dangerous creatures directly. The exact order depends on weapon style and Hunting Guild.",
  "introduction": "The Monster Hunter is intentionally split between martial skill and knowledge.",
  "sections": [
    {
      "id": "strength",
      "title": "Strength",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Strength supports heavy melee weapons, Athletics, and direct front-line builds."
        },
        {
          "type": "paragraph",
          "content": "It is especially natural for a Carver-style character."
        }
      ]
    },
    {
      "id": "dexterity",
      "title": "Dexterity",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Dexterity supports ranged and finesse weapons, initiative, Armor Class in lighter armor, and one of the class's saving throw proficiencies."
        },
        {
          "type": "paragraph",
          "content": "A ranged or mobile Hunter normally uses Dexterity as the main attack score."
        }
      ]
    },
    {
      "id": "intelligence",
      "title": "Intelligence",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Intelligence is the signature nonphysical ability."
        },
        {
          "type": "paragraph",
          "content": "It supports monster knowledge and powers important class mechanics."
        },
        {
          "type": "paragraph",
          "content": "Expert Strike lets Intelligence improve both attack and damage rolls with weapons and Unarmed Strikes."
        },
        {
          "type": "paragraph",
          "content": "Knowledgeable Defense can replace saves forced by studied creature types with Intelligence saving throws."
        },
        {
          "type": "paragraph",
          "content": "Several Guild mechanics, especially Occultist, make Intelligence even more important."
        }
      ]
    },
    {
      "id": "constitution",
      "title": "Constitution",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Constitution adds durability on top of the d10 Hit Die."
        },
        {
          "type": "paragraph",
          "content": "The Monster Hunter is deliberately sent against high-threat creatures, so a good hit-point pool remains valuable even for ranged builds."
        }
      ]
    },
    {
      "id": "wisdom",
      "title": "Wisdom",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Wisdom supports Perception, Medicine, and Survival."
        },
        {
          "type": "paragraph",
          "content": "The Monster Grimoire can also interact with Wisdom checks related to studied creatures."
        },
        {
          "type": "paragraph",
          "content": "It is useful but normally sits behind the main attack score, Intelligence, and Constitution."
        }
      ]
    },
    {
      "id": "practical-priority",
      "title": "Practical priority",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Typical Dexterity Monster Hunter:"
        },
        {
          "type": "paragraph",
          "content": "Dexterity\n→ Intelligence\n→ Constitution\n→ Wisdom\n→ remaining abilities"
        },
        {
          "type": "paragraph",
          "content": "Typical Strength Monster Hunter:"
        },
        {
          "type": "paragraph",
          "content": "Strength\n→ Intelligence\n→ Constitution\n→ Dexterity / Wisdom according to equipment and role"
        },
        {
          "type": "paragraph",
          "content": "Guild choice can shift the exact order."
        }
      ]
    }
  ]
} as const;
export default question;

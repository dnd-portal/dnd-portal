export const question = {
  "slug": "what-ability-scores-are-best-for-a-blood-hunter",
  "question": "What ability scores are best for a Blood Hunter?",
  "shortAnswer": "A Blood Hunter normally prioritises Strength or Dexterity for weapon attacks, then Constitution because the class spends its own hit points, and Intelligence or Wisdom for Hemocraft features. The current class allows Intelligence or Wisdom to serve as the Hemocraft modifier. The exact order depends on whether the character is melee, ranged, Order-focused, or more dependent on saving-throw features.",
  "introduction": "Blood Hunters usually care about three categories of ability score: the attack ability, Constitution, and the Hemocraft ability.\n\nThat makes the class more ability-score demanding than a straightforward Fighter.",
  "sections": [
    {
      "id": "strength",
      "title": "Strength",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Strength is a strong primary ability for a melee Blood Hunter using Strength-based weapons."
        },
        {
          "type": "paragraph",
          "content": "It supports melee attack rolls, melee damage, Athletics, and heavier weapon plans."
        }
      ]
    },
    {
      "id": "dexterity",
      "title": "Dexterity",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Dexterity is the alternative main attack ability."
        },
        {
          "type": "paragraph",
          "content": "It supports finesse weapons, ranged weapons, initiative, Dexterity saving throws, Armor Class in light or medium armor, Stealth, and Acrobatics."
        },
        {
          "type": "paragraph",
          "content": "A ranged or finesse Blood Hunter will normally prioritise Dexterity over Strength."
        }
      ]
    },
    {
      "id": "constitution",
      "title": "Constitution",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Constitution is unusually important."
        },
        {
          "type": "paragraph",
          "content": "It increases hit points on top of the d10 Hit Die."
        },
        {
          "type": "paragraph",
          "content": "That matters because Crimson Rite and amplified Blood Curses can cause self-damage."
        },
        {
          "type": "paragraph",
          "content": "A Blood Hunter with poor Constitution has less room to use the class's defining mechanics safely."
        }
      ]
    },
    {
      "id": "intelligence-or-wisdom",
      "title": "Intelligence or Wisdom",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The current Hemocraft rules allow the Blood Hunter to use Intelligence or Wisdom as the Hemocraft modifier."
        },
        {
          "type": "paragraph",
          "content": "That modifier affects the save DC of relevant class features and later defensive benefits."
        },
        {
          "type": "paragraph",
          "content": "Choose the score that fits both mechanics and concept."
        },
        {
          "type": "paragraph",
          "content": "Intelligence naturally supports knowledge and investigation."
        },
        {
          "type": "paragraph",
          "content": "Wisdom naturally supports perception, tracking, and survival."
        }
      ]
    },
    {
      "id": "do-you-need-both",
      "title": "Do you need both?",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Usually not."
        },
        {
          "type": "paragraph",
          "content": "The current version lets one of them serve as the Hemocraft modifier."
        },
        {
          "type": "paragraph",
          "content": "Investing heavily in both can spread the character too thin unless the campaign or concept provides a specific reason."
        }
      ]
    },
    {
      "id": "practical-priorities",
      "title": "Practical priorities",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Typical Dexterity hunter:"
        },
        {
          "type": "paragraph",
          "content": "Dexterity\n→ Constitution\n→ Intelligence or Wisdom\n→ remaining abilities"
        },
        {
          "type": "paragraph",
          "content": "Typical Strength hunter:"
        },
        {
          "type": "paragraph",
          "content": "Strength\n→ Constitution\n→ Intelligence or Wisdom\n→ Dexterity / remaining abilities according to armor and role"
        },
        {
          "type": "paragraph",
          "content": "An Order may change the exact balance."
        }
      ]
    }
  ]
} as const;
export default question;

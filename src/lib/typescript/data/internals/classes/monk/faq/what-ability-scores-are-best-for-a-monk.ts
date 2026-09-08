export const question = {
  "slug": "what-ability-scores-are-best-for-a-monk",
  "question": "What ability scores are best for a Monk?",
  "shortAnswer": "Dexterity is normally the Monk's highest ability score because it powers most Martial Arts attacks and improves Armor Class and initiative. Wisdom is usually the second priority because it also improves Unarmored Defense and sets the saving throw DC for many ki features. Constitution supports hit points. In the 2014 multiclassing rules, a Monk requires Dexterity 13 and Wisdom 13.",
  "introduction": "The 2014 Monk is strongly dependent on both Dexterity and Wisdom.\n\nThis makes it more ability-score intensive than many martial classes.",
  "sections": [
    {
      "id": "dexterity",
      "title": "Dexterity",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Dexterity is normally the first priority."
        },
        {
          "type": "paragraph",
          "content": "Martial Arts allows the Monk to use Dexterity instead of Strength for qualifying unarmed strikes and monk weapons."
        },
        {
          "type": "paragraph",
          "content": "Dexterity also improves:"
        },
        {
          "type": "list",
          "items": [
            "Armor Class through Unarmored Defense;",
            "initiative;",
            "Dexterity saving throws;",
            "Acrobatics;",
            "Stealth;",
            "other Dexterity-based checks."
          ]
        },
        {
          "type": "paragraph",
          "content": "One high Dexterity score therefore improves offense, defense, and mobility-related play."
        }
      ]
    },
    {
      "id": "wisdom",
      "title": "Wisdom",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Wisdom is normally the second core score."
        },
        {
          "type": "paragraph",
          "content": "It contributes directly to Unarmored Defense:"
        },
        {
          "type": "paragraph",
          "content": "10 + Dexterity modifier + Wisdom modifier"
        },
        {
          "type": "paragraph",
          "content": "It also determines the saving throw DC used by many ki features:"
        },
        {
          "type": "paragraph",
          "content": "8 + proficiency bonus + Wisdom modifier"
        },
        {
          "type": "paragraph",
          "content": "That matters particularly for features such as Stunning Strike and subclass abilities that require saving throws."
        },
        {
          "type": "paragraph",
          "content": "Wisdom also improves Perception, Insight, and other useful skills."
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
          "content": "The Monk uses a d8 Hit Die and frequently operates near enemies."
        },
        {
          "type": "paragraph",
          "content": "A good Constitution score helps compensate for the fact that the class does not normally use heavy armor and may take damage despite its mobility."
        },
        {
          "type": "paragraph",
          "content": "Constitution does not normally improve Monk feature DCs, so it generally comes after Dexterity and Wisdom."
        }
      ]
    },
    {
      "id": "strength",
      "title": "Strength",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Strength is usually a lower priority."
        },
        {
          "type": "paragraph",
          "content": "Martial Arts allows Dexterity to replace Strength for qualifying attacks."
        },
        {
          "type": "paragraph",
          "content": "Strength can still matter for Athletics, carrying capacity, grappling-oriented concepts, or unusual builds."
        },
        {
          "type": "paragraph",
          "content": "A conventional Monk usually gains more from Dexterity."
        }
      ]
    },
    {
      "id": "intelligence-and-charisma",
      "title": "Intelligence and Charisma",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Neither Intelligence nor Charisma powers the base Monk."
        },
        {
          "type": "paragraph",
          "content": "They can still support a character concept."
        },
        {
          "type": "paragraph",
          "content": "A scholarly martial artist may value Intelligence."
        },
        {
          "type": "paragraph",
          "content": "A persuasive teacher, spiritual leader, or intimidating warrior may value Charisma."
        },
        {
          "type": "paragraph",
          "content": "The class mechanics do not normally require either."
        }
      ]
    },
    {
      "id": "ability-score-tension",
      "title": "Ability-score tension",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Because Dexterity and Wisdom both improve Armor Class and class performance, a Monk often wants both to become high."
        },
        {
          "type": "paragraph",
          "content": "This can make feat selection more expensive than on a class that needs only one primary score."
        },
        {
          "type": "paragraph",
          "content": "A Monk taking many feats should understand the opportunity cost of delaying Dexterity or Wisdom increases."
        }
      ]
    },
    {
      "id": "multiclassing",
      "title": "Multiclassing",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The 2014 Monk multiclassing prerequisites are:"
        },
        {
          "type": "paragraph",
          "content": "Dexterity 13\nWisdom 13"
        },
        {
          "type": "paragraph",
          "content": "Both are required."
        },
        {
          "type": "paragraph",
          "content": "A multiclass Monk should also remember that several class features require no armor and no shield, which may conflict with the equipment assumptions of another class."
        }
      ]
    },
    {
      "id": "practical-priority",
      "title": "Practical priority",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A typical Monk follows:"
        },
        {
          "type": "paragraph",
          "content": "Dexterity\n→ Wisdom\n→ Constitution\n→ remaining abilities according to concept"
        },
        {
          "type": "paragraph",
          "content": "Some subclass builds can alter the exact balance between Dexterity and Wisdom, but both remain important to the 2014 Monk chassis."
        }
      ]
    }
  ]
} as const;
export default question;

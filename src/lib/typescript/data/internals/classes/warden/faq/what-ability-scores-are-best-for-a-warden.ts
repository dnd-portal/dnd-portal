export const question = {
  "slug": "what-ability-scores-are-best-for-a-warden",
  "question": "What ability scores are best for a Warden?",
  "shortAnswer": "Dexterity and Wisdom are the Warden's primary abilities. Dexterity supports ranged and finesse weapons, initiative, and common scouting skills, while Wisdom powers the calling's awareness and threat-detection identity. Constitution is a useful third priority for a d10 martial character. Under the multiple-calling rules, Warden requires Wisdom 13.",
  "introduction": "The Warden's highlighted ability pair is Dexterity and Wisdom.",
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
            "ranged attacks;",
            "finesse attacks;",
            "initiative;",
            "Stealth;",
            "Armor Class in lighter armor;",
            "Dexterity saving throws."
          ]
        },
        {
          "type": "paragraph",
          "content": "Forayer benefits particularly strongly from a high Dexterity score."
        }
      ]
    },
    {
      "id": "wisdom",
      "title": "Wisdom",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Wisdom supports:"
        },
        {
          "type": "list",
          "items": [
            "Rumour of the Earth;",
            "Perception;",
            "Hunting and tracking identity;",
            "Insight;",
            "Survival-style play;",
            "Forayer initiative through Ambusher."
          ]
        },
        {
          "type": "paragraph",
          "content": "It is also one of the Warden's saving throw proficiencies."
        }
      ]
    },
    {
      "id": "constitution",
      "title": "Constitution",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Constitution improves hit points on top of the d10 Hit Die."
        },
        {
          "type": "paragraph",
          "content": "A front-line Warden benefits from stronger durability."
        }
      ]
    },
    {
      "id": "strength",
      "title": "Strength",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Strength can still be useful for a melee Warden using non-finesse martial weapons."
        },
        {
          "type": "paragraph",
          "content": "It is also one of the calling's saving throw proficiencies."
        },
        {
          "type": "paragraph",
          "content": "The exact weapon build determines whether Strength should rise above Constitution."
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
          "content": "Wisdom 13"
        }
      ]
    },
    {
      "id": "practical-priority",
      "title": "Practical priority",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Typical ranged/Forayer Warden:"
        },
        {
          "type": "paragraph",
          "content": "Dexterity\n→ Wisdom\n→ Constitution\n→ remaining abilities"
        },
        {
          "type": "paragraph",
          "content": "Typical melee Hunter:"
        },
        {
          "type": "paragraph",
          "content": "Strength or Dexterity according to weapon\n→ Wisdom\n→ Constitution\n→ remaining abilities"
        }
      ]
    }
  ]
} as const;
export default question;

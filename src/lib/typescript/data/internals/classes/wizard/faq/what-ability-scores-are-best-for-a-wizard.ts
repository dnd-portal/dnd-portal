export const question = {
  "slug": "what-ability-scores-are-best-for-a-wizard",
  "question": "What ability scores are best for a Wizard?",
  "shortAnswer": "Intelligence is normally the Wizard's highest ability score because it powers Wizard spellcasting and determines prepared-spell capacity in the 2014 rules. Constitution is usually the next priority for hit points and concentration, while Dexterity improves Armor Class and initiative because the base Wizard lacks armor proficiency. The 2014 Wizard multiclassing prerequisite is Intelligence 13.",
  "introduction": "The Wizard has a very clear primary ability: Intelligence.\n\nConstitution and Dexterity then provide the defensive foundation needed to keep a d6 spellcaster alive.",
  "sections": [
    {
      "id": "intelligence",
      "title": "Intelligence",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Intelligence determines:"
        },
        {
          "type": "list",
          "items": [
            "Wizard spell attack modifier;",
            "Wizard spell save DC;",
            "prepared-spell capacity."
          ]
        },
        {
          "type": "paragraph",
          "content": "It also supports Arcana, Investigation, History, Nature, and Religion."
        },
        {
          "type": "paragraph",
          "content": "For most Wizards, Intelligence should be the highest ability score."
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
          "content": "The Wizard has a d6 Hit Die, so even a small Constitution improvement matters."
        },
        {
          "type": "paragraph",
          "content": "Constitution also powers concentration saving throws."
        },
        {
          "type": "paragraph",
          "content": "Because many powerful Wizard spells require concentration, this is one of the most important defensive secondary scores."
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
            "Armor Class;",
            "initiative;",
            "Dexterity saving throws;",
            "Stealth and Acrobatics."
          ]
        },
        {
          "type": "paragraph",
          "content": "The base Wizard normally lacks armor proficiency."
        },
        {
          "type": "paragraph",
          "content": "That makes Dexterity important for ordinary defense unless another feature, subclass, species, or multiclass changes the armor situation."
        }
      ]
    },
    {
      "id": "wisdom",
      "title": "Wisdom",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Wisdom improves Perception, Insight, and Wisdom saving throws."
        },
        {
          "type": "paragraph",
          "content": "The Wizard is already proficient in Wisdom saves."
        },
        {
          "type": "paragraph",
          "content": "A reasonable Wisdom score can help resist dangerous mental effects."
        }
      ]
    },
    {
      "id": "charisma",
      "title": "Charisma",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Charisma supports social skills."
        },
        {
          "type": "paragraph",
          "content": "It is not required by the base Wizard."
        },
        {
          "type": "paragraph",
          "content": "A charismatic scholar, diplomat, or manipulator can invest in it for concept reasons."
        }
      ]
    },
    {
      "id": "strength",
      "title": "Strength",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Strength is usually the lowest mechanical priority."
        },
        {
          "type": "paragraph",
          "content": "It can matter for Athletics, carrying capacity, or an unusual martial build."
        },
        {
          "type": "paragraph",
          "content": "Bladesinger still usually relies more strongly on Dexterity than Strength."
        }
      ]
    },
    {
      "id": "multiclassing",
      "title": "Multiclassing",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The 2014 Wizard multiclassing prerequisite is:"
        },
        {
          "type": "paragraph",
          "content": "Intelligence 13"
        },
        {
          "type": "paragraph",
          "content": "A multiclass dip with only 13 Intelligence may be sufficient for utility spells that do not depend on spell attack rolls or saving throws."
        },
        {
          "type": "paragraph",
          "content": "A primarily Wizard character normally wants substantially more."
        }
      ]
    },
    {
      "id": "practical-priority",
      "title": "Practical priority",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A conventional Wizard often follows:"
        },
        {
          "type": "paragraph",
          "content": "Intelligence\n→ Constitution\n→ Dexterity\n→ Wisdom\n→ Charisma / Strength according to concept"
        },
        {
          "type": "paragraph",
          "content": "Subclass, armor access, and feats can alter the exact order."
        }
      ]
    }
  ]
} as const;
export default question;

export const question = {
  "slug": "what-ability-scores-are-best-for-a-pugilist",
  "question": "What ability scores are best for a Pugilist?",
  "shortAnswer": "Strength is normally the Pugilist's highest ability score and Constitution is the second priority. Strength powers the class's close-range attacks, while Constitution increases hit points and can replace Dexterity when calculating Armor Class through Iron Chin. Some Fight Clubs make Charisma, Wisdom, or another secondary ability more valuable. This version requires Strength 13 and Constitution 13 for multiclassing.",
  "introduction": "This Pugilist has one of the clearest two-stat foundations among martial classes.",
  "sections": [
    {
      "id": "strength",
      "title": "Strength",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Strength is the recommended primary ability."
        },
        {
          "type": "paragraph",
          "content": "It supports:"
        },
        {
          "type": "list",
          "items": [
            "unarmed attack rolls;",
            "pugilist weapon attacks;",
            "damage;",
            "Athletics;",
            "grappling and shoving."
          ]
        },
        {
          "type": "paragraph",
          "content": "The Squared Circle in particular rewards a strong grappling foundation."
        }
      ]
    },
    {
      "id": "constitution",
      "title": "Constitution",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Constitution is almost as important."
        },
        {
          "type": "paragraph",
          "content": "The class has a d8 Hit Die but expects to fight at close range."
        },
        {
          "type": "paragraph",
          "content": "Constitution increases hit points and also interacts with Iron Chin."
        },
        {
          "type": "paragraph",
          "content": "While wearing light armor or no armor and not using a shield, Iron Chin lets Constitution replace Dexterity when determining the character's Armor Class."
        },
        {
          "type": "paragraph",
          "content": "Brace Up also uses Constitution in its temporary-hit-point calculation."
        },
        {
          "type": "paragraph",
          "content": "This means Constitution supports both passive and active durability."
        }
      ]
    },
    {
      "id": "dexterity",
      "title": "Dexterity",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Dexterity still improves initiative and Dexterity saving throws."
        },
        {
          "type": "paragraph",
          "content": "At 7th level, Fancy Footwork grants Dexterity saving throw proficiency in this Pugilist version."
        },
        {
          "type": "paragraph",
          "content": "A Pugilist does not normally need high Dexterity purely for Armor Class if Iron Chin is being used effectively."
        }
      ]
    },
    {
      "id": "charisma",
      "title": "Charisma",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Charisma can become important for particular Fight Clubs."
        },
        {
          "type": "paragraph",
          "content": "Arena Royale uses a theatrical persona and social mechanics."
        },
        {
          "type": "paragraph",
          "content": "Piss & Vinegar uses intimidation and provocation mechanics that can rely on Charisma."
        },
        {
          "type": "paragraph",
          "content": "A character using one of those Fight Clubs may reasonably invest more heavily in Charisma than a conventional brawler."
        }
      ]
    },
    {
      "id": "wisdom-and-intelligence",
      "title": "Wisdom and Intelligence",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Wisdom supports Perception and Insight."
        },
        {
          "type": "paragraph",
          "content": "Bloodhound Bruisers has an investigative identity and may make awareness-oriented ability scores more attractive."
        },
        {
          "type": "paragraph",
          "content": "Intelligence supports Investigation and other knowledge-based detective work."
        },
        {
          "type": "paragraph",
          "content": "Neither replaces Strength or Constitution in the base class."
        }
      ]
    },
    {
      "id": "multiclassing",
      "title": "Multiclassing",
      "blocks": [
        {
          "type": "paragraph",
          "content": "This Pugilist's multiclass rules give the prerequisites:"
        },
        {
          "type": "paragraph",
          "content": "Strength 13\nConstitution 13"
        },
        {
          "type": "paragraph",
          "content": "Both are required."
        },
        {
          "type": "paragraph",
          "content": "A multiclass character gains only the proficiencies stated by the Pugilist's multiclass table rather than the full 1st-level proficiency package."
        }
      ]
    },
    {
      "id": "practical-priority",
      "title": "Practical priority",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Typical Pugilist:"
        },
        {
          "type": "paragraph",
          "content": "Strength\n→ Constitution\n→ Dexterity / Wisdom according to role\n→ Charisma or Intelligence according to Fight Club"
        },
        {
          "type": "paragraph",
          "content": "Arena Royale or Piss & Vinegar may move Charisma higher."
        },
        {
          "type": "paragraph",
          "content": "The Squared Circle usually reinforces Strength."
        },
        {
          "type": "paragraph",
          "content": "The important rule is that Constitution is not merely “more HP” for this class; it is embedded throughout its defensive identity."
        }
      ]
    }
  ]
} as const;
export default question;

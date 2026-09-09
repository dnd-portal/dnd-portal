export const question = {
  "slug": "what-ability-scores-are-best-for-a-shinobi",
  "question": "What ability scores are best for a Shinobi?",
  "shortAnswer": "Dexterity and Wisdom are the Shinobi's primary abilities. Dexterity improves qualifying weapon attacks, Armor Class, initiative, and mobility skills, while Wisdom powers Technique attack rolls and save DCs. Constitution is normally the next priority for hit points and concentration. The current Shinobi multiclassing requirement is Dexterity 13 and Wisdom 13.",
  "introduction": "The Shinobi is intentionally built around Dexterity and Wisdom.\n\nNeither ability completely replaces the other.",
  "sections": [
    {
      "id": "dexterity",
      "title": "Dexterity",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Dexterity normally controls the martial side of the class."
        },
        {
          "type": "paragraph",
          "content": "It improves:"
        },
        {
          "type": "list",
          "items": [
            "finesse and other qualifying weapon attacks;",
            "weapon damage when Dexterity is used;",
            "Armor Class in light armor;",
            "initiative;",
            "Dexterity saving throws;",
            "Stealth;",
            "Acrobatics;",
            "Sleight of Hand."
          ]
        },
        {
          "type": "paragraph",
          "content": "Because the class gains Extra Attack, weapon accuracy remains relevant even for a Technique-heavy character."
        }
      ]
    },
    {
      "id": "wisdom",
      "title": "Wisdom",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Wisdom controls the supernatural side."
        },
        {
          "type": "paragraph",
          "content": "The current class uses Wisdom as the Technique ability."
        },
        {
          "type": "paragraph",
          "content": "The Technique save DC is based on:"
        },
        {
          "type": "paragraph",
          "content": "8 + Proficiency Bonus + Wisdom modifier"
        },
        {
          "type": "paragraph",
          "content": "and Technique attack rolls use:"
        },
        {
          "type": "paragraph",
          "content": "Proficiency Bonus + Wisdom modifier"
        },
        {
          "type": "paragraph",
          "content": "Wisdom also supports Insight, Medicine, Perception, Survival, and Animal Handling."
        },
        {
          "type": "paragraph",
          "content": "A Shinobi using many saving-throw or Technique-attack effects should keep Wisdom high."
        }
      ]
    },
    {
      "id": "constitution",
      "title": "Constitution",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Constitution increases hit points on the d8 chassis."
        },
        {
          "type": "paragraph",
          "content": "It also improves concentration saving throws for Techniques that require concentration."
        },
        {
          "type": "paragraph",
          "content": "At 13th level, Unbroken Focus gives stronger concentration protection, but a good Constitution score remains useful throughout the entire progression."
        }
      ]
    },
    {
      "id": "intelligence",
      "title": "Intelligence",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The Shinobi is proficient in Intelligence saving throws."
        },
        {
          "type": "paragraph",
          "content": "Intelligence also supports Arcana, Investigation, Nature, History, and Religion-style knowledge where the campaign uses those skills."
        },
        {
          "type": "paragraph",
          "content": "However, Intelligence is not the Technique ability in the current class."
        },
        {
          "type": "paragraph",
          "content": "Do not raise it simply because it is one of the saving throw proficiencies unless the character concept benefits from the associated skills."
        }
      ]
    },
    {
      "id": "strength",
      "title": "Strength",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Strength is generally a lower priority for the standard class because the weapon package strongly supports finesse-oriented combat."
        },
        {
          "type": "paragraph",
          "content": "It can still matter for Athletics, carrying capacity, and a specific Taijutsu or grappling concept if that Path or Technique actually rewards it."
        }
      ]
    },
    {
      "id": "charisma",
      "title": "Charisma",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Charisma supports Deception, Persuasion, Intimidation, and Performance."
        },
        {
          "type": "paragraph",
          "content": "A spy, infiltrator, or social Shinobi may value it, but the base class does not use Charisma for Technique mechanics."
        }
      ]
    },
    {
      "id": "multiclassing",
      "title": "Multiclassing",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The current Shinobi multiclass rules require:"
        },
        {
          "type": "paragraph",
          "content": "Dexterity 13\nWisdom 13"
        },
        {
          "type": "paragraph",
          "content": "for multiclassing into or out of Shinobi."
        },
        {
          "type": "paragraph",
          "content": "Chakra Points and Technique progression depend only on Shinobi level and remain separate from other class resources."
        }
      ]
    },
    {
      "id": "practical-priority",
      "title": "Practical priority",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A conventional Shinobi often follows:"
        },
        {
          "type": "paragraph",
          "content": "Dexterity / Wisdom\n→ the other of Dexterity / Wisdom\n→ Constitution\n→ remaining abilities according to Path and concept"
        },
        {
          "type": "paragraph",
          "content": "A weapon-heavy Taijutsu character may raise Dexterity first."
        },
        {
          "type": "paragraph",
          "content": "A control- or healing-heavy Technique user may raise Wisdom more aggressively."
        },
        {
          "type": "paragraph",
          "content": "The important point is that both primary abilities contribute to the class's intended identity."
        }
      ]
    }
  ]
} as const;
export default question;

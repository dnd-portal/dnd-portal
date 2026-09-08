export const question = {
  "slug": "what-ability-scores-are-best-for-a-gunslinger",
  "question": "What ability scores are best for a Gunslinger?",
  "shortAnswer": "Dexterity is the Gunslinger's highest ability score because it powers the class's firearm attacks and supports Armor Class and initiative. Constitution is usually the second priority because the class uses a d8 Hit Die. Charisma fits the class's social identity and is one of its saving throw proficiencies, while a subclass such as Spellslinger can change secondary priorities.",
  "introduction": "The Gunslinger has a clear primary ability: Dexterity.\n\nThe remaining scores depend on subclass and character concept.",
  "sections": [
    {
      "id": "dexterity",
      "title": "Dexterity",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Dexterity powers firearm attacks."
        },
        {
          "type": "paragraph",
          "content": "It also improves initiative, Armor Class in light armor, Dexterity saving throws, Acrobatics, and Sleight of Hand."
        },
        {
          "type": "paragraph",
          "content": "This makes it the most efficient ability in the class."
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
          "content": "The Gunslinger uses a d8 Hit Die and can attract attention once firearm damage becomes threatening."
        },
        {
          "type": "paragraph",
          "content": "A good Constitution score provides more room for mistakes and close-range pressure."
        }
      ]
    },
    {
      "id": "charisma",
      "title": "Charisma",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Charisma is one of the Gunslinger's saving throw proficiencies."
        },
        {
          "type": "paragraph",
          "content": "It also supports Deception, Intimidation, and Persuasion, all natural skills for several Gunslinger concepts."
        },
        {
          "type": "paragraph",
          "content": "Certain subclasses may value it more heavily."
        },
        {
          "type": "paragraph",
          "content": "It does not replace Dexterity for the base firearm chassis."
        }
      ]
    },
    {
      "id": "wisdom",
      "title": "Wisdom",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Wisdom supports Perception and Insight."
        },
        {
          "type": "paragraph",
          "content": "A sharpshooter, scout, or bounty-hunter concept may value awareness highly."
        }
      ]
    },
    {
      "id": "intelligence",
      "title": "Intelligence",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Intelligence may support a technical or Spellslinger-oriented concept where the current subclass mechanics make it relevant."
        },
        {
          "type": "paragraph",
          "content": "Spellslinger makes Intelligence significantly more relevant because that Creed adds arcane spellcasting; most other Gunslingers can usually treat Intelligence as a secondary or concept-driven score."
        }
      ]
    },
    {
      "id": "strength",
      "title": "Strength",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Strength is normally a low priority for the standard class."
        },
        {
          "type": "paragraph",
          "content": "A firearm build gains little from raising it unless equipment, subclass, or character concept creates a specific need."
        }
      ]
    },
    {
      "id": "practical-priority",
      "title": "Practical priority",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Typical Gunslinger:"
        },
        {
          "type": "paragraph",
          "content": "Dexterity\n→ Constitution\n→ Charisma / Wisdom according to subclass and role\n→ remaining abilities"
        },
        {
          "type": "paragraph",
          "content": "The chosen Creed can shift the secondary order: Spellslinger raises the value of Intelligence, while social or covert concepts may place more weight on Charisma or Wisdom."
        }
      ]
    }
  ]
} as const;
export default question;

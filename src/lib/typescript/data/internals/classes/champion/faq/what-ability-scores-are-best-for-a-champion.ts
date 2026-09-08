export const question = {
  "slug": "what-ability-scores-are-best-for-a-champion",
  "question": "What ability scores are best for a Champion?",
  "shortAnswer": "Strength or Dexterity is the Champion's main combat ability depending on weapon choice, while Constitution is the most important secondary score because the class uses a d10 Hit Die and is expected to remain in weapon combat. Strength suits heavy melee builds; Dexterity suits ranged and finesse builds. The Champion's exact specialisation can shift the final priority.",
  "introduction": "Champion can be built around Strength or Dexterity.\n\nConstitution supports both versions.",
  "sections": [
    {
      "id": "strength",
      "title": "Strength",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Strength is ideal for heavy melee weapons, Athletics, and a conventional front-line warrior."
        },
        {
          "type": "paragraph",
          "content": "If the Champion's specialisation rewards Strength-based attacks, Strength becomes even more important."
        }
      ]
    },
    {
      "id": "dexterity",
      "title": "Dexterity",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Dexterity is ideal for bows, ranged weapons, finesse weapons, initiative, Dexterity saving throws, and several mobility skills."
        },
        {
          "type": "paragraph",
          "content": "A dedicated ranged Champion will normally place Dexterity first."
        }
      ]
    },
    {
      "id": "constitution",
      "title": "Constitution",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Constitution improves hit points on the d10 chassis."
        },
        {
          "type": "paragraph",
          "content": "It is also one of the Champion's saving throw proficiencies."
        },
        {
          "type": "paragraph",
          "content": "A weapon-focused character expects to take damage, so Constitution is a strong secondary priority."
        }
      ]
    },
    {
      "id": "wisdom",
      "title": "Wisdom",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Wisdom can support awareness, Insight, Hunting, and travel-related competence."
        },
        {
          "type": "paragraph",
          "content": "It does not normally power the base martial features."
        }
      ]
    },
    {
      "id": "charisma-and-intelligence",
      "title": "Charisma and Intelligence",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Neither is central to the base Champion chassis."
        },
        {
          "type": "paragraph",
          "content": "They can support leadership, lore, or character concept."
        },
        {
          "type": "paragraph",
          "content": "Captain uses Charisma mechanically much more heavily than Champion."
        }
      ]
    },
    {
      "id": "practical-priorities",
      "title": "Practical priorities",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Typical Strength Champion:"
        },
        {
          "type": "paragraph",
          "content": "Strength\n→ Constitution\n→ Dexterity / Wisdom according to equipment and role\n→ remaining abilities"
        },
        {
          "type": "paragraph",
          "content": "Typical Dexterity Champion:"
        },
        {
          "type": "paragraph",
          "content": "Dexterity\n→ Constitution\n→ Wisdom\n→ remaining abilities"
        },
        {
          "type": "paragraph",
          "content": "Sharp-shooter generally pushes a Champion toward Dexterity and ranged attacks, while Slayer usually makes Strength and melee weapon damage more attractive, so the chosen Way can change the order of secondary priorities."
        }
      ]
    }
  ]
} as const;
export default question;

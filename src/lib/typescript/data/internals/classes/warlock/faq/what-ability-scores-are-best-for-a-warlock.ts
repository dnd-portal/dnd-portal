export const question = {
  "slug": "what-ability-scores-are-best-for-a-warlock",
  "question": "What ability scores are best for a Warlock?",
  "shortAnswer": "Charisma is normally the Warlock's highest ability score because it powers Pact Magic and many Invocations and Patron features. Constitution is usually the next priority for hit points and concentration, while Dexterity improves Armor Class and initiative in light armor. A weapon-focused build can create different priorities. The 2014 Warlock multiclassing prerequisite is Charisma 13.",
  "introduction": "Most 2014 Warlocks prioritise Charisma, Constitution, and Dexterity.\n\nThe exact order can change with Pact Boon and Patron.",
  "sections": [
    {
      "id": "charisma",
      "title": "Charisma",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Charisma is the Warlock's spellcasting ability."
        },
        {
          "type": "paragraph",
          "content": "It determines:"
        },
        {
          "type": "list",
          "items": [
            "spell attack modifier;",
            "spell save DC."
          ]
        },
        {
          "type": "paragraph",
          "content": "It also interacts with important options such as Agonizing Blast and several Patron or subclass features."
        },
        {
          "type": "paragraph",
          "content": "For most Warlocks, Charisma should be the highest score."
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
          "content": "The Warlock uses a d8 Hit Die."
        },
        {
          "type": "paragraph",
          "content": "Constitution also helps maintain concentration, which matters because spending a limited Pact Magic slot on a concentration spell and immediately losing it is costly."
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
            "Armor Class in light armor;",
            "initiative;",
            "Dexterity saving throws;",
            "common skills."
          ]
        },
        {
          "type": "paragraph",
          "content": "A conventional ranged Warlock often values Dexterity as the main defensive secondary stat."
        }
      ]
    },
    {
      "id": "strength",
      "title": "Strength",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Strength is usually a lower priority for a conventional caster Warlock."
        },
        {
          "type": "paragraph",
          "content": "A weapon-focused Pact of the Blade build may care more about Strength or Dexterity depending on weapon choices and subclass."
        },
        {
          "type": "paragraph",
          "content": "Hexblade can change the usual weapon ability interaction."
        },
        {
          "type": "paragraph",
          "content": "A Patron can change that priority when one of its features directly uses another ability score."
        }
      ]
    },
    {
      "id": "wisdom",
      "title": "Wisdom",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Wisdom is one of the Warlock's saving throw proficiencies."
        },
        {
          "type": "paragraph",
          "content": "It also improves Perception and Insight."
        },
        {
          "type": "paragraph",
          "content": "It does not power Pact Magic."
        }
      ]
    },
    {
      "id": "intelligence",
      "title": "Intelligence",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Intelligence can support Arcana, Investigation, History, and an occult-scholar identity."
        },
        {
          "type": "paragraph",
          "content": "The 2014 Warlock still uses Charisma for spellcasting even if the character is narratively very scholarly."
        }
      ]
    },
    {
      "id": "multiclassing",
      "title": "Multiclassing",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The 2014 Warlock multiclassing prerequisite is:"
        },
        {
          "type": "paragraph",
          "content": "Charisma 13"
        },
        {
          "type": "paragraph",
          "content": "This creates natural mechanical compatibility with other Charisma classes."
        }
      ]
    },
    {
      "id": "practical-priority",
      "title": "Practical priority",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Typical ranged Warlock:"
        },
        {
          "type": "paragraph",
          "content": "Charisma\n→ Constitution\n→ Dexterity\n→ Wisdom\n→ Intelligence / Strength"
        },
        {
          "type": "paragraph",
          "content": "Weapon-focused builds may change the position of Strength or Dexterity."
        },
        {
          "type": "paragraph",
          "content": "The Patron and Pact Boon should be considered before finalising the array."
        }
      ]
    }
  ]
} as const;
export default question;

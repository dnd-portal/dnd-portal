export const question = {
  "slug": "what-ability-scores-are-best-for-a-druid",
  "question": "What ability scores are best for a Druid?",
  "shortAnswer": "Wisdom is normally the Druid's highest ability score because it powers Druid spellcasting and prepared spells. Constitution is usually the next priority for hit points and concentration, while Dexterity helps initiative and Armor Class. Strength is often less important because many Druids fight through spells or Wild Shape. The 2014 multiclassing prerequisite is Wisdom 13.",
  "introduction": "Most Druids prioritise Wisdom first, Constitution second, and Dexterity after that.\n\nWild Shape can reduce the importance of the Druid's own physical scores in situations where a beast form replaces them.",
  "sections": [
    {
      "id": "wisdom",
      "title": "Wisdom",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Wisdom is the Druid's spellcasting ability."
        },
        {
          "type": "paragraph",
          "content": "It determines:"
        },
        {
          "type": "list",
          "items": [
            "spell attack modifier;",
            "spell save DC;",
            "prepared-spell capacity under the 2014 rules."
          ]
        },
        {
          "type": "paragraph",
          "content": "It also supports important skills such as Perception, Insight, Survival, Animal Handling, and Medicine."
        },
        {
          "type": "paragraph",
          "content": "A high Wisdom score therefore improves both magical and nonmagical aspects of the class."
        }
      ]
    },
    {
      "id": "constitution",
      "title": "Constitution",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Constitution increases hit points and helps concentration saving throws."
        },
        {
          "type": "paragraph",
          "content": "This matters because Druids frequently rely on concentration for:"
        },
        {
          "type": "list",
          "items": [
            "battlefield control;",
            "summons;",
            "buffs;",
            "environmental effects."
          ]
        },
        {
          "type": "paragraph",
          "content": "Even a Druid that plans to use Wild Shape regularly still benefits from good Constitution while in normal form."
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
            "initiative;",
            "Dexterity saving throws;",
            "Stealth and other Dexterity skills;",
            "Armor Class depending on equipment."
          ]
        },
        {
          "type": "paragraph",
          "content": "The class's traditional armor restriction can make equipment choices more campaign-specific than for many other medium-armored classes."
        },
        {
          "type": "paragraph",
          "content": "Dexterity is therefore a useful defensive score, but it normally remains behind Wisdom."
        }
      ]
    },
    {
      "id": "strength",
      "title": "Strength",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Strength is not usually a core Druid ability."
        },
        {
          "type": "paragraph",
          "content": "A conventional caster can often deprioritise it."
        },
        {
          "type": "paragraph",
          "content": "A Druid who transforms into a beast uses the beast form's relevant physical statistics while transformed under Wild Shape's rules, reducing the need to invest in Strength purely for animal-form combat."
        },
        {
          "type": "paragraph",
          "content": "Strength can still matter for Athletics, carrying capacity, and a specific weapon or character concept."
        }
      ]
    },
    {
      "id": "intelligence-and-charisma",
      "title": "Intelligence and Charisma",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Intelligence supports Nature, Arcana, Investigation, History, and Religion."
        },
        {
          "type": "paragraph",
          "content": "A scholarly naturalist may value it more than a conventional Druid."
        },
        {
          "type": "paragraph",
          "content": "Charisma may support a social or spiritual leader concept."
        },
        {
          "type": "paragraph",
          "content": "Neither score powers the base Druid's spellcasting."
        }
      ]
    },
    {
      "id": "circle-differences",
      "title": "Circle differences",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Circle of the Moon can rely heavily on Wild Shape for physical combat, making the Druid's own Strength and Dexterity less central during those forms."
        },
        {
          "type": "paragraph",
          "content": "Caster-focused Circles care more about Wisdom, concentration, and safe positioning."
        },
        {
          "type": "paragraph",
          "content": "Circle-specific mechanics may add other priorities, but Wisdom remains the class's core ability."
        }
      ]
    },
    {
      "id": "multiclassing",
      "title": "Multiclassing",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The 2014 multiclassing prerequisite for Druid is Wisdom 13."
        },
        {
          "type": "paragraph",
          "content": "A multiclass Druid using offensive or control spells should normally want substantially more Wisdom than the minimum because those spells depend on the Druid spell save DC or spell attack modifier."
        }
      ]
    },
    {
      "id": "practical-priority",
      "title": "Practical priority",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A conventional Druid often follows:"
        },
        {
          "type": "paragraph",
          "content": "Wisdom\n→ Constitution\n→ Dexterity\n→ Intelligence / Charisma according to role\n→ Strength unless the build specifically needs it"
        },
        {
          "type": "paragraph",
          "content": "The exact order changes with Circle, species, armor, feats, and campaign style."
        }
      ]
    }
  ]
} as const;
export default question;

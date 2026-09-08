export const question = {
  "slug": "what-ability-scores-are-best-for-a-fighter",
  "question": "What ability scores are best for a Fighter?",
  "shortAnswer": "A Fighter normally makes either Strength or Dexterity the highest ability score, depending on the weapons and armor being used. Constitution is usually the second major priority because it increases hit points. Strength is best for heavy melee weapons and many heavy-armor builds; Dexterity is best for ranged and finesse weapons and also improves initiative. In the 2014 multiclassing rules, Fighter requires Strength 13 or Dexterity 13.",
  "introduction": "The Fighter is unusual because there is no single universal primary ability.\n\nThe correct choice is usually Strength or Dexterity.\n\nThe weapon and armor plan should determine which one.",
  "sections": [
    {
      "id": "strength",
      "title": "Strength",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Strength is the normal primary ability for:"
        },
        {
          "type": "list",
          "items": [
            "heavy melee weapons;",
            "many one-handed melee weapons;",
            "Athletics;",
            "heavy-armor characters that need to meet armor Strength requirements."
          ]
        },
        {
          "type": "paragraph",
          "content": "A Strength Fighter can use heavy armor without needing Dexterity for Armor Class."
        },
        {
          "type": "paragraph",
          "content": "This makes it easier to focus on Strength and Constitution."
        }
      ]
    },
    {
      "id": "dexterity",
      "title": "Dexterity",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Dexterity is the normal primary ability for:"
        },
        {
          "type": "list",
          "items": [
            "bows and many other ranged weapons;",
            "finesse weapons;",
            "initiative;",
            "Dexterity saving throws;",
            "Stealth, Acrobatics, and Sleight of Hand."
          ]
        },
        {
          "type": "paragraph",
          "content": "A Dexterity Fighter often uses light or medium armor."
        },
        {
          "type": "paragraph",
          "content": "Dexterity gives broader non-combat benefits than Strength, but it does not support every melee weapon equally."
        }
      ]
    },
    {
      "id": "constitution",
      "title": "Constitution",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Constitution is valuable to almost every Fighter."
        },
        {
          "type": "paragraph",
          "content": "It increases hit points on top of the class's d10 Hit Die."
        },
        {
          "type": "paragraph",
          "content": "Fighters are frequently exposed to attacks because many builds operate on the front line or remain visible while making repeated ranged attacks."
        },
        {
          "type": "paragraph",
          "content": "Constitution also supports Constitution saving throws, one of the Fighter's saving throw proficiencies."
        },
        {
          "type": "paragraph",
          "content": "Eldritch Knights may value Constitution even more because it helps concentration."
        }
      ]
    },
    {
      "id": "wisdom",
      "title": "Wisdom",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Wisdom is a common defensive secondary score."
        },
        {
          "type": "paragraph",
          "content": "Wisdom saving throws often protect against dangerous control or mental effects."
        },
        {
          "type": "paragraph",
          "content": "Perception and Insight are also widely useful."
        },
        {
          "type": "paragraph",
          "content": "A Fighter does not need high Wisdom for class features, but a very low Wisdom score can become a noticeable weakness."
        }
      ]
    },
    {
      "id": "intelligence",
      "title": "Intelligence",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Intelligence is normally secondary for the base Fighter."
        },
        {
          "type": "paragraph",
          "content": "Eldritch Knight can make it more relevant depending on spell selection."
        },
        {
          "type": "paragraph",
          "content": "Some Eldritch Knight spells work without a high Intelligence score, while attack or save-based spells benefit more directly from it."
        },
        {
          "type": "paragraph",
          "content": "Intelligence can also support a tactical, scholarly, or investigative concept."
        }
      ]
    },
    {
      "id": "charisma",
      "title": "Charisma",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Charisma is not a core Fighter mechanic."
        },
        {
          "type": "paragraph",
          "content": "It can still matter for leaders, nobles, commanders, gladiators, and social characters."
        },
        {
          "type": "paragraph",
          "content": "A Purple Dragon Knight/Banneret-style character may value the social identity more than a conventional Fighter."
        }
      ]
    },
    {
      "id": "strength-and-dexterity-together",
      "title": "Strength and Dexterity together?",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A Fighter can use both, but most builds do not benefit enough to justify maximising both."
        },
        {
          "type": "paragraph",
          "content": "A ranged Fighter who keeps a finesse weapon as backup can still use Dexterity for both."
        },
        {
          "type": "paragraph",
          "content": "A heavy-weapon Fighter can often leave Dexterity at a moderate or low value if heavy armor handles Armor Class."
        },
        {
          "type": "paragraph",
          "content": "Commit to one attack ability unless the build has a clear reason to split."
        }
      ]
    },
    {
      "id": "multiclassing",
      "title": "Multiclassing",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The 2014 Fighter multiclassing prerequisite is:"
        },
        {
          "type": "paragraph",
          "content": "Strength 13 OR Dexterity 13"
        },
        {
          "type": "paragraph",
          "content": "Meeting either one is enough."
        },
        {
          "type": "paragraph",
          "content": "A multiclass dip for armor, Fighting Style, Second Wind, or Action Surge may therefore fit many different builds."
        }
      ]
    },
    {
      "id": "practical-priority",
      "title": "Practical priority",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Typical Strength Fighter:"
        },
        {
          "type": "paragraph",
          "content": "Strength\n→ Constitution\n→ Wisdom / Dexterity according to defense and role\n→ remaining scores"
        },
        {
          "type": "paragraph",
          "content": "Typical Dexterity Fighter:"
        },
        {
          "type": "paragraph",
          "content": "Dexterity\n→ Constitution\n→ Wisdom\n→ remaining scores"
        },
        {
          "type": "paragraph",
          "content": "Subclass and feats can alter this order."
        }
      ]
    }
  ]
} as const;
export default question;

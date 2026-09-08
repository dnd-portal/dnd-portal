export const question = {
  "slug": "what-do-monster-resistances-and-immunities-mean",
  "question": "What do monster resistances and immunities mean?",
  "shortAnswer": "Damage resistance halves damage of the specified type, vulnerability doubles it, and damage immunity prevents that damage unless a more specific rule says otherwise. Condition immunity means the creature cannot gain the named condition. Always read the full qualifier: “resistance to fire” and “resistance to bludgeoning, piercing, and slashing from nonmagical attacks” protect against different things. Multiple instances of the same resistance do not stack.",
  "introduction": "Monster defenses are often more specific than Armor Class and hit points.\n\nResistance, vulnerability, immunity, and condition immunity can completely change which attacks are effective.",
  "sections": [
    {
      "id": "damage-resistance-halves-qualifying-damage",
      "title": "Damage resistance halves qualifying damage",
      "blocks": [
        {
          "type": "paragraph",
          "content": "If a creature has resistance to a damage type, damage of that type is halved against it."
        },
        {
          "type": "paragraph",
          "content": "Examples might include:"
        },
        {
          "type": "paragraph",
          "content": "Damage Resistances cold"
        },
        {
          "type": "paragraph",
          "content": "or:"
        },
        {
          "type": "paragraph",
          "content": "Damage Resistances bludgeoning, piercing, and slashing from nonmagical attacks"
        },
        {
          "type": "paragraph",
          "content": "Those are not equivalent."
        },
        {
          "type": "paragraph",
          "content": "The qualifier after the damage type matters."
        }
      ]
    },
    {
      "id": "damage-vulnerability-doubles-qualifying-damage",
      "title": "Damage vulnerability doubles qualifying damage",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Vulnerability is the opposite extreme."
        },
        {
          "type": "paragraph",
          "content": "If a creature is vulnerable to a damage type, qualifying damage of that type is doubled."
        },
        {
          "type": "paragraph",
          "content": "Vulnerability is relatively uncommon, so discovering one can significantly change party tactics."
        }
      ]
    },
    {
      "id": "damage-immunity-prevents-the-listed-damage",
      "title": "Damage immunity prevents the listed damage",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Damage immunity means the creature takes no damage from the specified type under the normal rule."
        },
        {
          "type": "paragraph",
          "content": "For example:"
        },
        {
          "type": "paragraph",
          "content": "Damage Immunities poison"
        },
        {
          "type": "paragraph",
          "content": "means ordinary poison damage does not reduce its hit points."
        },
        {
          "type": "paragraph",
          "content": "A feature that says it **ignores resistance** does not automatically bypass immunity."
        },
        {
          "type": "paragraph",
          "content": "Immunity must be addressed by wording that actually affects immunity."
        }
      ]
    },
    {
      "id": "condition-immunity-is-separate",
      "title": "Condition immunity is separate",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A monster can also list:"
        },
        {
          "type": "paragraph",
          "content": "Condition Immunities"
        },
        {
          "type": "paragraph",
          "content": "This prevents the named condition rather than a damage type."
        },
        {
          "type": "paragraph",
          "content": "Examples can include:"
        },
        {
          "type": "list",
          "items": [
            "charmed;",
            "frightened;",
            "paralyzed;",
            "petrified;",
            "poisoned;",
            "unconscious."
          ]
        },
        {
          "type": "paragraph",
          "content": "A creature immune to poison damage is not automatically immune to the **poisoned condition** unless both are listed or another trait says so."
        },
        {
          "type": "paragraph",
          "content": "Likewise, immunity to the poisoned condition does not automatically grant poison-damage immunity."
        }
      ]
    },
    {
      "id": "exact-qualifiers-matter",
      "title": "Exact qualifiers matter",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Compare:"
        },
        {
          "type": "paragraph",
          "content": "resistance to bludgeoning"
        },
        {
          "type": "paragraph",
          "content": "with:"
        },
        {
          "type": "paragraph",
          "content": "resistance to bludgeoning from nonmagical attacks"
        },
        {
          "type": "paragraph",
          "content": "The second has an explicit limitation."
        },
        {
          "type": "paragraph",
          "content": "A magical bludgeoning attack can interact differently from a nonmagical one."
        },
        {
          "type": "paragraph",
          "content": "Keep the full qualifier on a resistance whenever shortening it would change what can bypass that defense."
        }
      ]
    },
    {
      "id": "magical-attack-has-a-rules-meaning",
      "title": "“Magical attack” has a rules meaning",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The 2014 monster rules describe a magical attack as an attack delivered by:"
        },
        {
          "type": "list",
          "items": [
            "a spell;",
            "a magic item;",
            "another magical source."
          ]
        },
        {
          "type": "paragraph",
          "content": "A weapon becoming magical for resistance purposes can therefore be important even if it does not receive a numerical +1 bonus."
        }
      ]
    },
    {
      "id": "resistance-is-applied-after-other-damage-modifiers",
      "title": "Resistance is applied after other damage modifiers",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Under the 2014 damage rule, resistance and vulnerability are applied after other modifiers to the damage."
        },
        {
          "type": "paragraph",
          "content": "If another effect reduces damage first, calculate that before halving for resistance."
        }
      ]
    },
    {
      "id": "multiple-resistance-does-not-stack",
      "title": "Multiple resistance does not stack",
      "blocks": [
        {
          "type": "paragraph",
          "content": "If two different features both give resistance to the same instance of damage, the damage is still halved once."
        },
        {
          "type": "paragraph",
          "content": "It is not quartered."
        },
        {
          "type": "paragraph",
          "content": "The same non-stacking principle applies to multiple instances of vulnerability."
        }
      ]
    },
    {
      "id": "mixed-damage-is-separated-by-type",
      "title": "Mixed damage is separated by type",
      "blocks": [
        {
          "type": "paragraph",
          "content": "An attack can deal more than one damage type."
        },
        {
          "type": "paragraph",
          "content": "For example:"
        },
        {
          "type": "paragraph",
          "content": "bludgeoning + necrotic"
        },
        {
          "type": "paragraph",
          "content": "If the monster resists necrotic but not bludgeoning, only the necrotic portion is halved."
        },
        {
          "type": "paragraph",
          "content": "Treat each relevant damage component according to its own type and qualifier."
        }
      ]
    },
    {
      "id": "resistance-is-not-the-same-as-a-high-saving-throw",
      "title": "Resistance is not the same as a high saving throw",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A monster can resist the damage after being hit and still have a weak save."
        },
        {
          "type": "paragraph",
          "content": "Another monster can have no resistance but a strong saving throw that makes the spell less likely to affect it."
        },
        {
          "type": "paragraph",
          "content": "These defenses operate at different stages."
        }
      ]
    },
    {
      "id": "immunity-can-alter-control-strategy",
      "title": "Immunity can alter control strategy",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Condition immunity is especially important for control spells and class features."
        },
        {
          "type": "paragraph",
          "content": "A creature immune to charmed cannot be made charmed by an ordinary effect that imposes that condition."
        },
        {
          "type": "paragraph",
          "content": "A creature immune to frightened cannot be frightened."
        },
        {
          "type": "paragraph",
          "content": "The party should identify when a control plan simply cannot work instead of repeatedly spending resources on it."
        }
      ]
    },
    {
      "id": "features-can-explicitly-bypass-resistance",
      "title": "Features can explicitly bypass resistance",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Some class, spell, feat, or item rules say that a creature's resistance is ignored or treated differently."
        },
        {
          "type": "paragraph",
          "content": "When a feature creates an exception, its wording determines exactly what it bypasses. An exception to resistance does not automatically bypass immunity, and an exception for one damage type does not automatically apply to another."
        },
        {
          "type": "paragraph",
          "content": "For example, a feature might:"
        },
        {
          "type": "list",
          "items": [
            "ignore resistance to one damage type;",
            "treat immunity as resistance;",
            "change the damage type;",
            "make an attack magical for resistance purposes."
          ]
        },
        {
          "type": "paragraph",
          "content": "These are specific exceptions."
        },
        {
          "type": "paragraph",
          "content": "Do not generalize one feature's exception to unrelated attacks."
        }
      ]
    },
    {
      "id": "knowledge-is-part-of-play",
      "title": "Knowledge is part of play",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Players may not always know a monster's defenses before encountering it."
        },
        {
          "type": "paragraph",
          "content": "They can learn through:"
        },
        {
          "type": "list",
          "items": [
            "previous experience;",
            "class features;",
            "research;",
            "successful knowledge-oriented checks when the DM allows them;",
            "clues in the environment;",
            "observing what happens after an attack."
          ]
        },
        {
          "type": "paragraph",
          "content": "The DM can describe resistance narratively rather than announcing every stat-block line immediately."
        }
      ]
    }
  ]
} as const;
export default question;

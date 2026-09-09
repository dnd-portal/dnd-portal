export const question = {
  "slug": "what-is-the-difference-between-core-optional-and-house-rules",
  "question": "What is the difference between core rules, optional rules, and house rules?",
  "shortAnswer": "Core rules are the normal published procedures a ruleset assumes. Optional or variant rules are published alternatives that a group uses only when the DM or campaign adopts them. House rules are table-created changes or additions. D&D Portal campaign rules are house rules or campaign rulings when they intentionally differ from the published baseline, and they must be labelled as such.",
  "introduction": "",
  "sections": [
    {
      "id": "core-or-baseline-rules",
      "title": "Core or baseline rules",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A baseline rule is part of the ordinary rules framework being used for the campaign."
        },
        {
          "type": "paragraph",
          "content": "Examples in the 2014 Fifth Edition baseline include:"
        },
        {
          "type": "list",
          "items": [
            "initiative using Dexterity checks;",
            "one action on a normal turn;",
            "difficult terrain costing additional movement;",
            "attack rolls compared with Armor Class;",
            "resistance halving qualifying damage;",
            "advantage and disadvantage using their normal d20 procedure."
          ]
        },
        {
          "type": "paragraph",
          "content": "A campaign does not need to separately opt into each of these when it says it uses that ruleset."
        }
      ]
    },
    {
      "id": "published-optional-and-variant-rules",
      "title": "Published optional and variant rules",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Official books also contain rules explicitly presented as optional or variant."
        },
        {
          "type": "paragraph",
          "content": "Those rules are published, but publication does not make them automatically active at every table."
        },
        {
          "type": "paragraph",
          "content": "A campaign may adopt one variant and reject another."
        },
        {
          "type": "paragraph",
          "content": "The rule remains an **optional** or **variant** rule until the campaign adopts it, and its published source still matters."
        }
      ]
    },
    {
      "id": "third-party-rules",
      "title": "Third-party rules",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Published third-party material is neither official Wizards of the Coast core material nor automatically homebrew."
        },
        {
          "type": "paragraph",
          "content": "Classes such as Captain, Champion, Messenger or other licensed/published third-party material can have real published mechanics while still depending on campaign availability."
        },
        {
          "type": "paragraph",
          "content": "The same provenance principle applies to rules modules: identify the publisher and source instead of flattening everything into “official” or “homebrew.”"
        }
      ]
    },
    {
      "id": "homebrew-rules",
      "title": "Homebrew rules",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Homebrew is original game material created outside the published rules being referenced."
        },
        {
          "type": "paragraph",
          "content": "A homebrew rule may add a new mechanic or replace an existing one."
        },
        {
          "type": "paragraph",
          "content": "It should say clearly what it changes so players do not need to reverse-engineer which part of the published baseline still applies."
        }
      ]
    },
    {
      "id": "campaign-rulings-and-table-agreements",
      "title": "Campaign rulings and table agreements",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A campaign ruling may be much smaller than a full homebrew system."
        },
        {
          "type": "paragraph",
          "content": "Examples include:"
        },
        {
          "type": "list",
          "items": [
            "a party using stricter checks in a specific type of environment;",
            "a DM deciding how an ambiguous interaction works at that table;",
            "a campaign modifying a rest rule;",
            "a table agreeing not to track a particular resource."
          ]
        },
        {
          "type": "paragraph",
          "content": "These rulings belong in campaign notes or variant data rather than in the universal short answer."
        }
      ]
    },
    {
      "id": "why-the-distinction-matters",
      "title": "Why the distinction matters",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Without provenance labels, players cannot tell whether a rule is:"
        },
        {
          "type": "list",
          "items": [
            "expected everywhere under the chosen ruleset;",
            "an official option;",
            "from a third-party source;",
            "original homebrew;",
            "specific to one of D&D Portal's parties."
          ]
        },
        {
          "type": "paragraph",
          "content": "Keeping those labels separate makes it clear which rules are baseline, optional, third-party, homebrew, or campaign-specific."
        }
      ]
    }
  ]
} as const;
export default question;

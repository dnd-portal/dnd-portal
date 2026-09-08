export const question = {
  "slug": "what-are-rules-in-dnd",
  "question": "What are rules in D&D?",
  "shortAnswer": "Rules in D&D are the procedures used to decide what characters and creatures can do and how uncertain outcomes are resolved. They cover ability checks, saving throws, attacks, movement, spellcasting, damage, conditions, rests, character features and many other systems. The published rules form a baseline, while the Dungeon Master adjudicates situations the rules do not fully specify. D&D Portal can also record clearly labelled campaign-specific rulings without turning those rulings into universal D&D rules.",
  "introduction": "",
  "sections": [
    {
      "id": "rules-turn-descriptions-into-game-outcomes",
      "title": "Rules turn descriptions into game outcomes",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Players describe what their characters attempt. The rules determine whether that attempt happens automatically, requires a roll, spends a resource, uses an action, triggers a saving throw, deals damage, changes a condition, or cannot work under the current circumstances."
        },
        {
          "type": "paragraph",
          "content": "A rule is therefore not only a prohibition. It is the shared procedure that lets the group answer questions such as:"
        },
        {
          "type": "list",
          "items": [
            "Can the character reach that ledge?",
            "Does the attack hit?",
            "Does the target resist the spell?",
            "How far can the creature move?",
            "Does an effect require concentration?",
            "What happens when hit points reach 0?"
          ]
        },
        {
          "type": "paragraph",
          "content": "Many ordinary actions do not need a roll at all. The DM asks for a roll when success and failure are meaningfully uncertain and the rules or situation call for one."
        }
      ]
    },
    {
      "id": "specific-rules-override-general-rules",
      "title": "Specific rules override general rules",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Fifth Edition is built from broad baseline rules plus features that create exceptions."
        },
        {
          "type": "paragraph",
          "content": "A general rule might say that movement out of a hostile creature's reach can provoke an opportunity attack. A specific feature may allow movement without provoking. The specific feature is not contradicting the game; it is intentionally creating an exception."
        },
        {
          "type": "paragraph",
          "content": "The same principle appears throughout classes, spells, monsters, equipment and conditions."
        },
        {
          "type": "paragraph",
          "content": "When two rules interact, read the exact wording of the most specific effect rather than trying to make every feature obey only the broadest baseline."
        }
      ]
    },
    {
      "id": "character-options-do-not-all-use-the-same-subsystem",
      "title": "Character options do not all use the same subsystem",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A Fighter, Wizard, Rogue and Shinobi can all act in the same encounter, but their class features use different resources and exceptions."
        },
        {
          "type": "paragraph",
          "content": "The base combat rules tell all of them how turns, movement, attacks and reactions function."
        },
        {
          "type": "paragraph",
          "content": "Their class pages then add features such as Extra Attack, Cunning Action, Spellcasting, Rage, Chakra, Fortune Dice or another resource."
        },
        {
          "type": "paragraph",
          "content": "The general rules provide the shared engine, while a class, spell, item, or monster feature can create a more specific exception."
        }
      ]
    },
    {
      "id": "the-dm-adjudicates-situations-the-written-rules-do-not-fully-cover",
      "title": "The DM adjudicates situations the written rules do not fully cover",
      "blocks": [
        {
          "type": "paragraph",
          "content": "D&D cannot provide a bespoke rule for every imaginable action."
        },
        {
          "type": "paragraph",
          "content": "If a player attempts something not directly covered, the DM decides whether it is possible and what resolution method applies. That may involve an ability check, saving throw, attack roll, tool proficiency, damage roll, contest, or no roll at all."
        },
        {
          "type": "paragraph",
          "content": "This is adjudication, not permission to ignore every written rule. The published rules provide the common starting point, while the DM resolves uncertainty and unusual edge cases."
        }
      ]
    },
    {
      "id": "d-d-portal-separates-baseline-rules-from-campaign-rulings",
      "title": "D&D Portal separates baseline rules from campaign rulings",
      "blocks": [
        {
          "type": "paragraph",
          "content": "D&D Portal supports campaign-specific notes and variants."
        },
        {
          "type": "paragraph",
          "content": "Those notes may intentionally change how a particular party handles a rule. Keep the published baseline and the campaign change as two distinct layers:"
        },
        {
          "type": "paragraph",
          "content": "Official / published baseline\n→ what the normal rule says"
        },
        {
          "type": "paragraph",
          "content": "Campaign note / variant\n→ what this campaign changes"
        },
        {
          "type": "paragraph",
          "content": "A party-specific rule applies only to that campaign and is not a universal D&D rule."
        }
      ]
    },
    {
      "id": "edition-matters",
      "title": "Edition matters",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Rules from different D&D editions are not interchangeable."
        },
        {
          "type": "paragraph",
          "content": "These rules articles use the 2014 Fifth Edition rules as the general baseline unless a specific class, spell, item, or campaign rule identifies another source."
        },
        {
          "type": "paragraph",
          "content": "Older D&D editions use different action economy, saving throw, skill, and critical-hit systems. Those rules are not interchangeable with the 2014 Fifth Edition baseline used here."
        },
        {
          "type": "paragraph",
          "content": "Likewise, 2024 rules do not automatically replace a rule that is explicitly using the 2014 rules basis."
        }
      ]
    }
  ]
} as const;
export default question;

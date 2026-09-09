export const question = {
  "slug": "how-do-dnd-rules-work-during-play",
  "question": "How do D&D rules work during play?",
  "shortAnswer": "During play, the group first describes the situation and the intended action. If the outcome is uncertain, the relevant rule determines what roll or resource is used. The DM applies circumstances such as advantage, disadvantage, cover, distance, difficulty or conditions, then the result changes the fiction. In combat this process is organized into rounds and turns; outside combat it is usually handled more freely.",
  "introduction": "",
  "sections": [
    {
      "id": "1-establish-the-situation",
      "title": "1. Establish the situation",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The DM describes what the characters perceive and what is happening around them."
        },
        {
          "type": "paragraph",
          "content": "The players then state what their characters want to do."
        },
        {
          "type": "paragraph",
          "content": "Good rules resolution starts with a clear declaration of intent. “I do something with Athletics” is less useful than “I try to climb the rain-slick wall before the guard reaches me.”"
        }
      ]
    },
    {
      "id": "2-decide-whether-a-rule-or-roll-is-needed",
      "title": "2. Decide whether a rule or roll is needed",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Many actions simply happen."
        },
        {
          "type": "paragraph",
          "content": "Walking across an empty room, drawing an available object when the normal interaction rules allow it, or speaking a short sentence normally does not require a check."
        },
        {
          "type": "paragraph",
          "content": "A roll becomes appropriate when the rules call for one or when the DM decides the outcome is genuinely uncertain and meaningful."
        }
      ]
    },
    {
      "id": "3-choose-the-correct-resolution-method",
      "title": "3. Choose the correct resolution method",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The most common d20 resolutions are:"
        },
        {
          "type": "list",
          "items": [
            "ability checks;",
            "attack rolls;",
            "saving throws."
          ]
        },
        {
          "type": "paragraph",
          "content": "They are not interchangeable."
        },
        {
          "type": "paragraph",
          "content": "An attack roll asks whether an attack hits a target's Armor Class."
        },
        {
          "type": "paragraph",
          "content": "A saving throw asks whether a creature resists or reduces an effect."
        },
        {
          "type": "paragraph",
          "content": "An ability check resolves an attempted task such as sneaking, climbing a difficult surface, recalling information or persuading someone."
        }
      ]
    },
    {
      "id": "4-apply-modifiers-and-circumstances",
      "title": "4. Apply modifiers and circumstances",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The roll may use:"
        },
        {
          "type": "list",
          "items": [
            "an ability modifier;",
            "proficiency bonus when relevant;",
            "Expertise or another feature;",
            "advantage or disadvantage;",
            "cover;",
            "bonuses or penalties from spells and features."
          ]
        },
        {
          "type": "paragraph",
          "content": "Use the exact rule that applies to the roll rather than adding every seemingly relevant number."
        }
      ]
    },
    {
      "id": "5-compare-the-result-to-the-target-number",
      "title": "5. Compare the result to the target number",
      "blocks": [
        {
          "type": "paragraph",
          "content": "An attack roll is normally compared to Armor Class."
        },
        {
          "type": "paragraph",
          "content": "An ability check or saving throw is normally compared with a Difficulty Class."
        },
        {
          "type": "paragraph",
          "content": "Some situations use a contest or another specific procedure."
        },
        {
          "type": "paragraph",
          "content": "Meeting the target number is normally sufficient; you do not need to exceed it."
        }
      ]
    },
    {
      "id": "6-apply-the-consequences",
      "title": "6. Apply the consequences",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Once the result is known, apply the effect."
        },
        {
          "type": "paragraph",
          "content": "That may include:"
        },
        {
          "type": "list",
          "items": [
            "damage;",
            "healing;",
            "movement;",
            "a condition;",
            "resource expenditure;",
            "information gained;",
            "an object opened or broken;",
            "a spell continuing or ending;",
            "another narrative consequence."
          ]
        }
      ]
    },
    {
      "id": "combat-adds-structured-timing",
      "title": "Combat adds structured timing",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Combat organizes the same ideas into a strict turn order."
        },
        {
          "type": "paragraph",
          "content": "Initiative determines when participants act. On a normal turn a creature can move up to its speed and take one action, with bonus actions available only from features that grant them. Reactions respond to specific triggers and refresh according to the reaction rules."
        },
        {
          "type": "paragraph",
          "content": "The Fighting and Movement articles explain this structure in more detail."
        }
      ]
    },
    {
      "id": "rules-questions-should-be-resolved-at-the-correct-layer",
      "title": "Rules questions should be resolved at the correct layer",
      "blocks": [
        {
          "type": "paragraph",
          "content": "When a question arises, use this order:"
        },
        {
          "type": "paragraph",
          "content": "specific feature / spell / monster wording\n→ relevant subsystem rule\n→ general 5e rule\n→ DM adjudication for anything still unresolved\n→ campaign-specific ruling if the table has one"
        },
        {
          "type": "paragraph",
          "content": "This avoids replacing a feature's actual wording with a vague general rule."
        }
      ]
    }
  ]
} as const;
export default question;

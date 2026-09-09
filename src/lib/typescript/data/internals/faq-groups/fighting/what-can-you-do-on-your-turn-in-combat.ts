export const question = {
  "slug": "what-can-you-do-on-your-turn-in-combat",
  "question": "What can you do on your turn in combat?",
  "shortAnswer": "On a normal 2014 turn, you can move up to your speed and take one action. You can also take one bonus action if a spell, class feature, feat, or other rule gives you something to do as a bonus action. You may interact with one object in many ordinary circumstances, communicate briefly, and use a reaction when its trigger occurs. Common actions include Attack, Cast a Spell, Dash, Disengage, Dodge, Help, Hide, Ready, Search, and Use an Object.",
  "introduction": "",
  "sections": [
    {
      "id": "movement-and-action-are-independent",
      "title": "Movement and action are independent",
      "blocks": [
        {
          "type": "paragraph",
          "content": "You can move before the action, after it, or split movement around it when the movement rules permit. Taking an action does not normally consume your entire movement."
        }
      ]
    },
    {
      "id": "the-action",
      "title": "The action",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The action is the main unit of turn economy. Class features and the general combat rules provide actions such as Attack, Dash, Dodge or Cast a Spell. A feature such as Fighter Action Surge can explicitly provide an additional action."
        }
      ]
    },
    {
      "id": "bonus-actions-are-not-automatic",
      "title": "Bonus actions are not automatic",
      "blocks": [
        {
          "type": "paragraph",
          "content": "You do not receive a generic bonus action that must always be spent. You can take a bonus action only when a rule says you can do something as a bonus action. Even if several options exist, you normally have only one bonus action on your turn."
        }
      ]
    },
    {
      "id": "reactions-use-triggers",
      "title": "Reactions use triggers",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A reaction is an immediate response to a specified trigger and can occur on your own turn or another creature's turn. Once used, another reaction is not available until the reaction refreshes at the start of your next turn under the 2014 rule."
        }
      ]
    },
    {
      "id": "common-combat-actions",
      "title": "Common combat actions",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The normal 2014 options include Attack, Cast a Spell, Dash, Disengage, Dodge, Help, Hide, Ready, Search, and Use an Object. Grappling and shoving are special melee attacks made through the Attack action rather than separate generic action types."
        }
      ]
    },
    {
      "id": "ready-converts-your-action-into-a-later-reaction",
      "title": "Ready converts your action into a later reaction",
      "blocks": [
        {
          "type": "paragraph",
          "content": "When you Ready, you define a perceivable trigger and choose an action or movement that will occur if that trigger happens before your next turn. Triggering the readied option uses the reaction."
        }
      ]
    },
    {
      "id": "object-interaction-is-limited",
      "title": "Object interaction is limited",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Many simple object interactions can accompany movement or an action. When an object requires an action, or when additional interaction exceeds the ordinary allowance, the Use an Object action or another specific rule may be required."
        }
      ]
    },
    {
      "id": "specific-class-features-can-change-all-of-this",
      "title": "Specific class features can change all of this",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Cunning Action, Action Surge, Extra Attack, Rage, Wild Shape, spellcasting features and many other rules modify the ordinary turn. Always read the feature's actual timing."
        }
      ]
    }
  ]
} as const;
export default question;

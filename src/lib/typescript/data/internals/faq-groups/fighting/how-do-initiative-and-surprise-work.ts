export const question = {
  "slug": "how-do-initiative-and-surprise-work",
  "question": "How do initiative and surprise work?",
  "shortAnswer": "Initiative determines turn order. In the 2014 rules, each participant normally makes a Dexterity check when combat begins and acts from highest result to lowest. Surprise is determined separately by the DM before turns begin: a surprised creature cannot move or take an action on its first turn and cannot take a reaction until that turn ends. Winning initiative does not by itself make an enemy surprised.",
  "introduction": "",
  "sections": [
    {
      "id": "initiative-is-a-dexterity-check",
      "title": "Initiative is a Dexterity check",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The normal 2014 initiative roll is a Dexterity check. Features such as Jack of All Trades, Rakish Audacity, Alert, Feral Instinct or another specific rule can modify the process when their wording applies."
        }
      ]
    },
    {
      "id": "the-order-remains-stable",
      "title": "The order remains stable",
      "blocks": [
        {
          "type": "paragraph",
          "content": "After initiative is established, the same order normally repeats every round. Ties are resolved using the tie procedure chosen by the players and DM under the rules."
        }
      ]
    },
    {
      "id": "surprise-is-decided-before-initiative-is-played-out",
      "title": "Surprise is decided before initiative is played out",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The DM determines whether a creature notices a threat. Stealth and passive Perception are common parts of that decision when one side is attempting an ambush."
        }
      ]
    },
    {
      "id": "surprise-is-individual",
      "title": "Surprise is individual",
      "blocks": [
        {
          "type": "paragraph",
          "content": "One member of a group can be surprised while another is not. It is not necessarily an all-or-nothing condition applied to an entire side."
        }
      ]
    },
    {
      "id": "a-surprised-creature-still-has-an-initiative-position",
      "title": "A surprised creature still has an initiative position",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The creature rolls initiative normally. When its first turn arrives, surprise prevents movement and actions. Once that turn ends, it can take reactions again."
        }
      ]
    },
    {
      "id": "acting-first-is-not-the-same-as-surprise",
      "title": "Acting first is not the same as surprise",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A creature with a higher initiative result acts before an enemy, but the enemy is only surprised if the surprise rules actually established that state. This distinction is especially important for features such as the 2014 Assassin's Assassinate."
        }
      ]
    }
  ]
} as const;
export default question;

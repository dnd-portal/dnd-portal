export const question = {
  "slug": "how-does-combat-work-in-dnd",
  "question": "How does combat work in D&D?",
  "shortAnswer": "Combat is organized into rounds and turns. The DM first determines surprise and positions, everyone rolls initiative, and participants then take turns in initiative order until the fight ends. A round represents about six seconds in the game world. On a normal turn a creature can move up to its speed and take one action, while bonus actions and reactions are available only when a rule or feature grants them.",
  "introduction": "",
  "sections": [
    {
      "id": "combat-begins-with-setup",
      "title": "Combat begins with setup",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The 2014 combat procedure starts by determining surprise, establishing where combatants are positioned, and rolling initiative. This prevents the turn order from being chosen informally after attacks have already been declared."
        }
      ]
    },
    {
      "id": "rounds-organize-simultaneous-chaos",
      "title": "Rounds organize simultaneous chaos",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A round is an abstraction of roughly six seconds. Creatures act in initiative order for playability, even though the fiction represents everyone moving and reacting in the same brief span."
        }
      ]
    },
    {
      "id": "each-participant-gets-a-turn",
      "title": "Each participant gets a turn",
      "blocks": [
        {
          "type": "paragraph",
          "content": "On a normal turn, a creature can move up to its speed and take one action. Movement can occur before or after the action and can often be split around it. Features may add bonus actions, additional actions, special movement, reactions or other exceptions."
        }
      ]
    },
    {
      "id": "turns-repeat-in-the-same-initiative-order",
      "title": "Turns repeat in the same initiative order",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Once all participants have acted, a new round begins and the initiative order normally remains the same. Combat continues until the opposing sides stop fighting, flee, surrender, become unable to continue, or the encounter otherwise ends."
        }
      ]
    },
    {
      "id": "combat-rules-are-shared-by-pcs-and-monsters",
      "title": "Combat rules are shared by PCs and monsters",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Monsters can use actions in their stat blocks and can also use general actions available to creatures when appropriate. Player classes add their own actions and features on top of the same timing framework."
        }
      ]
    },
    {
      "id": "the-dm-still-adjudicates-unusual-actions",
      "title": "The DM still adjudicates unusual actions",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Characters are not limited to buttons printed on a character sheet. If a player attempts an improvised action not covered by a named combat action, the DM decides whether it is possible and what roll or action cost is appropriate."
        }
      ]
    }
  ]
} as const;
export default question;

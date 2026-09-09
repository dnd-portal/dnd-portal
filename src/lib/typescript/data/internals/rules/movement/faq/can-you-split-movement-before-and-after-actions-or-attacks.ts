export const question = {
  "slug": "can-you-split-movement-before-and-after-actions-or-attacks",
  "question": "Can you split movement before and after actions or attacks?",
  "shortAnswer": "Yes. In the 2014 rules, you can split movement around your action. With 30 feet of speed, for example, you can move 10 feet, take an action, then move the remaining 20 feet. If the Attack action gives you multiple weapon attacks, you can also move between those attacks, provided you still have movement available.",
  "introduction": "",
  "sections": [
    {
      "id": "movement-does-not-have-to-happen-all-at-once",
      "title": "Movement does not have to happen all at once",
      "blocks": [
        {
          "type": "paragraph",
          "content": "You choose how much movement to spend at each point in the turn. The remaining distance stays available until the turn ends unless a rule changes your speed or movement."
        }
      ]
    },
    {
      "id": "you-can-act-in-the-middle-of-movement",
      "title": "You can act in the middle of movement",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Moving 15 feet, casting a spell with your action and then moving another 15 feet is legal under the normal movement structure if nothing else prevents it."
        }
      ]
    },
    {
      "id": "extra-attack-allows-movement-between-weapon-attacks",
      "title": "Extra Attack allows movement between weapon attacks",
      "blocks": [
        {
          "type": "paragraph",
          "content": "If an Attack action contains more than one weapon attack, those attacks do not need to happen from the same square. You can attack, move and attack again."
        }
      ]
    },
    {
      "id": "movement-costs-still-apply-to-each-segment",
      "title": "Movement costs still apply to each segment",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Difficult terrain, crawling, climbing, swimming and other costs apply to the distance actually traveled in each part of the turn."
        }
      ]
    },
    {
      "id": "opportunity-attacks-can-occur-between-segments",
      "title": "Opportunity attacks can occur between segments",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Splitting movement does not protect you from reactions. If one segment leaves an enemy's reach, that movement can provoke before you continue the rest of your turn."
        }
      ]
    },
    {
      "id": "dash-increases-the-available-amount",
      "title": "Dash increases the available amount",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Dash grants additional movement equal to your speed after relevant modifiers. That extra distance can also be split across the turn."
        }
      ]
    },
    {
      "id": "teleportation-is-not-ordinary-movement",
      "title": "Teleportation is not ordinary movement",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A teleport effect follows its own rule. It does not consume walking movement unless the feature says it does, and it does not normally provoke the opportunity attack triggered by moving out of reach."
        }
      ]
    }
  ]
} as const;
export default question;

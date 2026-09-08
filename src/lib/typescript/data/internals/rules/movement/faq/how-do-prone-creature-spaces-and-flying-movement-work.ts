export const question = {
  "slug": "how-do-prone-creature-spaces-and-flying-movement-work",
  "question": "How do prone movement, creature spaces, and flying movement work?",
  "shortAnswer": "You can drop prone without spending movement, but standing costs movement equal to half your speed and is impossible if you do not have enough movement left or your speed is 0. Crawling while prone costs extra movement. You can move through a friendly creature's space, while hostile spaces have size restrictions, and you normally cannot end your move in another creature's space. A flying creature can fall if it is knocked prone or loses the ability to remain aloft unless it can hover or magic keeps it airborne.",
  "introduction": "",
  "sections": [
    {
      "id": "dropping-prone",
      "title": "Dropping prone",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Dropping prone voluntarily costs no movement. This can sometimes provide defensive benefits against distant ranged attacks but creates serious disadvantages against nearby melee attackers under the prone condition."
        }
      ]
    },
    {
      "id": "standing-up",
      "title": "Standing up",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Standing costs movement equal to half your speed, not half of your remaining movement. If your speed is 30 feet, standing normally costs 15 feet."
        }
      ]
    },
    {
      "id": "speed-0-prevents-standing",
      "title": "Speed 0 prevents standing",
      "blocks": [
        {
          "type": "paragraph",
          "content": "If your speed is 0, you cannot pay the movement cost required to stand."
        }
      ]
    },
    {
      "id": "crawling",
      "title": "Crawling",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A prone creature can move by crawling. Each foot of crawling normally costs an extra foot, and difficult terrain can increase the cost further."
        }
      ]
    },
    {
      "id": "friendly-creature-spaces",
      "title": "Friendly creature spaces",
      "blocks": [
        {
          "type": "paragraph",
          "content": "You can move through a nonhostile creature's space, but that space counts as difficult terrain."
        }
      ]
    },
    {
      "id": "hostile-creature-spaces",
      "title": "Hostile creature spaces",
      "blocks": [
        {
          "type": "paragraph",
          "content": "You can normally move through a hostile creature's space only when the creature is at least two sizes larger or smaller than you, subject to other specific rules."
        }
      ]
    },
    {
      "id": "ending-movement",
      "title": "Ending movement",
      "blocks": [
        {
          "type": "paragraph",
          "content": "You normally cannot willingly end your move in another creature's space."
        }
      ]
    },
    {
      "id": "leaving-reach",
      "title": "Leaving reach",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Moving out of a hostile creature's reach can provoke an opportunity attack. This is independent of whether the destination is another creature's space."
        }
      ]
    },
    {
      "id": "flying-and-prone",
      "title": "Flying and prone",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A flying creature that is knocked prone normally falls unless it can hover or is being kept aloft by magic. Similar consequences can occur when flying speed is reduced to 0 or the creature loses the ability to move."
        }
      ]
    },
    {
      "id": "specific-flight-features-can-override-the-baseline",
      "title": "Specific flight features can override the baseline",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Hover, magical flight, levitation effects, and monster traits can alter the falling rule, so check the specific feature that grants the movement."
        }
      ]
    }
  ]
} as const;
export default question;

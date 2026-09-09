export const question = {
  "slug": "how-does-skirmisher-work",
  "question": "How does Skirmisher work?",
  "shortAnswer": "Skirmisher lets a Scout use its reaction when an enemy ends its turn within 5 feet to move up to half the Scout's speed. That movement does not provoke opportunity attacks. It occurs on the enemy's turn, so it can reposition the Scout before the Scout's next turn, but it consumes the reaction.",
  "fullAnswer": {
    "introduction": "",
    "sections": [
      {
        "title": "The trigger is the enemy ending its turn nearby",
        "paragraphs": [
          "An enemy merely moving next to you does not instantly trigger Skirmisher. The timing occurs when that enemy's turn ends within the required distance."
        ]
      },
      {
        "title": "It uses your reaction",
        "paragraphs": [
          "If you already used Uncanny Dodge, made an opportunity attack, or spent the reaction on another feature, Skirmisher is unavailable until the reaction refreshes."
        ]
      },
      {
        "title": "The movement is protected",
        "paragraphs": [
          "The movement granted by Skirmisher does not provoke opportunity attacks, allowing a ranged Rogue to create space without spending the next turn's bonus action on Disengage."
        ]
      },
      {
        "title": "Half speed scales well",
        "paragraphs": [
          "Superior Mobility later increases the Scout's speed, which also improves the distance that half-speed reaction movement can cover."
        ]
      },
      {
        "title": "Do not retreat automatically",
        "paragraphs": [
          "Sometimes holding position is strategically better. Use Skirmisher when the new position improves safety, line of sight, target access or the next turn's Sneak Attack opportunity."
        ]
      }
    ]
  }
} as const;
export default question;

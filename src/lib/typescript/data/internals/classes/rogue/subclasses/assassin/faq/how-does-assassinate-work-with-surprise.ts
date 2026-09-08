export const question = {
  "slug": "how-does-assassinate-work-with-surprise",
  "question": "How does Assassinate work with surprise?",
  "shortAnswer": "Assassinate has two separate 2014 benefits: you have advantage on attacks against a creature that has not yet taken a turn, and any hit you score against a creature that is surprised is a critical hit. Acting before a creature is not the same as that creature being surprised; surprise must be established when combat begins under the normal surprise rules.",
  "fullAnswer": {
    "introduction": "",
    "sections": [
      {
        "title": "The two benefits are separate",
        "paragraphs": [
          "The advantage clause cares whether the target has taken a turn. The automatic-critical clause specifically requires the target to be surprised."
        ]
      },
      {
        "title": "Winning initiative is not the same as surprise",
        "paragraphs": [
          "A creature can roll lower initiative than you without being surprised. Assassinate does not create surprise by itself."
        ]
      },
      {
        "title": "Stealth and party coordination matter",
        "paragraphs": [
          "If the party approaches openly or an ally alerts the enemy before the ambush, the DM may determine that the enemy is not surprised. The subclass therefore gains more from coordinated infiltration than from initiative alone."
        ]
      },
      {
        "title": "Critical Sneak Attack",
        "paragraphs": [
          "When Assassinate turns a hit into a critical hit, the normal critical-hit rule doubles the attack's damage dice. This includes Sneak Attack dice and other damage dice that are part of the hit."
        ]
      },
      {
        "title": "Death Strike builds on the same setup",
        "paragraphs": [
          "At 17th level, Death Strike adds another saving-throw-based damage multiplier against surprised creatures. Because the setup is demanding, the feature is extremely explosive when it applies but should not be assumed to apply in every encounter."
        ]
      }
    ]
  }
} as const;
export default question;

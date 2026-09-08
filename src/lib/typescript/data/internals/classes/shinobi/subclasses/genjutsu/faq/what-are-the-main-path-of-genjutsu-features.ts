export const question = {
  "slug": "what-are-the-main-path-of-genjutsu-features",
  "question": "What are the main Path of Genjutsu features?",
  "shortAnswer": "The Path gains Genjutsu Training at 3rd level, Distorted Perception at 6th, Persistent Illusion at 10th and World of Illusion at 14th. These features expand Genjutsu technique access, disrupt attacks, improve the reliability and persistence of illusions and provide a powerful area-control effect.",
  "fullAnswer": {
    "introduction": "",
    "sections": [
      {
        "title": "3rd level — Genjutsu Training",
        "paragraphs": [
          "Gain proficiency in Deception or Insight; if already proficient, double the proficiency bonus for checks with that skill. Learn two additional Genjutsu Path Techniques of a rank you can use; they do not count against techniques known."
        ]
      },
      {
        "title": "6th level — Distorted Perception",
        "paragraphs": [
          "When a visible creature within 60 feet makes an attack roll, spend your reaction and 1 Chakra Point. The creature makes a Wisdom save against your Technique Save DC. On a failure the attack is made with disadvantage; if it misses, you can move up to 10 feet without provoking opportunity attacks. A creature immune to charm automatically succeeds."
        ]
      },
      {
        "title": "10th level — Persistent Illusion",
        "paragraphs": [
          "When a creature succeeds on a save against one of your Genjutsu techniques, spend 1 Chakra Point to force a reroll and use the new result. This can happen once on each of your turns. If a Genjutsu technique ends because you failed its concentration save, it instead persists until the end of your next turn."
        ]
      },
      {
        "title": "14th level — World of Illusion",
        "paragraphs": [
          "As an action, choose a point within 60 feet. Chosen creatures in a 20-foot-radius sphere make Wisdom saves. On a failure they become charmed and incapacitated for up to 1 minute while concentration is maintained, with repeat saves at the end of turns and when damaged. The feature recharges on a long rest."
        ]
      },
      {
        "title": "Base Shinobi still matters",
        "paragraphs": [
          "The Path adds control tools, but Extra Attack, Chakra-Infused Strike, Shinobi Step and Fortune Dice still provide useful turns when control is unnecessary or enemies are difficult to affect."
        ]
      }
    ]
  }
} as const;
export default question;

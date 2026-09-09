export const question = {
  "slug": "how-does-insightful-fighting-work",
  "question": "How does Insightful Fighting work?",
  "shortAnswer": "Insightful Fighting uses a bonus action and a contested Wisdom (Insight) check against a target's Charisma (Deception). On a success, you gain a special Sneak Attack route against that target for up to 1 minute: you do not need advantage or another enemy of the target nearby, but you still cannot use Sneak Attack while you have disadvantage.",
  "fullAnswer": {
    "introduction": "",
    "sections": [
      {
        "title": "It is a contested ability check",
        "paragraphs": [
          "This is not a saving throw. Expertise in Insight and a strong Wisdom score can make the Inquisitive very reliable at establishing the effect."
        ]
      },
      {
        "title": "It changes only one Sneak Attack requirement",
        "paragraphs": [
          "The feature does not remove the need for a finesse or ranged weapon, does not remove the once-per-turn limit, and does not override disadvantage."
        ]
      },
      {
        "title": "The effect lasts",
        "paragraphs": [
          "Once successfully established, the Rogue does not need to repeat the check every round against the same target while the feature remains active."
        ]
      },
      {
        "title": "Bonus-action competition matters",
        "paragraphs": [
          "Cunning Action, Eye for Detail and Insightful Fighting all use the bonus action. Decide whether establishing the target is more valuable than Dashing, Disengaging or Hiding that turn."
        ]
      },
      {
        "title": "Eye for Weakness rewards commitment",
        "paragraphs": [
          "At 17th level, the archetype gains additional Sneak Attack damage against the Insightful Fighting target, making sustained pressure on one studied enemy especially rewarding."
        ]
      }
    ]
  }
} as const;
export default question;

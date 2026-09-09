export const question = {
  "slug": "how-does-world-of-illusion-work",
  "question": "How does World of Illusion work?",
  "shortAnswer": "World of Illusion is the 14th-level Genjutsu Path feature. As an action, choose a point within 60 feet; each chosen creature in a 20-foot-radius sphere makes a Wisdom save against your Technique Save DC. On a failure, it is charmed and incapacitated for up to 1 minute while you concentrate. Affected creatures repeat the save at the end of each turn and whenever they take damage. You can use the feature once per long rest.",
  "fullAnswer": {
    "introduction": "",
    "sections": [
      {
        "title": "You choose the affected creatures",
        "paragraphs": [
          "The feature is not indiscriminate. It applies to creatures of your choice inside the sphere, so allies can be excluded."
        ]
      },
      {
        "title": "Failed saves remove actions through incapacitation",
        "paragraphs": [
          "A failed save imposes both charmed and incapacitated while the effect lasts. This is powerful control because an incapacitated creature cannot take actions or reactions."
        ]
      },
      {
        "title": "Concentration is required",
        "paragraphs": [
          "Taking damage can threaten the entire effect through concentration. Protecting the Shinobi's position is therefore important."
        ]
      },
      {
        "title": "Targets get repeat saves",
        "paragraphs": [
          "An affected creature repeats the Wisdom save at the end of each turn. Taking damage also gives it another save, so allies should consider whether attacking a controlled target is worth the chance of freeing it."
        ]
      },
      {
        "title": "Long-rest resource",
        "paragraphs": [
          "World of Illusion is not a routine every-round technique. Its once-per-long-rest limit makes it an encounter-defining resource."
        ]
      }
    ]
  }
} as const;
export default question;

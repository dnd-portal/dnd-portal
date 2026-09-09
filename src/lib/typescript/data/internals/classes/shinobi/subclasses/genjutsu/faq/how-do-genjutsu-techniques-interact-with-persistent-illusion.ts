export const question = {
  "slug": "how-do-genjutsu-techniques-interact-with-persistent-illusion",
  "question": "How do Genjutsu techniques interact with Persistent Illusion?",
  "shortAnswer": "Persistent Illusion improves Genjutsu in two ways: once on each of your turns, after a creature succeeds on a saving throw against one of your Genjutsu techniques, you may spend 1 Chakra Point to force a reroll; and if you lose concentration on a Genjutsu technique because you failed the concentration save, that technique remains active until the end of your next turn.",
  "fullAnswer": {
    "introduction": "",
    "sections": [
      {
        "title": "The reroll happens after a successful save",
        "paragraphs": [
          "The feature reacts to an enemy successfully resisting one of your Genjutsu techniques. Spending 1 Chakra Point forces a new roll and the new result must be used."
        ]
      },
      {
        "title": "Once on each of your turns",
        "paragraphs": [
          "This limits repeated rerolls during the same turn even if a technique affects several creatures."
        ]
      },
      {
        "title": "It is specific to Genjutsu",
        "paragraphs": [
          "The feature does not automatically apply to every Shinobi Technique. The technique must qualify as Genjutsu under the Path's rules."
        ]
      },
      {
        "title": "Concentration gets a grace period",
        "paragraphs": [
          "When failed concentration would normally end a Genjutsu technique, Persistent Illusion keeps it active until the end of your next turn. This gives the Shinobi a brief window to capitalize on the remaining effect."
        ]
      },
      {
        "title": "Unbroken Focus later complements it",
        "paragraphs": [
          "At 13th Shinobi level, the base class improves concentration resilience. The combination means a high-level Genjutsu Shinobi has both better odds of preserving concentration and a short fallback when a save is still failed."
        ]
      }
    ]
  }
} as const;
export default question;

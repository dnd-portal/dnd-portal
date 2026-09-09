export const question = {
  "slug": "what-are-the-main-zealot-features",
  "question": "What are the main Path of the Zealot features?",
  "shortAnswer": "Path of the Zealot is a divine-warrior Barbarian built around relentless Rage. Divine Fury adds radiant or necrotic damage, Warrior of the Gods makes resurrection easier to fund, Fanatical Focus protects a crucial failed saving throw, Zealous Presence empowers the party for a decisive round, and Rage Beyond Death lets the Zealot keep fighting at 0 hit points.",
  "introduction": "",
  "sections": [
    {
      "id": "3rd-level-divine-fury",
      "title": "3rd level — Divine Fury",
      "blocks": [
        {
          "type": "paragraph",
          "content": "While raging, the first creature you hit on each of your turns with a weapon attack takes additional radiant or necrotic damage. The damage scales with Barbarian level."
        }
      ]
    },
    {
      "id": "3rd-level-warrior-of-the-gods",
      "title": "3rd level — Warrior of the Gods",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Magic whose sole effect is restoring you to life can be cast on you without the normal material-component cost described by the feature."
        }
      ]
    },
    {
      "id": "6th-level-fanatical-focus",
      "title": "6th level — Fanatical Focus",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Once per Rage, when you fail a saving throw, you can reroll it and must use the new result."
        }
      ]
    },
    {
      "id": "10th-level-zealous-presence",
      "title": "10th level — Zealous Presence",
      "blocks": [
        {
          "type": "paragraph",
          "content": "As a bonus action, unleash a battle cry that grants advantage on attack rolls and saving throws to a group of nearby creatures until the start of your next turn. The feature normally refreshes on a long rest."
        }
      ]
    },
    {
      "id": "14th-level-rage-beyond-death",
      "title": "14th level — Rage Beyond Death",
      "blocks": [
        {
          "type": "paragraph",
          "content": "While raging, dropping to 0 hit points does not knock you unconscious. You still make death saves and suffer failures from damage, but death from failed saves is delayed until the Rage ends, and only kills you then if you still have 0 hit points."
        }
      ]
    },
    {
      "id": "how-the-features-work-together",
      "title": "How the features work together",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The path makes Rage both offensive and extraordinarily difficult to shut down. Divine Fury rewards the first successful weapon hit each turn, Fanatical Focus protects against a failed save that could end your momentum, and Rage Beyond Death turns healing before Rage ends into a critical survival tool."
        }
      ]
    }
  ]
} as const;
export default question;

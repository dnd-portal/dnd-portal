export const question = {
  "slug": "how-do-the-path-of-the-beast-natural-weapons-work",
  "question": "How do the Path of the Beast natural weapons work?",
  "shortAnswer": "Whenever you enter Rage, choose Bite, Claws or Tail. The chosen natural weapon counts as a simple melee weapon for you, uses Strength naturally with the Barbarian chassis, and lasts until the Rage ends. Bite supports self-healing, Claws can create an additional claw attack, and Tail provides reach plus a defensive reaction.",
  "introduction": "",
  "sections": [
    {
      "id": "bite",
      "title": "Bite",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The Bite deals piercing damage. Once on each of your turns, when you damage a creature with it while below the feature's hit-point threshold, it can restore a small amount of hit points based on proficiency bonus."
        }
      ]
    },
    {
      "id": "claws",
      "title": "Claws",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The Claws deal slashing damage. Once on each of your turns when you attack with a claw as part of the Attack action, you can make one additional claw attack as part of that same action."
        }
      ]
    },
    {
      "id": "tail",
      "title": "Tail",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The Tail deals piercing damage and has extended reach. When a creature you can see hits you with an attack, the tail can use your reaction to roll a die and add the result to Armor Class against that attack, potentially turning the hit into a miss."
        }
      ]
    },
    {
      "id": "they-are-weapons-for-class-interactions",
      "title": "They are weapons for class interactions",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Because the feature defines them as simple melee weapons for you, they work with many ordinary Barbarian weapon-attack interactions. Always check the exact wording of any external feature before assuming compatibility."
        }
      ]
    },
    {
      "id": "choose-again-on-the-next-rage",
      "title": "Choose again on the next Rage",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The path does not permanently lock you into Bite, Claws or Tail. The selection is made when each Rage begins."
        }
      ]
    }
  ]
} as const;
export default question;

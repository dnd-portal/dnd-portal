export const question = {
  "slug": "how-does-ancestral-protectors-protect-allies",
  "question": "How does Ancestral Protectors protect allies?",
  "shortAnswer": "While you are raging, the first creature you hit with an attack on your turn is hindered by ancestral spirits until the start of your next turn. It has disadvantage on attack rolls against targets other than you, and when it hits another creature with an attack, that creature has resistance to the attack's damage.",
  "introduction": "",
  "sections": [
    {
      "id": "you-must-hit-the-target",
      "title": "You must hit the target",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Simply standing near an enemy is not enough. The feature attaches to the first creature you actually hit with an attack during your turn while raging."
        }
      ]
    },
    {
      "id": "the-effect-encourages-the-target-to-attack-you",
      "title": "The effect encourages the target to attack you",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The marked enemy can attack you normally, but attacking your allies becomes less accurate and less damaging."
        }
      ]
    },
    {
      "id": "it-protects-against-attacks-not-every-damage-source",
      "title": "It protects against attacks, not every damage source",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The resistance clause applies to damage from the affected creature's attacks against other creatures. It does not automatically reduce unrelated saving-throw damage, hazards or area effects."
        }
      ]
    },
    {
      "id": "the-duration-is-short-but-repeatable",
      "title": "The duration is short but repeatable",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The effect lasts until the start of your next turn, so repeatedly hitting the priority enemy keeps the pressure active."
        }
      ]
    },
    {
      "id": "it-works-naturally-with-reckless-attack",
      "title": "It works naturally with Reckless Attack",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Reckless Attack can make it easier to land the hit needed to establish Ancestral Protectors, while Rage resistance helps the Barbarian tolerate becoming an attractive target."
        }
      ]
    }
  ]
} as const;
export default question;

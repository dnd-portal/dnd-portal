export const question = {
  "slug": "what-are-the-main-ancestral-guardian-features",
  "question": "What are the main Path of the Ancestral Guardian features?",
  "shortAnswer": "Ancestral Guardian turns Rage into a protection engine. Ancestral Protectors makes the first enemy you hit much worse at attacking your allies, Spirit Shield reduces damage to nearby creatures, Consult the Spirits adds out-of-combat guidance, and Vengeful Ancestors turns prevented damage into force damage against the attacker.",
  "introduction": "",
  "sections": [
    {
      "id": "3rd-level-ancestral-protectors",
      "title": "3rd level — Ancestral Protectors",
      "blocks": [
        {
          "type": "paragraph",
          "content": "While raging, the first creature you hit with an attack on your turn becomes hindered by your ancestral spirits until the start of your next turn. Its attacks against creatures other than you are made at disadvantage, and those creatures gain resistance to the damage of those attacks when they are hit."
        }
      ]
    },
    {
      "id": "6th-level-spirit-shield",
      "title": "6th level — Spirit Shield",
      "blocks": [
        {
          "type": "paragraph",
          "content": "While raging, when another creature you can see within 30 feet takes damage, you can use your reaction to reduce that damage by rolling dice granted by the feature. The reduction improves at later Barbarian levels."
        }
      ]
    },
    {
      "id": "10th-level-consult-the-spirits",
      "title": "10th level — Consult the Spirits",
      "blocks": [
        {
          "type": "paragraph",
          "content": "You can call on your ancestors for guidance through a limited ritual-style use of augury or clairvoyance, using Wisdom for the feature where a spellcasting ability is needed."
        }
      ]
    },
    {
      "id": "14th-level-vengeful-ancestors",
      "title": "14th level — Vengeful Ancestors",
      "blocks": [
        {
          "type": "paragraph",
          "content": "When Spirit Shield reduces damage, the attacker also takes force damage equal to the amount prevented."
        }
      ]
    },
    {
      "id": "how-the-features-work-together",
      "title": "How the features work together",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The path creates a clear defender loop: hit the enemy you most need to contain, keep allies inside Spirit Shield range, and make attacking anyone except you inefficient. Vengeful Ancestors later turns that protection into retaliation, so the same reaction both saves an ally and punishes the attacker."
        }
      ]
    }
  ]
} as const;
export default question;

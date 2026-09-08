export const question = {
  "slug": "what-are-the-main-berserker-features",
  "question": "What are the main Path of the Berserker features?",
  "shortAnswer": "The 2014 Berserker is the Barbarian path of relentless offense. Frenzy can add a melee attack every turn after the Rage begins at the cost of exhaustion when the Rage ends, Mindless Rage shuts down charm and fear while raging, Intimidating Presence adds a fear option, and Retaliation punishes nearby creatures for damaging you.",
  "introduction": "",
  "sections": [
    {
      "id": "3rd-level-frenzy",
      "title": "3rd level — Frenzy",
      "blocks": [
        {
          "type": "paragraph",
          "content": "When you enter Rage, you may choose to frenzy. During that Rage, beginning on later turns, you can make one melee weapon attack as a bonus action. When the Rage ends, you gain one level of exhaustion."
        }
      ]
    },
    {
      "id": "6th-level-mindless-rage",
      "title": "6th level — Mindless Rage",
      "blocks": [
        {
          "type": "paragraph",
          "content": "While raging, you cannot be charmed or frightened. If either effect was already affecting you when Rage begins, it is suspended for the Rage's duration."
        }
      ]
    },
    {
      "id": "10th-level-intimidating-presence",
      "title": "10th level — Intimidating Presence",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Use an action to frighten a creature that can see or hear you, using a Wisdom save based on proficiency bonus and Charisma. Maintaining the fear on later turns also uses the feature's action."
        }
      ]
    },
    {
      "id": "14th-level-retaliation",
      "title": "14th level — Retaliation",
      "blocks": [
        {
          "type": "paragraph",
          "content": "When a creature within 5 feet damages you, use your reaction to make a melee weapon attack against that creature."
        }
      ]
    },
    {
      "id": "how-the-features-work-together",
      "title": "How the features work together",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Berserker's features create escalating pressure in melee. Frenzy increases attack volume, Mindless Rage prevents common control effects from shutting that pressure down, and Retaliation can add another attack outside your own turn. The tradeoff is that Frenzy's exhaustion cost must be managed across the adventuring day."
        }
      ]
    }
  ]
} as const;
export default question;

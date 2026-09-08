export const question = {
  "slug": "how-do-disciple-of-life-blessed-healer-and-supreme-healing-work-together",
  "question": "How do Disciple of Life, Blessed Healer and Supreme Healing work together?",
  "shortAnswer": "Disciple of Life increases the hit points restored to the spell's target by 2 + the spell's level. Blessed Healer separately restores hit points to you when that qualifying healing spell targets another creature. At 17th level, Supreme Healing maximizes the spell's healing dice. These are separate features and can all matter on the same qualifying healing spell.",
  "introduction": "",
  "sections": [
    {
      "id": "disciple-of-life-improves-the-recipient-s-healing",
      "title": "Disciple of Life improves the recipient's healing",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A qualifying spell of 1st level or higher restores its normal amount, then gains the additional 2 + spell level healing from Disciple of Life."
        }
      ]
    },
    {
      "id": "blessed-healer-heals-the-cleric-separately",
      "title": "Blessed Healer heals the Cleric separately",
      "blocks": [
        {
          "type": "paragraph",
          "content": "From 6th level, if that spell restores hit points to someone other than you, you regain 2 + spell level hit points. This is not part of the target's healing roll."
        }
      ]
    },
    {
      "id": "supreme-healing-maximizes-dice-not-every-numeric-bonus",
      "title": "Supreme Healing maximizes dice, not every numeric bonus",
      "blocks": [
        {
          "type": "paragraph",
          "content": "At 17th level, the dice that would be rolled to restore hit points use their highest possible results. Fixed bonuses such as Wisdom modifiers or Disciple of Life's 2 + spell level remain fixed bonuses rather than becoming additional maximized dice."
        }
      ]
    },
    {
      "id": "preserve-life-is-not-a-healing-spell",
      "title": "Preserve Life is not a healing spell",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Preserve Life is Channel Divinity, not a spell. It therefore does not trigger Disciple of Life, Blessed Healer or Supreme Healing merely because it restores hit points."
        }
      ]
    },
    {
      "id": "self-healing-has-a-limitation",
      "title": "Self-healing has a limitation",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Blessed Healer requires the spell to restore hit points to a creature other than you. Healing only yourself does not trigger the self-healing feature."
        }
      ]
    }
  ]
} as const;
export default question;

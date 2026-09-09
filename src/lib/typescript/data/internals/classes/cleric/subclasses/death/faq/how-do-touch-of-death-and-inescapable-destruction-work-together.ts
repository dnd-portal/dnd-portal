export const question = {
  "slug": "how-do-touch-of-death-and-inescapable-destruction-work-together",
  "question": "How do Touch of Death and Inescapable Destruction work together?",
  "shortAnswer": "Touch of Death spends Channel Divinity after a melee attack hits to deal extra necrotic damage equal to 5 + twice your Cleric level. From 6th level, Inescapable Destruction causes necrotic damage from your Cleric spells and Channel Divinity to ignore resistance to necrotic damage, so Touch of Death can bypass necrotic resistance. It does not turn necrotic immunity into resistance.",
  "introduction": "",
  "sections": [
    {
      "id": "touch-of-death-requires-a-melee-hit",
      "title": "Touch of Death requires a melee hit",
      "blocks": [
        {
          "type": "paragraph",
          "content": "You do not spend the Channel Divinity before knowing whether the melee attack hits. The feature is triggered by a successful melee attack."
        }
      ]
    },
    {
      "id": "the-damage-scales-with-cleric-level",
      "title": "The damage scales with Cleric level",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The extra necrotic damage is 5 + twice Cleric level, so it remains relevant as the character advances."
        }
      ]
    },
    {
      "id": "inescapable-destruction-covers-channel-divinity",
      "title": "Inescapable Destruction covers Channel Divinity",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Because Touch of Death is a Channel Divinity effect, its necrotic damage benefits from Inescapable Destruction at 6th level."
        }
      ]
    },
    {
      "id": "resistance-is-ignored-immunity-is-not",
      "title": "Resistance is ignored, immunity is not",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The feature says your relevant necrotic damage ignores resistance. A creature that is immune to necrotic damage remains immune unless another rule explicitly changes that immunity."
        }
      ]
    },
    {
      "id": "cleric-spells-also-benefit",
      "title": "Cleric spells also benefit",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Necrotic damage from your Cleric spells likewise ignores necrotic resistance, improving the reliability of the Domain's necromancy-focused spell package."
        }
      ]
    },
    {
      "id": "divine-strike-is-a-separate-feature",
      "title": "Divine Strike is a separate feature",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The 8th-level Divine Strike deals necrotic damage from a subclass weapon feature, not from a Cleric spell or Channel Divinity. Do not automatically apply Inescapable Destruction to every necrotic source without checking the exact wording."
        }
      ]
    }
  ]
} as const;
export default question;

export const question = {
  "slug": "how-do-chakra-scalpel-cellular-restoration-and-regenerative-seal-differ",
  "question": "How do Chakra Scalpel, Cellular Restoration and Regenerative Seal differ?",
  "shortAnswer": "Chakra Scalpel is an offensive 1-minute melee mode, Cellular Restoration is an action-based condition-removal tool fueled by 3 Chakra Points, and Regenerative Seal is a long-rest preparation that later triggers a large emergency heal plus condition removal. They solve different problems and should not be treated as interchangeable healing buttons.",
  "fullAnswer": {
    "introduction": "",
    "sections": [
      {
        "title": "Chakra Scalpel — offensive pressure",
        "paragraphs": [
          "Spend 1 Chakra Point as a bonus action. For 1 minute, your unarmed strikes can use Wisdom, deal force damage, gain an extra 1d8 force damage once each turn and can temporarily stop a hit creature from regaining hit points."
        ]
      },
      {
        "title": "Cellular Restoration — active cleansing",
        "paragraphs": [
          "Spend an action, touch a living creature and pay 3 Chakra Points. You can end one of several serious conditions, one disease, or reduce exhaustion by 1 subject to the feature's long-rest restriction on repeated exhaustion reduction."
        ]
      },
      {
        "title": "Regenerative Seal — prepared emergency response",
        "paragraphs": [
          "The seal is assigned after a long rest. It waits until the bearer falls to half hit points or lower, then can be activated with a reaction to restore 4d8 + Wisdom modifier hit points and end one listed condition."
        ]
      },
      {
        "title": "Action economy differs",
        "paragraphs": [
          "Scalpel starts with a bonus action, Restoration uses an action, and the Seal uses a reaction at its trigger. This matters when deciding what can be combined in the same round."
        ]
      },
      {
        "title": "Resource model differs",
        "paragraphs": [
          "Scalpel and Restoration spend Chakra when used. Regenerative Seal is a once-prepared feature that disappears after activation and is set again after a later long rest."
        ]
      }
    ]
  }
} as const;
export default question;

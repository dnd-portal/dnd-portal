export const question = {
  "slug": "how-does-elemental-shaping-work",
  "question": "How does Elemental Shaping work?",
  "shortAnswer": "At 10th level, Elemental Shaping lets you spend 1 additional Chakra Point when activating a Nature Technique to apply one of four modifications: Distant, Expanded, Careful or Piercing. Only one listed modification is applied by this feature to that activation unless another rule explicitly says otherwise.",
  "fullAnswer": {
    "introduction": "",
    "sections": [
      {
        "title": "Distant",
        "paragraphs": [
          "Double the Nature Technique's range. If the technique has a range of Self, Distant provides no benefit."
        ]
      },
      {
        "title": "Expanded",
        "paragraphs": [
          "Increase a sphere or cylinder radius by 5 feet, a cone's length by 10 feet or a line's width by 5 feet. Use the geometry actually stated by the technique."
        ]
      },
      {
        "title": "Careful",
        "paragraphs": [
          "Choose creatures up to your Wisdom modifier. Those creatures automatically succeed on saves against that technique and take no damage if the technique would normally deal half damage on a successful save."
        ]
      },
      {
        "title": "Piercing",
        "paragraphs": [
          "The Nature Technique ignores resistance to its damage type for that activation."
        ]
      },
      {
        "title": "Chakra budgeting",
        "paragraphs": [
          "Because the modification costs an extra Chakra Point, using it on every technique is inefficient. Reserve it for activations where range, area, friendly-fire protection or resistance materially changes the outcome."
        ]
      }
    ]
  }
} as const;
export default question;

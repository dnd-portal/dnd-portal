export const question = {
  "slug": "what-subclasses-can-a-scholar-choose",
  "question": "What subclasses can a Scholar choose?",
  "shortAnswer": "A Scholar chooses one of two **Scholar Traditions** at 3rd level: **Healing** or **Lore**. Healing improves Medicine, short-rest recovery, and exhaustion relief. Lore improves Old Lore, the reliability of Lore dice, and later allows especially powerful successes on supported non-Medicine ability checks.",
  "introduction": "The Scholar subclass is called a Scholar Tradition.\n\nThe two Traditions are Healing and Lore.",
  "sections": [
    {
      "id": "healing",
      "title": "Healing",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Healing represents a master of medicine, herbs, wounds, and recovery."
        },
        {
          "type": "paragraph",
          "content": "At 3rd level, it grants Medicine and herbalism expertise-style benefits where applicable."
        },
        {
          "type": "paragraph",
          "content": "Wise Leechcraft allows Wisdom to reinforce Medicine, Hands of a Healer, and additional Rhymes of Lore interactions."
        },
        {
          "type": "paragraph",
          "content": "At 7th level, A Cure for Weariness lets the Scholar reduce a creature's exhaustion level during a short rest a limited number of times based on Wisdom."
        },
        {
          "type": "paragraph",
          "content": "Choose Healing when the party needs reliable recovery and medical expertise."
        }
      ]
    },
    {
      "id": "lore",
      "title": "Lore",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Lore represents the dedicated lore-master."
        },
        {
          "type": "paragraph",
          "content": "It improves Old Lore and scholarly tool use."
        },
        {
          "type": "paragraph",
          "content": "Lore-Master lets creatures reroll Lore dice granted by the Scholar and use the preferred result."
        },
        {
          "type": "paragraph",
          "content": "At 7th level, Words of Command lets the Lore Scholar turn a Lore-die-supported ability check using a skill other than Medicine into a magical success. It can be used a number of times equal to Intelligence modifier, with a minimum of one use, and recharges on a long rest."
        },
        {
          "type": "paragraph",
          "content": "Choose Lore when investigation, ancient knowledge, and support reliability are the priority."
        }
      ]
    },
    {
      "id": "choosing-between-them",
      "title": "Choosing between them",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Healing → medicine, Hit Die recovery, exhaustion relief\nLore    → Old Lore, stronger Lore dice, knowledge-based support"
        }
      ]
    }
  ]
} as const;
export default question;

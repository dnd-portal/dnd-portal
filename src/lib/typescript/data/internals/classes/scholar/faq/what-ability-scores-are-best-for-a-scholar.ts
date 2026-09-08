export const question = {
  "slug": "what-ability-scores-are-best-for-a-scholar",
  "question": "What ability scores are best for a Scholar?",
  "shortAnswer": "Intelligence and Wisdom are the Scholar's primary abilities. Intelligence supports knowledge, investigation, Lore-focused features, and the Scholar's intellectual identity, while Wisdom supports healing, perception, and the Healing Tradition. Constitution is a useful third priority for durability. Under the multiple-calling rules, Scholar requires Intelligence 13.",
  "introduction": "Scholar builds normally begin with Intelligence and Wisdom.",
  "sections": [
    {
      "id": "intelligence",
      "title": "Intelligence",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Intelligence supports several Scholar skills and the Lore Tradition."
        },
        {
          "type": "paragraph",
          "content": "It is the natural first score for a character focused on Old Lore, Investigation, reasoning, and scholarly expertise."
        }
      ]
    },
    {
      "id": "wisdom",
      "title": "Wisdom",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Wisdom supports Medicine, Insight, perception, travel awareness, and the Healing Tradition."
        },
        {
          "type": "paragraph",
          "content": "Healing's Wise Leechcraft directly rewards Wisdom."
        },
        {
          "type": "paragraph",
          "content": "A healer-focused Scholar may therefore prioritise Wisdom almost as highly as Intelligence."
        }
      ]
    },
    {
      "id": "constitution",
      "title": "Constitution",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Constitution adds hit points to the d8 chassis."
        },
        {
          "type": "paragraph",
          "content": "The Scholar is not designed to absorb front-line punishment, so additional durability is useful."
        }
      ]
    },
    {
      "id": "dexterity",
      "title": "Dexterity",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Dexterity helps Armor Class, initiative, and several practical skills."
        },
        {
          "type": "paragraph",
          "content": "It is useful but not part of the calling's core intellectual mechanics."
        }
      ]
    },
    {
      "id": "multiclassing",
      "title": "Multiclassing",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The *Lord of the Rings Roleplaying* multiple-calling requirement for Scholar is:"
        },
        {
          "type": "paragraph",
          "content": "Intelligence 13"
        }
      ]
    },
    {
      "id": "practical-priority",
      "title": "Practical priority",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Lore-focused Scholar:"
        },
        {
          "type": "paragraph",
          "content": "Intelligence\n→ Wisdom\n→ Constitution / Dexterity\n→ remaining abilities"
        },
        {
          "type": "paragraph",
          "content": "Healing-focused Scholar:"
        },
        {
          "type": "paragraph",
          "content": "Wisdom / Intelligence\n→ the other\n→ Constitution\n→ remaining abilities"
        }
      ]
    }
  ]
} as const;
export default question;

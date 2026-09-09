export const question = {
  "slug": "how-do-dnd-portal-campaign-notes-affect-the-rules",
  "question": "How do D&D Portal campaign notes affect the rules?",
  "shortAnswer": "Campaign notes apply only to the parties or campaigns they identify. They can clarify, restrict, expand, or replace a published rule for those games, but they remain separate from the general rules explanation. If no campaign override applies, use the normal published rule.",
  "introduction": "",
  "sections": [
    {
      "id": "a-campaign-note-is-scoped",
      "title": "A campaign note is scoped",
      "blocks": [
        {
          "type": "paragraph",
          "content": "D&D Portal is used across multiple parties."
        },
        {
          "type": "paragraph",
          "content": "A rule used by one party should not automatically appear as active for all other parties."
        },
        {
          "type": "paragraph",
          "content": "A campaign note applies only to the party or campaign it identifies."
        }
      ]
    },
    {
      "id": "the-baseline-should-remain-readable",
      "title": "The baseline should remain readable",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A user should be able to answer two separate questions:"
        },
        {
          "type": "paragraph",
          "content": "What is the normal rule?\nWhat does my campaign change?"
        },
        {
          "type": "paragraph",
          "content": "Those answers should not be merged into one ambiguous paragraph."
        }
      ]
    },
    {
      "id": "one-override-can-apply-to-more-than-one-party",
      "title": "One override can apply to more than one party",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Campaign-specific data does not need one duplicated text block per party."
        },
        {
          "type": "paragraph",
          "content": "If several parties use the same variant, one shared campaign note can name all affected parties."
        },
        {
          "type": "paragraph",
          "content": "This keeps the rule consistent and prevents divergent copies."
        }
      ]
    },
    {
      "id": "no-override-means-no-change",
      "title": "No override means no change",
      "blocks": [
        {
          "type": "paragraph",
          "content": "If the selected party has no applicable campaign note, the general published rule remains the relevant answer."
        }
      ]
    },
    {
      "id": "show-campaign-variants-only-when-they-matter",
      "title": "Show campaign variants only when they matter",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The baseline published rule remains the default explanation unless the selected campaign has an explicit override."
        },
        {
          "type": "paragraph",
          "content": "Campaign-specific variants are most useful when shown only to the parties they actually affect rather than mixed into every general rules explanation."
        }
      ]
    },
    {
      "id": "current-campaign-specific-examples",
      "title": "Current campaign-specific examples",
      "blocks": [
        {
          "type": "paragraph",
          "content": "D&D Portal currently records one Party 2 campaign note for Fighting and one Party 3 campaign note for Movement. Those notes apply only to the named parties and do not replace the general rules for other campaigns."
        },
        {
          "type": "paragraph",
          "content": "Those notes apply only to the parties they name. They are not universal Fighting or Movement rules for every campaign."
        }
      ]
    }
  ]
} as const;
export default question;

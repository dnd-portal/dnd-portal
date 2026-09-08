export const question = {
  "slug": "who-decides-when-a-dnd-rule-is-unclear",
  "question": "Who decides what happens when a D&D rule is unclear?",
  "shortAnswer": "The Dungeon Master adjudicates unclear or uncovered situations at the table. The best approach is to check the specific feature and relevant general rule first, preserve clearly written exceptions, and then let the DM make a ruling where ambiguity remains. A recurring ruling can be documented in D&D Portal as a campaign note, but that does not retroactively make it the published rule.",
  "introduction": "",
  "sections": [
    {
      "id": "start-with-the-exact-wording",
      "title": "Start with the exact wording",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Most apparent contradictions become easier when the group reads the actual text of:"
        },
        {
          "type": "paragraph",
          "content": "1. the feature, spell, item or monster ability involved;\n2. the relevant general rule;\n3. any explicit exception."
        },
        {
          "type": "paragraph",
          "content": "Do not adjudicate from a feature name alone."
        }
      ]
    },
    {
      "id": "specific-exceptions-matter",
      "title": "Specific exceptions matter",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A feature that says it can do something the general rule does not normally allow is often intentionally creating an exception."
        },
        {
          "type": "paragraph",
          "content": "For example, Cunning Action explicitly allows a Rogue to take certain actions as a bonus action. The general rule that those actions ordinarily use an action does not invalidate the class feature."
        }
      ]
    },
    {
      "id": "the-dm-resolves-remaining-ambiguity",
      "title": "The DM resolves remaining ambiguity",
      "blocks": [
        {
          "type": "paragraph",
          "content": "If the written rules do not settle the situation, the DM decides how it works for the current game."
        },
        {
          "type": "paragraph",
          "content": "A good ruling should usually be:"
        },
        {
          "type": "list",
          "items": [
            "understandable;",
            "consistent enough that players can plan around it;",
            "proportionate to the situation;",
            "easy to revisit if a more specific published rule or later clarification resolves the issue."
          ]
        }
      ]
    },
    {
      "id": "a-quick-ruling-can-be-better-than-stopping-play",
      "title": "A quick ruling can be better than stopping play",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Not every edge case requires a long rules investigation during a session."
        },
        {
          "type": "paragraph",
          "content": "For a low-stakes ambiguity, the DM can make a temporary ruling, continue play and verify the source afterward."
        },
        {
          "type": "paragraph",
          "content": "If the question materially changes a character's build or a major encounter, spending more time verifying it may be justified."
        }
      ]
    },
    {
      "id": "document-recurring-decisions",
      "title": "Document recurring decisions",
      "blocks": [
        {
          "type": "paragraph",
          "content": "If the same interaction is likely to recur, D&D Portal can store the decision as a campaign rule or note."
        },
        {
          "type": "paragraph",
          "content": "The note should record:"
        },
        {
          "type": "list",
          "items": [
            "which campaign or parties it affects;",
            "the ruling itself;",
            "whether it replaces or interprets a published rule;",
            "the source rule being modified when relevant."
          ]
        }
      ]
    },
    {
      "id": "keep-unresolved-rules-visibly-unresolved",
      "title": "Keep unresolved rules visibly unresolved",
      "blocks": [
        {
          "type": "paragraph",
          "content": "If the available source is incomplete or conflicting, treat the point as unresolved rather than inventing a rule."
        },
        {
          "type": "paragraph",
          "content": "If a source question remains unresolved, treat that point as unresolved until the relevant source can be verified."
        },
        {
          "type": "paragraph",
          "content": "That is preferable to publishing a clean but fabricated mechanic."
        }
      ]
    }
  ]
} as const;
export default question;

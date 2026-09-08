export const question = {
  "slug": "how-does-difficult-terrain-affect-movement",
  "question": "How does difficult terrain affect movement?",
  "shortAnswer": "In the 2014 rules, each foot moved through difficult terrain costs 1 extra foot of movement, so 10 feet of difficult terrain normally costs 20 feet of movement. Multiple causes of difficult terrain in the same space do not stack to make each foot cost still more. Another creature's space also counts as difficult terrain when you are allowed to move through it.",
  "introduction": "",
  "sections": [
    {
      "id": "basic-cost",
      "title": "Basic cost",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The normal rule converts each 1 foot of difficult-terrain travel into 2 feet of movement cost. On a grid, a 5-foot difficult-terrain square therefore normally costs 10 feet of movement."
        }
      ]
    },
    {
      "id": "examples",
      "title": "Examples",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Typical examples include rubble, undergrowth, steep stairs, snow, shallow bogs and other terrain the DM identifies as difficult."
        }
      ]
    },
    {
      "id": "multiple-difficult-terrain-sources-do-not-stack",
      "title": "Multiple difficult-terrain sources do not stack",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A square that is difficult because of both rubble and magical undergrowth is still difficult terrain under the normal rule; it does not automatically become triple or quadruple movement cost."
        }
      ]
    },
    {
      "id": "creature-spaces",
      "title": "Creature spaces",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A creature's space counts as difficult terrain when you are permitted to move through it. You can normally move through a nonhostile creature's space, while moving through a hostile creature's space has additional size restrictions."
        }
      ]
    },
    {
      "id": "you-cannot-normally-end-in-another-creature-s-space",
      "title": "You cannot normally end in another creature's space",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Whether the creature is friendly or hostile, you normally cannot willingly finish your movement in its occupied space."
        }
      ]
    },
    {
      "id": "travel-pace-uses-the-same-basic-idea-at-a-larger-scale",
      "title": "Travel pace uses the same basic idea at a larger scale",
      "blocks": [
        {
          "type": "paragraph",
          "content": "During overland travel, difficult terrain can reduce the distance a group covers over minutes, hours or days. The travel rules present that at a different scale than tactical combat."
        }
      ]
    },
    {
      "id": "specific-features-can-ignore-difficult-terrain",
      "title": "Specific features can ignore difficult terrain",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Class features, species traits, spells and special movement can say that difficult terrain does not cost extra movement. Apply that exception only where the feature's wording covers the terrain or movement involved."
        }
      ]
    }
  ]
} as const;
export default question;

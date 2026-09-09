export const question = {
  "slug": "how-do-reaper-and-improved-reaper-work",
  "question": "How do Reaper and Improved Reaper work?",
  "shortAnswer": "Reaper affects eligible necromancy cantrips that normally target only one creature, while Improved Reaper extends the concept to necromancy spells of 1st through 5th level. In both cases, a second creature can be targeted only when it is also within the spell's range and close enough to the first target. These features do not turn area spells or already-multi-target spells into larger effects.",
  "introduction": "",
  "sections": [
    {
      "id": "reaper-applies-to-necromancy-cantrips",
      "title": "Reaper applies to necromancy cantrips",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The cantrip must normally target only one creature. When the positioning condition is met, the same casting can affect a second creature."
        }
      ]
    },
    {
      "id": "improved-reaper-applies-to-leveled-necromancy-spells",
      "title": "Improved Reaper applies to leveled necromancy spells",
      "blocks": [
        {
          "type": "paragraph",
          "content": "At 17th level, the same idea expands to necromancy spells of 1st through 5th level that normally target only one creature."
        }
      ]
    },
    {
      "id": "the-targets-must-be-close-together",
      "title": "The targets must be close together",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Both creatures must be valid targets and within the feature's required proximity to one another. The second target is not a free arbitrary creature elsewhere on the battlefield."
        }
      ]
    },
    {
      "id": "spell-rules-still-apply-to-each-target",
      "title": "Spell rules still apply to each target",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Attack rolls, saving throws, immunity, range and other requirements continue to apply as appropriate."
        }
      ]
    },
    {
      "id": "consumed-material-components-can-double",
      "title": "Consumed material components can double",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Improved Reaper explicitly requires material components for each target when the spell consumes those materials, preventing one costly component from paying for two consumed effects."
        }
      ]
    },
    {
      "id": "no-6th-level-or-higher-improved-reaper",
      "title": "No 6th-level or higher Improved Reaper",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The 17th-level feature is limited to necromancy spells from 1st through 5th level. High-level necromancy spells do not automatically gain the extra target."
        }
      ]
    }
  ]
} as const;
export default question;

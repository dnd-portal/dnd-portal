export const question = {
  "slug": "are-wild-surge-effects-spells-and-can-they-work-while-raging",
  "question": "Are Wild Surge effects spells, and can they work while raging?",
  "shortAnswer": "Wild Surge effects are subclass features, not spells unless a specific effect explicitly says otherwise. Entering Rage triggers the table directly, so the normal 2014 rule preventing spellcasting or concentration while raging does not automatically shut off Wild Surge effects. Follow the exact duration and action wording of the rolled result.",
  "introduction": "",
  "sections": [
    {
      "id": "wild-surge-is-a-class-feature",
      "title": "Wild Surge is a class feature",
      "blocks": [
        {
          "type": "paragraph",
          "content": "You are not using the Cast a Spell action to roll on the table. The effect comes from the subclass when Rage begins."
        }
      ]
    },
    {
      "id": "rage-s-spell-restriction-still-applies-to-actual-spells",
      "title": "Rage's spell restriction still applies to actual spells",
      "blocks": [
        {
          "type": "paragraph",
          "content": "If another feature or multiclass grants ordinary spells, the normal Barbarian Rage restriction still matters to those spells."
        }
      ]
    },
    {
      "id": "table-entries-have-their-own-durations",
      "title": "Table entries have their own durations",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Some surge effects happen immediately; others remain active during the Rage or provide repeatable bonus actions. Use the individual result's wording."
        }
      ]
    },
    {
      "id": "unstable-backlash-replaces-the-current-surge",
      "title": "Unstable Backlash replaces the current surge",
      "blocks": [
        {
          "type": "paragraph",
          "content": "At 10th level, rerolling through Unstable Backlash causes the new result to replace the current Wild Surge effect rather than stacking unlimited table results."
        }
      ]
    },
    {
      "id": "controlled-surge-reduces-randomness",
      "title": "Controlled Surge reduces randomness",
      "blocks": [
        {
          "type": "paragraph",
          "content": "At 14th level, rolling twice and choosing a result makes the subclass substantially more predictable without removing the Wild Magic table."
        }
      ]
    }
  ]
} as const;
export default question;

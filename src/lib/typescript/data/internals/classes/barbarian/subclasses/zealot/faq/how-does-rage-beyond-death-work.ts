export const question = {
  "slug": "how-does-rage-beyond-death-work",
  "question": "How does Rage Beyond Death work?",
  "shortAnswer": "At 14th level, a Zealot at 0 hit points does not fall unconscious while raging. The Zealot still makes death saving throws and still suffers failures from taking damage. If failed saves would kill the character, death is delayed until the Rage ends, and the character dies then only if still at 0 hit points.",
  "introduction": "",
  "sections": [
    {
      "id": "zero-hit-points-no-longer-means-immediate-unconsciousness-during-rage",
      "title": "Zero hit points no longer means immediate unconsciousness during Rage",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The Zealot can remain active at 0 hit points, taking turns normally as long as no other rule incapacitates the character."
        }
      ]
    },
    {
      "id": "death-saves-still-happen",
      "title": "Death saves still happen",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The feature does not remove death saving throws. Successes, failures and damage-induced failures continue to accumulate under the normal rules."
        }
      ]
    },
    {
      "id": "death-can-be-postponed-not-erased",
      "title": "Death can be postponed, not erased",
      "blocks": [
        {
          "type": "paragraph",
          "content": "If the Zealot reaches the point where failed death saves would normally cause death, Rage Beyond Death delays that death until Rage ends."
        }
      ]
    },
    {
      "id": "healing-before-rage-ends-matters",
      "title": "Healing before Rage ends matters",
      "blocks": [
        {
          "type": "paragraph",
          "content": "If the Zealot receives healing and is above 0 hit points when Rage ends, the delayed-death clause no longer kills the character."
        }
      ]
    },
    {
      "id": "maintaining-rage-is-critical",
      "title": "Maintaining Rage is critical",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The 2014 Rage duration and ending conditions still apply. Persistent Rage at 15th Barbarian level later makes Rage easier to maintain, which naturally supports Rage Beyond Death."
        }
      ]
    }
  ]
} as const;
export default question;

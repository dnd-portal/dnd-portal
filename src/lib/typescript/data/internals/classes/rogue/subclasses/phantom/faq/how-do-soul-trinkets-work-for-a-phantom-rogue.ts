export const question = {
  "slug": "how-do-soul-trinkets-work-for-a-phantom-rogue",
  "question": "How do Soul Trinkets work for a Phantom Rogue?",
  "shortAnswer": "From 9th level, a Phantom can use a reaction when a creature dies nearby to create a Soul Trinket, up to a limit based on proficiency bonus. Carrying trinkets grants defensive benefits, and a trinket can be destroyed either to ask the spirit a question or to fuel Wails from the Grave without spending one of its normal daily uses.",
  "fullAnswer": {
    "introduction": "",
    "sections": [
      {
        "title": "They come from nearby deaths",
        "paragraphs": [
          "The reaction trigger matters. If your reaction has already been spent, you may lose the opportunity to capture that departing soul."
        ]
      },
      {
        "title": "There is a carrying limit",
        "paragraphs": [
          "The Phantom cannot accumulate unlimited trinkets. The maximum number is tied to proficiency bonus, so deciding when to spend one matters."
        ]
      },
      {
        "title": "Passive defensive value",
        "paragraphs": [
          "Possessing at least one trinket provides the defensive benefits specified by the feature, including improved resilience on death-related and Constitution saves."
        ]
      },
      {
        "title": "Information utility",
        "paragraphs": [
          "Destroying a trinket can let the Phantom ask its associated spirit a question. The spirit knows only what it knew in life, so this is information gathering rather than omniscience."
        ]
      },
      {
        "title": "Fuel for Wails",
        "paragraphs": [
          "A trinket can also be destroyed to use Wails from the Grave without consuming one of the normal proficiency-bonus-based uses. This converts exploration and encounter history into later combat resources."
        ]
      }
    ]
  }
} as const;
export default question;

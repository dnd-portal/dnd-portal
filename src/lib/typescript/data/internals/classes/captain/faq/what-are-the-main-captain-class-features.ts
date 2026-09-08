export const question = {
  "slug": "what-are-the-main-captain-class-features",
  "question": "What are the main Captain class features?",
  "shortAnswer": "The Captain's key features are Leadership at 1st level, Fighting Style and Virtue/Craft choices at 2nd, Chieftain or Thane plus Valiant at 3rd, Extra Attack at 5th, Aura of Valour at 6th, a second title feature at 7th, and Aura of Courage at 10th. The calling combines a full martial chassis with Charisma-based party support.",
  "introduction": "The Captain advances through ten levels and gains a clear mixture of martial and leadership features.",
  "sections": [
    {
      "id": "1st-level-leadership",
      "title": "1st level — Leadership",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Leadership lets the Captain use an action to grant temporary hit points to multiple friendly creatures within 30 feet."
        },
        {
          "type": "paragraph",
          "content": "The number of targets can reach twice the Captain's proficiency bonus, and each target gains temporary hit points equal to Captain level plus Charisma modifier. The feature refreshes after a short or long rest."
        }
      ]
    },
    {
      "id": "2nd-level-fighting-style",
      "title": "2nd level — Fighting Style",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The Captain chooses a Fighting Style that establishes its weapon or defensive plan."
        },
        {
          "type": "paragraph",
          "content": "The available options support conventional armored and martial approaches rather than spellcasting."
        }
      ]
    },
    {
      "id": "2nd-4th-6th-8th-and-10th-level-virtues-and-crafts",
      "title": "2nd, 4th, 6th, 8th and 10th level — Virtues and Crafts",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The calling gains Virtues throughout progression."
        },
        {
          "type": "paragraph",
          "content": "At specified levels, a Captain can choose a Craft instead. These choices are part of the Middle-earth character system and provide customization between fixed class milestones."
        }
      ]
    },
    {
      "id": "3rd-level-captain-title",
      "title": "3rd level — Captain Title",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The Captain chooses **Chieftain** or **Thane**."
        },
        {
          "type": "paragraph",
          "content": "The title grants a feature immediately and another at 7th level."
        }
      ]
    },
    {
      "id": "3rd-level-valiant",
      "title": "3rd level — Valiant",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Valiant improves saving throws that do not already include the Captain's proficiency bonus by adding half the proficiency bonus, rounded down."
        },
        {
          "type": "paragraph",
          "content": "This gives the Captain broad defensive reliability without duplicating proficiency on saves the character already knows."
        }
      ]
    },
    {
      "id": "5th-level-extra-attack",
      "title": "5th level — Extra Attack",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The Captain can attack twice whenever it takes the Attack action."
        }
      ]
    },
    {
      "id": "6th-level-aura-of-valour",
      "title": "6th level — Aura of Valour",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The Captain and nearby allies can add the Captain's Charisma modifier to melee weapon damage while the feature's conditions are met."
        },
        {
          "type": "paragraph",
          "content": "This turns Charisma into a party damage statistic and rewards fighting close to other melee characters."
        }
      ]
    },
    {
      "id": "7th-level-title-feature",
      "title": "7th level — Title feature",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Chieftain gains **Pursuer of Foes**, improving opportunity attacks and making escape harder."
        },
        {
          "type": "paragraph",
          "content": "Thane gains **Tireless Leader**, reducing the effective exhaustion level suffered by the Captain and nearby allies."
        }
      ]
    },
    {
      "id": "10th-level-aura-of-courage",
      "title": "10th level — Aura of Courage",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The Captain and nearby friendly creatures cannot be frightened while the Captain is conscious."
        }
      ]
    },
    {
      "id": "the-progression-as-a-whole",
      "title": "The progression as a whole",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Leadership protects the party before damage lands. Fighting Style and Extra Attack keep the Captain personally dangerous. Valiant strengthens saving throws. Aura of Valour turns positioning into additional party damage, while Aura of Courage protects the formation from fear."
        },
        {
          "type": "paragraph",
          "content": "The title then decides whether the Captain leans further into enemy control or Charisma-driven weapon leadership."
        }
      ]
    }
  ]
} as const;
export default question;

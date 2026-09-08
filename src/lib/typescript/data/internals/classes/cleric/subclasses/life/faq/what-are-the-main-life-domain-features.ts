export const question = {
  "slug": "what-are-the-main-life-domain-features",
  "question": "What are the main Life Domain features?",
  "shortAnswer": "The main 2014 Life Domain features are Bonus Proficiency and Disciple of Life at 1st level, Channel Divinity: Preserve Life at 2nd, Blessed Healer at 6th, Divine Strike at 8th and Supreme Healing at 17th. The Domain also grants ten always-prepared Domain Spells across Cleric levels 1 through 9.",
  "introduction": "",
  "sections": [
    {
      "id": "1st-level-bonus-proficiency",
      "title": "1st level — Bonus Proficiency",
      "blocks": [
        {
          "type": "paragraph",
          "content": "You gain proficiency with heavy armor."
        }
      ]
    },
    {
      "id": "1st-level-disciple-of-life",
      "title": "1st level — Disciple of Life",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Whenever you use a spell of 1st level or higher to restore hit points to a creature, that creature regains additional hit points equal to 2 + the spell's level."
        }
      ]
    },
    {
      "id": "2nd-level-channel-divinity-preserve-life",
      "title": "2nd level — Channel Divinity: Preserve Life",
      "blocks": [
        {
          "type": "paragraph",
          "content": "As an action, present your holy symbol and distribute a healing pool equal to five times your Cleric level among creatures within 30 feet. A creature cannot be restored above half its hit-point maximum by this feature, and undead and constructs cannot benefit."
        }
      ]
    },
    {
      "id": "6th-level-blessed-healer",
      "title": "6th level — Blessed Healer",
      "blocks": [
        {
          "type": "paragraph",
          "content": "When you cast a spell of 1st level or higher that restores hit points to a creature other than yourself, you regain hit points equal to 2 + the spell's level."
        }
      ]
    },
    {
      "id": "8th-level-divine-strike",
      "title": "8th level — Divine Strike",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Once on each of your turns when you hit with a weapon attack, you can deal an extra 1d8 radiant damage. At 14th Cleric level, the extra damage becomes 2d8."
        }
      ]
    },
    {
      "id": "17th-level-supreme-healing",
      "title": "17th level — Supreme Healing",
      "blocks": [
        {
          "type": "paragraph",
          "content": "When a spell would make you roll one or more dice to restore hit points, each healing die uses its maximum result instead of being rolled."
        }
      ]
    },
    {
      "id": "base-cleric-progression-continues",
      "title": "Base Cleric progression continues",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Life Domain does not replace normal Cleric features. Prepared Spellcasting, Channel Divinity uses, Turn Undead, Destroy Undead, Divine Intervention and the normal Cleric spell-slot table continue as usual."
        }
      ]
    }
  ]
} as const;
export default question;

export const question = {
  "slug": "what-are-the-main-treasure-hunter-class-features",
  "question": "What are the main Treasure Hunter class features?",
  "shortAnswer": "The Treasure Hunter's main features are Expertise, Sneak Attack, Cunning Action, a Treasure Hunter Speciality, Virtues, Uncanny Dodge, an optional Craft choice in the progression, additional Expertise, and Reliable Talent. Sneak Attack scales from 1d6 at 1st level to 5d6 at 9th and 10th level.",
  "introduction": "The Treasure Hunter is a compact 10-level precision-and-skills progression.",
  "sections": [
    {
      "id": "1st-level-expertise",
      "title": "1st level: Expertise",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Two qualifying proficiencies gain doubled proficiency."
        },
        {
          "type": "paragraph",
          "content": "Two more gain Expertise at 9th level."
        }
      ]
    },
    {
      "id": "1st-level-sneak-attack",
      "title": "1st level: Sneak Attack",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Sneak Attack adds precision damage once per turn on a qualifying finesse or ranged attack."
        },
        {
          "type": "paragraph",
          "content": "It progresses to 5d6 by the final levels of the calling."
        }
      ]
    },
    {
      "id": "2nd-level-cunning-action",
      "title": "2nd level: Cunning Action",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Dash, Disengage, or Hide can be used as a bonus action."
        }
      ]
    },
    {
      "id": "3rd-level-treasure-hunter-speciality",
      "title": "3rd level: Treasure Hunter Speciality",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Choose Burglar or Spy."
        },
        {
          "type": "paragraph",
          "content": "The Speciality gains another feature at 7th level."
        }
      ]
    },
    {
      "id": "4th-6th-and-8th-level-virtue",
      "title": "4th, 6th, and 8th level: Virtue",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The calling gains Virtue choices."
        },
        {
          "type": "paragraph",
          "content": "At 6th level, the source allows a Craft instead of the normal Virtue choice."
        }
      ]
    },
    {
      "id": "5th-level-uncanny-dodge",
      "title": "5th level: Uncanny Dodge",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A reaction can halve damage from one qualifying attack."
        }
      ]
    },
    {
      "id": "9th-level-additional-expertise",
      "title": "9th level: additional Expertise",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Two more qualifying proficiencies receive Expertise."
        }
      ]
    },
    {
      "id": "10th-level-reliable-talent",
      "title": "10th level: Reliable Talent",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Proficient ability checks treat a d20 result of 9 or lower as a 10."
        }
      ]
    },
    {
      "id": "how-the-features-work-together",
      "title": "How the features work together",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Sneak Attack handles combat pressure."
        },
        {
          "type": "paragraph",
          "content": "Cunning Action keeps the Treasure Hunter mobile."
        },
        {
          "type": "paragraph",
          "content": "Expertise and Reliable Talent create extreme skill consistency."
        },
        {
          "type": "paragraph",
          "content": "The Speciality decides whether that expertise is directed toward burglary or espionage."
        }
      ]
    }
  ]
} as const;
export default question;

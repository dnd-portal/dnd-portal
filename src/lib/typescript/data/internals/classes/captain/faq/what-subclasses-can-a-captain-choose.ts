export const question = {
  "slug": "what-subclasses-can-a-captain-choose",
  "question": "What subclasses can a Captain choose?",
  "shortAnswer": "A Captain chooses a **Captain Title** at 3rd level: **Chieftain** or **Thane**. Chieftain focuses on challenging and pinning down dangerous enemies, while Thane uses Charisma to empower a melee weapon and later helps nearby allies resist the effects of exhaustion. Each title grants features at 3rd and 7th level.",
  "introduction": "The Captain's specialization is called a **Captain Title**.\n\nThe choice is made at 3rd level and gains a second feature at 7th level.",
  "sections": [
    {
      "id": "chieftain",
      "title": "Chieftain",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Chieftain is the more aggressive control-oriented title."
        },
        {
          "type": "paragraph",
          "content": "At 3rd level, **Challenge** lets the Captain use a bonus action against a nearby creature. The Captain gains advantage on melee attacks against that target for the feature's duration. The target can also be pressured into attacking the Captain instead of other creatures if it fails the feature's Wisdom (Insight) check."
        },
        {
          "type": "paragraph",
          "content": "The challenge ends early under several conditions, including if the Captain redirects attacks elsewhere or moves too far away, so Chieftain rewards committing to one important foe."
        },
        {
          "type": "paragraph",
          "content": "At 7th level, **Pursuer of Foes** makes the Captain exceptionally difficult to escape. Creatures can provoke opportunity attacks from the Captain even after taking Disengage, and a successful opportunity attack can reduce the creature's speed to 0 for the rest of the turn."
        },
        {
          "type": "paragraph",
          "content": "Choose Chieftain when the character should intercept major threats, hold a front line, and force enemies to deal with the Captain."
        }
      ]
    },
    {
      "id": "thane",
      "title": "Thane",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Thane is the Charisma-driven weapon-leadership title."
        },
        {
          "type": "paragraph",
          "content": "At 3rd level, **Bright Blade** lets the Captain empower a held melee weapon as a bonus action. For the duration, Charisma improves attack rolls with that weapon, and each successful hit can give another attacker advantage against the same target before the start of the Captain's next turn."
        },
        {
          "type": "paragraph",
          "content": "The effect is limited and refreshes after a short or long rest, so it is best saved for encounters where improved accuracy and coordinated focus fire matter."
        },
        {
          "type": "paragraph",
          "content": "At 7th level, **Tireless Leader** makes the Captain and nearby friendly creatures suffer exhaustion as though their exhaustion level were one lower."
        },
        {
          "type": "paragraph",
          "content": "Choose Thane when the player wants Charisma to influence weapon combat directly and wants a title that reinforces the endurance of a close-knit party."
        }
      ]
    },
    {
      "id": "which-one-should-you-choose",
      "title": "Which one should you choose?",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Chieftain → challenge, melee control, opportunity attacks\nThane     → Charisma-based weapon accuracy, ally setup, exhaustion support"
        },
        {
          "type": "paragraph",
          "content": "Both remain Captains. Leadership, Fighting Style, Valiant, Extra Attack, Aura of Valour, and Aura of Courage continue normally regardless of title."
        }
      ]
    }
  ]
} as const;
export default question;

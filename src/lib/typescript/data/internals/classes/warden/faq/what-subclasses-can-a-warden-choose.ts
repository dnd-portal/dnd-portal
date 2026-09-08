export const question = {
  "slug": "what-subclasses-can-a-warden-choose",
  "question": "What subclasses can a Warden choose?",
  "shortAnswer": "A Warden chooses one of two **Warden Oaths** at 3rd level: **Forayer** or **Hunter**. Forayer specialises in stealth, ambushes, initiative, Sneak Attack, and hiding during combat. Hunter specialises in tracking favoured foes and chooses a Hunter's Prey technique for repeated pressure against dangerous quarry.",
  "introduction": "The Warden subclass is called a Warden Oath.",
  "sections": [
    {
      "id": "forayer",
      "title": "Forayer",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Forayer is the stealth-and-ambush Oath."
        },
        {
          "type": "paragraph",
          "content": "It grants Stealth proficiency or stronger proficiency under its conditions."
        },
        {
          "type": "paragraph",
          "content": "Ambusher adds Wisdom to initiative, provides advantage against creatures that have not yet taken a turn, and grants Sneak Attack beginning at 1d6 with later improvement."
        },
        {
          "type": "paragraph",
          "content": "At 7th level, Harrier allows Hide as a bonus action."
        },
        {
          "type": "paragraph",
          "content": "Choose Forayer when scouting, surprise, and first-round pressure are central to the character."
        }
      ]
    },
    {
      "id": "hunter",
      "title": "Hunter",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Hunter is the dedicated quarry Oath."
        },
        {
          "type": "paragraph",
          "content": "It grants Hunting proficiency or stronger proficiency when tracking favoured foes."
        },
        {
          "type": "paragraph",
          "content": "Hunter's Prey provides a selection of combat techniques at 3rd level."
        },
        {
          "type": "paragraph",
          "content": "One published option, Foe-Hammer, rewards damaging an already-wounded enemy once per turn with an additional weapon damage die."
        },
        {
          "type": "paragraph",
          "content": "Hunter's Prey offers three 3rd-level approaches: Foe-Hammer adds extra weapon damage against an already-wounded foe once per turn, Goblin-Cleaver can redirect an additional attack toward a nearby second enemy, and Troll-Killer can add an additional attack against a Large or larger target. At 7th level, the Hunter adds a Defensive Tactics choice."
        },
        {
          "type": "paragraph",
          "content": "Choose Hunter when tracking and sustained combat against dangerous prey are more important than stealth ambushes."
        }
      ]
    },
    {
      "id": "choosing-between-them",
      "title": "Choosing between them",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Forayer → Stealth, initiative, ambush, Sneak Attack, Hide\nHunter  → Hunting, favoured foes, sustained quarry pressure"
        }
      ]
    }
  ]
} as const;
export default question;

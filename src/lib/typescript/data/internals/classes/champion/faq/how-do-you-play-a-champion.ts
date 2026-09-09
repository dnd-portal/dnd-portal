export const question = {
  "slug": "how-do-you-play-a-champion",
  "question": "How do you play a Champion?",
  "shortAnswer": "Play a Champion by committing to either a Strength-based melee plan or a Dexterity-based ranged plan, matching the Fighting Style and Champion Way to that choice, and saving Surge of Vigour for turns where extra offense, movement, defense, or healing will materially change the encounter. Sharp-shooter rewards calculated high-impact ranged attacks; Slayer rewards aggressive melee pressure.",
  "introduction": "Champion is mechanically direct, but good play still depends on build coherence and timing.",
  "sections": [
    {
      "id": "choose-one-main-weapon-plan",
      "title": "Choose one main weapon plan",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A Champion usually works best when either Strength or Dexterity is clearly primary."
        },
        {
          "type": "paragraph",
          "content": "Strength supports heavy melee weapons and naturally aligns with Slayer."
        },
        {
          "type": "paragraph",
          "content": "Dexterity supports bows and other ranged attacks and naturally aligns with Sharp-shooter."
        },
        {
          "type": "paragraph",
          "content": "Trying to maximize both usually costs Constitution or other useful abilities without giving the class an equivalent payoff."
        }
      ]
    },
    {
      "id": "match-the-fighting-style-to-the-plan",
      "title": "Match the Fighting Style to the plan",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The Fighting Style should reinforce equipment that is used every round."
        },
        {
          "type": "paragraph",
          "content": "An archer gains little from a melee-only style, while a heavy-weapon Slayer gains little from a shield-oriented setup it never uses."
        }
      ]
    },
    {
      "id": "treat-surge-of-vigour-as-a-flexible-emergency-button",
      "title": "Treat Surge of Vigour as a flexible emergency button",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Surge of Vigour can be used offensively or defensively."
        },
        {
          "type": "paragraph",
          "content": "Use the extra Attack option when another attack can finish a dangerous enemy or create decisive pressure. Use Dash or Disengage when position matters more than raw damage. Dodge can protect the Champion during a dangerous turn. The healing option can keep the character standing without giving up the normal action."
        },
        {
          "type": "paragraph",
          "content": "Because the feature returns on a short or long rest, it is powerful but not something to spend automatically on the first round."
        }
      ]
    },
    {
      "id": "sharp-shooter-trade-accuracy-for-impact",
      "title": "Sharp-shooter: trade accuracy for impact",
      "blocks": [
        {
          "type": "paragraph",
          "content": "**Mighty Shot** allows the Champion to risk accuracy for substantially higher ranged damage."
        },
        {
          "type": "paragraph",
          "content": "That decision is best when the attack is likely enough to hit despite the penalty, or when advantage and other bonuses make the risk acceptable."
        },
        {
          "type": "paragraph",
          "content": "At 7th level, **True Shot** lets the Champion give up one ranged attack so the next ranged hit that turn becomes a critical hit. It is especially meaningful when combined with a high-damage shot rather than used automatically every round."
        }
      ]
    },
    {
      "id": "slayer-embrace-controlled-recklessness",
      "title": "Slayer: embrace controlled recklessness",
      "blocks": [
        {
          "type": "paragraph",
          "content": "**Sterner than Steel** increases the Slayer's hit-point maximum."
        },
        {
          "type": "paragraph",
          "content": "**Battle-Fury** rewards aggressive Strength-based melee attacks: the Slayer can attack recklessly for advantage and additional damage while accepting increased danger from enemy attacks."
        },
        {
          "type": "paragraph",
          "content": "At 7th level, **War-Hardened** improves initiative and Strength-based reliability and prevents surprise while its sensory conditions are met."
        },
        {
          "type": "paragraph",
          "content": "Slayer therefore wants to enter important fights quickly and use its durability to survive the risks it creates."
        }
      ]
    },
    {
      "id": "extra-attack-changes-the-value-of-setup",
      "title": "Extra Attack changes the value of setup",
      "blocks": [
        {
          "type": "paragraph",
          "content": "At 5th level, two attacks make weapon buffs and advantage more valuable."
        },
        {
          "type": "paragraph",
          "content": "At 10th level, three attacks make every improvement to accuracy, positioning, and damage scale across more attack rolls."
        }
      ]
    },
    {
      "id": "common-mistakes",
      "title": "Common mistakes",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Common Champion mistakes include:"
        },
        {
          "type": "list",
          "items": [
            "splitting Strength and Dexterity without a reason;",
            "choosing a Fighting Style that does not match the actual weapon plan;",
            "spending Surge of Vigour on a low-impact turn;",
            "treating Mighty Shot as mandatory instead of a risk-reward choice;",
            "using True Shot without considering the value of the attack being sacrificed;",
            "assuming the class is the Fighter's Champion subclass because of the shared name."
          ]
        }
      ]
    }
  ]
} as const;
export default question;

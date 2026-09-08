export const question = {
  "slug": "what-subclasses-can-a-champion-choose",
  "question": "What subclasses can a Champion choose?",
  "shortAnswer": "A Champion chooses a **Champion Way** at 3rd level: **Sharp-shooter** or **Slayer**. Sharp-shooter specializes in ranged accuracy and high-impact shots through Mighty Shot and True Shot. Slayer specializes in aggressive Strength-based melee combat through Sterner than Steel, Battle-Fury, and War-Hardened.",
  "introduction": "The Champion specialization is called a **Champion Way**.\n\nThe choice is made at 3rd level and gains another feature at 7th level.",
  "sections": [
    {
      "id": "sharp-shooter",
      "title": "Sharp-shooter",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Sharp-shooter is the ranged specialist."
        },
        {
          "type": "paragraph",
          "content": "At 3rd level, it improves Perception proficiency and gains **Mighty Shot**. Before making a ranged attack, the Champion can roll the weapon's damage die and subtract that result from the attack roll. If the attack still hits, the attack gains two additional weapon damage dice. The extra damage can apply once per turn."
        },
        {
          "type": "paragraph",
          "content": "This creates a deliberate accuracy-versus-damage decision rather than a passive bonus."
        },
        {
          "type": "paragraph",
          "content": "At 7th level, **True Shot** allows the Champion to forgo one ranged attack during the Attack action. The next ranged hit before the end of the turn becomes a critical hit."
        },
        {
          "type": "paragraph",
          "content": "Sharp-shooter therefore rewards careful target selection, advantage, accuracy bonuses, and attacks with enough damage dice to make the critical hit worthwhile."
        }
      ]
    },
    {
      "id": "slayer",
      "title": "Slayer",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Slayer is the aggressive melee specialist."
        },
        {
          "type": "paragraph",
          "content": "At 3rd level, **Sterner than Steel** increases maximum hit points immediately and continues adding more as Champion levels are gained."
        },
        {
          "type": "paragraph",
          "content": "The same level grants **Battle-Fury**. On the first attack of the turn, the Slayer can choose to fight recklessly. Doing so gives advantage on Strength-based melee weapon attacks, adds extra damage based on proficiency bonus, and grants resistance to bludgeoning, piercing, and slashing damage until the start of the next turn—but enemy attacks against the Slayer also gain advantage."
        },
        {
          "type": "paragraph",
          "content": "At 7th level, **War-Hardened** improves initiative, Strength checks, and Strength saving throws and prevents surprise while the Slayer is not blinded, deafened, or incapacitated."
        },
        {
          "type": "paragraph",
          "content": "Slayer therefore rewards committing to dangerous melee exchanges rather than avoiding them."
        }
      ]
    },
    {
      "id": "choosing-between-them",
      "title": "Choosing between them",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Sharp-shooter → ranged weapons, calculated accuracy trades, critical-hit setup\nSlayer        → Strength melee, extra durability, aggressive risk-taking"
        },
        {
          "type": "paragraph",
          "content": "Both Ways keep the same base Champion features: Fighting Style, Surge of Vigour, Virtue/Craft advancement, Extra Attack, Indomitable, and the third attack at 10th level."
        }
      ]
    }
  ]
} as const;
export default question;

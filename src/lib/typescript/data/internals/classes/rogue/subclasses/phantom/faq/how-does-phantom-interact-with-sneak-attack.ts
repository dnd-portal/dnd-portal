export const question = {
  "slug": "how-does-phantom-interact-with-sneak-attack",
  "question": "How does Phantom interact with Sneak Attack?",
  "shortAnswer": "Wails from the Grave is triggered by Sneak Attack rather than replacing it. You first deal normal Sneak Attack damage to the creature you hit; the Phantom feature then creates a separate necrotic-damage effect against another eligible creature. Because it is tied to Sneak Attack, reliably landing one qualifying hit remains the core combat goal.",
  "fullAnswer": {
    "introduction": "",
    "sections": [
      {
        "title": "The base Sneak Attack rule still applies",
        "paragraphs": [
          "Sneak Attack is the engine that activates Wails from the Grave. You first resolve the normal qualifying Sneak Attack against the creature you hit, then the subclass can deal separate necrotic damage to another eligible creature."
        ]
      },
      {
        "title": "Subclass interaction",
        "paragraphs": [
          "Wails from the Grave is triggered by Sneak Attack rather than replacing it. You first deal normal Sneak Attack damage to the creature you hit; the Phantom feature then creates a separate necrotic-damage effect against another eligible creature. Because it is tied to Sneak Attack, reliably landing one qualifying hit remains the core combat goal."
        ]
      },
      {
        "title": "Reaction attacks can still matter",
        "paragraphs": [
          "Off-turn Sneak Attacks remain possible under the normal once-per-turn rule. From 9th level onward, the Phantom may also want the reaction available when a nearby creature dies so it can create a Soul Trinket."
        ]
      },
      {
        "title": "Do not double-count subclass damage",
        "paragraphs": [
          "Wails from the Grave is not a second Sneak Attack and does not become part of the original attack's critical-hit dice. It is a separate necrotic-damage effect triggered after the Sneak Attack is dealt."
        ]
      }
    ]
  }
} as const;
export default question;

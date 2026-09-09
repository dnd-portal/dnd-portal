export const question = {
  "slug": "how-does-assassin-interact-with-sneak-attack",
  "question": "How does Assassin interact with Sneak Attack?",
  "shortAnswer": "Assassinate can make the first-round Sneak Attack much more dangerous. Advantage against a creature that has not acted can satisfy the normal Sneak Attack requirement. If the target is actually surprised, the entire qualifying hit becomes a critical hit, which doubles the attack's damage dice, including Sneak Attack dice under the normal critical-hit rule.",
  "fullAnswer": {
    "introduction": "",
    "sections": [
      {
        "title": "The base Sneak Attack rule still applies",
        "paragraphs": [
          "Sneak Attack follows the normal once-per-turn rule, but Assassinate makes the opening turn unusually favorable. Advantage against a creature that has not yet acted can satisfy Sneak Attack, while a hit against a genuinely surprised creature becomes a critical hit."
        ]
      },
      {
        "title": "Subclass interaction",
        "paragraphs": [
          "Assassinate can make the first-round Sneak Attack much more dangerous. Advantage against a creature that has not acted can satisfy the normal Sneak Attack requirement. If the target is actually surprised, the entire qualifying hit becomes a critical hit, which doubles the attack's damage dice, including Sneak Attack dice under the normal critical-hit rule."
        ]
      },
      {
        "title": "Reaction attacks can still matter",
        "paragraphs": [
          "Reaction attacks remain a separate turn for Sneak Attack purposes, but they do not inherit Assassinate's opening benefits unless their own timing still satisfies the feature. The subclass's signature burst is concentrated at the start of combat."
        ]
      },
      {
        "title": "Do not double-count subclass damage",
        "paragraphs": [
          "When Assassinate makes a qualifying hit critical, the attack's damage dice are doubled under the normal critical-hit rule, including Sneak Attack dice. Death Strike later applies its own separate multiplier after the hit and saving throw are resolved."
        ]
      }
    ]
  }
} as const;
export default question;

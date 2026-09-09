export const question = {
  "slug": "what-are-the-main-storm-herald-features",
  "question": "What are the main Path of the Storm Herald features?",
  "shortAnswer": "Storm Herald surrounds the raging Barbarian with a Desert, Sea, or Tundra aura. Storm Aura provides repeatable elemental offense or temporary hit points, Storm Soul adds matching resistance and environmental benefits, Shielding Storm extends that resistance to allies, and Raging Storm adds a final control or retaliation effect tied to the chosen environment.",
  "introduction": "",
  "sections": [
    {
      "id": "3rd-level-storm-aura",
      "title": "3rd level — Storm Aura",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Choose Desert, Sea or Tundra. While raging, your storm fills a 10-foot aura. As a bonus action on your turns, you activate the current environment's effect: Desert deals fire damage around you, Sea targets one creature with lightning and a Dexterity save, and Tundra grants temporary hit points to chosen creatures in the aura."
        }
      ]
    },
    {
      "id": "6th-level-storm-soul",
      "title": "6th level — Storm Soul",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Gain resistance and environmental benefits based on the selected aura: fire and extreme heat for Desert, lightning plus underwater adaptation for Sea, or cold and extreme-cold adaptation for Tundra."
        }
      ]
    },
    {
      "id": "10th-level-shielding-storm",
      "title": "10th level — Shielding Storm",
      "blocks": [
        {
          "type": "paragraph",
          "content": "While raging, allies in your aura gain the same elemental resistance associated with your Storm Soul."
        }
      ]
    },
    {
      "id": "14th-level-raging-storm",
      "title": "14th level — Raging Storm",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Your chosen environment gains a stronger control or retaliation effect while raging, with a different effect for Desert, Sea and Tundra."
        }
      ]
    },
    {
      "id": "how-the-features-work-together",
      "title": "How the features work together",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The environment choice shapes the whole subclass, not just the 3rd-level aura. Desert emphasizes area fire pressure, Sea focuses lightning on one target, and Tundra supports the party with temporary hit points. Later resistance and control features reinforce that same elemental role."
        }
      ]
    }
  ]
} as const;
export default question;

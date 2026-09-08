export const question = {
  "slug": "how-does-storm-aura-work",
  "question": "How does Storm Aura work?",
  "shortAnswer": "When you choose Path of the Storm Herald, select Desert, Sea or Tundra. While raging, you emanate a 10-foot Storm Aura. As a bonus action on each of your turns, including the turn your Rage begins when your action economy allows, you can activate the aura's current effect. The chosen environment can be changed when you gain a Barbarian level.",
  "introduction": "",
  "sections": [
    {
      "id": "desert",
      "title": "Desert",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Activation deals fire damage to other creatures in the aura. Because it affects creatures around you rather than only enemies, party positioning matters."
        }
      ]
    },
    {
      "id": "sea",
      "title": "Sea",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Choose one creature in the aura. It makes a Dexterity saving throw and takes lightning damage on a failure, with reduced damage on a success according to the feature."
        }
      ]
    },
    {
      "id": "tundra",
      "title": "Tundra",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Chosen creatures in the aura gain temporary hit points. This is proactive durability rather than ordinary healing."
        }
      ]
    },
    {
      "id": "bonus-action-competition",
      "title": "Bonus-action competition",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Activating the aura costs a bonus action. Feats, two-weapon fighting, magic items and other subclass or multiclass abilities may compete for that same action."
        }
      ]
    },
    {
      "id": "the-environment-shapes-later-features-too",
      "title": "The environment shapes later features too",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Storm Soul, Shielding Storm and Raging Storm all inherit the chosen environment, so the 3rd-level choice influences the subclass beyond the initial aura."
        }
      ]
    }
  ]
} as const;
export default question;

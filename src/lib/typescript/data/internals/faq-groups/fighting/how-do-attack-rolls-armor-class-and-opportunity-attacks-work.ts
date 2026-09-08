export const question = {
  "slug": "how-do-attack-rolls-armor-class-and-opportunity-attacks-work",
  "question": "How do attack rolls, Armor Class, and opportunity attacks work?",
  "shortAnswer": "To resolve an attack roll, roll a d20 and add the relevant modifiers. If the result equals or exceeds the target's Armor Class, the attack hits. Melee weapon attacks normally use Strength and ranged weapon attacks normally use Dexterity, with properties and features creating exceptions. Opportunity attacks use a reaction when a hostile creature you can see moves out of your reach; the attack happens just before it leaves that reach.",
  "introduction": "",
  "sections": [
    {
      "id": "attack-roll-versus-ac",
      "title": "Attack roll versus AC",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The core test is simple: d20 + attack modifiers compared with Armor Class. Meeting the AC is enough to hit."
        }
      ]
    },
    {
      "id": "ability-and-proficiency",
      "title": "Ability and proficiency",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A melee weapon attack normally uses Strength. A ranged weapon attack normally uses Dexterity. Finesse, thrown weapons, spell attacks and specific class features can change which ability is used. Proficiency bonus is added when the attacker is proficient with the weapon or when a spell attack rule grants it."
        }
      ]
    },
    {
      "id": "natural-20-and-natural-1",
      "title": "Natural 20 and natural 1",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Under the 2014 attack rules, a natural 20 on the d20 hits regardless of modifiers or Armor Class and is a critical hit. A natural 1 misses regardless of modifiers or AC."
        }
      ]
    },
    {
      "id": "ranged-attacks-have-range-rules",
      "title": "Ranged attacks have range rules",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A weapon with normal and long range can attack within normal range normally, at long range with disadvantage, and not beyond the listed long range. A ranged attack also has disadvantage when a qualifying hostile creature is within 5 feet of the attacker under the close-combat rule."
        }
      ]
    },
    {
      "id": "cover-can-improve-defense",
      "title": "Cover can improve defense",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Obstacles may provide half cover, three-quarters cover or total cover. Half cover and three-quarters cover increase AC and Dexterity saving throws by the amounts specified by the rule, while total cover normally prevents direct targeting by attacks or effects that require the target to be exposed."
        }
      ]
    },
    {
      "id": "opportunity-attacks-trigger-on-leaving-reach",
      "title": "Opportunity attacks trigger on leaving reach",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A hostile creature you can see can provoke when it uses its movement, action or reaction to leave your reach. You spend your reaction to make one melee attack immediately before it leaves."
        }
      ]
    },
    {
      "id": "disengage-avoids-the-normal-opportunity-attack",
      "title": "Disengage avoids the normal opportunity attack",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A creature that takes the Disengage action does not provoke opportunity attacks from its movement for the rest of that turn."
        }
      ]
    },
    {
      "id": "forced-movement-and-teleportation-differ",
      "title": "Forced movement and teleportation differ",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Teleportation and movement that does not use the creature's movement, action or reaction do not normally provoke an opportunity attack under the 2014 baseline. Specific features can still create their own triggers."
        }
      ]
    },
    {
      "id": "an-attack-is-defined-by-the-attack-roll",
      "title": "An attack is defined by the attack roll",
      "blocks": [
        {
          "type": "paragraph",
          "content": "If there is uncertainty about whether something counts as an attack, the 2014 combat rules use a practical test: if the effect makes an attack roll, it is an attack. A saving-throw spell is not automatically an attack merely because it harms a creature."
        }
      ]
    }
  ]
} as const;
export default question;

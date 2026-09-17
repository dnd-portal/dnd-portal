import type { ClassEditionFeature } from "../types";

export const features: readonly ClassEditionFeature[] = [
  {
    level: 1,
    name: "Fast Movement",
    description:
      "+10 feet land speed in light or medium armour and without a heavy load.",
  },
  {
    level: 1,
    name: "Illiteracy",
    description:
      "You cannot read or write unless you spend skill points to learn literacy or gain it from another source.",
  },
  {
    level: 1,
    name: "Rage",
    description:
      "You can enter a fierce anger a limited number of times per day. While raging, you gain bonuses to Strength and Constitution and Will saves, a penalty to Armor Class, and temporary hit points; the rage lasts for several rounds and leaves you fatigued afterward.",
  },
  {
    level: 2,
    name: "Uncanny Dodge",
    description:
      "You retain your Dexterity bonus to Armor Class when caught flat-footed.",
  },
  {
    level: 3,
    name: "Trap Sense",
    description:
      "You gain a scaling bonus on Reflex saves against traps and to Armor Class against attacks made by traps.",
  },
  {
    level: 5,
    name: "Improved Uncanny Dodge",
    description:
      "You cannot be flanked except by a rogue whose level is at least four higher than your barbarian level.",
  },
  {
    level: 7,
    name: "Damage Reduction",
    description:
      "You ignore a small amount of damage from each weapon or natural attack that hits you. The amount increases at higher barbarian levels.",
  },
  {
    level: 11,
    name: "Greater Rage",
    description:
      "Your Rage bonuses to Strength and Constitution, Will saves, and Armor Class improve.",
  },
  {
    level: 14,
    name: "Indomitable Will",
    description:
      "While raging, you gain a bonus on Will saves to resist enchantment effects.",
  },
  {
    level: 17,
    name: "Tireless Rage",
    description: "You are no longer fatigued when your Rage ends.",
  },
  {
    level: 20,
    name: "Mighty Rage",
    description:
      "Your Rage reaches its strongest form and grants the class maximum Rage bonuses.",
  },
];

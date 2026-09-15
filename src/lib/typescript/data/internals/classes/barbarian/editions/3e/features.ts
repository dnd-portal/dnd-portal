import type { ClassEditionFeature } from "../types";

export const features: readonly ClassEditionFeature[] = [
  {
    level: 1,
    name: "Fast Movement",
    description:
      "Your land speed increases by 10 feet while you wear light armor or no armor and are not heavily encumbered.",
  },
  {
    level: 1,
    name: "Illiteracy",
    description:
      "You cannot read or write unless literacy is learned through training or gained from another source.",
  },
  {
    level: 1,
    name: "Rage",
    description:
      "You can enter a fierce rage a limited number of times per day. Rage improves Strength and Constitution and Will saves, penalizes Armor Class, lasts for a limited duration, and leaves you fatigued afterward.",
  },
  {
    level: 1,
    name: "Uncanny Dodge",
    description:
      "You retain your Dexterity bonus to Armor Class when caught flat-footed. With further experience, you cannot be flanked and gain a growing bonus on saves against traps.",
  },
  {
    level: 11,
    name: "Damage Reduction",
    description:
      "You shrug off a small amount of damage from each weapon or natural attack that hits you. The reduction improves at higher levels.",
  },
  {
    level: 15,
    name: "Greater Rage",
    description:
      "Your Rage bonuses to Strength, Constitution, Will saves, and Armor Class improve.",
  },
  {
    level: 20,
    name: "Tireless Rage",
    description:
      "You can continue using Rage without becoming fatigued when the rage ends.",
  },
];

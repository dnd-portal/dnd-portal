import type { ClassEditionFeature } from "../types";

export const features: readonly ClassEditionFeature[] = [
  {
    level: 1,
    name: "Rage",
    description:
      "Enter a rage as a bonus action. While raging, gain its Strength, damage, resistance, and concentration restrictions; uses return on a long rest.",
  },
  {
    level: 1,
    name: "Unarmored Defense",
    description:
      "Your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier while not wearing armor.",
  },
  {
    level: 2,
    name: "Reckless Attack",
    description:
      "Choose to gain advantage on qualifying Strength-based attacks, while attacks against you gain advantage until your next turn.",
  },
  {
    level: 2,
    name: "Danger Sense",
    description:
      "You have advantage on Dexterity saving throws against effects you can see.",
  },
  {
    level: 3,
    name: "Primal Path",
    description:
      "Choose a 2014 Barbarian path. Path features arrive at levels 3, 6, 10, and 14.",
  },
  {
    level: 5,
    name: "Extra Attack",
    description:
      "Attack twice, instead of once, whenever you take the Attack action.",
  },
  {
    level: 5,
    name: "Fast Movement",
    description:
      "Your speed increases by 10 feet while you are not wearing heavy armor.",
  },
  {
    level: 7,
    name: "Feral Instinct",
    description: "You have advantage on initiative rolls.",
  },
  {
    level: 9,
    name: "Brutal Critical",
    description:
      "Roll one additional weapon damage die when determining the extra damage of a critical hit; this increases at levels 13 and 17.",
  },
  {
    level: 11,
    name: "Relentless Rage",
    description:
      "A Constitution saving throw can keep you at 1 hit point when damage would reduce you to 0 while raging.",
  },
  {
    level: 15,
    name: "Persistent Rage",
    description:
      "Your rage no longer ends early for the ordinary inactivity reasons.",
  },
  {
    level: 18,
    name: "Indomitable Might",
    description:
      "If your total for a Strength check is less than your Strength score, use your score instead.",
  },
  {
    level: 20,
    name: "Primal Champion",
    description:
      "Your Strength and Constitution increase by 4, and their maximum becomes 24.",
  },
];

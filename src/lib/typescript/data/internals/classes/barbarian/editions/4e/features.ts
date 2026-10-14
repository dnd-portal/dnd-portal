import type { ClassEditionFeature } from "../types";

export const features: readonly ClassEditionFeature[] = [
  {
    level: 1,
    name: "Barbarian Agility",
    description:
      "You gain the 4e defense benefit associated with moving lightly armored through battle.",
  },
  {
    level: 1,
    name: "Feral Might",
    description:
      "Choose a build-defining option: Rageblood Vigor, Thaneborn Triumph, Thunderborn Wrath, or Whirling Slayer.",
  },
  {
    level: 1,
    name: "Rampage",
    description:
      "When you score a critical hit, you can make an additional melee basic attack as a free action.",
  },
  {
    level: 2,
    name: "Rage Strike",
    description:
      "While raging, spend an unused daily Rage power to make a rage strike attack.",
  },
];

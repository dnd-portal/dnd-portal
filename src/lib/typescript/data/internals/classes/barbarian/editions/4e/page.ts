import type { ClassEditionData } from "../types";
import { features } from "./features";
import { progression } from "./progression";

export const page: ClassEditionData = {
  edition: "4e",
  label: "4e",
  source: "Player's Handbook 2",
  category: "Core D&D / supplement",
  intro:
    "A primal striker who channels rage powers through Strength, Constitution, and Charisma.",
  traits: [
    { label: "Role", value: "Striker" },
    { label: "Power Source", value: "Primal" },
    { label: "Key Abilities", value: "Strength, Constitution, Charisma" },
    { label: "Level Range", value: "1–30" },
    { label: "Skills", value: "Choose 3 from the Barbarian skill list" },
  ],
  features,
  progression,
  sections: [
    {
      id: "builds",
      title: "Builds",
      text: "Rageblood Vigor, Thaneborn Triumph, Thunderborn Wrath, and Whirling Slayer are build choices for the 4e Barbarian.",
    },
    {
      id: "powers",
      title: "Powers",
      text: "The class uses At-Will, Encounter, Daily/Rage, and Utility powers, with additional options in Paragon and Epic tiers.",
    },
  ],
  levelCap: 30,
};

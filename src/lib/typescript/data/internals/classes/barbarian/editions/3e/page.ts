import type { ClassEditionData } from "../types";
import { features } from "./features";
import { progression } from "./progression";

export const page: ClassEditionData = {
  edition: "3e",
  label: "3e",
  source: "Player's Handbook (3rd Edition)",
  category: "Core D&D",
  intro:
    "The original third-edition Barbarian: a full-BAB d20 class with its own Uncanny Dodge, trap protection, and Rage progression.",
  traits: [
    {
      label: "Alignment",
      value: "Any nonlawful",
    },
    {
      label: "Hit Die",
      value: "d12",
    },
    {
      label: "Base Attack Bonus",
      value: "Full",
    },
    {
      label: "Good Save",
      value: "Fortitude",
    },
    {
      label: "Skills",
      value:
        "Climb, Craft, Handle Animal, Intimidate, Intuit Direction, Jump, Listen, Ride, Swim, Wilderness Lore",
    },
  ],
  features,
  progression,
  sections: [],
  levelCap: 20,
};

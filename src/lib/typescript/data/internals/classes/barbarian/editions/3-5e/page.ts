import type { ClassEditionData } from "../types";
import { features } from "./features";
import { progression } from "./progression";

export const page: ClassEditionData = {
  edition: "3.5e",
  label: "3.5e",
  source: "Player's Handbook v3.5",
  category: "Core D&D",
  intro:
    "A d20 martial class with a d12 Hit Die, full base attack bonus, and a primal Rage progression.",
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
        "Climb, Craft, Handle Animal, Intimidate, Jump, Listen, Ride, Survival, Swim",
    },
  ],
  features,
  progression,
  sections: [],
  levelCap: 20,
};

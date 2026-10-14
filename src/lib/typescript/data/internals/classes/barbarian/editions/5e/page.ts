import type { ClassEditionData } from "../types";
import { features } from "./features";
import { progression } from "./progression";

export const page: ClassEditionData = {
  edition: "5e",
  label: "5e",
  source: "Player's Handbook (2014)",
  category: "Core D&D",
  intro:
    "A primal warrior who turns raw fury into endurance, mobility, and brutal melee pressure under the original fifth-edition rules.",
  traits: [
    { label: "Hit Die", value: "d12" },
    { label: "Saving Throws", value: "Strength, Constitution" },
    { label: "Weapons", value: "Simple and martial weapons" },
    { label: "Armor", value: "Light armor, medium armor, shields" },
    { label: "Skills", value: "Choose 2 from the Barbarian skill list" },
  ],
  features,
  progression,
  sections: [
    {
      id: "primal-paths",
      title: "Primal Paths",
      text: "The 2014 Barbarian chooses a Primal Path at level 3. Available paths include Berserker, Totem Warrior, Battlerager, Ancestral Guardian, Storm Herald, Zealot, Beast, Wild Magic, and Giant.",
    },
  ],
  levelCap: 20,
};

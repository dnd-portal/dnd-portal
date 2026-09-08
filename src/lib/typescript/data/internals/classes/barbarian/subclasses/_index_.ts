import { page as ancestralGuardian } from './ancestral-guardian/_index_';
import { page as battlerager } from './battlerager/_index_';
import { page as beast } from './beast/_index_';
import { page as berserker } from './berserker/_index_';
import { page as giant } from './giant/_index_';
import { page as stormHerald } from './storm-herald/_index_';
import { page as totemWarrior } from './totem-warrior/_index_';
import { page as wildMagic } from './wild-magic/_index_';
import { page as zealot } from './zealot/_index_';

export const subclasses = { ancestralGuardian, battlerager, beast, berserker, giant, stormHerald, totemWarrior, wildMagic, zealot } as const;
export const subclassSlugs = [
  "ancestral-guardian",
  "battlerager",
  "beast",
  "berserker",
  "giant",
  "storm-herald",
  "totem-warrior",
  "wild-magic",
  "zealot"
] as const;

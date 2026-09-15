import type { AbilityName, Character, SkillName } from './types';
import { skillNames } from './defaults';
export const modifier = (score: number): number => Math.floor((score - 10) / 2);
export const proficiencyBonus = (level: number): number => Math.min(6, Math.max(2, Math.floor((Math.max(1, level) - 1) / 4) + 2));
export const formatModifier = (value: number): string => value >= 0 ? `+${value}` : `${value}`;
export function skillModifier(character: Character, skill: SkillName): number { const entry = character.skills[skill]; const info = skillNames.find(item => item.key === skill); if (!info) return 0; return modifier(character.abilities[info.ability]) + (entry.expertise ? proficiencyBonus(character.character.level) * 2 : entry.proficient ? proficiencyBonus(character.character.level) : 0); }
export function savingThrowModifier(character: Character, ability: AbilityName): number { return modifier(character.abilities[ability]) + (character.savingThrows[ability] ? proficiencyBonus(character.character.level) : 0); }
export function passivePerception(character: Character): number { return 10 + skillModifier(character, 'perception'); }

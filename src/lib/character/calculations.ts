import type { AbilityName, Character, SkillName } from './types';
import { skillNames } from './defaults';

export const modifier = (score: number): number =>
    Math.floor((score - 10) / 2);

export const proficiencyBonus = (level: number): number =>
    Math.min(
        6,
        Math.max(
            2,
            Math.floor((Math.max(1, level) - 1) / 4) + 2
        )
    );

export const formatModifier = (value: number): string =>
    value >= 0 ? `+${value}` : `${value}`;

export function skillModifier(
    character: Character,
    skill: SkillName
): number {
    const entry = character.skills[skill];
    const info = skillNames.find(item => item.key === skill);

    if (!info) {
        return 0;
    }

    const abilityModifier = modifier(
        character.abilities[info.ability]
    );

    const proficiency = proficiencyBonus(
        character.character.level
    );

    const proficiencyModifier = entry.expertise
        ? proficiency * 2
        : entry.proficient
            ? proficiency
            : 0;

    return abilityModifier + proficiencyModifier;
}

export function savingThrowModifier(
    character: Character,
    ability: AbilityName
): number {
    const abilityModifier = modifier(
        character.abilities[ability]
    );

    const proficiency = character.savingThrows[ability]
        ? proficiencyBonus(character.character.level)
        : 0;

    return abilityModifier + proficiency;
}

export function passivePerception(character: Character): number {
    return 10 + skillModifier(character, 'perception');
}
import * as core from '$lib/typescript/data/core/_index_';
import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';
import type {
	CoreTraitsData,
	InlineContent,
	PageContentBlock,
	PageContentSection,
	ProgressionData
} from '$lib/typescript/pages/content-types';


import * as page from './page';

export const progression = {
    title: 'The Barbarian',
    heading: 'The Barbarian',
    columns: [
        {
            key: 'level',
            label: 'Level',
            format: 'ordinal'
        },
        {
            key: 'proficiencyBonus',
            label: 'Proficiency Bonus',
            shortLabel: 'PB',
            path: 'internals.rules.abbreviations.pb',
            format: 'signed'
        },
        {
            key: 'features',
            label: 'Features'
        },
        {
            key: 'rages',
            label: 'Rages'
        },
        {
            key: 'rageDamage',
            label: 'Rage Damage',
            format: 'signed'
        }
    ],
    rows: [
        {
            level: 1,
            proficiencyBonus: 2,
            features: [
                { label: 'Rage', sectionId: page.sections.rage.id },
                { label: 'Unarmored Defense', sectionId: page.sections.unarmoredDefense.id }
            ],
            values: {
                rages: 2,
                rageDamage: 2
            }
        },
        {
            level: 2,
            proficiencyBonus: 2,
            features: [
                { label: 'Reckless Attack', sectionId: page.sections.recklessAttack.id },
                { label: 'Danger Sense', sectionId: page.sections.dangerSense.id }
            ],
            values: {
                rages: 2,
                rageDamage: 2
            }
        },
        {
            level: 3,
            proficiencyBonus: 2,
            features: [
                { label: 'Primal Path', sectionId: page.sections.primalPath.id },
                {
                    label: 'Primal Knowledge',
                    sectionId: page.sections.primalKnowledge.id,
                    optional: true
                }
            ],
            values: {
                rages: 3,
                rageDamage: 2
            }
        },
        {
            level: 4,
            proficiencyBonus: 2,
            features: [
                {
                    label: 'Ability Score Improvement',
                    sectionId: page.sections.abilityScoreImprovement.id
                }
            ],
            values: {
                rages: 3,
                rageDamage: 2
            }
        },
        {
            level: 5,
            proficiencyBonus: 3,
            features: [
                { label: 'Extra Attack', sectionId: page.sections.extraAttack.id },
                { label: 'Fast Movement', sectionId: page.sections.fastMovement.id }
            ],
            values: {
                rages: 3,
                rageDamage: 2
            }
        },
        {
            level: 6,
            proficiencyBonus: 3,
            features: [{ label: 'Path Feature' }],
            values: {
                rages: 4,
                rageDamage: 2
            }
        },
        {
            level: 7,
            proficiencyBonus: 3,
            features: [
                { label: 'Feral Instinct', sectionId: page.sections.feralInstinct.id },
                {
                    label: 'Instinctive Pounce',
                    sectionId: page.sections.instinctivePounce.id,
                    optional: true
                }
            ],
            values: {
                rages: 4,
                rageDamage: 2
            }
        },
        {
            level: 8,
            proficiencyBonus: 3,
            features: [
                {
                    label: 'Ability Score Improvement',
                    sectionId: page.sections.abilityScoreImprovement.id
                }
            ],
            values: {
                rages: 4,
                rageDamage: 2
            }
        },
        {
            level: 9,
            proficiencyBonus: 4,
            features: [
                {
                    label: 'Brutal Critical (1 die)',
                    sectionId: page.sections.brutalCritical.id
                }
            ],
            values: {
                rages: 4,
                rageDamage: 3
            }
        },
        {
            level: 10,
            proficiencyBonus: 4,
            features: [
                { label: 'Path Feature' },
                {
                    label: 'Primal Knowledge',
                    sectionId: page.sections.primalKnowledge.id,
                    optional: true
                }
            ],
            values: {
                rages: 4,
                rageDamage: 3
            }
        },
        {
            level: 11,
            proficiencyBonus: 4,
            features: [
                { label: 'Relentless Rage', sectionId: page.sections.relentlessRage.id }
            ],
            values: {
                rages: 4,
                rageDamage: 3
            }
        },
        {
            level: 12,
            proficiencyBonus: 4,
            features: [
                {
                    label: 'Ability Score Improvement',
                    sectionId: page.sections.abilityScoreImprovement.id
                }
            ],
            values: {
                rages: 5,
                rageDamage: 3
            }
        },
        {
            level: 13,
            proficiencyBonus: 5,
            features: [
                {
                    label: 'Brutal Critical (2 dice)',
                    sectionId: page.sections.brutalCritical.id
                }
            ],
            values: {
                rages: 5,
                rageDamage: 3
            }
        },
        {
            level: 14,
            proficiencyBonus: 5,
            features: [{ label: 'Path Feature' }],
            values: {
                rages: 5,
                rageDamage: 3
            }
        },
        {
            level: 15,
            proficiencyBonus: 5,
            features: [
                { label: 'Persistent Rage', sectionId: page.sections.persistentRage.id }
            ],
            values: {
                rages: 5,
                rageDamage: 3
            }
        },
        {
            level: 16,
            proficiencyBonus: 5,
            features: [
                {
                    label: 'Ability Score Improvement',
                    sectionId: page.sections.abilityScoreImprovement.id
                }
            ],
            values: {
                rages: 5,
                rageDamage: 4
            }
        },
        {
            level: 17,
            proficiencyBonus: 6,
            features: [
                {
                    label: 'Brutal Critical (3 dice)',
                    sectionId: page.sections.brutalCritical.id
                }
            ],
            values: {
                rages: 6,
                rageDamage: 4
            }
        },
        {
            level: 18,
            proficiencyBonus: 6,
            features: [
                { label: 'Indomitable Might', sectionId: page.sections.indomitableMight.id }
            ],
            values: {
                rages: 6,
                rageDamage: 4
            }
        },
        {
            level: 19,
            proficiencyBonus: 6,
            features: [
                {
                    label: 'Ability Score Improvement',
                    sectionId: page.sections.abilityScoreImprovement.id
                }
            ],
            values: {
                rages: 6,
                rageDamage: 4
            }
        },
        {
            level: 20,
            proficiencyBonus: 6,
            features: [
                { label: 'Primal Champion', sectionId: page.sections.primalChampion.id }
            ],
            values: {
                rages: 'Unlimited',
                rageDamage: 4
            }
        }
    ]
} as const satisfies ProgressionData;

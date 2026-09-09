/*
	Location: src/lib/typescript/data/internals/classes/monk.ts
	Use: Central Monk class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';
import type { ProgressionData } from '$lib/typescript/pages/content-types';


export const progression: ProgressionData<string> = {
    "title": "Monk progression",
    "heading": "Monk Progression",
    "columns": [
        {
            "key": "level",
            "label": "Level",
            "format": "ordinal"
        },
        {
            "key": "proficiencyBonus",
            "label": "Prof.",
            "path": "internals.rules.abbreviations.pb",
            "format": "signed"
        },
        {
            "key": "features",
            "label": "Features"
        },
        {
            "key": "martialArts",
            "label": "Martial Arts"
        },
        {
            "key": "ki",
            "label": "Ki"
        },
        {
            "key": "movement",
            "label": "Movement"
        }
    ],
    "rows": [
        {
            "level": 1,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Unarmored Defense",
                    "sectionId": "unarmored-defense"
                },
                {
                    "label": "Martial Arts",
                    "sectionId": "martial-arts"
                }
            ],
            "values": {
                "martialArts": "1d4",
                "ki": "\u2014",
                "movement": "\u2014"
            }
        },
        {
            "level": 2,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Ki",
                    "sectionId": "ki"
                },
                {
                    "label": "Unarmored Movement",
                    "sectionId": "unarmored-movement"
                },
                {
                    "label": "Dedicated Weapon",
                    "sectionId": "dedicated-weapon",
                    "optional": true
                }
            ],
            "values": {
                "martialArts": "1d4",
                "ki": 2,
                "movement": "+10 ft."
            }
        },
        {
            "level": 3,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Monastic Tradition",
                    "sectionId": "monastic-tradition"
                },
                {
                    "label": "Deflect Missiles",
                    "sectionId": "deflect-missiles"
                },
                {
                    "label": "Ki-Fueled Attack",
                    "sectionId": "ki-fueled-attack",
                    "optional": true
                }
            ],
            "values": {
                "martialArts": "1d4",
                "ki": 3,
                "movement": "+10 ft."
            }
        },
        {
            "level": 4,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Ability Score Improvement",
                    "sectionId": "ability-score-improvement"
                },
                {
                    "label": "Slow Fall",
                    "sectionId": "slow-fall"
                },
                {
                    "label": "Quickened Healing",
                    "sectionId": "quickened-healing",
                    "optional": true
                }
            ],
            "values": {
                "martialArts": "1d4",
                "ki": 4,
                "movement": "+10 ft."
            }
        },
        {
            "level": 5,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Extra Attack",
                    "sectionId": "extra-attack"
                },
                {
                    "label": "Stunning Strike",
                    "sectionId": "stunning-strike"
                },
                {
                    "label": "Focused Aim",
                    "sectionId": "focused-aim",
                    "optional": true
                }
            ],
            "values": {
                "martialArts": "1d6",
                "ki": 5,
                "movement": "+10 ft."
            }
        },
        {
            "level": 6,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Ki-Empowered Strikes",
                    "sectionId": "ki-empowered-strikes"
                },
                {
                    "label": "Tradition feature",
                    "sectionId": "tradition-feature"
                }
            ],
            "values": {
                "martialArts": "1d6",
                "ki": 6,
                "movement": "+15 ft."
            }
        },
        {
            "level": 7,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Evasion",
                    "sectionId": "evasion"
                },
                {
                    "label": "Stillness of Mind",
                    "sectionId": "stillness-of-mind"
                }
            ],
            "values": {
                "martialArts": "1d6",
                "ki": 7,
                "movement": "+15 ft."
            }
        },
        {
            "level": 8,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Ability Score Improvement",
                    "sectionId": "ability-score-improvement"
                }
            ],
            "values": {
                "martialArts": "1d6",
                "ki": 8,
                "movement": "+15 ft."
            }
        },
        {
            "level": 9,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Unarmored Movement improvement",
                    "sectionId": "unarmored-movement-improvement"
                }
            ],
            "values": {
                "martialArts": "1d6",
                "ki": 9,
                "movement": "+15 ft."
            }
        },
        {
            "level": 10,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Purity of Body",
                    "sectionId": "purity-of-body"
                }
            ],
            "values": {
                "martialArts": "1d6",
                "ki": 10,
                "movement": "+20 ft."
            }
        },
        {
            "level": 11,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Tradition feature",
                    "sectionId": "tradition-feature"
                }
            ],
            "values": {
                "martialArts": "1d8",
                "ki": 11,
                "movement": "+20 ft."
            }
        },
        {
            "level": 12,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Ability Score Improvement",
                    "sectionId": "ability-score-improvement"
                }
            ],
            "values": {
                "martialArts": "1d8",
                "ki": 12,
                "movement": "+20 ft."
            }
        },
        {
            "level": 13,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Tongue of the Sun and Moon",
                    "sectionId": "tongue-of-the-sun-and-moon"
                }
            ],
            "values": {
                "martialArts": "1d8",
                "ki": 13,
                "movement": "+20 ft."
            }
        },
        {
            "level": 14,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Diamond Soul",
                    "sectionId": "diamond-soul"
                }
            ],
            "values": {
                "martialArts": "1d8",
                "ki": 14,
                "movement": "+25 ft."
            }
        },
        {
            "level": 15,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Timeless Body",
                    "sectionId": "timeless-body"
                }
            ],
            "values": {
                "martialArts": "1d8",
                "ki": 15,
                "movement": "+25 ft."
            }
        },
        {
            "level": 16,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Ability Score Improvement",
                    "sectionId": "ability-score-improvement"
                }
            ],
            "values": {
                "martialArts": "1d8",
                "ki": 16,
                "movement": "+25 ft."
            }
        },
        {
            "level": 17,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Tradition feature",
                    "sectionId": "tradition-feature"
                }
            ],
            "values": {
                "martialArts": "1d10",
                "ki": 17,
                "movement": "+25 ft."
            }
        },
        {
            "level": 18,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Empty Body",
                    "sectionId": "empty-body"
                }
            ],
            "values": {
                "martialArts": "1d10",
                "ki": 18,
                "movement": "+30 ft."
            }
        },
        {
            "level": 19,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Ability Score Improvement",
                    "sectionId": "ability-score-improvement"
                }
            ],
            "values": {
                "martialArts": "1d10",
                "ki": 19,
                "movement": "+30 ft."
            }
        },
        {
            "level": 20,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Perfect Self",
                    "sectionId": "perfect-self"
                }
            ],
            "values": {
                "martialArts": "1d10",
                "ki": 20,
                "movement": "+30 ft."
            }
        }
    ]
};

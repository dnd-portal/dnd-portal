/*
	Location: src/lib/typescript/data/internals/classes/fighter.ts
	Use: Central Fighter class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const progression = {
    "title": "Fighter progression",
    "heading": "Fighter Progression",
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
        }
    ],
    "rows": [
        {
            "level": 1,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Fighting Style",
                    "sectionId": "fighting-style"
                },
                {
                    "label": "Second Wind",
                    "sectionId": "second-wind"
                }
            ],
            "values": {}
        },
        {
            "level": 2,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Action Surge (1)",
                    "sectionId": "action-surge-1"
                }
            ],
            "values": {}
        },
        {
            "level": 3,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Martial Archetype",
                    "sectionId": "martial-archetype"
                }
            ],
            "values": {}
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
                    "label": "Martial Versatility",
                    "sectionId": "martial-versatility",
                    "optional": true
                }
            ],
            "values": {}
        },
        {
            "level": 5,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Extra Attack (2 attacks)",
                    "sectionId": "extra-attack-2-attacks"
                }
            ],
            "values": {}
        },
        {
            "level": 6,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Ability Score Improvement",
                    "sectionId": "ability-score-improvement"
                },
                {
                    "label": "Martial Versatility",
                    "sectionId": "martial-versatility",
                    "optional": true
                }
            ],
            "values": {}
        },
        {
            "level": 7,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Archetype feature",
                    "sectionId": "archetype-feature"
                }
            ],
            "values": {}
        },
        {
            "level": 8,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Ability Score Improvement",
                    "sectionId": "ability-score-improvement"
                },
                {
                    "label": "Martial Versatility",
                    "sectionId": "martial-versatility",
                    "optional": true
                }
            ],
            "values": {}
        },
        {
            "level": 9,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Indomitable (1)",
                    "sectionId": "indomitable-1"
                }
            ],
            "values": {}
        },
        {
            "level": 10,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Archetype feature",
                    "sectionId": "archetype-feature"
                }
            ],
            "values": {}
        },
        {
            "level": 11,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Extra Attack (3 attacks)",
                    "sectionId": "extra-attack-3-attacks"
                }
            ],
            "values": {}
        },
        {
            "level": 12,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Ability Score Improvement",
                    "sectionId": "ability-score-improvement"
                },
                {
                    "label": "Martial Versatility",
                    "sectionId": "martial-versatility",
                    "optional": true
                }
            ],
            "values": {}
        },
        {
            "level": 13,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Indomitable (2)",
                    "sectionId": "indomitable-2"
                }
            ],
            "values": {}
        },
        {
            "level": 14,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Ability Score Improvement",
                    "sectionId": "ability-score-improvement"
                },
                {
                    "label": "Martial Versatility",
                    "sectionId": "martial-versatility",
                    "optional": true
                }
            ],
            "values": {}
        },
        {
            "level": 15,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Archetype feature",
                    "sectionId": "archetype-feature"
                }
            ],
            "values": {}
        },
        {
            "level": 16,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Ability Score Improvement",
                    "sectionId": "ability-score-improvement"
                },
                {
                    "label": "Martial Versatility",
                    "sectionId": "martial-versatility",
                    "optional": true
                }
            ],
            "values": {}
        },
        {
            "level": 17,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Action Surge (2)",
                    "sectionId": "action-surge-2"
                },
                {
                    "label": "Indomitable (3)",
                    "sectionId": "indomitable-3"
                }
            ],
            "values": {}
        },
        {
            "level": 18,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Archetype feature",
                    "sectionId": "archetype-feature"
                }
            ],
            "values": {}
        },
        {
            "level": 19,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Ability Score Improvement",
                    "sectionId": "ability-score-improvement"
                },
                {
                    "label": "Martial Versatility",
                    "sectionId": "martial-versatility",
                    "optional": true
                }
            ],
            "values": {}
        },
        {
            "level": 20,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Extra Attack (4 attacks)",
                    "sectionId": "extra-attack-4-attacks"
                }
            ],
            "values": {}
        }
    ]
};

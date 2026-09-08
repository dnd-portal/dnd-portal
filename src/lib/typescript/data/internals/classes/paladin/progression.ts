/*
	Location: src/lib/typescript/data/internals/classes/paladin.ts
	Use: Central Paladin class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const progression = {
    "title": "Paladin progression",
    "heading": "Paladin Progression",
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
                    "label": "Divine Sense",
                    "sectionId": "divine-sense"
                },
                {
                    "label": "Lay on Hands",
                    "sectionId": "lay-on-hands"
                }
            ],
            "values": {}
        },
        {
            "level": 2,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Fighting Style",
                    "sectionId": "fighting-style"
                },
                {
                    "label": "Spellcasting",
                    "sectionId": "spellcasting"
                },
                {
                    "label": "Divine Smite",
                    "sectionId": "divine-smite"
                }
            ],
            "values": {}
        },
        {
            "level": 3,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Divine Health",
                    "sectionId": "divine-health"
                },
                {
                    "label": "Sacred Oath",
                    "sectionId": "sacred-oath"
                },
                {
                    "label": "Harness Divine Power",
                    "sectionId": "harness-divine-power",
                    "optional": true
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
                    "label": "Extra Attack",
                    "sectionId": "extra-attack"
                }
            ],
            "values": {}
        },
        {
            "level": 6,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Aura of Protection",
                    "sectionId": "aura-of-protection"
                }
            ],
            "values": {}
        },
        {
            "level": 7,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Oath feature",
                    "sectionId": "oath-feature"
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
                    "label": "\u2014",
                    "sectionId": ""
                }
            ],
            "values": {}
        },
        {
            "level": 10,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Aura of Courage",
                    "sectionId": "aura-of-courage"
                }
            ],
            "values": {}
        },
        {
            "level": 11,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Improved Divine Smite",
                    "sectionId": "improved-divine-smite"
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
                    "label": "\u2014",
                    "sectionId": ""
                }
            ],
            "values": {}
        },
        {
            "level": 14,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Cleansing Touch",
                    "sectionId": "cleansing-touch"
                }
            ],
            "values": {}
        },
        {
            "level": 15,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Oath feature",
                    "sectionId": "oath-feature"
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
                    "label": "\u2014",
                    "sectionId": ""
                }
            ],
            "values": {}
        },
        {
            "level": 18,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Aura improvements",
                    "sectionId": "aura-improvements"
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
                    "label": "Oath feature",
                    "sectionId": "oath-feature"
                }
            ],
            "values": {}
        }
    ]
};

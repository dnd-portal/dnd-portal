/*
	Location: src/lib/typescript/data/internals/classes/wizard.ts
	Use: Central Wizard class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';
import type { ProgressionData } from '$lib/typescript/pages/content-types';


export const progression: ProgressionData<string> = {
    "title": "Wizard progression",
    "heading": "Wizard Progression",
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
            "key": "cantrips",
            "label": "Cantrips"
        }
    ],
    "rows": [
        {
            "level": 1,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Spellcasting",
                    "sectionId": "spellcasting"
                },
                {
                    "label": "Arcane Recovery",
                    "sectionId": "arcane-recovery"
                }
            ],
            "values": {
                "cantrips": 3
            }
        },
        {
            "level": 2,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Arcane Tradition",
                    "sectionId": "arcane-tradition"
                }
            ],
            "values": {
                "cantrips": 3
            }
        },
        {
            "level": 3,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Cantrip Formulas",
                    "sectionId": "cantrip-formulas",
                    "optional": true
                }
            ],
            "values": {
                "cantrips": 3
            }
        },
        {
            "level": 4,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Ability Score Improvement",
                    "sectionId": "ability-score-improvement"
                }
            ],
            "values": {
                "cantrips": 4
            }
        },
        {
            "level": 5,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "\u2014",
                    "sectionId": ""
                }
            ],
            "values": {
                "cantrips": 4
            }
        },
        {
            "level": 6,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Tradition feature",
                    "sectionId": "tradition-feature"
                }
            ],
            "values": {
                "cantrips": 4
            }
        },
        {
            "level": 7,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "\u2014",
                    "sectionId": ""
                }
            ],
            "values": {
                "cantrips": 4
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
                "cantrips": 4
            }
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
            "values": {
                "cantrips": 4
            }
        },
        {
            "level": 10,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Tradition feature",
                    "sectionId": "tradition-feature"
                }
            ],
            "values": {
                "cantrips": 5
            }
        },
        {
            "level": 11,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "\u2014",
                    "sectionId": ""
                }
            ],
            "values": {
                "cantrips": 5
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
                "cantrips": 5
            }
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
            "values": {
                "cantrips": 5
            }
        },
        {
            "level": 14,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Tradition feature",
                    "sectionId": "tradition-feature"
                }
            ],
            "values": {
                "cantrips": 5
            }
        },
        {
            "level": 15,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "\u2014",
                    "sectionId": ""
                }
            ],
            "values": {
                "cantrips": 5
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
                "cantrips": 5
            }
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
            "values": {
                "cantrips": 5
            }
        },
        {
            "level": 18,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Spell Mastery",
                    "sectionId": "spell-mastery"
                }
            ],
            "values": {
                "cantrips": 5
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
                "cantrips": 5
            }
        },
        {
            "level": 20,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Signature Spells",
                    "sectionId": "signature-spells"
                }
            ],
            "values": {
                "cantrips": 5
            }
        }
    ]
};

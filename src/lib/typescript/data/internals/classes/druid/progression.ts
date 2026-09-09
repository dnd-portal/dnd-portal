/*
	Location: src/lib/typescript/data/internals/classes/druid.ts
	Use: Central Druid class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';
import type { ProgressionData } from '$lib/typescript/pages/content-types';


export const progression: ProgressionData<string> = {
    "title": "Druid progression",
    "heading": "Druid Progression",
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
                    "label": "Druidic",
                    "sectionId": "druidic"
                },
                {
                    "label": "Spellcasting",
                    "sectionId": "spellcasting"
                }
            ],
            "values": {
                "cantrips": 2
            }
        },
        {
            "level": 2,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Wild Shape",
                    "sectionId": "wild-shape"
                },
                {
                    "label": "Druid Circle",
                    "sectionId": "druid-circle"
                },
                {
                    "label": "Wild Companion",
                    "sectionId": "wild-companion",
                    "optional": true
                }
            ],
            "values": {
                "cantrips": 2
            }
        },
        {
            "level": 3,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "\u2014",
                    "sectionId": ""
                }
            ],
            "values": {
                "cantrips": 2
            }
        },
        {
            "level": 4,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Wild Shape improvement",
                    "sectionId": "wild-shape-improvement"
                },
                {
                    "label": "Ability Score Improvement",
                    "sectionId": "ability-score-improvement"
                },
                {
                    "label": "Cantrip Versatility",
                    "sectionId": "cantrip-versatility",
                    "optional": true
                }
            ],
            "values": {
                "cantrips": 3
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
                "cantrips": 3
            }
        },
        {
            "level": 6,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Circle feature",
                    "sectionId": "circle-feature"
                }
            ],
            "values": {
                "cantrips": 3
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
                "cantrips": 3
            }
        },
        {
            "level": 8,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Wild Shape improvement",
                    "sectionId": "wild-shape-improvement"
                },
                {
                    "label": "Ability Score Improvement",
                    "sectionId": "ability-score-improvement"
                },
                {
                    "label": "Cantrip Versatility",
                    "sectionId": "cantrip-versatility",
                    "optional": true
                }
            ],
            "values": {
                "cantrips": 3
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
                "cantrips": 3
            }
        },
        {
            "level": 10,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Circle feature",
                    "sectionId": "circle-feature"
                }
            ],
            "values": {
                "cantrips": 4
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
                "cantrips": 4
            }
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
                    "label": "Cantrip Versatility",
                    "sectionId": "cantrip-versatility",
                    "optional": true
                }
            ],
            "values": {
                "cantrips": 4
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
                "cantrips": 4
            }
        },
        {
            "level": 14,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Circle feature",
                    "sectionId": "circle-feature"
                }
            ],
            "values": {
                "cantrips": 4
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
                "cantrips": 4
            }
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
                    "label": "Cantrip Versatility",
                    "sectionId": "cantrip-versatility",
                    "optional": true
                }
            ],
            "values": {
                "cantrips": 4
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
                "cantrips": 4
            }
        },
        {
            "level": 18,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Timeless Body",
                    "sectionId": "timeless-body"
                },
                {
                    "label": "Beast Spells",
                    "sectionId": "beast-spells"
                }
            ],
            "values": {
                "cantrips": 4
            }
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
                    "label": "Cantrip Versatility",
                    "sectionId": "cantrip-versatility",
                    "optional": true
                }
            ],
            "values": {
                "cantrips": 4
            }
        },
        {
            "level": 20,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Archdruid",
                    "sectionId": "archdruid"
                }
            ],
            "values": {
                "cantrips": 4
            }
        }
    ]
};

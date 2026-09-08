/*
	Location: src/lib/typescript/data/internals/classes/artificer.ts
	Use: Central Artificer class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const progression = {
    "title": "Artificer progression",
    "heading": "Artificer Progression",
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
            "key": "infusionsKnown",
            "label": "Infusions Known"
        },
        {
            "key": "infusedItems",
            "label": "Infused Items"
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
                    "label": "Magical Tinkering",
                    "sectionId": "magical-tinkering"
                },
                {
                    "label": "Spellcasting",
                    "sectionId": "spellcasting"
                }
            ],
            "values": {
                "infusionsKnown": "-",
                "infusedItems": "-",
                "cantrips": 2
            }
        },
        {
            "level": 2,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Infuse Item",
                    "sectionId": "infuse-item"
                }
            ],
            "values": {
                "infusionsKnown": 4,
                "infusedItems": 2,
                "cantrips": 2
            }
        },
        {
            "level": 3,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Artificer Specialist",
                    "sectionId": "artificer-specialist"
                },
                {
                    "label": "The Right Tool for the Job",
                    "sectionId": "the-right-tool-for-the-job"
                }
            ],
            "values": {
                "infusionsKnown": 4,
                "infusedItems": 2,
                "cantrips": 2
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
                "infusionsKnown": 4,
                "infusedItems": 2,
                "cantrips": 2
            }
        },
        {
            "level": 5,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Specialist feature",
                    "sectionId": "specialist-feature"
                }
            ],
            "values": {
                "infusionsKnown": 4,
                "infusedItems": 2,
                "cantrips": 2
            }
        },
        {
            "level": 6,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Tool Expertise",
                    "sectionId": "tool-expertise"
                }
            ],
            "values": {
                "infusionsKnown": 6,
                "infusedItems": 3,
                "cantrips": 2
            }
        },
        {
            "level": 7,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Flash of Genius",
                    "sectionId": "flash-of-genius"
                }
            ],
            "values": {
                "infusionsKnown": 6,
                "infusedItems": 3,
                "cantrips": 2
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
                "infusionsKnown": 6,
                "infusedItems": 3,
                "cantrips": 2
            }
        },
        {
            "level": 9,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Specialist feature",
                    "sectionId": "specialist-feature"
                }
            ],
            "values": {
                "infusionsKnown": 6,
                "infusedItems": 3,
                "cantrips": 2
            }
        },
        {
            "level": 10,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Magic Item Adept",
                    "sectionId": "magic-item-adept"
                }
            ],
            "values": {
                "infusionsKnown": 8,
                "infusedItems": 4,
                "cantrips": 3
            }
        },
        {
            "level": 11,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Spell-Storing Item",
                    "sectionId": "spell-storing-item"
                }
            ],
            "values": {
                "infusionsKnown": 8,
                "infusedItems": 4,
                "cantrips": 3
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
                "infusionsKnown": 8,
                "infusedItems": 4,
                "cantrips": 3
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
                "infusionsKnown": 8,
                "infusedItems": 4,
                "cantrips": 3
            }
        },
        {
            "level": 14,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Magic Item Savant",
                    "sectionId": "magic-item-savant"
                }
            ],
            "values": {
                "infusionsKnown": 10,
                "infusedItems": 5,
                "cantrips": 4
            }
        },
        {
            "level": 15,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Specialist feature",
                    "sectionId": "specialist-feature"
                }
            ],
            "values": {
                "infusionsKnown": 10,
                "infusedItems": 5,
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
                }
            ],
            "values": {
                "infusionsKnown": 10,
                "infusedItems": 5,
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
                "infusionsKnown": 10,
                "infusedItems": 5,
                "cantrips": 4
            }
        },
        {
            "level": 18,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Magic Item Master",
                    "sectionId": "magic-item-master"
                }
            ],
            "values": {
                "infusionsKnown": 12,
                "infusedItems": 6,
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
                }
            ],
            "values": {
                "infusionsKnown": 12,
                "infusedItems": 6,
                "cantrips": 4
            }
        },
        {
            "level": 20,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Soul of Artifice",
                    "sectionId": "soul-of-artifice"
                }
            ],
            "values": {
                "infusionsKnown": 12,
                "infusedItems": 6,
                "cantrips": 4
            }
        }
    ]
};

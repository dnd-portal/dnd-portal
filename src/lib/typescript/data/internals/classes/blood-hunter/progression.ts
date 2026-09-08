/*
	Location: src/lib/typescript/data/internals/classes/blood-hunter.ts
	Use: Central Blood Hunter class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const progression = {
    "title": "Blood Hunter progression",
    "heading": "Blood Hunter Progression",
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
            "key": "hemocraftDie",
            "label": "Hemocraft Die"
        },
        {
            "key": "cursesKnown",
            "label": "Curses Known"
        }
    ],
    "rows": [
        {
            "level": 1,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Hunter\u2019s Bane",
                    "sectionId": "hunter-s-bane"
                },
                {
                    "label": "Blood Maledict",
                    "sectionId": "blood-maledict"
                }
            ],
            "values": {
                "hemocraftDie": "1d4",
                "cursesKnown": 1
            }
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
                    "label": "Crimson Rite",
                    "sectionId": "crimson-rite"
                }
            ],
            "values": {
                "hemocraftDie": "1d4",
                "cursesKnown": 1
            }
        },
        {
            "level": 3,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Blood Hunter Order",
                    "sectionId": "blood-hunter-order"
                }
            ],
            "values": {
                "hemocraftDie": "1d4",
                "cursesKnown": 1
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
                "hemocraftDie": "1d4",
                "cursesKnown": 1
            }
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
            "values": {
                "hemocraftDie": "1d6",
                "cursesKnown": 1
            }
        },
        {
            "level": 6,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Brand of Castigation",
                    "sectionId": "brand-of-castigation"
                },
                {
                    "label": "Blood Maledict (2/rest)",
                    "sectionId": "blood-maledict-2-rest"
                }
            ],
            "values": {
                "hemocraftDie": "1d6",
                "cursesKnown": 2
            }
        },
        {
            "level": 7,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Order feature",
                    "sectionId": "order-feature"
                },
                {
                    "label": "Crimson Rite improvement",
                    "sectionId": "crimson-rite-improvement"
                }
            ],
            "values": {
                "hemocraftDie": "1d6",
                "cursesKnown": 2
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
                "hemocraftDie": "1d6",
                "cursesKnown": 2
            }
        },
        {
            "level": 9,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Grim Psychometry",
                    "sectionId": "grim-psychometry"
                }
            ],
            "values": {
                "hemocraftDie": "1d6",
                "cursesKnown": 2
            }
        },
        {
            "level": 10,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Dark Augmentation",
                    "sectionId": "dark-augmentation"
                }
            ],
            "values": {
                "hemocraftDie": "1d6",
                "cursesKnown": 3
            }
        },
        {
            "level": 11,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Order feature",
                    "sectionId": "order-feature"
                }
            ],
            "values": {
                "hemocraftDie": "1d8",
                "cursesKnown": 3
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
                "hemocraftDie": "1d8",
                "cursesKnown": 3
            }
        },
        {
            "level": 13,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Brand of Tethering",
                    "sectionId": "brand-of-tethering"
                },
                {
                    "label": "Blood Maledict (3/rest)",
                    "sectionId": "blood-maledict-3-rest"
                }
            ],
            "values": {
                "hemocraftDie": "1d8",
                "cursesKnown": 3
            }
        },
        {
            "level": 14,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Hardened Soul",
                    "sectionId": "hardened-soul"
                },
                {
                    "label": "Crimson Rite improvement",
                    "sectionId": "crimson-rite-improvement"
                }
            ],
            "values": {
                "hemocraftDie": "1d8",
                "cursesKnown": 4
            }
        },
        {
            "level": 15,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Order feature",
                    "sectionId": "order-feature"
                }
            ],
            "values": {
                "hemocraftDie": "1d8",
                "cursesKnown": 4
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
                "hemocraftDie": "1d8",
                "cursesKnown": 4
            }
        },
        {
            "level": 17,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Blood Maledict (4/rest)",
                    "sectionId": "blood-maledict-4-rest"
                }
            ],
            "values": {
                "hemocraftDie": "1d10",
                "cursesKnown": 4
            }
        },
        {
            "level": 18,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Order feature",
                    "sectionId": "order-feature"
                }
            ],
            "values": {
                "hemocraftDie": "1d10",
                "cursesKnown": 5
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
                "hemocraftDie": "1d10",
                "cursesKnown": 5
            }
        },
        {
            "level": 20,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Sanguine Mastery",
                    "sectionId": "sanguine-mastery"
                }
            ],
            "values": {
                "hemocraftDie": "1d10",
                "cursesKnown": 5
            }
        }
    ]
};

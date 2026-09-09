/*
	Location: src/lib/typescript/data/internals/classes/ranger.ts
	Use: Central Ranger class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';
import type { ProgressionData } from '$lib/typescript/pages/content-types';


export const progression: ProgressionData<string> = {
    "title": "Ranger progression",
    "heading": "Ranger Progression",
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
            "key": "spellsKnown",
            "label": "Spells Known"
        }
    ],
    "rows": [
        {
            "level": 1,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Favored Enemy",
                    "sectionId": "favored-enemy"
                },
                {
                    "label": "Natural Explorer",
                    "sectionId": "natural-explorer"
                },
                {
                    "label": "Deft Explorer",
                    "sectionId": "deft-explorer",
                    "optional": true
                },
                {
                    "label": "Favored Foe",
                    "sectionId": "favored-foe",
                    "optional": true
                }
            ],
            "values": {
                "spellsKnown": "\u2014"
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
                    "label": "Spellcasting",
                    "sectionId": "spellcasting"
                },
                {
                    "label": "Spellcasting Focus",
                    "sectionId": "spellcasting-focus",
                    "optional": true
                }
            ],
            "values": {
                "spellsKnown": 2
            }
        },
        {
            "level": 3,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Primeval Awareness",
                    "sectionId": "primeval-awareness"
                },
                {
                    "label": "Ranger Conclave",
                    "sectionId": "ranger-conclave"
                },
                {
                    "label": "Primal Awareness",
                    "sectionId": "primal-awareness",
                    "optional": true
                }
            ],
            "values": {
                "spellsKnown": 3
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
                    "label": "Martial Versatility",
                    "sectionId": "martial-versatility",
                    "optional": true
                }
            ],
            "values": {
                "spellsKnown": 3
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
                "spellsKnown": 4
            }
        },
        {
            "level": 6,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Favored Enemy improvement",
                    "sectionId": "favored-enemy-improvement"
                },
                {
                    "label": "Natural Explorer improvement",
                    "sectionId": "natural-explorer-improvement"
                },
                {
                    "label": "Deft Explorer improvement",
                    "sectionId": "deft-explorer-improvement",
                    "optional": true
                }
            ],
            "values": {
                "spellsKnown": 4
            }
        },
        {
            "level": 7,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Conclave feature",
                    "sectionId": "conclave-feature"
                }
            ],
            "values": {
                "spellsKnown": 5
            }
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
                    "label": "Land\u2019s Stride",
                    "sectionId": "land-s-stride"
                },
                {
                    "label": "Martial Versatility",
                    "sectionId": "martial-versatility",
                    "optional": true
                }
            ],
            "values": {
                "spellsKnown": 5
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
                "spellsKnown": 6
            }
        },
        {
            "level": 10,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Natural Explorer improvement",
                    "sectionId": "natural-explorer-improvement"
                },
                {
                    "label": "Hide in Plain Sight",
                    "sectionId": "hide-in-plain-sight"
                },
                {
                    "label": "Deft Explorer feature",
                    "sectionId": "deft-explorer-feature",
                    "optional": true
                },
                {
                    "label": "Nature\u2019s Veil",
                    "sectionId": "nature-s-veil",
                    "optional": true
                }
            ],
            "values": {
                "spellsKnown": 6
            }
        },
        {
            "level": 11,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Conclave feature",
                    "sectionId": "conclave-feature"
                }
            ],
            "values": {
                "spellsKnown": 7
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
                    "label": "Martial Versatility",
                    "sectionId": "martial-versatility",
                    "optional": true
                }
            ],
            "values": {
                "spellsKnown": 7
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
                "spellsKnown": 8
            }
        },
        {
            "level": 14,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Favored Enemy improvement",
                    "sectionId": "favored-enemy-improvement"
                },
                {
                    "label": "Vanish",
                    "sectionId": "vanish"
                }
            ],
            "values": {
                "spellsKnown": 8
            }
        },
        {
            "level": 15,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Conclave feature",
                    "sectionId": "conclave-feature"
                }
            ],
            "values": {
                "spellsKnown": 9
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
                    "label": "Martial Versatility",
                    "sectionId": "martial-versatility",
                    "optional": true
                }
            ],
            "values": {
                "spellsKnown": 9
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
                "spellsKnown": 10
            }
        },
        {
            "level": 18,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Feral Senses",
                    "sectionId": "feral-senses"
                }
            ],
            "values": {
                "spellsKnown": 10
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
                    "label": "Martial Versatility",
                    "sectionId": "martial-versatility",
                    "optional": true
                }
            ],
            "values": {
                "spellsKnown": 11
            }
        },
        {
            "level": 20,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Foe Slayer",
                    "sectionId": "foe-slayer"
                }
            ],
            "values": {
                "spellsKnown": 11
            }
        }
    ]
};

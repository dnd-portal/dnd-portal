/*
	Location: src/lib/typescript/data/internals/classes/sorcerer.ts
	Use: Central Sorcerer class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const progression = {
    "title": "Sorcerer progression",
    "heading": "Sorcerer Progression",
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
            "key": "sorceryPoints",
            "label": "Sorcery Points"
        },
        {
            "key": "cantrips",
            "label": "Cantrips"
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
                    "label": "Spellcasting",
                    "sectionId": "spellcasting"
                },
                {
                    "label": "Sorcerous Origin",
                    "sectionId": "sorcerous-origin"
                }
            ],
            "values": {
                "sorceryPoints": "\u2014",
                "cantrips": 4,
                "spellsKnown": 2
            }
        },
        {
            "level": 2,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Font of Magic",
                    "sectionId": "font-of-magic"
                }
            ],
            "values": {
                "sorceryPoints": 2,
                "cantrips": 4,
                "spellsKnown": 3
            }
        },
        {
            "level": 3,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Metamagic",
                    "sectionId": "metamagic"
                }
            ],
            "values": {
                "sorceryPoints": 3,
                "cantrips": 4,
                "spellsKnown": 4
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
                    "label": "Sorcerous Versatility",
                    "sectionId": "sorcerous-versatility",
                    "optional": true
                }
            ],
            "values": {
                "sorceryPoints": 4,
                "cantrips": 5,
                "spellsKnown": 5
            }
        },
        {
            "level": 5,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Magical Guidance",
                    "sectionId": "magical-guidance",
                    "optional": true
                }
            ],
            "values": {
                "sorceryPoints": 5,
                "cantrips": 5,
                "spellsKnown": 6
            }
        },
        {
            "level": 6,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Origin feature",
                    "sectionId": "origin-feature"
                }
            ],
            "values": {
                "sorceryPoints": 6,
                "cantrips": 5,
                "spellsKnown": 7
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
                "sorceryPoints": 7,
                "cantrips": 5,
                "spellsKnown": 8
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
                    "label": "Sorcerous Versatility",
                    "sectionId": "sorcerous-versatility",
                    "optional": true
                }
            ],
            "values": {
                "sorceryPoints": 8,
                "cantrips": 5,
                "spellsKnown": 9
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
                "sorceryPoints": 9,
                "cantrips": 5,
                "spellsKnown": 10
            }
        },
        {
            "level": 10,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Metamagic",
                    "sectionId": "metamagic"
                }
            ],
            "values": {
                "sorceryPoints": 10,
                "cantrips": 6,
                "spellsKnown": 11
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
                "sorceryPoints": 11,
                "cantrips": 6,
                "spellsKnown": 12
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
                    "label": "Sorcerous Versatility",
                    "sectionId": "sorcerous-versatility",
                    "optional": true
                }
            ],
            "values": {
                "sorceryPoints": 12,
                "cantrips": 6,
                "spellsKnown": 12
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
                "sorceryPoints": 13,
                "cantrips": 6,
                "spellsKnown": 13
            }
        },
        {
            "level": 14,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Origin feature",
                    "sectionId": "origin-feature"
                }
            ],
            "values": {
                "sorceryPoints": 14,
                "cantrips": 6,
                "spellsKnown": 13
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
                "sorceryPoints": 15,
                "cantrips": 6,
                "spellsKnown": 14
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
                    "label": "Sorcerous Versatility",
                    "sectionId": "sorcerous-versatility",
                    "optional": true
                }
            ],
            "values": {
                "sorceryPoints": 16,
                "cantrips": 6,
                "spellsKnown": 14
            }
        },
        {
            "level": 17,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Metamagic",
                    "sectionId": "metamagic"
                }
            ],
            "values": {
                "sorceryPoints": 17,
                "cantrips": 6,
                "spellsKnown": 15
            }
        },
        {
            "level": 18,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Origin feature",
                    "sectionId": "origin-feature"
                }
            ],
            "values": {
                "sorceryPoints": 18,
                "cantrips": 6,
                "spellsKnown": 15
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
                    "label": "Sorcerous Versatility",
                    "sectionId": "sorcerous-versatility",
                    "optional": true
                }
            ],
            "values": {
                "sorceryPoints": 19,
                "cantrips": 6,
                "spellsKnown": 15
            }
        },
        {
            "level": 20,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Sorcerous Restoration",
                    "sectionId": "sorcerous-restoration"
                }
            ],
            "values": {
                "sorceryPoints": 20,
                "cantrips": 6,
                "spellsKnown": 15
            }
        }
    ]
};

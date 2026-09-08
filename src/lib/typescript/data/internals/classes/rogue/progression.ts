/*
	Location: src/lib/typescript/data/internals/classes/rogue.ts
	Use: Central Rogue class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const progression = {
    "title": "Rogue progression",
    "heading": "Rogue Progression",
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
            "key": "sneakAttack",
            "label": "Sneak Attack"
        }
    ],
    "rows": [
        {
            "level": 1,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Expertise",
                    "sectionId": "expertise"
                },
                {
                    "label": "Sneak Attack",
                    "sectionId": "sneak-attack"
                },
                {
                    "label": "Thieves\u2019 Cant",
                    "sectionId": "thieves-cant"
                }
            ],
            "values": {
                "sneakAttack": "1d6"
            }
        },
        {
            "level": 2,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Cunning Action",
                    "sectionId": "cunning-action"
                }
            ],
            "values": {
                "sneakAttack": "1d6"
            }
        },
        {
            "level": 3,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Roguish Archetype",
                    "sectionId": "roguish-archetype"
                },
                {
                    "label": "Steady Aim",
                    "sectionId": "steady-aim",
                    "optional": true
                }
            ],
            "values": {
                "sneakAttack": "2d6"
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
                "sneakAttack": "2d6"
            }
        },
        {
            "level": 5,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Uncanny Dodge",
                    "sectionId": "uncanny-dodge"
                }
            ],
            "values": {
                "sneakAttack": "3d6"
            }
        },
        {
            "level": 6,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Expertise",
                    "sectionId": "expertise"
                }
            ],
            "values": {
                "sneakAttack": "3d6"
            }
        },
        {
            "level": 7,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Evasion",
                    "sectionId": "evasion"
                }
            ],
            "values": {
                "sneakAttack": "4d6"
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
                "sneakAttack": "4d6"
            }
        },
        {
            "level": 9,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Archetype feature",
                    "sectionId": "roguish-archetype"
                }
            ],
            "values": {
                "sneakAttack": "5d6"
            }
        },
        {
            "level": 10,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Ability Score Improvement",
                    "sectionId": "ability-score-improvement"
                }
            ],
            "values": {
                "sneakAttack": "5d6"
            }
        },
        {
            "level": 11,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Reliable Talent",
                    "sectionId": "reliable-talent"
                }
            ],
            "values": {
                "sneakAttack": "6d6"
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
                "sneakAttack": "6d6"
            }
        },
        {
            "level": 13,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Archetype feature",
                    "sectionId": "roguish-archetype"
                }
            ],
            "values": {
                "sneakAttack": "7d6"
            }
        },
        {
            "level": 14,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Blindsense",
                    "sectionId": "blindsense"
                }
            ],
            "values": {
                "sneakAttack": "7d6"
            }
        },
        {
            "level": 15,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Slippery Mind",
                    "sectionId": "slippery-mind"
                }
            ],
            "values": {
                "sneakAttack": "8d6"
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
                "sneakAttack": "8d6"
            }
        },
        {
            "level": 17,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Archetype feature",
                    "sectionId": "roguish-archetype"
                }
            ],
            "values": {
                "sneakAttack": "9d6"
            }
        },
        {
            "level": 18,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Elusive",
                    "sectionId": "elusive"
                }
            ],
            "values": {
                "sneakAttack": "9d6"
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
                "sneakAttack": "10d6"
            }
        },
        {
            "level": 20,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Stroke of Luck",
                    "sectionId": "stroke-of-luck"
                }
            ],
            "values": {
                "sneakAttack": "10d6"
            }
        }
    ]
};

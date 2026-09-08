/*
	Location: src/lib/typescript/data/internals/classes/cleric.ts
	Use: Central Cleric class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const progression = {
    "title": "Cleric progression",
    "heading": "Cleric Progression",
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
                    "label": "Divine Domain",
                    "sectionId": "divine-domain"
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
                    "label": "Channel Divinity (1)",
                    "sectionId": "channel-divinity-1"
                },
                {
                    "label": "Domain feature",
                    "sectionId": "domain-feature"
                },
                {
                    "label": "Harness Divine Power",
                    "sectionId": "harness-divine-power",
                    "optional": true
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
                    "label": "\u2014",
                    "sectionId": ""
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
            "level": 5,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Destroy Undead (CR 1/2)",
                    "sectionId": "destroy-undead-cr-1-2"
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
                    "label": "Channel Divinity (2)",
                    "sectionId": "channel-divinity-2"
                },
                {
                    "label": "Domain feature",
                    "sectionId": "domain-feature"
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
                },
                {
                    "label": "Destroy Undead (CR 1)",
                    "sectionId": "destroy-undead-cr-1"
                },
                {
                    "label": "Domain feature",
                    "sectionId": "domain-feature"
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
                    "label": "Divine Intervention",
                    "sectionId": "divine-intervention"
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
                    "label": "Destroy Undead (CR 2)",
                    "sectionId": "destroy-undead-cr-2"
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
                },
                {
                    "label": "Cantrip Versatility",
                    "sectionId": "cantrip-versatility",
                    "optional": true
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
                    "label": "Destroy Undead (CR 3)",
                    "sectionId": "destroy-undead-cr-3"
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
                },
                {
                    "label": "Cantrip Versatility",
                    "sectionId": "cantrip-versatility",
                    "optional": true
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
                    "label": "Destroy Undead (CR 4)",
                    "sectionId": "destroy-undead-cr-4"
                },
                {
                    "label": "Domain feature",
                    "sectionId": "domain-feature"
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
                    "label": "Channel Divinity (3)",
                    "sectionId": "channel-divinity-3"
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
                },
                {
                    "label": "Cantrip Versatility",
                    "sectionId": "cantrip-versatility",
                    "optional": true
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
                    "label": "Divine Intervention improvement",
                    "sectionId": "divine-intervention-improvement"
                }
            ],
            "values": {
                "cantrips": 5
            }
        }
    ]
};

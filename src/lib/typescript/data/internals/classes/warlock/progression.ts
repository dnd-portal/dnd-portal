/*
	Location: src/lib/typescript/data/internals/classes/warlock.ts
	Use: Central Warlock class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';
import type { ProgressionData } from '$lib/typescript/pages/content-types';


export const progression: ProgressionData<string> = {
    "title": "Warlock progression",
    "heading": "Warlock Progression",
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
        },
        {
            "key": "spells",
            "label": "Spells"
        },
        {
            "key": "slots",
            "label": "Slots"
        },
        {
            "key": "slotLevel",
            "label": "Slot Level"
        },
        {
            "key": "invocations",
            "label": "Invocations"
        }
    ],
    "rows": [
        {
            "level": 1,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Otherworldly Patron",
                    "sectionId": "otherworldly-patron"
                },
                {
                    "label": "Pact Magic",
                    "sectionId": "pact-magic"
                }
            ],
            "values": {
                "cantrips": 2,
                "spells": 2,
                "slots": 1,
                "slotLevel": "1st",
                "invocations": "\u2014"
            }
        },
        {
            "level": 2,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Eldritch Invocations",
                    "sectionId": "eldritch-invocations"
                }
            ],
            "values": {
                "cantrips": 2,
                "spells": 3,
                "slots": 2,
                "slotLevel": "1st",
                "invocations": 2
            }
        },
        {
            "level": 3,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Pact Boon",
                    "sectionId": "pact-boon"
                }
            ],
            "values": {
                "cantrips": 2,
                "spells": 4,
                "slots": 2,
                "slotLevel": "2nd",
                "invocations": 2
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
                    "label": "Eldritch Versatility",
                    "sectionId": "eldritch-versatility",
                    "optional": true
                }
            ],
            "values": {
                "cantrips": 3,
                "spells": 5,
                "slots": 2,
                "slotLevel": "2nd",
                "invocations": 2
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
                "cantrips": 3,
                "spells": 6,
                "slots": 2,
                "slotLevel": "3rd",
                "invocations": 3
            }
        },
        {
            "level": 6,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Patron feature",
                    "sectionId": "patron-feature"
                }
            ],
            "values": {
                "cantrips": 3,
                "spells": 7,
                "slots": 2,
                "slotLevel": "3rd",
                "invocations": 3
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
                "cantrips": 3,
                "spells": 8,
                "slots": 2,
                "slotLevel": "4th",
                "invocations": 4
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
                    "label": "Eldritch Versatility",
                    "sectionId": "eldritch-versatility",
                    "optional": true
                }
            ],
            "values": {
                "cantrips": 3,
                "spells": 9,
                "slots": 2,
                "slotLevel": "4th",
                "invocations": 4
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
                "cantrips": 3,
                "spells": 10,
                "slots": 2,
                "slotLevel": "5th",
                "invocations": 5
            }
        },
        {
            "level": 10,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Patron feature",
                    "sectionId": "patron-feature"
                }
            ],
            "values": {
                "cantrips": 4,
                "spells": 10,
                "slots": 2,
                "slotLevel": "5th",
                "invocations": 5
            }
        },
        {
            "level": 11,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Mystic Arcanum (6th)",
                    "sectionId": "mystic-arcanum-6th"
                }
            ],
            "values": {
                "cantrips": 4,
                "spells": 11,
                "slots": 3,
                "slotLevel": "5th",
                "invocations": 5
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
                    "label": "Eldritch Versatility",
                    "sectionId": "eldritch-versatility",
                    "optional": true
                }
            ],
            "values": {
                "cantrips": 4,
                "spells": 11,
                "slots": 3,
                "slotLevel": "5th",
                "invocations": 6
            }
        },
        {
            "level": 13,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Mystic Arcanum (7th)",
                    "sectionId": "mystic-arcanum-7th"
                }
            ],
            "values": {
                "cantrips": 4,
                "spells": 12,
                "slots": 3,
                "slotLevel": "5th",
                "invocations": 6
            }
        },
        {
            "level": 14,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Patron feature",
                    "sectionId": "patron-feature"
                }
            ],
            "values": {
                "cantrips": 4,
                "spells": 12,
                "slots": 3,
                "slotLevel": "5th",
                "invocations": 6
            }
        },
        {
            "level": 15,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Mystic Arcanum (8th)",
                    "sectionId": "mystic-arcanum-8th"
                }
            ],
            "values": {
                "cantrips": 4,
                "spells": 13,
                "slots": 3,
                "slotLevel": "5th",
                "invocations": 7
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
                    "label": "Eldritch Versatility",
                    "sectionId": "eldritch-versatility",
                    "optional": true
                }
            ],
            "values": {
                "cantrips": 4,
                "spells": 13,
                "slots": 3,
                "slotLevel": "5th",
                "invocations": 7
            }
        },
        {
            "level": 17,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Mystic Arcanum (9th)",
                    "sectionId": "mystic-arcanum-9th"
                }
            ],
            "values": {
                "cantrips": 4,
                "spells": 14,
                "slots": 4,
                "slotLevel": "5th",
                "invocations": 7
            }
        },
        {
            "level": 18,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "\u2014",
                    "sectionId": ""
                }
            ],
            "values": {
                "cantrips": 4,
                "spells": 14,
                "slots": 4,
                "slotLevel": "5th",
                "invocations": 8
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
                    "label": "Eldritch Versatility",
                    "sectionId": "eldritch-versatility",
                    "optional": true
                }
            ],
            "values": {
                "cantrips": 4,
                "spells": 15,
                "slots": 4,
                "slotLevel": "5th",
                "invocations": 8
            }
        },
        {
            "level": 20,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Eldritch Master",
                    "sectionId": "eldritch-master"
                }
            ],
            "values": {
                "cantrips": 4,
                "spells": 15,
                "slots": 4,
                "slotLevel": "5th",
                "invocations": 8
            }
        }
    ]
};

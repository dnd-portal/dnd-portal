import { content } from './page';

export const progression = {
    "title": "Bard progression",
    "heading": "Bard Progression",
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
            "key": "inspirationDie",
            "label": "Inspiration Die"
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
                    "label": "Bardic Inspiration (d6)",
                    "sectionId": "bardic-inspiration-d6"
                }
            ],
            "values": {
                "inspirationDie": "d6",
                "cantrips": 2,
                "spellsKnown": 4
            }
        },
        {
            "level": 2,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Jack of All Trades",
                    "sectionId": "jack-of-all-trades"
                },
                {
                    "label": "Song of Rest (d6)",
                    "sectionId": "song-of-rest-d6"
                },
                {
                    "label": "Magical Inspiration",
                    "sectionId": "magical-inspiration",
                    "optional": true
                }
            ],
            "values": {
                "inspirationDie": "d6",
                "cantrips": 2,
                "spellsKnown": 5
            }
        },
        {
            "level": 3,
            "proficiencyBonus": 2,
            "features": [
                {
                    "label": "Bard College",
                    "sectionId": "bard-college"
                },
                {
                    "label": "Expertise",
                    "sectionId": "expertise"
                }
            ],
            "values": {
                "inspirationDie": "d6",
                "cantrips": 2,
                "spellsKnown": 6
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
                    "label": "Bardic Versatility",
                    "sectionId": "bardic-versatility",
                    "optional": true
                }
            ],
            "values": {
                "inspirationDie": "d6",
                "cantrips": 3,
                "spellsKnown": 7
            }
        },
        {
            "level": 5,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Bardic Inspiration (d8)",
                    "sectionId": "bardic-inspiration-d8"
                },
                {
                    "label": "Font of Inspiration",
                    "sectionId": "font-of-inspiration"
                }
            ],
            "values": {
                "inspirationDie": "d8",
                "cantrips": 3,
                "spellsKnown": 8
            }
        },
        {
            "level": 6,
            "proficiencyBonus": 3,
            "features": [
                {
                    "label": "Countercharm",
                    "sectionId": "countercharm"
                },
                {
                    "label": "College feature",
                    "sectionId": "college-feature"
                }
            ],
            "values": {
                "inspirationDie": "d8",
                "cantrips": 3,
                "spellsKnown": 9
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
                "inspirationDie": "d8",
                "cantrips": 3,
                "spellsKnown": 10
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
                    "label": "Bardic Versatility",
                    "sectionId": "bardic-versatility",
                    "optional": true
                }
            ],
            "values": {
                "inspirationDie": "d8",
                "cantrips": 3,
                "spellsKnown": 11
            }
        },
        {
            "level": 9,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Song of Rest (d8)",
                    "sectionId": "song-of-rest-d8"
                }
            ],
            "values": {
                "inspirationDie": "d8",
                "cantrips": 3,
                "spellsKnown": 12
            }
        },
        {
            "level": 10,
            "proficiencyBonus": 4,
            "features": [
                {
                    "label": "Bardic Inspiration (d10)",
                    "sectionId": "bardic-inspiration-d10"
                },
                {
                    "label": "Expertise",
                    "sectionId": "expertise"
                },
                {
                    "label": "Magical Secrets",
                    "sectionId": "magical-secrets"
                }
            ],
            "values": {
                "inspirationDie": "d10",
                "cantrips": 4,
                "spellsKnown": 14
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
                "inspirationDie": "d10",
                "cantrips": 4,
                "spellsKnown": 15
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
                    "label": "Bardic Versatility",
                    "sectionId": "bardic-versatility",
                    "optional": true
                }
            ],
            "values": {
                "inspirationDie": "d10",
                "cantrips": 4,
                "spellsKnown": 15
            }
        },
        {
            "level": 13,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Song of Rest (d10)",
                    "sectionId": "song-of-rest-d10"
                }
            ],
            "values": {
                "inspirationDie": "d10",
                "cantrips": 4,
                "spellsKnown": 16
            }
        },
        {
            "level": 14,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Magical Secrets",
                    "sectionId": "magical-secrets"
                },
                {
                    "label": "College feature",
                    "sectionId": "college-feature"
                }
            ],
            "values": {
                "inspirationDie": "d10",
                "cantrips": 4,
                "spellsKnown": 18
            }
        },
        {
            "level": 15,
            "proficiencyBonus": 5,
            "features": [
                {
                    "label": "Bardic Inspiration (d12)",
                    "sectionId": "bardic-inspiration-d12"
                }
            ],
            "values": {
                "inspirationDie": "d12",
                "cantrips": 4,
                "spellsKnown": 19
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
                    "label": "Bardic Versatility",
                    "sectionId": "bardic-versatility",
                    "optional": true
                }
            ],
            "values": {
                "inspirationDie": "d12",
                "cantrips": 4,
                "spellsKnown": 19
            }
        },
        {
            "level": 17,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Song of Rest (d12)",
                    "sectionId": "song-of-rest-d12"
                }
            ],
            "values": {
                "inspirationDie": "d12",
                "cantrips": 4,
                "spellsKnown": 20
            }
        },
        {
            "level": 18,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Magical Secrets",
                    "sectionId": "magical-secrets"
                }
            ],
            "values": {
                "inspirationDie": "d12",
                "cantrips": 4,
                "spellsKnown": 22
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
                    "label": "Bardic Versatility",
                    "sectionId": "bardic-versatility",
                    "optional": true
                }
            ],
            "values": {
                "inspirationDie": "d12",
                "cantrips": 4,
                "spellsKnown": 22
            }
        },
        {
            "level": 20,
            "proficiencyBonus": 6,
            "features": [
                {
                    "label": "Superior Inspiration",
                    "sectionId": "superior-inspiration"
                }
            ],
            "values": {
                "inspirationDie": "d12",
                "cantrips": 4,
                "spellsKnown": 22
            }
        }
    ]
};

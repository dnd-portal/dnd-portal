/*
	Location: src/lib/typescript/data/internals/classes/blood-hunter.ts
	Use: Central Blood Hunter class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/blood-hunter",
    "img": {
        "href": "/icons/white/game/character.svg",
        "alt": "A stylized Blood Hunter class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Blood Hunter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/blood-hunter/card-female-s.webp",
                    "m": "/images/classes/blood-hunter/card-female-m.webp",
                    "l": "/images/classes/blood-hunter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Blood Hunter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/blood-hunter/card-male-s.webp",
                    "m": "/images/classes/blood-hunter/card-male-m.webp",
                    "l": "/images/classes/blood-hunter/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Blood Hunter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/blood-hunter/card-female-s.webp",
                    "m": "/images/classes/blood-hunter/card-female-m.webp",
                    "l": "/images/classes/blood-hunter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Blood Hunter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/blood-hunter/card-male-s.webp",
                    "m": "/images/classes/blood-hunter/card-male-m.webp",
                    "l": "/images/classes/blood-hunter/card-male-l.webp"
                }
            }
        }
    },
    "label": "Blood Hunter",
    "title": "D&D Portal - Blood Hunter",
    "subTitle": "Character class",
    "description": "A third-party/homebrew martial class by Matthew Mercer that sacrifices vitality to power blood curses, elemental weapon rites, and monster-hunting features.",
    "descriptions": {
        "short": "A third-party/homebrew martial class by Matthew Mercer that sacrifices vitality to power blood curses, elemental weapon rites, and monster-hunting features.",
        "medium": "A third-party/homebrew martial class by Matthew Mercer that sacrifices vitality to power blood curses, elemental weapon rites, and monster-hunting features.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "A third-party/homebrew martial class by Matthew Mercer that sacrifices vitality to power blood curses, elemental weapon rites, and monster-hunting features."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "Mechanically, the Blood Hunter is built around "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.strength",
                    "label": "Strength"
                },
                {
                    "type": "text",
                    "text": " or "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.dexterity",
                    "label": "Dexterity"
                },
                {
                    "type": "text",
                    "text": "; "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.intelligence",
                    "label": "Intelligence"
                },
                {
                    "type": "text",
                    "text": " by default for Hemocraft, with an optional "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.wisdom",
                    "label": "Wisdom"
                },
                {
                    "type": "text",
                    "text": " variant., uses a d10 Hit Die, and follows the progression table below for proficiency bonus, class features, and class-specific resources."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "This page collects the Blood Hunter core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Use the linked rules terms for quick hover context without leaving the class page."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.page"
    },
    "tags": [
        "blood-hunter",
        "class",
        "2014"
    ]
});
export const content = { "source": "https://dnd5e.wikidot.com/blood-hunter",
"startingEquipment": [
    {
        "label": "Option 1",
        "instruction": "Choose one",
        "choices": [
            [
                {
                    "type": "text",
                    "text": "Martial weapon"
                }
            ],
            [
                {
                    "type": "text",
                    "text": "two "
                },
                {
                    "type": "link",
                    "path": "internals.rules.equipment.simpleWeapons",
                    "label": "simple weapons"
                }
            ]
        ]
    },
    {
        "label": "Option 2",
        "instruction": "Choose one",
        "choices": [
            [
                {
                    "type": "text",
                    "text": "Light crossbow"
                }
            ],
            [
                {
                    "type": "text",
                    "text": "hand crossbow with bolts"
                }
            ]
        ]
    },
    {
        "label": "Option 3",
        "instruction": "Choose one",
        "choices": [
            [
                {
                    "type": "text",
                    "text": "Studded leather"
                }
            ],
            [
                {
                    "type": "text",
                    "text": "scale mail"
                }
            ]
        ]
    },
    {
        "label": "Explorer\u2019s pack and alchemist\u2019s supplies",
        "items": [
            [
                {
                    "type": "text",
                    "text": "Explorer\u2019s pack and alchemist\u2019s supplies"
                }
            ]
        ]
    }
],
"sections": {
    "identity": {
        "id": "implementation-identity",
        "title": "Implementation Identity",
        "blocks": [
            {
                "type": "table",
                "caption": "Implementation identity",
                "showCaption": true,
                "columns": {
                    "label": "Property",
                    "value": "Value"
                },
                "rows": [
                    {
                        "label": "Primary ability",
                        "value": [
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.strength",
                                "label": "Strength"
                            },
                            {
                                "type": "text",
                                "text": " or "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.dexterity",
                                "label": "Dexterity"
                            },
                            {
                                "type": "text",
                                "text": "; "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.intelligence",
                                "label": "Intelligence"
                            },
                            {
                                "type": "text",
                                "text": " by default for Hemocraft, with an optional "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.wisdom",
                                "label": "Wisdom"
                            },
                            {
                                "type": "text",
                                "text": " variant."
                            }
                        ]
                    },
                    {
                        "label": "Multiclass prerequisite",
                        "value": [
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.intelligence",
                                "label": "Intelligence"
                            },
                            {
                                "type": "text",
                                "text": " 13 and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.strength",
                                "label": "Strength"
                            },
                            {
                                "type": "text",
                                "text": " 13 or "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.dexterity",
                                "label": "Dexterity"
                            },
                            {
                                "type": "text",
                                "text": " 13"
                            }
                        ]
                    },
                    {
                        "label": "Spellcasting",
                        "value": [
                            {
                                "type": "text",
                                "text": "None by default; Order of the Profane Soul gains warlock-style pact progression."
                            }
                        ]
                    },
                    {
                        "label": "Suggested tags",
                        "value": [
                            {
                                "type": "text",
                                "text": "melee, monster-hunting, blood-magic, dark-magic, third-party"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "coreTraits": {
        "id": "core-class-traits",
        "title": "Core Class Traits",
        "blocks": [
            {
                "type": "table",
                "caption": "Core class traits",
                "showCaption": true,
                "columns": {
                    "label": "Property",
                    "value": "Value"
                },
                "rows": [
                    {
                        "label": "Hit Die",
                        "value": [
                            {
                                "type": "text",
                                "text": "d10"
                            }
                        ]
                    },
                    {
                        "label": "Armor",
                        "value": [
                            {
                                "type": "link",
                                "path": "internals.rules.equipment.lightArmor",
                                "label": "Light armor"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.equipment.mediumArmor",
                                "label": "medium armor"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.equipment.shields",
                                "label": "shields"
                            }
                        ]
                    },
                    {
                        "label": "Weapons",
                        "value": [
                            {
                                "type": "link",
                                "path": "internals.rules.equipment.simpleWeapons",
                                "label": "Simple weapons"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.equipment.martialWeapons",
                                "label": "martial weapons"
                            }
                        ]
                    },
                    {
                        "label": "Tools",
                        "value": [
                            {
                                "type": "text",
                                "text": "Alchemist\u2019s supplies"
                            }
                        ]
                    },
                    {
                        "label": "Saving Throws",
                        "value": [
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.dexterity",
                                "label": "Dexterity"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.intelligence",
                                "label": "Intelligence"
                            }
                        ]
                    },
                    {
                        "label": "Skills",
                        "value": [
                            {
                                "type": "text",
                                "text": "Choose three: "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.acrobatics",
                                "label": "Acrobatics"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.arcana",
                                "label": "Arcana"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.athletics",
                                "label": "Athletics"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.history",
                                "label": "History"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.insight",
                                "label": "Insight"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.investigation",
                                "label": "Investigation"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.religion",
                                "label": "Religion"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.survival",
                                "label": "Survival"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "classFeaturesOverview": {
        "id": "class-features",
        "title": "Class Features",
        "blocks": [
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "As a blood hunter, you gain the following class features."
                    }
                ]
            }
        ]
    },
    "featureSections": [
        {
            "id": "hunter-s-bane",
            "title": "Hunter\u2019s Bane",
            "subtitle": "Level 1",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Gain advantage to track and recall information about fey, fiends, and undead, and establish the Hemocraft save "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.d20Tests.difficultyClass",
                            "label": "DC"
                        },
                        {
                            "type": "text",
                            "text": "."
                        }
                    ]
                }
            ]
        },
        {
            "id": "blood-maledict",
            "title": "Blood Maledict",
            "subtitle": "Levels 1, uses and curses increase",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Invoke known blood curses; amplify a curse by taking an unreduced Hemocraft die of "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.damageTypes.necrotic",
                            "label": "necrotic"
                        },
                        {
                            "type": "text",
                            "text": " damage."
                        }
                    ]
                }
            ]
        },
        {
            "id": "fighting-style",
            "title": "Fighting Style",
            "subtitle": "Level 2",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Choose Archery, Dueling, Great Weapon Fighting, or Two-Weapon Fighting."
                        }
                    ]
                }
            ]
        },
        {
            "id": "crimson-rite",
            "title": "Crimson Rite",
            "subtitle": "Levels 2, improves at 7, 14",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Take Hemocraft-die damage to imbue a held weapon with extra elemental or esoteric damage."
                        }
                    ]
                }
            ]
        },
        {
            "id": "blood-hunter-order",
            "title": "Blood Hunter Order",
            "subtitle": "Levels 3, 7, 11, 15, 18",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Choose a subclass order."
                        }
                    ]
                }
            ]
        },
        {
            "id": "ability-score-improvement",
            "title": "Ability Score Improvement",
            "subtitle": "Levels 4, 8, 12, 16, 19",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Increase ability scores or take a feat."
                        }
                    ]
                }
            ]
        },
        {
            "id": "extra-attack",
            "title": "Extra Attack",
            "subtitle": "Level 5",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Attack twice with the "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.actions.attackAction",
                            "label": "Attack action"
                        },
                        {
                            "type": "text",
                            "text": "."
                        }
                    ]
                }
            ]
        },
        {
            "id": "brand-of-castigation",
            "title": "Brand of Castigation",
            "subtitle": "Level 6",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Brand a creature hit by a rite weapon to track it and punish damage it deals nearby."
                        }
                    ]
                }
            ]
        },
        {
            "id": "grim-psychometry",
            "title": "Grim Psychometry",
            "subtitle": "Level 9",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Gain advantage on "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.skills.history",
                            "label": "History"
                        },
                        {
                            "type": "text",
                            "text": " checks concerning sinister or tragic objects and locations."
                        }
                    ]
                }
            ]
        },
        {
            "id": "dark-augmentation",
            "title": "Dark Augmentation",
            "subtitle": "Level 10",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Increase "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.movement.speed",
                            "label": "speed"
                        },
                        {
                            "type": "text",
                            "text": " and add Hemocraft modifier to "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.abilityScores.strength",
                            "label": "Strength"
                        },
                        {
                            "type": "text",
                            "text": ", "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.abilityScores.dexterity",
                            "label": "Dexterity"
                        },
                        {
                            "type": "text",
                            "text": ", and "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.abilityScores.constitution",
                            "label": "Constitution"
                        },
                        {
                            "type": "text",
                            "text": " saves."
                        }
                    ]
                }
            ]
        },
        {
            "id": "brand-of-tethering",
            "title": "Brand of Tethering",
            "subtitle": "Level 13",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Strengthen the brand and hinder dashing, teleportation, and planar escape."
                        }
                    ]
                }
            ]
        },
        {
            "id": "hardened-soul",
            "title": "Hardened Soul",
            "subtitle": "Level 14",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Gain advantage against charm and fear."
                        }
                    ]
                }
            ]
        },
        {
            "id": "sanguine-mastery",
            "title": "Sanguine Mastery",
            "subtitle": "Level 20",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Reroll one Hemocraft die per turn and regain Blood Maledict on critical rite-weapon hits."
                        }
                    ]
                }
            ]
        }
    ],
    "subclasses": {
        "id": "subclasses",
        "title": "Published Subclasses",
        "blocks": [
            {
                "type": "card-grid",
                "groups": [
                    {
                        "title": "Published Subclasses",
                        "cards": [
                            {
                                "page": "internals.classes.bloodHunter.subclasses.ghostslayer",
                                "source": "D&D Beyond"
                            },
                            {
                                "page": "internals.classes.bloodHunter.subclasses.lycan",
                                "source": "D&D Beyond"
                            },
                            {
                                "page": "internals.classes.bloodHunter.subclasses.mutant",
                                "source": "D&D Beyond"
                            },
                            {
                                "page": "internals.classes.bloodHunter.subclasses.profaneSoul",
                                "source": "D&D Beyond"
                            }
                        ]
                    }
                ]
            }
        ]
    }
},
"tableOfContents": [
    {
        "id": "implementation-identity",
        "title": "Implementation Identity"
    },
    {
        "id": "core-class-traits",
        "title": "Core Class Traits"
    },
    {
        "id": "starting-equipment",
        "title": "Starting Equipment"
    },
    {
        "id": "progression",
        "title": "Blood Hunter Progression"
    },
    {
        "id": "class-features",
        "title": "Class Features",
        "children": [
            {
                "id": "hunter-s-bane",
                "title": "Hunter\u2019s Bane"
            },
            {
                "id": "blood-maledict",
                "title": "Blood Maledict"
            },
            {
                "id": "fighting-style",
                "title": "Fighting Style"
            },
            {
                "id": "crimson-rite",
                "title": "Crimson Rite"
            },
            {
                "id": "blood-hunter-order",
                "title": "Blood Hunter Order"
            },
            {
                "id": "ability-score-improvement",
                "title": "Ability Score Improvement"
            },
            {
                "id": "extra-attack",
                "title": "Extra Attack"
            },
            {
                "id": "brand-of-castigation",
                "title": "Brand of Castigation"
            },
            {
                "id": "grim-psychometry",
                "title": "Grim Psychometry"
            },
            {
                "id": "dark-augmentation",
                "title": "Dark Augmentation"
            },
            {
                "id": "brand-of-tethering",
                "title": "Brand of Tethering"
            },
            {
                "id": "hardened-soul",
                "title": "Hardened Soul"
            },
            {
                "id": "sanguine-mastery",
                "title": "Sanguine Mastery"
            }
        ]
    },
    {
        "id": "subclasses",
        "title": "Published Subclasses"
    }
] } as const;

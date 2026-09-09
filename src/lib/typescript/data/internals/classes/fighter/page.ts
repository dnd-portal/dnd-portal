/*
	Location: src/lib/typescript/data/internals/classes/fighter.ts
	Use: Central Fighter class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/fighter",
    "img": {
        "href": "/icons/white/classes/fighter.svg",
        "alt": "A stylized Fighter class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-male-s.webp",
                    "m": "/images/classes/fighter/card-male-m.webp",
                    "l": "/images/classes/fighter/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-male-s.webp",
                    "m": "/images/classes/fighter/card-male-m.webp",
                    "l": "/images/classes/fighter/card-male-l.webp"
                }
            }
        }
    },
    "label": "Fighter",
    "title": "D&D Portal - Fighter",
    "subTitle": "Character class",
    "description": "A flexible martial class with broad armor and weapon access, frequent Ability Score Improvements, and the strongest repeated Attack action progression.",
    "descriptions": {
        "short": "A flexible martial class with broad armor and weapon access, frequent Ability Score Improvements, and the strongest repeated Attack action progression.",
        "medium": "A flexible martial class with broad armor and weapon access, frequent Ability Score Improvements, and the strongest repeated Attack action progression.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "A flexible martial class with broad armor and weapon access, frequent Ability Score Improvements, and the strongest repeated "
                },
                {
                    "type": "link",
                    "path": "internals.rules.actions.attackAction",
                    "label": "Attack action"
                },
                {
                    "type": "text",
                    "text": " progression."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "Mechanically, the Fighter is built around "
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
                    "text": ", uses a d10 Hit Die, and follows the progression table below for proficiency bonus, class features, and class-specific resources."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "This page collects the Fighter core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Use the linked rules terms for quick hover context without leaving the class page."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.page"
    },
    "tags": [
        "fighter",
        "class",
        "2014"
    ]
});
export const content = { "source": "https://dnd5e.wikidot.com/fighter",
"startingEquipment": [
    {
        "label": "Option 1",
        "instruction": "Choose one",
        "choices": [
            [
                {
                    "type": "text",
                    "text": "Chain mail"
                }
            ],
            [
                {
                    "type": "text",
                    "text": "leather armor with longbow and arrows"
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
                    "text": "Martial weapon and "
                },
                {
                    "type": "link",
                    "path": "internals.rules.equipment.shields",
                    "label": "shield"
                }
            ],
            [
                {
                    "type": "text",
                    "text": "two "
                },
                {
                    "type": "link",
                    "path": "internals.rules.equipment.martialWeapons",
                    "label": "martial weapons"
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
                    "text": "Light crossbow and bolts"
                }
            ],
            [
                {
                    "type": "text",
                    "text": "two "
                },
                {
                    "type": "link",
                    "path": "internals.equipment.handaxes",
                    "label": "handaxes"
                }
            ]
        ]
    },
    {
        "label": "Option 4",
        "instruction": "Choose one",
        "choices": [
            [
                {
                    "type": "text",
                    "text": "Dungeoneer\u2019s pack"
                }
            ],
            [
                {
                    "type": "text",
                    "text": "explorer\u2019s pack"
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
                            }
                        ]
                    },
                    {
                        "label": "Multiclass prerequisite",
                        "value": [
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
                                "text": "None by default; Eldritch Knight adds "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.intelligence",
                                "label": "Intelligence"
                            },
                            {
                                "type": "text",
                                "text": "-based spellcasting."
                            }
                        ]
                    },
                    {
                        "label": "Suggested tags",
                        "value": [
                            {
                                "type": "text",
                                "text": "melee, ranged, tank, sustained-damage, tactical"
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
                                "type": "text",
                                "text": "All armor, "
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
                                "text": "None"
                            }
                        ]
                    },
                    {
                        "label": "Saving Throws",
                        "value": [
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
                                "path": "internals.rules.abilityScores.constitution",
                                "label": "Constitution"
                            }
                        ]
                    },
                    {
                        "label": "Skills",
                        "value": [
                            {
                                "type": "text",
                                "text": "Choose two: "
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
                                "path": "internals.rules.skills.animalHandling",
                                "label": "Animal Handling"
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
                                "path": "internals.rules.skills.intimidation",
                                "label": "Intimidation"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.perception",
                                "label": "Perception"
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
                        "text": "As a fighter, you gain the following class features."
                    }
                ]
            }
        ]
    },
    "featureSections": [
        {
            "id": "fighting-style",
            "title": "Fighting Style",
            "subtitle": "Level 1",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Choose a persistent combat specialization such as Archery, Defense, Dueling, Great Weapon Fighting, Protection, Two-Weapon Fighting, or a Tasha\u2019s option."
                        }
                    ]
                }
            ]
        },
        {
            "id": "second-wind",
            "title": "Second Wind",
            "subtitle": "Level 1",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Use a "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.actions.bonusAction",
                            "label": "bonus action"
                        },
                        {
                            "type": "text",
                            "text": " once per short or "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.rests.longRest",
                            "label": "long rest"
                        },
                        {
                            "type": "text",
                            "text": " to recover 1d10 + fighter level "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.combat.hitPoints",
                            "label": "hit points"
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
            "id": "action-surge",
            "title": "Action Surge",
            "subtitle": "Levels 2, second use at 17",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Take one additional action on the current turn; recover uses on a short or "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.rests.longRest",
                            "label": "long rest"
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
            "id": "martial-archetype",
            "title": "Martial Archetype",
            "subtitle": "Levels 3, 7, 10, 15, 18",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Choose a subclass that defines tactical, magical, or weapon specialization."
                        }
                    ]
                }
            ]
        },
        {
            "id": "ability-score-improvement",
            "title": "Ability Score Improvement",
            "subtitle": "Levels 4, 6, 8, 12, 14, 16, 19",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Gain more "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.abbreviations.asi",
                            "label": "ASIs"
                        },
                        {
                            "type": "text",
                            "text": " than any other base class."
                        }
                    ]
                }
            ]
        },
        {
            "id": "martial-versatility",
            "title": "Martial Versatility (Optional)",
            "subtitle": "Level ASI levels",
            "subtitleContent": [
                {
                    "type": "text",
                    "text": "Level "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abbreviations.asi",
                    "label": "ASI"
                },
                {
                    "type": "text",
                    "text": " levels"
                }
            ],
            "optional": true,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Replace a fighting style or a known Battle Master maneuver at "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.abbreviations.asi",
                            "label": "ASI"
                        },
                        {
                            "type": "text",
                            "text": " levels."
                        }
                    ]
                }
            ]
        },
        {
            "id": "extra-attack",
            "title": "Extra Attack",
            "subtitle": "Levels 5, 11, 20",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Attack two, then three, then four times with the "
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
            "id": "indomitable",
            "title": "Indomitable",
            "subtitle": "Levels 9, 13, 17",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Reroll a failed "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.d20Tests.savingThrow",
                            "label": "saving throw"
                        },
                        {
                            "type": "text",
                            "text": "; uses increase at higher levels."
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
                                "page": "internals.classes.fighter.subclasses.arcaneArcher",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.fighter.subclasses.banneret",
                                "source": "Sword Coast Adventurer\u2019s Guide"
                            },
                            {
                                "page": "internals.classes.fighter.subclasses.battleMaster",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.fighter.subclasses.cavalier",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.fighter.subclasses.champion",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.fighter.subclasses.echoKnight",
                                "source": "Explorer\u2019s Guide to Wildemount"
                            },
                            {
                                "page": "internals.classes.fighter.subclasses.eldritchKnight",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.fighter.subclasses.psiWarrior",
                                "source": "Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.fighter.subclasses.runeKnight",
                                "source": "Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.fighter.subclasses.samurai",
                                "source": "Xanathar\u2019s Guide to Everything"
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
        "title": "Fighter Progression"
    },
    {
        "id": "class-features",
        "title": "Class Features",
        "children": [
            {
                "id": "fighting-style",
                "title": "Fighting Style"
            },
            {
                "id": "second-wind",
                "title": "Second Wind"
            },
            {
                "id": "action-surge",
                "title": "Action Surge"
            },
            {
                "id": "martial-archetype",
                "title": "Martial Archetype"
            },
            {
                "id": "ability-score-improvement",
                "title": "Ability Score Improvement"
            },
            {
                "id": "martial-versatility",
                "title": "Martial Versatility (Optional)"
            },
            {
                "id": "extra-attack",
                "title": "Extra Attack"
            },
            {
                "id": "indomitable",
                "title": "Indomitable"
            }
        ]
    },
    {
        "id": "subclasses",
        "title": "Published Subclasses"
    }
] } as const;

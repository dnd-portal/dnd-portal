/*
	Location: src/lib/typescript/data/internals/classes/warlock.ts
	Use: Central Warlock class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/warlock",
    "img": {
        "href": "/icons/white/classes/warlock.svg",
        "alt": "A stylized Warlock class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-female-s.webp",
                    "m": "/images/classes/warlock/card-female-m.webp",
                    "l": "/images/classes/warlock/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-male-s.webp",
                    "m": "/images/classes/warlock/card-male-m.webp",
                    "l": "/images/classes/warlock/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-female-s.webp",
                    "m": "/images/classes/warlock/card-female-m.webp",
                    "l": "/images/classes/warlock/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-male-s.webp",
                    "m": "/images/classes/warlock/card-male-m.webp",
                    "l": "/images/classes/warlock/card-male-l.webp"
                }
            }
        }
    },
    "label": "Warlock",
    "title": "D&D Portal - Warlock",
    "subTitle": "Character class",
    "description": "A Charisma-based pact caster who recovers a small number of high-level slots on short rests and customizes persistent powers through Eldritch Invocations.",
    "descriptions": {
        "short": "A Charisma-based pact caster who recovers a small number of high-level slots on short rests and customizes persistent powers through Eldritch Invocations.",
        "medium": "A Charisma-based pact caster who recovers a small number of high-level slots on short rests and customizes persistent powers through Eldritch Invocations.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "A "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.charisma",
                    "label": "Charisma"
                },
                {
                    "type": "text",
                    "text": "-based pact caster who recovers a small number of high-level slots on short rests and customizes persistent powers through Eldritch Invocations."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "Mechanically, the Warlock is built around "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.charisma",
                    "label": "Charisma"
                },
                {
                    "type": "text",
                    "text": ", uses a d8 Hit Die, and follows the progression table below for proficiency bonus, class features, and class-specific resources."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "This page collects the Warlock core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Spellcasting note: "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.charisma",
                    "label": "Charisma"
                },
                {
                    "type": "text",
                    "text": "; Pact Magic uses a small number of equal-level slots recovered on a short or "
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
        ]
    },
    "navigation": {
        "parent": "internals.classes.page"
    },
    "tags": [
        "warlock",
        "class",
        "2014"
    ]
});
export const content = { "source": "https://dnd5e.wikidot.com/warlock",
"startingEquipment": [
    {
        "label": "Option 1",
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
                    "text": "simple weapon"
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
                    "text": "Component pouch"
                }
            ],
            [
                {
                    "type": "text",
                    "text": "arcane focus"
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
                    "text": "Scholar\u2019s pack"
                }
            ],
            [
                {
                    "type": "text",
                    "text": "dungeoneer\u2019s pack"
                }
            ]
        ]
    },
    {
        "label": "Leather armor, simple weapon, two daggers",
        "items": [
            [
                {
                    "type": "text",
                    "text": "Leather armor, simple weapon, two daggers"
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
                                "path": "internals.rules.abilityScores.charisma",
                                "label": "Charisma"
                            }
                        ]
                    },
                    {
                        "label": "Multiclass prerequisite",
                        "value": [
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.charisma",
                                "label": "Charisma"
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
                                "type": "link",
                                "path": "internals.rules.abilityScores.charisma",
                                "label": "Charisma"
                            },
                            {
                                "type": "text",
                                "text": "; Pact Magic uses a small number of equal-level slots recovered on a short or "
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
                    },
                    {
                        "label": "Suggested tags",
                        "value": [
                            {
                                "type": "text",
                                "text": "spellcasting, arcane, dark-magic, pact-magic, customizable"
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
                                "text": "d8"
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
                                "path": "internals.rules.abilityScores.wisdom",
                                "label": "Wisdom"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.charisma",
                                "label": "Charisma"
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
                                "path": "internals.rules.skills.arcana",
                                "label": "Arcana"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.deception",
                                "label": "Deception"
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
                                "path": "internals.rules.skills.intimidation",
                                "label": "Intimidation"
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
                                "path": "internals.rules.skills.nature",
                                "label": "Nature"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.religion",
                                "label": "Religion"
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
                        "text": "As a warlock, you gain the following class features."
                    }
                ]
            }
        ]
    },
    "featureSections": [
        {
            "id": "otherworldly-patron",
            "title": "Otherworldly Patron",
            "subtitle": "Levels 1, 6, 10, 14",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Choose the entity granting power and gain patron features."
                        }
                    ]
                }
            ]
        },
        {
            "id": "pact-magic",
            "title": "Pact Magic",
            "subtitle": "Level 1",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Know warlock "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spells"
                        },
                        {
                            "type": "text",
                            "text": " and cast them through equal-level slots that refresh on short or long rests."
                        }
                    ]
                }
            ]
        },
        {
            "id": "eldritch-invocations",
            "title": "Eldritch Invocations",
            "subtitle": "Levels 2, number increases with level",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Choose persistent or at-will magical benefits; many have level, "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spell"
                        },
                        {
                            "type": "text",
                            "text": ", or Pact Boon prerequisites."
                        }
                    ]
                }
            ]
        },
        {
            "id": "pact-boon",
            "title": "Pact Boon",
            "subtitle": "Level 3",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Choose Pact of the Chain, Blade, Tome, or the optional Talisman to define a major customization track."
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
            "id": "eldritch-versatility",
            "title": "Eldritch Versatility (Optional)",
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
                            "text": "Replace a "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.cantrips",
                            "label": "cantrip"
                        },
                        {
                            "type": "text",
                            "text": ", Pact Boon, or Mystic Arcanum "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spell"
                        },
                        {
                            "type": "text",
                            "text": " under the optional rules."
                        }
                    ]
                }
            ]
        },
        {
            "id": "mystic-arcanum",
            "title": "Mystic Arcanum",
            "subtitle": "Levels 11, 13, 15, 17",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Learn one 6th-, 7th-, 8th-, and 9th-level "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spell"
                        },
                        {
                            "type": "text",
                            "text": " cast once per "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.rests.longRest",
                            "label": "long rest"
                        },
                        {
                            "type": "text",
                            "text": " without Pact Magic slots."
                        }
                    ]
                }
            ]
        },
        {
            "id": "eldritch-master",
            "title": "Eldritch Master",
            "subtitle": "Level 20",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Spend 1 minute entreating the patron to recover all Pact Magic slots once per "
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
                                "page": "internals.classes.warlock.subclasses.archfey",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.warlock.subclasses.celestial",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.warlock.subclasses.fathomless",
                                "source": "Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.warlock.subclasses.fiend",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.warlock.subclasses.genie",
                                "source": "Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.warlock.subclasses.greatOldOne",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.warlock.subclasses.hexblade",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.warlock.subclasses.undead",
                                "source": "Van Richten\u2019s Guide to Ravenloft"
                            },
                            {
                                "page": "internals.classes.warlock.subclasses.undying",
                                "source": "Sword Coast Adventurer\u2019s Guide"
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
        "title": "Warlock Progression"
    },
    {
        "id": "class-features",
        "title": "Class Features",
        "children": [
            {
                "id": "otherworldly-patron",
                "title": "Otherworldly Patron"
            },
            {
                "id": "pact-magic",
                "title": "Pact Magic"
            },
            {
                "id": "eldritch-invocations",
                "title": "Eldritch Invocations"
            },
            {
                "id": "pact-boon",
                "title": "Pact Boon"
            },
            {
                "id": "ability-score-improvement",
                "title": "Ability Score Improvement"
            },
            {
                "id": "eldritch-versatility",
                "title": "Eldritch Versatility (Optional)"
            },
            {
                "id": "mystic-arcanum",
                "title": "Mystic Arcanum"
            },
            {
                "id": "eldritch-master",
                "title": "Eldritch Master"
            }
        ]
    },
    {
        "id": "subclasses",
        "title": "Published Subclasses"
    }
] } as const;

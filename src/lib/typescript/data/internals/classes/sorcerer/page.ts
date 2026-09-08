/*
	Location: src/lib/typescript/data/internals/classes/sorcerer.ts
	Use: Central Sorcerer class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/sorcerer",
    "img": {
        "href": "/icons/white/classes/sorcerer.svg",
        "alt": "A stylized Sorcerer class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-female-s.webp",
                    "m": "/images/classes/sorcerer/card-female-m.webp",
                    "l": "/images/classes/sorcerer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-male-s.webp",
                    "m": "/images/classes/sorcerer/card-male-m.webp",
                    "l": "/images/classes/sorcerer/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-female-s.webp",
                    "m": "/images/classes/sorcerer/card-female-m.webp",
                    "l": "/images/classes/sorcerer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-male-s.webp",
                    "m": "/images/classes/sorcerer/card-male-m.webp",
                    "l": "/images/classes/sorcerer/card-male-l.webp"
                }
            }
        }
    },
    "label": "Sorcerer",
    "title": "D&D Portal - Sorcerer",
    "subTitle": "Character class",
    "description": "A Charisma-based known-spell full caster whose Sorcery Points and Metamagic reshape spells in ways other casters cannot.",
    "descriptions": {
        "short": "A Charisma-based known-spell full caster whose Sorcery Points and Metamagic reshape spells in ways other casters cannot.",
        "medium": "A Charisma-based known-spell full caster whose Sorcery Points and Metamagic reshape spells in ways other casters cannot.",
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
                    "text": "-based known-"
                },
                {
                    "type": "link",
                    "path": "internals.rules.spellcasting.spells",
                    "label": "spell"
                },
                {
                    "type": "text",
                    "text": " full caster whose Sorcery Points and Metamagic reshape "
                },
                {
                    "type": "link",
                    "path": "internals.rules.spellcasting.spells",
                    "label": "spells"
                },
                {
                    "type": "text",
                    "text": " in ways other casters cannot."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "Mechanically, the Sorcerer is built around "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.charisma",
                    "label": "Charisma"
                },
                {
                    "type": "text",
                    "text": ", uses a d6 Hit Die, and follows the progression table below for proficiency bonus, class features, and class-specific resources."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "This page collects the Sorcerer core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Spellcasting note: "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.charisma",
                    "label": "Charisma"
                },
                {
                    "type": "text",
                    "text": "; known-"
                },
                {
                    "type": "link",
                    "path": "internals.rules.spellcasting.spells",
                    "label": "spell"
                },
                {
                    "type": "text",
                    "text": " full-caster progression."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.page"
    },
    "tags": [
        "sorcerer",
        "class",
        "2014"
    ]
});
export const content = { "source": "https://dnd5e.wikidot.com/sorcerer",
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
    },
    {
        "label": "Two daggers",
        "items": [
            [
                {
                    "type": "text",
                    "text": "Two daggers"
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
                                "text": "; known-"
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " full-caster progression."
                            }
                        ]
                    },
                    {
                        "label": "Suggested tags",
                        "value": [
                            {
                                "type": "text",
                                "text": "spellcasting, arcane, innate-magic, metamagic, burst-damage"
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
                                "text": "d6"
                            }
                        ]
                    },
                    {
                        "label": "Armor",
                        "value": [
                            {
                                "type": "text",
                                "text": "None"
                            }
                        ]
                    },
                    {
                        "label": "Weapons",
                        "value": [
                            {
                                "type": "text",
                                "text": "Daggers, darts, slings, quarterstaffs, light crossbows"
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
                                "path": "internals.rules.abilityScores.constitution",
                                "label": "Constitution"
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
                                "path": "internals.rules.skills.persuasion",
                                "label": "Persuasion"
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
                        "text": "As a sorcerer, you gain the following class features."
                    }
                ]
            }
        ]
    },
    "featureSections": [
        {
            "id": "spellcasting",
            "title": "Spellcasting",
            "subtitle": "Level 1",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Know sorcerer "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spells"
                        },
                        {
                            "type": "text",
                            "text": " and cast them with "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.abilityScores.charisma",
                            "label": "Charisma"
                        },
                        {
                            "type": "text",
                            "text": " using the full-caster slot table."
                        }
                    ]
                }
            ]
        },
        {
            "id": "sorcerous-origin",
            "title": "Sorcerous Origin",
            "subtitle": "Levels 1, 6, 14, 18",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Choose the source of innate magic and gain origin features."
                        }
                    ]
                }
            ]
        },
        {
            "id": "font-of-magic",
            "title": "Font of Magic",
            "subtitle": "Level 2",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Gain Sorcery Points, convert them to "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spell"
                        },
                        {
                            "type": "text",
                            "text": " slots, or convert "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spell"
                        },
                        {
                            "type": "text",
                            "text": " slots into points."
                        }
                    ]
                }
            ]
        },
        {
            "id": "metamagic",
            "title": "Metamagic",
            "subtitle": "Levels 3, 10, 17",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Learn options that alter range, targets, components, timing, damage, or "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.d20Tests.savingThrow",
                            "label": "saving throws"
                        },
                        {
                            "type": "text",
                            "text": " of "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spells"
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
            "id": "sorcerous-versatility",
            "title": "Sorcerous Versatility (Optional)",
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
                            "text": "Replace one Metamagic option or one sorcerer "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.cantrips",
                            "label": "cantrip"
                        },
                        {
                            "type": "text",
                            "text": " at "
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
            "id": "magical-guidance",
            "title": "Magical Guidance (Optional)",
            "subtitle": "Level 5",
            "optional": true,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Spend 1 Sorcery Point to reroll a failed "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.d20Tests.abilityCheck",
                            "label": "ability check"
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
            "id": "sorcerous-restoration",
            "title": "Sorcerous Restoration",
            "subtitle": "Level 20",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Regain 4 Sorcery Points after a "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.rests.shortRest",
                            "label": "short rest"
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
                                "page": "internals.classes.sorcerer.subclasses.aberrantMind",
                                "source": "Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.sorcerer.subclasses.clockworkSoul",
                                "source": "Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.sorcerer.subclasses.draconicBloodline",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.sorcerer.subclasses.divineSoul",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.sorcerer.subclasses.lunarSorcery",
                                "source": "Dragonlance: Shadow of the Dragon Queen"
                            },
                            {
                                "page": "internals.classes.sorcerer.subclasses.shadowMagic",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.sorcerer.subclasses.stormSorcery",
                                "source": "Sword Coast Adventurer\u2019s Guide; Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.sorcerer.subclasses.wildMagic",
                                "source": "Player\u2019s Handbook"
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
        "title": "Sorcerer Progression"
    },
    {
        "id": "class-features",
        "title": "Class Features",
        "children": [
            {
                "id": "spellcasting",
                "title": "Spellcasting"
            },
            {
                "id": "sorcerous-origin",
                "title": "Sorcerous Origin"
            },
            {
                "id": "font-of-magic",
                "title": "Font of Magic"
            },
            {
                "id": "metamagic",
                "title": "Metamagic"
            },
            {
                "id": "ability-score-improvement",
                "title": "Ability Score Improvement"
            },
            {
                "id": "sorcerous-versatility",
                "title": "Sorcerous Versatility (Optional)"
            },
            {
                "id": "magical-guidance",
                "title": "Magical Guidance (Optional)"
            },
            {
                "id": "sorcerous-restoration",
                "title": "Sorcerous Restoration"
            }
        ]
    },
    {
        "id": "subclasses",
        "title": "Published Subclasses"
    }
] } as const;

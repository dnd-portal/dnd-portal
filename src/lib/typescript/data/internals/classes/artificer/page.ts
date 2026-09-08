/*
	Location: src/lib/typescript/data/internals/classes/artificer.ts
	Use: Central Artificer class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/artificer",
    "img": {
        "href": "/icons/white/classes/artificer.svg",
        "alt": "A stylized Artificer class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Artificer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/artificer/card-female-s.webp",
                    "m": "/images/classes/artificer/card-female-m.webp",
                    "l": "/images/classes/artificer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Artificer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/artificer/card-male-s.webp",
                    "m": "/images/classes/artificer/card-male-m.webp",
                    "l": "/images/classes/artificer/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Artificer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/artificer/card-female-s.webp",
                    "m": "/images/classes/artificer/card-female-m.webp",
                    "l": "/images/classes/artificer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Artificer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/artificer/card-male-s.webp",
                    "m": "/images/classes/artificer/card-male-m.webp",
                    "l": "/images/classes/artificer/card-male-l.webp"
                }
            }
        }
    },
    "label": "Artificer",
    "title": "D&D Portal - Artificer",
    "subTitle": "Character class",
    "description": "An Intelligence-based magical inventor who channels spells through tools, creates temporary magic items through infusions, and adapts equipment to the needs of the party.",
    "descriptions": {
        "short": "An Intelligence-based magical inventor who channels spells through tools, creates temporary magic items through infusions, and adapts equipment to the needs of the party.",
        "medium": "An Intelligence-based magical inventor who channels spells through tools, creates temporary magic items through infusions, and adapts equipment to the needs of the party.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "An "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.intelligence",
                    "label": "Intelligence"
                },
                {
                    "type": "text",
                    "text": "-based magical inventor who channels "
                },
                {
                    "type": "link",
                    "path": "internals.rules.spellcasting.spells",
                    "label": "spells"
                },
                {
                    "type": "text",
                    "text": " through tools, creates temporary magic items through infusions, and adapts equipment to the needs of the party."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "Mechanically, the Artificer is built around "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.intelligence",
                    "label": "Intelligence"
                },
                {
                    "type": "text",
                    "text": ", uses a d8 Hit Die, and follows the progression table below for proficiency bonus, class features, and class-specific resources."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "This page collects the Artificer core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Spellcasting note: "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.intelligence",
                    "label": "Intelligence"
                },
                {
                    "type": "text",
                    "text": "; prepared half-caster progression beginning at 1st level."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.page"
    },
    "tags": [
        "artificer",
        "class",
        "2014"
    ]
});
export const content = { "source": "https://dnd5e.wikidot.com/artificer",
"startingEquipment": [
    {
        "label": "Any two simple weapons",
        "items": [
            [
                {
                    "type": "text",
                    "text": "Any two "
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
        "label": "Light crossbow and 20 bolts",
        "items": [
            [
                {
                    "type": "text",
                    "text": "Light crossbow and 20 bolts"
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
                    "text": "Studded leather armor"
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
        "label": "Thieves\u2019 tools and a dungeoneer\u2019s pack",
        "items": [
            [
                {
                    "type": "text",
                    "text": "Thieves\u2019 tools and a dungeoneer\u2019s pack"
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
                                "path": "internals.rules.abilityScores.intelligence",
                                "label": "Intelligence"
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
                                "text": " 13"
                            }
                        ]
                    },
                    {
                        "label": "Spellcasting",
                        "value": [
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.intelligence",
                                "label": "Intelligence"
                            },
                            {
                                "type": "text",
                                "text": "; prepared half-caster progression beginning at 1st level."
                            }
                        ]
                    },
                    {
                        "label": "Suggested tags",
                        "value": [
                            {
                                "type": "text",
                                "text": "arcane, crafting, support, utility, half-caster"
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
                            }
                        ]
                    },
                    {
                        "label": "Tools",
                        "value": [
                            {
                                "type": "text",
                                "text": "Thieves\u2019 tools, tinker\u2019s tools, and one artisan\u2019s tool"
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
                                "path": "internals.rules.skills.history",
                                "label": "History"
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
                                "path": "internals.rules.skills.medicine",
                                "label": "Medicine"
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
                                "path": "internals.rules.skills.perception",
                                "label": "Perception"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.sleightOfHand",
                                "label": "Sleight of Hand"
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
                        "text": "As a artificer, you gain the following class features."
                    }
                ]
            }
        ]
    },
    "featureSections": [
        {
            "id": "magical-tinkering",
            "title": "Magical Tinkering",
            "subtitle": "Level 1",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Imbue a limited number of Tiny mundane objects with persistent minor magical effects such as light, a recorded message, a sound or smell, or a static visual mark."
                        }
                    ]
                }
            ]
        },
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
                            "text": "Prepare artificer "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spells"
                        },
                        {
                            "type": "text",
                            "text": " using "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.abilityScores.intelligence",
                            "label": "Intelligence"
                        },
                        {
                            "type": "text",
                            "text": " and produce "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spell"
                        },
                        {
                            "type": "text",
                            "text": " effects through tools or infused items; ritual casting is available for prepared ritual "
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
            "id": "infuse-item",
            "title": "Infuse Item",
            "subtitle": "Level 2",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Learn infusions and apply them to nonmagical objects after a "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.rests.longRest",
                            "label": "long rest"
                        },
                        {
                            "type": "text",
                            "text": ", creating temporary magic items up to the class limit."
                        }
                    ]
                }
            ]
        },
        {
            "id": "artificer-specialist",
            "title": "Artificer Specialist",
            "subtitle": "Levels 3, 5, 9, 15",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Choose a specialist whose features define the class\u2019s main combat and support package."
                        }
                    ]
                }
            ]
        },
        {
            "id": "the-right-tool-for-the-job",
            "title": "The Right Tool for the Job",
            "subtitle": "Level 3",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Create one set of artisan\u2019s tools during a rest while holding thieves\u2019 or artisan\u2019s tools."
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
                            "text": "Increase ability scores or take a feat when the campaign uses feats."
                        }
                    ]
                }
            ]
        },
        {
            "id": "tool-expertise",
            "title": "Tool Expertise",
            "subtitle": "Level 6",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Double proficiency on "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.d20Tests.abilityCheck",
                            "label": "ability checks"
                        },
                        {
                            "type": "text",
                            "text": " that use a tool proficiency."
                        }
                    ]
                }
            ]
        },
        {
            "id": "flash-of-genius",
            "title": "Flash of Genius",
            "subtitle": "Level 7",
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
                            "path": "internals.rules.actions.reaction",
                            "label": "reaction"
                        },
                        {
                            "type": "text",
                            "text": " to add the "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.abilityScores.intelligence",
                            "label": "Intelligence"
                        },
                        {
                            "type": "text",
                            "text": " modifier to a nearby creature\u2019s "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.d20Tests.abilityCheck",
                            "label": "ability check"
                        },
                        {
                            "type": "text",
                            "text": " or "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.d20Tests.savingThrow",
                            "label": "saving throw"
                        },
                        {
                            "type": "text",
                            "text": ", a limited number of times per "
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
            "id": "magic-item-adept",
            "title": "Magic Item Adept",
            "subtitle": "Level 10",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Attune to four magic items and craft common or uncommon items more quickly and cheaply."
                        }
                    ]
                }
            ]
        },
        {
            "id": "spell-storing-item",
            "title": "Spell-Storing Item",
            "subtitle": "Level 11",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Store a 1st- or 2nd-level artificer "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spell"
                        },
                        {
                            "type": "text",
                            "text": " in a weapon or focus so another creature can produce the effect repeatedly."
                        }
                    ]
                }
            ]
        },
        {
            "id": "magic-item-savant",
            "title": "Magic Item Savant",
            "subtitle": "Level 14",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Attune to five magic items and ignore class, race, "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spell"
                        },
                        {
                            "type": "text",
                            "text": ", and level requirements for using them."
                        }
                    ]
                }
            ]
        },
        {
            "id": "magic-item-master",
            "title": "Magic Item Master",
            "subtitle": "Level 18",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Attune to six magic items."
                        }
                    ]
                }
            ]
        },
        {
            "id": "soul-of-artifice",
            "title": "Soul of Artifice",
            "subtitle": "Level 20",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Gain saving-throw bonuses from attuned items and sacrifice an infusion to remain at 1 hit point instead of dropping to 0."
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
                                "page": "internals.classes.artificer.subclasses.alchemist",
                                "source": "Tasha\u2019s Cauldron of Everything; Eberron: Rising from the Last War"
                            },
                            {
                                "page": "internals.classes.artificer.subclasses.armorer",
                                "source": "Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.artificer.subclasses.artillerist",
                                "source": "Tasha\u2019s Cauldron of Everything; Eberron: Rising from the Last War"
                            },
                            {
                                "page": "internals.classes.artificer.subclasses.battleSmith",
                                "source": "Tasha\u2019s Cauldron of Everything; Eberron: Rising from the Last War"
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
        "title": "Artificer Progression"
    },
    {
        "id": "class-features",
        "title": "Class Features",
        "children": [
            {
                "id": "magical-tinkering",
                "title": "Magical Tinkering"
            },
            {
                "id": "spellcasting",
                "title": "Spellcasting"
            },
            {
                "id": "infuse-item",
                "title": "Infuse Item"
            },
            {
                "id": "artificer-specialist",
                "title": "Artificer Specialist"
            },
            {
                "id": "the-right-tool-for-the-job",
                "title": "The Right Tool for the Job"
            },
            {
                "id": "ability-score-improvement",
                "title": "Ability Score Improvement"
            },
            {
                "id": "tool-expertise",
                "title": "Tool Expertise"
            },
            {
                "id": "flash-of-genius",
                "title": "Flash of Genius"
            },
            {
                "id": "magic-item-adept",
                "title": "Magic Item Adept"
            },
            {
                "id": "spell-storing-item",
                "title": "Spell-Storing Item"
            },
            {
                "id": "magic-item-savant",
                "title": "Magic Item Savant"
            },
            {
                "id": "magic-item-master",
                "title": "Magic Item Master"
            },
            {
                "id": "soul-of-artifice",
                "title": "Soul of Artifice"
            }
        ]
    },
    {
        "id": "subclasses",
        "title": "Published Subclasses"
    }
] } as const;

/*
	Location: src/lib/typescript/data/internals/classes/cleric.ts
	Use: Central Cleric class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/cleric",
    "img": {
        "href": "/icons/white/classes/cleric.svg",
        "alt": "A stylized Cleric class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-male-s.webp",
                    "m": "/images/classes/cleric/card-male-m.webp",
                    "l": "/images/classes/cleric/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-male-s.webp",
                    "m": "/images/classes/cleric/card-male-m.webp",
                    "l": "/images/classes/cleric/card-male-l.webp"
                }
            }
        }
    },
    "label": "Cleric",
    "title": "D&D Portal - Cleric",
    "subTitle": "Character class",
    "description": "A Wisdom-based prepared divine full caster whose domain supplies extra spells, armor or weapon options, and themed Channel Divinity powers.",
    "descriptions": {
        "short": "A Wisdom-based prepared divine full caster whose domain supplies extra spells, armor or weapon options, and themed Channel Divinity powers.",
        "medium": "A Wisdom-based prepared divine full caster whose domain supplies extra spells, armor or weapon options, and themed Channel Divinity powers.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "A "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.wisdom",
                    "label": "Wisdom"
                },
                {
                    "type": "text",
                    "text": "-based prepared divine full caster whose domain supplies extra "
                },
                {
                    "type": "link",
                    "path": "internals.rules.spellcasting.spells",
                    "label": "spells"
                },
                {
                    "type": "text",
                    "text": ", armor or weapon options, and themed Channel Divinity powers."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "Mechanically, the Cleric is built around "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.wisdom",
                    "label": "Wisdom"
                },
                {
                    "type": "text",
                    "text": ", uses a d8 Hit Die, and follows the progression table below for proficiency bonus, class features, and class-specific resources."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "This page collects the Cleric core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Spellcasting note: "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.wisdom",
                    "label": "Wisdom"
                },
                {
                    "type": "text",
                    "text": "; prepared full-caster progression."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.page"
    },
    "tags": [
        "cleric",
        "class",
        "2014"
    ]
});
export const content = { "source": "https://dnd5e.wikidot.com/cleric",
"startingEquipment": [
    {
        "label": "Option 1",
        "instruction": "Choose one",
        "choices": [
            [
                {
                    "type": "text",
                    "text": "Mace"
                }
            ],
            [
                {
                    "type": "text",
                    "text": "warhammer if proficient"
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
                    "text": "Scale mail, leather armor,"
                }
            ],
            [
                {
                    "type": "text",
                    "text": "chain mail if proficient"
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
                    "text": "a simple weapon"
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
                    "text": "Priest\u2019s pack"
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
        "label": "Shield and holy symbol",
        "items": [
            [
                {
                    "type": "link",
                    "path": "internals.rules.equipment.shields",
                    "label": "Shield"
                },
                {
                    "type": "text",
                    "text": " and holy symbol"
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
                                "path": "internals.rules.abilityScores.wisdom",
                                "label": "Wisdom"
                            }
                        ]
                    },
                    {
                        "label": "Multiclass prerequisite",
                        "value": [
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.wisdom",
                                "label": "Wisdom"
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
                                "path": "internals.rules.abilityScores.wisdom",
                                "label": "Wisdom"
                            },
                            {
                                "type": "text",
                                "text": "; prepared full-caster progression."
                            }
                        ]
                    },
                    {
                        "label": "Suggested tags",
                        "value": [
                            {
                                "type": "text",
                                "text": "spellcasting, divine, healer, support, control"
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
                                "path": "internals.rules.skills.medicine",
                                "label": "Medicine"
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
                        "text": "As a cleric, you gain the following class features."
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
                            "text": "Prepare cleric "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spells"
                        },
                        {
                            "type": "text",
                            "text": " with "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.abilityScores.wisdom",
                            "label": "Wisdom"
                        },
                        {
                            "type": "text",
                            "text": " using the full-caster slot table; a holy symbol serves as a focus and prepared ritual "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spells"
                        },
                        {
                            "type": "text",
                            "text": " can be cast as rituals."
                        }
                    ]
                }
            ]
        },
        {
            "id": "divine-domain",
            "title": "Divine Domain",
            "subtitle": "Levels 1, 2, 6, 8, 17",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Choose a domain that grants always-prepared "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spells"
                        },
                        {
                            "type": "text",
                            "text": ", Channel Divinity uses, and themed features."
                        }
                    ]
                }
            ]
        },
        {
            "id": "channel-divinity",
            "title": "Channel Divinity",
            "subtitle": "Levels 2, uses improve at 6, 18",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Produce Turn Undead or a domain-specific divine effect, regaining uses on a short or "
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
            "id": "harness-divine-power",
            "title": "Harness Divine Power (Optional)",
            "subtitle": "Level 2",
            "optional": true,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Exchange a Channel Divinity use for a limited-level "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spell"
                        },
                        {
                            "type": "text",
                            "text": " slot, with uses scaling by level."
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
            "id": "cantrip-versatility",
            "title": "Cantrip Versatility (Optional)",
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
                            "text": "Replace one cleric "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.cantrips",
                            "label": "cantrip"
                        },
                        {
                            "type": "text",
                            "text": " when an "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.abbreviations.asi",
                            "label": "ASI"
                        },
                        {
                            "type": "text",
                            "text": " is gained."
                        }
                    ]
                }
            ]
        },
        {
            "id": "destroy-undead",
            "title": "Destroy Undead",
            "subtitle": "Levels 5, 8, 11, 14, 17",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Automatically destroy sufficiently weak undead that fail Turn Undead."
                        }
                    ]
                }
            ]
        },
        {
            "id": "divine-intervention",
            "title": "Divine Intervention",
            "subtitle": "Levels 10, automatic at 20",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Request direct aid from the deity; normally percentile-based, becoming automatic at 20th level."
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
                                "page": "internals.classes.cleric.subclasses.arcana",
                                "source": "Sword Coast Adventurer\u2019s Guide"
                            },
                            {
                                "page": "internals.classes.cleric.subclasses.death",
                                "source": "Dungeon Master\u2019s Guide"
                            },
                            {
                                "page": "internals.classes.cleric.subclasses.forge",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.cleric.subclasses.grave",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.cleric.subclasses.knowledge",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.cleric.subclasses.life",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.cleric.subclasses.light",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.cleric.subclasses.nature",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.cleric.subclasses.order",
                                "source": "Guildmaster\u2019s Guide to Ravnica; Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.cleric.subclasses.peace",
                                "source": "Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.cleric.subclasses.tempest",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.cleric.subclasses.trickery",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.cleric.subclasses.twilight",
                                "source": "Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.cleric.subclasses.war",
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
        "title": "Cleric Progression"
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
                "id": "divine-domain",
                "title": "Divine Domain"
            },
            {
                "id": "channel-divinity",
                "title": "Channel Divinity"
            },
            {
                "id": "harness-divine-power",
                "title": "Harness Divine Power (Optional)"
            },
            {
                "id": "ability-score-improvement",
                "title": "Ability Score Improvement"
            },
            {
                "id": "cantrip-versatility",
                "title": "Cantrip Versatility (Optional)"
            },
            {
                "id": "destroy-undead",
                "title": "Destroy Undead"
            },
            {
                "id": "divine-intervention",
                "title": "Divine Intervention"
            }
        ]
    },
    {
        "id": "subclasses",
        "title": "Published Subclasses"
    }
] } as const;

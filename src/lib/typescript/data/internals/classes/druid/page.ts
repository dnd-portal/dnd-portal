/*
	Location: src/lib/typescript/data/internals/classes/druid.ts
	Use: Central Druid class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/druid",
    "img": {
        "href": "/icons/white/classes/druid.svg",
        "alt": "A stylized Druid class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-female-s.webp",
                    "m": "/images/classes/druid/card-female-m.webp",
                    "l": "/images/classes/druid/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-male-s.webp",
                    "m": "/images/classes/druid/card-male-m.webp",
                    "l": "/images/classes/druid/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-female-s.webp",
                    "m": "/images/classes/druid/card-female-m.webp",
                    "l": "/images/classes/druid/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-male-s.webp",
                    "m": "/images/classes/druid/card-male-m.webp",
                    "l": "/images/classes/druid/card-male-l.webp"
                }
            }
        }
    },
    "label": "Druid",
    "title": "D&D Portal - Druid",
    "subTitle": "Character class",
    "description": "A Wisdom-based prepared primal full caster who can transform into beasts and specialize through a druid circle.",
    "descriptions": {
        "short": "A Wisdom-based prepared primal full caster who can transform into beasts and specialize through a druid circle.",
        "medium": "A Wisdom-based prepared primal full caster who can transform into beasts and specialize through a druid circle.",
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
                    "text": "-based prepared primal full caster who can transform into beasts and specialize through a druid circle."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "Mechanically, the Druid is built around "
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
                    "text": "This page collects the Druid core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Spellcasting note: "
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
        "druid",
        "class",
        "2014"
    ]
});
export const content = { "source": "https://dnd5e.wikidot.com/druid",
"startingEquipment": [
    {
        "label": "Option 1",
        "instruction": "Choose one",
        "choices": [
            [
                {
                    "type": "text",
                    "text": "Wooden "
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
                    "text": "Scimitar"
                }
            ],
            [
                {
                    "type": "text",
                    "text": "simple melee weapon"
                }
            ]
        ]
    },
    {
        "label": "Leather armor",
        "items": [
            [
                {
                    "type": "text",
                    "text": "Leather armor"
                }
            ]
        ]
    },
    {
        "label": "Explorer\u2019s pack",
        "items": [
            [
                {
                    "type": "text",
                    "text": "Explorer\u2019s pack"
                }
            ]
        ]
    },
    {
        "label": "Druidic focus",
        "items": [
            [
                {
                    "type": "text",
                    "text": "Druidic focus"
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
                                "text": "spellcasting, primal, healer, utility, shapeshifting"
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
                            },
                            {
                                "type": "text",
                                "text": "; the Wikidot page retains the 2014 nonmetal restriction."
                            }
                        ]
                    },
                    {
                        "label": "Weapons",
                        "value": [
                            {
                                "type": "text",
                                "text": "Clubs, daggers, darts, "
                            },
                            {
                                "type": "link",
                                "path": "internals.equipment.javelins",
                                "label": "javelins"
                            },
                            {
                                "type": "text",
                                "text": ", maces, quarterstaffs, scimitars, sickles, slings, spears"
                            }
                        ]
                    },
                    {
                        "label": "Tools",
                        "value": [
                            {
                                "type": "text",
                                "text": "Herbalism kit"
                            }
                        ]
                    },
                    {
                        "label": "Saving Throws",
                        "value": [
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.intelligence",
                                "label": "Intelligence"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.wisdom",
                                "label": "Wisdom"
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
                                "path": "internals.rules.skills.animalHandling",
                                "label": "Animal Handling"
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
                        "text": "As a druid, you gain the following class features."
                    }
                ]
            }
        ]
    },
    "featureSections": [
        {
            "id": "druidic",
            "title": "Druidic",
            "subtitle": "Level 1",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Know the secret druid language and its hidden-message conventions."
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
                            "text": "Prepare druid "
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
                            "text": " using the full-caster slot table; a druidic focus can be used and prepared ritual "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spells"
                        },
                        {
                            "type": "text",
                            "text": " may be cast as rituals."
                        }
                    ]
                }
            ]
        },
        {
            "id": "wild-shape",
            "title": "Wild Shape",
            "subtitle": "Levels 2, improves at 4, 8",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Transform into a previously seen beast, using class level to determine maximum challenge rating and movement restrictions."
                        }
                    ]
                }
            ]
        },
        {
            "id": "druid-circle",
            "title": "Druid Circle",
            "subtitle": "Levels 2, 6, 10, 14",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Choose a subclass defining the druid\u2019s main magical and Wild Shape specialization."
                        }
                    ]
                }
            ]
        },
        {
            "id": "wild-companion",
            "title": "Wild Companion (Optional)",
            "subtitle": "Level 2",
            "optional": true,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Spend Wild Shape to cast Find Familiar without material components; the spirit is fey and temporary."
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
                            "text": "Replace a druid "
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
            "id": "timeless-body",
            "title": "Timeless Body",
            "subtitle": "Level 18",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Age at one-tenth the normal rate."
                        }
                    ]
                }
            ]
        },
        {
            "id": "beast-spells",
            "title": "Beast Spells",
            "subtitle": "Level 18",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Perform verbal and somatic components of many druid "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spells"
                        },
                        {
                            "type": "text",
                            "text": " while in Wild Shape."
                        }
                    ]
                }
            ]
        },
        {
            "id": "archdruid",
            "title": "Archdruid",
            "subtitle": "Level 20",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Use Wild Shape without limit and ignore many "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spell"
                        },
                        {
                            "type": "text",
                            "text": " components in normal or beast form."
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
                                "page": "internals.classes.druid.subclasses.dreams",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.druid.subclasses.land",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.druid.subclasses.moon",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.druid.subclasses.shepherd",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.druid.subclasses.spores",
                                "source": "Guildmaster\u2019s Guide to Ravnica; Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.druid.subclasses.stars",
                                "source": "Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.druid.subclasses.wildfire",
                                "source": "Tasha\u2019s Cauldron of Everything"
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
        "title": "Druid Progression"
    },
    {
        "id": "class-features",
        "title": "Class Features",
        "children": [
            {
                "id": "druidic",
                "title": "Druidic"
            },
            {
                "id": "spellcasting",
                "title": "Spellcasting"
            },
            {
                "id": "wild-shape",
                "title": "Wild Shape"
            },
            {
                "id": "druid-circle",
                "title": "Druid Circle"
            },
            {
                "id": "wild-companion",
                "title": "Wild Companion (Optional)"
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
                "id": "timeless-body",
                "title": "Timeless Body"
            },
            {
                "id": "beast-spells",
                "title": "Beast Spells"
            },
            {
                "id": "archdruid",
                "title": "Archdruid"
            }
        ]
    },
    {
        "id": "subclasses",
        "title": "Published Subclasses"
    }
] } as const;

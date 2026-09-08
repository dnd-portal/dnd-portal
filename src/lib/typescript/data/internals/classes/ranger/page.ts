/*
	Location: src/lib/typescript/data/internals/classes/ranger.ts
	Use: Central Ranger class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/ranger",
    "img": {
        "href": "/icons/white/classes/ranger.svg",
        "alt": "A stylized Ranger class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-female-s.webp",
                    "m": "/images/classes/ranger/card-female-m.webp",
                    "l": "/images/classes/ranger/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-male-s.webp",
                    "m": "/images/classes/ranger/card-male-m.webp",
                    "l": "/images/classes/ranger/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-female-s.webp",
                    "m": "/images/classes/ranger/card-female-m.webp",
                    "l": "/images/classes/ranger/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-male-s.webp",
                    "m": "/images/classes/ranger/card-male-m.webp",
                    "l": "/images/classes/ranger/card-male-l.webp"
                }
            }
        }
    },
    "label": "Ranger",
    "title": "D&D Portal - Ranger",
    "subTitle": "Character class",
    "description": "A Dexterity- and Wisdom-based wilderness martial half caster with tracking, exploration, mobility, and subclass-driven combat tools.",
    "descriptions": {
        "short": "A Dexterity- and Wisdom-based wilderness martial half caster with tracking, exploration, mobility, and subclass-driven combat tools.",
        "medium": "A Dexterity- and Wisdom-based wilderness martial half caster with tracking, exploration, mobility, and subclass-driven combat tools.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "A "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.dexterity",
                    "label": "Dexterity"
                },
                {
                    "type": "text",
                    "text": "- and "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.wisdom",
                    "label": "Wisdom"
                },
                {
                    "type": "text",
                    "text": "-based wilderness martial half caster with tracking, exploration, mobility, and subclass-driven combat tools."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "Mechanically, the Ranger is built around "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.dexterity",
                    "label": "Dexterity"
                },
                {
                    "type": "text",
                    "text": " and "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.wisdom",
                    "label": "Wisdom"
                },
                {
                    "type": "text",
                    "text": ", uses a d10 Hit Die, and follows the progression table below for proficiency bonus, class features, and class-specific resources."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "This page collects the Ranger core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Spellcasting note: "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.wisdom",
                    "label": "Wisdom"
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
                    "text": " half-caster progression beginning at 2nd level."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.page"
    },
    "tags": [
        "ranger",
        "class",
        "2014"
    ]
});
export const content = { "source": "https://dnd5e.wikidot.com/ranger",
"startingEquipment": [
    {
        "label": "Option 1",
        "instruction": "Choose one",
        "choices": [
            [
                {
                    "type": "text",
                    "text": "Scale mail"
                }
            ],
            [
                {
                    "type": "text",
                    "text": "leather armor"
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
                    "text": "Two shortswords"
                }
            ],
            [
                {
                    "type": "text",
                    "text": "two simple melee weapons"
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
        "label": "Longbow and 20 arrows",
        "items": [
            [
                {
                    "type": "text",
                    "text": "Longbow and 20 arrows"
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
                                "path": "internals.rules.abilityScores.dexterity",
                                "label": "Dexterity"
                            },
                            {
                                "type": "text",
                                "text": " and "
                            },
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
                                "path": "internals.rules.abilityScores.dexterity",
                                "label": "Dexterity"
                            },
                            {
                                "type": "text",
                                "text": " 13 and "
                            },
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
                                "text": "; known-"
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " half-caster progression beginning at 2nd level."
                            }
                        ]
                    },
                    {
                        "label": "Suggested tags",
                        "value": [
                            {
                                "type": "text",
                                "text": "ranged, melee, explorer, primal, half-caster"
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
                                "path": "internals.rules.abilityScores.dexterity",
                                "label": "Dexterity"
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
                                "path": "internals.rules.skills.stealth",
                                "label": "Stealth"
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
                        "text": "As a ranger, you gain the following class features."
                    }
                ]
            }
        ]
    },
    "featureSections": [
        {
            "id": "favored-enemy",
            "title": "Favored Enemy",
            "subtitle": "Levels 1, improves at 6, 14",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Choose creature types to track and recall information about with advantage, gaining related languages."
                        }
                    ]
                }
            ]
        },
        {
            "id": "favored-foe",
            "title": "Favored Foe (Optional)",
            "subtitle": "Levels 1, replaces Favored Enemy",
            "optional": true,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Mark a hit target with "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.concentration",
                            "label": "concentration"
                        },
                        {
                            "type": "text",
                            "text": " and deal extra damage once per turn, scaling by level."
                        }
                    ]
                }
            ]
        },
        {
            "id": "natural-explorer",
            "title": "Natural Explorer",
            "subtitle": "Levels 1, improves at 6, 10",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Choose favored terrain and gain extensive travel, tracking, foraging, and navigation benefits there."
                        }
                    ]
                }
            ]
        },
        {
            "id": "deft-explorer",
            "title": "Deft Explorer (Optional)",
            "subtitle": "Levels 1, 6, 10, replaces Natural Explorer",
            "optional": true,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Gain Canny expertise and languages, Roving "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.movement.speed",
                            "label": "speed"
                        },
                        {
                            "type": "text",
                            "text": " and movement modes, then Tireless "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.combat.hitPoints",
                            "label": "temporary hit points"
                        },
                        {
                            "type": "text",
                            "text": " and "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.conditions.exhaustion",
                            "label": "exhaustion"
                        },
                        {
                            "type": "text",
                            "text": " recovery."
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
                            "text": "Choose a ranger-compatible combat style, including Druidic Warrior."
                        }
                    ]
                }
            ]
        },
        {
            "id": "spellcasting",
            "title": "Spellcasting",
            "subtitle": "Level 2",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Learn ranger "
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
                            "text": " using the half-caster slot table."
                        }
                    ]
                }
            ]
        },
        {
            "id": "spellcasting-focus",
            "title": "Spellcasting Focus (Optional)",
            "subtitle": "Level 2",
            "optional": true,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Use a druidic focus for ranger "
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
            "id": "primeval-awareness",
            "title": "Primeval Awareness",
            "subtitle": "Level 3",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Spend a "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spell"
                        },
                        {
                            "type": "text",
                            "text": " slot to sense the presence of specified supernatural creature types across a wide area."
                        }
                    ]
                }
            ]
        },
        {
            "id": "primal-awareness",
            "title": "Primal Awareness (Optional)",
            "subtitle": "Levels 3, replaces Primeval Awareness",
            "optional": true,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Learn and cast a level-based set of "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.skills.nature",
                            "label": "nature"
                        },
                        {
                            "type": "text",
                            "text": "-detection "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spells"
                        },
                        {
                            "type": "text",
                            "text": " once per "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.rests.longRest",
                            "label": "long rest"
                        },
                        {
                            "type": "text",
                            "text": " without slots."
                        }
                    ]
                }
            ]
        },
        {
            "id": "ranger-conclave",
            "title": "Ranger Conclave",
            "subtitle": "Levels 3, 7, 11, 15",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Choose a subclass that defines the ranger\u2019s specialist hunt and combat features."
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
            "id": "land-s-stride",
            "title": "Land\u2019s Stride",
            "subtitle": "Level 8",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Ignore nonmagical "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.movement.difficultTerrain",
                            "label": "difficult terrain"
                        },
                        {
                            "type": "text",
                            "text": " and resist magical plants that impede movement."
                        }
                    ]
                }
            ]
        },
        {
            "id": "hide-in-plain-sight",
            "title": "Hide in Plain Sight",
            "subtitle": "Level 10",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Create camouflage for a large "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.skills.stealth",
                            "label": "Stealth"
                        },
                        {
                            "type": "text",
                            "text": " bonus while remaining still."
                        }
                    ]
                }
            ]
        },
        {
            "id": "nature-s-veil",
            "title": "Nature\u2019s Veil (Optional)",
            "subtitle": "Levels 10, replaces Hide in Plain Sight",
            "optional": true,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Become "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.conditions.invisible",
                            "label": "invisible"
                        },
                        {
                            "type": "text",
                            "text": " until the start of the next turn as a "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.actions.bonusAction",
                            "label": "bonus action"
                        },
                        {
                            "type": "text",
                            "text": ", proficiency-bonus times per "
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
            "id": "vanish",
            "title": "Vanish",
            "subtitle": "Level 14",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "link",
                            "path": "internals.rules.actions.hide",
                            "label": "Hide"
                        },
                        {
                            "type": "text",
                            "text": " as a "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.actions.bonusAction",
                            "label": "bonus action"
                        },
                        {
                            "type": "text",
                            "text": " and avoid nonmagical tracking."
                        }
                    ]
                }
            ]
        },
        {
            "id": "feral-senses",
            "title": "Feral Senses",
            "subtitle": "Level 18",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Remove disadvantage against unseen targets and locate nearby "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.conditions.invisible",
                            "label": "invisible"
                        },
                        {
                            "type": "text",
                            "text": " creatures."
                        }
                    ]
                }
            ]
        },
        {
            "id": "foe-slayer",
            "title": "Foe Slayer",
            "subtitle": "Level 20",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Once each turn add "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.abilityScores.wisdom",
                            "label": "Wisdom"
                        },
                        {
                            "type": "text",
                            "text": " modifier to an attack or "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.combat.damageRoll",
                            "label": "damage roll"
                        },
                        {
                            "type": "text",
                            "text": " against a favored enemy."
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
                                "page": "internals.classes.ranger.subclasses.beastMaster",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.ranger.subclasses.feyWanderer",
                                "source": "Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.ranger.subclasses.gloomStalker",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.ranger.subclasses.horizonWalker",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.ranger.subclasses.hunter",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.ranger.subclasses.monsterSlayer",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.ranger.subclasses.swarmkeeper",
                                "source": "Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.ranger.subclasses.drakewarden",
                                "source": "Fizban\u2019s Treasury of Dragons"
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
        "title": "Ranger Progression"
    },
    {
        "id": "class-features",
        "title": "Class Features",
        "children": [
            {
                "id": "favored-enemy",
                "title": "Favored Enemy"
            },
            {
                "id": "favored-foe",
                "title": "Favored Foe (Optional)"
            },
            {
                "id": "natural-explorer",
                "title": "Natural Explorer"
            },
            {
                "id": "deft-explorer",
                "title": "Deft Explorer (Optional)"
            },
            {
                "id": "fighting-style",
                "title": "Fighting Style"
            },
            {
                "id": "spellcasting",
                "title": "Spellcasting"
            },
            {
                "id": "spellcasting-focus",
                "title": "Spellcasting Focus (Optional)"
            },
            {
                "id": "primeval-awareness",
                "title": "Primeval Awareness"
            },
            {
                "id": "primal-awareness",
                "title": "Primal Awareness (Optional)"
            },
            {
                "id": "ranger-conclave",
                "title": "Ranger Conclave"
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
                "id": "land-s-stride",
                "title": "Land\u2019s Stride"
            },
            {
                "id": "hide-in-plain-sight",
                "title": "Hide in Plain Sight"
            },
            {
                "id": "nature-s-veil",
                "title": "Nature\u2019s Veil (Optional)"
            },
            {
                "id": "vanish",
                "title": "Vanish"
            },
            {
                "id": "feral-senses",
                "title": "Feral Senses"
            },
            {
                "id": "foe-slayer",
                "title": "Foe Slayer"
            }
        ]
    },
    {
        "id": "subclasses",
        "title": "Published Subclasses"
    }
] } as const;

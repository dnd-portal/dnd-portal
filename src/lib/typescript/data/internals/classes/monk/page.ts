/*
	Location: src/lib/typescript/data/internals/classes/monk.ts
	Use: Central Monk class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/monk",
    "img": {
        "href": "/icons/white/classes/monk.svg",
        "alt": "A stylized Monk class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-male-s.webp",
                    "m": "/images/classes/monk/card-male-m.webp",
                    "l": "/images/classes/monk/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-male-s.webp",
                    "m": "/images/classes/monk/card-male-m.webp",
                    "l": "/images/classes/monk/card-male-l.webp"
                }
            }
        }
    },
    "label": "Monk",
    "title": "D&D Portal - Monk",
    "subTitle": "Character class",
    "description": "A Dexterity- and Wisdom-based mobile martial artist who spends ki for extra attacks, defense, control, healing, and supernatural movement.",
    "descriptions": {
        "short": "A Dexterity- and Wisdom-based mobile martial artist who spends ki for extra attacks, defense, control, healing, and supernatural movement.",
        "medium": "A Dexterity- and Wisdom-based mobile martial artist who spends ki for extra attacks, defense, control, healing, and supernatural movement.",
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
                    "text": "-based mobile martial artist who spends ki for extra attacks, defense, control, healing, and supernatural movement."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "Mechanically, the Monk is built around "
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
                    "text": ", uses a d8 Hit Die, and follows the progression table below for proficiency bonus, class features, and class-specific resources."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "This page collects the Monk core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Use the linked rules terms for quick hover context without leaving the class page."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.page"
    },
    "tags": [
        "monk",
        "class",
        "2014"
    ]
});
export const content = { "source": "https://dnd5e.wikidot.com/monk",
"startingEquipment": [
    {
        "label": "Option 1",
        "instruction": "Choose one",
        "choices": [
            [
                {
                    "type": "text",
                    "text": "Shortsword"
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
        "label": "10 darts",
        "items": [
            [
                {
                    "type": "text",
                    "text": "10 darts"
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
                                "type": "text",
                                "text": "None by default; some traditions spend ki to reproduce "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": "-like effects."
                            }
                        ]
                    },
                    {
                        "label": "Suggested tags",
                        "value": [
                            {
                                "type": "text",
                                "text": "melee, mobility, control, skirmisher, ki"
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
                                "type": "text",
                                "text": "None"
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
                                "text": ", shortswords"
                            }
                        ]
                    },
                    {
                        "label": "Tools",
                        "value": [
                            {
                                "type": "text",
                                "text": "One artisan\u2019s tool or musical instrument"
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
                                "path": "internals.rules.skills.religion",
                                "label": "Religion"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.stealth",
                                "label": "Stealth"
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
                        "text": "As a monk, you gain the following class features."
                    }
                ]
            }
        ]
    },
    "featureSections": [
        {
            "id": "unarmored-defense",
            "title": "Unarmored Defense",
            "subtitle": "Level 1",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "While unarmored and without a "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.equipment.shields",
                            "label": "shield"
                        },
                        {
                            "type": "text",
                            "text": ", "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.combat.armorClass",
                            "label": "AC"
                        },
                        {
                            "type": "text",
                            "text": " equals 10 + "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.abilityScores.dexterity",
                            "label": "Dexterity"
                        },
                        {
                            "type": "text",
                            "text": " modifier + "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.abilityScores.wisdom",
                            "label": "Wisdom"
                        },
                        {
                            "type": "text",
                            "text": " modifier."
                        }
                    ]
                }
            ]
        },
        {
            "id": "martial-arts",
            "title": "Martial Arts",
            "subtitle": "Level 1",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Use "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.abilityScores.dexterity",
                            "label": "Dexterity"
                        },
                        {
                            "type": "text",
                            "text": " for monk weapons and unarmed strikes, scale damage with the Martial Arts die, and make a bonus unarmed strike after attacking."
                        }
                    ]
                }
            ]
        },
        {
            "id": "ki",
            "title": "Ki",
            "subtitle": "Level 2",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Spend ki points, recovered on a short or "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.rests.longRest",
                            "label": "long rest"
                        },
                        {
                            "type": "text",
                            "text": ", on Flurry of Blows, Patient Defense, Step of the Wind, and later features."
                        }
                    ]
                }
            ]
        },
        {
            "id": "unarmored-movement",
            "title": "Unarmored Movement",
            "subtitle": "Levels 2, improves through 18",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Gain "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.movement.speed",
                            "label": "speed"
                        },
                        {
                            "type": "text",
                            "text": " while unarmored; at 9th level move across vertical surfaces and liquids during the turn."
                        }
                    ]
                }
            ]
        },
        {
            "id": "dedicated-weapon",
            "title": "Dedicated Weapon (Optional)",
            "subtitle": "Level 2",
            "optional": true,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Designate a proficient non-heavy, non-special weapon as a monk weapon after a rest."
                        }
                    ]
                }
            ]
        },
        {
            "id": "monastic-tradition",
            "title": "Monastic Tradition",
            "subtitle": "Levels 3, 6, 11, 17",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Choose a subclass that defines the monk\u2019s ki techniques."
                        }
                    ]
                }
            ]
        },
        {
            "id": "deflect-missiles",
            "title": "Deflect Missiles",
            "subtitle": "Level 3",
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
                            "text": " to reduce ranged weapon damage and potentially throw the missile back."
                        }
                    ]
                }
            ]
        },
        {
            "id": "ki-fueled-attack",
            "title": "Ki-Fueled Attack (Optional)",
            "subtitle": "Level 3",
            "optional": true,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "After spending ki during the action, make a bonus unarmed or monk-weapon attack."
                        }
                    ]
                }
            ]
        },
        {
            "id": "slow-fall",
            "title": "Slow Fall",
            "subtitle": "Level 4",
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
                            "text": " to reduce "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.movement.falling",
                            "label": "falling"
                        },
                        {
                            "type": "text",
                            "text": " damage by five times monk level."
                        }
                    ]
                }
            ]
        },
        {
            "id": "quickened-healing",
            "title": "Quickened Healing (Optional)",
            "subtitle": "Level 4",
            "optional": true,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Spend ki and an action to recover "
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
            "id": "stunning-strike",
            "title": "Stunning Strike",
            "subtitle": "Level 5",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Spend ki after a melee hit to "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.damageTypes.force",
                            "label": "force"
                        },
                        {
                            "type": "text",
                            "text": " a "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.abilityScores.constitution",
                            "label": "Constitution"
                        },
                        {
                            "type": "text",
                            "text": " save or stun the target."
                        }
                    ]
                }
            ]
        },
        {
            "id": "focused-aim",
            "title": "Focused Aim (Optional)",
            "subtitle": "Level 5",
            "optional": true,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Spend ki after missing to increase the "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.combat.attackRoll",
                            "label": "attack roll"
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
            "id": "ki-empowered-strikes",
            "title": "Ki-Empowered Strikes",
            "subtitle": "Level 6",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Unarmed strikes count as magical for resistance and immunity."
                        }
                    ]
                }
            ]
        },
        {
            "id": "evasion",
            "title": "Evasion",
            "subtitle": "Level 7",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Take no damage on successful "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.abilityScores.dexterity",
                            "label": "Dexterity"
                        },
                        {
                            "type": "text",
                            "text": " saves for half damage, and half on failure."
                        }
                    ]
                }
            ]
        },
        {
            "id": "stillness-of-mind",
            "title": "Stillness of Mind",
            "subtitle": "Level 7",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Use an action to end charm or fear on yourself."
                        }
                    ]
                }
            ]
        },
        {
            "id": "purity-of-body",
            "title": "Purity of Body",
            "subtitle": "Level 10",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Become immune to disease and "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.damageTypes.poison",
                            "label": "poison"
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
            "id": "tongue-of-the-sun-and-moon",
            "title": "Tongue of the Sun and Moon",
            "subtitle": "Level 13",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Understand all spoken languages and be understood by language-using creatures."
                        }
                    ]
                }
            ]
        },
        {
            "id": "diamond-soul",
            "title": "Diamond Soul",
            "subtitle": "Level 14",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Gain proficiency in all "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.d20Tests.savingThrow",
                            "label": "saving throws"
                        },
                        {
                            "type": "text",
                            "text": " and spend ki to reroll failures."
                        }
                    ]
                }
            ]
        },
        {
            "id": "timeless-body",
            "title": "Timeless Body",
            "subtitle": "Level 15",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Avoid frailty from age and no longer require food or water."
                        }
                    ]
                }
            ]
        },
        {
            "id": "empty-body",
            "title": "Empty Body",
            "subtitle": "Level 18",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Spend ki for invisibility and broad damage resistance, or later cast Astral Projection on yourself."
                        }
                    ]
                }
            ]
        },
        {
            "id": "perfect-self",
            "title": "Perfect Self",
            "subtitle": "Level 20",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Regain 4 ki when "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.combat.initiativeRoll",
                            "label": "initiative"
                        },
                        {
                            "type": "text",
                            "text": " is rolled with none remaining."
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
                                "page": "internals.classes.monk.subclasses.astralSelf",
                                "source": "Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.monk.subclasses.ascendantDragon",
                                "source": "Fizban\u2019s Treasury of Dragons"
                            },
                            {
                                "page": "internals.classes.monk.subclasses.drunkenMaster",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.monk.subclasses.fourElements",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.monk.subclasses.kensei",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.monk.subclasses.longDeath",
                                "source": "Sword Coast Adventurer\u2019s Guide"
                            },
                            {
                                "page": "internals.classes.monk.subclasses.mercy",
                                "source": "Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.monk.subclasses.openHand",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.monk.subclasses.shadow",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.monk.subclasses.sunSoul",
                                "source": "Sword Coast Adventurer\u2019s Guide; Xanathar\u2019s Guide to Everything"
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
        "title": "Monk Progression"
    },
    {
        "id": "class-features",
        "title": "Class Features",
        "children": [
            {
                "id": "unarmored-defense",
                "title": "Unarmored Defense"
            },
            {
                "id": "martial-arts",
                "title": "Martial Arts"
            },
            {
                "id": "ki",
                "title": "Ki"
            },
            {
                "id": "unarmored-movement",
                "title": "Unarmored Movement"
            },
            {
                "id": "dedicated-weapon",
                "title": "Dedicated Weapon (Optional)"
            },
            {
                "id": "monastic-tradition",
                "title": "Monastic Tradition"
            },
            {
                "id": "deflect-missiles",
                "title": "Deflect Missiles"
            },
            {
                "id": "ki-fueled-attack",
                "title": "Ki-Fueled Attack (Optional)"
            },
            {
                "id": "slow-fall",
                "title": "Slow Fall"
            },
            {
                "id": "quickened-healing",
                "title": "Quickened Healing (Optional)"
            },
            {
                "id": "extra-attack",
                "title": "Extra Attack"
            },
            {
                "id": "stunning-strike",
                "title": "Stunning Strike"
            },
            {
                "id": "focused-aim",
                "title": "Focused Aim (Optional)"
            },
            {
                "id": "ki-empowered-strikes",
                "title": "Ki-Empowered Strikes"
            },
            {
                "id": "evasion",
                "title": "Evasion"
            },
            {
                "id": "stillness-of-mind",
                "title": "Stillness of Mind"
            },
            {
                "id": "purity-of-body",
                "title": "Purity of Body"
            },
            {
                "id": "tongue-of-the-sun-and-moon",
                "title": "Tongue of the Sun and Moon"
            },
            {
                "id": "diamond-soul",
                "title": "Diamond Soul"
            },
            {
                "id": "timeless-body",
                "title": "Timeless Body"
            },
            {
                "id": "empty-body",
                "title": "Empty Body"
            },
            {
                "id": "perfect-self",
                "title": "Perfect Self"
            }
        ]
    },
    {
        "id": "subclasses",
        "title": "Published Subclasses"
    }
] } as const;

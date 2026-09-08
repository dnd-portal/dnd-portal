/*
	Location: src/lib/typescript/data/internals/classes/paladin.ts
	Use: Central Paladin class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/paladin",
    "img": {
        "href": "/icons/white/classes/paladin.svg",
        "alt": "A stylized Paladin class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-female-s.webp",
                    "m": "/images/classes/paladin/card-female-m.webp",
                    "l": "/images/classes/paladin/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-male-s.webp",
                    "m": "/images/classes/paladin/card-male-m.webp",
                    "l": "/images/classes/paladin/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-female-s.webp",
                    "m": "/images/classes/paladin/card-female-m.webp",
                    "l": "/images/classes/paladin/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-male-s.webp",
                    "m": "/images/classes/paladin/card-male-m.webp",
                    "l": "/images/classes/paladin/card-male-l.webp"
                }
            }
        }
    },
    "label": "Paladin",
    "title": "D&D Portal - Paladin",
    "subTitle": "Character class",
    "description": "A Strength- and Charisma-based armored half caster who combines healing, protective auras, divine smites, and an oath-defined capstone.",
    "descriptions": {
        "short": "A Strength- and Charisma-based armored half caster who combines healing, protective auras, divine smites, and an oath-defined capstone.",
        "medium": "A Strength- and Charisma-based armored half caster who combines healing, protective auras, divine smites, and an oath-defined capstone.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "A "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.strength",
                    "label": "Strength"
                },
                {
                    "type": "text",
                    "text": "- and "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.charisma",
                    "label": "Charisma"
                },
                {
                    "type": "text",
                    "text": "-based armored half caster who combines healing, protective auras, divine smites, and an oath-defined capstone."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "Mechanically, the Paladin is built around "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.strength",
                    "label": "Strength"
                },
                {
                    "type": "text",
                    "text": " and "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.charisma",
                    "label": "Charisma"
                },
                {
                    "type": "text",
                    "text": ", uses a d10 Hit Die, and follows the progression table below for proficiency bonus, class features, and class-specific resources."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "This page collects the Paladin core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Spellcasting note: "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.charisma",
                    "label": "Charisma"
                },
                {
                    "type": "text",
                    "text": "; prepared half-caster progression beginning at 2nd level."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.page"
    },
    "tags": [
        "paladin",
        "class",
        "2014"
    ]
});
export const content = { "source": "https://dnd5e.wikidot.com/paladin",
"startingEquipment": [
    {
        "label": "Option 1",
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
        "label": "Option 2",
        "instruction": "Choose one",
        "choices": [
            [
                {
                    "type": "text",
                    "text": "Five "
                },
                {
                    "type": "link",
                    "path": "internals.equipment.javelins",
                    "label": "javelins"
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
        "label": "Option 3",
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
        "label": "Chain mail and holy symbol",
        "items": [
            [
                {
                    "type": "text",
                    "text": "Chain mail and holy symbol"
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
                                "text": " and "
                            },
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
                                "path": "internals.rules.abilityScores.strength",
                                "label": "Strength"
                            },
                            {
                                "type": "text",
                                "text": " 13 and "
                            },
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
                                "text": "; prepared half-caster progression beginning at 2nd level."
                            }
                        ]
                    },
                    {
                        "label": "Suggested tags",
                        "value": [
                            {
                                "type": "text",
                                "text": "tank, melee, divine, support, burst-damage"
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
                                "path": "internals.rules.skills.intimidation",
                                "label": "Intimidation"
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
                        "text": "As a paladin, you gain the following class features."
                    }
                ]
            }
        ]
    },
    "featureSections": [
        {
            "id": "divine-sense",
            "title": "Divine Sense",
            "subtitle": "Level 1",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Detect nearby celestials, fiends, undead, and consecrated or desecrated places a limited number of times per "
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
            "id": "lay-on-hands",
            "title": "Lay on Hands",
            "subtitle": "Level 1",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Spend a healing pool equal to five times paladin level to restore "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.combat.hitPoints",
                            "label": "hit points"
                        },
                        {
                            "type": "text",
                            "text": " or cure disease and "
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
                            "text": "Choose a paladin-compatible persistent combat style."
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
                            "text": "Prepare paladin "
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
                            "path": "internals.rules.abilityScores.charisma",
                            "label": "Charisma"
                        },
                        {
                            "type": "text",
                            "text": " using the half-caster slot table and a holy symbol as a focus."
                        }
                    ]
                }
            ]
        },
        {
            "id": "divine-smite",
            "title": "Divine Smite",
            "subtitle": "Level 2",
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
                            "text": " slot after a melee hit to add "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.damageTypes.radiant",
                            "label": "radiant"
                        },
                        {
                            "type": "text",
                            "text": " damage, with an extra die against fiends and undead."
                        }
                    ]
                }
            ]
        },
        {
            "id": "divine-health",
            "title": "Divine Health",
            "subtitle": "Level 3",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Become immune to disease."
                        }
                    ]
                }
            ]
        },
        {
            "id": "sacred-oath",
            "title": "Sacred Oath",
            "subtitle": "Levels 3, 7, 15, 20",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Choose a subclass that grants oath "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spells"
                        },
                        {
                            "type": "text",
                            "text": ", Channel Divinity options, and an oath capstone."
                        }
                    ]
                }
            ]
        },
        {
            "id": "harness-divine-power",
            "title": "Harness Divine Power (Optional)",
            "subtitle": "Level 3",
            "optional": true,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Exchange Channel Divinity for a limited-level "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spell"
                        },
                        {
                            "type": "text",
                            "text": " slot, with uses increasing by level."
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
            "id": "aura-of-protection",
            "title": "Aura of Protection",
            "subtitle": "Levels 6, range improves at 18",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Add "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.abilityScores.charisma",
                            "label": "Charisma"
                        },
                        {
                            "type": "text",
                            "text": " modifier to "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.d20Tests.savingThrow",
                            "label": "saving throws"
                        },
                        {
                            "type": "text",
                            "text": " for the paladin and nearby allies."
                        }
                    ]
                }
            ]
        },
        {
            "id": "aura-of-courage",
            "title": "Aura of Courage",
            "subtitle": "Levels 10, range improves at 18",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Prevent fear for the paladin and nearby allies while conscious."
                        }
                    ]
                }
            ]
        },
        {
            "id": "improved-divine-smite",
            "title": "Improved Divine Smite",
            "subtitle": "Level 11",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Every melee weapon hit deals an additional 1d8 "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.damageTypes.radiant",
                            "label": "radiant"
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
            "id": "cleansing-touch",
            "title": "Cleansing Touch",
            "subtitle": "Level 14",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "End one "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spell"
                        },
                        {
                            "type": "text",
                            "text": " on yourself or a willing touched creature a limited number of times per "
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
                                "page": "internals.classes.paladin.subclasses.ancients",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.paladin.subclasses.conquest",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.paladin.subclasses.crown",
                                "source": "Sword Coast Adventurer\u2019s Guide"
                            },
                            {
                                "page": "internals.classes.paladin.subclasses.devotion",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.paladin.subclasses.glory",
                                "source": "Mythic Odysseys of Theros; Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.paladin.subclasses.redemption",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.paladin.subclasses.vengeance",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.paladin.subclasses.watchers",
                                "source": "Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.paladin.subclasses.oathbreaker",
                                "source": "Dungeon Master\u2019s Guide"
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
        "title": "Paladin Progression"
    },
    {
        "id": "class-features",
        "title": "Class Features",
        "children": [
            {
                "id": "divine-sense",
                "title": "Divine Sense"
            },
            {
                "id": "lay-on-hands",
                "title": "Lay on Hands"
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
                "id": "divine-smite",
                "title": "Divine Smite"
            },
            {
                "id": "divine-health",
                "title": "Divine Health"
            },
            {
                "id": "sacred-oath",
                "title": "Sacred Oath"
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
                "id": "extra-attack",
                "title": "Extra Attack"
            },
            {
                "id": "aura-of-protection",
                "title": "Aura of Protection"
            },
            {
                "id": "aura-of-courage",
                "title": "Aura of Courage"
            },
            {
                "id": "improved-divine-smite",
                "title": "Improved Divine Smite"
            },
            {
                "id": "cleansing-touch",
                "title": "Cleansing Touch"
            }
        ]
    },
    {
        "id": "subclasses",
        "title": "Published Subclasses"
    }
] } as const;

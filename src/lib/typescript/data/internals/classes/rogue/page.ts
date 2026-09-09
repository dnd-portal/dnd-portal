/*
	Location: src/lib/typescript/data/internals/classes/rogue.ts
	Use: Central Rogue class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/rogue",
    "img": {
        "href": "/icons/white/classes/rogue.svg",
        "alt": "A stylized Rogue class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-female-s.webp",
                    "m": "/images/classes/rogue/card-female-m.webp",
                    "l": "/images/classes/rogue/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-male-s.webp",
                    "m": "/images/classes/rogue/card-male-m.webp",
                    "l": "/images/classes/rogue/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-female-s.webp",
                    "m": "/images/classes/rogue/card-female-m.webp",
                    "l": "/images/classes/rogue/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-male-s.webp",
                    "m": "/images/classes/rogue/card-male-m.webp",
                    "l": "/images/classes/rogue/card-male-l.webp"
                }
            }
        }
    },
    "label": "Rogue",
    "title": "D&D Portal - Rogue",
    "subTitle": "Character class",
    "description": "A Dexterity-based skill specialist who deals precision Sneak Attack damage, controls positioning with bonus actions, and gains exceptionally reliable expertise.",
    "descriptions": {
        "short": "A Dexterity-based skill specialist who deals precision Sneak Attack damage, controls positioning with bonus actions, and gains exceptionally reliable expertise.",
        "medium": "A Dexterity-based skill specialist who deals precision Sneak Attack damage, controls positioning with bonus actions, and gains exceptionally reliable expertise.",
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
                    "text": "-based skill specialist who deals precision Sneak Attack damage, controls positioning with bonus actions, and gains exceptionally reliable expertise."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "Mechanically, the Rogue is built around "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.dexterity",
                    "label": "Dexterity"
                },
                {
                    "type": "text",
                    "text": ", uses a d8 Hit Die, and follows the progression table below for proficiency bonus, class features, and class-specific resources."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "This page collects the Rogue core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Use the linked rules terms for quick hover context without leaving the class page."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.page"
    },
    "tags": [
        "rogue",
        "class",
        "2014"
    ]
});
export const content = { "source": "https://dnd5e.wikidot.com/rogue",
"startingEquipment": [
    {
        "label": "Option 1",
        "instruction": "Choose one",
        "choices": [
            [
                {
                    "type": "text",
                    "text": "Rapier"
                }
            ],
            [
                {
                    "type": "text",
                    "text": "shortsword"
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
                    "text": "Shortbow and arrows"
                }
            ],
            [
                {
                    "type": "text",
                    "text": "shortsword"
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
                    "text": "Burglar\u2019s, dungeoneer\u2019s,"
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
        "label": "Leather armor, two daggers, thieves\u2019 tools",
        "items": [
            [
                {
                    "type": "text",
                    "text": "Leather armor, two daggers, thieves\u2019 tools"
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
                                "text": " 13"
                            }
                        ]
                    },
                    {
                        "label": "Spellcasting",
                        "value": [
                            {
                                "type": "text",
                                "text": "None by default; Arcane Trickster adds "
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
                                "type": "link",
                                "path": "internals.rules.skills.stealth",
                                "label": "stealth"
                            },
                            {
                                "type": "text",
                                "text": ", skills, mobility, burst-damage, utility"
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
                            },
                            {
                                "type": "text",
                                "text": ", hand crossbows, longswords, rapiers, shortswords"
                            }
                        ]
                    },
                    {
                        "label": "Tools",
                        "value": [
                            {
                                "type": "text",
                                "text": "Thieves\u2019 tools"
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
                                "text": "Choose four: "
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
                                "path": "internals.rules.skills.investigation",
                                "label": "Investigation"
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
                                "path": "internals.rules.skills.performance",
                                "label": "Performance"
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
                                "path": "internals.rules.skills.sleightOfHand",
                                "label": "Sleight of Hand"
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
                        "text": "As a rogue, you gain the following class features."
                    }
                ]
            }
        ]
    },
    "featureSections": [
        {
            "id": "expertise",
            "title": "Expertise",
            "subtitle": "Levels 1, 6",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Double proficiency for selected skills or thieves\u2019 tools."
                        }
                    ]
                }
            ]
        },
        {
            "id": "sneak-attack",
            "title": "Sneak Attack",
            "subtitle": "Levels 1, scales every two levels",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Once per turn, add precision damage with a finesse or ranged weapon when advantage or an adjacent ally creates an opening."
                        }
                    ]
                }
            ]
        },
        {
            "id": "thieves-cant",
            "title": "Thieves\u2019 Cant",
            "subtitle": "Level 1",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Communicate through coded speech and secret signs."
                        }
                    ]
                }
            ]
        },
        {
            "id": "cunning-action",
            "title": "Cunning Action",
            "subtitle": "Level 2",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "link",
                            "path": "internals.rules.actions.dash",
                            "label": "Dash"
                        },
                        {
                            "type": "text",
                            "text": ", "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.actions.disengage",
                            "label": "Disengage"
                        },
                        {
                            "type": "text",
                            "text": ", or "
                        },
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
                            "text": "."
                        }
                    ]
                }
            ]
        },
        {
            "id": "roguish-archetype",
            "title": "Roguish Archetype",
            "subtitle": "Levels 3, 9, 13, 17",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Choose a subclass defining the rogue\u2019s specialist methods."
                        }
                    ]
                }
            ]
        },
        {
            "id": "steady-aim",
            "title": "Steady Aim (Optional)",
            "subtitle": "Level 3",
            "optional": true,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Trade movement for advantage on the next attack this turn."
                        }
                    ]
                }
            ]
        },
        {
            "id": "ability-score-improvement",
            "title": "Ability Score Improvement",
            "subtitle": "Levels 4, 8, 10, 12, 16, 19",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Increase ability scores or take a feat; Rogues receive an extra "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.abbreviations.asi",
                            "label": "ASI"
                        },
                        {
                            "type": "text",
                            "text": " at level 10."
                        }
                    ]
                }
            ]
        },
        {
            "id": "uncanny-dodge",
            "title": "Uncanny Dodge",
            "subtitle": "Level 5",
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
                            "text": " to halve damage from a visible attacker\u2019s hit."
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
                            "text": "Avoid or reduce damage from "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.abilityScores.dexterity",
                            "label": "Dexterity"
                        },
                        {
                            "type": "text",
                            "text": "-save area effects."
                        }
                    ]
                }
            ]
        },
        {
            "id": "reliable-talent",
            "title": "Reliable Talent",
            "subtitle": "Level 11",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Treat proficiency-based d20 rolls of 9 or lower as 10."
                        }
                    ]
                }
            ]
        },
        {
            "id": "blindsense",
            "title": "Blindsense",
            "subtitle": "Level 14",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Detect hidden or "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.conditions.invisible",
                            "label": "invisible"
                        },
                        {
                            "type": "text",
                            "text": " creatures within 10 feet while able to hear."
                        }
                    ]
                }
            ]
        },
        {
            "id": "slippery-mind",
            "title": "Slippery Mind",
            "subtitle": "Level 15",
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
                            "path": "internals.rules.abilityScores.wisdom",
                            "label": "Wisdom"
                        },
                        {
                            "type": "text",
                            "text": " "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.d20Tests.savingThrow",
                            "label": "saving throw"
                        },
                        {
                            "type": "text",
                            "text": " proficiency."
                        }
                    ]
                }
            ]
        },
        {
            "id": "elusive",
            "title": "Elusive",
            "subtitle": "Level 18",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "link",
                            "path": "internals.rules.combat.attackRoll",
                            "label": "Attack rolls"
                        },
                        {
                            "type": "text",
                            "text": " cannot have advantage against you while not "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.conditions.incapacitated",
                            "label": "incapacitated"
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
            "id": "stroke-of-luck",
            "title": "Stroke of Luck",
            "subtitle": "Level 20",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Turn one missed attack into a hit or one failed "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.d20Tests.abilityCheck",
                            "label": "ability check"
                        },
                        {
                            "type": "text",
                            "text": " into a natural 20 result per short or "
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
                                "page": "internals.classes.rogue.subclasses.arcaneTrickster",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.rogue.subclasses.assassin",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.rogue.subclasses.inquisitive",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.rogue.subclasses.mastermind",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.rogue.subclasses.phantom",
                                "source": "Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.rogue.subclasses.scout",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.rogue.subclasses.soulknife",
                                "source": "Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.rogue.subclasses.swashbuckler",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.rogue.subclasses.thief",
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
        "title": "Rogue Progression"
    },
    {
        "id": "class-features",
        "title": "Class Features",
        "children": [
            {
                "id": "expertise",
                "title": "Expertise"
            },
            {
                "id": "sneak-attack",
                "title": "Sneak Attack"
            },
            {
                "id": "thieves-cant",
                "title": "Thieves\u2019 Cant"
            },
            {
                "id": "cunning-action",
                "title": "Cunning Action"
            },
            {
                "id": "roguish-archetype",
                "title": "Roguish Archetype"
            },
            {
                "id": "steady-aim",
                "title": "Steady Aim (Optional)"
            },
            {
                "id": "ability-score-improvement",
                "title": "Ability Score Improvement"
            },
            {
                "id": "uncanny-dodge",
                "title": "Uncanny Dodge"
            },
            {
                "id": "evasion",
                "title": "Evasion"
            },
            {
                "id": "reliable-talent",
                "title": "Reliable Talent"
            },
            {
                "id": "blindsense",
                "title": "Blindsense"
            },
            {
                "id": "slippery-mind",
                "title": "Slippery Mind"
            },
            {
                "id": "elusive",
                "title": "Elusive"
            },
            {
                "id": "stroke-of-luck",
                "title": "Stroke of Luck"
            }
        ]
    },
    {
        "id": "subclasses",
        "title": "Published Subclasses"
    }
] } as const;

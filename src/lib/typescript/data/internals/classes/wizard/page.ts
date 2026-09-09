/*
	Location: src/lib/typescript/data/internals/classes/wizard.ts
	Use: Central Wizard class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/wizard",
    "img": {
        "href": "/icons/white/classes/wizard.svg",
        "alt": "A stylized Wizard class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-male-s.webp",
                    "m": "/images/classes/wizard/card-male-m.webp",
                    "l": "/images/classes/wizard/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-male-s.webp",
                    "m": "/images/classes/wizard/card-male-m.webp",
                    "l": "/images/classes/wizard/card-male-l.webp"
                }
            }
        }
    },
    "label": "Wizard",
    "title": "D&D Portal - Wizard",
    "subTitle": "Character class",
    "description": "An Intelligence-based prepared full caster with the largest spell-learning system, ritual flexibility, and subclass traditions focused on schools or specialist theories.",
    "descriptions": {
        "short": "An Intelligence-based prepared full caster with the largest spell-learning system, ritual flexibility, and subclass traditions focused on schools or specialist theories.",
        "medium": "An Intelligence-based prepared full caster with the largest spell-learning system, ritual flexibility, and subclass traditions focused on schools or specialist theories.",
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
                    "text": "-based prepared full caster with the largest "
                },
                {
                    "type": "link",
                    "path": "internals.rules.spellcasting.spells",
                    "label": "spell"
                },
                {
                    "type": "text",
                    "text": "-learning system, ritual flexibility, and subclass traditions focused on schools or specialist theories."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "Mechanically, the Wizard is built around "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.intelligence",
                    "label": "Intelligence"
                },
                {
                    "type": "text",
                    "text": ", uses a d6 Hit Die, and follows the progression table below for proficiency bonus, class features, and class-specific resources."
                }
            ],
            [
                {
                    "type": "text",
                    "text": "This page collects the Wizard core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Spellcasting note: "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.intelligence",
                    "label": "Intelligence"
                },
                {
                    "type": "text",
                    "text": "; prepared full-caster progression using a spellbook."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.page"
    },
    "tags": [
        "wizard",
        "class",
        "2014"
    ]
});
export const content = { "source": "https://dnd5e.wikidot.com/wizard",
"startingEquipment": [
    {
        "label": "Option 1",
        "instruction": "Choose one",
        "choices": [
            [
                {
                    "type": "text",
                    "text": "Quarterstaff"
                }
            ],
            [
                {
                    "type": "text",
                    "text": "dagger"
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
                    "text": "explorer\u2019s pack"
                }
            ]
        ]
    },
    {
        "label": "Spellbook",
        "items": [
            [
                {
                    "type": "text",
                    "text": "Spellbook"
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
                                "text": "; prepared full-caster progression using a spellbook."
                            }
                        ]
                    },
                    {
                        "label": "Suggested tags",
                        "value": [
                            {
                                "type": "text",
                                "text": "spellcasting, arcane, control, utility, rituals"
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
                        "text": "As a wizard, you gain the following class features."
                    }
                ]
            }
        ]
    },
    "featureSections": [
        {
            "id": "spellcasting-and-spellbook",
            "title": "Spellcasting and Spellbook",
            "subtitle": "Level 1",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Begin with six 1st-level "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spells"
                        },
                        {
                            "type": "text",
                            "text": ", prepare "
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
                            "path": "internals.rules.abilityScores.intelligence",
                            "label": "Intelligence"
                        },
                        {
                            "type": "text",
                            "text": ", add two wizard "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spells"
                        },
                        {
                            "type": "text",
                            "text": " per level, copy discovered "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spells"
                        },
                        {
                            "type": "text",
                            "text": ", and cast unprepared rituals directly from the spellbook."
                        }
                    ]
                }
            ]
        },
        {
            "id": "arcane-recovery",
            "title": "Arcane Recovery",
            "subtitle": "Level 1",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Once per day after a "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.rests.shortRest",
                            "label": "short rest"
                        },
                        {
                            "type": "text",
                            "text": ", recover "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spell"
                        },
                        {
                            "type": "text",
                            "text": " slots with combined levels up to half wizard level, with no slot above 5th."
                        }
                    ]
                }
            ]
        },
        {
            "id": "arcane-tradition",
            "title": "Arcane Tradition",
            "subtitle": "Levels 2, 6, 10, 14",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Choose a school or specialist practice that shapes "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spell"
                        },
                        {
                            "type": "text",
                            "text": " efficiency and unique magical features."
                        }
                    ]
                }
            ]
        },
        {
            "id": "cantrip-formulas",
            "title": "Cantrip Formulas (Optional)",
            "subtitle": "Level 3",
            "optional": true,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Replace one wizard "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.cantrips",
                            "label": "cantrip"
                        },
                        {
                            "type": "text",
                            "text": " after a "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.rests.longRest",
                            "label": "long rest"
                        },
                        {
                            "type": "text",
                            "text": " by consulting formulas in the spellbook."
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
            "id": "spell-mastery",
            "title": "Spell Mastery",
            "subtitle": "Level 18",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Choose one 1st-level and one 2nd-level wizard "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spell"
                        },
                        {
                            "type": "text",
                            "text": " to cast at their lowest level without slots while prepared."
                        }
                    ]
                }
            ]
        },
        {
            "id": "signature-spells",
            "title": "Signature Spells",
            "subtitle": "Level 20",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Choose two 3rd-level wizard "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spells"
                        },
                        {
                            "type": "text",
                            "text": " that are always prepared and each cast once per short or "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.rests.longRest",
                            "label": "long rest"
                        },
                        {
                            "type": "text",
                            "text": " without a slot."
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
                                "page": "internals.classes.wizard.subclasses.abjuration",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.wizard.subclasses.bladesinging",
                                "source": "Sword Coast Adventurer\u2019s Guide; Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.wizard.subclasses.chronurgy",
                                "source": "Explorer\u2019s Guide to Wildemount"
                            },
                            {
                                "page": "internals.classes.wizard.subclasses.conjuration",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.wizard.subclasses.divination",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.wizard.subclasses.enchantment",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.wizard.subclasses.evocation",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.wizard.subclasses.graviturgy",
                                "source": "Explorer\u2019s Guide to Wildemount"
                            },
                            {
                                "page": "internals.classes.wizard.subclasses.illusion",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.wizard.subclasses.necromancy",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.wizard.subclasses.orderOfScribes",
                                "source": "Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.wizard.subclasses.transmutation",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.wizard.subclasses.warMagic",
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
        "title": "Wizard Progression"
    },
    {
        "id": "class-features",
        "title": "Class Features",
        "children": [
            {
                "id": "spellcasting-and-spellbook",
                "title": "Spellcasting and Spellbook"
            },
            {
                "id": "arcane-recovery",
                "title": "Arcane Recovery"
            },
            {
                "id": "arcane-tradition",
                "title": "Arcane Tradition"
            },
            {
                "id": "cantrip-formulas",
                "title": "Cantrip Formulas (Optional)"
            },
            {
                "id": "ability-score-improvement",
                "title": "Ability Score Improvement"
            },
            {
                "id": "spell-mastery",
                "title": "Spell Mastery"
            },
            {
                "id": "signature-spells",
                "title": "Signature Spells"
            }
        ]
    },
    {
        "id": "subclasses",
        "title": "Published Subclasses"
    }
] } as const;

import { content } from './page';

export const features = {
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
                                "text": "spellcasting, support, face, skills, control"
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
                                "text": "Three musical instruments"
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
                                "text": "Choose any three skills"
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
                        "text": "As a bard, you gain the following class features."
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
                            "text": "Cast known bard "
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
                            "text": " using the full-caster slot table; musical instruments can serve as a focus and known ritual "
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
            "id": "bardic-inspiration",
            "title": "Bardic Inspiration",
            "subtitle": "Levels 1, die improves at 5, 10, 15",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Grant another creature an inspiration die that can improve an "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.d20Tests.abilityCheck",
                            "label": "ability check"
                        },
                        {
                            "type": "text",
                            "text": ", "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.combat.attackRoll",
                            "label": "attack roll"
                        },
                        {
                            "type": "text",
                            "text": ", or "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.d20Tests.savingThrow",
                            "label": "saving throw"
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
            "id": "jack-of-all-trades",
            "title": "Jack of All Trades",
            "subtitle": "Level 2",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Add half proficiency to "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.d20Tests.abilityCheck",
                            "label": "ability checks"
                        },
                        {
                            "type": "text",
                            "text": " that do not already use proficiency."
                        }
                    ]
                }
            ]
        },
        {
            "id": "song-of-rest",
            "title": "Song of Rest",
            "subtitle": "Levels 2, improves at 9, 13, 17",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Increase healing gained by allies spending Hit Dice during a "
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
        },
        {
            "id": "magical-inspiration",
            "title": "Magical Inspiration (Optional)",
            "subtitle": "Level 2",
            "optional": true,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Allow Bardic Inspiration to improve one damage or healing roll of a "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spell"
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
            "id": "bard-college",
            "title": "Bard College",
            "subtitle": "Levels 3, 6, 14",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Choose a subclass that determines the bard\u2019s specialist identity."
                        }
                    ]
                }
            ]
        },
        {
            "id": "expertise",
            "title": "Expertise",
            "subtitle": "Levels 3, 10",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Double proficiency for two skills at each listed level."
                        }
                    ]
                }
            ]
        },
        {
            "id": "font-of-inspiration",
            "title": "Font of Inspiration",
            "subtitle": "Level 5",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Regain Bardic Inspiration on a short or "
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
            "id": "countercharm",
            "title": "Countercharm",
            "subtitle": "Level 6",
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
                            "path": "internals.rules.skills.performance",
                            "label": "performance"
                        },
                        {
                            "type": "text",
                            "text": " to grant nearby allies advantage against charm and fear saves."
                        }
                    ]
                }
            ]
        },
        {
            "id": "magical-secrets",
            "title": "Magical Secrets",
            "subtitle": "Levels 10, 14, 18",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Learn "
                        },
                        {
                            "type": "link",
                            "path": "internals.rules.spellcasting.spells",
                            "label": "spells"
                        },
                        {
                            "type": "text",
                            "text": " from any class list and treat them as bard "
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
            "id": "superior-inspiration",
            "title": "Superior Inspiration",
            "subtitle": "Level 20",
            "optional": false,
            "blocks": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Regain one Bardic Inspiration use when "
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
                                "page": "internals.classes.bard.subclasses.creation",
                                "source": "Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.bard.subclasses.eloquence",
                                "source": "Mythic Odysseys of Theros; Tasha\u2019s Cauldron of Everything"
                            },
                            {
                                "page": "internals.classes.bard.subclasses.glamour",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.bard.subclasses.lore",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.bard.subclasses.spirits",
                                "source": "Van Richten\u2019s Guide to Ravenloft"
                            },
                            {
                                "page": "internals.classes.bard.subclasses.swords",
                                "source": "Xanathar\u2019s Guide to Everything"
                            },
                            {
                                "page": "internals.classes.bard.subclasses.valor",
                                "source": "Player\u2019s Handbook"
                            },
                            {
                                "page": "internals.classes.bard.subclasses.whispers",
                                "source": "Xanathar\u2019s Guide to Everything"
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

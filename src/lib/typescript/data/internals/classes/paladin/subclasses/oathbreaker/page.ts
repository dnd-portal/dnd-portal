/*
	Location: src/lib/typescript/data/internals/classes/paladin.ts
	Use: Central Paladin class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/paladin/oathbreaker",
    "img": {
        "href": "/icons/white/classes/paladin.svg",
        "alt": "A stylized Paladin class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Oathbreaker Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-female-s.webp",
                    "m": "/images/classes/paladin/card-female-m.webp",
                    "l": "/images/classes/paladin/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Oathbreaker Paladin class portrait.",
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
                "alt": "A female Oathbreaker Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-female-s.webp",
                    "m": "/images/classes/paladin/card-female-m.webp",
                    "l": "/images/classes/paladin/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Oathbreaker Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-male-s.webp",
                    "m": "/images/classes/paladin/card-male-m.webp",
                    "l": "/images/classes/paladin/card-male-l.webp"
                }
            }
        }
    },
    "label": "Oathbreaker",
    "title": "D&D Portal - Oathbreaker",
    "subTitle": "Paladin subclass",
    "description": "Necrotic damage, undead control, and fear; a villainous DM option.",
    "descriptions": {
        "short": "Necrotic damage, undead control, and fear; a villainous DM option.",
        "medium": "Oathbreaker: Necrotic damage, undead control, and fear; a villainous DM option.",
        "long": [
            [
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.necrotic",
                    "label": "Necrotic"
                },
                {
                    "type": "text",
                    "text": " damage, undead control, and fear; a villainous DM option."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.paladin.page"
    },
    "tags": [
        "paladin",
        "subclass",
        "oathbreaker"
    ],
    "content": {
        "source": "Dungeon Master\u2019s Guide",
        "featureSections": [
            {
                "id": "oath-spells-channel-divinity-control-undead-dreadful-aspect",
                "title": "Oath Spells; Channel Divinity: Control Undead, Dreadful Aspect",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain always-prepared dark "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": ", seize control of an undead creature, or frighten nearby creatures."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "aura-of-hate",
                "title": "Aura of Hate",
                "subtitle": "7th level",
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
                                "text": " to melee weapon damage dealt by you and nearby fiends and undead."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "supernatural-resistance",
                "title": "Supernatural Resistance",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain resistance to nonmagical "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.bludgeoning",
                                "label": "bludgeoning"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.piercing",
                                "label": "piercing"
                            },
                            {
                                "type": "text",
                                "text": ", and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.slashing",
                                "label": "slashing"
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
                "id": "dread-lord",
                "title": "Dread Lord",
                "subtitle": "20th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Create an aura of supernatural darkness that frightens and damages enemies and grants a bonus-action shadow attack."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "oath-spells-channel-divinity-control-undead-dreadful-aspect",
                "title": "Oath Spells; Channel Divinity: Control Undead, Dreadful Aspect"
            },
            {
                "id": "aura-of-hate",
                "title": "Aura of Hate"
            },
            {
                "id": "supernatural-resistance",
                "title": "Supernatural Resistance"
            },
            {
                "id": "dread-lord",
                "title": "Dread Lord"
            }
        ]
    }
});
export default page;

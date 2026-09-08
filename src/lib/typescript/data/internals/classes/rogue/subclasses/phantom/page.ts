/*
	Location: src/lib/typescript/data/internals/classes/rogue.ts
	Use: Central Rogue class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/rogue/phantom",
    "img": {
        "href": "/icons/white/classes/rogue.svg",
        "alt": "A stylized Rogue class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Phantom Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-female-s.webp",
                    "m": "/images/classes/rogue/card-female-m.webp",
                    "l": "/images/classes/rogue/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Phantom Rogue class portrait.",
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
                "alt": "A female Phantom Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-female-s.webp",
                    "m": "/images/classes/rogue/card-female-m.webp",
                    "l": "/images/classes/rogue/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Phantom Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-male-s.webp",
                    "m": "/images/classes/rogue/card-male-m.webp",
                    "l": "/images/classes/rogue/card-male-l.webp"
                }
            }
        }
    },
    "label": "Phantom",
    "title": "D&D Portal - Phantom",
    "subTitle": "Rogue subclass",
    "description": "Borrow skills from spirits and spread necrotic damage.",
    "descriptions": {
        "short": "Borrow skills from spirits and spread necrotic damage.",
        "medium": "Phantom: Borrow skills from spirits and spread necrotic damage.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Borrow skills from spirits and spread "
                },
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.necrotic",
                    "label": "necrotic"
                },
                {
                    "type": "text",
                    "text": " damage."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.rogue.page"
    },
    "tags": [
        "rogue",
        "subclass",
        "phantom"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "whispers-of-the-dead-wails-from-the-grave",
                "title": "Whispers of the Dead; Wails from the Grave",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Borrow a skill or tool proficiency from a spirit and spread part of Sneak Attack as "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.necrotic",
                                "label": "necrotic"
                            },
                            {
                                "type": "text",
                                "text": " damage to a second creature."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "tokens-of-the-departed",
                "title": "Tokens of the Departed",
                "subtitle": "9th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Create soul trinkets when creatures die and use them for stronger Wails, advantage on death and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.constitution",
                                "label": "Constitution"
                            },
                            {
                                "type": "text",
                                "text": " saves, or questions to the dead."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "ghost-walk",
                "title": "Ghost Walk",
                "subtitle": "13th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Assume a spectral form with flight, passage through creatures and objects, and attacks made against you at disadvantage."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "death-s-friend",
                "title": "Death\u2019s Friend",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Deal Wails from the Grave damage to both the secondary target and the original target and gain a soul trinket after rests."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "whispers-of-the-dead-wails-from-the-grave",
                "title": "Whispers of the Dead; Wails from the Grave"
            },
            {
                "id": "tokens-of-the-departed",
                "title": "Tokens of the Departed"
            },
            {
                "id": "ghost-walk",
                "title": "Ghost Walk"
            },
            {
                "id": "death-s-friend",
                "title": "Death\u2019s Friend"
            }
        ]
    }
});
export default page;

/*
	Location: src/lib/typescript/data/internals/classes/warlock.ts
	Use: Central Warlock class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/warlock/great-old-one",
    "img": {
        "href": "/icons/white/classes/warlock.svg",
        "alt": "A stylized Warlock class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Great Old One Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-female-s.webp",
                    "m": "/images/classes/warlock/card-female-m.webp",
                    "l": "/images/classes/warlock/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Great Old One Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-male-s.webp",
                    "m": "/images/classes/warlock/card-male-m.webp",
                    "l": "/images/classes/warlock/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Great Old One Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-female-s.webp",
                    "m": "/images/classes/warlock/card-female-m.webp",
                    "l": "/images/classes/warlock/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Great Old One Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-male-s.webp",
                    "m": "/images/classes/warlock/card-male-m.webp",
                    "l": "/images/classes/warlock/card-male-l.webp"
                }
            }
        }
    },
    "label": "Great Old One",
    "title": "D&D Portal - Great Old One",
    "subTitle": "Warlock subclass",
    "description": "Telepathy, mental defenses, and psychic domination.",
    "descriptions": {
        "short": "Telepathy, mental defenses, and psychic domination.",
        "medium": "Great Old One: Telepathy, mental defenses, and psychic domination.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Telepathy, mental defenses, and "
                },
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.psychic",
                    "label": "psychic"
                },
                {
                    "type": "text",
                    "text": " domination."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.warlock.page"
    },
    "tags": [
        "warlock",
        "subclass",
        "great-old-one"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "expanded-spell-list-awakened-mind",
                "title": "Expanded Spell List; Awakened Mind",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain aberrant "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " options and communicate telepathically with nearby creatures."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "entropic-ward",
                "title": "Entropic Ward",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Impose disadvantage on an attack against you and gain advantage on your next attack against that creature if it misses."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "thought-shield",
                "title": "Thought Shield",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Protect thoughts, gain "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.psychic",
                                "label": "psychic"
                            },
                            {
                                "type": "text",
                                "text": " resistance, and reflect "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.psychic",
                                "label": "psychic"
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
                "id": "create-thrall",
                "title": "Create Thrall",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Charm an "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.incapacitated",
                                "label": "incapacitated"
                            },
                            {
                                "type": "text",
                                "text": " humanoid indefinitely and communicate with it telepathically across any distance on the same plane."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "expanded-spell-list-awakened-mind",
                "title": "Expanded Spell List; Awakened Mind"
            },
            {
                "id": "entropic-ward",
                "title": "Entropic Ward"
            },
            {
                "id": "thought-shield",
                "title": "Thought Shield"
            },
            {
                "id": "create-thrall",
                "title": "Create Thrall"
            }
        ]
    }
});
export default page;

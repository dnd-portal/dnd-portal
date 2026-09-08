/*
	Location: src/lib/typescript/data/internals/classes/bard.ts
	Use: Central Bard class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/bard/whispers",
    "img": {
        "href": "/icons/white/classes/bard.svg",
        "alt": "A stylized Bard class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Whispers Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-female-s.webp",
                    "m": "/images/classes/bard/card-female-m.webp",
                    "l": "/images/classes/bard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Whispers Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-male-s.webp",
                    "m": "/images/classes/bard/card-male-m.webp",
                    "l": "/images/classes/bard/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Whispers Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-female-s.webp",
                    "m": "/images/classes/bard/card-female-m.webp",
                    "l": "/images/classes/bard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Whispers Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-male-s.webp",
                    "m": "/images/classes/bard/card-male-m.webp",
                    "l": "/images/classes/bard/card-male-l.webp"
                }
            }
        }
    },
    "label": "Whispers",
    "title": "D&D Portal - Whispers",
    "subTitle": "Bard subclass",
    "description": "Psychic strikes, fear, and stolen identities.",
    "descriptions": {
        "short": "Psychic strikes, fear, and stolen identities.",
        "medium": "Whispers: Psychic strikes, fear, and stolen identities.",
        "long": [
            [
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.psychic",
                    "label": "Psychic"
                },
                {
                    "type": "text",
                    "text": " strikes, fear, and stolen identities."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.bard.page"
    },
    "tags": [
        "bard",
        "subclass",
        "whispers"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "psychic-blades-words-of-terror",
                "title": "Psychic Blades; Words of Terror",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Spend Bardic Inspiration to add "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.psychic",
                                "label": "psychic"
                            },
                            {
                                "type": "text",
                                "text": " damage to a weapon hit, and use private conversation to frighten a humanoid."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "mantle-of-whispers",
                "title": "Mantle of Whispers",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Capture the shadow of a dead humanoid and later assume its appearance and surface memories."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "shadow-lore",
                "title": "Shadow Lore",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Whisper a magical threat that charms a creature into believing you know and can reveal its darkest secret."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "psychic-blades-words-of-terror",
                "title": "Psychic Blades; Words of Terror"
            },
            {
                "id": "mantle-of-whispers",
                "title": "Mantle of Whispers"
            },
            {
                "id": "shadow-lore",
                "title": "Shadow Lore"
            }
        ]
    }
});
export default page;

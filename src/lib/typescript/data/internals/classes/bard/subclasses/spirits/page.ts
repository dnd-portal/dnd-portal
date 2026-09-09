/*
	Location: src/lib/typescript/data/internals/classes/bard.ts
	Use: Central Bard class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/bard/spirits",
    "img": {
        "href": "/icons/white/classes/bard.svg",
        "alt": "A stylized Bard class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Spirits Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-female-s.webp",
                    "m": "/images/classes/bard/card-female-m.webp",
                    "l": "/images/classes/bard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Spirits Bard class portrait.",
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
                "alt": "A female Spirits Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-female-s.webp",
                    "m": "/images/classes/bard/card-female-m.webp",
                    "l": "/images/classes/bard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Spirits Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-male-s.webp",
                    "m": "/images/classes/bard/card-male-m.webp",
                    "l": "/images/classes/bard/card-male-l.webp"
                }
            }
        }
    },
    "label": "Spirits",
    "title": "D&D Portal - Spirits",
    "subTitle": "Bard subclass",
    "description": "Channel random tales and spiritual guidance through a focus.",
    "descriptions": {
        "short": "Channel random tales and spiritual guidance through a focus.",
        "medium": "Spirits: Channel random tales and spiritual guidance through a focus.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Channel random tales and spiritual guidance through a focus."
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
        "spirits"
    ],
    "content": {
        "source": "Van Richten\u2019s Guide to Ravenloft",
        "featureSections": [
            {
                "id": "guiding-whispers-spiritual-focus-tales-from-beyond",
                "title": "Guiding Whispers; Spiritual Focus; Tales from Beyond",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain Guidance at range, cast through a spiritual focus, and spend Bardic Inspiration to roll a random spirit tale with a distinct effect."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "spirit-session",
                "title": "Spirit Session",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Conduct a ritual with allies to temporarily learn a divination or necromancy "
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
                "id": "mystical-connection",
                "title": "Mystical Connection",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "When rolling on Tales from Beyond, roll twice and choose either result."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "guiding-whispers-spiritual-focus-tales-from-beyond",
                "title": "Guiding Whispers; Spiritual Focus; Tales from Beyond"
            },
            {
                "id": "spirit-session",
                "title": "Spirit Session"
            },
            {
                "id": "mystical-connection",
                "title": "Mystical Connection"
            }
        ]
    }
});
export default page;

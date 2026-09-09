/*
	Location: src/lib/typescript/data/internals/classes/ranger.ts
	Use: Central Ranger class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/ranger/drakewarden",
    "img": {
        "href": "/icons/white/classes/ranger.svg",
        "alt": "A stylized Ranger class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Drakewarden Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-female-s.webp",
                    "m": "/images/classes/ranger/card-female-m.webp",
                    "l": "/images/classes/ranger/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Drakewarden Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-male-s.webp",
                    "m": "/images/classes/ranger/card-male-m.webp",
                    "l": "/images/classes/ranger/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Drakewarden Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-female-s.webp",
                    "m": "/images/classes/ranger/card-female-m.webp",
                    "l": "/images/classes/ranger/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Drakewarden Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-male-s.webp",
                    "m": "/images/classes/ranger/card-male-m.webp",
                    "l": "/images/classes/ranger/card-male-l.webp"
                }
            }
        }
    },
    "label": "Drakewarden",
    "title": "D&D Portal - Drakewarden",
    "subTitle": "Ranger subclass",
    "description": "Bond with a scaling drake companion and gain draconic damage and flight.",
    "descriptions": {
        "short": "Bond with a scaling drake companion and gain draconic damage and flight.",
        "medium": "Drakewarden: Bond with a scaling drake companion and gain draconic damage and flight.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Bond with a scaling drake companion and gain draconic damage and flight."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.ranger.page"
    },
    "tags": [
        "ranger",
        "subclass",
        "drakewarden"
    ],
    "content": {
        "source": "Fizban\u2019s Treasury of Dragons",
        "featureSections": [
            {
                "id": "draconic-gift-drake-companion",
                "title": "Draconic Gift; Drake Companion",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Learn Draconic or another language, gain Thaumaturgy, and summon a scaling elemental drake companion."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "bond-of-fang-and-scale",
                "title": "Bond of Fang and Scale",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Improve the drake, gain elemental resistance, and allow it to serve as a mount."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "drake-s-breath",
                "title": "Drake\u2019s Breath",
                "subtitle": "11th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Exhale a damaging elemental cone, with limited free use and later scaling."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "perfected-bond",
                "title": "Perfected Bond",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "The drake grows Large, its bite improves, and you can use a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.reaction",
                                "label": "reaction"
                            },
                            {
                                "type": "text",
                                "text": " to gain resistance to one instance of damage."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "draconic-gift-drake-companion",
                "title": "Draconic Gift; Drake Companion"
            },
            {
                "id": "bond-of-fang-and-scale",
                "title": "Bond of Fang and Scale"
            },
            {
                "id": "drake-s-breath",
                "title": "Drake\u2019s Breath"
            },
            {
                "id": "perfected-bond",
                "title": "Perfected Bond"
            }
        ]
    }
});
export default page;

/*
	Location: src/lib/typescript/data/internals/classes/monk.ts
	Use: Central Monk class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/monk/kensei",
    "img": {
        "href": "/icons/white/classes/monk.svg",
        "alt": "A stylized Monk class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Kensei Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Kensei Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-male-s.webp",
                    "m": "/images/classes/monk/card-male-m.webp",
                    "l": "/images/classes/monk/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Kensei Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Kensei Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-male-s.webp",
                    "m": "/images/classes/monk/card-male-m.webp",
                    "l": "/images/classes/monk/card-male-l.webp"
                }
            }
        }
    },
    "label": "Kensei",
    "title": "D&D Portal - Kensei",
    "subTitle": "Monk subclass",
    "description": "Master selected weapons and enhance them with ki.",
    "descriptions": {
        "short": "Master selected weapons and enhance them with ki.",
        "medium": "Kensei: Master selected weapons and enhance them with ki.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Master selected weapons and enhance them with ki."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.monk.page"
    },
    "tags": [
        "monk",
        "subclass",
        "kensei"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "path-of-the-kensei",
                "title": "Path of the Kensei",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Choose kensei weapons and gain Agile Parry, ranged bonus damage, artistic tool training, and magical kensei weapon attacks."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "one-with-the-blade",
                "title": "One with the Blade",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Kensei weapons count as magical and can spend ki to add martial-arts damage to one hit."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "sharpen-the-blade",
                "title": "Sharpen the Blade",
                "subtitle": "11th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Spend ki to grant a nonmagical kensei weapon a temporary attack and damage bonus."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "unerring-accuracy",
                "title": "Unerring Accuracy",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Reroll one missed monk-weapon attack on each turn."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "path-of-the-kensei",
                "title": "Path of the Kensei"
            },
            {
                "id": "one-with-the-blade",
                "title": "One with the Blade"
            },
            {
                "id": "sharpen-the-blade",
                "title": "Sharpen the Blade"
            },
            {
                "id": "unerring-accuracy",
                "title": "Unerring Accuracy"
            }
        ]
    }
});
export default page;

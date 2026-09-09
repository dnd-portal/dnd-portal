/*
	Location: src/lib/typescript/data/internals/classes/monk.ts
	Use: Central Monk class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/monk/ascendant-dragon",
    "img": {
        "href": "/icons/white/classes/monk.svg",
        "alt": "A stylized Monk class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Ascendant Dragon Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Ascendant Dragon Monk class portrait.",
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
                "alt": "A female Ascendant Dragon Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Ascendant Dragon Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-male-s.webp",
                    "m": "/images/classes/monk/card-male-m.webp",
                    "l": "/images/classes/monk/card-male-l.webp"
                }
            }
        }
    },
    "label": "Ascendant Dragon",
    "title": "D&D Portal - Ascendant Dragon",
    "subTitle": "Monk subclass",
    "description": "Elemental breath, wings, fear, and draconic resilience.",
    "descriptions": {
        "short": "Elemental breath, wings, fear, and draconic resilience.",
        "medium": "Ascendant Dragon: Elemental breath, wings, fear, and draconic resilience.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Elemental breath, wings, fear, and draconic resilience."
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
        "ascendant-dragon"
    ],
    "content": {
        "source": "Fizban\u2019s Treasury of Dragons",
        "featureSections": [
            {
                "id": "draconic-disciple-breath-of-the-dragon",
                "title": "Draconic Disciple; Breath of the Dragon",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Change unarmed damage to an elemental type, gain draconic social or language benefits, and replace attacks with a scaling breath weapon."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "wings-unfurled",
                "title": "Wings Unfurled",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "When using Step of the Wind, manifest spectral wings and fly until the end of the turn."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "aspect-of-the-wyrm",
                "title": "Aspect of the Wyrm",
                "subtitle": "11th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Create a draconic aura that causes fear or grants elemental resistance and can retaliate with elemental damage."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "ascendant-aspect",
                "title": "Ascendant Aspect",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Improve the aura and breath weapon and gain blindsight."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "draconic-disciple-breath-of-the-dragon",
                "title": "Draconic Disciple; Breath of the Dragon"
            },
            {
                "id": "wings-unfurled",
                "title": "Wings Unfurled"
            },
            {
                "id": "aspect-of-the-wyrm",
                "title": "Aspect of the Wyrm"
            },
            {
                "id": "ascendant-aspect",
                "title": "Ascendant Aspect"
            }
        ]
    }
});
export default page;

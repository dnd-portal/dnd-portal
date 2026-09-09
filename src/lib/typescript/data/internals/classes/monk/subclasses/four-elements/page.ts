/*
	Location: src/lib/typescript/data/internals/classes/monk.ts
	Use: Central Monk class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/monk/four-elements",
    "img": {
        "href": "/icons/white/classes/monk.svg",
        "alt": "A stylized Monk class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Four Elements Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Four Elements Monk class portrait.",
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
                "alt": "A female Four Elements Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Four Elements Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-male-s.webp",
                    "m": "/images/classes/monk/card-male-m.webp",
                    "l": "/images/classes/monk/card-male-l.webp"
                }
            }
        }
    },
    "label": "Four Elements",
    "title": "D&D Portal - Four Elements",
    "subTitle": "Monk subclass",
    "description": "Spend ki on elemental disciplines that emulate spells and techniques.",
    "descriptions": {
        "short": "Spend ki on elemental disciplines that emulate spells and techniques.",
        "medium": "Four Elements: Spend ki on elemental disciplines that emulate spells and techniques.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Spend ki on elemental disciplines that emulate "
                },
                {
                    "type": "link",
                    "path": "internals.rules.spellcasting.spells",
                    "label": "spells"
                },
                {
                    "type": "text",
                    "text": " and techniques."
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
        "four-elements"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "disciple-of-the-elements-elemental-disciplines",
                "title": "Disciple of the Elements; Elemental Disciplines",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Learn elemental disciplines powered by ki, beginning with Elemental Attunement and another choice."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "elemental-disciplines-progression-6th-level",
                "title": "Elemental Disciplines progression",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Learn another discipline and gain access to disciplines with higher ki costs and stronger "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " effects."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "elemental-disciplines-progression-11th-level",
                "title": "Elemental Disciplines progression",
                "subtitle": "11th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Learn another discipline and unlock more advanced elemental techniques."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "elemental-disciplines-progression-17th-level",
                "title": "Elemental Disciplines progression",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Learn another discipline and unlock the highest-level elemental techniques."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "disciple-of-the-elements-elemental-disciplines",
                "title": "Disciple of the Elements; Elemental Disciplines"
            },
            {
                "id": "elemental-disciplines-progression-6th-level",
                "title": "Elemental Disciplines progression"
            },
            {
                "id": "elemental-disciplines-progression-11th-level",
                "title": "Elemental Disciplines progression"
            },
            {
                "id": "elemental-disciplines-progression-17th-level",
                "title": "Elemental Disciplines progression"
            }
        ]
    }
});
export default page;

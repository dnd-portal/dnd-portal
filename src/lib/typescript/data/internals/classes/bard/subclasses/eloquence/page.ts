/*
	Location: src/lib/typescript/data/internals/classes/bard.ts
	Use: Central Bard class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/bard/eloquence",
    "img": {
        "href": "/icons/white/classes/bard.svg",
        "alt": "A stylized Bard class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Eloquence Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-female-s.webp",
                    "m": "/images/classes/bard/card-female-m.webp",
                    "l": "/images/classes/bard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Eloquence Bard class portrait.",
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
                "alt": "A female Eloquence Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-female-s.webp",
                    "m": "/images/classes/bard/card-female-m.webp",
                    "l": "/images/classes/bard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Eloquence Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-male-s.webp",
                    "m": "/images/classes/bard/card-male-m.webp",
                    "l": "/images/classes/bard/card-male-l.webp"
                }
            }
        }
    },
    "label": "Eloquence",
    "title": "D&D Portal - Eloquence",
    "subTitle": "Bard subclass",
    "description": "Exceptional persuasion, reliable inspiration, and verbal debilitation.",
    "descriptions": {
        "short": "Exceptional persuasion, reliable inspiration, and verbal debilitation.",
        "medium": "Eloquence: Exceptional persuasion, reliable inspiration, and verbal debilitation.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Exceptional "
                },
                {
                    "type": "link",
                    "path": "internals.rules.skills.persuasion",
                    "label": "persuasion"
                },
                {
                    "type": "text",
                    "text": ", reliable inspiration, and verbal debilitation."
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
        "eloquence"
    ],
    "content": {
        "source": "Mythic Odysseys of Theros; Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "silver-tongue-unsettling-words",
                "title": "Silver Tongue; Unsettling Words",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Treat low "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.persuasion",
                                "label": "Persuasion"
                            },
                            {
                                "type": "text",
                                "text": " and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.deception",
                                "label": "Deception"
                            },
                            {
                                "type": "text",
                                "text": " rolls as 10, and spend Bardic Inspiration to reduce a creature\u2019s next "
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
                "id": "unfailing-inspiration-universal-speech",
                "title": "Unfailing Inspiration; Universal Speech",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "A failed use of Bardic Inspiration does not consume the die, and you can temporarily communicate with creatures regardless of language."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "infectious-inspiration",
                "title": "Infectious Inspiration",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "When a creature succeeds using your Bardic Inspiration, use a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.reaction",
                                "label": "reaction"
                            },
                            {
                                "type": "text",
                                "text": " to inspire another creature without spending another use."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "silver-tongue-unsettling-words",
                "title": "Silver Tongue; Unsettling Words"
            },
            {
                "id": "unfailing-inspiration-universal-speech",
                "title": "Unfailing Inspiration; Universal Speech"
            },
            {
                "id": "infectious-inspiration",
                "title": "Infectious Inspiration"
            }
        ]
    }
});
export default page;

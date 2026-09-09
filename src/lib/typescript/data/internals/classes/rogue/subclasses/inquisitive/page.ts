/*
	Location: src/lib/typescript/data/internals/classes/rogue.ts
	Use: Central Rogue class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/rogue/inquisitive",
    "img": {
        "href": "/icons/white/classes/rogue.svg",
        "alt": "A stylized Rogue class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Inquisitive Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-female-s.webp",
                    "m": "/images/classes/rogue/card-female-m.webp",
                    "l": "/images/classes/rogue/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Inquisitive Rogue class portrait.",
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
                "alt": "A female Inquisitive Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-female-s.webp",
                    "m": "/images/classes/rogue/card-female-m.webp",
                    "l": "/images/classes/rogue/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Inquisitive Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-male-s.webp",
                    "m": "/images/classes/rogue/card-male-m.webp",
                    "l": "/images/classes/rogue/card-male-l.webp"
                }
            }
        }
    },
    "label": "Inquisitive",
    "title": "D&D Portal - Inquisitive",
    "subTitle": "Rogue subclass",
    "description": "Read lies and weaknesses to enable precision attacks.",
    "descriptions": {
        "short": "Read lies and weaknesses to enable precision attacks.",
        "medium": "Inquisitive: Read lies and weaknesses to enable precision attacks.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Read lies and weaknesses to enable precision attacks."
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
        "inquisitive"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "ear-for-deceit-eye-for-detail-insightful-fighting",
                "title": "Ear for Deceit; Eye for Detail; Insightful Fighting",
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
                                "path": "internals.rules.skills.insight",
                                "label": "Insight"
                            },
                            {
                                "type": "text",
                                "text": " rolls against lies as 8, "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.search",
                                "label": "search"
                            },
                            {
                                "type": "text",
                                "text": " or detect clues as a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.bonusAction",
                                "label": "bonus action"
                            },
                            {
                                "type": "text",
                                "text": ", and use "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.insight",
                                "label": "Insight"
                            },
                            {
                                "type": "text",
                                "text": " versus "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.deception",
                                "label": "Deception"
                            },
                            {
                                "type": "text",
                                "text": " to enable Sneak Attack against one target."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "steady-eye",
                "title": "Steady Eye",
                "subtitle": "9th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain advantage on "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.perception",
                                "label": "Perception"
                            },
                            {
                                "type": "text",
                                "text": " and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.investigation",
                                "label": "Investigation"
                            },
                            {
                                "type": "text",
                                "text": " when moving no more than half "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.speed",
                                "label": "speed"
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
                "id": "unerring-eye",
                "title": "Unerring Eye",
                "subtitle": "13th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Use an action to sense illusions, shapechangers, and magic intended to deceive the senses."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "eye-for-weakness",
                "title": "Eye for Weakness",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Deal additional Sneak Attack damage against the target of Insightful Fighting."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "ear-for-deceit-eye-for-detail-insightful-fighting",
                "title": "Ear for Deceit; Eye for Detail; Insightful Fighting"
            },
            {
                "id": "steady-eye",
                "title": "Steady Eye"
            },
            {
                "id": "unerring-eye",
                "title": "Unerring Eye"
            },
            {
                "id": "eye-for-weakness",
                "title": "Eye for Weakness"
            }
        ]
    }
});
export default page;

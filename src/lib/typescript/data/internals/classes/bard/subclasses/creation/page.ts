/*
	Location: src/lib/typescript/data/internals/classes/bard.ts
	Use: Central Bard class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/bard/creation",
    "img": {
        "href": "/icons/white/classes/bard.svg",
        "alt": "A stylized Bard class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Creation Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-female-s.webp",
                    "m": "/images/classes/bard/card-female-m.webp",
                    "l": "/images/classes/bard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Creation Bard class portrait.",
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
                "alt": "A female Creation Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-female-s.webp",
                    "m": "/images/classes/bard/card-female-m.webp",
                    "l": "/images/classes/bard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Creation Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-male-s.webp",
                    "m": "/images/classes/bard/card-male-m.webp",
                    "l": "/images/classes/bard/card-male-l.webp"
                }
            }
        }
    },
    "label": "Creation",
    "title": "D&D Portal - Creation",
    "subTitle": "Bard subclass",
    "description": "Animate objects and amplify inspiration through the Song of Creation.",
    "descriptions": {
        "short": "Animate objects and amplify inspiration through the Song of Creation.",
        "medium": "Creation: Animate objects and amplify inspiration through the Song of Creation.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Animate objects and amplify inspiration through the Song of Creation."
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
        "creation"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "mote-of-potential-performance-of-creation",
                "title": "Mote of Potential; Performance of Creation",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Bardic Inspiration creates an extra mote effect based on how the die is used, and you can create a temporary nonmagical object through the Song of Creation."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "animating-performance",
                "title": "Animating Performance",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Animate a Large or smaller object as a Dancing Item companion that moves and fights under your direction."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "creative-crescendo",
                "title": "Creative Crescendo",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Create multiple objects at once and remove most value limits from "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.performance",
                                "label": "Performance"
                            },
                            {
                                "type": "text",
                                "text": " of Creation."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "mote-of-potential-performance-of-creation",
                "title": "Mote of Potential; Performance of Creation"
            },
            {
                "id": "animating-performance",
                "title": "Animating Performance"
            },
            {
                "id": "creative-crescendo",
                "title": "Creative Crescendo"
            }
        ]
    }
});
export default page;

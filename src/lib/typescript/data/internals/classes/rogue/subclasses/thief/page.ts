/*
	Location: src/lib/typescript/data/internals/classes/rogue.ts
	Use: Central Rogue class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/rogue/thief",
    "img": {
        "href": "/icons/white/classes/rogue.svg",
        "alt": "A stylized Rogue class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Thief Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-female-s.webp",
                    "m": "/images/classes/rogue/card-female-m.webp",
                    "l": "/images/classes/rogue/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Thief Rogue class portrait.",
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
                "alt": "A female Thief Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-female-s.webp",
                    "m": "/images/classes/rogue/card-female-m.webp",
                    "l": "/images/classes/rogue/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Thief Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-male-s.webp",
                    "m": "/images/classes/rogue/card-male-m.webp",
                    "l": "/images/classes/rogue/card-male-l.webp"
                }
            }
        }
    },
    "label": "Thief",
    "title": "D&D Portal - Thief",
    "subTitle": "Rogue subclass",
    "description": "Fast object use, climbing, stealth, and magic-item improvisation.",
    "descriptions": {
        "short": "Fast object use, climbing, stealth, and magic-item improvisation.",
        "medium": "Thief: Fast object use, climbing, stealth, and magic-item improvisation.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Fast object use, "
                },
                {
                    "type": "link",
                    "path": "internals.rules.movement.climbing",
                    "label": "climbing"
                },
                {
                    "type": "text",
                    "text": ", "
                },
                {
                    "type": "link",
                    "path": "internals.rules.skills.stealth",
                    "label": "stealth"
                },
                {
                    "type": "text",
                    "text": ", and magic-item improvisation."
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
        "thief"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "fast-hands-second-story-work",
                "title": "Fast Hands; Second-Story Work",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Use Cunning Action for "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.sleightOfHand",
                                "label": "Sleight of Hand"
                            },
                            {
                                "type": "text",
                                "text": ", thieves\u2019 tools, or Use an Object, and improve "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.climbing",
                                "label": "climbing"
                            },
                            {
                                "type": "text",
                                "text": " and running jumps."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "supreme-sneak",
                "title": "Supreme Sneak",
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
                                "path": "internals.rules.skills.stealth",
                                "label": "Stealth"
                            },
                            {
                                "type": "text",
                                "text": " while moving no more than half "
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
                "id": "use-magic-device",
                "title": "Use Magic Device",
                "subtitle": "13th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Ignore many class, species, and level restrictions on magic items and gain additional attunement flexibility."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "thief-s-reflexes",
                "title": "Thief\u2019s Reflexes",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Take two turns during the first round of combat."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "fast-hands-second-story-work",
                "title": "Fast Hands; Second-Story Work"
            },
            {
                "id": "supreme-sneak",
                "title": "Supreme Sneak"
            },
            {
                "id": "use-magic-device",
                "title": "Use Magic Device"
            },
            {
                "id": "thief-s-reflexes",
                "title": "Thief\u2019s Reflexes"
            }
        ]
    }
});
export default page;

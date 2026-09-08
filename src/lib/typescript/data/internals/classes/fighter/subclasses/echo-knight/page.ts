/*
	Location: src/lib/typescript/data/internals/classes/fighter.ts
	Use: Central Fighter class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/fighter/echo-knight",
    "img": {
        "href": "/icons/white/classes/fighter.svg",
        "alt": "A stylized Fighter class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Echo Knight Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Echo Knight Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-male-s.webp",
                    "m": "/images/classes/fighter/card-male-m.webp",
                    "l": "/images/classes/fighter/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Echo Knight Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Echo Knight Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-male-s.webp",
                    "m": "/images/classes/fighter/card-male-m.webp",
                    "l": "/images/classes/fighter/card-male-l.webp"
                }
            }
        }
    },
    "label": "Echo Knight",
    "title": "D&D Portal - Echo Knight",
    "subTitle": "Fighter subclass",
    "description": "Project an echo to extend movement, attacks, and battlefield presence.",
    "descriptions": {
        "short": "Project an echo to extend movement, attacks, and battlefield presence.",
        "medium": "Echo Knight: Project an echo to extend movement, attacks, and battlefield presence.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Project an echo to extend movement, attacks, and battlefield presence."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.fighter.page"
    },
    "tags": [
        "fighter",
        "subclass",
        "echo-knight"
    ],
    "content": {
        "source": "Explorer\u2019s Guide to Wildemount",
        "featureSections": [
            {
                "id": "manifest-echo-unleash-incarnation",
                "title": "Manifest Echo; Unleash Incarnation",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Create a magical echo, attack or make opportunity attacks from its space, swap places with it, and make limited extra attacks through it."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "echo-avatar",
                "title": "Echo Avatar",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Project your senses through the echo and send it far away for scouting."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "shadow-martyr",
                "title": "Shadow Martyr",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Move the echo into the path of an attack aimed at a nearby creature."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "reclaim-potential",
                "title": "Reclaim Potential",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "When the echo is destroyed, gain "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "temporary hit points"
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
                "id": "legion-of-one",
                "title": "Legion of One",
                "subtitle": "18th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Maintain two echoes simultaneously and recover an Unleash Incarnation use when rolling "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.initiativeRoll",
                                "label": "initiative"
                            },
                            {
                                "type": "text",
                                "text": " without one."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "manifest-echo-unleash-incarnation",
                "title": "Manifest Echo; Unleash Incarnation"
            },
            {
                "id": "echo-avatar",
                "title": "Echo Avatar"
            },
            {
                "id": "shadow-martyr",
                "title": "Shadow Martyr"
            },
            {
                "id": "reclaim-potential",
                "title": "Reclaim Potential"
            },
            {
                "id": "legion-of-one",
                "title": "Legion of One"
            }
        ]
    }
});
export default page;

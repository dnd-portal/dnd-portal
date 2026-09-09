/*
	Location: src/lib/typescript/data/internals/classes/ranger.ts
	Use: Central Ranger class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/ranger/hunter",
    "img": {
        "href": "/icons/white/classes/ranger.svg",
        "alt": "A stylized Ranger class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Hunter Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-female-s.webp",
                    "m": "/images/classes/ranger/card-female-m.webp",
                    "l": "/images/classes/ranger/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Hunter Ranger class portrait.",
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
                "alt": "A female Hunter Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-female-s.webp",
                    "m": "/images/classes/ranger/card-female-m.webp",
                    "l": "/images/classes/ranger/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Hunter Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-male-s.webp",
                    "m": "/images/classes/ranger/card-male-m.webp",
                    "l": "/images/classes/ranger/card-male-l.webp"
                }
            }
        }
    },
    "label": "Hunter",
    "title": "D&D Portal - Hunter",
    "subTitle": "Ranger subclass",
    "description": "Choose modular offense and defense options against common enemy patterns.",
    "descriptions": {
        "short": "Choose modular offense and defense options against common enemy patterns.",
        "medium": "Hunter: Choose modular offense and defense options against common enemy patterns.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Choose modular offense and defense options against common enemy patterns."
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
        "hunter"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "hunter-s-prey",
                "title": "Hunter\u2019s Prey",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Choose Colossus Slayer, Giant Killer, or Horde Breaker for a specialized offensive benefit."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "defensive-tactics",
                "title": "Defensive Tactics",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Choose Escape the Horde, Multiattack Defense, or Steel Will for a specialized defense."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "multiattack",
                "title": "Multiattack",
                "subtitle": "11th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Choose Volley for a ranged area attack or Whirlwind Attack for a melee area attack."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "superior-hunter-s-defense",
                "title": "Superior Hunter\u2019s Defense",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Choose Evasion, Stand Against the Tide, or Uncanny "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.dodge",
                                "label": "Dodge"
                            },
                            {
                                "type": "text",
                                "text": "."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "hunter-s-prey",
                "title": "Hunter\u2019s Prey"
            },
            {
                "id": "defensive-tactics",
                "title": "Defensive Tactics"
            },
            {
                "id": "multiattack",
                "title": "Multiattack"
            },
            {
                "id": "superior-hunter-s-defense",
                "title": "Superior Hunter\u2019s Defense"
            }
        ]
    }
});
export default page;

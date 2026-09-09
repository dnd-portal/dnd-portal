/*
	Location: src/lib/typescript/data/internals/classes/rogue.ts
	Use: Central Rogue class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/rogue/mastermind",
    "img": {
        "href": "/icons/white/classes/rogue.svg",
        "alt": "A stylized Rogue class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Mastermind Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-female-s.webp",
                    "m": "/images/classes/rogue/card-female-m.webp",
                    "l": "/images/classes/rogue/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Mastermind Rogue class portrait.",
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
                "alt": "A female Mastermind Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-female-s.webp",
                    "m": "/images/classes/rogue/card-female-m.webp",
                    "l": "/images/classes/rogue/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Mastermind Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-male-s.webp",
                    "m": "/images/classes/rogue/card-male-m.webp",
                    "l": "/images/classes/rogue/card-male-l.webp"
                }
            }
        }
    },
    "label": "Mastermind",
    "title": "D&D Portal - Mastermind",
    "subTitle": "Rogue subclass",
    "description": "Social infiltration and long-range tactical Help actions.",
    "descriptions": {
        "short": "Social infiltration and long-range tactical Help actions.",
        "medium": "Mastermind: Social infiltration and long-range tactical Help actions.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Social infiltration and long-range tactical "
                },
                {
                    "type": "link",
                    "path": "internals.rules.actions.help",
                    "label": "Help"
                },
                {
                    "type": "text",
                    "text": " actions."
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
        "mastermind"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "master-of-intrigue-master-of-tactics",
                "title": "Master of Intrigue; Master of Tactics",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain languages, tool proficiencies, mimicry, and the ability to "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.help",
                                "label": "Help"
                            },
                            {
                                "type": "text",
                                "text": " as a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.bonusAction",
                                "label": "bonus action"
                            },
                            {
                                "type": "text",
                                "text": " from range."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "insightful-manipulator",
                "title": "Insightful Manipulator",
                "subtitle": "9th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "After observing a creature, learn how selected mental and social statistics compare with your own."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "misdirection",
                "title": "Misdirection",
                "subtitle": "13th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Redirect an attack aimed at you to another creature providing cover."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "soul-of-deceit",
                "title": "Soul of Deceit",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "link",
                                "path": "internals.rules.equipment.shields",
                                "label": "Shield"
                            },
                            {
                                "type": "text",
                                "text": " thoughts from telepathy and make truth-forcing magic read your statements as truthful."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "master-of-intrigue-master-of-tactics",
                "title": "Master of Intrigue; Master of Tactics"
            },
            {
                "id": "insightful-manipulator",
                "title": "Insightful Manipulator"
            },
            {
                "id": "misdirection",
                "title": "Misdirection"
            },
            {
                "id": "soul-of-deceit",
                "title": "Soul of Deceit"
            }
        ]
    }
});
export default page;

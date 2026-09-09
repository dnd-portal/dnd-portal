/*
	Location: src/lib/typescript/data/internals/classes/warlock.ts
	Use: Central Warlock class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/warlock/archfey",
    "img": {
        "href": "/icons/white/classes/warlock.svg",
        "alt": "A stylized Warlock class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Archfey Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-female-s.webp",
                    "m": "/images/classes/warlock/card-female-m.webp",
                    "l": "/images/classes/warlock/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Archfey Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-male-s.webp",
                    "m": "/images/classes/warlock/card-male-m.webp",
                    "l": "/images/classes/warlock/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Archfey Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-female-s.webp",
                    "m": "/images/classes/warlock/card-female-m.webp",
                    "l": "/images/classes/warlock/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Archfey Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-male-s.webp",
                    "m": "/images/classes/warlock/card-male-m.webp",
                    "l": "/images/classes/warlock/card-male-l.webp"
                }
            }
        }
    },
    "label": "Archfey",
    "title": "D&D Portal - Archfey",
    "subTitle": "Warlock subclass",
    "description": "Charm, fear, illusion, and fey escape magic.",
    "descriptions": {
        "short": "Charm, fear, illusion, and fey escape magic.",
        "medium": "Archfey: Charm, fear, illusion, and fey escape magic.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Charm, fear, illusion, and fey escape magic."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.warlock.page"
    },
    "tags": [
        "warlock",
        "subclass",
        "archfey"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "expanded-spell-list-fey-presence",
                "title": "Expanded Spell List; Fey Presence",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain additional fey-themed "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " options and briefly charm or frighten creatures in a nearby cube."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "misty-escape",
                "title": "Misty Escape",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "When damaged, use a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.reaction",
                                "label": "reaction"
                            },
                            {
                                "type": "text",
                                "text": " to turn "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.invisible",
                                "label": "invisible"
                            },
                            {
                                "type": "text",
                                "text": " and teleport."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "beguiling-defenses",
                "title": "Beguiling Defenses",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Become immune to charm and reflect attempted charm back at the source."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "dark-delirium",
                "title": "Dark Delirium",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Charm or frighten one creature inside an illusory realm for up to a minute."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "expanded-spell-list-fey-presence",
                "title": "Expanded Spell List; Fey Presence"
            },
            {
                "id": "misty-escape",
                "title": "Misty Escape"
            },
            {
                "id": "beguiling-defenses",
                "title": "Beguiling Defenses"
            },
            {
                "id": "dark-delirium",
                "title": "Dark Delirium"
            }
        ]
    }
});
export default page;

/*
	Location: src/lib/typescript/data/internals/classes/warlock.ts
	Use: Central Warlock class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/warlock/genie",
    "img": {
        "href": "/icons/white/classes/warlock.svg",
        "alt": "A stylized Warlock class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Genie Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-female-s.webp",
                    "m": "/images/classes/warlock/card-female-m.webp",
                    "l": "/images/classes/warlock/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Genie Warlock class portrait.",
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
                "alt": "A female Genie Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-female-s.webp",
                    "m": "/images/classes/warlock/card-female-m.webp",
                    "l": "/images/classes/warlock/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Genie Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-male-s.webp",
                    "m": "/images/classes/warlock/card-male-m.webp",
                    "l": "/images/classes/warlock/card-male-l.webp"
                }
            }
        }
    },
    "label": "Genie",
    "title": "D&D Portal - Genie",
    "subTitle": "Warlock subclass",
    "description": "Elemental patron choice, vessel refuge, flight, and limited wish.",
    "descriptions": {
        "short": "Elemental patron choice, vessel refuge, flight, and limited wish.",
        "medium": "Genie: Elemental patron choice, vessel refuge, flight, and limited wish.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Elemental patron choice, vessel refuge, flight, and limited wish."
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
        "genie"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "expanded-spell-list-genie-s-vessel",
                "title": "Expanded Spell List; Genie\u2019s Vessel",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Choose a genie kind and related "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": ", gain a magical vessel, enter it for refuge, and add elemental damage to one attack each turn."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "elemental-gift",
                "title": "Elemental Gift",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain resistance based on patron type and temporary flight as a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.bonusAction",
                                "label": "bonus action"
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
                "id": "sanctuary-vessel",
                "title": "Sanctuary Vessel",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Bring allies into the vessel and improve short-rest recovery inside it."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "limited-wish",
                "title": "Limited Wish",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Ask the patron to reproduce a lower-level "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " without components, followed by a long recharge."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "expanded-spell-list-genie-s-vessel",
                "title": "Expanded Spell List; Genie\u2019s Vessel"
            },
            {
                "id": "elemental-gift",
                "title": "Elemental Gift"
            },
            {
                "id": "sanctuary-vessel",
                "title": "Sanctuary Vessel"
            },
            {
                "id": "limited-wish",
                "title": "Limited Wish"
            }
        ]
    }
});
export default page;

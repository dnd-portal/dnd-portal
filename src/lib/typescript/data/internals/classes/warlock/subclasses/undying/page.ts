/*
	Location: src/lib/typescript/data/internals/classes/warlock.ts
	Use: Central Warlock class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/warlock/undying",
    "img": {
        "href": "/icons/white/classes/warlock.svg",
        "alt": "A stylized Warlock class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Undying Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-female-s.webp",
                    "m": "/images/classes/warlock/card-female-m.webp",
                    "l": "/images/classes/warlock/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Undying Warlock class portrait.",
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
                "alt": "A female Undying Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-female-s.webp",
                    "m": "/images/classes/warlock/card-female-m.webp",
                    "l": "/images/classes/warlock/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Undying Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-male-s.webp",
                    "m": "/images/classes/warlock/card-male-m.webp",
                    "l": "/images/classes/warlock/card-male-l.webp"
                }
            }
        }
    },
    "label": "Undying",
    "title": "D&D Portal - Undying",
    "subTitle": "Warlock subclass",
    "description": "Disease resistance, death avoidance, and slow bodily decay.",
    "descriptions": {
        "short": "Disease resistance, death avoidance, and slow bodily decay.",
        "medium": "Undying: Disease resistance, death avoidance, and slow bodily decay.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Disease resistance, death avoidance, and slow bodily decay."
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
        "undying"
    ],
    "content": {
        "source": "Sword Coast Adventurer\u2019s Guide",
        "featureSections": [
            {
                "id": "expanded-spell-list-among-the-dead",
                "title": "Expanded Spell List; Among the Dead",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain death-defying "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " options, learn Spare the Dying, resist disease, and make undead save before attacking you."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "defy-death",
                "title": "Defy Death",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Regain "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
                            },
                            {
                                "type": "text",
                                "text": " after succeeding on a death save or stabilizing another creature."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "undying-nature",
                "title": "Undying Nature",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Stop needing air, food, drink, or sleep and age far more slowly."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "indestructible-life",
                "title": "Indestructible Life",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Use a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.bonusAction",
                                "label": "bonus action"
                            },
                            {
                                "type": "text",
                                "text": " to regain "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
                            },
                            {
                                "type": "text",
                                "text": " and reattach severed body parts."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "expanded-spell-list-among-the-dead",
                "title": "Expanded Spell List; Among the Dead"
            },
            {
                "id": "defy-death",
                "title": "Defy Death"
            },
            {
                "id": "undying-nature",
                "title": "Undying Nature"
            },
            {
                "id": "indestructible-life",
                "title": "Indestructible Life"
            }
        ]
    }
});
export default page;

/*
	Location: src/lib/typescript/data/internals/classes/warlock.ts
	Use: Central Warlock class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/warlock/undead",
    "img": {
        "href": "/icons/white/classes/warlock.svg",
        "alt": "A stylized Warlock class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Undead Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-female-s.webp",
                    "m": "/images/classes/warlock/card-female-m.webp",
                    "l": "/images/classes/warlock/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Undead Warlock class portrait.",
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
                "alt": "A female Undead Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-female-s.webp",
                    "m": "/images/classes/warlock/card-female-m.webp",
                    "l": "/images/classes/warlock/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Undead Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-male-s.webp",
                    "m": "/images/classes/warlock/card-male-m.webp",
                    "l": "/images/classes/warlock/card-male-l.webp"
                }
            }
        }
    },
    "label": "Undead",
    "title": "D&D Portal - Undead",
    "subTitle": "Warlock subclass",
    "description": "Form of Dread, fear, necrotic damage, and spirit projection.",
    "descriptions": {
        "short": "Form of Dread, fear, necrotic damage, and spirit projection.",
        "medium": "Undead: Form of Dread, fear, necrotic damage, and spirit projection.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Form of Dread, fear, "
                },
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.necrotic",
                    "label": "necrotic"
                },
                {
                    "type": "text",
                    "text": " damage, and spirit projection."
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
        "undead"
    ],
    "content": {
        "source": "Van Richten\u2019s Guide to Ravenloft",
        "featureSections": [
            {
                "id": "expanded-spell-list-form-of-dread",
                "title": "Expanded Spell List; Form of Dread",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain undeath-themed "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " options and assume a frightening form that grants "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "temporary hit points"
                            },
                            {
                                "type": "text",
                                "text": ", fear on hits, and fear immunity."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "grave-touched",
                "title": "Grave Touched",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Stop needing food, drink, or breath, change one attack\u2019s damage to "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.necrotic",
                                "label": "necrotic"
                            },
                            {
                                "type": "text",
                                "text": ", and add extra damage while in Form of Dread."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "necrotic-husk",
                "title": "Necrotic Husk",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.necrotic",
                                "label": "necrotic"
                            },
                            {
                                "type": "text",
                                "text": " resistance or immunity in Form of Dread and explode with "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.necrotic",
                                "label": "necrotic"
                            },
                            {
                                "type": "text",
                                "text": " energy instead of dropping to 0 "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
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
                "id": "spirit-projection",
                "title": "Spirit Projection",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Project the spirit from the body, gaining movement through objects, flight, stronger "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.necrotic",
                                "label": "necrotic"
                            },
                            {
                                "type": "text",
                                "text": " healing, and flexible spellcasting."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "expanded-spell-list-form-of-dread",
                "title": "Expanded Spell List; Form of Dread"
            },
            {
                "id": "grave-touched",
                "title": "Grave Touched"
            },
            {
                "id": "necrotic-husk",
                "title": "Necrotic Husk"
            },
            {
                "id": "spirit-projection",
                "title": "Spirit Projection"
            }
        ]
    }
});
export default page;

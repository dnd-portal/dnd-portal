/*
	Location: src/lib/typescript/data/internals/classes/wizard.ts
	Use: Central Wizard class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/wizard/conjuration",
    "img": {
        "href": "/icons/white/classes/wizard.svg",
        "alt": "A stylized Wizard class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Conjuration Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Conjuration Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-male-s.webp",
                    "m": "/images/classes/wizard/card-male-m.webp",
                    "l": "/images/classes/wizard/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Conjuration Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Conjuration Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-male-s.webp",
                    "m": "/images/classes/wizard/card-male-m.webp",
                    "l": "/images/classes/wizard/card-male-l.webp"
                }
            }
        }
    },
    "label": "Conjuration",
    "title": "D&D Portal - Conjuration",
    "subTitle": "Wizard subclass",
    "description": "Create objects, teleport, and improve summoned creatures.",
    "descriptions": {
        "short": "Create objects, teleport, and improve summoned creatures.",
        "medium": "Conjuration: Create objects, teleport, and improve summoned creatures.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Create objects, teleport, and improve summoned creatures."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.wizard.page"
    },
    "tags": [
        "wizard",
        "subclass",
        "conjuration"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "conjuration-savant-minor-conjuration",
                "title": "Conjuration Savant; Minor Conjuration",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Copy conjuration "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " more efficiently and create a temporary nonmagical object in your hand."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "benign-transposition",
                "title": "Benign Transposition",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Teleport yourself or swap places with a willing creature, recharging after rest or conjuration spellcasting."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "focused-conjuration",
                "title": "Focused Conjuration",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Damage cannot break your "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.concentration",
                                "label": "concentration"
                            },
                            {
                                "type": "text",
                                "text": " on conjuration "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
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
                "id": "durable-summons",
                "title": "Durable Summons",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Creatures summoned or created by conjuration "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " gain "
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
            }
        ],
        "tableOfContents": [
            {
                "id": "conjuration-savant-minor-conjuration",
                "title": "Conjuration Savant; Minor Conjuration"
            },
            {
                "id": "benign-transposition",
                "title": "Benign Transposition"
            },
            {
                "id": "focused-conjuration",
                "title": "Focused Conjuration"
            },
            {
                "id": "durable-summons",
                "title": "Durable Summons"
            }
        ]
    }
});
export default page;

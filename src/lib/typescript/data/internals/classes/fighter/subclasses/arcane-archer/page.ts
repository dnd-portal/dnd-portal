/*
	Location: src/lib/typescript/data/internals/classes/fighter.ts
	Use: Central Fighter class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/fighter/arcane-archer",
    "img": {
        "href": "/icons/white/classes/fighter.svg",
        "alt": "A stylized Fighter class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Arcane Archer Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Arcane Archer Fighter class portrait.",
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
                "alt": "A female Arcane Archer Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Arcane Archer Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-male-s.webp",
                    "m": "/images/classes/fighter/card-male-m.webp",
                    "l": "/images/classes/fighter/card-male-l.webp"
                }
            }
        }
    },
    "label": "Arcane Archer",
    "title": "D&D Portal - Arcane Archer",
    "subTitle": "Fighter subclass",
    "description": "Imbue bow shots with specialized arcane effects.",
    "descriptions": {
        "short": "Imbue bow shots with specialized arcane effects.",
        "medium": "Arcane Archer: Imbue bow shots with specialized arcane effects.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Imbue bow shots with specialized arcane effects."
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
        "arcane-archer"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "arcane-archer-lore-arcane-shot",
                "title": "Arcane Archer Lore; Arcane Shot",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain an arcane skill and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.cantrips",
                                "label": "cantrip"
                            },
                            {
                                "type": "text",
                                "text": ", learn specialized magical arrow effects, and apply one Arcane Shot option after an arrow hits."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "magic-arrow-curving-shot",
                "title": "Magic Arrow; Curving Shot",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Arrows count as magical, and a missed magic-arrow attack can be redirected to another target as a "
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
                "id": "ever-ready-shot",
                "title": "Ever-Ready Shot",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Regain one Arcane Shot use when rolling "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.initiativeRoll",
                                "label": "initiative"
                            },
                            {
                                "type": "text",
                                "text": " with none remaining."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "arcane-shot-improvement",
                "title": "Arcane Shot improvement",
                "subtitle": "18th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Increase the damage dice of Arcane Shot options."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "arcane-archer-lore-arcane-shot",
                "title": "Arcane Archer Lore; Arcane Shot"
            },
            {
                "id": "magic-arrow-curving-shot",
                "title": "Magic Arrow; Curving Shot"
            },
            {
                "id": "ever-ready-shot",
                "title": "Ever-Ready Shot"
            },
            {
                "id": "arcane-shot-improvement",
                "title": "Arcane Shot improvement"
            }
        ]
    }
});
export default page;

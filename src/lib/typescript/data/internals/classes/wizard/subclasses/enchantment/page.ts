/*
	Location: src/lib/typescript/data/internals/classes/wizard.ts
	Use: Central Wizard class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/wizard/enchantment",
    "img": {
        "href": "/icons/white/classes/wizard.svg",
        "alt": "A stylized Wizard class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Enchantment Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Enchantment Wizard class portrait.",
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
                "alt": "A female Enchantment Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Enchantment Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-male-s.webp",
                    "m": "/images/classes/wizard/card-male-m.webp",
                    "l": "/images/classes/wizard/card-male-l.webp"
                }
            }
        }
    },
    "label": "Enchantment",
    "title": "D&D Portal - Enchantment",
    "subTitle": "Wizard subclass",
    "description": "Hypnotize, redirect attacks, and alter memories.",
    "descriptions": {
        "short": "Hypnotize, redirect attacks, and alter memories.",
        "medium": "Enchantment: Hypnotize, redirect attacks, and alter memories.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Hypnotize, redirect attacks, and alter memories."
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
        "enchantment"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "enchantment-savant-hypnotic-gaze",
                "title": "Enchantment Savant; Hypnotic Gaze",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Copy enchantment "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " more efficiently and use an action to charm and incapacitate an adjacent creature while maintaining your gaze."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "instinctive-charm",
                "title": "Instinctive Charm",
                "subtitle": "6th level",
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
                                "path": "internals.rules.actions.reaction",
                                "label": "reaction"
                            },
                            {
                                "type": "text",
                                "text": " to redirect an attack aimed at you to another creature."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "split-enchantment",
                "title": "Split Enchantment",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Single-target enchantment "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " can target a second creature."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "alter-memories",
                "title": "Alter Memories",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Prevent "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.charmed",
                                "label": "charmed"
                            },
                            {
                                "type": "text",
                                "text": " creatures from remembering the "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.charmed",
                                "label": "charmed"
                            },
                            {
                                "type": "text",
                                "text": " period and attempt to erase additional time."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "enchantment-savant-hypnotic-gaze",
                "title": "Enchantment Savant; Hypnotic Gaze"
            },
            {
                "id": "instinctive-charm",
                "title": "Instinctive Charm"
            },
            {
                "id": "split-enchantment",
                "title": "Split Enchantment"
            },
            {
                "id": "alter-memories",
                "title": "Alter Memories"
            }
        ]
    }
});
export default page;

/*
	Location: src/lib/typescript/data/internals/classes/wizard.ts
	Use: Central Wizard class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/wizard/abjuration",
    "img": {
        "href": "/icons/white/classes/wizard.svg",
        "alt": "A stylized Wizard class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Abjuration Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Abjuration Wizard class portrait.",
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
                "alt": "A female Abjuration Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Abjuration Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-male-s.webp",
                    "m": "/images/classes/wizard/card-male-m.webp",
                    "l": "/images/classes/wizard/card-male-l.webp"
                }
            }
        }
    },
    "label": "Abjuration",
    "title": "D&D Portal - Abjuration",
    "subTitle": "Wizard subclass",
    "description": "Protective wards and improved dispelling and counterspelling.",
    "descriptions": {
        "short": "Protective wards and improved dispelling and counterspelling.",
        "medium": "Abjuration: Protective wards and improved dispelling and counterspelling.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Protective wards and improved dispelling and counterspelling."
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
        "abjuration"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "abjuration-savant-arcane-ward",
                "title": "Abjuration Savant; Arcane Ward",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Copy abjuration "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " more efficiently and create a damage-absorbing ward when casting abjuration magic."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "projected-ward",
                "title": "Projected Ward",
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
                                "text": " to let the ward absorb damage dealt to a nearby creature."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "improved-abjuration",
                "title": "Improved Abjuration",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Add proficiency bonus to "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.d20Tests.abilityCheck",
                                "label": "ability checks"
                            },
                            {
                                "type": "text",
                                "text": " made for Counterspell and Dispel Magic."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "spell-resistance",
                "title": "Spell Resistance",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain advantage on saves against "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " and resistance to "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " damage."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "abjuration-savant-arcane-ward",
                "title": "Abjuration Savant; Arcane Ward"
            },
            {
                "id": "projected-ward",
                "title": "Projected Ward"
            },
            {
                "id": "improved-abjuration",
                "title": "Improved Abjuration"
            },
            {
                "id": "spell-resistance",
                "title": "Spell Resistance"
            }
        ]
    }
});
export default page;

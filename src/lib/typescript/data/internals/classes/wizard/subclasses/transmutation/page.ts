/*
	Location: src/lib/typescript/data/internals/classes/wizard.ts
	Use: Central Wizard class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/wizard/transmutation",
    "img": {
        "href": "/icons/white/classes/wizard.svg",
        "alt": "A stylized Wizard class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Transmutation Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Transmutation Wizard class portrait.",
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
                "alt": "A female Transmutation Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Transmutation Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-male-s.webp",
                    "m": "/images/classes/wizard/card-male-m.webp",
                    "l": "/images/classes/wizard/card-male-l.webp"
                }
            }
        }
    },
    "label": "Transmutation",
    "title": "D&D Portal - Transmutation",
    "subTitle": "Wizard subclass",
    "description": "Minor alchemy, a transmuter\u2019s stone, and transformative mastery.",
    "descriptions": {
        "short": "Minor alchemy, a transmuter\u2019s stone, and transformative mastery.",
        "medium": "Transmutation: Minor alchemy, a transmuter\u2019s stone, and transformative mastery.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Minor alchemy, a transmuter\u2019s stone, and transformative mastery."
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
        "transmutation"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "transmutation-savant-minor-alchemy",
                "title": "Transmutation Savant; Minor Alchemy",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Copy transmutation "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " more efficiently and temporarily transform one common material into another."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "transmuter-s-stone",
                "title": "Transmuter\u2019s Stone",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Create a stone that grants one selectable benefit such as darkvision, "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.speed",
                                "label": "speed"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.d20Tests.savingThrow",
                                "label": "saving throw"
                            },
                            {
                                "type": "text",
                                "text": " proficiency, or elemental resistance."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "shapechanger",
                "title": "Shapechanger",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Add Polymorph to the spellbook and cast it on yourself without a slot to assume a low-challenge beast form."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "master-transmuter",
                "title": "Master Transmuter",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Consume the stone for a major transformation, healing, restoration, or youth effect."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "transmutation-savant-minor-alchemy",
                "title": "Transmutation Savant; Minor Alchemy"
            },
            {
                "id": "transmuter-s-stone",
                "title": "Transmuter\u2019s Stone"
            },
            {
                "id": "shapechanger",
                "title": "Shapechanger"
            },
            {
                "id": "master-transmuter",
                "title": "Master Transmuter"
            }
        ]
    }
});
export default page;

/*
	Location: src/lib/typescript/data/internals/classes/wizard.ts
	Use: Central Wizard class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/wizard/order-of-scribes",
    "img": {
        "href": "/icons/white/classes/wizard.svg",
        "alt": "A stylized Wizard class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Order of Scribes Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Order of Scribes Wizard class portrait.",
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
                "alt": "A female Order of Scribes Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Order of Scribes Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-male-s.webp",
                    "m": "/images/classes/wizard/card-male-m.webp",
                    "l": "/images/classes/wizard/card-male-l.webp"
                }
            }
        }
    },
    "label": "Order of Scribes",
    "title": "D&D Portal - Order of Scribes",
    "subTitle": "Wizard subclass",
    "description": "Awaken a spellbook, change damage types, and cast through a manifested mind.",
    "descriptions": {
        "short": "Awaken a spellbook, change damage types, and cast through a manifested mind.",
        "medium": "Order of Scribes: Awaken a spellbook, change damage types, and cast through a manifested mind.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Awaken a spellbook, change damage types, and cast through a manifested mind."
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
        "order-of-scribes"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "wizardly-quill-awakened-spellbook",
                "title": "Wizardly Quill; Awakened Spellbook",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Create a magical quill, copy "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " rapidly, use the spellbook as a focus, change "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " damage types, and cast rituals without added time."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "manifest-mind",
                "title": "Manifest Mind",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Manifest the spellbook\u2019s mind to scout and cast a limited number of "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " from its space."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "master-scrivener",
                "title": "Master Scrivener",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Create a temporary enhanced "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " scroll and produce normal scrolls more cheaply."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "one-with-the-word",
                "title": "One with the Word",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain advantage on "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.arcana",
                                "label": "Arcana"
                            },
                            {
                                "type": "text",
                                "text": " and use the spellbook\u2019s mind to prevent damage by temporarily sacrificing "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " from the book."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "wizardly-quill-awakened-spellbook",
                "title": "Wizardly Quill; Awakened Spellbook"
            },
            {
                "id": "manifest-mind",
                "title": "Manifest Mind"
            },
            {
                "id": "master-scrivener",
                "title": "Master Scrivener"
            },
            {
                "id": "one-with-the-word",
                "title": "One with the Word"
            }
        ]
    }
});
export default page;

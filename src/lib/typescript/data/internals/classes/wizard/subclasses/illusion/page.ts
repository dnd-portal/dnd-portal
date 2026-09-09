/*
	Location: src/lib/typescript/data/internals/classes/wizard.ts
	Use: Central Wizard class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/wizard/illusion",
    "img": {
        "href": "/icons/white/classes/wizard.svg",
        "alt": "A stylized Wizard class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Illusion Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Illusion Wizard class portrait.",
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
                "alt": "A female Illusion Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Illusion Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-male-s.webp",
                    "m": "/images/classes/wizard/card-male-m.webp",
                    "l": "/images/classes/wizard/card-male-l.webp"
                }
            }
        }
    },
    "label": "Illusion",
    "title": "D&D Portal - Illusion",
    "subTitle": "Wizard subclass",
    "description": "Improved minor illusions, flexible images, and temporary reality.",
    "descriptions": {
        "short": "Improved minor illusions, flexible images, and temporary reality.",
        "medium": "Illusion: Improved minor illusions, flexible images, and temporary reality.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Improved minor illusions, flexible images, and temporary reality."
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
        "illusion"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "illusion-savant-improved-minor-illusion",
                "title": "Illusion Savant; Improved Minor Illusion",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Copy illusion "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " more efficiently, learn Minor Illusion, and create sound and image together with it."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "malleable-illusions",
                "title": "Malleable Illusions",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Change the "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.nature",
                                "label": "nature"
                            },
                            {
                                "type": "text",
                                "text": " of an ongoing illusion "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " with an action."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "illusory-self",
                "title": "Illusory Self",
                "subtitle": "10th level",
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
                                "text": " to create a duplicate that causes one attack to miss."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "illusory-reality",
                "title": "Illusory Reality",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Temporarily make one nonmagical, non-damaging object from an illusion real."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "illusion-savant-improved-minor-illusion",
                "title": "Illusion Savant; Improved Minor Illusion"
            },
            {
                "id": "malleable-illusions",
                "title": "Malleable Illusions"
            },
            {
                "id": "illusory-self",
                "title": "Illusory Self"
            },
            {
                "id": "illusory-reality",
                "title": "Illusory Reality"
            }
        ]
    }
});
export default page;

/*
	Location: src/lib/typescript/data/internals/classes/wizard.ts
	Use: Central Wizard class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/wizard/necromancy",
    "img": {
        "href": "/icons/white/classes/wizard.svg",
        "alt": "A stylized Wizard class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Necromancy Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Necromancy Wizard class portrait.",
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
                "alt": "A female Necromancy Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Necromancy Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-male-s.webp",
                    "m": "/images/classes/wizard/card-male-m.webp",
                    "l": "/images/classes/wizard/card-male-l.webp"
                }
            }
        }
    },
    "label": "Necromancy",
    "title": "D&D Portal - Necromancy",
    "subTitle": "Wizard subclass",
    "description": "Harvest life and create stronger undead.",
    "descriptions": {
        "short": "Harvest life and create stronger undead.",
        "medium": "Necromancy: Harvest life and create stronger undead.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Harvest life and create stronger undead."
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
        "necromancy"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "necromancy-savant-grim-harvest",
                "title": "Necromancy Savant; Grim Harvest",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Copy necromancy "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " more efficiently and regain "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
                            },
                            {
                                "type": "text",
                                "text": " when "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " kill creatures."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "undead-thralls",
                "title": "Undead Thralls",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Learn Animate Dead, affect an additional corpse, and strengthen undead you create."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "inured-to-undeath",
                "title": "Inured to Undeath",
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
                                "text": " resistance and immunity to reductions of maximum "
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
                "id": "command-undead",
                "title": "Command Undead",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Attempt to place an undead creature under permanent control."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "necromancy-savant-grim-harvest",
                "title": "Necromancy Savant; Grim Harvest"
            },
            {
                "id": "undead-thralls",
                "title": "Undead Thralls"
            },
            {
                "id": "inured-to-undeath",
                "title": "Inured to Undeath"
            },
            {
                "id": "command-undead",
                "title": "Command Undead"
            }
        ]
    }
});
export default page;

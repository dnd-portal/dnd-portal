/*
	Location: src/lib/typescript/data/internals/classes/sorcerer.ts
	Use: Central Sorcerer class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/sorcerer/shadow-magic",
    "img": {
        "href": "/icons/white/classes/sorcerer.svg",
        "alt": "A stylized Sorcerer class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Shadow Magic Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-female-s.webp",
                    "m": "/images/classes/sorcerer/card-female-m.webp",
                    "l": "/images/classes/sorcerer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Shadow Magic Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-male-s.webp",
                    "m": "/images/classes/sorcerer/card-male-m.webp",
                    "l": "/images/classes/sorcerer/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Shadow Magic Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-female-s.webp",
                    "m": "/images/classes/sorcerer/card-female-m.webp",
                    "l": "/images/classes/sorcerer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Shadow Magic Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-male-s.webp",
                    "m": "/images/classes/sorcerer/card-male-m.webp",
                    "l": "/images/classes/sorcerer/card-male-l.webp"
                }
            }
        }
    },
    "label": "Shadow Magic",
    "title": "D&D Portal - Shadow Magic",
    "subTitle": "Sorcerer subclass",
    "description": "Darkvision, survival at 0 hit points, shadow hound, and teleportation.",
    "descriptions": {
        "short": "Darkvision, survival at 0 hit points, shadow hound, and teleportation.",
        "medium": "Shadow Magic: Darkvision, survival at 0 hit points, shadow hound, and teleportation.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Darkvision, "
                },
                {
                    "type": "link",
                    "path": "internals.rules.skills.survival",
                    "label": "survival"
                },
                {
                    "type": "text",
                    "text": " at 0 "
                },
                {
                    "type": "link",
                    "path": "internals.rules.combat.hitPoints",
                    "label": "hit points"
                },
                {
                    "type": "text",
                    "text": ", shadow hound, and teleportation."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.sorcerer.page"
    },
    "tags": [
        "sorcerer",
        "subclass",
        "shadow-magic"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "eyes-of-the-dark-strength-of-the-grave",
                "title": "Eyes of the Dark; Strength of the Grave",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain long-range darkvision and a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.d20Tests.savingThrow",
                                "label": "saving throw"
                            },
                            {
                                "type": "text",
                                "text": " to remain at 1 hit point when damage would reduce you to 0."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "hound-of-ill-omen",
                "title": "Hound of Ill Omen",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Spend sorcery points to summon a shadow hound that tracks one target and hinders its saves against your "
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
                "id": "shadow-walk",
                "title": "Shadow Walk",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Teleport between areas of dim light or darkness as a "
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
                "id": "umbral-form",
                "title": "Umbral Form",
                "subtitle": "18th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Spend sorcery points to become shadowy, move through creatures and objects, and resist most damage."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "eyes-of-the-dark-strength-of-the-grave",
                "title": "Eyes of the Dark; Strength of the Grave"
            },
            {
                "id": "hound-of-ill-omen",
                "title": "Hound of Ill Omen"
            },
            {
                "id": "shadow-walk",
                "title": "Shadow Walk"
            },
            {
                "id": "umbral-form",
                "title": "Umbral Form"
            }
        ]
    }
});
export default page;

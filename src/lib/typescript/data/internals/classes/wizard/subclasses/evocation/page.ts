/*
	Location: src/lib/typescript/data/internals/classes/wizard.ts
	Use: Central Wizard class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/wizard/evocation",
    "img": {
        "href": "/icons/white/classes/wizard.svg",
        "alt": "A stylized Wizard class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Evocation Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Evocation Wizard class portrait.",
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
                "alt": "A female Evocation Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Evocation Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-male-s.webp",
                    "m": "/images/classes/wizard/card-male-m.webp",
                    "l": "/images/classes/wizard/card-male-l.webp"
                }
            }
        }
    },
    "label": "Evocation",
    "title": "D&D Portal - Evocation",
    "subTitle": "Wizard subclass",
    "description": "Protect allies from area spells and maximize damaging evocations.",
    "descriptions": {
        "short": "Protect allies from area spells and maximize damaging evocations.",
        "medium": "Evocation: Protect allies from area spells and maximize damaging evocations.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Protect allies from area "
                },
                {
                    "type": "link",
                    "path": "internals.rules.spellcasting.spells",
                    "label": "spells"
                },
                {
                    "type": "text",
                    "text": " and maximize damaging evocations."
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
        "evocation"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "evocation-savant-sculpt-spells",
                "title": "Evocation Savant; Sculpt Spells",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Copy evocation "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " more efficiently and protect selected allies from your evocation areas."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "potent-cantrip",
                "title": "Potent Cantrip",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Creatures that succeed on saves against damaging "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.cantrips",
                                "label": "cantrips"
                            },
                            {
                                "type": "text",
                                "text": " still take half damage."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "empowered-evocation",
                "title": "Empowered Evocation",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Add "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.intelligence",
                                "label": "Intelligence"
                            },
                            {
                                "type": "text",
                                "text": " to one "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.damageRoll",
                                "label": "damage roll"
                            },
                            {
                                "type": "text",
                                "text": " of a wizard evocation "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
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
                "id": "overchannel",
                "title": "Overchannel",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Maximize damage of a lower-level wizard "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": ", with repeated uses causing escalating "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.necrotic",
                                "label": "necrotic"
                            },
                            {
                                "type": "text",
                                "text": " damage to you."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "evocation-savant-sculpt-spells",
                "title": "Evocation Savant; Sculpt Spells"
            },
            {
                "id": "potent-cantrip",
                "title": "Potent Cantrip"
            },
            {
                "id": "empowered-evocation",
                "title": "Empowered Evocation"
            },
            {
                "id": "overchannel",
                "title": "Overchannel"
            }
        ]
    }
});
export default page;

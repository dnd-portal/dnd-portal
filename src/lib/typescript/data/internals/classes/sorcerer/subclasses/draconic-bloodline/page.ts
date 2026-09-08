/*
	Location: src/lib/typescript/data/internals/classes/sorcerer.ts
	Use: Central Sorcerer class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/sorcerer/draconic-bloodline",
    "img": {
        "href": "/icons/white/classes/sorcerer.svg",
        "alt": "A stylized Sorcerer class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Draconic Bloodline Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-female-s.webp",
                    "m": "/images/classes/sorcerer/card-female-m.webp",
                    "l": "/images/classes/sorcerer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Draconic Bloodline Sorcerer class portrait.",
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
                "alt": "A female Draconic Bloodline Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-female-s.webp",
                    "m": "/images/classes/sorcerer/card-female-m.webp",
                    "l": "/images/classes/sorcerer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Draconic Bloodline Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-male-s.webp",
                    "m": "/images/classes/sorcerer/card-male-m.webp",
                    "l": "/images/classes/sorcerer/card-male-l.webp"
                }
            }
        }
    },
    "label": "Draconic Bloodline",
    "title": "D&D Portal - Draconic Bloodline",
    "subTitle": "Sorcerer subclass",
    "description": "Natural armor, elemental affinity, wings, and draconic presence.",
    "descriptions": {
        "short": "Natural armor, elemental affinity, wings, and draconic presence.",
        "medium": "Draconic Bloodline: Natural armor, elemental affinity, wings, and draconic presence.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Natural armor, elemental affinity, wings, and draconic presence."
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
        "draconic-bloodline"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "dragon-ancestor-draconic-resilience",
                "title": "Dragon Ancestor; Draconic Resilience",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Choose a draconic ancestry and language, double proficiency for related social checks, gain extra "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
                            },
                            {
                                "type": "text",
                                "text": ", and gain natural armor when unarmored."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "elemental-affinity",
                "title": "Elemental Affinity",
                "subtitle": "6th level",
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
                                "path": "internals.rules.abilityScores.charisma",
                                "label": "Charisma"
                            },
                            {
                                "type": "text",
                                "text": " to one matching elemental "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": "-"
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.damageRoll",
                                "label": "damage roll"
                            },
                            {
                                "type": "text",
                                "text": " and spend sorcery points for temporary resistance."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "dragon-wings",
                "title": "Dragon Wings",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Manifest draconic wings for a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.flying",
                                "label": "flying"
                            },
                            {
                                "type": "text",
                                "text": " "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.speed",
                                "label": "speed"
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
                "id": "draconic-presence",
                "title": "Draconic Presence",
                "subtitle": "18th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Spend sorcery points to create an aura of awe or fear."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "dragon-ancestor-draconic-resilience",
                "title": "Dragon Ancestor; Draconic Resilience"
            },
            {
                "id": "elemental-affinity",
                "title": "Elemental Affinity"
            },
            {
                "id": "dragon-wings",
                "title": "Dragon Wings"
            },
            {
                "id": "draconic-presence",
                "title": "Draconic Presence"
            }
        ]
    }
});
export default page;

/*
	Location: src/lib/typescript/data/internals/classes/druid.ts
	Use: Central Druid class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/druid/land",
    "img": {
        "href": "/icons/white/classes/druid.svg",
        "alt": "A stylized Druid class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Land Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-female-s.webp",
                    "m": "/images/classes/druid/card-female-m.webp",
                    "l": "/images/classes/druid/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Land Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-male-s.webp",
                    "m": "/images/classes/druid/card-male-m.webp",
                    "l": "/images/classes/druid/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Land Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-female-s.webp",
                    "m": "/images/classes/druid/card-female-m.webp",
                    "l": "/images/classes/druid/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Land Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-male-s.webp",
                    "m": "/images/classes/druid/card-male-m.webp",
                    "l": "/images/classes/druid/card-male-l.webp"
                }
            }
        }
    },
    "label": "Land",
    "title": "D&D Portal - Land",
    "subTitle": "Druid subclass",
    "description": "Expanded spell preparation and improved natural spell recovery.",
    "descriptions": {
        "short": "Expanded spell preparation and improved natural spell recovery.",
        "medium": "Land: Expanded spell preparation and improved natural spell recovery.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Expanded "
                },
                {
                    "type": "link",
                    "path": "internals.rules.spellcasting.spells",
                    "label": "spell"
                },
                {
                    "type": "text",
                    "text": " preparation and improved natural "
                },
                {
                    "type": "link",
                    "path": "internals.rules.spellcasting.spells",
                    "label": "spell"
                },
                {
                    "type": "text",
                    "text": " recovery."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.druid.page"
    },
    "tags": [
        "druid",
        "subclass",
        "land"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "bonus-cantrip-natural-recovery-circle-spells",
                "title": "Bonus Cantrip; Natural Recovery; Circle Spells",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Learn an extra druid "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.cantrips",
                                "label": "cantrip"
                            },
                            {
                                "type": "text",
                                "text": ", recover "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " slots during a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.rests.shortRest",
                                "label": "short rest"
                            },
                            {
                                "type": "text",
                                "text": ", and gain always-prepared "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " based on a chosen land type."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "land-s-stride",
                "title": "Land\u2019s Stride",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Move through nonmagical "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.difficultTerrain",
                                "label": "difficult terrain"
                            },
                            {
                                "type": "text",
                                "text": " and plants without penalty and resist magically created plants."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "nature-s-ward",
                "title": "Nature\u2019s Ward",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Become immune to "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.poison",
                                "label": "poison"
                            },
                            {
                                "type": "text",
                                "text": " and disease and immune to charm or fear from elementals and fey."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "nature-s-sanctuary",
                "title": "Nature\u2019s Sanctuary",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Beasts and plants must overcome a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.wisdom",
                                "label": "Wisdom"
                            },
                            {
                                "type": "text",
                                "text": " save to attack you."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "bonus-cantrip-natural-recovery-circle-spells",
                "title": "Bonus Cantrip; Natural Recovery; Circle Spells"
            },
            {
                "id": "land-s-stride",
                "title": "Land\u2019s Stride"
            },
            {
                "id": "nature-s-ward",
                "title": "Nature\u2019s Ward"
            },
            {
                "id": "nature-s-sanctuary",
                "title": "Nature\u2019s Sanctuary"
            }
        ]
    }
});
export default page;

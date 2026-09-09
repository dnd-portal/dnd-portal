/*
	Location: src/lib/typescript/data/internals/classes/druid.ts
	Use: Central Druid class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/druid/stars",
    "img": {
        "href": "/icons/white/classes/druid.svg",
        "alt": "A stylized Druid class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Stars Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-female-s.webp",
                    "m": "/images/classes/druid/card-female-m.webp",
                    "l": "/images/classes/druid/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Stars Druid class portrait.",
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
                "alt": "A female Stars Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-female-s.webp",
                    "m": "/images/classes/druid/card-female-m.webp",
                    "l": "/images/classes/druid/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Stars Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-male-s.webp",
                    "m": "/images/classes/druid/card-male-m.webp",
                    "l": "/images/classes/druid/card-male-l.webp"
                }
            }
        }
    },
    "label": "Stars",
    "title": "D&D Portal - Stars",
    "subTitle": "Druid subclass",
    "description": "Starry forms, guidance, and cosmic omen support.",
    "descriptions": {
        "short": "Starry forms, guidance, and cosmic omen support.",
        "medium": "Stars: Starry forms, guidance, and cosmic omen support.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Starry forms, guidance, and cosmic omen support."
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
        "stars"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "star-map-starry-form",
                "title": "Star Map; Starry Form",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain Guidance, Guiding Bolt, limited free Guiding Bolts, and expend Wild Shape to assume Archer, Chalice, or Dragon constellation forms."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "cosmic-omen",
                "title": "Cosmic Omen",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "After a rest, gain a limited "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.reaction",
                                "label": "reaction"
                            },
                            {
                                "type": "text",
                                "text": " that adds or subtracts a d6 from nearby attacks, saves, or checks."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "twinkling-constellations",
                "title": "Twinkling Constellations",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Improve all Starry Form benefits and switch constellation form at the start of each turn."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "full-of-stars",
                "title": "Full of Stars",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "While in Starry Form, gain resistance to "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.bludgeoning",
                                "label": "bludgeoning"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.piercing",
                                "label": "piercing"
                            },
                            {
                                "type": "text",
                                "text": ", and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.slashing",
                                "label": "slashing"
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
                "id": "star-map-starry-form",
                "title": "Star Map; Starry Form"
            },
            {
                "id": "cosmic-omen",
                "title": "Cosmic Omen"
            },
            {
                "id": "twinkling-constellations",
                "title": "Twinkling Constellations"
            },
            {
                "id": "full-of-stars",
                "title": "Full of Stars"
            }
        ]
    }
});
export default page;

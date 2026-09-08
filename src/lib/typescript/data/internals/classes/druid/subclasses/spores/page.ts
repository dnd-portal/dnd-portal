/*
	Location: src/lib/typescript/data/internals/classes/druid.ts
	Use: Central Druid class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/druid/spores",
    "img": {
        "href": "/icons/white/classes/druid.svg",
        "alt": "A stylized Druid class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Spores Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-female-s.webp",
                    "m": "/images/classes/druid/card-female-m.webp",
                    "l": "/images/classes/druid/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Spores Druid class portrait.",
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
                "alt": "A female Spores Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-female-s.webp",
                    "m": "/images/classes/druid/card-female-m.webp",
                    "l": "/images/classes/druid/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Spores Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-male-s.webp",
                    "m": "/images/classes/druid/card-male-m.webp",
                    "l": "/images/classes/druid/card-male-l.webp"
                }
            }
        }
    },
    "label": "Spores",
    "title": "D&D Portal - Spores",
    "subTitle": "Druid subclass",
    "description": "Fungal halo damage, temporary hit points, and undead animation.",
    "descriptions": {
        "short": "Fungal halo damage, temporary hit points, and undead animation.",
        "medium": "Spores: Fungal halo damage, temporary hit points, and undead animation.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Fungal halo damage, "
                },
                {
                    "type": "link",
                    "path": "internals.rules.combat.hitPoints",
                    "label": "temporary hit points"
                },
                {
                    "type": "text",
                    "text": ", and undead animation."
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
        "spores"
    ],
    "content": {
        "source": "Guildmaster\u2019s Guide to Ravnica; Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "circle-spells-halo-of-spores-symbiotic-entity",
                "title": "Circle Spells; Halo of Spores; Symbiotic Entity",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain always-prepared fungal and necromantic "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": ", deal "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.reaction",
                                "label": "reaction"
                            },
                            {
                                "type": "text",
                                "text": " "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.necrotic",
                                "label": "necrotic"
                            },
                            {
                                "type": "text",
                                "text": " damage nearby, and spend Wild Shape to gain "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "temporary hit points"
                            },
                            {
                                "type": "text",
                                "text": " and stronger spores and weapon attacks."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "fungal-infestation",
                "title": "Fungal Infestation",
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
                                "text": " to animate a nearby dead humanoid or beast as a short-lived zombie."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "spreading-spores",
                "title": "Spreading Spores",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Create a stationary spore cloud that damages creatures entering or starting within it."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "fungal-body",
                "title": "Fungal Body",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Become immune to blindness, deafness, fear, and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.poison",
                                "label": "poison"
                            },
                            {
                                "type": "text",
                                "text": ", and resist "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.criticalHit",
                                "label": "critical hits"
                            },
                            {
                                "type": "text",
                                "text": "."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "circle-spells-halo-of-spores-symbiotic-entity",
                "title": "Circle Spells; Halo of Spores; Symbiotic Entity"
            },
            {
                "id": "fungal-infestation",
                "title": "Fungal Infestation"
            },
            {
                "id": "spreading-spores",
                "title": "Spreading Spores"
            },
            {
                "id": "fungal-body",
                "title": "Fungal Body"
            }
        ]
    }
});
export default page;

/*
	Location: src/lib/typescript/data/internals/classes/druid.ts
	Use: Central Druid class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/druid/wildfire",
    "img": {
        "href": "/icons/white/classes/druid.svg",
        "alt": "A stylized Druid class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Wildfire Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-female-s.webp",
                    "m": "/images/classes/druid/card-female-m.webp",
                    "l": "/images/classes/druid/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Wildfire Druid class portrait.",
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
                "alt": "A female Wildfire Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-female-s.webp",
                    "m": "/images/classes/druid/card-female-m.webp",
                    "l": "/images/classes/druid/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Wildfire Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-male-s.webp",
                    "m": "/images/classes/druid/card-male-m.webp",
                    "l": "/images/classes/druid/card-male-l.webp"
                }
            }
        }
    },
    "label": "Wildfire",
    "title": "D&D Portal - Wildfire",
    "subTitle": "Druid subclass",
    "description": "A teleporting wildfire spirit and fire/restoration synergy.",
    "descriptions": {
        "short": "A teleporting wildfire spirit and fire/restoration synergy.",
        "medium": "Wildfire: A teleporting wildfire spirit and fire/restoration synergy.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "A teleporting wildfire spirit and "
                },
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.fire",
                    "label": "fire"
                },
                {
                    "type": "text",
                    "text": "/restoration synergy."
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
        "wildfire"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "circle-spells-summon-wildfire-spirit",
                "title": "Circle Spells; Summon Wildfire Spirit",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain always-prepared "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.fire",
                                "label": "fire"
                            },
                            {
                                "type": "text",
                                "text": " and healing "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " and spend Wild Shape to summon a spirit that attacks and teleports nearby creatures."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "enhanced-bond",
                "title": "Enhanced Bond",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "While the spirit is present, add a d8 to one "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.fire",
                                "label": "fire"
                            },
                            {
                                "type": "text",
                                "text": "-damage or healing roll and cast "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " from the spirit\u2019s space."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "cauterizing-flames",
                "title": "Cauterizing Flames",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Create a spectral flame when a creature dies and use it to heal an ally or damage an enemy."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "blazing-revival",
                "title": "Blazing Revival",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "When reduced to 0 "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
                            },
                            {
                                "type": "text",
                                "text": ", dismiss the spirit to return with half your "
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
            }
        ],
        "tableOfContents": [
            {
                "id": "circle-spells-summon-wildfire-spirit",
                "title": "Circle Spells; Summon Wildfire Spirit"
            },
            {
                "id": "enhanced-bond",
                "title": "Enhanced Bond"
            },
            {
                "id": "cauterizing-flames",
                "title": "Cauterizing Flames"
            },
            {
                "id": "blazing-revival",
                "title": "Blazing Revival"
            }
        ]
    }
});
export default page;

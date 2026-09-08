/*
	Location: src/lib/typescript/data/internals/classes/monk.ts
	Use: Central Monk class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/monk/mercy",
    "img": {
        "href": "/icons/white/classes/monk.svg",
        "alt": "A stylized Monk class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Mercy Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Mercy Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-male-s.webp",
                    "m": "/images/classes/monk/card-male-m.webp",
                    "l": "/images/classes/monk/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Mercy Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Mercy Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-male-s.webp",
                    "m": "/images/classes/monk/card-male-m.webp",
                    "l": "/images/classes/monk/card-male-l.webp"
                }
            }
        }
    },
    "label": "Mercy",
    "title": "D&D Portal - Mercy",
    "subTitle": "Monk subclass",
    "description": "Use Hand of Healing and Hand of Harm with poison and restoration effects.",
    "descriptions": {
        "short": "Use Hand of Healing and Hand of Harm with poison and restoration effects.",
        "medium": "Mercy: Use Hand of Healing and Hand of Harm with poison and restoration effects.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Use Hand of Healing and Hand of Harm with "
                },
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.poison",
                    "label": "poison"
                },
                {
                    "type": "text",
                    "text": " and restoration effects."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.monk.page"
    },
    "tags": [
        "monk",
        "subclass",
        "mercy"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "implements-of-mercy-hand-of-healing-hand-of-harm",
                "title": "Implements of Mercy; Hand of Healing; Hand of Harm",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain medical and herbal training, spend ki to heal with an unarmed strike, or add "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.necrotic",
                                "label": "necrotic"
                            },
                            {
                                "type": "text",
                                "text": " damage to a hit."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "physician-s-touch",
                "title": "Physician\u2019s Touch",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Hand of Healing can end selected conditions, while Hand of Harm can impose "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.poisoned",
                                "label": "poisoned"
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
                "id": "flurry-of-healing-and-harm",
                "title": "Flurry of Healing and Harm",
                "subtitle": "11th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Replace Flurry of Blows attacks with free uses of Hand of Healing and use Hand of Harm once during the flurry without extra ki."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "hand-of-ultimate-mercy",
                "title": "Hand of Ultimate Mercy",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Spend ki to restore a recently dead creature to life with "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
                            },
                            {
                                "type": "text",
                                "text": " and remove several conditions."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "implements-of-mercy-hand-of-healing-hand-of-harm",
                "title": "Implements of Mercy; Hand of Healing; Hand of Harm"
            },
            {
                "id": "physician-s-touch",
                "title": "Physician\u2019s Touch"
            },
            {
                "id": "flurry-of-healing-and-harm",
                "title": "Flurry of Healing and Harm"
            },
            {
                "id": "hand-of-ultimate-mercy",
                "title": "Hand of Ultimate Mercy"
            }
        ]
    }
});
export default page;

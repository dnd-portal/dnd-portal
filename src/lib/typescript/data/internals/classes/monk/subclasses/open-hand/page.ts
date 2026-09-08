/*
	Location: src/lib/typescript/data/internals/classes/monk.ts
	Use: Central Monk class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/monk/open-hand",
    "img": {
        "href": "/icons/white/classes/monk.svg",
        "alt": "A stylized Monk class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Open Hand Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Open Hand Monk class portrait.",
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
                "alt": "A female Open Hand Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Open Hand Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-male-s.webp",
                    "m": "/images/classes/monk/card-male-m.webp",
                    "l": "/images/classes/monk/card-male-l.webp"
                }
            }
        }
    },
    "label": "Open Hand",
    "title": "D&D Portal - Open Hand",
    "subTitle": "Monk subclass",
    "description": "Add control riders to Flurry of Blows and gain self-healing.",
    "descriptions": {
        "short": "Add control riders to Flurry of Blows and gain self-healing.",
        "medium": "Open Hand: Add control riders to Flurry of Blows and gain self-healing.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Add control riders to Flurry of Blows and gain self-healing."
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
        "open-hand"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "open-hand-technique",
                "title": "Open Hand Technique",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Flurry of Blows hits can knock a target "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.prone",
                                "label": "prone"
                            },
                            {
                                "type": "text",
                                "text": ", push it, or prevent reactions."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "wholeness-of-body",
                "title": "Wholeness of Body",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Use an action to restore a large amount of your own "
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
                "id": "tranquility",
                "title": "Tranquility",
                "subtitle": "11th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "After a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.rests.longRest",
                                "label": "long rest"
                            },
                            {
                                "type": "text",
                                "text": ", gain the effect of Sanctuary until you attack or cast an affecting "
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
                "id": "quivering-palm",
                "title": "Quivering Palm",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Plant lethal vibrations with an unarmed hit, then trigger them later for massive damage or immediate reduction to 0 "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
                            },
                            {
                                "type": "text",
                                "text": " on a failed save."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "open-hand-technique",
                "title": "Open Hand Technique"
            },
            {
                "id": "wholeness-of-body",
                "title": "Wholeness of Body"
            },
            {
                "id": "tranquility",
                "title": "Tranquility"
            },
            {
                "id": "quivering-palm",
                "title": "Quivering Palm"
            }
        ]
    }
});
export default page;

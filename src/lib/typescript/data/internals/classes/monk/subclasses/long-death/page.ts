/*
	Location: src/lib/typescript/data/internals/classes/monk.ts
	Use: Central Monk class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/monk/long-death",
    "img": {
        "href": "/icons/white/classes/monk.svg",
        "alt": "A stylized Monk class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Long Death Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Long Death Monk class portrait.",
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
                "alt": "A female Long Death Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Long Death Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-male-s.webp",
                    "m": "/images/classes/monk/card-male-m.webp",
                    "l": "/images/classes/monk/card-male-l.webp"
                }
            }
        }
    },
    "label": "Long Death",
    "title": "D&D Portal - Long Death",
    "subTitle": "Monk subclass",
    "description": "Harvest temporary hit points and resist death through ki.",
    "descriptions": {
        "short": "Harvest temporary hit points and resist death through ki.",
        "medium": "Long Death: Harvest temporary hit points and resist death through ki.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Harvest "
                },
                {
                    "type": "link",
                    "path": "internals.rules.combat.hitPoints",
                    "label": "temporary hit points"
                },
                {
                    "type": "text",
                    "text": " and resist death through ki."
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
        "long-death"
    ],
    "content": {
        "source": "Sword Coast Adventurer\u2019s Guide",
        "featureSections": [
            {
                "id": "touch-of-death",
                "title": "Touch of Death",
                "subtitle": "3rd level",
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
                                "path": "internals.rules.combat.hitPoints",
                                "label": "temporary hit points"
                            },
                            {
                                "type": "text",
                                "text": " when you reduce a nearby creature to 0 "
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
                "id": "hour-of-reaping",
                "title": "Hour of Reaping",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Use an action to frighten creatures that can see you."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "mastery-of-death",
                "title": "Mastery of Death",
                "subtitle": "11th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Spend 1 ki to remain at 1 hit point instead of dropping to 0."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "touch-of-the-long-death",
                "title": "Touch of the Long Death",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Spend ki after touching a creature to deal scaling "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.necrotic",
                                "label": "necrotic"
                            },
                            {
                                "type": "text",
                                "text": " damage on a failed save."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "touch-of-death",
                "title": "Touch of Death"
            },
            {
                "id": "hour-of-reaping",
                "title": "Hour of Reaping"
            },
            {
                "id": "mastery-of-death",
                "title": "Mastery of Death"
            },
            {
                "id": "touch-of-the-long-death",
                "title": "Touch of the Long Death"
            }
        ]
    }
});
export default page;

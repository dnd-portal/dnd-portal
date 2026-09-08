/*
	Location: src/lib/typescript/data/internals/classes/monk.ts
	Use: Central Monk class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/monk/sun-soul",
    "img": {
        "href": "/icons/white/classes/monk.svg",
        "alt": "A stylized Monk class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Sun Soul Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Sun Soul Monk class portrait.",
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
                "alt": "A female Sun Soul Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Sun Soul Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-male-s.webp",
                    "m": "/images/classes/monk/card-male-m.webp",
                    "l": "/images/classes/monk/card-male-l.webp"
                }
            }
        }
    },
    "label": "Sun Soul",
    "title": "D&D Portal - Sun Soul",
    "subTitle": "Monk subclass",
    "description": "Fire radiant bolts and explosive sun techniques.",
    "descriptions": {
        "short": "Fire radiant bolts and explosive sun techniques.",
        "medium": "Sun Soul: Fire radiant bolts and explosive sun techniques.",
        "long": [
            [
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.fire",
                    "label": "Fire"
                },
                {
                    "type": "text",
                    "text": " "
                },
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.radiant",
                    "label": "radiant"
                },
                {
                    "type": "text",
                    "text": " bolts and explosive sun techniques."
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
        "sun-soul"
    ],
    "content": {
        "source": "Sword Coast Adventurer\u2019s Guide; Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "radiant-sun-bolt",
                "title": "Radiant Sun Bolt",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Make ranged "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.radiant",
                                "label": "radiant"
                            },
                            {
                                "type": "text",
                                "text": " "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " attacks that use Martial Arts damage and can be used with a Flurry-like "
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
                "id": "searing-arc-strike",
                "title": "Searing Arc Strike",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "After attacking, spend ki to cast Burning Hands as a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.bonusAction",
                                "label": "bonus action"
                            },
                            {
                                "type": "text",
                                "text": " and increase its level with more ki."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "searing-sunburst",
                "title": "Searing Sunburst",
                "subtitle": "11th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Create a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.radiant",
                                "label": "radiant"
                            },
                            {
                                "type": "text",
                                "text": " explosion at range, with optional ki expenditure to increase damage."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "sun-shield",
                "title": "Sun Shield",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Emit bright light and retaliate with "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.radiant",
                                "label": "radiant"
                            },
                            {
                                "type": "text",
                                "text": " damage when hit by a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.meleeAttack",
                                "label": "melee attack"
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
                "id": "radiant-sun-bolt",
                "title": "Radiant Sun Bolt"
            },
            {
                "id": "searing-arc-strike",
                "title": "Searing Arc Strike"
            },
            {
                "id": "searing-sunburst",
                "title": "Searing Sunburst"
            },
            {
                "id": "sun-shield",
                "title": "Sun Shield"
            }
        ]
    }
});
export default page;

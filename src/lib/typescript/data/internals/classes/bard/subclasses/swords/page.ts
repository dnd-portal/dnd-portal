/*
	Location: src/lib/typescript/data/internals/classes/bard.ts
	Use: Central Bard class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/bard/swords",
    "img": {
        "href": "/icons/white/classes/bard.svg",
        "alt": "A stylized Bard class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Swords Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-female-s.webp",
                    "m": "/images/classes/bard/card-female-m.webp",
                    "l": "/images/classes/bard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Swords Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-male-s.webp",
                    "m": "/images/classes/bard/card-male-m.webp",
                    "l": "/images/classes/bard/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Swords Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-female-s.webp",
                    "m": "/images/classes/bard/card-female-m.webp",
                    "l": "/images/classes/bard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Swords Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-male-s.webp",
                    "m": "/images/classes/bard/card-male-m.webp",
                    "l": "/images/classes/bard/card-male-l.webp"
                }
            }
        }
    },
    "label": "Swords",
    "title": "D&D Portal - Swords",
    "subTitle": "Bard subclass",
    "description": "Weapon flourishes, fighting style, and mobile melee performance.",
    "descriptions": {
        "short": "Weapon flourishes, fighting style, and mobile melee performance.",
        "medium": "Swords: Weapon flourishes, fighting style, and mobile melee performance.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Weapon flourishes, fighting style, and mobile melee "
                },
                {
                    "type": "link",
                    "path": "internals.rules.skills.performance",
                    "label": "performance"
                },
                {
                    "type": "text",
                    "text": "."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.bard.page"
    },
    "tags": [
        "bard",
        "subclass",
        "swords"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "bonus-proficiencies-fighting-style-blade-flourish",
                "title": "Bonus Proficiencies; Fighting Style; Blade Flourish",
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
                                "path": "internals.rules.equipment.mediumArmor",
                                "label": "medium armor"
                            },
                            {
                                "type": "text",
                                "text": " and scimitar proficiency, choose Dueling or Two-Weapon Fighting, and spend Bardic Inspiration on defensive, mobile, or sweeping flourishes."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "extra-attack",
                "title": "Extra Attack",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Attack twice when taking the "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.attackAction",
                                "label": "Attack action"
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
                "id": "master-s-flourish",
                "title": "Master\u2019s Flourish",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Use a d6 for Blade Flourish without expending Bardic Inspiration, or spend a normal die for a larger result."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "bonus-proficiencies-fighting-style-blade-flourish",
                "title": "Bonus Proficiencies; Fighting Style; Blade Flourish"
            },
            {
                "id": "extra-attack",
                "title": "Extra Attack"
            },
            {
                "id": "master-s-flourish",
                "title": "Master\u2019s Flourish"
            }
        ]
    }
});
export default page;

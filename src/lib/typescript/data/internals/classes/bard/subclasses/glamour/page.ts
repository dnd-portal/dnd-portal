/*
	Location: src/lib/typescript/data/internals/classes/bard.ts
	Use: Central Bard class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/bard/glamour",
    "img": {
        "href": "/icons/white/classes/bard.svg",
        "alt": "A stylized Bard class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Glamour Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-female-s.webp",
                    "m": "/images/classes/bard/card-female-m.webp",
                    "l": "/images/classes/bard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Glamour Bard class portrait.",
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
                "alt": "A female Glamour Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-female-s.webp",
                    "m": "/images/classes/bard/card-female-m.webp",
                    "l": "/images/classes/bard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Glamour Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-male-s.webp",
                    "m": "/images/classes/bard/card-male-m.webp",
                    "l": "/images/classes/bard/card-male-l.webp"
                }
            }
        }
    },
    "label": "Glamour",
    "title": "D&D Portal - Glamour",
    "subTitle": "Bard subclass",
    "description": "Fey majesty, battlefield repositioning, and supernatural command.",
    "descriptions": {
        "short": "Fey majesty, battlefield repositioning, and supernatural command.",
        "medium": "Glamour: Fey majesty, battlefield repositioning, and supernatural command.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Fey majesty, battlefield repositioning, and supernatural command."
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
        "glamour"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "mantle-of-inspiration-enthralling-performance",
                "title": "Mantle of Inspiration; Enthralling Performance",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Spend Bardic Inspiration to grant "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "temporary hit points"
                            },
                            {
                                "type": "text",
                                "text": " and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.reaction",
                                "label": "reaction"
                            },
                            {
                                "type": "text",
                                "text": " movement, and use a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.performance",
                                "label": "performance"
                            },
                            {
                                "type": "text",
                                "text": " to charm selected listeners."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "mantle-of-majesty",
                "title": "Mantle of Majesty",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Adopt a commanding fey appearance, cast Command repeatedly as a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.bonusAction",
                                "label": "bonus action"
                            },
                            {
                                "type": "text",
                                "text": ", and make "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.charmed",
                                "label": "charmed"
                            },
                            {
                                "type": "text",
                                "text": " creatures more likely to fail."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "unbreakable-majesty",
                "title": "Unbreakable Majesty",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.force",
                                "label": "Force"
                            },
                            {
                                "type": "text",
                                "text": " attackers to overcome a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.charisma",
                                "label": "Charisma"
                            },
                            {
                                "type": "text",
                                "text": " save before they can target you; on failure they must redirect or lose the attack."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "mantle-of-inspiration-enthralling-performance",
                "title": "Mantle of Inspiration; Enthralling Performance"
            },
            {
                "id": "mantle-of-majesty",
                "title": "Mantle of Majesty"
            },
            {
                "id": "unbreakable-majesty",
                "title": "Unbreakable Majesty"
            }
        ]
    }
});
export default page;

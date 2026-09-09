/*
	Location: src/lib/typescript/data/internals/classes/rogue.ts
	Use: Central Rogue class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/rogue/scout",
    "img": {
        "href": "/icons/white/classes/rogue.svg",
        "alt": "A stylized Rogue class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Scout Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-female-s.webp",
                    "m": "/images/classes/rogue/card-female-m.webp",
                    "l": "/images/classes/rogue/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Scout Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-male-s.webp",
                    "m": "/images/classes/rogue/card-male-m.webp",
                    "l": "/images/classes/rogue/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Scout Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-female-s.webp",
                    "m": "/images/classes/rogue/card-female-m.webp",
                    "l": "/images/classes/rogue/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Scout Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-male-s.webp",
                    "m": "/images/classes/rogue/card-male-m.webp",
                    "l": "/images/classes/rogue/card-male-l.webp"
                }
            }
        }
    },
    "label": "Scout",
    "title": "D&D Portal - Scout",
    "subTitle": "Rogue subclass",
    "description": "Wilderness expertise, reactive movement, and ranged skirmishing.",
    "descriptions": {
        "short": "Wilderness expertise, reactive movement, and ranged skirmishing.",
        "medium": "Scout: Wilderness expertise, reactive movement, and ranged skirmishing.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Wilderness expertise, reactive movement, and ranged skirmishing."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.rogue.page"
    },
    "tags": [
        "rogue",
        "subclass",
        "scout"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "skirmisher-survivalist",
                "title": "Skirmisher; Survivalist",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Move as a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.reaction",
                                "label": "reaction"
                            },
                            {
                                "type": "text",
                                "text": " when enemies approach without provoking from that enemy, and gain "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.nature",
                                "label": "Nature"
                            },
                            {
                                "type": "text",
                                "text": " and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.survival",
                                "label": "Survival"
                            },
                            {
                                "type": "text",
                                "text": " with doubled proficiency."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "superior-mobility",
                "title": "Superior Mobility",
                "subtitle": "9th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Increase "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.walking",
                                "label": "walking"
                            },
                            {
                                "type": "text",
                                "text": " "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.speed",
                                "label": "speed"
                            },
                            {
                                "type": "text",
                                "text": " and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.climbing",
                                "label": "climbing"
                            },
                            {
                                "type": "text",
                                "text": " or "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.swimming",
                                "label": "swimming"
                            },
                            {
                                "type": "text",
                                "text": " speeds."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "ambush-master",
                "title": "Ambush Master",
                "subtitle": "13th level",
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
                                "path": "internals.rules.combat.initiativeRoll",
                                "label": "initiative"
                            },
                            {
                                "type": "text",
                                "text": " advantage; the first creature you hit becomes easier for everyone to attack for the round."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "sudden-strike",
                "title": "Sudden Strike",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Make an extra bonus-action attack and potentially apply Sneak Attack to a second target."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "skirmisher-survivalist",
                "title": "Skirmisher; Survivalist"
            },
            {
                "id": "superior-mobility",
                "title": "Superior Mobility"
            },
            {
                "id": "ambush-master",
                "title": "Ambush Master"
            },
            {
                "id": "sudden-strike",
                "title": "Sudden Strike"
            }
        ]
    }
});
export default page;

/*
	Location: src/lib/typescript/data/internals/classes/fighter.ts
	Use: Central Fighter class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/fighter/battle-master",
    "img": {
        "href": "/icons/white/classes/fighter.svg",
        "alt": "A stylized Fighter class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Battle Master Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Battle Master Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-male-s.webp",
                    "m": "/images/classes/fighter/card-male-m.webp",
                    "l": "/images/classes/fighter/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Battle Master Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Battle Master Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-male-s.webp",
                    "m": "/images/classes/fighter/card-male-m.webp",
                    "l": "/images/classes/fighter/card-male-l.webp"
                }
            }
        }
    },
    "label": "Battle Master",
    "title": "D&D Portal - Battle Master",
    "subTitle": "Fighter subclass",
    "description": "Spend superiority dice on tactical maneuvers.",
    "descriptions": {
        "short": "Spend superiority dice on tactical maneuvers.",
        "medium": "Battle Master: Spend superiority dice on tactical maneuvers.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Spend superiority dice on tactical maneuvers."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.fighter.page"
    },
    "tags": [
        "fighter",
        "subclass",
        "battle-master"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "combat-superiority-student-of-war",
                "title": "Combat Superiority; Student of War",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Learn maneuvers powered by superiority dice and gain proficiency with one artisan\u2019s tool."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "know-your-enemy",
                "title": "Know Your Enemy",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Study a creature outside combat to compare selected combat statistics with your own."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "improved-combat-superiority-10th-level",
                "title": "Improved Combat Superiority",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Increase superiority dice to d10."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "relentless",
                "title": "Relentless",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Regain one superiority die when rolling "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.initiativeRoll",
                                "label": "initiative"
                            },
                            {
                                "type": "text",
                                "text": " with none remaining."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "improved-combat-superiority-18th-level",
                "title": "Improved Combat Superiority",
                "subtitle": "18th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Increase superiority dice to d12."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "combat-superiority-student-of-war",
                "title": "Combat Superiority; Student of War"
            },
            {
                "id": "know-your-enemy",
                "title": "Know Your Enemy"
            },
            {
                "id": "improved-combat-superiority-10th-level",
                "title": "Improved Combat Superiority"
            },
            {
                "id": "relentless",
                "title": "Relentless"
            },
            {
                "id": "improved-combat-superiority-18th-level",
                "title": "Improved Combat Superiority"
            }
        ]
    }
});
export default page;

/*
	Location: src/lib/typescript/data/internals/classes/fighter.ts
	Use: Central Fighter class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/fighter/banneret",
    "img": {
        "href": "/icons/white/classes/fighter.svg",
        "alt": "A stylized Fighter class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Banneret Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Banneret Fighter class portrait.",
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
                "alt": "A female Banneret Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Banneret Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-male-s.webp",
                    "m": "/images/classes/fighter/card-male-m.webp",
                    "l": "/images/classes/fighter/card-male-l.webp"
                }
            }
        }
    },
    "label": "Banneret",
    "title": "D&D Portal - Banneret",
    "subTitle": "Fighter subclass",
    "description": "Share fighter recovery and inspire allies through leadership.",
    "descriptions": {
        "short": "Share fighter recovery and inspire allies through leadership.",
        "medium": "Banneret: Share fighter recovery and inspire allies through leadership.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Share fighter recovery and inspire allies through leadership."
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
        "banneret"
    ],
    "content": {
        "source": "Sword Coast Adventurer\u2019s Guide",
        "featureSections": [
            {
                "id": "rallying-cry",
                "title": "Rallying Cry",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Second Wind also restores "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
                            },
                            {
                                "type": "text",
                                "text": " to several nearby allies who can see or hear you."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "royal-envoy",
                "title": "Royal Envoy",
                "subtitle": "7th level",
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
                                "path": "internals.rules.skills.persuasion",
                                "label": "Persuasion"
                            },
                            {
                                "type": "text",
                                "text": " proficiency or another skill, and double proficiency for "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.persuasion",
                                "label": "Persuasion"
                            },
                            {
                                "type": "text",
                                "text": " checks."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "inspiring-surge",
                "title": "Inspiring Surge",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "When using Action Surge, let an ally make one weapon attack as a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.reaction",
                                "label": "reaction"
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
                "id": "bulwark",
                "title": "Bulwark",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "When using Indomitable against an "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.intelligence",
                                "label": "Intelligence"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.wisdom",
                                "label": "Wisdom"
                            },
                            {
                                "type": "text",
                                "text": ", or "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.charisma",
                                "label": "Charisma"
                            },
                            {
                                "type": "text",
                                "text": " save, allow an ally who failed the same effect to reroll."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "inspiring-surge-improvement",
                "title": "Inspiring Surge improvement",
                "subtitle": "18th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Allow two allies to make "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.reaction",
                                "label": "reaction"
                            },
                            {
                                "type": "text",
                                "text": " attacks when you use Inspiring Surge."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "rallying-cry",
                "title": "Rallying Cry"
            },
            {
                "id": "royal-envoy",
                "title": "Royal Envoy"
            },
            {
                "id": "inspiring-surge",
                "title": "Inspiring Surge"
            },
            {
                "id": "bulwark",
                "title": "Bulwark"
            },
            {
                "id": "inspiring-surge-improvement",
                "title": "Inspiring Surge improvement"
            }
        ]
    }
});
export default page;

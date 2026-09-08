/*
	Location: src/lib/typescript/data/internals/classes/fighter.ts
	Use: Central Fighter class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/fighter/champion",
    "img": {
        "href": "/icons/white/classes/fighter.svg",
        "alt": "A stylized Fighter class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Champion Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Champion Fighter class portrait.",
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
                "alt": "A female Champion Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Champion Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-male-s.webp",
                    "m": "/images/classes/fighter/card-male-m.webp",
                    "l": "/images/classes/fighter/card-male-l.webp"
                }
            }
        }
    },
    "label": "Champion",
    "title": "D&D Portal - Champion",
    "subTitle": "Fighter subclass",
    "description": "Improved critical range, physical excellence, and simple reliability.",
    "descriptions": {
        "short": "Improved critical range, physical excellence, and simple reliability.",
        "medium": "Champion: Improved critical range, physical excellence, and simple reliability.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Improved critical range, physical excellence, and simple reliability."
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
        "champion"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "improved-critical",
                "title": "Improved Critical",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Weapon attacks score a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.criticalHit",
                                "label": "critical hit"
                            },
                            {
                                "type": "text",
                                "text": " on a roll of 19 or 20."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "remarkable-athlete",
                "title": "Remarkable Athlete",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Add half proficiency to certain physical checks and improve running jumps."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "additional-fighting-style",
                "title": "Additional Fighting Style",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Choose a second Fighting Style."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "superior-critical",
                "title": "Superior Critical",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Weapon attacks score a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.criticalHit",
                                "label": "critical hit"
                            },
                            {
                                "type": "text",
                                "text": " on a roll of 18\u201320."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "survivor",
                "title": "Survivor",
                "subtitle": "18th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Regain "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
                            },
                            {
                                "type": "text",
                                "text": " at the start of each turn while below half health but above 0 "
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
                "id": "improved-critical",
                "title": "Improved Critical"
            },
            {
                "id": "remarkable-athlete",
                "title": "Remarkable Athlete"
            },
            {
                "id": "additional-fighting-style",
                "title": "Additional Fighting Style"
            },
            {
                "id": "superior-critical",
                "title": "Superior Critical"
            },
            {
                "id": "survivor",
                "title": "Survivor"
            }
        ]
    }
});
export default page;

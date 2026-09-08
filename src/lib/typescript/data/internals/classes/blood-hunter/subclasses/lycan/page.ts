/*
	Location: src/lib/typescript/data/internals/classes/blood-hunter.ts
	Use: Central Blood Hunter class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/blood-hunter/lycan",
    "img": {
        "href": "/icons/white/game/character.svg",
        "alt": "A stylized Blood Hunter class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Lycan Blood Hunter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/blood-hunter/card-female-s.webp",
                    "m": "/images/classes/blood-hunter/card-female-m.webp",
                    "l": "/images/classes/blood-hunter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Lycan Blood Hunter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/blood-hunter/card-male-s.webp",
                    "m": "/images/classes/blood-hunter/card-male-m.webp",
                    "l": "/images/classes/blood-hunter/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Lycan Blood Hunter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/blood-hunter/card-female-s.webp",
                    "m": "/images/classes/blood-hunter/card-female-m.webp",
                    "l": "/images/classes/blood-hunter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Lycan Blood Hunter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/blood-hunter/card-male-s.webp",
                    "m": "/images/classes/blood-hunter/card-male-m.webp",
                    "l": "/images/classes/blood-hunter/card-male-l.webp"
                }
            }
        }
    },
    "label": "Lycan",
    "title": "D&D Portal - Lycan",
    "subTitle": "Blood Hunter subclass",
    "description": "Controlled hybrid transformation with claws, resilience, and risk of bloodlust.",
    "descriptions": {
        "short": "Controlled hybrid transformation with claws, resilience, and risk of bloodlust.",
        "medium": "Lycan: Controlled hybrid transformation with claws, resilience, and risk of bloodlust.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Controlled hybrid transformation with claws, resilience, and risk of bloodlust."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.bloodHunter.page"
    },
    "tags": [
        "blood-hunter",
        "subclass",
        "lycan"
    ],
    "content": {
        "source": "D&D Beyond",
        "featureSections": [
            {
                "id": "heightened-senses-hybrid-transformation",
                "title": "Heightened Senses; Hybrid Transformation",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain enhanced hearing and smell and transform into a controlled hybrid form with feral "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.strength",
                                "label": "strength"
                            },
                            {
                                "type": "text",
                                "text": ", resilient defenses, claws, and a bloodlust risk."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "stalker-s-prowess",
                "title": "Stalker\u2019s Prowess",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Improve "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.speed",
                                "label": "speed"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.jumping",
                                "label": "jumping"
                            },
                            {
                                "type": "text",
                                "text": ", and hybrid-form unarmed strikes."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "advanced-transformation",
                "title": "Advanced Transformation",
                "subtitle": "11th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Use Hybrid Transformation more often and gain regeneration and improved feral damage while transformed."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "brand-of-the-voracious",
                "title": "Brand of the Voracious",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Improve control over bloodlust and gain advantage against the creature marked by Brand of Castigation."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "hybrid-transformation-mastery",
                "title": "Hybrid Transformation Mastery",
                "subtitle": "18th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Transform without use limits or a fixed duration and gain the Blood Curse of the Howl."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "heightened-senses-hybrid-transformation",
                "title": "Heightened Senses; Hybrid Transformation"
            },
            {
                "id": "stalker-s-prowess",
                "title": "Stalker\u2019s Prowess"
            },
            {
                "id": "advanced-transformation",
                "title": "Advanced Transformation"
            },
            {
                "id": "brand-of-the-voracious",
                "title": "Brand of the Voracious"
            },
            {
                "id": "hybrid-transformation-mastery",
                "title": "Hybrid Transformation Mastery"
            }
        ]
    }
});
export default page;

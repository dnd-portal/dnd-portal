/*
	Location: src/lib/typescript/data/internals/classes/cleric.ts
	Use: Central Cleric class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/cleric/knowledge",
    "img": {
        "href": "/icons/white/classes/cleric.svg",
        "alt": "A stylized Cleric class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Knowledge Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Knowledge Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-male-s.webp",
                    "m": "/images/classes/cleric/card-male-m.webp",
                    "l": "/images/classes/cleric/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Knowledge Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Knowledge Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-male-s.webp",
                    "m": "/images/classes/cleric/card-male-m.webp",
                    "l": "/images/classes/cleric/card-male-l.webp"
                }
            }
        }
    },
    "label": "Knowledge",
    "title": "D&D Portal - Knowledge",
    "subTitle": "Cleric subclass",
    "description": "Expertise-like knowledge, languages, divination, and mental control.",
    "descriptions": {
        "short": "Expertise-like knowledge, languages, divination, and mental control.",
        "medium": "Knowledge: Expertise-like knowledge, languages, divination, and mental control.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Expertise-like knowledge, languages, divination, and mental control."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.cleric.page"
    },
    "tags": [
        "cleric",
        "subclass",
        "knowledge"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "domain-spells-blessings-of-knowledge",
                "title": "Domain Spells; Blessings of Knowledge",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Always prepare knowledge-themed "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": ", learn two languages, and gain two knowledge proficiencies with doubled proficiency bonus."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "channel-divinity-knowledge-of-the-ages",
                "title": "Channel Divinity: Knowledge of the Ages",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Temporarily gain proficiency with one skill or tool."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "channel-divinity-read-thoughts",
                "title": "Channel Divinity: Read Thoughts",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Read a creature\u2019s surface thoughts and potentially cast Suggestion on it without a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " slot."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "potent-spellcasting",
                "title": "Potent Spellcasting",
                "subtitle": "8th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Add "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.wisdom",
                                "label": "Wisdom"
                            },
                            {
                                "type": "text",
                                "text": " to the damage of cleric "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.cantrips",
                                "label": "cantrips"
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
                "id": "visions-of-the-past",
                "title": "Visions of the Past",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Read recent impressions from an object or location through prolonged meditation."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "domain-spells-blessings-of-knowledge",
                "title": "Domain Spells; Blessings of Knowledge"
            },
            {
                "id": "channel-divinity-knowledge-of-the-ages",
                "title": "Channel Divinity: Knowledge of the Ages"
            },
            {
                "id": "channel-divinity-read-thoughts",
                "title": "Channel Divinity: Read Thoughts"
            },
            {
                "id": "potent-spellcasting",
                "title": "Potent Spellcasting"
            },
            {
                "id": "visions-of-the-past",
                "title": "Visions of the Past"
            }
        ]
    }
});
export default page;

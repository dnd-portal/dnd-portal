/*
	Location: src/lib/typescript/data/internals/classes/sorcerer.ts
	Use: Central Sorcerer class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/sorcerer/storm-sorcery",
    "img": {
        "href": "/icons/white/classes/sorcerer.svg",
        "alt": "A stylized Sorcerer class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Storm Sorcery Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-female-s.webp",
                    "m": "/images/classes/sorcerer/card-female-m.webp",
                    "l": "/images/classes/sorcerer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Storm Sorcery Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-male-s.webp",
                    "m": "/images/classes/sorcerer/card-male-m.webp",
                    "l": "/images/classes/sorcerer/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Storm Sorcery Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-female-s.webp",
                    "m": "/images/classes/sorcerer/card-female-m.webp",
                    "l": "/images/classes/sorcerer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Storm Sorcery Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-male-s.webp",
                    "m": "/images/classes/sorcerer/card-male-m.webp",
                    "l": "/images/classes/sorcerer/card-male-l.webp"
                }
            }
        }
    },
    "label": "Storm Sorcery",
    "title": "D&D Portal - Storm Sorcery",
    "subTitle": "Sorcerer subclass",
    "description": "Wind mobility, lightning retaliation, resistance, and storm flight.",
    "descriptions": {
        "short": "Wind mobility, lightning retaliation, resistance, and storm flight.",
        "medium": "Storm Sorcery: Wind mobility, lightning retaliation, resistance, and storm flight.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Wind mobility, "
                },
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.lightning",
                    "label": "lightning"
                },
                {
                    "type": "text",
                    "text": " retaliation, resistance, and storm flight."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.sorcerer.page"
    },
    "tags": [
        "sorcerer",
        "subclass",
        "storm-sorcery"
    ],
    "content": {
        "source": "Sword Coast Adventurer\u2019s Guide; Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "wind-speaker-tempestuous-magic",
                "title": "Wind Speaker; Tempestuous Magic",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Speak Primordial and move briefly without provoking after casting a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
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
                "id": "heart-of-the-storm-storm-guide",
                "title": "Heart of the Storm; Storm Guide",
                "subtitle": "6th level",
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
                                "path": "internals.rules.damageTypes.lightning",
                                "label": "lightning"
                            },
                            {
                                "type": "text",
                                "text": " and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.thunder",
                                "label": "thunder"
                            },
                            {
                                "type": "text",
                                "text": " resistance, damage nearby creatures when casting such "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": ", and control local wind and rain."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "storm-s-fury",
                "title": "Storm\u2019s Fury",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Use a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.reaction",
                                "label": "reaction"
                            },
                            {
                                "type": "text",
                                "text": " when hit in melee to deal "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.lightning",
                                "label": "lightning"
                            },
                            {
                                "type": "text",
                                "text": " damage and push the attacker away."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "wind-soul",
                "title": "Wind Soul",
                "subtitle": "18th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Become immune to "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.lightning",
                                "label": "lightning"
                            },
                            {
                                "type": "text",
                                "text": " and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.thunder",
                                "label": "thunder"
                            },
                            {
                                "type": "text",
                                "text": ", gain permanent flight, and grant temporary flight to allies."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "wind-speaker-tempestuous-magic",
                "title": "Wind Speaker; Tempestuous Magic"
            },
            {
                "id": "heart-of-the-storm-storm-guide",
                "title": "Heart of the Storm; Storm Guide"
            },
            {
                "id": "storm-s-fury",
                "title": "Storm\u2019s Fury"
            },
            {
                "id": "wind-soul",
                "title": "Wind Soul"
            }
        ]
    }
});
export default page;

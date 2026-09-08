/*
	Location: src/lib/typescript/data/internals/classes/fighter.ts
	Use: Central Fighter class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/fighter/rune-knight",
    "img": {
        "href": "/icons/white/classes/fighter.svg",
        "alt": "A stylized Fighter class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Rune Knight Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Rune Knight Fighter class portrait.",
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
                "alt": "A female Rune Knight Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Rune Knight Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-male-s.webp",
                    "m": "/images/classes/fighter/card-male-m.webp",
                    "l": "/images/classes/fighter/card-male-l.webp"
                }
            }
        }
    },
    "label": "Rune Knight",
    "title": "D&D Portal - Rune Knight",
    "subTitle": "Fighter subclass",
    "description": "Inscribe runes and grow to giant size for control and power.",
    "descriptions": {
        "short": "Inscribe runes and grow to giant size for control and power.",
        "medium": "Rune Knight: Inscribe runes and grow to giant size for control and power.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Inscribe runes and grow to giant size for control and power."
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
        "rune-knight"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "bonus-proficiencies-rune-carver-giant-s-might",
                "title": "Bonus Proficiencies; Rune Carver; Giant\u2019s Might",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Learn Giant language and smith\u2019s tools, inscribe runes with passive and invoked effects, and temporarily grow larger with bonus damage and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.strength",
                                "label": "Strength"
                            },
                            {
                                "type": "text",
                                "text": " advantages."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "runic-shield-additional-rune",
                "title": "Runic Shield; additional rune",
                "subtitle": "7th level",
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
                                "text": " a nearby attacker to reroll a successful attack, and learn another rune including higher-level options."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "great-stature-additional-rune",
                "title": "Great Stature; additional rune",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Permanently grow taller, improve Giant\u2019s Might damage, and learn another rune."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "master-of-runes-additional-rune",
                "title": "Master of Runes; additional rune",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Invoke each known rune twice between rests and learn another rune."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "runic-juggernaut",
                "title": "Runic Juggernaut",
                "subtitle": "18th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Giant\u2019s Might can make you Huge and further increases reach."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "bonus-proficiencies-rune-carver-giant-s-might",
                "title": "Bonus Proficiencies; Rune Carver; Giant\u2019s Might"
            },
            {
                "id": "runic-shield-additional-rune",
                "title": "Runic Shield; additional rune"
            },
            {
                "id": "great-stature-additional-rune",
                "title": "Great Stature; additional rune"
            },
            {
                "id": "master-of-runes-additional-rune",
                "title": "Master of Runes; additional rune"
            },
            {
                "id": "runic-juggernaut",
                "title": "Runic Juggernaut"
            }
        ]
    }
});
export default page;

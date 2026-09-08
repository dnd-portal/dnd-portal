/*
	Location: src/lib/typescript/data/internals/classes/sorcerer.ts
	Use: Central Sorcerer class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/sorcerer/wild-magic",
    "img": {
        "href": "/icons/white/classes/sorcerer.svg",
        "alt": "A stylized Sorcerer class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Wild Magic Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-female-s.webp",
                    "m": "/images/classes/sorcerer/card-female-m.webp",
                    "l": "/images/classes/sorcerer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Wild Magic Sorcerer class portrait.",
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
                "alt": "A female Wild Magic Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-female-s.webp",
                    "m": "/images/classes/sorcerer/card-female-m.webp",
                    "l": "/images/classes/sorcerer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Wild Magic Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-male-s.webp",
                    "m": "/images/classes/sorcerer/card-male-m.webp",
                    "l": "/images/classes/sorcerer/card-male-l.webp"
                }
            }
        }
    },
    "label": "Wild Magic",
    "title": "D&D Portal - Wild Magic",
    "subTitle": "Sorcerer subclass",
    "description": "Random surges, Bend Luck, and controlled chaos.",
    "descriptions": {
        "short": "Random surges, Bend Luck, and controlled chaos.",
        "medium": "Wild Magic: Random surges, Bend Luck, and controlled chaos.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Random surges, Bend Luck, and controlled chaos."
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
        "wild-magic"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "wild-magic-surge-tides-of-chaos",
                "title": "Wild Magic Surge; Tides of Chaos",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Spellcasting can trigger random magical surges, and you can gain advantage on one roll before requiring a surge or rest to recharge."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "bend-luck",
                "title": "Bend Luck",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Spend sorcery points as a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.reaction",
                                "label": "reaction"
                            },
                            {
                                "type": "text",
                                "text": " to add or subtract a d4 from another creature\u2019s roll."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "controlled-chaos",
                "title": "Controlled Chaos",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Roll twice for Wild Magic Surge and choose either result."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "spell-bombardment",
                "title": "Spell Bombardment",
                "subtitle": "18th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "When rolling maximum on a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": "-damage die, roll one additional die once per turn."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "wild-magic-surge-tides-of-chaos",
                "title": "Wild Magic Surge; Tides of Chaos"
            },
            {
                "id": "bend-luck",
                "title": "Bend Luck"
            },
            {
                "id": "controlled-chaos",
                "title": "Controlled Chaos"
            },
            {
                "id": "spell-bombardment",
                "title": "Spell Bombardment"
            }
        ]
    }
});
export default page;

/*
	Location: src/lib/typescript/data/internals/classes/blood-hunter.ts
	Use: Central Blood Hunter class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/blood-hunter/ghostslayer",
    "img": {
        "href": "/icons/white/game/character.svg",
        "alt": "A stylized Blood Hunter class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Ghostslayer Blood Hunter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/blood-hunter/card-female-s.webp",
                    "m": "/images/classes/blood-hunter/card-female-m.webp",
                    "l": "/images/classes/blood-hunter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Ghostslayer Blood Hunter class portrait.",
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
                "alt": "A female Ghostslayer Blood Hunter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/blood-hunter/card-female-s.webp",
                    "m": "/images/classes/blood-hunter/card-female-m.webp",
                    "l": "/images/classes/blood-hunter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Ghostslayer Blood Hunter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/blood-hunter/card-male-s.webp",
                    "m": "/images/classes/blood-hunter/card-male-m.webp",
                    "l": "/images/classes/blood-hunter/card-male-l.webp"
                }
            }
        }
    },
    "label": "Ghostslayer",
    "title": "D&D Portal - Ghostslayer",
    "subTitle": "Blood Hunter subclass",
    "description": "Specialize against undead with radiant rites and improved curses.",
    "descriptions": {
        "short": "Specialize against undead with radiant rites and improved curses.",
        "medium": "Ghostslayer: Specialize against undead with radiant rites and improved curses.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Specialize against undead with "
                },
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.radiant",
                    "label": "radiant"
                },
                {
                    "type": "text",
                    "text": " rites and improved curses."
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
        "ghostslayer"
    ],
    "content": {
        "source": "D&D Beyond",
        "featureSections": [
            {
                "id": "rite-of-the-dawn-curse-specialist",
                "title": "Rite of the Dawn; Curse Specialist",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Learn a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.radiant",
                                "label": "radiant"
                            },
                            {
                                "type": "text",
                                "text": " crimson rite that is especially effective against undead, and gain an additional Blood Maledict use with broader curse applicability."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "aether-walk",
                "title": "Aether Walk",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Temporarily step into the Border Ethereal to move through creatures and objects."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "brand-of-sundering",
                "title": "Brand of Sundering",
                "subtitle": "11th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "The branded target takes extra rite damage and cannot use incorporeal movement through creatures or objects."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "blood-curse-of-the-exorcist",
                "title": "Blood Curse of the Exorcist",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain a unique blood curse that ends charm, fear, or possession and punishes the responsible creature."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "rite-revival",
                "title": "Rite Revival",
                "subtitle": "18th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "When reduced to 0 "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
                            },
                            {
                                "type": "text",
                                "text": ", end active crimson rites to remain at 1 hit point."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "rite-of-the-dawn-curse-specialist",
                "title": "Rite of the Dawn; Curse Specialist"
            },
            {
                "id": "aether-walk",
                "title": "Aether Walk"
            },
            {
                "id": "brand-of-sundering",
                "title": "Brand of Sundering"
            },
            {
                "id": "blood-curse-of-the-exorcist",
                "title": "Blood Curse of the Exorcist"
            },
            {
                "id": "rite-revival",
                "title": "Rite Revival"
            }
        ]
    }
});
export default page;

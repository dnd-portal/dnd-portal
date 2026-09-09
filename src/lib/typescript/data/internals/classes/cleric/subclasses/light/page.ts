/*
	Location: src/lib/typescript/data/internals/classes/cleric.ts
	Use: Central Cleric class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/cleric/light",
    "img": {
        "href": "/icons/white/classes/cleric.svg",
        "alt": "A stylized Cleric class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Light Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Light Cleric class portrait.",
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
                "alt": "A female Light Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Light Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-male-s.webp",
                    "m": "/images/classes/cleric/card-male-m.webp",
                    "l": "/images/classes/cleric/card-male-l.webp"
                }
            }
        }
    },
    "label": "Light",
    "title": "D&D Portal - Light",
    "subTitle": "Cleric subclass",
    "description": "Radiant and fire magic, defensive flares, and daylight control.",
    "descriptions": {
        "short": "Radiant and fire magic, defensive flares, and daylight control.",
        "medium": "Light: Radiant and fire magic, defensive flares, and daylight control.",
        "long": [
            [
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.radiant",
                    "label": "Radiant"
                },
                {
                    "type": "text",
                    "text": " and "
                },
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.fire",
                    "label": "fire"
                },
                {
                    "type": "text",
                    "text": " magic, defensive flares, and daylight control."
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
        "light"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "domain-spells-bonus-cantrip-warding-flare",
                "title": "Domain Spells; Bonus Cantrip; Warding Flare",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Always prepare light and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.fire",
                                "label": "fire"
                            },
                            {
                                "type": "text",
                                "text": " "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": ", learn Light, and impose disadvantage on a nearby attacker as a "
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
                "id": "channel-divinity-radiance-of-the-dawn",
                "title": "Channel Divinity: Radiance of the Dawn",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Dispel magical darkness and deal "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.radiant",
                                "label": "radiant"
                            },
                            {
                                "type": "text",
                                "text": " damage to chosen hostile creatures nearby."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "improved-flare",
                "title": "Improved Flare",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Use Warding Flare to protect nearby creatures, not only yourself."
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
                "id": "corona-of-light",
                "title": "Corona of Light",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Create sunlight that gives enemies disadvantage on saves against your "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.fire",
                                "label": "fire"
                            },
                            {
                                "type": "text",
                                "text": " and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.radiant",
                                "label": "radiant"
                            },
                            {
                                "type": "text",
                                "text": " "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
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
                "id": "domain-spells-bonus-cantrip-warding-flare",
                "title": "Domain Spells; Bonus Cantrip; Warding Flare"
            },
            {
                "id": "channel-divinity-radiance-of-the-dawn",
                "title": "Channel Divinity: Radiance of the Dawn"
            },
            {
                "id": "improved-flare",
                "title": "Improved Flare"
            },
            {
                "id": "potent-spellcasting",
                "title": "Potent Spellcasting"
            },
            {
                "id": "corona-of-light",
                "title": "Corona of Light"
            }
        ]
    }
});
export default page;

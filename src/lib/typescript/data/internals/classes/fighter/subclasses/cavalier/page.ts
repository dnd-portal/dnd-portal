/*
	Location: src/lib/typescript/data/internals/classes/fighter.ts
	Use: Central Fighter class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/fighter/cavalier",
    "img": {
        "href": "/icons/white/classes/fighter.svg",
        "alt": "A stylized Fighter class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Cavalier Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Cavalier Fighter class portrait.",
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
                "alt": "A female Cavalier Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Cavalier Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-male-s.webp",
                    "m": "/images/classes/fighter/card-male-m.webp",
                    "l": "/images/classes/fighter/card-male-l.webp"
                }
            }
        }
    },
    "label": "Cavalier",
    "title": "D&D Portal - Cavalier",
    "subTitle": "Fighter subclass",
    "description": "Mounted and defensive control focused on marking and holding enemies.",
    "descriptions": {
        "short": "Mounted and defensive control focused on marking and holding enemies.",
        "medium": "Cavalier: Mounted and defensive control focused on marking and holding enemies.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Mounted and defensive control focused on marking and holding enemies."
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
        "cavalier"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "bonus-proficiency-born-to-the-saddle-unwavering-mark",
                "title": "Bonus Proficiency; Born to the Saddle; Unwavering Mark",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain a skill or language, become highly capable while mounted, and mark enemies so they are punished for attacking others."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "warding-maneuver",
                "title": "Warding Maneuver",
                "subtitle": "7th level",
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
                                "text": " and a die roll to increase the "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.armorClass",
                                "label": "Armor Class"
                            },
                            {
                                "type": "text",
                                "text": " of yourself or a nearby creature against one attack."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "hold-the-line",
                "title": "Hold the Line",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Make opportunity attacks when creatures move within your reach and stop their movement on a hit."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "ferocious-charger",
                "title": "Ferocious Charger",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "After moving before a hit, "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.force",
                                "label": "force"
                            },
                            {
                                "type": "text",
                                "text": " the target to save or fall "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.prone",
                                "label": "prone"
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
                "id": "vigilant-defender",
                "title": "Vigilant Defender",
                "subtitle": "18th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain a special "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.reaction",
                                "label": "reaction"
                            },
                            {
                                "type": "text",
                                "text": " on every creature\u2019s turn for opportunity attacks."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "bonus-proficiency-born-to-the-saddle-unwavering-mark",
                "title": "Bonus Proficiency; Born to the Saddle; Unwavering Mark"
            },
            {
                "id": "warding-maneuver",
                "title": "Warding Maneuver"
            },
            {
                "id": "hold-the-line",
                "title": "Hold the Line"
            },
            {
                "id": "ferocious-charger",
                "title": "Ferocious Charger"
            },
            {
                "id": "vigilant-defender",
                "title": "Vigilant Defender"
            }
        ]
    }
});
export default page;

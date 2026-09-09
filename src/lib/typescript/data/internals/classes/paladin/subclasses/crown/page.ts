/*
	Location: src/lib/typescript/data/internals/classes/paladin.ts
	Use: Central Paladin class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/paladin/crown",
    "img": {
        "href": "/icons/white/classes/paladin.svg",
        "alt": "A stylized Paladin class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Crown Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-female-s.webp",
                    "m": "/images/classes/paladin/card-female-m.webp",
                    "l": "/images/classes/paladin/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Crown Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-male-s.webp",
                    "m": "/images/classes/paladin/card-male-m.webp",
                    "l": "/images/classes/paladin/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Crown Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-female-s.webp",
                    "m": "/images/classes/paladin/card-female-m.webp",
                    "l": "/images/classes/paladin/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Crown Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-male-s.webp",
                    "m": "/images/classes/paladin/card-male-m.webp",
                    "l": "/images/classes/paladin/card-male-l.webp"
                }
            }
        }
    },
    "label": "Crown",
    "title": "D&D Portal - Crown",
    "subTitle": "Paladin subclass",
    "description": "Protect allies and force enemies to remain nearby.",
    "descriptions": {
        "short": "Protect allies and force enemies to remain nearby.",
        "medium": "Crown: Protect allies and force enemies to remain nearby.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Protect allies and "
                },
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.force",
                    "label": "force"
                },
                {
                    "type": "text",
                    "text": " enemies to remain nearby."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.paladin.page"
    },
    "tags": [
        "paladin",
        "subclass",
        "crown"
    ],
    "content": {
        "source": "Sword Coast Adventurer\u2019s Guide",
        "featureSections": [
            {
                "id": "oath-spells-channel-divinity-champion-challenge-turn-the-tide",
                "title": "Oath Spells; Channel Divinity: Champion Challenge, Turn the Tide",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain always-prepared oath "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": ", keep chosen enemies close, or heal nearby allies below half health."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "divine-allegiance",
                "title": "Divine Allegiance",
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
                                "text": " to take damage in place of a nearby creature."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "unyielding-spirit",
                "title": "Unyielding Spirit",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain advantage on saves against paralysis and stun."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "exalted-champion",
                "title": "Exalted Champion",
                "subtitle": "20th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Temporarily gain resistance to nonmagical weapon damage and grant nearby allies advantage on death and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.wisdom",
                                "label": "Wisdom"
                            },
                            {
                                "type": "text",
                                "text": " saves."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "oath-spells-channel-divinity-champion-challenge-turn-the-tide",
                "title": "Oath Spells; Channel Divinity: Champion Challenge, Turn the Tide"
            },
            {
                "id": "divine-allegiance",
                "title": "Divine Allegiance"
            },
            {
                "id": "unyielding-spirit",
                "title": "Unyielding Spirit"
            },
            {
                "id": "exalted-champion",
                "title": "Exalted Champion"
            }
        ]
    }
});
export default page;

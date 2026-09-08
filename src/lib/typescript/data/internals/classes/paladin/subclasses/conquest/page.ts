/*
	Location: src/lib/typescript/data/internals/classes/paladin.ts
	Use: Central Paladin class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/paladin/conquest",
    "img": {
        "href": "/icons/white/classes/paladin.svg",
        "alt": "A stylized Paladin class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Conquest Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-female-s.webp",
                    "m": "/images/classes/paladin/card-female-m.webp",
                    "l": "/images/classes/paladin/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Conquest Paladin class portrait.",
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
                "alt": "A female Conquest Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-female-s.webp",
                    "m": "/images/classes/paladin/card-female-m.webp",
                    "l": "/images/classes/paladin/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Conquest Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-male-s.webp",
                    "m": "/images/classes/paladin/card-male-m.webp",
                    "l": "/images/classes/paladin/card-male-l.webp"
                }
            }
        }
    },
    "label": "Conquest",
    "title": "D&D Portal - Conquest",
    "subTitle": "Paladin subclass",
    "description": "Fear, immobilization, and punishment of frightened enemies.",
    "descriptions": {
        "short": "Fear, immobilization, and punishment of frightened enemies.",
        "medium": "Conquest: Fear, immobilization, and punishment of frightened enemies.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Fear, immobilization, and punishment of "
                },
                {
                    "type": "link",
                    "path": "internals.rules.conditions.frightened",
                    "label": "frightened"
                },
                {
                    "type": "text",
                    "text": " enemies."
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
        "conquest"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "oath-spells-channel-divinity-conquering-presence-guided-strike",
                "title": "Oath Spells; Channel Divinity: Conquering Presence, Guided Strike",
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
                                "text": ", frighten nearby creatures, or add a large bonus to one "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.attackRoll",
                                "label": "attack roll"
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
                "id": "aura-of-conquest",
                "title": "Aura of Conquest",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.frightened",
                                "label": "Frightened"
                            },
                            {
                                "type": "text",
                                "text": " enemies in your aura have "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.speed",
                                "label": "speed"
                            },
                            {
                                "type": "text",
                                "text": " 0 and take "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.psychic",
                                "label": "psychic"
                            },
                            {
                                "type": "text",
                                "text": " damage."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "scornful-rebuke",
                "title": "Scornful Rebuke",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Deal "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.psychic",
                                "label": "psychic"
                            },
                            {
                                "type": "text",
                                "text": " damage to creatures that hit you with attacks."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "invincible-conqueror",
                "title": "Invincible Conqueror",
                "subtitle": "20th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Temporarily gain resistance to all damage, an extra attack, and improved critical range."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "oath-spells-channel-divinity-conquering-presence-guided-strike",
                "title": "Oath Spells; Channel Divinity: Conquering Presence, Guided Strike"
            },
            {
                "id": "aura-of-conquest",
                "title": "Aura of Conquest"
            },
            {
                "id": "scornful-rebuke",
                "title": "Scornful Rebuke"
            },
            {
                "id": "invincible-conqueror",
                "title": "Invincible Conqueror"
            }
        ]
    }
});
export default page;

/*
	Location: src/lib/typescript/data/internals/classes/paladin.ts
	Use: Central Paladin class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/paladin/devotion",
    "img": {
        "href": "/icons/white/classes/paladin.svg",
        "alt": "A stylized Paladin class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Devotion Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-female-s.webp",
                    "m": "/images/classes/paladin/card-female-m.webp",
                    "l": "/images/classes/paladin/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Devotion Paladin class portrait.",
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
                "alt": "A female Devotion Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-female-s.webp",
                    "m": "/images/classes/paladin/card-female-m.webp",
                    "l": "/images/classes/paladin/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Devotion Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-male-s.webp",
                    "m": "/images/classes/paladin/card-male-m.webp",
                    "l": "/images/classes/paladin/card-male-l.webp"
                }
            }
        }
    },
    "label": "Devotion",
    "title": "D&D Portal - Devotion",
    "subTitle": "Paladin subclass",
    "description": "Classic holy warrior with sacred weapon and charm immunity.",
    "descriptions": {
        "short": "Classic holy warrior with sacred weapon and charm immunity.",
        "medium": "Devotion: Classic holy warrior with sacred weapon and charm immunity.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Classic holy warrior with sacred weapon and charm immunity."
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
        "devotion"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "oath-spells-channel-divinity-sacred-weapon-turn-the-unholy",
                "title": "Oath Spells; Channel Divinity: Sacred Weapon, Turn the Unholy",
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
                                "text": ", empower a weapon with "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.charisma",
                                "label": "Charisma"
                            },
                            {
                                "type": "text",
                                "text": "-based accuracy and light, or turn fiends and undead."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "aura-of-devotion",
                "title": "Aura of Devotion",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "You and nearby allies cannot be "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.charmed",
                                "label": "charmed"
                            },
                            {
                                "type": "text",
                                "text": " while conscious."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "purity-of-spirit",
                "title": "Purity of Spirit",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Remain under the effects of Protection from Evil and Good."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "holy-nimbus",
                "title": "Holy Nimbus",
                "subtitle": "20th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Emit sunlight that damages hostile creatures and grants advantage on saves against fiend and undead "
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
                "id": "oath-spells-channel-divinity-sacred-weapon-turn-the-unholy",
                "title": "Oath Spells; Channel Divinity: Sacred Weapon, Turn the Unholy"
            },
            {
                "id": "aura-of-devotion",
                "title": "Aura of Devotion"
            },
            {
                "id": "purity-of-spirit",
                "title": "Purity of Spirit"
            },
            {
                "id": "holy-nimbus",
                "title": "Holy Nimbus"
            }
        ]
    }
});
export default page;

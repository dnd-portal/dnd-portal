/*
	Location: src/lib/typescript/data/internals/classes/paladin.ts
	Use: Central Paladin class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/paladin/vengeance",
    "img": {
        "href": "/icons/white/classes/paladin.svg",
        "alt": "A stylized Paladin class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Vengeance Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-female-s.webp",
                    "m": "/images/classes/paladin/card-female-m.webp",
                    "l": "/images/classes/paladin/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Vengeance Paladin class portrait.",
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
                "alt": "A female Vengeance Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-female-s.webp",
                    "m": "/images/classes/paladin/card-female-m.webp",
                    "l": "/images/classes/paladin/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Vengeance Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-male-s.webp",
                    "m": "/images/classes/paladin/card-male-m.webp",
                    "l": "/images/classes/paladin/card-male-l.webp"
                }
            }
        }
    },
    "label": "Vengeance",
    "title": "D&D Portal - Vengeance",
    "subTitle": "Paladin subclass",
    "description": "Single-target pursuit, advantage, and relentless mobility.",
    "descriptions": {
        "short": "Single-target pursuit, advantage, and relentless mobility.",
        "medium": "Vengeance: Single-target pursuit, advantage, and relentless mobility.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Single-target pursuit, advantage, and relentless mobility."
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
        "vengeance"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "oath-spells-channel-divinity-abjure-enemy-vow-of-enmity",
                "title": "Oath Spells; Channel Divinity: Abjure Enemy, Vow of Enmity",
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
                                "text": ", frighten and slow one enemy, or gain advantage on attacks against a chosen target."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "relentless-avenger",
                "title": "Relentless Avenger",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Move after hitting with an opportunity attack without provoking opportunity attacks."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "soul-of-vengeance",
                "title": "Soul of Vengeance",
                "subtitle": "15th level",
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
                                "text": " to attack the target of your Vow of Enmity when it attacks."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "avenging-angel",
                "title": "Avenging Angel",
                "subtitle": "20th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Assume an angelic form with flight and a fear aura."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "oath-spells-channel-divinity-abjure-enemy-vow-of-enmity",
                "title": "Oath Spells; Channel Divinity: Abjure Enemy, Vow of Enmity"
            },
            {
                "id": "relentless-avenger",
                "title": "Relentless Avenger"
            },
            {
                "id": "soul-of-vengeance",
                "title": "Soul of Vengeance"
            },
            {
                "id": "avenging-angel",
                "title": "Avenging Angel"
            }
        ]
    }
});
export default page;

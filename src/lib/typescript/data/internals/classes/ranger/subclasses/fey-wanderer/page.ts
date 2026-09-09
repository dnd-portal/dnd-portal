/*
	Location: src/lib/typescript/data/internals/classes/ranger.ts
	Use: Central Ranger class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/ranger/fey-wanderer",
    "img": {
        "href": "/icons/white/classes/ranger.svg",
        "alt": "A stylized Ranger class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Fey Wanderer Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-female-s.webp",
                    "m": "/images/classes/ranger/card-female-m.webp",
                    "l": "/images/classes/ranger/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Fey Wanderer Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-male-s.webp",
                    "m": "/images/classes/ranger/card-male-m.webp",
                    "l": "/images/classes/ranger/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Fey Wanderer Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-female-s.webp",
                    "m": "/images/classes/ranger/card-female-m.webp",
                    "l": "/images/classes/ranger/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Fey Wanderer Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-male-s.webp",
                    "m": "/images/classes/ranger/card-male-m.webp",
                    "l": "/images/classes/ranger/card-male-l.webp"
                }
            }
        }
    },
    "label": "Fey Wanderer",
    "title": "D&D Portal - Fey Wanderer",
    "subTitle": "Ranger subclass",
    "description": "Psychic damage, social bonuses, fear manipulation, and fey summons.",
    "descriptions": {
        "short": "Psychic damage, social bonuses, fear manipulation, and fey summons.",
        "medium": "Fey Wanderer: Psychic damage, social bonuses, fear manipulation, and fey summons.",
        "long": [
            [
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.psychic",
                    "label": "Psychic"
                },
                {
                    "type": "text",
                    "text": " damage, social bonuses, fear manipulation, and fey summons."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.ranger.page"
    },
    "tags": [
        "ranger",
        "subclass",
        "fey-wanderer"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "fey-wanderer-magic-dreadful-strikes-otherworldly-glamour",
                "title": "Fey Wanderer Magic; Dreadful Strikes; Otherworldly Glamour",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain always-known fey "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": ", add "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.psychic",
                                "label": "psychic"
                            },
                            {
                                "type": "text",
                                "text": " damage to weapon hits against different targets, and add "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.wisdom",
                                "label": "Wisdom"
                            },
                            {
                                "type": "text",
                                "text": " to "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.charisma",
                                "label": "Charisma"
                            },
                            {
                                "type": "text",
                                "text": " checks."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "beguiling-twist",
                "title": "Beguiling Twist",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain advantage against charm and fear and redirect a failed charm or fear effect to another creature."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "fey-reinforcements",
                "title": "Fey Reinforcements",
                "subtitle": "11th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Cast Summon Fey without material components and gain a limited free use or shorten "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.concentration",
                                "label": "concentration"
                            },
                            {
                                "type": "text",
                                "text": " for repeated casting."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "misty-wanderer",
                "title": "Misty Wanderer",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Cast Misty Step repeatedly and optionally bring a nearby willing creature."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "fey-wanderer-magic-dreadful-strikes-otherworldly-glamour",
                "title": "Fey Wanderer Magic; Dreadful Strikes; Otherworldly Glamour"
            },
            {
                "id": "beguiling-twist",
                "title": "Beguiling Twist"
            },
            {
                "id": "fey-reinforcements",
                "title": "Fey Reinforcements"
            },
            {
                "id": "misty-wanderer",
                "title": "Misty Wanderer"
            }
        ]
    }
});
export default page;

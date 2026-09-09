/*
	Location: src/lib/typescript/data/internals/classes/warlock.ts
	Use: Central Warlock class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/warlock/fathomless",
    "img": {
        "href": "/icons/white/classes/warlock.svg",
        "alt": "A stylized Warlock class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Fathomless Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-female-s.webp",
                    "m": "/images/classes/warlock/card-female-m.webp",
                    "l": "/images/classes/warlock/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Fathomless Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-male-s.webp",
                    "m": "/images/classes/warlock/card-male-m.webp",
                    "l": "/images/classes/warlock/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Fathomless Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-female-s.webp",
                    "m": "/images/classes/warlock/card-female-m.webp",
                    "l": "/images/classes/warlock/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Fathomless Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-male-s.webp",
                    "m": "/images/classes/warlock/card-male-m.webp",
                    "l": "/images/classes/warlock/card-male-l.webp"
                }
            }
        }
    },
    "label": "Fathomless",
    "title": "D&D Portal - Fathomless",
    "subTitle": "Warlock subclass",
    "description": "Tentacle attacks, ocean adaptation, and deep-sea control.",
    "descriptions": {
        "short": "Tentacle attacks, ocean adaptation, and deep-sea control.",
        "medium": "Fathomless: Tentacle attacks, ocean adaptation, and deep-sea control.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Tentacle attacks, ocean adaptation, and deep-sea control."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.warlock.page"
    },
    "tags": [
        "warlock",
        "subclass",
        "fathomless"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "expanded-spell-list-tentacle-of-the-deeps-gift-of-the-sea",
                "title": "Expanded Spell List; Tentacle of the Deeps; Gift of the Sea",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain ocean-themed "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " options, summon a bonus-action tentacle attack that slows targets, and gain "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.swimming",
                                "label": "swimming"
                            },
                            {
                                "type": "text",
                                "text": " and underwater breathing."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "oceanic-soul-guardian-coil",
                "title": "Oceanic Soul; Guardian Coil",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.cold",
                                "label": "cold"
                            },
                            {
                                "type": "text",
                                "text": " resistance and underwater communication; use the tentacle as a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.reaction",
                                "label": "reaction"
                            },
                            {
                                "type": "text",
                                "text": " to reduce damage."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "grasping-tentacles",
                "title": "Grasping Tentacles",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Cast Evard\u2019s Black Tentacles without a slot once per rest and gain stronger "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.concentration",
                                "label": "concentration"
                            },
                            {
                                "type": "text",
                                "text": " while casting it."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "fathomless-plunge",
                "title": "Fathomless Plunge",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Teleport yourself and allies to a body of water you have seen within a vast distance."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "expanded-spell-list-tentacle-of-the-deeps-gift-of-the-sea",
                "title": "Expanded Spell List; Tentacle of the Deeps; Gift of the Sea"
            },
            {
                "id": "oceanic-soul-guardian-coil",
                "title": "Oceanic Soul; Guardian Coil"
            },
            {
                "id": "grasping-tentacles",
                "title": "Grasping Tentacles"
            },
            {
                "id": "fathomless-plunge",
                "title": "Fathomless Plunge"
            }
        ]
    }
});
export default page;

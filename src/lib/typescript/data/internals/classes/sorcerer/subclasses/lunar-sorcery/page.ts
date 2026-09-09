/*
	Location: src/lib/typescript/data/internals/classes/sorcerer.ts
	Use: Central Sorcerer class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/sorcerer/lunar-sorcery",
    "img": {
        "href": "/icons/white/classes/sorcerer.svg",
        "alt": "A stylized Sorcerer class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Lunar Sorcery Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-female-s.webp",
                    "m": "/images/classes/sorcerer/card-female-m.webp",
                    "l": "/images/classes/sorcerer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Lunar Sorcery Sorcerer class portrait.",
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
                "alt": "A female Lunar Sorcery Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-female-s.webp",
                    "m": "/images/classes/sorcerer/card-female-m.webp",
                    "l": "/images/classes/sorcerer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Lunar Sorcery Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-male-s.webp",
                    "m": "/images/classes/sorcerer/card-male-m.webp",
                    "l": "/images/classes/sorcerer/card-male-l.webp"
                }
            }
        }
    },
    "label": "Lunar Sorcery",
    "title": "D&D Portal - Lunar Sorcery",
    "subTitle": "Sorcerer subclass",
    "description": "Shift between lunar phases with expanded spells and discounted Metamagic.",
    "descriptions": {
        "short": "Shift between lunar phases with expanded spells and discounted Metamagic.",
        "medium": "Lunar Sorcery: Shift between lunar phases with expanded spells and discounted Metamagic.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Shift between lunar phases with expanded "
                },
                {
                    "type": "link",
                    "path": "internals.rules.spellcasting.spells",
                    "label": "spells"
                },
                {
                    "type": "text",
                    "text": " and discounted Metamagic."
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
        "lunar-sorcery"
    ],
    "content": {
        "source": "Dragonlance: Shadow of the Dragon Queen",
        "featureSections": [
            {
                "id": "lunar-embodiment-moon-fire",
                "title": "Lunar Embodiment; Moon Fire",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain lunar-phase "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " lists, choose a phase after rests, and cast an enhanced Sacred Flame that can target adjacent creatures."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "lunar-boons-waxing-and-waning",
                "title": "Lunar Boons; Waxing and Waning",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Reduce sorcery-point costs for Metamagic on phase-linked schools and switch lunar phase as a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.bonusAction",
                                "label": "bonus action"
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
                "id": "lunar-empowerment",
                "title": "Lunar Empowerment",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Each lunar phase grants a different defensive, "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.stealth",
                                "label": "stealth"
                            },
                            {
                                "type": "text",
                                "text": ", or saving-throw benefit."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "lunar-phenomenon",
                "title": "Lunar Phenomenon",
                "subtitle": "18th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Each lunar phase gains a powerful activated effect involving light, teleportation, restoration, invisibility, or damage."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "lunar-embodiment-moon-fire",
                "title": "Lunar Embodiment; Moon Fire"
            },
            {
                "id": "lunar-boons-waxing-and-waning",
                "title": "Lunar Boons; Waxing and Waning"
            },
            {
                "id": "lunar-empowerment",
                "title": "Lunar Empowerment"
            },
            {
                "id": "lunar-phenomenon",
                "title": "Lunar Phenomenon"
            }
        ]
    }
});
export default page;

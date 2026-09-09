/*
	Location: src/lib/typescript/data/internals/classes/rogue.ts
	Use: Central Rogue class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/rogue/soulknife",
    "img": {
        "href": "/icons/white/classes/rogue.svg",
        "alt": "A stylized Rogue class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Soulknife Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-female-s.webp",
                    "m": "/images/classes/rogue/card-female-m.webp",
                    "l": "/images/classes/rogue/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Soulknife Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-male-s.webp",
                    "m": "/images/classes/rogue/card-male-m.webp",
                    "l": "/images/classes/rogue/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Soulknife Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-female-s.webp",
                    "m": "/images/classes/rogue/card-female-m.webp",
                    "l": "/images/classes/rogue/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Soulknife Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-male-s.webp",
                    "m": "/images/classes/rogue/card-male-m.webp",
                    "l": "/images/classes/rogue/card-male-l.webp"
                }
            }
        }
    },
    "label": "Soulknife",
    "title": "D&D Portal - Soulknife",
    "subTitle": "Rogue subclass",
    "description": "Psychic blades, telepathy, psionic skill boosts, and teleportation.",
    "descriptions": {
        "short": "Psychic blades, telepathy, psionic skill boosts, and teleportation.",
        "medium": "Soulknife: Psychic blades, telepathy, psionic skill boosts, and teleportation.",
        "long": [
            [
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.psychic",
                    "label": "Psychic"
                },
                {
                    "type": "text",
                    "text": " blades, telepathy, psionic skill boosts, and teleportation."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.rogue.page"
    },
    "tags": [
        "rogue",
        "subclass",
        "soulknife"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "psionic-power-psychic-blades",
                "title": "Psionic Power; Psychic Blades",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain Psionic Energy dice for boosted skill checks and telepathic communication, and manifest "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.psychic",
                                "label": "psychic"
                            },
                            {
                                "type": "text",
                                "text": " blades for attacks."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "soul-blades",
                "title": "Soul Blades",
                "subtitle": "9th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Spend Psionic Energy to improve missed "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.psychic",
                                "label": "psychic"
                            },
                            {
                                "type": "text",
                                "text": "-blade attacks or teleport to a thrown blade."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "psychic-veil",
                "title": "Psychic Veil",
                "subtitle": "13th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Become "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.invisible",
                                "label": "invisible"
                            },
                            {
                                "type": "text",
                                "text": " for an hour, with free and die-powered uses."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "rend-mind",
                "title": "Rend Mind",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "After dealing Sneak Attack with a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.psychic",
                                "label": "psychic"
                            },
                            {
                                "type": "text",
                                "text": " blade, "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.force",
                                "label": "force"
                            },
                            {
                                "type": "text",
                                "text": " a save or stun the target."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "psionic-power-psychic-blades",
                "title": "Psionic Power; Psychic Blades"
            },
            {
                "id": "soul-blades",
                "title": "Soul Blades"
            },
            {
                "id": "psychic-veil",
                "title": "Psychic Veil"
            },
            {
                "id": "rend-mind",
                "title": "Rend Mind"
            }
        ]
    }
});
export default page;

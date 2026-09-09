/*
	Location: src/lib/typescript/data/internals/classes/sorcerer.ts
	Use: Central Sorcerer class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/sorcerer/aberrant-mind",
    "img": {
        "href": "/icons/white/classes/sorcerer.svg",
        "alt": "A stylized Sorcerer class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Aberrant Mind Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-female-s.webp",
                    "m": "/images/classes/sorcerer/card-female-m.webp",
                    "l": "/images/classes/sorcerer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Aberrant Mind Sorcerer class portrait.",
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
                "alt": "A female Aberrant Mind Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-female-s.webp",
                    "m": "/images/classes/sorcerer/card-female-m.webp",
                    "l": "/images/classes/sorcerer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Aberrant Mind Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-male-s.webp",
                    "m": "/images/classes/sorcerer/card-male-m.webp",
                    "l": "/images/classes/sorcerer/card-male-l.webp"
                }
            }
        }
    },
    "label": "Aberrant Mind",
    "title": "D&D Portal - Aberrant Mind",
    "subTitle": "Sorcerer subclass",
    "description": "Psionic spell list, telepathy, and componentless sorcery-point casting.",
    "descriptions": {
        "short": "Psionic spell list, telepathy, and componentless sorcery-point casting.",
        "medium": "Aberrant Mind: Psionic spell list, telepathy, and componentless sorcery-point casting.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Psionic "
                },
                {
                    "type": "link",
                    "path": "internals.rules.spellcasting.spells",
                    "label": "spell"
                },
                {
                    "type": "text",
                    "text": " list, telepathy, and componentless sorcery-point casting."
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
        "aberrant-mind"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "psionic-spells-telepathic-speech",
                "title": "Psionic Spells; Telepathic Speech",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain an expandable list of psionic "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " and create a temporary telepathic link with a nearby creature."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "psionic-sorcery-psychic-defenses",
                "title": "Psionic Sorcery; Psychic Defenses",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Cast psionic "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " with sorcery points and no components, and gain "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.psychic",
                                "label": "psychic"
                            },
                            {
                                "type": "text",
                                "text": " resistance plus advantage against charm and fear."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "revelation-in-flesh",
                "title": "Revelation in Flesh",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Spend sorcery points to gain aquatic movement, flight, sensory, or body-morphing adaptations."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "warping-implosion",
                "title": "Warping Implosion",
                "subtitle": "18th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Teleport away and pull nearby creatures toward your former position while dealing "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.force",
                                "label": "force"
                            },
                            {
                                "type": "text",
                                "text": " damage."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "psionic-spells-telepathic-speech",
                "title": "Psionic Spells; Telepathic Speech"
            },
            {
                "id": "psionic-sorcery-psychic-defenses",
                "title": "Psionic Sorcery; Psychic Defenses"
            },
            {
                "id": "revelation-in-flesh",
                "title": "Revelation in Flesh"
            },
            {
                "id": "warping-implosion",
                "title": "Warping Implosion"
            }
        ]
    }
});
export default page;

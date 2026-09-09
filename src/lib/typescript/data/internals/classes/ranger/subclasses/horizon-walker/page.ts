/*
	Location: src/lib/typescript/data/internals/classes/ranger.ts
	Use: Central Ranger class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/ranger/horizon-walker",
    "img": {
        "href": "/icons/white/classes/ranger.svg",
        "alt": "A stylized Ranger class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Horizon Walker Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-female-s.webp",
                    "m": "/images/classes/ranger/card-female-m.webp",
                    "l": "/images/classes/ranger/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Horizon Walker Ranger class portrait.",
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
                "alt": "A female Horizon Walker Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-female-s.webp",
                    "m": "/images/classes/ranger/card-female-m.webp",
                    "l": "/images/classes/ranger/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Horizon Walker Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-male-s.webp",
                    "m": "/images/classes/ranger/card-male-m.webp",
                    "l": "/images/classes/ranger/card-male-l.webp"
                }
            }
        }
    },
    "label": "Horizon Walker",
    "title": "D&D Portal - Horizon Walker",
    "subTitle": "Ranger subclass",
    "description": "Planar detection, force damage, and teleporting attacks.",
    "descriptions": {
        "short": "Planar detection, force damage, and teleporting attacks.",
        "medium": "Horizon Walker: Planar detection, force damage, and teleporting attacks.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Planar detection, "
                },
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.force",
                    "label": "force"
                },
                {
                    "type": "text",
                    "text": " damage, and teleporting attacks."
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
        "horizon-walker"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "horizon-walker-magic-detect-portal-planar-warrior",
                "title": "Horizon Walker Magic; Detect Portal; Planar Warrior",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain always-known planar "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": ", sense nearby planar portals, and convert one weapon hit per turn to "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.force",
                                "label": "force"
                            },
                            {
                                "type": "text",
                                "text": " damage with bonus damage."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "ethereal-step",
                "title": "Ethereal Step",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Cast Etherealness on yourself as a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.bonusAction",
                                "label": "bonus action"
                            },
                            {
                                "type": "text",
                                "text": " for the current turn."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "distant-strike",
                "title": "Distant Strike",
                "subtitle": "11th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Teleport before each attack and gain an additional attack when targeting multiple creatures."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "spectral-defense",
                "title": "Spectral Defense",
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
                                "text": " to gain resistance to all damage from one attack."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "horizon-walker-magic-detect-portal-planar-warrior",
                "title": "Horizon Walker Magic; Detect Portal; Planar Warrior"
            },
            {
                "id": "ethereal-step",
                "title": "Ethereal Step"
            },
            {
                "id": "distant-strike",
                "title": "Distant Strike"
            },
            {
                "id": "spectral-defense",
                "title": "Spectral Defense"
            }
        ]
    }
});
export default page;

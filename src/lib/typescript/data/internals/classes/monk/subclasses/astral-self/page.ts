/*
	Location: src/lib/typescript/data/internals/classes/monk.ts
	Use: Central Monk class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/monk/astral-self",
    "img": {
        "href": "/icons/white/classes/monk.svg",
        "alt": "A stylized Monk class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Astral Self Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Astral Self Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-male-s.webp",
                    "m": "/images/classes/monk/card-male-m.webp",
                    "l": "/images/classes/monk/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Astral Self Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Astral Self Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-male-s.webp",
                    "m": "/images/classes/monk/card-male-m.webp",
                    "l": "/images/classes/monk/card-male-l.webp"
                }
            }
        }
    },
    "label": "Astral Self",
    "title": "D&D Portal - Astral Self",
    "subTitle": "Monk subclass",
    "description": "Manifest spectral arms, body, and visage powered by Wisdom.",
    "descriptions": {
        "short": "Manifest spectral arms, body, and visage powered by Wisdom.",
        "medium": "Astral Self: Manifest spectral arms, body, and visage powered by Wisdom.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Manifest spectral arms, body, and visage powered by "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.wisdom",
                    "label": "Wisdom"
                },
                {
                    "type": "text",
                    "text": "."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.monk.page"
    },
    "tags": [
        "monk",
        "subclass",
        "astral-self"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "arms-of-the-astral-self",
                "title": "Arms of the Astral Self",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Spend ki to summon spectral arms that extend reach, use "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.wisdom",
                                "label": "Wisdom"
                            },
                            {
                                "type": "text",
                                "text": " for "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.strength",
                                "label": "Strength"
                            },
                            {
                                "type": "text",
                                "text": " checks and saves, and make "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.force",
                                "label": "force"
                            },
                            {
                                "type": "text",
                                "text": "-damage unarmed strikes using "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.wisdom",
                                "label": "Wisdom"
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
                "id": "visage-of-the-astral-self",
                "title": "Visage of the Astral Self",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Summon a spectral visage that improves supernatural sight, "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.intimidation",
                                "label": "intimidation"
                            },
                            {
                                "type": "text",
                                "text": " or "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.insight",
                                "label": "insight"
                            },
                            {
                                "type": "text",
                                "text": ", and long-distance speech."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "body-of-the-astral-self",
                "title": "Body of the Astral Self",
                "subtitle": "11th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Summon a spectral body that can deflect elemental damage and add extra damage to one astral-arm hit each turn."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "awakened-astral-self",
                "title": "Awakened Astral Self",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Summon the full astral self, gain an "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.armorClass",
                                "label": "Armor Class"
                            },
                            {
                                "type": "text",
                                "text": " bonus, and make an additional astral-arm attack."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "arms-of-the-astral-self",
                "title": "Arms of the Astral Self"
            },
            {
                "id": "visage-of-the-astral-self",
                "title": "Visage of the Astral Self"
            },
            {
                "id": "body-of-the-astral-self",
                "title": "Body of the Astral Self"
            },
            {
                "id": "awakened-astral-self",
                "title": "Awakened Astral Self"
            }
        ]
    }
});
export default page;

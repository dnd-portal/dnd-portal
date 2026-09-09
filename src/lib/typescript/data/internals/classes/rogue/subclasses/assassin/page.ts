/*
	Location: src/lib/typescript/data/internals/classes/rogue.ts
	Use: Central Rogue class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/rogue/assassin",
    "img": {
        "href": "/icons/white/classes/rogue.svg",
        "alt": "A stylized Rogue class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Assassin Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-female-s.webp",
                    "m": "/images/classes/rogue/card-female-m.webp",
                    "l": "/images/classes/rogue/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Assassin Rogue class portrait.",
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
                "alt": "A female Assassin Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-female-s.webp",
                    "m": "/images/classes/rogue/card-female-m.webp",
                    "l": "/images/classes/rogue/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Assassin Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-male-s.webp",
                    "m": "/images/classes/rogue/card-male-m.webp",
                    "l": "/images/classes/rogue/card-male-l.webp"
                }
            }
        }
    },
    "label": "Assassin",
    "title": "D&D Portal - Assassin",
    "subTitle": "Rogue subclass",
    "description": "Infiltration, poison, disguise, and devastating opening attacks.",
    "descriptions": {
        "short": "Infiltration, poison, disguise, and devastating opening attacks.",
        "medium": "Assassin: Infiltration, poison, disguise, and devastating opening attacks.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Infiltration, "
                },
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.poison",
                    "label": "poison"
                },
                {
                    "type": "text",
                    "text": ", disguise, and devastating opening attacks."
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
        "assassin"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "bonus-proficiencies-assassinate",
                "title": "Bonus Proficiencies; Assassinate",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain disguise-kit and poisoner\u2019s-kit proficiency, advantage against creatures that have not acted, and automatic "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.criticalHit",
                                "label": "critical hits"
                            },
                            {
                                "type": "text",
                                "text": " against surprised targets."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "infiltration-expertise",
                "title": "Infiltration Expertise",
                "subtitle": "9th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Create a convincing false identity with time and money."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "impostor",
                "title": "Impostor",
                "subtitle": "13th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Mimic another person\u2019s speech, writing, and behavior after studying them."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "death-strike",
                "title": "Death Strike",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "A surprised creature hit by you must save or take double the attack\u2019s damage."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "bonus-proficiencies-assassinate",
                "title": "Bonus Proficiencies; Assassinate"
            },
            {
                "id": "infiltration-expertise",
                "title": "Infiltration Expertise"
            },
            {
                "id": "impostor",
                "title": "Impostor"
            },
            {
                "id": "death-strike",
                "title": "Death Strike"
            }
        ]
    }
});
export default page;

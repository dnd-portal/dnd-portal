/*
	Location: src/lib/typescript/data/internals/classes/warlock.ts
	Use: Central Warlock class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/warlock/hexblade",
    "img": {
        "href": "/icons/white/classes/warlock.svg",
        "alt": "A stylized Warlock class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Hexblade Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-female-s.webp",
                    "m": "/images/classes/warlock/card-female-m.webp",
                    "l": "/images/classes/warlock/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Hexblade Warlock class portrait.",
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
                "alt": "A female Hexblade Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-female-s.webp",
                    "m": "/images/classes/warlock/card-female-m.webp",
                    "l": "/images/classes/warlock/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Hexblade Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-male-s.webp",
                    "m": "/images/classes/warlock/card-male-m.webp",
                    "l": "/images/classes/warlock/card-male-l.webp"
                }
            }
        }
    },
    "label": "Hexblade",
    "title": "D&D Portal - Hexblade",
    "subTitle": "Warlock subclass",
    "description": "Medium armor, martial weapons, Charisma weapon attacks, and curses.",
    "descriptions": {
        "short": "Medium armor, martial weapons, Charisma weapon attacks, and curses.",
        "medium": "Hexblade: Medium armor, martial weapons, Charisma weapon attacks, and curses.",
        "long": [
            [
                {
                    "type": "link",
                    "path": "internals.rules.equipment.mediumArmor",
                    "label": "Medium armor"
                },
                {
                    "type": "text",
                    "text": ", "
                },
                {
                    "type": "link",
                    "path": "internals.rules.equipment.martialWeapons",
                    "label": "martial weapons"
                },
                {
                    "type": "text",
                    "text": ", "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.charisma",
                    "label": "Charisma"
                },
                {
                    "type": "text",
                    "text": " weapon attacks, and curses."
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
        "hexblade"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "expanded-spell-list-hexblade-s-curse-hex-warrior",
                "title": "Expanded Spell List; Hexblade\u2019s Curse; Hex Warrior",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain martial "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " options, curse one enemy for stronger damage and criticals plus healing on its death, and use "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.charisma",
                                "label": "Charisma"
                            },
                            {
                                "type": "text",
                                "text": " with selected weapons while gaining armor, "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.equipment.shields",
                                "label": "shield"
                            },
                            {
                                "type": "text",
                                "text": ", and martial proficiency."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "accursed-specter",
                "title": "Accursed Specter",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Raise a slain humanoid\u2019s spirit as a temporary specter servant."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "armor-of-hexes",
                "title": "Armor of Hexes",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "The creature cursed by Hexblade\u2019s Curse can miss you automatically on a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.reaction",
                                "label": "reaction"
                            },
                            {
                                "type": "text",
                                "text": " d6 roll."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "master-of-hexes",
                "title": "Master of Hexes",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Move Hexblade\u2019s Curse to a new creature when the current target dies."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "expanded-spell-list-hexblade-s-curse-hex-warrior",
                "title": "Expanded Spell List; Hexblade\u2019s Curse; Hex Warrior"
            },
            {
                "id": "accursed-specter",
                "title": "Accursed Specter"
            },
            {
                "id": "armor-of-hexes",
                "title": "Armor of Hexes"
            },
            {
                "id": "master-of-hexes",
                "title": "Master of Hexes"
            }
        ]
    }
});
export default page;

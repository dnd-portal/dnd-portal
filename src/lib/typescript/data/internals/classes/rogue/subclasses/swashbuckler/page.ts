/*
	Location: src/lib/typescript/data/internals/classes/rogue.ts
	Use: Central Rogue class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/rogue/swashbuckler",
    "img": {
        "href": "/icons/white/classes/rogue.svg",
        "alt": "A stylized Rogue class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Swashbuckler Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-female-s.webp",
                    "m": "/images/classes/rogue/card-female-m.webp",
                    "l": "/images/classes/rogue/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Swashbuckler Rogue class portrait.",
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
                "alt": "A female Swashbuckler Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-female-s.webp",
                    "m": "/images/classes/rogue/card-female-m.webp",
                    "l": "/images/classes/rogue/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Swashbuckler Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-male-s.webp",
                    "m": "/images/classes/rogue/card-male-m.webp",
                    "l": "/images/classes/rogue/card-male-l.webp"
                }
            }
        }
    },
    "label": "Swashbuckler",
    "title": "D&D Portal - Swashbuckler",
    "subTitle": "Rogue subclass",
    "description": "Mobile single-target dueling driven by Charisma.",
    "descriptions": {
        "short": "Mobile single-target dueling driven by Charisma.",
        "medium": "Swashbuckler: Mobile single-target dueling driven by Charisma.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Mobile single-target dueling driven by "
                },
                {
                    "type": "link",
                    "path": "internals.rules.abilityScores.charisma",
                    "label": "Charisma"
                },
                {
                    "type": "text",
                    "text": "."
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
        "swashbuckler"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "fancy-footwork-rakish-audacity",
                "title": "Fancy Footwork; Rakish Audacity",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Creatures you attack cannot make opportunity attacks against you that turn, add "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.charisma",
                                "label": "Charisma"
                            },
                            {
                                "type": "text",
                                "text": " to "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.initiativeRoll",
                                "label": "initiative"
                            },
                            {
                                "type": "text",
                                "text": ", and gain a single-target way to enable Sneak Attack."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "panache",
                "title": "Panache",
                "subtitle": "9th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Use "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.persuasion",
                                "label": "Persuasion"
                            },
                            {
                                "type": "text",
                                "text": " to taunt a hostile creature into focusing on you or charm a nonhostile creature."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "elegant-maneuver",
                "title": "Elegant Maneuver",
                "subtitle": "13th level",
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
                                "path": "internals.rules.actions.bonusAction",
                                "label": "bonus action"
                            },
                            {
                                "type": "text",
                                "text": " to gain advantage on the next "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.acrobatics",
                                "label": "Acrobatics"
                            },
                            {
                                "type": "text",
                                "text": " or "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.athletics",
                                "label": "Athletics"
                            },
                            {
                                "type": "text",
                                "text": " check that turn."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "master-duelist",
                "title": "Master Duelist",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Reroll a missed attack with advantage once per rest."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "fancy-footwork-rakish-audacity",
                "title": "Fancy Footwork; Rakish Audacity"
            },
            {
                "id": "panache",
                "title": "Panache"
            },
            {
                "id": "elegant-maneuver",
                "title": "Elegant Maneuver"
            },
            {
                "id": "master-duelist",
                "title": "Master Duelist"
            }
        ]
    }
});
export default page;

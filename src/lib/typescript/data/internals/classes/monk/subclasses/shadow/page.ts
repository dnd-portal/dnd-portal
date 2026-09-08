/*
	Location: src/lib/typescript/data/internals/classes/monk.ts
	Use: Central Monk class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/monk/shadow",
    "img": {
        "href": "/icons/white/classes/monk.svg",
        "alt": "A stylized Monk class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Shadow Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Shadow Monk class portrait.",
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
                "alt": "A female Shadow Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Shadow Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-male-s.webp",
                    "m": "/images/classes/monk/card-male-m.webp",
                    "l": "/images/classes/monk/card-male-l.webp"
                }
            }
        }
    },
    "label": "Shadow",
    "title": "D&D Portal - Shadow",
    "subTitle": "Monk subclass",
    "description": "Stealth magic, teleportation between shadows, and opportunistic strikes.",
    "descriptions": {
        "short": "Stealth magic, teleportation between shadows, and opportunistic strikes.",
        "medium": "Shadow: Stealth magic, teleportation between shadows, and opportunistic strikes.",
        "long": [
            [
                {
                    "type": "link",
                    "path": "internals.rules.skills.stealth",
                    "label": "Stealth"
                },
                {
                    "type": "text",
                    "text": " magic, teleportation between shadows, and opportunistic strikes."
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
        "shadow"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "shadow-arts",
                "title": "Shadow Arts",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Spend ki to cast selected darkness and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.stealth",
                                "label": "stealth"
                            },
                            {
                                "type": "text",
                                "text": " "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " and gain Minor Illusion."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "shadow-step",
                "title": "Shadow Step",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Teleport between areas of dim light or darkness and gain advantage on the next "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.meleeAttack",
                                "label": "melee attack"
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
                "id": "cloak-of-shadows",
                "title": "Cloak of Shadows",
                "subtitle": "11th level",
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
                                "text": " while in dim light or darkness until attacking, casting, or entering bright light."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "opportunist",
                "title": "Opportunist",
                "subtitle": "17th level",
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
                                "text": " to make a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.meleeAttack",
                                "label": "melee attack"
                            },
                            {
                                "type": "text",
                                "text": " when another creature hits a nearby target."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "shadow-arts",
                "title": "Shadow Arts"
            },
            {
                "id": "shadow-step",
                "title": "Shadow Step"
            },
            {
                "id": "cloak-of-shadows",
                "title": "Cloak of Shadows"
            },
            {
                "id": "opportunist",
                "title": "Opportunist"
            }
        ]
    }
});
export default page;

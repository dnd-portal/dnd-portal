/*
	Location: src/lib/typescript/data/internals/classes/ranger.ts
	Use: Central Ranger class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/ranger/monster-slayer",
    "img": {
        "href": "/icons/white/classes/ranger.svg",
        "alt": "A stylized Ranger class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Monster Slayer Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-female-s.webp",
                    "m": "/images/classes/ranger/card-female-m.webp",
                    "l": "/images/classes/ranger/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Monster Slayer Ranger class portrait.",
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
                "alt": "A female Monster Slayer Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-female-s.webp",
                    "m": "/images/classes/ranger/card-female-m.webp",
                    "l": "/images/classes/ranger/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Monster Slayer Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-male-s.webp",
                    "m": "/images/classes/ranger/card-male-m.webp",
                    "l": "/images/classes/ranger/card-male-l.webp"
                }
            }
        }
    },
    "label": "Monster Slayer",
    "title": "D&D Portal - Monster Slayer",
    "subTitle": "Ranger subclass",
    "description": "Identify weaknesses, mark prey, and disrupt supernatural effects.",
    "descriptions": {
        "short": "Identify weaknesses, mark prey, and disrupt supernatural effects.",
        "medium": "Monster Slayer: Identify weaknesses, mark prey, and disrupt supernatural effects.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Identify weaknesses, mark prey, and disrupt supernatural effects."
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
        "monster-slayer"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "monster-slayer-magic-hunter-s-sense-slayer-s-prey",
                "title": "Monster Slayer Magic; Hunter\u2019s Sense; Slayer\u2019s Prey",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain always-known anti-monster "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": ", identify a creature\u2019s defenses, and mark a target for bonus weapon damage."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "supernatural-defense",
                "title": "Supernatural Defense",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Add a d6 to saves and grapple escapes caused by the current Slayer\u2019s Prey."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "magic-user-s-nemesis",
                "title": "Magic-User\u2019s Nemesis",
                "subtitle": "11th level",
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
                                "text": " to disrupt a nearby "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " or teleportation effect."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "slayer-s-counter",
                "title": "Slayer\u2019s Counter",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "When the marked target forces a save, make a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.reaction",
                                "label": "reaction"
                            },
                            {
                                "type": "text",
                                "text": " weapon attack; a hit automatically succeeds on the save."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "monster-slayer-magic-hunter-s-sense-slayer-s-prey",
                "title": "Monster Slayer Magic; Hunter\u2019s Sense; Slayer\u2019s Prey"
            },
            {
                "id": "supernatural-defense",
                "title": "Supernatural Defense"
            },
            {
                "id": "magic-user-s-nemesis",
                "title": "Magic-User\u2019s Nemesis"
            },
            {
                "id": "slayer-s-counter",
                "title": "Slayer\u2019s Counter"
            }
        ]
    }
});
export default page;

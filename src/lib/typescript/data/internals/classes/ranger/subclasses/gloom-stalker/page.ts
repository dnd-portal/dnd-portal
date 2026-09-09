/*
	Location: src/lib/typescript/data/internals/classes/ranger.ts
	Use: Central Ranger class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/ranger/gloom-stalker",
    "img": {
        "href": "/icons/white/classes/ranger.svg",
        "alt": "A stylized Ranger class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Gloom Stalker Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-female-s.webp",
                    "m": "/images/classes/ranger/card-female-m.webp",
                    "l": "/images/classes/ranger/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Gloom Stalker Ranger class portrait.",
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
                "alt": "A female Gloom Stalker Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-female-s.webp",
                    "m": "/images/classes/ranger/card-female-m.webp",
                    "l": "/images/classes/ranger/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Gloom Stalker Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-male-s.webp",
                    "m": "/images/classes/ranger/card-male-m.webp",
                    "l": "/images/classes/ranger/card-male-l.webp"
                }
            }
        }
    },
    "label": "Gloom Stalker",
    "title": "D&D Portal - Gloom Stalker",
    "subTitle": "Ranger subclass",
    "description": "Ambush initiative, darkness superiority, and extra opening attacks.",
    "descriptions": {
        "short": "Ambush initiative, darkness superiority, and extra opening attacks.",
        "medium": "Gloom Stalker: Ambush initiative, darkness superiority, and extra opening attacks.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Ambush "
                },
                {
                    "type": "link",
                    "path": "internals.rules.combat.initiativeRoll",
                    "label": "initiative"
                },
                {
                    "type": "text",
                    "text": ", darkness superiority, and extra opening attacks."
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
        "gloom-stalker"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "gloom-stalker-magic-dread-ambusher-umbral-sight",
                "title": "Gloom Stalker Magic; Dread Ambusher; Umbral Sight",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain always-known ambush "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": ", add "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.wisdom",
                                "label": "Wisdom"
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
                                "text": ", move and attack more strongly in the first round, gain darkvision, and become "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.invisible",
                                "label": "invisible"
                            },
                            {
                                "type": "text",
                                "text": " to darkvision in darkness."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "iron-mind",
                "title": "Iron Mind",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.wisdom",
                                "label": "Wisdom"
                            },
                            {
                                "type": "text",
                                "text": " "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.d20Tests.savingThrow",
                                "label": "saving throw"
                            },
                            {
                                "type": "text",
                                "text": " proficiency or another mental "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.d20Tests.savingThrow",
                                "label": "saving throw"
                            },
                            {
                                "type": "text",
                                "text": " proficiency."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "stalker-s-flurry",
                "title": "Stalker\u2019s Flurry",
                "subtitle": "11th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "When a weapon attack misses, make another weapon attack once per turn."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "shadowy-dodge",
                "title": "Shadowy Dodge",
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
                                "text": " to impose disadvantage on an attack against you."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "gloom-stalker-magic-dread-ambusher-umbral-sight",
                "title": "Gloom Stalker Magic; Dread Ambusher; Umbral Sight"
            },
            {
                "id": "iron-mind",
                "title": "Iron Mind"
            },
            {
                "id": "stalker-s-flurry",
                "title": "Stalker\u2019s Flurry"
            },
            {
                "id": "shadowy-dodge",
                "title": "Shadowy Dodge"
            }
        ]
    }
});
export default page;

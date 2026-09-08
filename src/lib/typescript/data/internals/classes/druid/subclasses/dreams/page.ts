/*
	Location: src/lib/typescript/data/internals/classes/druid.ts
	Use: Central Druid class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/druid/dreams",
    "img": {
        "href": "/icons/white/classes/druid.svg",
        "alt": "A stylized Druid class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Dreams Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-female-s.webp",
                    "m": "/images/classes/druid/card-female-m.webp",
                    "l": "/images/classes/druid/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Dreams Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-male-s.webp",
                    "m": "/images/classes/druid/card-male-m.webp",
                    "l": "/images/classes/druid/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Dreams Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-female-s.webp",
                    "m": "/images/classes/druid/card-female-m.webp",
                    "l": "/images/classes/druid/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Dreams Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-male-s.webp",
                    "m": "/images/classes/druid/card-male-m.webp",
                    "l": "/images/classes/druid/card-male-l.webp"
                }
            }
        }
    },
    "label": "Dreams",
    "title": "D&D Portal - Dreams",
    "subTitle": "Druid subclass",
    "description": "Fey healing, teleportation, and protective rest magic.",
    "descriptions": {
        "short": "Fey healing, teleportation, and protective rest magic.",
        "medium": "Dreams: Fey healing, teleportation, and protective rest magic.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Fey healing, teleportation, and protective rest magic."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.druid.page"
    },
    "tags": [
        "druid",
        "subclass",
        "dreams"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "balm-of-the-summer-court",
                "title": "Balm of the Summer Court",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Use a pool of d6s as a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.bonusAction",
                                "label": "bonus action"
                            },
                            {
                                "type": "text",
                                "text": " to heal a distant creature and grant "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "temporary hit points"
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
                "id": "hearth-of-moonlight-and-shadow",
                "title": "Hearth of Moonlight and Shadow",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "During a rest, create a hidden protective area that improves "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.stealth",
                                "label": "Stealth"
                            },
                            {
                                "type": "text",
                                "text": " and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.perception",
                                "label": "Perception"
                            },
                            {
                                "type": "text",
                                "text": " for your group."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "hidden-paths",
                "title": "Hidden Paths",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Teleport yourself as a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.bonusAction",
                                "label": "bonus action"
                            },
                            {
                                "type": "text",
                                "text": " or teleport an ally as an action, with limited uses."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "walker-in-dreams",
                "title": "Walker in Dreams",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "After a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.rests.shortRest",
                                "label": "short rest"
                            },
                            {
                                "type": "text",
                                "text": ", cast Dream, Scrying, or a specialized Teleportation Circle without a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " slot."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "balm-of-the-summer-court",
                "title": "Balm of the Summer Court"
            },
            {
                "id": "hearth-of-moonlight-and-shadow",
                "title": "Hearth of Moonlight and Shadow"
            },
            {
                "id": "hidden-paths",
                "title": "Hidden Paths"
            },
            {
                "id": "walker-in-dreams",
                "title": "Walker in Dreams"
            }
        ]
    }
});
export default page;

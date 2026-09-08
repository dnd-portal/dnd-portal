/*
	Location: src/lib/typescript/data/internals/classes/druid.ts
	Use: Central Druid class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/druid/shepherd",
    "img": {
        "href": "/icons/white/classes/druid.svg",
        "alt": "A stylized Druid class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Shepherd Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-female-s.webp",
                    "m": "/images/classes/druid/card-female-m.webp",
                    "l": "/images/classes/druid/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Shepherd Druid class portrait.",
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
                "alt": "A female Shepherd Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-female-s.webp",
                    "m": "/images/classes/druid/card-female-m.webp",
                    "l": "/images/classes/druid/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Shepherd Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-male-s.webp",
                    "m": "/images/classes/druid/card-male-m.webp",
                    "l": "/images/classes/druid/card-male-l.webp"
                }
            }
        }
    },
    "label": "Shepherd",
    "title": "D&D Portal - Shepherd",
    "subTitle": "Druid subclass",
    "description": "Spirit totems and enhanced summoned creatures.",
    "descriptions": {
        "short": "Spirit totems and enhanced summoned creatures.",
        "medium": "Shepherd: Spirit totems and enhanced summoned creatures.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Spirit totems and enhanced summoned creatures."
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
        "shepherd"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "speech-of-the-woods-spirit-totem",
                "title": "Speech of the Woods; Spirit Totem",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Communicate with beasts and summon a bear, hawk, or unicorn spirit aura that grants different group benefits."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "mighty-summoner",
                "title": "Mighty Summoner",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Summoned beasts and fey gain more "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
                            },
                            {
                                "type": "text",
                                "text": " and magical natural attacks."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "guardian-spirit",
                "title": "Guardian Spirit",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Your Spirit Totem heals summoned or created beasts and fey that end their turns in its aura."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "faithful-summons",
                "title": "Faithful Summons",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "When "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.incapacitated",
                                "label": "incapacitated"
                            },
                            {
                                "type": "text",
                                "text": " or reduced to 0 "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
                            },
                            {
                                "type": "text",
                                "text": ", automatically summon beasts that protect you."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "speech-of-the-woods-spirit-totem",
                "title": "Speech of the Woods; Spirit Totem"
            },
            {
                "id": "mighty-summoner",
                "title": "Mighty Summoner"
            },
            {
                "id": "guardian-spirit",
                "title": "Guardian Spirit"
            },
            {
                "id": "faithful-summons",
                "title": "Faithful Summons"
            }
        ]
    }
});
export default page;

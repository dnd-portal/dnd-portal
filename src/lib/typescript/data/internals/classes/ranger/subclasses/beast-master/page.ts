/*
	Location: src/lib/typescript/data/internals/classes/ranger.ts
	Use: Central Ranger class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/ranger/beast-master",
    "img": {
        "href": "/icons/white/classes/ranger.svg",
        "alt": "A stylized Ranger class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Beast Master Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-female-s.webp",
                    "m": "/images/classes/ranger/card-female-m.webp",
                    "l": "/images/classes/ranger/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Beast Master Ranger class portrait.",
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
                "alt": "A female Beast Master Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-female-s.webp",
                    "m": "/images/classes/ranger/card-female-m.webp",
                    "l": "/images/classes/ranger/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Beast Master Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-male-s.webp",
                    "m": "/images/classes/ranger/card-male-m.webp",
                    "l": "/images/classes/ranger/card-male-l.webp"
                }
            }
        }
    },
    "label": "Beast Master",
    "title": "D&D Portal - Beast Master",
    "subTitle": "Ranger subclass",
    "description": "Fight alongside an animal companion; Tasha\u2019s offers primal companion replacements.",
    "descriptions": {
        "short": "Fight alongside an animal companion; Tasha\u2019s offers primal companion replacements.",
        "medium": "Beast Master: Fight alongside an animal companion; Tasha\u2019s offers primal companion replacements.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Fight alongside an animal companion; Tasha\u2019s offers primal companion replacements."
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
        "beast-master"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "ranger-s-companion-primal-companion-optional-replacement",
                "title": "Ranger\u2019s Companion; Primal Companion (optional replacement)",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Bond with a beast companion that acts with your direction; the optional primal companion uses scaling Land, Sea, or Sky stat blocks."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "exceptional-training",
                "title": "Exceptional Training",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Command the companion to "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.dash",
                                "label": "Dash"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.disengage",
                                "label": "Disengage"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.dodge",
                                "label": "Dodge"
                            },
                            {
                                "type": "text",
                                "text": ", or "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.help",
                                "label": "Help"
                            },
                            {
                                "type": "text",
                                "text": " as a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.bonusAction",
                                "label": "bonus action"
                            },
                            {
                                "type": "text",
                                "text": "; its attacks count as magical."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "bestial-fury",
                "title": "Bestial Fury",
                "subtitle": "11th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "The companion attacks twice when commanded to take the "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.attackAction",
                                "label": "Attack action"
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
                "id": "share-spells",
                "title": "Share Spells",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "Spells"
                            },
                            {
                                "type": "text",
                                "text": " you cast on yourself can also affect the companion while it is nearby."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "ranger-s-companion-primal-companion-optional-replacement",
                "title": "Ranger\u2019s Companion; Primal Companion (optional replacement)"
            },
            {
                "id": "exceptional-training",
                "title": "Exceptional Training"
            },
            {
                "id": "bestial-fury",
                "title": "Bestial Fury"
            },
            {
                "id": "share-spells",
                "title": "Share Spells"
            }
        ]
    }
});
export default page;

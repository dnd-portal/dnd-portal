/*
	Location: src/lib/typescript/data/internals/classes/paladin.ts
	Use: Central Paladin class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/paladin/ancients",
    "img": {
        "href": "/icons/white/classes/paladin.svg",
        "alt": "A stylized Paladin class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Ancients Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-female-s.webp",
                    "m": "/images/classes/paladin/card-female-m.webp",
                    "l": "/images/classes/paladin/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Ancients Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-male-s.webp",
                    "m": "/images/classes/paladin/card-male-m.webp",
                    "l": "/images/classes/paladin/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Ancients Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-female-s.webp",
                    "m": "/images/classes/paladin/card-female-m.webp",
                    "l": "/images/classes/paladin/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Ancients Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-male-s.webp",
                    "m": "/images/classes/paladin/card-male-m.webp",
                    "l": "/images/classes/paladin/card-male-l.webp"
                }
            }
        }
    },
    "label": "Ancients",
    "title": "D&D Portal - Ancients",
    "subTitle": "Paladin subclass",
    "description": "Nature and fey-themed oath with magic resistance aura.",
    "descriptions": {
        "short": "Nature and fey-themed oath with magic resistance aura.",
        "medium": "Ancients: Nature and fey-themed oath with magic resistance aura.",
        "long": [
            [
                {
                    "type": "link",
                    "path": "internals.rules.skills.nature",
                    "label": "Nature"
                },
                {
                    "type": "text",
                    "text": " and fey-themed oath with magic resistance aura."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.paladin.page"
    },
    "tags": [
        "paladin",
        "subclass",
        "ancients"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "oath-spells-channel-divinity-nature-s-wrath-turn-the-faithless",
                "title": "Oath Spells; Channel Divinity: Nature\u2019s Wrath, Turn the Faithless",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain always-prepared oath "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": ", restrain a nearby foe with spectral vines, or turn fey and fiends."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "aura-of-warding",
                "title": "Aura of Warding",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "You and nearby allies gain resistance to damage from "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
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
                "id": "undying-sentinel",
                "title": "Undying Sentinel",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Once per "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.rests.longRest",
                                "label": "long rest"
                            },
                            {
                                "type": "text",
                                "text": ", remain at 1 hit point instead of dropping to 0 and stop suffering drawbacks from old age."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "elder-champion",
                "title": "Elder Champion",
                "subtitle": "20th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Assume a primal form that regenerates "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
                            },
                            {
                                "type": "text",
                                "text": ", speeds paladin spellcasting, and hampers nearby enemies against your "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " and Channel Divinity."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "oath-spells-channel-divinity-nature-s-wrath-turn-the-faithless",
                "title": "Oath Spells; Channel Divinity: Nature\u2019s Wrath, Turn the Faithless"
            },
            {
                "id": "aura-of-warding",
                "title": "Aura of Warding"
            },
            {
                "id": "undying-sentinel",
                "title": "Undying Sentinel"
            },
            {
                "id": "elder-champion",
                "title": "Elder Champion"
            }
        ]
    }
});
export default page;

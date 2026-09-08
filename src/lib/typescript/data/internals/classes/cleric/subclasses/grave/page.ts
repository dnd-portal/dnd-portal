/*
	Location: src/lib/typescript/data/internals/classes/cleric.ts
	Use: Central Cleric class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/cleric/grave",
    "img": {
        "href": "/icons/white/classes/cleric.svg",
        "alt": "A stylized Cleric class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Grave Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Grave Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-male-s.webp",
                    "m": "/images/classes/cleric/card-male-m.webp",
                    "l": "/images/classes/cleric/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Grave Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Grave Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-male-s.webp",
                    "m": "/images/classes/cleric/card-male-m.webp",
                    "l": "/images/classes/cleric/card-male-l.webp"
                }
            }
        }
    },
    "label": "Grave",
    "title": "D&D Portal - Grave",
    "subTitle": "Cleric subclass",
    "description": "Protect the dying, expose vulnerability, and suppress critical hits.",
    "descriptions": {
        "short": "Protect the dying, expose vulnerability, and suppress critical hits.",
        "medium": "Grave: Protect the dying, expose vulnerability, and suppress critical hits.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Protect the dying, expose vulnerability, and suppress "
                },
                {
                    "type": "link",
                    "path": "internals.rules.combat.criticalHit",
                    "label": "critical hits"
                },
                {
                    "type": "text",
                    "text": "."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.cleric.page"
    },
    "tags": [
        "cleric",
        "subclass",
        "grave"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "domain-spells-circle-of-mortality-eyes-of-the-grave",
                "title": "Domain Spells; Circle of Mortality; Eyes of the Grave",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Always prepare grave-themed "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": ", maximize healing dice for creatures at 0 "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
                            },
                            {
                                "type": "text",
                                "text": ", gain Spare the Dying at range, and sense nearby undead."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "channel-divinity-path-to-the-grave",
                "title": "Channel Divinity: Path to the Grave",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Curse a creature so the next attack that hits it deals vulnerability-level damage."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "sentinel-at-death-s-door",
                "title": "Sentinel at Death\u2019s Door",
                "subtitle": "6th level",
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
                                "text": " to turn a nearby "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.criticalHit",
                                "label": "critical hit"
                            },
                            {
                                "type": "text",
                                "text": " into a normal hit."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "potent-spellcasting",
                "title": "Potent Spellcasting",
                "subtitle": "8th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Add "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.wisdom",
                                "label": "Wisdom"
                            },
                            {
                                "type": "text",
                                "text": " to the damage of cleric "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.cantrips",
                                "label": "cantrips"
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
                "id": "keeper-of-souls",
                "title": "Keeper of Souls",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "When an enemy dies nearby, restore "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
                            },
                            {
                                "type": "text",
                                "text": " to yourself or an ally, once per turn."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "domain-spells-circle-of-mortality-eyes-of-the-grave",
                "title": "Domain Spells; Circle of Mortality; Eyes of the Grave"
            },
            {
                "id": "channel-divinity-path-to-the-grave",
                "title": "Channel Divinity: Path to the Grave"
            },
            {
                "id": "sentinel-at-death-s-door",
                "title": "Sentinel at Death\u2019s Door"
            },
            {
                "id": "potent-spellcasting",
                "title": "Potent Spellcasting"
            },
            {
                "id": "keeper-of-souls",
                "title": "Keeper of Souls"
            }
        ]
    }
});
export default page;

/*
	Location: src/lib/typescript/data/internals/classes/warlock.ts
	Use: Central Warlock class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/warlock/celestial",
    "img": {
        "href": "/icons/white/classes/warlock.svg",
        "alt": "A stylized Warlock class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Celestial Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-female-s.webp",
                    "m": "/images/classes/warlock/card-female-m.webp",
                    "l": "/images/classes/warlock/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Celestial Warlock class portrait.",
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
                "alt": "A female Celestial Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-female-s.webp",
                    "m": "/images/classes/warlock/card-female-m.webp",
                    "l": "/images/classes/warlock/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Celestial Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-male-s.webp",
                    "m": "/images/classes/warlock/card-male-m.webp",
                    "l": "/images/classes/warlock/card-male-l.webp"
                }
            }
        }
    },
    "label": "Celestial",
    "title": "D&D Portal - Celestial",
    "subTitle": "Warlock subclass",
    "description": "Healing dice, radiant and fire magic, and resilient revival.",
    "descriptions": {
        "short": "Healing dice, radiant and fire magic, and resilient revival.",
        "medium": "Celestial: Healing dice, radiant and fire magic, and resilient revival.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Healing dice, "
                },
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.radiant",
                    "label": "radiant"
                },
                {
                    "type": "text",
                    "text": " and "
                },
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.fire",
                    "label": "fire"
                },
                {
                    "type": "text",
                    "text": " magic, and resilient revival."
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
        "celestial"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "expanded-spell-list-bonus-cantrips-healing-light",
                "title": "Expanded Spell List; Bonus Cantrips; Healing Light",
                "subtitle": "1st level",
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
                                "path": "internals.rules.damageTypes.radiant",
                                "label": "radiant"
                            },
                            {
                                "type": "text",
                                "text": " and restorative "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " options, learn Light and Sacred Flame, and use a pool of d6s for bonus-action healing."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "radiant-soul",
                "title": "Radiant Soul",
                "subtitle": "6th level",
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
                                "path": "internals.rules.damageTypes.radiant",
                                "label": "radiant"
                            },
                            {
                                "type": "text",
                                "text": " resistance and add "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.charisma",
                                "label": "Charisma"
                            },
                            {
                                "type": "text",
                                "text": " to one "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.radiant",
                                "label": "radiant"
                            },
                            {
                                "type": "text",
                                "text": " or "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.fire",
                                "label": "fire"
                            },
                            {
                                "type": "text",
                                "text": " "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.damageRoll",
                                "label": "damage roll"
                            },
                            {
                                "type": "text",
                                "text": " of a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
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
                "id": "celestial-resilience",
                "title": "Celestial Resilience",
                "subtitle": "10th level",
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
                                "path": "internals.rules.combat.hitPoints",
                                "label": "temporary hit points"
                            },
                            {
                                "type": "text",
                                "text": " after rests and grant some to allies."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "searing-vengeance",
                "title": "Searing Vengeance",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "When making a death save, instead rise with half "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
                            },
                            {
                                "type": "text",
                                "text": ", damage and blind nearby enemies, once per "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.rests.longRest",
                                "label": "long rest"
                            },
                            {
                                "type": "text",
                                "text": "."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "expanded-spell-list-bonus-cantrips-healing-light",
                "title": "Expanded Spell List; Bonus Cantrips; Healing Light"
            },
            {
                "id": "radiant-soul",
                "title": "Radiant Soul"
            },
            {
                "id": "celestial-resilience",
                "title": "Celestial Resilience"
            },
            {
                "id": "searing-vengeance",
                "title": "Searing Vengeance"
            }
        ]
    }
});
export default page;

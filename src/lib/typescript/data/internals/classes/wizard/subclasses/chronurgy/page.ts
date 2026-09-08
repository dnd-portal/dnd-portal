/*
	Location: src/lib/typescript/data/internals/classes/wizard.ts
	Use: Central Wizard class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/wizard/chronurgy",
    "img": {
        "href": "/icons/white/classes/wizard.svg",
        "alt": "A stylized Wizard class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Chronurgy Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Chronurgy Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-male-s.webp",
                    "m": "/images/classes/wizard/card-male-m.webp",
                    "l": "/images/classes/wizard/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Chronurgy Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Chronurgy Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-male-s.webp",
                    "m": "/images/classes/wizard/card-male-m.webp",
                    "l": "/images/classes/wizard/card-male-l.webp"
                }
            }
        }
    },
    "label": "Chronurgy",
    "title": "D&D Portal - Chronurgy",
    "subTitle": "Wizard subclass",
    "description": "Manipulate initiative, rerolls, time stasis, and outcome certainty.",
    "descriptions": {
        "short": "Manipulate initiative, rerolls, time stasis, and outcome certainty.",
        "medium": "Chronurgy: Manipulate initiative, rerolls, time stasis, and outcome certainty.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Manipulate "
                },
                {
                    "type": "link",
                    "path": "internals.rules.combat.initiativeRoll",
                    "label": "initiative"
                },
                {
                    "type": "text",
                    "text": ", rerolls, time stasis, and outcome certainty."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.wizard.page"
    },
    "tags": [
        "wizard",
        "subclass",
        "chronurgy"
    ],
    "content": {
        "source": "Explorer\u2019s Guide to Wildemount",
        "featureSections": [
            {
                "id": "chronal-shift-temporal-awareness",
                "title": "Chronal Shift; Temporal Awareness",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.force",
                                "label": "Force"
                            },
                            {
                                "type": "text",
                                "text": " a nearby creature to reroll an attack, check, or save, and add "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.intelligence",
                                "label": "Intelligence"
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
                                "text": "."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "momentary-stasis",
                "title": "Momentary Stasis",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Use an action to incapacitate and immobilize a creature until the end of your next turn."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "arcane-abeyance",
                "title": "Arcane Abeyance",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Store a lower-level "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " in a bead that another creature can release later."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "convergent-future",
                "title": "Convergent Future",
                "subtitle": "14th level",
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
                                "text": " to decide whether a nearby attack, check, or save barely succeeds or fails, gaining "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.exhaustion",
                                "label": "exhaustion"
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
                "id": "chronal-shift-temporal-awareness",
                "title": "Chronal Shift; Temporal Awareness"
            },
            {
                "id": "momentary-stasis",
                "title": "Momentary Stasis"
            },
            {
                "id": "arcane-abeyance",
                "title": "Arcane Abeyance"
            },
            {
                "id": "convergent-future",
                "title": "Convergent Future"
            }
        ]
    }
});
export default page;

/*
	Location: src/lib/typescript/data/internals/classes/wizard.ts
	Use: Central Wizard class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/wizard/graviturgy",
    "img": {
        "href": "/icons/white/classes/wizard.svg",
        "alt": "A stylized Wizard class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Graviturgy Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Graviturgy Wizard class portrait.",
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
                "alt": "A female Graviturgy Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Graviturgy Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-male-s.webp",
                    "m": "/images/classes/wizard/card-male-m.webp",
                    "l": "/images/classes/wizard/card-male-l.webp"
                }
            }
        }
    },
    "label": "Graviturgy",
    "title": "D&D Portal - Graviturgy",
    "subTitle": "Wizard subclass",
    "description": "Alter weight, movement, and gravitational force.",
    "descriptions": {
        "short": "Alter weight, movement, and gravitational force.",
        "medium": "Graviturgy: Alter weight, movement, and gravitational force.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Alter weight, movement, and gravitational "
                },
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.force",
                    "label": "force"
                },
                {
                    "type": "text",
                    "text": "."
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
        "graviturgy"
    ],
    "content": {
        "source": "Explorer\u2019s Guide to Wildemount",
        "featureSections": [
            {
                "id": "adjust-density",
                "title": "Adjust Density",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Alter a creature or object\u2019s weight, changing "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.speed",
                                "label": "speed"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.strength",
                                "label": "Strength"
                            },
                            {
                                "type": "text",
                                "text": " checks, and later attack or "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.armorClass",
                                "label": "Armor Class"
                            },
                            {
                                "type": "text",
                                "text": " values."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "gravity-well",
                "title": "Gravity Well",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Move a creature when it is hit by one of your "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": ", fails a save against one, or is willing and targeted."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "violent-attraction",
                "title": "Violent Attraction",
                "subtitle": "10th level",
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
                                "text": " to increase a weapon hit\u2019s damage or a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.falling",
                                "label": "falling"
                            },
                            {
                                "type": "text",
                                "text": " creature\u2019s damage."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "event-horizon",
                "title": "Event Horizon",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Create a gravitational field that slows and damages hostile creatures around you."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "adjust-density",
                "title": "Adjust Density"
            },
            {
                "id": "gravity-well",
                "title": "Gravity Well"
            },
            {
                "id": "violent-attraction",
                "title": "Violent Attraction"
            },
            {
                "id": "event-horizon",
                "title": "Event Horizon"
            }
        ]
    }
});
export default page;

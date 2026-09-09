/*
	Location: src/lib/typescript/data/internals/classes/fighter.ts
	Use: Central Fighter class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/fighter/samurai",
    "img": {
        "href": "/icons/white/classes/fighter.svg",
        "alt": "A stylized Fighter class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Samurai Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Samurai Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-male-s.webp",
                    "m": "/images/classes/fighter/card-male-m.webp",
                    "l": "/images/classes/fighter/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Samurai Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Samurai Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-male-s.webp",
                    "m": "/images/classes/fighter/card-male-m.webp",
                    "l": "/images/classes/fighter/card-male-l.webp"
                }
            }
        }
    },
    "label": "Samurai",
    "title": "D&D Portal - Samurai",
    "subTitle": "Fighter subclass",
    "description": "Gain temporary advantage, resilience, and disciplined social presence.",
    "descriptions": {
        "short": "Gain temporary advantage, resilience, and disciplined social presence.",
        "medium": "Samurai: Gain temporary advantage, resilience, and disciplined social presence.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Gain temporary advantage, resilience, and disciplined social presence."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.fighter.page"
    },
    "tags": [
        "fighter",
        "subclass",
        "samurai"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "bonus-proficiency-fighting-spirit",
                "title": "Bonus Proficiency; Fighting Spirit",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain a skill or language and use a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.bonusAction",
                                "label": "bonus action"
                            },
                            {
                                "type": "text",
                                "text": " for attack advantage and "
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
                "id": "elegant-courtier",
                "title": "Elegant Courtier",
                "subtitle": "7th level",
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
                                "text": " to "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.persuasion",
                                "label": "Persuasion"
                            },
                            {
                                "type": "text",
                                "text": " and gain proficiency in "
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
                                "label": "saving throws"
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
                "id": "tireless-spirit",
                "title": "Tireless Spirit",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Regain one Fighting Spirit use when rolling "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.initiativeRoll",
                                "label": "initiative"
                            },
                            {
                                "type": "text",
                                "text": " with none remaining."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "rapid-strike",
                "title": "Rapid Strike",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Trade advantage on one attack for an additional weapon attack during the same action."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "strength-before-death",
                "title": "Strength Before Death",
                "subtitle": "18th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "When reduced to 0 "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
                            },
                            {
                                "type": "text",
                                "text": ", interrupt the current turn to take an extra turn before "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.falling",
                                "label": "falling"
                            },
                            {
                                "type": "text",
                                "text": " "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.unconscious",
                                "label": "unconscious"
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
                "id": "bonus-proficiency-fighting-spirit",
                "title": "Bonus Proficiency; Fighting Spirit"
            },
            {
                "id": "elegant-courtier",
                "title": "Elegant Courtier"
            },
            {
                "id": "tireless-spirit",
                "title": "Tireless Spirit"
            },
            {
                "id": "rapid-strike",
                "title": "Rapid Strike"
            },
            {
                "id": "strength-before-death",
                "title": "Strength Before Death"
            }
        ]
    }
});
export default page;

/*
	Location: src/lib/typescript/data/internals/classes/warlock.ts
	Use: Central Warlock class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/warlock/fiend",
    "img": {
        "href": "/icons/white/classes/warlock.svg",
        "alt": "A stylized Warlock class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Fiend Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-female-s.webp",
                    "m": "/images/classes/warlock/card-female-m.webp",
                    "l": "/images/classes/warlock/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Fiend Warlock class portrait.",
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
                "alt": "A female Fiend Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-female-s.webp",
                    "m": "/images/classes/warlock/card-female-m.webp",
                    "l": "/images/classes/warlock/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Fiend Warlock class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/warlock/card-male-s.webp",
                    "m": "/images/classes/warlock/card-male-m.webp",
                    "l": "/images/classes/warlock/card-male-l.webp"
                }
            }
        }
    },
    "label": "Fiend",
    "title": "D&D Portal - Fiend",
    "subTitle": "Warlock subclass",
    "description": "Temporary hit points, luck, damage resistance, and infernal punishment.",
    "descriptions": {
        "short": "Temporary hit points, luck, damage resistance, and infernal punishment.",
        "medium": "Fiend: Temporary hit points, luck, damage resistance, and infernal punishment.",
        "long": [
            [
                {
                    "type": "link",
                    "path": "internals.rules.combat.hitPoints",
                    "label": "Temporary hit points"
                },
                {
                    "type": "text",
                    "text": ", luck, damage resistance, and infernal punishment."
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
        "fiend"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "expanded-spell-list-dark-one-s-blessing",
                "title": "Expanded Spell List; Dark One\u2019s Blessing",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain destructive fiend "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "temporary hit points"
                            },
                            {
                                "type": "text",
                                "text": " whenever you reduce a hostile creature to 0 "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
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
                "id": "dark-one-s-own-luck",
                "title": "Dark One\u2019s Own Luck",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Add a d10 to one "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.d20Tests.abilityCheck",
                                "label": "ability check"
                            },
                            {
                                "type": "text",
                                "text": " or "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.d20Tests.savingThrow",
                                "label": "saving throw"
                            },
                            {
                                "type": "text",
                                "text": " after seeing the roll."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "fiendish-resilience",
                "title": "Fiendish Resilience",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Choose one damage type to resist after each rest."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "hurl-through-hell",
                "title": "Hurl Through Hell",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "After a hit, send the target through a nightmare realm and deal massive "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.psychic",
                                "label": "psychic"
                            },
                            {
                                "type": "text",
                                "text": " damage."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "expanded-spell-list-dark-one-s-blessing",
                "title": "Expanded Spell List; Dark One\u2019s Blessing"
            },
            {
                "id": "dark-one-s-own-luck",
                "title": "Dark One\u2019s Own Luck"
            },
            {
                "id": "fiendish-resilience",
                "title": "Fiendish Resilience"
            },
            {
                "id": "hurl-through-hell",
                "title": "Hurl Through Hell"
            }
        ]
    }
});
export default page;

/*
	Location: src/lib/typescript/data/internals/classes/cleric.ts
	Use: Central Cleric class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/cleric/tempest",
    "img": {
        "href": "/icons/white/classes/cleric.svg",
        "alt": "A stylized Cleric class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Tempest Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Tempest Cleric class portrait.",
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
                "alt": "A female Tempest Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Tempest Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-male-s.webp",
                    "m": "/images/classes/cleric/card-male-m.webp",
                    "l": "/images/classes/cleric/card-male-l.webp"
                }
            }
        }
    },
    "label": "Tempest",
    "title": "D&D Portal - Tempest",
    "subTitle": "Cleric subclass",
    "description": "Thunder, lightning, heavy armor, and maximized storm damage.",
    "descriptions": {
        "short": "Thunder, lightning, heavy armor, and maximized storm damage.",
        "medium": "Tempest: Thunder, lightning, heavy armor, and maximized storm damage.",
        "long": [
            [
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.thunder",
                    "label": "Thunder"
                },
                {
                    "type": "text",
                    "text": ", "
                },
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.lightning",
                    "label": "lightning"
                },
                {
                    "type": "text",
                    "text": ", "
                },
                {
                    "type": "link",
                    "path": "internals.rules.equipment.heavyArmor",
                    "label": "heavy armor"
                },
                {
                    "type": "text",
                    "text": ", and maximized storm damage."
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
        "tempest"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "domain-spells-bonus-proficiencies-wrath-of-the-storm",
                "title": "Domain Spells; Bonus Proficiencies; Wrath of the Storm",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Always prepare storm "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": ", gain "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.equipment.martialWeapons",
                                "label": "martial weapons"
                            },
                            {
                                "type": "text",
                                "text": " and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.equipment.heavyArmor",
                                "label": "heavy armor"
                            },
                            {
                                "type": "text",
                                "text": ", and retaliate against nearby attackers with "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.lightning",
                                "label": "lightning"
                            },
                            {
                                "type": "text",
                                "text": " or "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.thunder",
                                "label": "thunder"
                            },
                            {
                                "type": "text",
                                "text": " damage."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "channel-divinity-destructive-wrath",
                "title": "Channel Divinity: Destructive Wrath",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Deal maximum damage instead of rolling for "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.lightning",
                                "label": "lightning"
                            },
                            {
                                "type": "text",
                                "text": " or "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.thunder",
                                "label": "thunder"
                            },
                            {
                                "type": "text",
                                "text": " damage."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "thunderbolt-strike",
                "title": "Thunderbolt Strike",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Push Large or smaller creatures when you deal "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.lightning",
                                "label": "lightning"
                            },
                            {
                                "type": "text",
                                "text": " damage to them."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "divine-strike",
                "title": "Divine Strike",
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
                                "path": "internals.rules.damageTypes.thunder",
                                "label": "thunder"
                            },
                            {
                                "type": "text",
                                "text": " damage to one weapon hit each turn."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "stormborn",
                "title": "Stormborn",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.flying",
                                "label": "flying"
                            },
                            {
                                "type": "text",
                                "text": " "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.speed",
                                "label": "speed"
                            },
                            {
                                "type": "text",
                                "text": " while outdoors and not underground."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "domain-spells-bonus-proficiencies-wrath-of-the-storm",
                "title": "Domain Spells; Bonus Proficiencies; Wrath of the Storm"
            },
            {
                "id": "channel-divinity-destructive-wrath",
                "title": "Channel Divinity: Destructive Wrath"
            },
            {
                "id": "thunderbolt-strike",
                "title": "Thunderbolt Strike"
            },
            {
                "id": "divine-strike",
                "title": "Divine Strike"
            },
            {
                "id": "stormborn",
                "title": "Stormborn"
            }
        ]
    }
});
export default page;

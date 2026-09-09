/*
	Location: src/lib/typescript/data/internals/classes/cleric.ts
	Use: Central Cleric class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/cleric/twilight",
    "img": {
        "href": "/icons/white/classes/cleric.svg",
        "alt": "A stylized Cleric class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Twilight Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Twilight Cleric class portrait.",
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
                "alt": "A female Twilight Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Twilight Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-male-s.webp",
                    "m": "/images/classes/cleric/card-male-m.webp",
                    "l": "/images/classes/cleric/card-male-l.webp"
                }
            }
        }
    },
    "label": "Twilight",
    "title": "D&D Portal - Twilight",
    "subTitle": "Cleric subclass",
    "description": "Exceptional darkvision, initiative aid, and a protective twilight aura.",
    "descriptions": {
        "short": "Exceptional darkvision, initiative aid, and a protective twilight aura.",
        "medium": "Twilight: Exceptional darkvision, initiative aid, and a protective twilight aura.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Exceptional darkvision, "
                },
                {
                    "type": "link",
                    "path": "internals.rules.combat.initiativeRoll",
                    "label": "initiative"
                },
                {
                    "type": "text",
                    "text": " aid, and a protective twilight aura."
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
        "twilight"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "domain-spells-bonus-proficiencies-eyes-of-night-vigilant-blessing",
                "title": "Domain Spells; Bonus Proficiencies; Eyes of Night; Vigilant Blessing",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Always prepare twilight-themed "
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
                                "text": ", gain extreme darkvision that can be shared, and grant "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.initiativeRoll",
                                "label": "initiative"
                            },
                            {
                                "type": "text",
                                "text": " advantage."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "channel-divinity-twilight-sanctuary",
                "title": "Channel Divinity: Twilight Sanctuary",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Create a moving aura that grants "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "temporary hit points"
                            },
                            {
                                "type": "text",
                                "text": " or ends charm and fear on allies."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "steps-of-night",
                "title": "Steps of Night",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain temporary flight in dim light or darkness."
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
                                "path": "internals.rules.damageTypes.radiant",
                                "label": "radiant"
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
                "id": "twilight-shroud",
                "title": "Twilight Shroud",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Creatures inside Twilight Sanctuary gain half cover."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "domain-spells-bonus-proficiencies-eyes-of-night-vigilant-blessing",
                "title": "Domain Spells; Bonus Proficiencies; Eyes of Night; Vigilant Blessing"
            },
            {
                "id": "channel-divinity-twilight-sanctuary",
                "title": "Channel Divinity: Twilight Sanctuary"
            },
            {
                "id": "steps-of-night",
                "title": "Steps of Night"
            },
            {
                "id": "divine-strike",
                "title": "Divine Strike"
            },
            {
                "id": "twilight-shroud",
                "title": "Twilight Shroud"
            }
        ]
    }
});
export default page;

/*
	Location: src/lib/typescript/data/internals/classes/cleric.ts
	Use: Central Cleric class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/cleric/forge",
    "img": {
        "href": "/icons/white/classes/cleric.svg",
        "alt": "A stylized Cleric class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Forge Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Forge Cleric class portrait.",
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
                "alt": "A female Forge Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Forge Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-male-s.webp",
                    "m": "/images/classes/cleric/card-male-m.webp",
                    "l": "/images/classes/cleric/card-male-l.webp"
                }
            }
        }
    },
    "label": "Forge",
    "title": "D&D Portal - Forge",
    "subTitle": "Cleric subclass",
    "description": "Bless equipment, gain heavy armor, and resist fire.",
    "descriptions": {
        "short": "Bless equipment, gain heavy armor, and resist fire.",
        "medium": "Forge: Bless equipment, gain heavy armor, and resist fire.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Bless equipment, gain "
                },
                {
                    "type": "link",
                    "path": "internals.rules.equipment.heavyArmor",
                    "label": "heavy armor"
                },
                {
                    "type": "text",
                    "text": ", and resist "
                },
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.fire",
                    "label": "fire"
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
        "forge"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "domain-spells-bonus-proficiency-blessing-of-the-forge",
                "title": "Domain Spells; Bonus Proficiency; Blessing of the Forge",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Always prepare forge-themed "
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
                                "path": "internals.rules.equipment.heavyArmor",
                                "label": "heavy armor"
                            },
                            {
                                "type": "text",
                                "text": " and smith\u2019s-tools proficiency, and temporarily make one weapon or armor item magical with a +1 bonus."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "channel-divinity-artisan-s-blessing",
                "title": "Channel Divinity: Artisan\u2019s Blessing",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Transform metal of equal value into a nonmagical metal object through a one-hour ritual."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "soul-of-the-forge",
                "title": "Soul of the Forge",
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
                                "path": "internals.rules.damageTypes.fire",
                                "label": "fire"
                            },
                            {
                                "type": "text",
                                "text": " resistance and an "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.armorClass",
                                "label": "Armor Class"
                            },
                            {
                                "type": "text",
                                "text": " bonus while wearing "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.equipment.heavyArmor",
                                "label": "heavy armor"
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
                                "path": "internals.rules.damageTypes.fire",
                                "label": "fire"
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
                "id": "saint-of-forge-and-fire",
                "title": "Saint of Forge and Fire",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Become immune to "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.fire",
                                "label": "fire"
                            },
                            {
                                "type": "text",
                                "text": " and resistant to nonmagical "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.bludgeoning",
                                "label": "bludgeoning"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.piercing",
                                "label": "piercing"
                            },
                            {
                                "type": "text",
                                "text": ", and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.slashing",
                                "label": "slashing"
                            },
                            {
                                "type": "text",
                                "text": " damage in "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.equipment.heavyArmor",
                                "label": "heavy armor"
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
                "id": "domain-spells-bonus-proficiency-blessing-of-the-forge",
                "title": "Domain Spells; Bonus Proficiency; Blessing of the Forge"
            },
            {
                "id": "channel-divinity-artisan-s-blessing",
                "title": "Channel Divinity: Artisan\u2019s Blessing"
            },
            {
                "id": "soul-of-the-forge",
                "title": "Soul of the Forge"
            },
            {
                "id": "divine-strike",
                "title": "Divine Strike"
            },
            {
                "id": "saint-of-forge-and-fire",
                "title": "Saint of Forge and Fire"
            }
        ]
    }
});
export default page;

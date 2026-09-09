/*
	Location: src/lib/typescript/data/internals/classes/cleric.ts
	Use: Central Cleric class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/cleric/war",
    "img": {
        "href": "/icons/white/classes/cleric.svg",
        "alt": "A stylized Cleric class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female War Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male War Cleric class portrait.",
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
                "alt": "A female War Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male War Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-male-s.webp",
                    "m": "/images/classes/cleric/card-male-m.webp",
                    "l": "/images/classes/cleric/card-male-l.webp"
                }
            }
        }
    },
    "label": "War",
    "title": "D&D Portal - War",
    "subTitle": "Cleric subclass",
    "description": "Martial weapons, heavy armor, bonus attacks, and accuracy boosts.",
    "descriptions": {
        "short": "Martial weapons, heavy armor, bonus attacks, and accuracy boosts.",
        "medium": "War: Martial weapons, heavy armor, bonus attacks, and accuracy boosts.",
        "long": [
            [
                {
                    "type": "link",
                    "path": "internals.rules.equipment.martialWeapons",
                    "label": "Martial weapons"
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
                    "text": ", bonus attacks, and accuracy boosts."
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
        "war"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "domain-spells-bonus-proficiencies-war-priest",
                "title": "Domain Spells; Bonus Proficiencies; War Priest",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Always prepare battle "
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
                                "text": ", and make limited bonus-action weapon attacks."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "channel-divinity-guided-strike",
                "title": "Channel Divinity: Guided Strike",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Add a large bonus to one "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.attackRoll",
                                "label": "attack roll"
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
                "id": "channel-divinity-war-god-s-blessing",
                "title": "Channel Divinity: War God\u2019s Blessing",
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
                                "text": " to add the same attack bonus to a nearby creature\u2019s roll."
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
                                "text": "Add weapon-type damage to one weapon hit each turn."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "avatar-of-battle",
                "title": "Avatar of Battle",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain resistance to nonmagical "
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
                                "text": " damage."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "domain-spells-bonus-proficiencies-war-priest",
                "title": "Domain Spells; Bonus Proficiencies; War Priest"
            },
            {
                "id": "channel-divinity-guided-strike",
                "title": "Channel Divinity: Guided Strike"
            },
            {
                "id": "channel-divinity-war-god-s-blessing",
                "title": "Channel Divinity: War God\u2019s Blessing"
            },
            {
                "id": "divine-strike",
                "title": "Divine Strike"
            },
            {
                "id": "avatar-of-battle",
                "title": "Avatar of Battle"
            }
        ]
    }
});
export default page;

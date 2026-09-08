/*
	Location: src/lib/typescript/data/internals/classes/cleric.ts
	Use: Central Cleric class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/cleric/nature",
    "img": {
        "href": "/icons/white/classes/cleric.svg",
        "alt": "A stylized Cleric class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Nature Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Nature Cleric class portrait.",
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
                "alt": "A female Nature Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Nature Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-male-s.webp",
                    "m": "/images/classes/cleric/card-male-m.webp",
                    "l": "/images/classes/cleric/card-male-l.webp"
                }
            }
        }
    },
    "label": "Nature",
    "title": "D&D Portal - Nature",
    "subTitle": "Cleric subclass",
    "description": "Druid cantrip access, heavy armor, and elemental protection.",
    "descriptions": {
        "short": "Druid cantrip access, heavy armor, and elemental protection.",
        "medium": "Nature: Druid cantrip access, heavy armor, and elemental protection.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Druid "
                },
                {
                    "type": "link",
                    "path": "internals.rules.spellcasting.cantrips",
                    "label": "cantrip"
                },
                {
                    "type": "text",
                    "text": " access, "
                },
                {
                    "type": "link",
                    "path": "internals.rules.equipment.heavyArmor",
                    "label": "heavy armor"
                },
                {
                    "type": "text",
                    "text": ", and elemental protection."
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
        "nature"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "domain-spells-acolyte-of-nature-bonus-proficiency",
                "title": "Domain Spells; Acolyte of Nature; Bonus Proficiency",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Always prepare "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.nature",
                                "label": "nature"
                            },
                            {
                                "type": "text",
                                "text": "-themed "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": ", learn a druid "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.cantrips",
                                "label": "cantrip"
                            },
                            {
                                "type": "text",
                                "text": ", gain a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.nature",
                                "label": "nature"
                            },
                            {
                                "type": "text",
                                "text": " skill proficiency, and gain "
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
                "id": "channel-divinity-charm-animals-and-plants",
                "title": "Channel Divinity: Charm Animals and Plants",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Charm nearby beasts and plants for a limited duration."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "dampen-elements",
                "title": "Dampen Elements",
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
                                "text": " to grant resistance against "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.acid",
                                "label": "acid"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.cold",
                                "label": "cold"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.fire",
                                "label": "fire"
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
                                "text": ", or "
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
                "id": "divine-strike",
                "title": "Divine Strike",
                "subtitle": "8th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Add selectable elemental damage to one weapon hit each turn."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "master-of-nature",
                "title": "Master of Nature",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Command beasts and plants currently "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.charmed",
                                "label": "charmed"
                            },
                            {
                                "type": "text",
                                "text": " by your Channel Divinity."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "domain-spells-acolyte-of-nature-bonus-proficiency",
                "title": "Domain Spells; Acolyte of Nature; Bonus Proficiency"
            },
            {
                "id": "channel-divinity-charm-animals-and-plants",
                "title": "Channel Divinity: Charm Animals and Plants"
            },
            {
                "id": "dampen-elements",
                "title": "Dampen Elements"
            },
            {
                "id": "divine-strike",
                "title": "Divine Strike"
            },
            {
                "id": "master-of-nature",
                "title": "Master of Nature"
            }
        ]
    }
});
export default page;

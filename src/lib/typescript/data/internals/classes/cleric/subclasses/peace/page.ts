/*
	Location: src/lib/typescript/data/internals/classes/cleric.ts
	Use: Central Cleric class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/cleric/peace",
    "img": {
        "href": "/icons/white/classes/cleric.svg",
        "alt": "A stylized Cleric class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Peace Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Peace Cleric class portrait.",
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
                "alt": "A female Peace Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Peace Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-male-s.webp",
                    "m": "/images/classes/cleric/card-male-m.webp",
                    "l": "/images/classes/cleric/card-male-l.webp"
                }
            }
        }
    },
    "label": "Peace",
    "title": "D&D Portal - Peace",
    "subTitle": "Cleric subclass",
    "description": "Bond allies, improve rolls, and share damage through protective movement.",
    "descriptions": {
        "short": "Bond allies, improve rolls, and share damage through protective movement.",
        "medium": "Peace: Bond allies, improve rolls, and share damage through protective movement.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Bond allies, improve rolls, and share damage through protective movement."
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
        "peace"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "domain-spells-implement-of-peace-emboldening-bond",
                "title": "Domain Spells; Implement of Peace; Emboldening Bond",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Always prepare peace-themed "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": ", gain a social skill, and bond allies so they can add a d4 to selected attacks, checks, and saves."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "channel-divinity-balm-of-peace",
                "title": "Channel Divinity: Balm of Peace",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Move without provoking opportunity attacks and heal creatures you pass near."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "protective-bond",
                "title": "Protective Bond",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Bonded creatures can teleport to one another and take damage in each other\u2019s place."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "potent-spellcasting",
                "title": "Potent Spellcasting",
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
                                "path": "internals.rules.abilityScores.wisdom",
                                "label": "Wisdom"
                            },
                            {
                                "type": "text",
                                "text": " to the damage of cleric "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.cantrips",
                                "label": "cantrips"
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
                "id": "expansive-bond",
                "title": "Expansive Bond",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Increase bond range and grant resistance when a bonded creature intercepts damage."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "domain-spells-implement-of-peace-emboldening-bond",
                "title": "Domain Spells; Implement of Peace; Emboldening Bond"
            },
            {
                "id": "channel-divinity-balm-of-peace",
                "title": "Channel Divinity: Balm of Peace"
            },
            {
                "id": "protective-bond",
                "title": "Protective Bond"
            },
            {
                "id": "potent-spellcasting",
                "title": "Potent Spellcasting"
            },
            {
                "id": "expansive-bond",
                "title": "Expansive Bond"
            }
        ]
    }
});
export default page;

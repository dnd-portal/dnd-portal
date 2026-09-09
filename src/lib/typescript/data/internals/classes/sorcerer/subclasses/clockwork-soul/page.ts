/*
	Location: src/lib/typescript/data/internals/classes/sorcerer.ts
	Use: Central Sorcerer class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/sorcerer/clockwork-soul",
    "img": {
        "href": "/icons/white/classes/sorcerer.svg",
        "alt": "A stylized Sorcerer class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Clockwork Soul Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-female-s.webp",
                    "m": "/images/classes/sorcerer/card-female-m.webp",
                    "l": "/images/classes/sorcerer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Clockwork Soul Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-male-s.webp",
                    "m": "/images/classes/sorcerer/card-male-m.webp",
                    "l": "/images/classes/sorcerer/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Clockwork Soul Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-female-s.webp",
                    "m": "/images/classes/sorcerer/card-female-m.webp",
                    "l": "/images/classes/sorcerer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Clockwork Soul Sorcerer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/sorcerer/card-male-s.webp",
                    "m": "/images/classes/sorcerer/card-male-m.webp",
                    "l": "/images/classes/sorcerer/card-male-l.webp"
                }
            }
        }
    },
    "label": "Clockwork Soul",
    "title": "D&D Portal - Clockwork Soul",
    "subTitle": "Sorcerer subclass",
    "description": "Restore balance, cancel advantage/disadvantage, and create protective wards.",
    "descriptions": {
        "short": "Restore balance, cancel advantage/disadvantage, and create protective wards.",
        "medium": "Clockwork Soul: Restore balance, cancel advantage/disadvantage, and create protective wards.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Restore balance, cancel advantage/disadvantage, and create protective wards."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.sorcerer.page"
    },
    "tags": [
        "sorcerer",
        "subclass",
        "clockwork-soul"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "clockwork-magic-restore-balance",
                "title": "Clockwork Magic; Restore Balance",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain an expandable order-themed "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " list and cancel advantage or disadvantage on nearby rolls."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "bastion-of-law",
                "title": "Bastion of Law",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Spend sorcery points to create a protective ward of d8s that reduce damage."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "trance-of-order",
                "title": "Trance of Order",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Enter a state that prevents enemies from gaining advantage against you and treats low attacks, checks, and saves as 10."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "clockwork-cavalcade",
                "title": "Clockwork Cavalcade",
                "subtitle": "18th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Summon spirits of order that heal allies, repair objects, and end selected "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " in a large area."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "clockwork-magic-restore-balance",
                "title": "Clockwork Magic; Restore Balance"
            },
            {
                "id": "bastion-of-law",
                "title": "Bastion of Law"
            },
            {
                "id": "trance-of-order",
                "title": "Trance of Order"
            },
            {
                "id": "clockwork-cavalcade",
                "title": "Clockwork Cavalcade"
            }
        ]
    }
});
export default page;

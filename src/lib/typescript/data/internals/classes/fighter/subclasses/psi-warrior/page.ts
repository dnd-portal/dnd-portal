/*
	Location: src/lib/typescript/data/internals/classes/fighter.ts
	Use: Central Fighter class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/fighter/psi-warrior",
    "img": {
        "href": "/icons/white/classes/fighter.svg",
        "alt": "A stylized Fighter class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Psi Warrior Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Psi Warrior Fighter class portrait.",
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
                "alt": "A female Psi Warrior Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Psi Warrior Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-male-s.webp",
                    "m": "/images/classes/fighter/card-male-m.webp",
                    "l": "/images/classes/fighter/card-male-l.webp"
                }
            }
        }
    },
    "label": "Psi Warrior",
    "title": "D&D Portal - Psi Warrior",
    "subTitle": "Fighter subclass",
    "description": "Psionic dice fuel defense, movement, and telekinetic strikes.",
    "descriptions": {
        "short": "Psionic dice fuel defense, movement, and telekinetic strikes.",
        "medium": "Psi Warrior: Psionic dice fuel defense, movement, and telekinetic strikes.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Psionic dice fuel defense, movement, and telekinetic strikes."
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
        "psi-warrior"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "psionic-power",
                "title": "Psionic Power",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain a pool of Psionic Energy dice used for protective fields, psionic strikes, and telekinetic movement."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "telekinetic-adept",
                "title": "Telekinetic Adept",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain short-duration flight and a telekinetic shove that can move or knock a target "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.prone",
                                "label": "prone"
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
                "id": "guarded-mind",
                "title": "Guarded Mind",
                "subtitle": "10th level",
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
                                "path": "internals.rules.damageTypes.psychic",
                                "label": "psychic"
                            },
                            {
                                "type": "text",
                                "text": " resistance and spend a Psionic Energy die to end charm or fear on yourself."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "bulwark-of-force",
                "title": "Bulwark of Force",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Grant half cover to yourself and nearby allies for a limited duration."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "telekinetic-master",
                "title": "Telekinetic Master",
                "subtitle": "18th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Cast Telekinesis without components, attack while concentrating on it, and gain limited free use."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "psionic-power",
                "title": "Psionic Power"
            },
            {
                "id": "telekinetic-adept",
                "title": "Telekinetic Adept"
            },
            {
                "id": "guarded-mind",
                "title": "Guarded Mind"
            },
            {
                "id": "bulwark-of-force",
                "title": "Bulwark of Force"
            },
            {
                "id": "telekinetic-master",
                "title": "Telekinetic Master"
            }
        ]
    }
});
export default page;

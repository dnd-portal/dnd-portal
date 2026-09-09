/*
	Location: src/lib/typescript/data/internals/classes/fighter.ts
	Use: Central Fighter class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/fighter/eldritch-knight",
    "img": {
        "href": "/icons/white/classes/fighter.svg",
        "alt": "A stylized Fighter class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Eldritch Knight Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Eldritch Knight Fighter class portrait.",
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
                "alt": "A female Eldritch Knight Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-female-s.webp",
                    "m": "/images/classes/fighter/card-female-m.webp",
                    "l": "/images/classes/fighter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Eldritch Knight Fighter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/fighter/card-male-s.webp",
                    "m": "/images/classes/fighter/card-male-m.webp",
                    "l": "/images/classes/fighter/card-male-l.webp"
                }
            }
        }
    },
    "label": "Eldritch Knight",
    "title": "D&D Portal - Eldritch Knight",
    "subTitle": "Fighter subclass",
    "description": "Blend weapon combat with limited wizard spellcasting.",
    "descriptions": {
        "short": "Blend weapon combat with limited wizard spellcasting.",
        "medium": "Eldritch Knight: Blend weapon combat with limited wizard spellcasting.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Blend weapon combat with limited wizard spellcasting."
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
        "eldritch-knight"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "spellcasting-weapon-bond",
                "title": "Spellcasting; Weapon Bond",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain limited wizard spellcasting and bond with weapons so they cannot be easily disarmed and can be summoned to your hand."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "war-magic",
                "title": "War Magic",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "After casting a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.cantrips",
                                "label": "cantrip"
                            },
                            {
                                "type": "text",
                                "text": " with your action, make one weapon attack as a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.bonusAction",
                                "label": "bonus action"
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
                "id": "eldritch-strike",
                "title": "Eldritch Strike",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "A weapon hit gives the target disadvantage on its next "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.d20Tests.savingThrow",
                                "label": "saving throw"
                            },
                            {
                                "type": "text",
                                "text": " against one of your "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
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
                "id": "arcane-charge",
                "title": "Arcane Charge",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Teleport before or after using Action Surge."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "improved-war-magic",
                "title": "Improved War Magic",
                "subtitle": "18th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "After casting any "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " with your action, make one weapon attack as a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.bonusAction",
                                "label": "bonus action"
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
                "id": "spellcasting-weapon-bond",
                "title": "Spellcasting; Weapon Bond"
            },
            {
                "id": "war-magic",
                "title": "War Magic"
            },
            {
                "id": "eldritch-strike",
                "title": "Eldritch Strike"
            },
            {
                "id": "arcane-charge",
                "title": "Arcane Charge"
            },
            {
                "id": "improved-war-magic",
                "title": "Improved War Magic"
            }
        ]
    }
});
export default page;

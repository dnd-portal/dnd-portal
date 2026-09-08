/*
	Location: src/lib/typescript/data/internals/classes/blood-hunter.ts
	Use: Central Blood Hunter class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/blood-hunter/profane-soul",
    "img": {
        "href": "/icons/white/game/character.svg",
        "alt": "A stylized Blood Hunter class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Profane Soul Blood Hunter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/blood-hunter/card-female-s.webp",
                    "m": "/images/classes/blood-hunter/card-female-m.webp",
                    "l": "/images/classes/blood-hunter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Profane Soul Blood Hunter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/blood-hunter/card-male-s.webp",
                    "m": "/images/classes/blood-hunter/card-male-m.webp",
                    "l": "/images/classes/blood-hunter/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Profane Soul Blood Hunter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/blood-hunter/card-female-s.webp",
                    "m": "/images/classes/blood-hunter/card-female-m.webp",
                    "l": "/images/classes/blood-hunter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Profane Soul Blood Hunter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/blood-hunter/card-male-s.webp",
                    "m": "/images/classes/blood-hunter/card-male-m.webp",
                    "l": "/images/classes/blood-hunter/card-male-l.webp"
                }
            }
        }
    },
    "label": "Profane Soul",
    "title": "D&D Portal - Profane Soul",
    "subTitle": "Blood Hunter subclass",
    "description": "Combine blood hunting with pact magic and patron-linked features.",
    "descriptions": {
        "short": "Combine blood hunting with pact magic and patron-linked features.",
        "medium": "Profane Soul: Combine blood hunting with pact magic and patron-linked features.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Combine blood hunting with pact magic and patron-linked features."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.bloodHunter.page"
    },
    "tags": [
        "blood-hunter",
        "subclass",
        "profane-soul"
    ],
    "content": {
        "source": "D&D Beyond",
        "featureSections": [
            {
                "id": "otherworldly-patron-pact-magic-rite-focus",
                "title": "Otherworldly Patron; Pact Magic; Rite Focus",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Choose a warlock patron, gain limited pact spellcasting, and receive a patron-specific benefit while a crimson rite is active."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "revealed-arcana",
                "title": "Revealed Arcana",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain a once-per-long-rest patron-specific "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " cast through pact magic."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "brand-of-the-sapping-scar",
                "title": "Brand of the Sapping Scar",
                "subtitle": "11th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "The creature marked by Brand of Castigation has disadvantage on saves against your warlock "
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
                "id": "unsealed-arcana",
                "title": "Unsealed Arcana",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain a second, stronger patron-specific "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " usable once per "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.rests.longRest",
                                "label": "long rest"
                            },
                            {
                                "type": "text",
                                "text": " without a slot."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "blood-curse-of-the-souleater",
                "title": "Blood Curse of the Souleater",
                "subtitle": "18th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain a unique blood curse that harvests power when a creature dies, with an amplified ally-healing option."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "otherworldly-patron-pact-magic-rite-focus",
                "title": "Otherworldly Patron; Pact Magic; Rite Focus"
            },
            {
                "id": "revealed-arcana",
                "title": "Revealed Arcana"
            },
            {
                "id": "brand-of-the-sapping-scar",
                "title": "Brand of the Sapping Scar"
            },
            {
                "id": "unsealed-arcana",
                "title": "Unsealed Arcana"
            },
            {
                "id": "blood-curse-of-the-souleater",
                "title": "Blood Curse of the Souleater"
            }
        ]
    }
});
export default page;

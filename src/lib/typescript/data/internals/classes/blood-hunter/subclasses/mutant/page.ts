/*
	Location: src/lib/typescript/data/internals/classes/blood-hunter.ts
	Use: Central Blood Hunter class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/blood-hunter/mutant",
    "img": {
        "href": "/icons/white/game/character.svg",
        "alt": "A stylized Blood Hunter class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Mutant Blood Hunter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/blood-hunter/card-female-s.webp",
                    "m": "/images/classes/blood-hunter/card-female-m.webp",
                    "l": "/images/classes/blood-hunter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Mutant Blood Hunter class portrait.",
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
                "alt": "A female Mutant Blood Hunter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/blood-hunter/card-female-s.webp",
                    "m": "/images/classes/blood-hunter/card-female-m.webp",
                    "l": "/images/classes/blood-hunter/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Mutant Blood Hunter class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/blood-hunter/card-male-s.webp",
                    "m": "/images/classes/blood-hunter/card-male-m.webp",
                    "l": "/images/classes/blood-hunter/card-male-l.webp"
                }
            }
        }
    },
    "label": "Mutant",
    "title": "D&D Portal - Mutant",
    "subTitle": "Blood Hunter subclass",
    "description": "Create mutagens that grant powerful benefits with side effects.",
    "descriptions": {
        "short": "Create mutagens that grant powerful benefits with side effects.",
        "medium": "Mutant: Create mutagens that grant powerful benefits with side effects.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Create mutagens that grant powerful benefits with side effects."
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
        "mutant"
    ],
    "content": {
        "source": "D&D Beyond",
        "featureSections": [
            {
                "id": "mutagencraft",
                "title": "Mutagencraft",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Learn mutagen formulas and create consumable mutagens that grant strong benefits paired with defined side effects."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "strange-metabolism",
                "title": "Strange Metabolism",
                "subtitle": "7th level",
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
                                "path": "internals.rules.damageTypes.poison",
                                "label": "poison"
                            },
                            {
                                "type": "text",
                                "text": " damage and the "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.poisoned",
                                "label": "poisoned"
                            },
                            {
                                "type": "text",
                                "text": " condition and temporarily suppress one mutagen\u2019s side effect."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "brand-of-axiom",
                "title": "Brand of Axiom",
                "subtitle": "11th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Brand of Castigation ends or suppresses illusions, invisibility, and shapechanging on the branded creature."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "blood-curse-of-corrosion",
                "title": "Blood Curse of Corrosion",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain a unique blood curse that poisons a target and can be amplified for a longer duration."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "exalted-mutation",
                "title": "Exalted Mutation",
                "subtitle": "18th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Replace one active mutagen with another known formula as a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.bonusAction",
                                "label": "bonus action"
                            },
                            {
                                "type": "text",
                                "text": ", with multiple uses per "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.rests.longRest",
                                "label": "long rest"
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
                "id": "mutagencraft",
                "title": "Mutagencraft"
            },
            {
                "id": "strange-metabolism",
                "title": "Strange Metabolism"
            },
            {
                "id": "brand-of-axiom",
                "title": "Brand of Axiom"
            },
            {
                "id": "blood-curse-of-corrosion",
                "title": "Blood Curse of Corrosion"
            },
            {
                "id": "exalted-mutation",
                "title": "Exalted Mutation"
            }
        ]
    }
});
export default page;

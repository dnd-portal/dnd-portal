/*
	Location: src/lib/typescript/data/internals/classes/artificer.ts
	Use: Central Artificer class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/artificer/alchemist",
    "img": {
        "href": "/icons/white/classes/artificer.svg",
        "alt": "A stylized Artificer class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Alchemist Artificer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/artificer/card-female-s.webp",
                    "m": "/images/classes/artificer/card-female-m.webp",
                    "l": "/images/classes/artificer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Alchemist Artificer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/artificer/card-male-s.webp",
                    "m": "/images/classes/artificer/card-male-m.webp",
                    "l": "/images/classes/artificer/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Alchemist Artificer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/artificer/card-female-s.webp",
                    "m": "/images/classes/artificer/card-female-m.webp",
                    "l": "/images/classes/artificer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Alchemist Artificer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/artificer/card-male-s.webp",
                    "m": "/images/classes/artificer/card-male-m.webp",
                    "l": "/images/classes/artificer/card-male-l.webp"
                }
            }
        }
    },
    "label": "Alchemist",
    "title": "D&D Portal - Alchemist",
    "subTitle": "Artificer subclass",
    "description": "Potions, restorative magic, and experimental elixirs.",
    "descriptions": {
        "short": "Potions, restorative magic, and experimental elixirs.",
        "medium": "Alchemist: Potions, restorative magic, and experimental elixirs.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Potions, restorative magic, and experimental elixirs."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.artificer.page"
    },
    "tags": [
        "artificer",
        "subclass",
        "alchemist"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything; Eberron: Rising from the Last War",
        "featureSections": [
            {
                "id": "tool-proficiency-alchemist-spells-experimental-elixir",
                "title": "Tool Proficiency; Alchemist Spells; Experimental Elixir",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain alchemist\u2019s supplies proficiency, an always-prepared specialty "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " list, and experimental elixirs that provide healing or temporary magical benefits."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "alchemical-savant",
                "title": "Alchemical Savant",
                "subtitle": "5th level",
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
                                "path": "internals.rules.abilityScores.intelligence",
                                "label": "Intelligence"
                            },
                            {
                                "type": "text",
                                "text": " to one damage or healing roll of qualifying artificer "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " cast through alchemist\u2019s supplies."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "restorative-reagents",
                "title": "Restorative Reagents",
                "subtitle": "9th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Experimental elixirs also grant "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "temporary hit points"
                            },
                            {
                                "type": "text",
                                "text": ", and you gain limited free uses of Lesser Restoration."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "chemical-mastery",
                "title": "Chemical Mastery",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain resistance to "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.acid",
                                "label": "acid"
                            },
                            {
                                "type": "text",
                                "text": " and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.poison",
                                "label": "poison"
                            },
                            {
                                "type": "text",
                                "text": ", immunity to the "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.poisoned",
                                "label": "poisoned"
                            },
                            {
                                "type": "text",
                                "text": " condition, and limited free uses of Greater Restoration and Heal."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "tool-proficiency-alchemist-spells-experimental-elixir",
                "title": "Tool Proficiency; Alchemist Spells; Experimental Elixir"
            },
            {
                "id": "alchemical-savant",
                "title": "Alchemical Savant"
            },
            {
                "id": "restorative-reagents",
                "title": "Restorative Reagents"
            },
            {
                "id": "chemical-mastery",
                "title": "Chemical Mastery"
            }
        ]
    }
});
export default page;

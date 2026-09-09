/*
	Location: src/lib/typescript/data/internals/classes/artificer.ts
	Use: Central Artificer class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/artificer/armorer",
    "img": {
        "href": "/icons/white/classes/artificer.svg",
        "alt": "A stylized Artificer class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Armorer Artificer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/artificer/card-female-s.webp",
                    "m": "/images/classes/artificer/card-female-m.webp",
                    "l": "/images/classes/artificer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Armorer Artificer class portrait.",
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
                "alt": "A female Armorer Artificer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/artificer/card-female-s.webp",
                    "m": "/images/classes/artificer/card-female-m.webp",
                    "l": "/images/classes/artificer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Armorer Artificer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/artificer/card-male-s.webp",
                    "m": "/images/classes/artificer/card-male-m.webp",
                    "l": "/images/classes/artificer/card-male-l.webp"
                }
            }
        }
    },
    "label": "Armorer",
    "title": "D&D Portal - Armorer",
    "subTitle": "Artificer subclass",
    "description": "Custom arcane armor with Guardian and Infiltrator configurations.",
    "descriptions": {
        "short": "Custom arcane armor with Guardian and Infiltrator configurations.",
        "medium": "Armorer: Custom arcane armor with Guardian and Infiltrator configurations.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Custom arcane armor with Guardian and Infiltrator configurations."
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
        "armorer"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "tools-of-the-trade-armorer-spells-arcane-armor-armor-model",
                "title": "Tools of the Trade; Armorer Spells; Arcane Armor; Armor Model",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain heavy-armor and smith\u2019s-tools training, an always-prepared "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " list, and customizable arcane armor. Choose Guardian for defense and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.thunder",
                                "label": "thunder"
                            },
                            {
                                "type": "text",
                                "text": " gauntlets or Infiltrator for "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.stealth",
                                "label": "stealth"
                            },
                            {
                                "type": "text",
                                "text": " and a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.lightning",
                                "label": "lightning"
                            },
                            {
                                "type": "text",
                                "text": " launcher."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "extra-attack",
                "title": "Extra Attack",
                "subtitle": "5th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Attack twice when taking the "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.attackAction",
                                "label": "Attack action"
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
                "id": "armor-modifications",
                "title": "Armor Modifications",
                "subtitle": "9th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Treat separate parts of the arcane armor as individual infusion targets and maintain additional infusions on the armor."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "perfected-armor",
                "title": "Perfected Armor",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Upgrade the active armor model: Guardian can pull and punish enemies, while Infiltrator marks targets for stronger "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.lightning",
                                "label": "lightning"
                            },
                            {
                                "type": "text",
                                "text": " attacks and allied follow-up."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "tools-of-the-trade-armorer-spells-arcane-armor-armor-model",
                "title": "Tools of the Trade; Armorer Spells; Arcane Armor; Armor Model"
            },
            {
                "id": "extra-attack",
                "title": "Extra Attack"
            },
            {
                "id": "armor-modifications",
                "title": "Armor Modifications"
            },
            {
                "id": "perfected-armor",
                "title": "Perfected Armor"
            }
        ]
    }
});
export default page;

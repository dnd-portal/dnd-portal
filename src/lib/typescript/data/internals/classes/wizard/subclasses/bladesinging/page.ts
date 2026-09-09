/*
	Location: src/lib/typescript/data/internals/classes/wizard.ts
	Use: Central Wizard class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/wizard/bladesinging",
    "img": {
        "href": "/icons/white/classes/wizard.svg",
        "alt": "A stylized Wizard class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Bladesinging Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Bladesinging Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-male-s.webp",
                    "m": "/images/classes/wizard/card-male-m.webp",
                    "l": "/images/classes/wizard/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Bladesinging Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-female-s.webp",
                    "m": "/images/classes/wizard/card-female-m.webp",
                    "l": "/images/classes/wizard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Bladesinging Wizard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/wizard/card-male-s.webp",
                    "m": "/images/classes/wizard/card-male-m.webp",
                    "l": "/images/classes/wizard/card-male-l.webp"
                }
            }
        }
    },
    "label": "Bladesinging",
    "title": "D&D Portal - Bladesinging",
    "subTitle": "Wizard subclass",
    "description": "Mobile weapon combat supported by Bladesong and Extra Attack.",
    "descriptions": {
        "short": "Mobile weapon combat supported by Bladesong and Extra Attack.",
        "medium": "Bladesinging: Mobile weapon combat supported by Bladesong and Extra Attack.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Mobile weapon combat supported by Bladesong and Extra Attack."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.wizard.page"
    },
    "tags": [
        "wizard",
        "subclass",
        "bladesinging"
    ],
    "content": {
        "source": "Sword Coast Adventurer\u2019s Guide; Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "training-in-war-and-song-bladesong",
                "title": "Training in War and Song; Bladesong",
                "subtitle": "2nd level",
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
                                "path": "internals.rules.equipment.lightArmor",
                                "label": "light armor"
                            },
                            {
                                "type": "text",
                                "text": ", one one-handed weapon, and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.performance",
                                "label": "Performance"
                            },
                            {
                                "type": "text",
                                "text": " proficiency, and activate Bladesong for "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.armorClass",
                                "label": "Armor Class"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.speed",
                                "label": "speed"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.concentration",
                                "label": "concentration"
                            },
                            {
                                "type": "text",
                                "text": ", and "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.dexterity",
                                "label": "Dexterity"
                            },
                            {
                                "type": "text",
                                "text": " benefits."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "extra-attack",
                "title": "Extra Attack",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Attack twice and replace one attack with a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.cantrips",
                                "label": "cantrip"
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
                "id": "song-of-defense",
                "title": "Song of Defense",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Spend "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " slots as a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.reaction",
                                "label": "reaction"
                            },
                            {
                                "type": "text",
                                "text": " to reduce incoming damage during Bladesong."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "song-of-victory",
                "title": "Song of Victory",
                "subtitle": "14th level",
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
                                "text": " to melee weapon damage during Bladesong."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "training-in-war-and-song-bladesong",
                "title": "Training in War and Song; Bladesong"
            },
            {
                "id": "extra-attack",
                "title": "Extra Attack"
            },
            {
                "id": "song-of-defense",
                "title": "Song of Defense"
            },
            {
                "id": "song-of-victory",
                "title": "Song of Victory"
            }
        ]
    }
});
export default page;

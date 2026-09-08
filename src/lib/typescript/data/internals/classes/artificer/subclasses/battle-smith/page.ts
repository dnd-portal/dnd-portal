/*
	Location: src/lib/typescript/data/internals/classes/artificer.ts
	Use: Central Artificer class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/artificer/battle-smith",
    "img": {
        "href": "/icons/white/classes/artificer.svg",
        "alt": "A stylized Artificer class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Battle Smith Artificer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/artificer/card-female-s.webp",
                    "m": "/images/classes/artificer/card-female-m.webp",
                    "l": "/images/classes/artificer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Battle Smith Artificer class portrait.",
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
                "alt": "A female Battle Smith Artificer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/artificer/card-female-s.webp",
                    "m": "/images/classes/artificer/card-female-m.webp",
                    "l": "/images/classes/artificer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Battle Smith Artificer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/artificer/card-male-s.webp",
                    "m": "/images/classes/artificer/card-male-m.webp",
                    "l": "/images/classes/artificer/card-male-l.webp"
                }
            }
        }
    },
    "label": "Battle Smith",
    "title": "D&D Portal - Battle Smith",
    "subTitle": "Artificer subclass",
    "description": "Weapon combat supported by a Steel Defender.",
    "descriptions": {
        "short": "Weapon combat supported by a Steel Defender.",
        "medium": "Battle Smith: Weapon combat supported by a Steel Defender.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Weapon combat supported by a Steel Defender."
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
        "battle-smith"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything; Eberron: Rising from the Last War",
        "featureSections": [
            {
                "id": "tool-proficiency-battle-smith-spells-battle-ready-steel-defender",
                "title": "Tool Proficiency; Battle Smith Spells; Battle Ready; Steel Defender",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain smith\u2019s-tools and martial-weapon training, an always-prepared "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " list, "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.intelligence",
                                "label": "Intelligence"
                            },
                            {
                                "type": "text",
                                "text": "-based attacks with magic weapons, and a Steel Defender companion."
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
                "id": "arcane-jolt",
                "title": "Arcane Jolt",
                "subtitle": "9th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "When you or the Steel Defender hits, expend a limited use to deal extra "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.force",
                                "label": "force"
                            },
                            {
                                "type": "text",
                                "text": " damage or restore "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
                            },
                            {
                                "type": "text",
                                "text": " to a nearby creature or construct."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "improved-defender",
                "title": "Improved Defender",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Strengthen Arcane Jolt and increase the Steel Defender\u2019s defensive retaliation."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "tool-proficiency-battle-smith-spells-battle-ready-steel-defender",
                "title": "Tool Proficiency; Battle Smith Spells; Battle Ready; Steel Defender"
            },
            {
                "id": "extra-attack",
                "title": "Extra Attack"
            },
            {
                "id": "arcane-jolt",
                "title": "Arcane Jolt"
            },
            {
                "id": "improved-defender",
                "title": "Improved Defender"
            }
        ]
    }
});
export default page;

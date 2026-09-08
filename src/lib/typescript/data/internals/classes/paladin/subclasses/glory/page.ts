/*
	Location: src/lib/typescript/data/internals/classes/paladin.ts
	Use: Central Paladin class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/paladin/glory",
    "img": {
        "href": "/icons/white/classes/paladin.svg",
        "alt": "A stylized Paladin class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Glory Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-female-s.webp",
                    "m": "/images/classes/paladin/card-female-m.webp",
                    "l": "/images/classes/paladin/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Glory Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-male-s.webp",
                    "m": "/images/classes/paladin/card-male-m.webp",
                    "l": "/images/classes/paladin/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Glory Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-female-s.webp",
                    "m": "/images/classes/paladin/card-female-m.webp",
                    "l": "/images/classes/paladin/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Glory Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-male-s.webp",
                    "m": "/images/classes/paladin/card-male-m.webp",
                    "l": "/images/classes/paladin/card-male-l.webp"
                }
            }
        }
    },
    "label": "Glory",
    "title": "D&D Portal - Glory",
    "subTitle": "Paladin subclass",
    "description": "Athletic heroism, mobility, and inspiring defense.",
    "descriptions": {
        "short": "Athletic heroism, mobility, and inspiring defense.",
        "medium": "Glory: Athletic heroism, mobility, and inspiring defense.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Athletic heroism, mobility, and inspiring defense."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.paladin.page"
    },
    "tags": [
        "paladin",
        "subclass",
        "glory"
    ],
    "content": {
        "source": "Mythic Odysseys of Theros; Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "oath-spells-channel-divinity-peerless-athlete-inspiring-smite",
                "title": "Oath Spells; Channel Divinity: Peerless Athlete, Inspiring Smite",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain always-prepared oath "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": ", dramatically improve athletic checks and jumps, or distribute "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "temporary hit points"
                            },
                            {
                                "type": "text",
                                "text": " after a smite."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "aura-of-alacrity",
                "title": "Aura of Alacrity",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Increase your "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.speed",
                                "label": "speed"
                            },
                            {
                                "type": "text",
                                "text": " and the "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.speed",
                                "label": "speed"
                            },
                            {
                                "type": "text",
                                "text": " of nearby allies."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "glorious-defense",
                "title": "Glorious Defense",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Use a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.reaction",
                                "label": "reaction"
                            },
                            {
                                "type": "text",
                                "text": " to add "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.charisma",
                                "label": "Charisma"
                            },
                            {
                                "type": "text",
                                "text": " to "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.armorClass",
                                "label": "Armor Class"
                            },
                            {
                                "type": "text",
                                "text": " against an attack and counterattack if it misses."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "living-legend",
                "title": "Living Legend",
                "subtitle": "20th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Temporarily gain advantage on "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.charisma",
                                "label": "Charisma"
                            },
                            {
                                "type": "text",
                                "text": " checks, reroll one failed save each turn, and turn one missed attack into a hit each turn."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "oath-spells-channel-divinity-peerless-athlete-inspiring-smite",
                "title": "Oath Spells; Channel Divinity: Peerless Athlete, Inspiring Smite"
            },
            {
                "id": "aura-of-alacrity",
                "title": "Aura of Alacrity"
            },
            {
                "id": "glorious-defense",
                "title": "Glorious Defense"
            },
            {
                "id": "living-legend",
                "title": "Living Legend"
            }
        ]
    }
});
export default page;

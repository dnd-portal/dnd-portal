/*
	Location: src/lib/typescript/data/internals/classes/paladin.ts
	Use: Central Paladin class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/paladin/watchers",
    "img": {
        "href": "/icons/white/classes/paladin.svg",
        "alt": "A stylized Paladin class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Watchers Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-female-s.webp",
                    "m": "/images/classes/paladin/card-female-m.webp",
                    "l": "/images/classes/paladin/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Watchers Paladin class portrait.",
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
                "alt": "A female Watchers Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-female-s.webp",
                    "m": "/images/classes/paladin/card-female-m.webp",
                    "l": "/images/classes/paladin/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Watchers Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-male-s.webp",
                    "m": "/images/classes/paladin/card-male-m.webp",
                    "l": "/images/classes/paladin/card-male-l.webp"
                }
            }
        }
    },
    "label": "Watchers",
    "title": "D&D Portal - Watchers",
    "subTitle": "Paladin subclass",
    "description": "Defend against extraplanar threats and improve initiative.",
    "descriptions": {
        "short": "Defend against extraplanar threats and improve initiative.",
        "medium": "Watchers: Defend against extraplanar threats and improve initiative.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Defend against extraplanar threats and improve "
                },
                {
                    "type": "link",
                    "path": "internals.rules.combat.initiativeRoll",
                    "label": "initiative"
                },
                {
                    "type": "text",
                    "text": "."
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
        "watchers"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "oath-spells-channel-divinity-watcher-s-will-abjure-the-extraplanar",
                "title": "Oath Spells; Channel Divinity: Watcher\u2019s Will, Abjure the Extraplanar",
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
                                "text": ", grant allies advantage on mental saves, or turn extraplanar creatures."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "aura-of-the-sentinel",
                "title": "Aura of the Sentinel",
                "subtitle": "7th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Add proficiency bonus to "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.initiativeRoll",
                                "label": "initiative"
                            },
                            {
                                "type": "text",
                                "text": " for you and nearby allies."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "vigilant-rebuke",
                "title": "Vigilant Rebuke",
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
                                "text": " to deal "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.force",
                                "label": "force"
                            },
                            {
                                "type": "text",
                                "text": " damage when a nearby creature succeeds on an "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.intelligence",
                                "label": "Intelligence"
                            },
                            {
                                "type": "text",
                                "text": ", "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.wisdom",
                                "label": "Wisdom"
                            },
                            {
                                "type": "text",
                                "text": ", or "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.abilityScores.charisma",
                                "label": "Charisma"
                            },
                            {
                                "type": "text",
                                "text": " save."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "mortal-bulwark",
                "title": "Mortal Bulwark",
                "subtitle": "20th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain truesight, advantage against extraplanar creatures, and banish such a creature when you hit it."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "oath-spells-channel-divinity-watcher-s-will-abjure-the-extraplanar",
                "title": "Oath Spells; Channel Divinity: Watcher\u2019s Will, Abjure the Extraplanar"
            },
            {
                "id": "aura-of-the-sentinel",
                "title": "Aura of the Sentinel"
            },
            {
                "id": "vigilant-rebuke",
                "title": "Vigilant Rebuke"
            },
            {
                "id": "mortal-bulwark",
                "title": "Mortal Bulwark"
            }
        ]
    }
});
export default page;

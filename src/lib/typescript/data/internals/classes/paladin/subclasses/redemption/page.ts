/*
	Location: src/lib/typescript/data/internals/classes/paladin.ts
	Use: Central Paladin class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/paladin/redemption",
    "img": {
        "href": "/icons/white/classes/paladin.svg",
        "alt": "A stylized Paladin class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Redemption Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-female-s.webp",
                    "m": "/images/classes/paladin/card-female-m.webp",
                    "l": "/images/classes/paladin/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Redemption Paladin class portrait.",
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
                "alt": "A female Redemption Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-female-s.webp",
                    "m": "/images/classes/paladin/card-female-m.webp",
                    "l": "/images/classes/paladin/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Redemption Paladin class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/paladin/card-male-s.webp",
                    "m": "/images/classes/paladin/card-male-m.webp",
                    "l": "/images/classes/paladin/card-male-l.webp"
                }
            }
        }
    },
    "label": "Redemption",
    "title": "D&D Portal - Redemption",
    "subTitle": "Paladin subclass",
    "description": "De-escalation, damage redirection, and nonviolent control.",
    "descriptions": {
        "short": "De-escalation, damage redirection, and nonviolent control.",
        "medium": "Redemption: De-escalation, damage redirection, and nonviolent control.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "De-escalation, damage redirection, and nonviolent control."
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
        "redemption"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "oath-spells-channel-divinity-emissary-of-peace-rebuke-the-violent",
                "title": "Oath Spells; Channel Divinity: Emissary of Peace, Rebuke the Violent",
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
                                "text": ", greatly improve a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.persuasion",
                                "label": "Persuasion"
                            },
                            {
                                "type": "text",
                                "text": " check, or reflect damage from a violent attacker."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "aura-of-the-guardian",
                "title": "Aura of the Guardian",
                "subtitle": "7th level",
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
                                "text": " to take damage in place of a nearby creature."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "protective-spirit",
                "title": "Protective Spirit",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Regain "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
                            },
                            {
                                "type": "text",
                                "text": " at the end of turns while below half health."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "emissary-of-redemption",
                "title": "Emissary of Redemption",
                "subtitle": "20th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain resistance to damage from creatures you have not attacked or affected and reflect part of their damage back to them."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "oath-spells-channel-divinity-emissary-of-peace-rebuke-the-violent",
                "title": "Oath Spells; Channel Divinity: Emissary of Peace, Rebuke the Violent"
            },
            {
                "id": "aura-of-the-guardian",
                "title": "Aura of the Guardian"
            },
            {
                "id": "protective-spirit",
                "title": "Protective Spirit"
            },
            {
                "id": "emissary-of-redemption",
                "title": "Emissary of Redemption"
            }
        ]
    }
});
export default page;

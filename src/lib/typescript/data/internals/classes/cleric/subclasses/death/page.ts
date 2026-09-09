/*
	Location: src/lib/typescript/data/internals/classes/cleric.ts
	Use: Central Cleric class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/cleric/death-domain",
    "img": {
        "href": "/icons/white/classes/cleric.svg",
        "alt": "A stylized Cleric class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Death Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Death Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-male-s.webp",
                    "m": "/images/classes/cleric/card-male-m.webp",
                    "l": "/images/classes/cleric/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Death Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Death Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-male-s.webp",
                    "m": "/images/classes/cleric/card-male-m.webp",
                    "l": "/images/classes/cleric/card-male-l.webp"
                }
            }
        }
    },
    "label": "Death",
    "title": "D&D Portal - Death",
    "subTitle": "Cleric subclass",
    "description": "Necrotic damage, martial weapons, and death-focused Channel Divinity.",
    "descriptions": {
        "short": "Necrotic damage, martial weapons, and death-focused Channel Divinity.",
        "medium": "Death: Necrotic damage, martial weapons, and death-focused Channel Divinity.",
        "long": [
            [
                {
                    "type": "link",
                    "path": "internals.rules.damageTypes.necrotic",
                    "label": "Necrotic"
                },
                {
                    "type": "text",
                    "text": " damage, "
                },
                {
                    "type": "link",
                    "path": "internals.rules.equipment.martialWeapons",
                    "label": "martial weapons"
                },
                {
                    "type": "text",
                    "text": ", and death-focused Channel Divinity."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.cleric.page"
    },
    "tags": [
        "cleric",
        "subclass",
        "death"
    ],
    "content": {
        "source": "Dungeon Master\u2019s Guide",
        "featureSections": [
            {
                "id": "domain-spells-bonus-proficiency-reaper",
                "title": "Domain Spells; Bonus Proficiency; Reaper",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Always prepare death-themed domain "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": ", gain martial-weapon proficiency, and learn a necromancy "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.cantrips",
                                "label": "cantrip"
                            },
                            {
                                "type": "text",
                                "text": " that can sometimes target two adjacent creatures."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "channel-divinity-touch-of-death",
                "title": "Channel Divinity: Touch of Death",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Add substantial "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.necrotic",
                                "label": "necrotic"
                            },
                            {
                                "type": "text",
                                "text": " damage to a melee hit."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "inescapable-destruction",
                "title": "Inescapable Destruction",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Cleric "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.necrotic",
                                "label": "necrotic"
                            },
                            {
                                "type": "text",
                                "text": " damage ignores resistance."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "divine-strike",
                "title": "Divine Strike",
                "subtitle": "8th level",
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
                                "path": "internals.rules.damageTypes.necrotic",
                                "label": "necrotic"
                            },
                            {
                                "type": "text",
                                "text": " damage to one weapon hit each turn."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "improved-reaper",
                "title": "Improved Reaper",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Single-target necromancy "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " of lower level can affect two adjacent creatures."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "domain-spells-bonus-proficiency-reaper",
                "title": "Domain Spells; Bonus Proficiency; Reaper"
            },
            {
                "id": "channel-divinity-touch-of-death",
                "title": "Channel Divinity: Touch of Death"
            },
            {
                "id": "inescapable-destruction",
                "title": "Inescapable Destruction"
            },
            {
                "id": "divine-strike",
                "title": "Divine Strike"
            },
            {
                "id": "improved-reaper",
                "title": "Improved Reaper"
            }
        ]
    }
});
export default page;

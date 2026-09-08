/*
	Location: src/lib/typescript/data/internals/classes/cleric.ts
	Use: Central Cleric class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/cleric/trickery",
    "img": {
        "href": "/icons/white/classes/cleric.svg",
        "alt": "A stylized Cleric class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Trickery Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Trickery Cleric class portrait.",
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
                "alt": "A female Trickery Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-female-s.webp",
                    "m": "/images/classes/cleric/card-female-m.webp",
                    "l": "/images/classes/cleric/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Trickery Cleric class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/cleric/card-male-s.webp",
                    "m": "/images/classes/cleric/card-male-m.webp",
                    "l": "/images/classes/cleric/card-male-l.webp"
                }
            }
        }
    },
    "label": "Trickery",
    "title": "D&D Portal - Trickery",
    "subTitle": "Cleric subclass",
    "description": "Illusory duplicates, stealth support, and deception magic.",
    "descriptions": {
        "short": "Illusory duplicates, stealth support, and deception magic.",
        "medium": "Trickery: Illusory duplicates, stealth support, and deception magic.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Illusory duplicates, "
                },
                {
                    "type": "link",
                    "path": "internals.rules.skills.stealth",
                    "label": "stealth"
                },
                {
                    "type": "text",
                    "text": " support, and "
                },
                {
                    "type": "link",
                    "path": "internals.rules.skills.deception",
                    "label": "deception"
                },
                {
                    "type": "text",
                    "text": " magic."
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
        "trickery"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "domain-spells-blessing-of-the-trickster",
                "title": "Domain Spells; Blessing of the Trickster",
                "subtitle": "1st level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Always prepare "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.deception",
                                "label": "deception"
                            },
                            {
                                "type": "text",
                                "text": " and mobility "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": ", and grant another creature advantage on "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.stealth",
                                "label": "Stealth"
                            },
                            {
                                "type": "text",
                                "text": " checks."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "channel-divinity-invoke-duplicity",
                "title": "Channel Divinity: Invoke Duplicity",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Create an illusory duplicate that can move, grant attack advantage, and serve as the origin of your "
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
                "id": "channel-divinity-cloak-of-shadows",
                "title": "Channel Divinity: Cloak of Shadows",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Become "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.invisible",
                                "label": "invisible"
                            },
                            {
                                "type": "text",
                                "text": " until the end of your next turn or until you attack or cast a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
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
                                "path": "internals.rules.damageTypes.poison",
                                "label": "poison"
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
                "id": "improved-duplicity",
                "title": "Improved Duplicity",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Create multiple duplicates with Invoke Duplicity."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "domain-spells-blessing-of-the-trickster",
                "title": "Domain Spells; Blessing of the Trickster"
            },
            {
                "id": "channel-divinity-invoke-duplicity",
                "title": "Channel Divinity: Invoke Duplicity"
            },
            {
                "id": "channel-divinity-cloak-of-shadows",
                "title": "Channel Divinity: Cloak of Shadows"
            },
            {
                "id": "divine-strike",
                "title": "Divine Strike"
            },
            {
                "id": "improved-duplicity",
                "title": "Improved Duplicity"
            }
        ]
    }
});
export default page;

/*
	Location: src/lib/typescript/data/internals/classes/druid.ts
	Use: Central Druid class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/druid/moon",
    "img": {
        "href": "/icons/white/classes/druid.svg",
        "alt": "A stylized Druid class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Moon Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-female-s.webp",
                    "m": "/images/classes/druid/card-female-m.webp",
                    "l": "/images/classes/druid/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Moon Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-male-s.webp",
                    "m": "/images/classes/druid/card-male-m.webp",
                    "l": "/images/classes/druid/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Moon Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-female-s.webp",
                    "m": "/images/classes/druid/card-female-m.webp",
                    "l": "/images/classes/druid/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Moon Druid class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/druid/card-male-s.webp",
                    "m": "/images/classes/druid/card-male-m.webp",
                    "l": "/images/classes/druid/card-male-l.webp"
                }
            }
        }
    },
    "label": "Moon",
    "title": "D&D Portal - Moon",
    "subTitle": "Druid subclass",
    "description": "Stronger and faster combat Wild Shape progression.",
    "descriptions": {
        "short": "Stronger and faster combat Wild Shape progression.",
        "medium": "Moon: Stronger and faster combat Wild Shape progression.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Stronger and faster combat Wild Shape progression."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.druid.page"
    },
    "tags": [
        "druid",
        "subclass",
        "moon"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "combat-wild-shape-circle-forms",
                "title": "Combat Wild Shape; Circle Forms",
                "subtitle": "2nd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Wild Shape as a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.bonusAction",
                                "label": "bonus action"
                            },
                            {
                                "type": "text",
                                "text": ", restore "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.hitPoints",
                                "label": "hit points"
                            },
                            {
                                "type": "text",
                                "text": " by spending "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " slots while transformed, and access stronger beast forms earlier."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "primal-strike",
                "title": "Primal Strike",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Wild Shape attacks count as magical for overcoming resistance and immunity."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "elemental-wild-shape",
                "title": "Elemental Wild Shape",
                "subtitle": "10th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Spend two Wild Shape uses to become an air, earth, "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.fire",
                                "label": "fire"
                            },
                            {
                                "type": "text",
                                "text": ", or water elemental."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "thousand-forms",
                "title": "Thousand Forms",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Cast Alter Self at will."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "combat-wild-shape-circle-forms",
                "title": "Combat Wild Shape; Circle Forms"
            },
            {
                "id": "primal-strike",
                "title": "Primal Strike"
            },
            {
                "id": "elemental-wild-shape",
                "title": "Elemental Wild Shape"
            },
            {
                "id": "thousand-forms",
                "title": "Thousand Forms"
            }
        ]
    }
});
export default page;

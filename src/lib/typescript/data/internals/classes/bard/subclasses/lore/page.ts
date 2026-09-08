/*
	Location: src/lib/typescript/data/internals/classes/bard.ts
	Use: Central Bard class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/bard/lore",
    "img": {
        "href": "/icons/white/classes/bard.svg",
        "alt": "A stylized Bard class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Lore Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-female-s.webp",
                    "m": "/images/classes/bard/card-female-m.webp",
                    "l": "/images/classes/bard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Lore Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-male-s.webp",
                    "m": "/images/classes/bard/card-male-m.webp",
                    "l": "/images/classes/bard/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Lore Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-female-s.webp",
                    "m": "/images/classes/bard/card-female-m.webp",
                    "l": "/images/classes/bard/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Lore Bard class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/bard/card-male-s.webp",
                    "m": "/images/classes/bard/card-male-m.webp",
                    "l": "/images/classes/bard/card-male-l.webp"
                }
            }
        }
    },
    "label": "Lore",
    "title": "D&D Portal - Lore",
    "subTitle": "Bard subclass",
    "description": "Extra skills, Cutting Words, and earlier Magical Secrets.",
    "descriptions": {
        "short": "Extra skills, Cutting Words, and earlier Magical Secrets.",
        "medium": "Lore: Extra skills, Cutting Words, and earlier Magical Secrets.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Extra skills, Cutting Words, and earlier Magical Secrets."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.bard.page"
    },
    "tags": [
        "bard",
        "subclass",
        "lore"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "bonus-proficiencies-cutting-words",
                "title": "Bonus Proficiencies; Cutting Words",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain three skill proficiencies and spend Bardic Inspiration as a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.reaction",
                                "label": "reaction"
                            },
                            {
                                "type": "text",
                                "text": " to reduce an enemy\u2019s attack, check, or "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.damageRoll",
                                "label": "damage roll"
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
                "id": "additional-magical-secrets",
                "title": "Additional Magical Secrets",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Learn two "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " from any class without counting them against bard "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " known."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "peerless-skill",
                "title": "Peerless Skill",
                "subtitle": "14th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Spend Bardic Inspiration on your own "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.d20Tests.abilityCheck",
                                "label": "ability check"
                            },
                            {
                                "type": "text",
                                "text": " after rolling."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "bonus-proficiencies-cutting-words",
                "title": "Bonus Proficiencies; Cutting Words"
            },
            {
                "id": "additional-magical-secrets",
                "title": "Additional Magical Secrets"
            },
            {
                "id": "peerless-skill",
                "title": "Peerless Skill"
            }
        ]
    }
});
export default page;

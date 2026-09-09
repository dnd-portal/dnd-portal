/*
	Location: src/lib/typescript/data/internals/classes/rogue.ts
	Use: Central Rogue class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/rogue/arcane-trickster",
    "img": {
        "href": "/icons/white/classes/rogue.svg",
        "alt": "A stylized Rogue class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Arcane Trickster Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-female-s.webp",
                    "m": "/images/classes/rogue/card-female-m.webp",
                    "l": "/images/classes/rogue/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Arcane Trickster Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-male-s.webp",
                    "m": "/images/classes/rogue/card-male-m.webp",
                    "l": "/images/classes/rogue/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Arcane Trickster Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-female-s.webp",
                    "m": "/images/classes/rogue/card-female-m.webp",
                    "l": "/images/classes/rogue/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Arcane Trickster Rogue class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/rogue/card-male-s.webp",
                    "m": "/images/classes/rogue/card-male-m.webp",
                    "l": "/images/classes/rogue/card-male-l.webp"
                }
            }
        }
    },
    "label": "Arcane Trickster",
    "title": "D&D Portal - Arcane Trickster",
    "subTitle": "Rogue subclass",
    "description": "Combine stealth and Sneak Attack with illusion and enchantment magic.",
    "descriptions": {
        "short": "Combine stealth and Sneak Attack with illusion and enchantment magic.",
        "medium": "Arcane Trickster: Combine stealth and Sneak Attack with illusion and enchantment magic.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Combine "
                },
                {
                    "type": "link",
                    "path": "internals.rules.skills.stealth",
                    "label": "stealth"
                },
                {
                    "type": "text",
                    "text": " and Sneak Attack with illusion and enchantment magic."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.rogue.page"
    },
    "tags": [
        "rogue",
        "subclass",
        "arcane-trickster"
    ],
    "content": {
        "source": "Player\u2019s Handbook",
        "featureSections": [
            {
                "id": "spellcasting-mage-hand-legerdemain",
                "title": "Spellcasting; Mage Hand Legerdemain",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain limited wizard spellcasting focused on enchantment and illusion, and use an "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.invisible",
                                "label": "invisible"
                            },
                            {
                                "type": "text",
                                "text": " Mage Hand for stealthy object manipulation and thieves\u2019 tools."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "magical-ambush",
                "title": "Magical Ambush",
                "subtitle": "9th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "While hidden, creatures have disadvantage on saves against your "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " during that turn."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "versatile-trickster",
                "title": "Versatile Trickster",
                "subtitle": "13th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Use Mage Hand as a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.bonusAction",
                                "label": "bonus action"
                            },
                            {
                                "type": "text",
                                "text": " to distract a creature and gain advantage on attacks against it."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "spell-thief",
                "title": "Spell Thief",
                "subtitle": "17th level",
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
                                "text": " to negate a "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " targeting or including you, potentially steal it, and prevent the caster from using it temporarily."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "spellcasting-mage-hand-legerdemain",
                "title": "Spellcasting; Mage Hand Legerdemain"
            },
            {
                "id": "magical-ambush",
                "title": "Magical Ambush"
            },
            {
                "id": "versatile-trickster",
                "title": "Versatile Trickster"
            },
            {
                "id": "spell-thief",
                "title": "Spell Thief"
            }
        ]
    }
});
export default page;

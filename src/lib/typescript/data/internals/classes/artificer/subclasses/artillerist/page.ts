/*
	Location: src/lib/typescript/data/internals/classes/artificer.ts
	Use: Central Artificer class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/artificer/artillerist",
    "img": {
        "href": "/icons/white/classes/artificer.svg",
        "alt": "A stylized Artificer class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Artillerist Artificer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/artificer/card-female-s.webp",
                    "m": "/images/classes/artificer/card-female-m.webp",
                    "l": "/images/classes/artificer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Artillerist Artificer class portrait.",
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
                "alt": "A female Artillerist Artificer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/artificer/card-female-s.webp",
                    "m": "/images/classes/artificer/card-female-m.webp",
                    "l": "/images/classes/artificer/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Artillerist Artificer class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/artificer/card-male-s.webp",
                    "m": "/images/classes/artificer/card-male-m.webp",
                    "l": "/images/classes/artificer/card-male-l.webp"
                }
            }
        }
    },
    "label": "Artillerist",
    "title": "D&D Portal - Artillerist",
    "subTitle": "Artificer subclass",
    "description": "Arcane firearms and deployable eldritch cannons.",
    "descriptions": {
        "short": "Arcane firearms and deployable eldritch cannons.",
        "medium": "Artillerist: Arcane firearms and deployable eldritch cannons.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Arcane firearms and deployable eldritch cannons."
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
        "artillerist"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything; Eberron: Rising from the Last War",
        "featureSections": [
            {
                "id": "tool-proficiency-artillerist-spells-eldritch-cannon",
                "title": "Tool Proficiency; Artillerist Spells; Eldritch Cannon",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain woodcarver\u2019s-tools training, an always-prepared "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spell"
                            },
                            {
                                "type": "text",
                                "text": " list, and a portable or Tiny eldritch cannon configured as a flamethrower, "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.damageTypes.force",
                                "label": "force"
                            },
                            {
                                "type": "text",
                                "text": " ballista, or protector."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "arcane-firearm",
                "title": "Arcane Firearm",
                "subtitle": "5th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Turn a wand, staff, or rod into an arcane firearm that adds extra damage to artificer "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " cast through it."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "explosive-cannon",
                "title": "Explosive Cannon",
                "subtitle": "9th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Increase cannon damage and gain the option to detonate a cannon for area damage."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "fortified-position",
                "title": "Fortified Position",
                "subtitle": "15th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Operate two cannons at once and let nearby allies benefit from half cover."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "tool-proficiency-artillerist-spells-eldritch-cannon",
                "title": "Tool Proficiency; Artillerist Spells; Eldritch Cannon"
            },
            {
                "id": "arcane-firearm",
                "title": "Arcane Firearm"
            },
            {
                "id": "explosive-cannon",
                "title": "Explosive Cannon"
            },
            {
                "id": "fortified-position",
                "title": "Fortified Position"
            }
        ]
    }
});
export default page;

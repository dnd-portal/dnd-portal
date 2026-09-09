/*
	Location: src/lib/typescript/data/internals/classes/ranger.ts
	Use: Central Ranger class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/ranger/swarmkeeper",
    "img": {
        "href": "/icons/white/classes/ranger.svg",
        "alt": "A stylized Ranger class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Swarmkeeper Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-female-s.webp",
                    "m": "/images/classes/ranger/card-female-m.webp",
                    "l": "/images/classes/ranger/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Swarmkeeper Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-male-s.webp",
                    "m": "/images/classes/ranger/card-male-m.webp",
                    "l": "/images/classes/ranger/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Swarmkeeper Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-female-s.webp",
                    "m": "/images/classes/ranger/card-female-m.webp",
                    "l": "/images/classes/ranger/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Swarmkeeper Ranger class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/ranger/card-male-s.webp",
                    "m": "/images/classes/ranger/card-male-m.webp",
                    "l": "/images/classes/ranger/card-male-l.webp"
                }
            }
        }
    },
    "label": "Swarmkeeper",
    "title": "D&D Portal - Swarmkeeper",
    "subTitle": "Ranger subclass",
    "description": "Move creatures and self with a magical swarm.",
    "descriptions": {
        "short": "Move creatures and self with a magical swarm.",
        "medium": "Swarmkeeper: Move creatures and self with a magical swarm.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Move creatures and self with a magical swarm."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.ranger.page"
    },
    "tags": [
        "ranger",
        "subclass",
        "swarmkeeper"
    ],
    "content": {
        "source": "Tasha\u2019s Cauldron of Everything",
        "featureSections": [
            {
                "id": "swarmkeeper-magic-gathered-swarm",
                "title": "Swarmkeeper Magic; Gathered Swarm",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain always-known swarm-themed "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.spellcasting.spells",
                                "label": "spells"
                            },
                            {
                                "type": "text",
                                "text": " and once per turn use the swarm to add damage, move a target, or move yourself after a hit."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "writhing-tide",
                "title": "Writhing Tide",
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
                                "path": "internals.rules.actions.bonusAction",
                                "label": "bonus action"
                            },
                            {
                                "type": "text",
                                "text": " to gain a temporary "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.flying",
                                "label": "flying"
                            },
                            {
                                "type": "text",
                                "text": " "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.movement.speed",
                                "label": "speed"
                            },
                            {
                                "type": "text",
                                "text": " from the swarm."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "mighty-swarm",
                "title": "Mighty Swarm",
                "subtitle": "11th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Improve every Gathered Swarm option with more damage, "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.prone",
                                "label": "prone"
                            },
                            {
                                "type": "text",
                                "text": ", or half cover."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "swarming-dispersal",
                "title": "Swarming Dispersal",
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
                                "text": " when damaged to gain resistance and teleport away."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "swarmkeeper-magic-gathered-swarm",
                "title": "Swarmkeeper Magic; Gathered Swarm"
            },
            {
                "id": "writhing-tide",
                "title": "Writhing Tide"
            },
            {
                "id": "mighty-swarm",
                "title": "Mighty Swarm"
            },
            {
                "id": "swarming-dispersal",
                "title": "Swarming Dispersal"
            }
        ]
    }
});
export default page;

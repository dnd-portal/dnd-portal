/*
	Location: src/lib/typescript/data/internals/classes/monk.ts
	Use: Central Monk class and subclass content data.
*/

import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';


export const page = createInternalPage({
    "href": "/classes/monk/drunken-master",
    "img": {
        "href": "/icons/white/classes/monk.svg",
        "alt": "A stylized Monk class icon."
    },
    "images": {
        "card": {
            "female": {
                "alt": "A female Drunken Master Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Drunken Master Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-male-s.webp",
                    "m": "/images/classes/monk/card-male-m.webp",
                    "l": "/images/classes/monk/card-male-l.webp"
                }
            }
        },
        "header": {
            "female": {
                "alt": "A female Drunken Master Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-female-s.webp",
                    "m": "/images/classes/monk/card-female-m.webp",
                    "l": "/images/classes/monk/card-female-l.webp"
                }
            },
            "male": {
                "alt": "A male Drunken Master Monk class portrait.",
                "position": "right top",
                "sources": {
                    "s": "/images/classes/monk/card-male-s.webp",
                    "m": "/images/classes/monk/card-male-m.webp",
                    "l": "/images/classes/monk/card-male-l.webp"
                }
            }
        }
    },
    "label": "Drunken Master",
    "title": "D&D Portal - Drunken Master",
    "subTitle": "Monk subclass",
    "description": "Redirect attacks and move unpredictably through groups.",
    "descriptions": {
        "short": "Redirect attacks and move unpredictably through groups.",
        "medium": "Drunken Master: Redirect attacks and move unpredictably through groups.",
        "long": [
            [
                {
                    "type": "text",
                    "text": "Redirect attacks and move unpredictably through groups."
                }
            ]
        ]
    },
    "navigation": {
        "parent": "internals.classes.monk.page"
    },
    "tags": [
        "monk",
        "subclass",
        "drunken-master"
    ],
    "content": {
        "source": "Xanathar\u2019s Guide to Everything",
        "featureSections": [
            {
                "id": "bonus-proficiencies-drunken-technique",
                "title": "Bonus Proficiencies; Drunken Technique",
                "subtitle": "3rd level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Gain "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.skills.performance",
                                "label": "performance"
                            },
                            {
                                "type": "text",
                                "text": " and brewer\u2019s-supplies proficiency; Flurry of Blows also grants "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.actions.disengage",
                                "label": "Disengage"
                            },
                            {
                                "type": "text",
                                "text": " and extra movement."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "tipsy-sway",
                "title": "Tipsy Sway",
                "subtitle": "6th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Stand from "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.conditions.prone",
                                "label": "prone"
                            },
                            {
                                "type": "text",
                                "text": " cheaply and redirect a missed "
                            },
                            {
                                "type": "link",
                                "path": "internals.rules.combat.meleeAttack",
                                "label": "melee attack"
                            },
                            {
                                "type": "text",
                                "text": " to another adjacent creature."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "drunkard-s-luck",
                "title": "Drunkard\u2019s Luck",
                "subtitle": "11th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Spend ki to cancel disadvantage on a save, check, or attack."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "intoxicated-frenzy",
                "title": "Intoxicated Frenzy",
                "subtitle": "17th level",
                "blocks": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": "Flurry of Blows can make additional attacks when each targets a different creature."
                            }
                        ]
                    }
                ]
            }
        ],
        "tableOfContents": [
            {
                "id": "bonus-proficiencies-drunken-technique",
                "title": "Bonus Proficiencies; Drunken Technique"
            },
            {
                "id": "tipsy-sway",
                "title": "Tipsy Sway"
            },
            {
                "id": "drunkard-s-luck",
                "title": "Drunkard\u2019s Luck"
            },
            {
                "id": "intoxicated-frenzy",
                "title": "Intoxicated Frenzy"
            }
        ]
    }
});
export default page;

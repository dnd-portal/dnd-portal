import * as core from '$lib/typescript/data/core/_index_';
import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';
import type {
	CoreTraitsData,
	InlineContent,
	PageContentBlock,
	PageContentSection,
	ProgressionData
} from '$lib/typescript/pages/content-types';


import * as page from './page';

export const features = [
    {
        ...page.sections.classFeatures,
        blocks: [
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: 'As a barbarian, you gain the following class features.'
                    }
                ]
            }
        ]
    },
    {
        ...page.sections.hitPoints,
        blocks: [
            {
                type: 'table',
                caption: 'Hit Points',
                columns: {
                    label: 'Property',
                    value: 'Value'
                },
                rows: page.hitPointRows
            }
        ]
    },
    {
        ...page.sections.proficiencies,
        blocks: [
            {
                type: 'table',
                caption: 'Proficiencies',
                columns: {
                    label: 'Property',
                    value: 'Value'
                },
                rows: page.proficiencyRows
            }
        ]
    },
    {
        ...page.sections.rage,
        blocks: [
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `In battle, you fight with primal ferocity. On your
							turn, you can enter a rage as a `
                    },
                    page.actionLinks.bonusAction,
                    {
                        type: 'text',
                        text: '.'
                    }
                ]
            },
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `While raging, you gain the following benefits if
							you aren't wearing `
                    },
                    page.equipmentLinks.heavyArmor,
                    {
                        type: 'text',
                        text: ':'
                    }
                ]
            },
            {
                type: 'list',
                items: [
                    [
                        {
                            type: 'text',
                            text: 'You have advantage on '
                        },
                        page.abilityScoreLinks.strength,
                        {
                            type: 'text',
                            text: ' '
                        },
                        page.d20TestLinks.abilityChecks,
                        {
                            type: 'text',
                            text: ' and '
                        },
                        page.abilityScoreLinks.strength,
                        {
                            type: 'text',
                            text: ' '
                        },
                        page.d20TestLinks.savingThrows,
                        {
                            type: 'text',
                            text: '.'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'When you make a '
                        },
                        page.combatLinks.meleeWeaponAttack,
                        {
                            type: 'text',
                            text: ' using '
                        },
                        page.abilityScoreLinks.strength,
                        {
                            type: 'text',
                            text: ', you gain a bonus to the '
                        },
                        page.combatLinks.damageRoll,
                        {
                            type: 'text',
                            text: ` that increases as you gain levels as a
								barbarian, as shown in the Rage Damage column of
								the Barbarian table.`
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'You have resistance to '
                        },
                        page.damageTypeLinks.bludgeoning,
                        {
                            type: 'text',
                            text: ', '
                        },
                        page.damageTypeLinks.piercing,
                        {
                            type: 'text',
                            text: ', and '
                        },
                        page.damageTypeLinks.slashing,
                        {
                            type: 'text',
                            text: ' damage.'
                        }
                    ]
                ]
            },
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `If you are able to cast `
                    },
                    page.spellcastingLinks.spells,
                    {
                        type: 'text',
                        text: `, you can't cast them or `
                    },
                    page.spellcastingLinks.concentration,
                    {
                        type: 'text',
                        text: ' on them while raging.'
                    }
                ]
            },
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `Your rage lasts for 1 minute. It ends early if you
							are knocked `
                    },
                    page.conditionLinks.unconscious,
                    {
                        type: 'text',
                        text: ` or if your turn ends and you haven't attacked a
							hostile creature since your last turn or taken damage
							since then. You can also end your rage on your turn
							as a `
                    },
                    page.actionLinks.bonusAction,
                    {
                        type: 'text',
                        text: '.'
                    }
                ]
            },
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `Once you have raged the number of times shown for
							your barbarian level in the Rages column of the
							Barbarian table, you must finish a `
                    },
                    page.restLinks.longRest,
                    {
                        type: 'text',
                        text: ' before you can rage again.'
                    }
                ]
            }
        ]
    },
    {
        ...page.sections.unarmoredDefense,
        blocks: [
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `While you are not wearing any armor, your `
                    },
                    page.combatLinks.armorClass,
                    {
                        type: 'text',
                        text: ' equals:'
                    }
                ]
            },
            {
                type: 'formula',
                content: [
                    {
                        type: 'text',
                        text: '10 + your '
                    },
                    page.abilityScoreLinks.dexterity,
                    {
                        type: 'text',
                        text: ' modifier + your '
                    },
                    page.abilityScoreLinks.constitution,
                    {
                        type: 'text',
                        text: ' modifier'
                    }
                ]
            },
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: 'You can use a '
                    },
                    page.equipmentLinks.shield,
                    {
                        type: 'text',
                        text: ' and still gain this benefit.'
                    }
                ]
            }
        ]
    },
    {
        ...page.sections.dangerSense,
        blocks: [
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `At 2nd level, you gain an uncanny sense of when
							things nearby aren't as they should be, giving you
							an edge when you dodge away from danger.`
                    }
                ]
            },
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: 'You have advantage on '
                    },
                    page.abilityScoreLinks.dexterity,
                    {
                        type: 'text',
                        text: ' '
                    },
                    page.d20TestLinks.savingThrows,
                    {
                        type: 'text',
                        text: ` against effects that you can see, such as traps
							and `
                    },
                    page.spellcastingLinks.spells,
                    {
                        type: 'text',
                        text: '.'
                    }
                ]
            },
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `To gain this benefit, you can't be `
                    },
                    page.conditionLinks.blinded,
                    {
                        type: 'text',
                        text: ', '
                    },
                    page.conditionLinks.deafened,
                    {
                        type: 'text',
                        text: ', or '
                    },
                    page.conditionLinks.incapacitated,
                    {
                        type: 'text',
                        text: '.'
                    }
                ]
            }
        ]
    },
    {
        ...page.sections.recklessAttack,
        blocks: [
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `Starting at 2nd level, you can throw aside all
							concern for defense to attack with fierce
							desperation.`
                    }
                ]
            },
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `When you make your first attack on your turn, you
							can decide to attack recklessly.`
                    }
                ]
            },
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: 'Doing so gives you advantage on '
                    },
                    page.combatLinks.meleeWeaponAttack,
                    {
                        type: 'text',
                        text: ' '
                    },
                    page.combatLinks.attackRolls,
                    {
                        type: 'text',
                        text: ' using '
                    },
                    page.abilityScoreLinks.strength,
                    {
                        type: 'text',
                        text: ' during this turn, but '
                    },
                    page.combatLinks.attackRolls,
                    {
                        type: 'text',
                        text: ` against you have advantage until your next turn.`
                    }
                ]
            }
        ]
    },
    {
        ...page.sections.primalPath,
        blocks: [
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `At 3rd level, you choose a path that shapes the
							nature of your rage.`
                    }
                ]
            },
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `Your choice grants you features at 3rd level and
							again at 6th, 10th, and 14th levels.`
                    }
                ]
            },
            {
                type: 'card-grid',
                groups: page.primalPathCardGroups
            }
        ]
    },
    {
        ...page.sections.primalKnowledge,
        optional: true,
        blocks: [
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `When you reach 3rd level and again at 10th level,
							you gain proficiency in one skill of your choice
							from the list of skills available to barbarians at
							1st level.`
                    }
                ]
            }
        ]
    },
    {
        ...page.sections.abilityScoreImprovement,
        blocks: [
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `When you reach 4th level, and again at 8th, 12th,
							16th, and 19th level, you can increase one ability
							score of your choice by 2, or you can increase two
							ability scores of your choice by 1.`
                    }
                ]
            },
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `As normal, you can't increase an ability score
							above 20 using this feature.`
                    }
                ]
            }
        ]
    },
    {
        ...page.sections.extraAttack,
        blocks: [
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `Beginning at 5th level, you can attack twice,
							instead of once, whenever you take the `
                    },
                    page.actionLinks.attackAction,
                    {
                        type: 'text',
                        text: ' on your turn.'
                    }
                ]
            }
        ]
    },
    {
        ...page.sections.fastMovement,
        blocks: [
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `Starting at 5th level, your `
                    },
                    page.movementLinks.speed,
                    {
                        type: 'text',
                        text: ` increases by 10 feet while you aren't wearing `
                    },
                    page.equipmentLinks.heavyArmor,
                    {
                        type: 'text',
                        text: '.'
                    }
                ]
            }
        ]
    },
    {
        ...page.sections.feralInstinct,
        blocks: [
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `By 7th level, your instincts are so honed that you
							have advantage on `
                    },
                    page.combatLinks.initiativeRolls,
                    {
                        type: 'text',
                        text: '.'
                    }
                ]
            },
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `Additionally, if you are surprised at the
							beginning of combat and aren't `
                    },
                    page.conditionLinks.incapacitated,
                    {
                        type: 'text',
                        text: `, you can act normally on your first turn, but
							only if you enter your rage before doing anything
							else on that turn.`
                    }
                ]
            }
        ]
    },
    {
        ...page.sections.instinctivePounce,
        optional: true,
        blocks: [
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `At 7th level, as part of the `
                    },
                    page.actionLinks.bonusAction,
                    {
                        type: 'text',
                        text: ` you take to enter your rage, you can move up to
							half your `
                    },
                    page.movementLinks.speed,
                    {
                        type: 'text',
                        text: '.'
                    }
                ]
            }
        ]
    },
    {
        ...page.sections.brutalCritical,
        blocks: [
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `Beginning at 9th level, you can roll one additional
							weapon damage die when determining the extra damage
							for a `
                    },
                    page.combatLinks.criticalHit,
                    {
                        type: 'text',
                        text: ' with a '
                    },
                    page.combatLinks.meleeAttack,
                    {
                        type: 'text',
                        text: '.'
                    }
                ]
            },
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `This increases to two additional dice at 13th level
							and three additional dice at 17th level.`
                    }
                ]
            }
        ]
    },
    {
        ...page.sections.relentlessRage,
        blocks: [
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `Starting at 11th level, your rage can keep you
							fighting despite grievous wounds.`
                    }
                ]
            },
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `If you drop to 0 `
                    },
                    page.combatLinks.hitPoints,
                    {
                        type: 'text',
                        text: ` while you're raging and don't die outright, you
							can make a `
                    },
                    page.d20TestLinks.difficultyClass,
                    {
                        type: 'text',
                        text: ' 10 '
                    },
                    page.abilityScoreLinks.constitution,
                    {
                        type: 'text',
                        text: ' '
                    },
                    page.d20TestLinks.savingThrow,
                    {
                        type: 'text',
                        text: '.'
                    }
                ]
            },
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: 'If you succeed, you drop to 1 hit point instead.'
                    }
                ]
            },
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `Each time you use this feature after the first, the
							DC increases by 5.`
                    }
                ]
            },
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: 'When you finish a '
                    },
                    page.restLinks.shortRest,
                    {
                        type: 'text',
                        text: ' or '
                    },
                    page.restLinks.longRest,
                    {
                        type: 'text',
                        text: ', the DC resets to 10.'
                    }
                ]
            }
        ]
    },
    {
        ...page.sections.persistentRage,
        blocks: [
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `Beginning at 15th level, your rage is so fierce
							that it ends early only if you fall `
                    },
                    page.conditionLinks.unconscious,
                    {
                        type: 'text',
                        text: ' or if you choose to end it.'
                    }
                ]
            }
        ]
    },
    {
        ...page.sections.indomitableMight,
        blocks: [
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: `Beginning at 18th level, if your total for a
							`
                    },
                    page.abilityScoreLinks.strength,
                    {
                        type: 'text',
                        text: ' check is less than your '
                    },
                    page.abilityScoreLinks.strength,
                    {
                        type: 'text',
                        text: ` score, you can use that score in place of the
							total.`
                    }
                ]
            }
        ]
    },
    {
        ...page.sections.primalChampion,
        blocks: [
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: 'At 20th level, you embody the power of the wilds.'
                    }
                ]
            },
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: 'Your '
                    },
                    page.abilityScoreLinks.strength,
                    {
                        type: 'text',
                        text: ' and '
                    },
                    page.abilityScoreLinks.constitution,
                    {
                        type: 'text',
                        text: ' scores increase by 4.'
                    }
                ]
            },
            {
                type: 'paragraph',
                content: [
                    {
                        type: 'text',
                        text: 'Your maximum for those scores is now 24.'
                    }
                ]
            }
        ]
    }
] as const satisfies readonly PageContentSection[];

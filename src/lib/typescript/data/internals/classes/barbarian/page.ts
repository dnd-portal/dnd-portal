import * as core from '$lib/typescript/data/core/_index_';
import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';
import type {
	CoreTraitsData,
	InlineContent,
	PageContentBlock,
	PageContentSection,
	ProgressionData
} from '$lib/typescript/pages/content-types';
import type { CampaignNote } from '$lib/typescript/data/functions/Types/PageData';


export const website = core.internals.website;

export const classes = core.internals.classes;

export const current = classes.barbarian;

const campaignNotes: readonly CampaignNote[] = [];

export const baseUrl = `${classes.baseUrl}/${current.name.slug}`;

export const imageBaseUrl = '/images/classes/barbarian';

export const barbarianImages = {
    female: {
        alt: `A female Barbarian standing as a powerful primal
			warrior prepared for battle.`,
        caption: `A Barbarian channels primal force before entering the
			front line of battle.`,
        position: '70% center',
        sources: {
            s: `${imageBaseUrl}/card-female-s.webp`,
            m: `${imageBaseUrl}/card-female-m.webp`,
            l: `${imageBaseUrl}/card-female-l.webp`
        }
    },
    male: {
        alt: `A male Barbarian standing as a powerful primal
			warrior prepared for battle.`,
        caption: `A Barbarian channels primal force before entering the
			front line of battle.`,
        position: '70% center',
        sources: {
            s: `${imageBaseUrl}/card-male-s.webp`,
            m: `${imageBaseUrl}/card-male-m.webp`,
            l: `${imageBaseUrl}/card-male-l.webp`
        }
    }
} as const;

export const abilityScoreLinks = {
    strength: {
        type: 'link',
        path: 'internals.rules.abilityScores.strength'
    },
    dexterity: {
        type: 'link',
        path: 'internals.rules.abilityScores.dexterity'
    },
    constitution: {
        type: 'link',
        path: 'internals.rules.abilityScores.constitution'
    },
    wisdom: {
        type: 'link',
        path: 'internals.rules.abilityScores.wisdom'
    },
    charisma: {
        type: 'link',
        path: 'internals.rules.abilityScores.charisma'
    }
} as const;

export const damageTypeLinks = {
    acid: {
        type: 'link',
        path: 'internals.rules.damageTypes.acid'
    },
    bludgeoning: {
        type: 'link',
        path: 'internals.rules.damageTypes.bludgeoning'
    },
    cold: {
        type: 'link',
        path: 'internals.rules.damageTypes.cold'
    },
    fire: {
        type: 'link',
        path: 'internals.rules.damageTypes.fire'
    },
    force: {
        type: 'link',
        path: 'internals.rules.damageTypes.force'
    },
    lightning: {
        type: 'link',
        path: 'internals.rules.damageTypes.lightning'
    },
    necrotic: {
        type: 'link',
        path: 'internals.rules.damageTypes.necrotic'
    },
    piercing: {
        type: 'link',
        path: 'internals.rules.damageTypes.piercing'
    },
    psychic: {
        type: 'link',
        path: 'internals.rules.damageTypes.psychic'
    },
    radiant: {
        type: 'link',
        path: 'internals.rules.damageTypes.radiant'
    },
    slashing: {
        type: 'link',
        path: 'internals.rules.damageTypes.slashing'
    },
    thunder: {
        type: 'link',
        path: 'internals.rules.damageTypes.thunder'
    }
} as const;

export const conditionLinks = {
    blinded: {
        type: 'link',
        path: 'internals.rules.conditions.blinded'
    },
    charmed: {
        type: 'link',
        path: 'internals.rules.conditions.charmed'
    },
    deafened: {
        type: 'link',
        path: 'internals.rules.conditions.deafened'
    },
    exhaustion: {
        type: 'link',
        path: 'internals.rules.conditions.exhaustion'
    },
    frightened: {
        type: 'link',
        path: 'internals.rules.conditions.frightened'
    },
    incapacitated: {
        type: 'link',
        path: 'internals.rules.conditions.incapacitated'
    },
    prone: {
        type: 'link',
        path: 'internals.rules.conditions.prone'
    },
    unconscious: {
        type: 'link',
        path: 'internals.rules.conditions.unconscious'
    }
} as const;

export const actionLinks = {
    attackAction: {
        type: 'link',
        path: 'internals.rules.actions.attackAction'
    },
    bonusAction: {
        type: 'link',
        path: 'internals.rules.actions.bonusAction'
    },
    dash: {
        type: 'link',
        path: 'internals.rules.actions.dash'
    },
    reaction: {
        type: 'link',
        path: 'internals.rules.actions.reaction'
    }
} as const;

export const movementLinks = {
    climbing: {
        type: 'link',
        path: 'internals.rules.movement.climbing'
    },
    flying: {
        type: 'link',
        path: 'internals.rules.movement.flying'
    },
    jumping: {
        type: 'link',
        path: 'internals.rules.movement.jumping'
    },
    speed: {
        type: 'link',
        path: 'internals.rules.movement.speed'
    },
    swimming: {
        type: 'link',
        path: 'internals.rules.movement.swimming'
    }
} as const;

export const equipmentLinks = {
    heavyArmor: {
        type: 'link',
        path: 'internals.rules.equipment.heavyArmor',
        label: 'heavy armor'
    },
    shield: {
        type: 'link',
        path: 'internals.rules.equipment.shields',
        label: 'shield'
    }
} as const;

export const combatLinks = {
    armorClass: {
        type: 'link',
        path: 'internals.rules.combat.armorClass',
        label: 'armor class'
    },
    attackRolls: {
        type: 'link',
        path: 'internals.rules.combat.attackRoll',
        label: 'attack rolls'
    },
    criticalHit: {
        type: 'link',
        path: 'internals.rules.combat.criticalHit',
        label: 'critical hit'
    },
    damageRoll: {
        type: 'link',
        path: 'internals.rules.combat.damageRoll',
        label: 'damage roll'
    },
    hitPoints: {
        type: 'link',
        path: 'internals.rules.combat.hitPoints',
        label: 'hit points'
    },
    initiativeRolls: {
        type: 'link',
        path: 'internals.rules.combat.initiativeRoll',
        label: 'initiative rolls'
    },
    meleeAttack: {
        type: 'link',
        path: 'internals.rules.combat.meleeAttack',
        label: 'melee attack'
    },
    meleeWeaponAttack: {
        type: 'link',
        path: 'internals.rules.combat.meleeWeaponAttack',
        label: 'melee weapon attack'
    }
} as const;

export const restLinks = {
    longRest: {
        type: 'link',
        path: 'internals.rules.rests.longRest',
        label: 'long rest'
    },
    shortRest: {
        type: 'link',
        path: 'internals.rules.rests.shortRest',
        label: 'short rest'
    }
} as const;

export const spellcastingLinks = {
    concentration: {
        type: 'link',
        path: 'internals.rules.spellcasting.concentration',
        label: 'concentrate'
    },
    spells: {
        type: 'link',
        path: 'internals.rules.spellcasting.spells',
        label: 'spells'
    }
} as const;

export const d20TestLinks = {
    abilityChecks: {
        type: 'link',
        path: 'internals.rules.d20Tests.abilityCheck',
        label: 'checks'
    },
    difficultyClass: {
        type: 'link',
        path: 'internals.rules.d20Tests.difficultyClass',
        label: 'DC'
    },
    savingThrow: {
        type: 'link',
        path: 'internals.rules.d20Tests.savingThrow',
        label: 'saving throw'
    },
    savingThrows: {
        type: 'link',
        path: 'internals.rules.d20Tests.savingThrow',
        label: 'saving throws'
    }
} as const;

export const multiclassingRequirement = [
    { type: 'text', text: 'You must have a ' },
    {
        type: 'link',
        path: 'internals.rules.abilityScores.strength',
        label: 'Strength'
    },
    {
        type: 'text',
        text: ' score of 13 or higher in order to multiclass in or out of this class.'
    }
] as const;

export const sections = {
    multiclassing: {
        id: 'multiclassing',
        title: 'Multiclassing'
    },
    progression: {
        id: 'progression',
        title: 'The Barbarian'
    },
    classFeatures: {
        id: 'class-features',
        title: 'Class Features'
    },
    coreTraits: {
        id: 'core-traits',
        title: 'Core Traits'
    },
    hitPoints: {
        id: 'hit-points',
        title: 'Hit Points'
    },
    proficiencies: {
        id: 'proficiencies',
        title: 'Proficiencies'
    },
    startingEquipment: {
        id: 'starting-equipment',
        title: 'Starting Equipment'
    },
    rage: {
        id: 'rage',
        title: 'Rage'
    },
    unarmoredDefense: {
        id: 'unarmored-defense',
        title: 'Unarmored Defense'
    },
    dangerSense: {
        id: 'danger-sense',
        title: 'Danger Sense'
    },
    recklessAttack: {
        id: 'reckless-attack',
        title: 'Reckless Attack'
    },
    primalPath: {
        id: 'primal-path',
        title: 'Primal Path'
    },
    primalKnowledge: {
        id: 'primal-knowledge',
        title: 'Primal Knowledge'
    },
    abilityScoreImprovement: {
        id: 'ability-score-improvement',
        title: 'Ability Score Improvement'
    },
    extraAttack: {
        id: 'extra-attack',
        title: 'Extra Attack'
    },
    fastMovement: {
        id: 'fast-movement',
        title: 'Fast Movement'
    },
    feralInstinct: {
        id: 'feral-instinct',
        title: 'Feral Instinct'
    },
    instinctivePounce: {
        id: 'instinctive-pounce',
        title: 'Instinctive Pounce'
    },
    brutalCritical: {
        id: 'brutal-critical',
        title: 'Brutal Critical'
    },
    relentlessRage: {
        id: 'relentless-rage',
        title: 'Relentless Rage'
    },
    persistentRage: {
        id: 'persistent-rage',
        title: 'Persistent Rage'
    },
    indomitableMight: {
        id: 'indomitable-might',
        title: 'Indomitable Might'
    },
    primalChampion: {
        id: 'primal-champion',
        title: 'Primal Champion'
    },
    primalPaths: {
        id: 'primal-paths',
        title: 'Primal Paths'
    }
} as const;

export const coreTraits = {
    traits: [
        {
            label: 'Primary Ability',
            value: [
                {
                    type: 'link',
                    path: 'internals.rules.abilityScores.strength',
                    label: 'Strength'
                }
            ]
        },
        {
            label: 'Hit Dice',
            value: [{ type: 'text', text: '1d12 per barbarian level' }]
        },
        {
            label: 'Saving Throws',
            value: [
                {
                    type: 'link',
                    path: 'internals.rules.abilityScores.strength',
                    label: 'Strength'
                },
                { type: 'text', text: ' and ' },
                {
                    type: 'link',
                    path: 'internals.rules.abilityScores.constitution',
                    label: 'Constitution'
                }
            ]
        },
        {
            label: 'Skills',
            value: [
                {
                    type: 'text',
                    text: 'Choose two: '
                },
                {
                    type: 'link',
                    path: 'internals.rules.skills.animalHandling',
                    label: 'Animal Handling'
                },
                { type: 'text', text: ', ' },
                {
                    type: 'link',
                    path: 'internals.rules.skills.athletics',
                    label: 'Athletics'
                },
                { type: 'text', text: ', ' },
                {
                    type: 'link',
                    path: 'internals.rules.skills.intimidation',
                    label: 'Intimidation'
                },
                { type: 'text', text: ', ' },
                {
                    type: 'link',
                    path: 'internals.rules.skills.nature',
                    label: 'Nature'
                },
                { type: 'text', text: ', ' },
                {
                    type: 'link',
                    path: 'internals.rules.skills.perception',
                    label: 'Perception'
                },
                { type: 'text', text: ', ' },
                {
                    type: 'link',
                    path: 'internals.rules.skills.survival',
                    label: 'Survival'
                }
            ]
        },
        {
            label: 'Weapons',
            value: [
                {
                    type: 'link',
                    path: 'internals.rules.equipment.simpleWeapons',
                    label: 'Simple weapons'
                },
                { type: 'text', text: ' and ' },
                {
                    type: 'link',
                    path: 'internals.rules.equipment.martialWeapons',
                    label: 'martial weapons'
                }
            ]
        },
        {
            label: 'Armor',
            value: [
                {
                    type: 'link',
                    path: 'internals.rules.equipment.lightArmor',
                    label: 'Light armor'
                },
                { type: 'text', text: ', ' },
                {
                    type: 'link',
                    path: 'internals.rules.equipment.mediumArmor',
                    label: 'medium armor'
                },
                { type: 'text', text: ', and ' },
                {
                    type: 'link',
                    path: 'internals.rules.equipment.shields',
                    label: 'shields'
                }
            ]
        }
    ],
    startingEquipment: [
        {
            label: 'Optie 1',
            instruction: 'Choose one',
            choices: [
                [
                    {
                        type: 'link',
                        path: 'internals.equipment.greataxe',
                        label: 'A greataxe'
                    }
                ],
                [
                    {
                        type: 'link',
                        path: 'internals.rules.equipment.martialWeapons',
                        label: 'Any martial melee weapon'
                    }
                ]
            ]
        },
        {
            label: 'Optie 2',
            instruction: 'Choose one',
            choices: [
                [
                    {
                        type: 'link',
                        path: 'internals.equipment.handaxes',
                        label: 'Two handaxes'
                    }
                ],
                [
                    {
                        type: 'link',
                        path: 'internals.rules.equipment.simpleWeapons',
                        label: 'Any simple weapon'
                    }
                ]
            ]
        },
        {
            label: 'Also included',
            items: [
                [
                    {
                        type: 'link',
                        path: 'internals.equipment.explorersPack',
                        label: `An explorer's pack`
                    }
                ],
                [
                    {
                        type: 'link',
                        path: 'internals.equipment.javelins',
                        label: 'Four javelins'
                    }
                ]
            ]
        }
    ]
} as const satisfies CoreTraitsData;

export const startingEquipmentIntro = [
    {
        type: 'text',
        text: `You start with the following equipment, in addition to the
			equipment granted by your background.`
    }
] as const;

export function getCoreTrait(label: (typeof coreTraits.traits)[number]['label']) {
    const trait = coreTraits.traits.find((row) => row.label === label);
    if (!trait) {
        throw new Error(`Missing Barbarian core trait: ${label}`);
    }
    return trait;
}

export const hitPointRows = [
    getCoreTrait('Hit Dice'),
    {
        label: 'Hit Points at 1st Level',
        value: [
            { type: 'text', text: '12 + your ' },
            abilityScoreLinks.constitution,
            { type: 'text', text: ' modifier' }
        ]
    },
    {
        label: 'Hit Points at Higher Levels',
        value: [
            {
                type: 'text',
                text: '1d12 (or 7) + your '
            },
            abilityScoreLinks.constitution,
            {
                type: 'text',
                text: ' modifier per barbarian level after 1st'
            }
        ]
    }
] as const;

export const proficiencyRows = [
    getCoreTrait('Armor'),
    getCoreTrait('Weapons'),
    {
        label: 'Tools',
        value: [{ type: 'text', text: 'None' }]
    },
    getCoreTrait('Saving Throws'),
    getCoreTrait('Skills')
] as const;

export const primalPathCardGroups = [
    {
        title: 'Official Paths',
        cards: [
            {
                page: 'internals.classes.barbarian.subclasses.ancestralGuardian',
                source: `Xanathar's Guide to Everything`
            },
            {
                page: 'internals.classes.barbarian.subclasses.battlerager',
                source: `Sword Coast Adventurer's Guide`
            },
            {
                page: 'internals.classes.barbarian.subclasses.beast',
                source: `Tasha's Cauldron of Everything`
            },
            {
                page: 'internals.classes.barbarian.subclasses.berserker',
                source: `Player's Handbook`
            },
            {
                page: 'internals.classes.barbarian.subclasses.giant',
                source: 'Bigby Presents: Glory of the Giants'
            },
            {
                page: 'internals.classes.barbarian.subclasses.stormHerald',
                source: `Xanathar's Guide to Everything`
            },
            {
                page: 'internals.classes.barbarian.subclasses.totemWarrior',
                source: `Player's Handbook`
            },
            {
                page: 'internals.classes.barbarian.subclasses.wildMagic',
                source: `Tasha's Cauldron of Everything`
            },
            {
                page: 'internals.classes.barbarian.subclasses.zealot',
                source: `Xanathar's Guide to Everything`
            }
        ]
    },
    {
        title: 'Archived Unearthed Arcana',
        cards: [
            {
                title: 'Beast',
                source: 'Unearthed Arcana 67: Subclasses, Part 1',
                description: `An archived Unearthed Arcana Barbarian Primal Path
					option from Unearthed Arcana 67: Subclasses, Part 1.`
            },
            {
                title: 'Giant',
                source: 'Unearthed Arcana 83: Giant Options',
                description: `An archived Unearthed Arcana Barbarian Primal Path
					option from Unearthed Arcana 83: Giant Options.`
            },
            {
                title: 'Wild Soul',
                source: 'Unearthed Arcana 60: Barbarian and Monk',
                description: `An archived Unearthed Arcana Barbarian Primal Path
					option from Unearthed Arcana 60: Barbarian and Monk.`
            }
        ]
    }
] as const;

export type BarbarianSubclassKey = keyof typeof current.subclasses;

export type BarbarianSubclassImage = {
    readonly alt: string;
    readonly caption?: string;
    readonly position?: string;
    readonly sources: {
        readonly s: string;
        readonly m: string;
        readonly l: string;
    };
};

export type BarbarianSubclassImages = Partial<Record<'female' | 'male', BarbarianSubclassImage>>;

export function textParagraph(text: string): PageContentBlock {
    return {
        type: 'paragraph',
        content: [
            {
                type: 'text',
                text
            }
        ]
    };
}

export function paragraph(content: InlineContent): PageContentBlock {
    return {
        type: 'paragraph',
        content
    };
}

export function featureSection(id: string, title: string, blocks: readonly PageContentBlock[]): PageContentSection {
    return {
        id,
        title,
        blocks
    };
}

export function createSubclassPage(key: BarbarianSubclassKey, source: string, shortDescription: string, longDescription: readonly InlineContent[], featureSections: readonly PageContentSection[], images: BarbarianSubclassImages) {
    const subclass = current.subclasses[key];
    return createInternalPage({
        href: `${baseUrl}/${subclass.name.slug}`,
        img: current.logos.simple,
        images: {
            card: images,
            header: images
        },
        label: subclass.name.short,
        title: `${website.name.short} - ${subclass.name.normal}`,
        subTitle: `${current.name.normal} subclass`,
        descriptions: {
            short: shortDescription,
            medium: `Explore the ${subclass.name.normal}, a Barbarian Primal
				Path from ${source}.`,
            long: longDescription
        },
        header: {
            sections: [
                {
                    id: `${subclass.name.slug}-source`,
                    title: 'Source',
                    content: [
                        {
                            type: 'text',
                            text: source
                        }
                    ]
                }
            ]
        },
        navigation: {
            parent: 'internals.classes.barbarian.page'
        },
        tags: [
            'barbarian',
            'subclass',
            'primal-path',
            subclass.name.slug
        ],
        content: {
            source,
            featureSections,
            tableOfContents: featureSections.map(({ id, title }) => ({
                id,
                title
            }))
        }
    });
}

export const page = createInternalPage({
    href: baseUrl,
    img: current.logos.simple,
    images: {
        card: barbarianImages,
        header: barbarianImages
    },
    label: current.name.normal,
    title: `${website.name.short} - ${current.name.normal}`,
    subTitle: 'Primal warrior',
    descriptions: {
        short: `A primal warrior who turns raw fury into endurance,
				mobility, and brutal melee pressure.`,
        medium: `Explore the ${current.name.normal} class, its rage,
				progression, core features, abilities, and available subclasses.`,
        long: [
            [
                {
                    type: 'text',
                    text: `Barbarians channel primal forces through Rage, but
							that power is more than ordinary anger.`
                }
            ],
            [
                {
                    type: 'text',
                    text: `Different Barbarians understand Rage through
							spirits, ancestors, pain, wild magic, nature, or the
							deepest part of the self breaking through.`
                }
            ],
            [
                {
                    type: 'text',
                    text: `Rage sharpens a Barbarian's combat ability,
							reflexes, senses, and raw physical force. In an
							adventuring party, Barbarians often become protectors
							and leaders because they willingly enter danger first
							and hold the line for everyone behind them.`
                }
            ]
        ]
    },
    sourceMetadata: [
        {
            label: 'Source',
            value: `Player's Handbook`,
            icon: '/icons/white/game/source-book.svg'
        },
        {
            label: 'Category',
            value: 'Core D&D',
            icon: '/icons/white/game/character.svg'
        }
    ],
    campaignNotes,
    header: {
        sections: [
            {
                ...sections.multiclassing,
                content: multiclassingRequirement
            }
        ]
    },
    navigation: {
        parent: 'internals.classes.page'
    },
    tags: [
        'barbarian',
        'class',
        'tank',
        'melee',
        'brute',
        'burst-damage',
        'sustained-damage',
        'martial',
        'strength',
        'rage',
        'primal',
        'frontline'
    ]
});
export const content = { sections,
tableOfContents: [
    sections.multiclassing,
    sections.progression,
    {
        ...sections.coreTraits,
        children: [
            sections.hitPoints,
            sections.proficiencies,
            sections.startingEquipment
        ]
    },
    {
        ...sections.classFeatures,
        children: [
            sections.rage,
            sections.unarmoredDefense,
            sections.dangerSense,
            sections.recklessAttack,
            sections.primalPath,
            sections.primalKnowledge,
            sections.abilityScoreImprovement,
            sections.extraAttack,
            sections.fastMovement,
            sections.feralInstinct,
            sections.instinctivePounce,
            sections.brutalCritical,
            sections.relentlessRage,
            sections.persistentRage,
            sections.indomitableMight,
            sections.primalChampion
        ]
    }
],
coreTraits,
startingEquipmentIntro } as const;

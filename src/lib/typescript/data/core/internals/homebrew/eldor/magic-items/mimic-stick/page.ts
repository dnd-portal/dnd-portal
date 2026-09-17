import type { HomebrewMagicItem } from '$lib/typescript/data/internals/homebrew/types';

export const item: HomebrewMagicItem = {
	id: 'mimic-stick',
	collection: 'eldor',
	name: 'The Mimic Stick',
	slug: 'mimic-stick',

	type: 'Wondrous Item',
	category: 'Magic Item',
	source: 'Eldor Homebrew',
	rarity: 'Very Rare',

	attunement: true,

	activation: 'Action',

	description: [
		{
			type: 'text',
			text: 'A crooked wooden stick covered in tiny grooves resembling teeth. When pointed at something, the grooves briefly open like a hungry mouth.'
		}
	],

	charges: {
		maximum: '3 charges',
		recharge: 'Regains 1d3 expended charges daily at dawn.',
		description: [
			{
				type: 'text',
				text: 'Using Mimic Transformation consumes 1 charge. If the final charge is expended, roll a d20. On a 1, the stick itself transforms into a Mimic.'
			}
		]
	},

	content: [
		{
			id: 'mimic-transformation',
			title: 'Mimic Transformation',
			blocks: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'As an action, you point the Mimic Stick at one creature or object you can see within 60 feet. A creature must succeed on a DC 17 Constitution saving throw or transform into a Mimic. An unattended nonmagical object automatically fails.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'The transformation changes what the target is and what it can do, but does not replace its underlying power level.'
						}
					]
				}
			]
		},

		{
			id: 'preserved-statistics',
			title: 'Preserved Statistics',
			blocks: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'A transformed creature retains its:'
						}
					]
				},
				{
					type: 'list',
					items: [
						[{ type: 'text', text: 'Armor Class' }],
						[{ type: 'text', text: 'Current and maximum Hit Points' }],
						[{ type: 'text', text: 'Hit Dice' }],
						[
							{
								type: 'text',
								text: 'Walking, climbing, flying, swimming, and burrowing speeds'
							}
						],
						[{ type: 'text', text: 'Strength' }],
						[{ type: 'text', text: 'Dexterity' }],
						[{ type: 'text', text: 'Constitution' }],
						[{ type: 'text', text: 'Intelligence' }],
						[{ type: 'text', text: 'Wisdom' }],
						[{ type: 'text', text: 'Charisma' }],
						[{ type: 'text', text: 'Saving throw bonuses' }],
						[{ type: 'text', text: 'Skill bonuses' }],
						[{ type: 'text', text: 'Proficiency Bonus' }],
						[{ type: 'text', text: 'Damage resistances' }],
						[{ type: 'text', text: 'Damage immunities' }],
						[{ type: 'text', text: 'Condition immunities' }],
						[{ type: 'text', text: 'Senses' }],
						[{ type: 'text', text: 'Languages' }]
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: "A creature's size also remains unchanged."
						}
					]
				},
				{
					type: 'callout',
					title: 'Power Level',
					content: [
						{
							type: 'text',
							text: 'Transforming an Ancient Dragon creates an Ancient Dragon-strength Mimic, not an ordinary Mimic.'
						}
					]
				}
			]
		},

		{
			id: 'lost-abilities',
			title: 'Lost Abilities',
			blocks: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'While transformed, the creature cannot use its original:'
						}
					]
				},
				{
					type: 'list',
					items: [
						[{ type: 'text', text: 'Attacks' }],
						[{ type: 'text', text: 'Spells' }],
						[{ type: 'text', text: 'Breath weapons' }],
						[{ type: 'text', text: 'Class features' }],
						[{ type: 'text', text: 'Innate spellcasting' }],
						[{ type: 'text', text: 'Special actions' }]
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'These are temporarily replaced by the Mimic abilities described below. Passive defensive characteristics represented by the creature’s preserved statistics remain intact.'
						}
					]
				}
			]
		},

		{
			id: 'mimic-traits',
			title: 'Mimic Traits',
			blocks: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'strong',
							children: [
								{
									type: 'text',
									text: 'Shapechanger. '
								}
							]
						},
						{
							type: 'text',
							text: 'The Mimic can use its action to alter its appearance into an object appropriate for its size or return to its amorphous Mimic form. Its statistics do not change when it changes shape.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'strong',
							children: [
								{
									type: 'text',
									text: 'False Appearance. '
								}
							]
						},
						{
							type: 'text',
							text: 'While motionless in object form, the Mimic is indistinguishable from an ordinary object of that kind.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'strong',
							children: [
								{
									type: 'text',
									text: 'Adhesive. '
								}
							]
						},
						{
							type: 'text',
							text: 'When a creature touches the Mimic or is hit by its Pseudopod, the Mimic can attempt to adhere to it. The target is grappled.'
						}
					]
				},
				{
					type: 'callout',
					title: 'Escape DC',
					content: [
						{
							type: 'strong',
							children: [
								{
									type: 'text',
									text: '8 + Proficiency Bonus + Strength modifier'
								}
							]
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'A creature grappled this way has disadvantage on ability checks made to escape the grapple.'
						}
					]
				}
			]
		},

		{
			id: 'mimic-actions',
			title: 'Mimic Actions',
			blocks: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'strong',
							children: [
								{
									type: 'text',
									text: 'Multiattack. '
								}
							]
						},
						{
							type: 'text',
							text: 'The Mimic makes two attacks in any combination of Pseudopod and Bite.'
						}
					]
				},

				{
					type: 'paragraph',
					content: [
						{
							type: 'strong',
							children: [
								{
									type: 'text',
									text: 'Pseudopod. '
								}
							]
						},
						{
							type: 'text',
							text: 'Melee Weapon Attack.'
						}
					]
				},
				{
					type: 'callout',
					title: 'Attack Roll',
					content: [
						{
							type: 'strong',
							children: [
								{
									type: 'text',
									text: 'Proficiency Bonus + Strength modifier to hit'
								}
							]
						}
					]
				},
				{
					type: 'table',
					caption: 'Pseudopod Reach by Size',
					columns: [
						{
							key: 'size',
							label: 'Size'
						},
						{
							key: 'reach',
							label: 'Reach'
						}
					],
					rows: [
						{
							size: [{ type: 'text', text: 'Tiny–Medium' }],
							reach: [{ type: 'text', text: '5 ft.' }]
						},
						{
							size: [{ type: 'text', text: 'Large' }],
							reach: [{ type: 'text', text: '10 ft.' }]
						},
						{
							size: [{ type: 'text', text: 'Huge' }],
							reach: [{ type: 'text', text: '15 ft.' }]
						},
						{
							size: [{ type: 'text', text: 'Gargantuan' }],
							reach: [{ type: 'text', text: '20 ft.' }]
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'On a hit, the Pseudopod deals bludgeoning damage based on the Mimic’s size. Add the Mimic’s Strength modifier to the damage. The target can also become grappled by Adhesive.'
						}
					]
				},
				{
					type: 'table',
					caption: 'Pseudopod Damage by Size',
					columns: [
						{
							key: 'size',
							label: 'Size'
						},
						{
							key: 'damage',
							label: 'Damage Dice'
						}
					],
					rows: [
						{
							size: [{ type: 'text', text: 'Tiny' }],
							damage: [{ type: 'text', text: '1d4' }]
						},
						{
							size: [{ type: 'text', text: 'Small' }],
							damage: [{ type: 'text', text: '1d6' }]
						},
						{
							size: [{ type: 'text', text: 'Medium' }],
							damage: [{ type: 'text', text: '1d8' }]
						},
						{
							size: [{ type: 'text', text: 'Large' }],
							damage: [{ type: 'text', text: '2d8' }]
						},
						{
							size: [{ type: 'text', text: 'Huge' }],
							damage: [{ type: 'text', text: '3d8' }]
						},
						{
							size: [{ type: 'text', text: 'Gargantuan' }],
							damage: [{ type: 'text', text: '4d8' }]
						}
					]
				},

				{
					type: 'paragraph',
					content: [
						{
							type: 'strong',
							children: [
								{
									type: 'text',
									text: 'Bite. '
								}
							]
						},
						{
							type: 'text',
							text: 'Melee Weapon Attack.'
						}
					]
				},
				{
					type: 'callout',
					title: 'Attack Roll',
					content: [
						{
							type: 'strong',
							children: [
								{
									type: 'text',
									text: 'Proficiency Bonus + Strength modifier to hit'
								}
							]
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'On a hit, the target takes piercing damage based on the Mimic’s size, plus acid damage. Add the Mimic’s Strength modifier to the piercing damage.'
						}
					]
				},
				{
					type: 'table',
					caption: 'Bite Damage by Size',
					columns: [
						{
							key: 'size',
							label: 'Size'
						},
						{
							key: 'piercing',
							label: 'Piercing'
						},
						{
							key: 'acid',
							label: 'Acid'
						}
					],
					rows: [
						{
							size: [{ type: 'text', text: 'Tiny' }],
							piercing: [{ type: 'text', text: '1d4' }],
							acid: [{ type: 'text', text: '1d4' }]
						},
						{
							size: [{ type: 'text', text: 'Small' }],
							piercing: [{ type: 'text', text: '1d6' }],
							acid: [{ type: 'text', text: '1d4' }]
						},
						{
							size: [{ type: 'text', text: 'Medium' }],
							piercing: [{ type: 'text', text: '1d8' }],
							acid: [{ type: 'text', text: '1d6' }]
						},
						{
							size: [{ type: 'text', text: 'Large' }],
							piercing: [{ type: 'text', text: '2d8' }],
							acid: [{ type: 'text', text: '2d6' }]
						},
						{
							size: [{ type: 'text', text: 'Huge' }],
							piercing: [{ type: 'text', text: '3d8' }],
							acid: [{ type: 'text', text: '3d6' }]
						},
						{
							size: [{ type: 'text', text: 'Gargantuan' }],
							piercing: [{ type: 'text', text: '4d8' }],
							acid: [{ type: 'text', text: '4d6' }]
						}
					]
				}
			]
		},

		{
			id: 'powerful-creatures',
			title: 'Powerful Creatures',
			blocks: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Transforming a powerful creature does not turn it into a weak standard Mimic.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'For example, an Ancient Dragon retains its enormous Hit Point pool, Armor Class, ability scores, saving throws, movement speeds, resistances, senses, and Proficiency Bonus. It simply temporarily fights as a Mimic instead of as a dragon.'
						}
					]
				}
			]
		},

		{
			id: 'objects',
			title: 'Objects',
			blocks: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'When the Mimic Stick is used on an object, the object becomes a Mimic using a separate object-based Mimic stat block determined by the object’s size.'
						}
					]
				}
			]
		},

		{
			id: 'duration',
			title: 'Duration',
			blocks: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'The transformation lasts for 10 minutes.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'It ends early if the Mimic is reduced to 0 Hit Points or if the effect is otherwise ended by the Mimic Stick.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'When the transformation ends, a creature returns to its original form with its current Hit Points unchanged.'
						}
					]
				}
			]
		}
	],

	tags: [
		'homebrew',
		'eldor',
		'magic-item',
		'mimic',
		'transformation',
		'utility',
		'combat',
		'chaos'
	],

	img: {
		href: '/images/homebrew/eldor/magic-items/mimic-stick.webp',
		alt: 'The Mimic Stick artwork'
	}
};
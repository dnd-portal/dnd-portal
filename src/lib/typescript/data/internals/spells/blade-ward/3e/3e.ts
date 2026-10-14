const spell = {
	id: 'blade-ward',
	edition: '3e',

	name: 'Blade Ward',

	contentStatus: 'portal-conversion',
	basedOnEdition: '5e',

	publication: {
		edition: '3e',
		source: 'dnd-portal-conversion'
	},

	level: 0,
	school: 'Abjuration',
	subschool: null,
	descriptors: [],

	spellLists: [
		{ class: 'Bard', level: 0 },
		{ class: 'Sorcerer', level: 0 },
		{ class: 'Wizard', level: 0 }
	],

	components: {
		verbal: true,
		somatic: true,
		material: false,
		focus: false,
		divineFocus: false
	},

	castingTime: {
		value: 1,
		unit: 'action'
	},

	range: {
		type: 'personal'
	},

	target: {
		type: 'self',
		label: 'You'
	},

	duration: {
		type: 'rounds',
		value: 1,
		unit: 'round',
		dismissible: false
	},

	savingThrow: null,
	spellResistance: null,

	effect: {
		type: 'damage-reduction',
		damageReduction: {
			amount: 1,
			bypass: '—'
		}
	},

	scaling: null,

	source: 'dnd-portal-conversion',
	rulesSource: 'srd-3e',

	tags: [
		'defense',
		'warding',
		'damage-reduction',
		'personal',
		'portal-conversion'
	],

	summary:
		'Blade Ward is a D&D Portal conversion of the later defensive cantrip into D&D 3e. It is a 0-level Abjuration spell for Bards, Sorcerers, and Wizards that takes 1 action to cast and protects only the caster for 1 round. While the ward lasts, you gain damage reduction 1/—. The ward reduces the damage of each qualifying weapon, natural, or unarmed attack by 1 point, and no ordinary weapon enhancement bonus is listed as a bypass. Normal 3e damage reduction rules still determine which kinds of damage are affected. The spell has no saving throw, no spell resistance interaction against another target, and no caster-level scaling.',

	description: [
		{
			type: 'paragraph',
			text:
				'You surround yourself with a brief protective ward that absorbs a small amount of harm from physical attacks. For 1 round, you have damage reduction 1/—. The ward follows the normal D&D 3e rules for damage reduction and does not scale with caster level.'
		}
	],

	sections: [
		{
			id: 'conversion-status',
			title: 'D&D Portal Conversion',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward is not presented as an official D&D 3e spell. The D&D Portal version is a conversion of the later defensive spell concept into mechanics that fit the 3.0 rules.'
				},
				{
					type: 'paragraph',
					content:
						'The conversion uses the 5e spell as its conceptual starting point: a very low-level arcane ward that briefly protects the caster from physical attacks. It does not copy the later edition’s resistance mechanic directly.'
				},
				{
					type: 'paragraph',
					content:
						'Instead, the spell is rebuilt around 3e Damage Reduction, which is the edition’s native system for subtracting a fixed amount of damage from many weapon, natural, and unarmed attacks.'
				}
			]
		},
		{
			id: 'how-blade-ward-works',
			title: 'How Blade Ward Works',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward is a 0-level Abjuration spell with verbal and somatic components. Casting it takes 1 action, its range is Personal, and it affects only the caster.'
				},
				{
					type: 'paragraph',
					content:
						'For 1 round, you gain damage reduction 1/—. Each qualifying attack has its damage reduced by 1 point before the remaining damage is applied to your hit points.'
				},
				{
					type: 'paragraph',
					content:
						'The spell does not grant Armor Class, a saving throw bonus, energy resistance, or a miss chance. Its entire defensive effect is represented by the Damage Reduction entry.'
				},
				{
					type: 'paragraph',
					content:
						'Because the spell is Personal, there is no hostile target that makes a saving throw or checks Spell Resistance. Those fields should normally be omitted by the 3e renderer rather than shown as active mechanics.'
				}
			]
		},
		{
			id: 'why-damage-reduction',
			title: 'Why the Conversion Uses Damage Reduction',
			blocks: [
				{
					type: 'paragraph',
					content:
						'D&D 3e does not use the later 5e resistance system to represent ordinary protection from weapon damage. It already has Damage Reduction, a dedicated rule for subtracting a fixed amount from many physical attacks.'
				},
				{
					type: 'paragraph',
					content:
						'Published 3e defensive magic also uses Damage Reduction for this purpose. Protection from arrows, for example, protects against ranged weapons through a Damage Reduction value rather than by halving physical damage.'
				},
				{
					type: 'paragraph',
					content:
						'DR 1/— keeps Blade Ward small enough for a 0-level spell. The cantrip can matter against repeated low-damage attacks, but it does not compete with the much larger Damage Reduction values available from stronger spells, monsters, or class features.'
				},
				{
					type: 'paragraph',
					content:
						'The dash is intentional. It prevents ordinary weapon enhancement bonuses from acting as the built-in bypass for Blade Ward, preserving the later spell’s broad physical-defense concept.'
				}
			]
		},
		{
			id: 'what-the-ward-protects-against',
			title: 'What the Ward Protects Against',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward follows the normal 3e rules for Damage Reduction. Ordinary weapon attacks, natural weapon attacks, and unarmed attacks can therefore have their qualifying physical damage reduced.'
				},
				{
					type: 'paragraph',
					content:
						'This includes attacks such as swords, arrows, maces, claws, bites, and ordinary unarmed blows when Damage Reduction would normally apply to the damage.'
				},
				{
					type: 'paragraph',
					content:
						'The reduction is applied to each qualifying attack separately. If an enemy makes several attacks during a full attack, Blade Ward can reduce each attack by 1 point while the ward remains active.'
				},
				{
					type: 'paragraph',
					content:
						'Because Blade Ward is DR 1/—, a +1, +2, or more highly enhanced weapon does not automatically bypass the ward merely because of its enhancement bonus.'
				}
			]
		},
		{
			id: 'what-the-ward-does-not-protect-against',
			title: 'What the Ward Does Not Protect Against',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Damage Reduction is not resistance to every kind of damage. Blade Ward therefore does not become a general-purpose reduction to all damage taken during the round.'
				},
				{
					type: 'paragraph',
					content:
						'Energy damage such as acid, cold, electricity, fire, and sonic damage is not normally reduced by ordinary Damage Reduction. If a weapon deals physical damage plus energy damage, Blade Ward can reduce the qualifying physical portion while leaving the energy portion unchanged.'
				},
				{
					type: 'paragraph',
					content:
						'Spells, spell-like abilities, supernatural abilities, touch attacks, and other effects follow the normal 3e Damage Reduction rules. Blade Ward creates no special exception that makes DR apply where it normally would not.'
				},
				{
					type: 'paragraph',
					content:
						'Specific rules can still override the general Damage Reduction rules. When another effect explicitly says that DR applies or does not apply, that instruction takes precedence.'
				}
			]
		},
		{
			id: 'magic-weapons-and-enhancement-thresholds',
			title: 'Magic Weapons and 3e Enhancement Thresholds',
			blocks: [
				{
					type: 'paragraph',
					content:
						'D&D 3e commonly expresses weapon bypasses with enhancement thresholds such as DR 10/+1 or DR 10/+2. A weapon with a sufficient enhancement bonus can overcome those forms of Damage Reduction.'
				},
				{
					type: 'paragraph',
					content:
						'Blade Ward deliberately uses DR 1/— instead. There is no +1, +2, or other enhancement threshold listed after the slash.'
				},
				{
					type: 'paragraph',
					content:
						'As a result, making a weapon magical does not by itself cause the attack to ignore Blade Ward. A mundane longsword and a +1 longsword are both reduced by 1 when the normal DR rules apply.'
				},
				{
					type: 'paragraph',
					content:
						'This is one of the most edition-specific parts of the conversion because enhancement-threshold DR is much more prominent in 3.0 than in the revised 3.5 rules.'
				}
			]
		},
		{
			id: 'damage-reduction-and-stacking',
			title: 'Damage Reduction and Stacking',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward does not add its DR value to another source of Damage Reduction. Multiple forms of DR remain separate defenses rather than combining into a larger number.'
				},
				{
					type: 'paragraph',
					content:
						'When more than one form of Damage Reduction could apply to an attack, use the best applicable reduction under the normal 3e rules.'
				},
				{
					type: 'paragraph',
					content:
						'A larger DR value can be better against one attack but useless against another if its bypass condition is met. Blade Ward’s small DR 1/— can still matter when a stronger enhancement-threshold DR is bypassed.'
				},
				{
					type: 'paragraph',
					content:
						'Blade Ward therefore works as a separate fallback defense rather than as a numerical upgrade to existing DR.'
				}
			]
		},
		{
			id: 'duration-and-action-economy',
			title: 'Duration and Action Economy',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Blade Ward lasts for 1 round. The spell is meant to provide very short-term physical protection rather than a persistent defensive buff.'
				},
				{
					type: 'paragraph',
					content:
						'Casting the spell takes 1 action, which is the native 3e terminology used by spells before the revised 3.5 action vocabulary standardized the familiar phrase “1 standard action.”'
				},
				{
					type: 'paragraph',
					content:
						'That action cost is an important balancing factor. A caster normally spends their action to gain only a small amount of temporary Damage Reduction.'
				},
				{
					type: 'paragraph',
					content:
						'The spell has no caster-level scaling, so higher-level casters do not gain more DR or a longer base duration simply from increasing caster level.'
				}
			]
		},
		{
			id: 'class-availability',
			title: 'Class Availability',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The Portal conversion places Blade Ward on the Bard and Sorcerer/Wizard 0-level spell lists. Those are the natural arcane homes for a defensive cantrip in D&D 3e.'
				},
				{
					type: 'paragraph',
					content:
						'The spell is not at-will merely because it is a cantrip. In 3e, 0-level spells still use the normal spellcasting resources and preparation or spells-known systems of their classes.'
				},
				{
					type: 'paragraph',
					content:
						'Warlock is not included. The familiar Warlock class with invocations belongs to later 3.5-era material and should not be retroactively added to a D&D 3.0 spell list.'
				}
			]
		},
		{
			id: 'relationship-to-3-5e',
			title: 'Relationship to the 3.5e Conversion',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The D&D Portal 3e and 3.5e Blade Ward conversions intentionally arrive at nearly the same visible effect: a 0-level Abjuration that grants DR 1/— for 1 round.'
				},
				{
					type: 'paragraph',
					content:
						'That does not make the editions interchangeable. The 3e version uses the 3.0 action terminology of 1 action, while the 3.5e version uses 1 standard action.'
				},
				{
					type: 'paragraph',
					content:
						'More importantly, the surrounding Damage Reduction ecosystem changed between editions. D&D 3e commonly uses enhancement thresholds such as +1 or +2 as DR bypasses, while D&D 3.5e revised many of those entries into categories such as magic, silver, or other properties.'
				},
				{
					type: 'paragraph',
					content:
						'Separate edition pages therefore remain useful even though this particular Portal Conversion has the same DR number in both rules sets.'
				}
			]
		}
	],

	faq: [
		'did-blade-ward-exist-in-dnd-3e',
		'why-does-blade-ward-use-damage-reduction-in-3e',
		'do-magic-weapons-bypass-blade-ward-in-3e',
		'does-blade-ward-protect-against-spells-and-energy-damage-in-3e',
		'does-blade-ward-stack-with-other-damage-reduction-in-3e',
		'what-is-different-between-blade-ward-in-3e-and-3-5e'
	]
};

export default spell;

export const question = {
	slug: 'can-acid-splash-be-used-as-a-ranged-basic-attack-in-4e',

	question: 'Can Acid Splash be used as a ranged basic attack in D&D 4e?',

	shortAnswer:
		'No. The D&D Portal 4e conversion of Acid Splash is an at-will ranged attack power, but it does not have a rule allowing it to function as a ranged basic attack. Being At-Will and Ranged is not enough by itself. This is an intentional difference from the official Sorcerer power Acid Orb, which specifically states that it can be used as a ranged basic attack. If another effect tells a character to make a ranged basic attack, the default Portal Acid Splash conversion cannot normally be substituted for that attack.',

	introduction:
		'Ranged attack power and ranged basic attack are separate rules concepts in D&D 4e. A large number of class powers attack at range, but that does not automatically place them in the basic-attack category used by other powers, class features, and granted attacks.\n\nThis distinction matters especially for Acid Splash because its closest official comparison, Acid Orb, does receive explicit ranged-basic-attack permission. D&D Portal deliberately does not copy that feature into the conversion.',

	sections: [
		{
			id: 'ranged-does-not-automatically-mean-basic',
			title: 'A ranged power is not automatically a ranged basic attack',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Splash has Ranged 10, which defines the distance at which its primary target can be chosen. That range entry says nothing by itself about whether the power counts as a ranged basic attack.'
				},
				{
					type: 'paragraph',
					content:
						'Basic attacks are a specific part of the 4e rules vocabulary. Other powers can tell a character to make a basic attack, grant one outside the character’s normal turn, or provide bonuses that apply only when a basic attack is used.'
				},
				{
					type: 'paragraph',
					content:
						'When a rule specifically asks for a ranged basic attack, a normal ranged class power cannot simply be substituted unless that power or another rule explicitly gives permission to do so.'
				}
			]
		},
		{
			id: 'acid-orb-has-explicit-permission',
			title: 'Acid Orb has explicit ranged-basic-attack permission',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Acid Orb includes a special rule stating that the power can be used as a ranged basic attack. That sentence is a mechanical exception that expands how the power can be used.'
				},
				{
					type: 'paragraph',
					content:
						'Because of that exception, Acid Orb can qualify when another effect grants or requires a ranged basic attack. It is not limited to being chosen only as a normal standard-action class power on the Sorcerer’s turn.'
				},
				{
					type: 'paragraph',
					content:
						'Acid Splash contains no equivalent rule in the Portal conversion. Similarities in level, usage, damage type, or attack defense do not cause it to inherit Acid Orb’s special basic-attack status.'
				}
			]
		},
		{
			id: 'why-the-conversion-does-not-copy-that-feature',
			title: 'Why the Portal conversion does not copy that feature',
			blocks: [
				{
					type: 'paragraph',
					content:
						'The conversion already receives a tactical benefit that Acid Orb does not have: a successful hit can damage one enemy adjacent to the primary target. That gives Acid Splash value when opponents are positioned together.'
				},
				{
					type: 'paragraph',
					content:
						'Giving Acid Splash the ranged-basic-attack feature as well would add another important layer of flexibility. It would open the power to additional granted attacks and class interactions while keeping the secondary splash benefit.'
				},
				{
					type: 'paragraph',
					content:
						'The default conversion therefore leaves that feature with Acid Orb. Acid Orb emphasizes long range, primary-target damage, and basic-attack utility; Acid Splash emphasizes shorter-range positional pressure.'
				}
			]
		},
		{
			id: 'what-if-an-effect-grants-a-ranged-basic-attack',
			title: 'What if an effect grants a ranged basic attack?',
			blocks: [
				{
					type: 'paragraph',
					content:
						'If another creature, power, or class feature instructs a character to make a ranged basic attack, the character must choose an attack that actually qualifies for that instruction.'
				},
				{
					type: 'paragraph',
					content:
						'The Portal Acid Splash conversion does not qualify on its own. Its At-Will usage does not change that, and the fact that it makes a ranged attack does not transform it into a basic attack.'
				},
				{
					type: 'paragraph',
					content:
						'Acid Orb can qualify because its own power text provides the necessary permission. Other powers may also qualify if they contain a similar explicit rule.'
				}
			]
		},
		{
			id: 'can-a-dm-change-it',
			title: 'Can a DM allow Acid Splash as a ranged basic attack?',
			blocks: [
				{
					type: 'paragraph',
					content:
						'Yes. Acid Splash is already homebrew, so a DM can change the conversion for a particular campaign and add permission for it to function as a ranged basic attack.'
				},
				{
					type: 'paragraph',
					content:
						'That change should be treated as a balance adjustment rather than as clarification of the default power. Ranged-basic-attack status can matter frequently because it creates interactions with effects that grant attacks outside the normal use of the power.'
				},
				{
					type: 'paragraph',
					content:
						'For consistency, D&D Portal leaves the feature off the standard conversion. If a table adds it, that version should be recorded as a campaign house rule so players know they are using a modified form of the Portal power.'
				}
			]
		}
	]
} as const;

export default question;

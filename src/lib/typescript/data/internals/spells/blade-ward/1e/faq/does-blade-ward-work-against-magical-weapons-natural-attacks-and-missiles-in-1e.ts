export const question = {
	slug: 'does-blade-ward-work-against-magical-weapons-natural-attacks-and-missiles-in-1e',
	question: 'Does Blade Ward work against magical weapons, natural attacks, and missiles in AD&D 1e?',
	shortAnswer:
		'Yes. Blade Ward applies broadly to direct physical attacks, including mundane and magical weapons, missile weapons, thrown weapons, unarmed attacks, and natural attacks such as claws or bites. Each qualifying physical damage die is reduced by 1, to a minimum of 1 per die. Extra magical energy or separate secondary effects are resolved normally.',
	introduction:
		'The 1e conversion does not rely on a later formal category such as “weapon attack.” Instead, it asks whether the caster is being struck by a direct physical attack.\n\nThat gives the spell a clear boundary while still covering the broad range of melee and missile attacks found in AD&D 1e.',
	sections: [
		{
			id: 'magical-weapons',
			title: 'Magical Weapons Qualify',
			blocks: [
				{ type: 'paragraph', content: 'A +1 sword, +3 axe, enchanted arrow, or other magical weapon remains a physical attack.' },
				{ type: 'paragraph', content: 'Blade Ward therefore reduces the qualifying physical damage dice normally.' },
				{ type: 'paragraph', content: 'The magical enhancement bonus itself is a flat modifier and is not reduced.' }
			]
		},
		{
			id: 'missiles',
			title: 'Missile and Thrown Weapons Qualify',
			blocks: [
				{ type: 'paragraph', content: 'Arrows, bolts, sling stones, thrown spears, axes, and similar physical projectiles can all be reduced by the ward.' },
				{ type: 'paragraph', content: 'The spell does not grant total immunity to missiles.' },
				{ type: 'paragraph', content: 'It only subtracts 1 from each qualifying physical damage die.' }
			]
		},
		{
			id: 'natural-attacks',
			title: 'Natural Attacks Qualify',
			blocks: [
				{ type: 'paragraph', content: 'Claws, bites, horns, tail strikes, and similar direct physical monster attacks are also within the ward’s intended protection.' },
				{ type: 'paragraph', content: 'The attacker does not need to be holding a manufactured weapon.' },
				{ type: 'paragraph', content: 'A giant-thrown rock or other large physical projectile can qualify for the same reason.' }
			]
		},
		{
			id: 'secondary-effects',
			title: 'Secondary Effects Are Separate',
			blocks: [
				{ type: 'paragraph', content: 'A physical attack can carry poison, paralysis, energy damage, or another special effect.' },
				{ type: 'paragraph', content: 'Blade Ward reduces only the qualifying physical damage dice.' },
				{ type: 'paragraph', content: 'The poison, energy, or other secondary effect is resolved normally unless another rule says otherwise.' }
			]
		}
	]
} as const;

export default question;

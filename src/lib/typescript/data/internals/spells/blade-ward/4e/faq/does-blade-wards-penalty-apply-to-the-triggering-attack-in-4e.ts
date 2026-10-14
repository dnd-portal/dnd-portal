export const question = {
	slug: 'does-blade-wards-penalty-apply-to-the-triggering-attack-in-4e',

	question: "Does Blade Ward's penalty apply to the triggering attack in D&D 4e?",

	shortAnswer:
		'Yes. Blade Ward is an Immediate Interrupt, so it resolves before the melee attack that triggered it finishes. The power’s Effect imposes an attack-roll penalty against you equal to your Wisdom modifier until the end of your next turn. Because that Effect is already active before the triggering attack resolves, the triggering attack is subject to the penalty as well.',

	introduction:
		'This interaction depends on 4e timing rather than on the wording of the penalty alone. Immediate Interrupts insert themselves before the triggering action finishes resolving, which means an interrupt can change the circumstances of the very action that caused it.\n\nBlade Ward uses that timing defensively: you counterattack first, then the attacker continues resolving its melee attack while already affected by the ward.',

	sections: [
		{
			id: 'immediate-interrupt-resolves-first',
			title: 'The Immediate Interrupt Resolves First',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward triggers when a creature makes a melee attack against you, but the power does not wait for that attack to finish.' },
				{ type: 'paragraph', content: 'As an Immediate Interrupt, Blade Ward resolves before the triggering attack completes. Your counterattack and the power’s Effect are therefore established before the enemy finishes resolving its melee attack.' },
				{ type: 'paragraph', content: 'This is the defining difference between an Immediate Interrupt and an Immediate Reaction. A reaction would happen after the trigger resolves, while an interrupt happens before it finishes.' }
			]
		},
		{
			id: 'the-penalty-is-already-active',
			title: 'The Penalty Is Already Active',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward’s Effect gives the triggering creature a penalty to attack rolls against you equal to your Wisdom modifier.' },
				{ type: 'paragraph', content: 'That Effect is created as part of Blade Ward’s resolution, so it exists by the time the triggering melee attack resumes.' },
				{ type: 'paragraph', content: 'The triggering attack is therefore one of the attack rolls against you that the penalty can modify.' }
			]
		},
		{
			id: 'later-attacks-are-also-penalized',
			title: 'Later Attacks Are Also Penalized',
			blocks: [
				{ type: 'paragraph', content: 'The Effect does not end after the triggering attack. It lasts until the end of your next turn.' },
				{ type: 'paragraph', content: 'If the same creature makes additional attacks against you during that period, those attack rolls also take the Wisdom-based penalty.' },
				{ type: 'paragraph', content: 'Attacks that creature makes against someone else are not penalized by Blade Ward because the Effect is specifically limited to its attacks against you.' }
			]
		},
		{
			id: 'the-interrupt-can-change-the-trigger',
			title: 'Interrupts Can Change Their Trigger',
			blocks: [
				{ type: 'paragraph', content: 'A core feature of 4e Immediate Interrupt timing is that the interrupt can alter the situation before the triggering action finishes.' },
				{ type: 'paragraph', content: 'Some interrupts can even make the triggering action invalid. Blade Ward normally does not cancel the attack outright, but it changes the attack by imposing a penalty before resolution.' },
				{ type: 'paragraph', content: 'That timing is why the power provides immediate defensive value rather than only weakening attacks made later in the encounter.' }
			]
		}
	]
} as const;

export default question;

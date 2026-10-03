export const question = {
	slug: 'can-acid-splash-target-objects-in-5e',

	question: 'Can Acid Splash target objects in D&D 5e?',

	shortAnswer:
		'No, not under the normal D&D 5e (2014) spell rules. Acid Splash tells the caster to choose one or two creatures, so an object such as a door, lock, rope, weapon, chest, or wall is not a valid direct target of the spell. The fact that Acid Splash deals acid damage does not independently expand its targeting rules. A DM can always allow a situational interaction as a house ruling, but that is different from the spell’s written targeting.',

	introduction:
		'Acid damage naturally suggests uses such as dissolving a lock or damaging a door, which makes object targeting one of the most common practical questions around Acid Splash. In 2014 5e, however, a spell’s damage type and its list of valid targets are separate rules.\n\nAcid Splash specifically selects creatures. That is noticeably different from spells such as Fire Bolt, which explicitly allow a creature or an object to be targeted. The wording difference determines what the spell can target directly.',

	sections: [
		{
			id: 'acid-splash-targets-creatures',
			title: 'Acid Splash specifically targets creatures',
			blocks: [
				{ type: 'paragraph', content: 'The 2014 Acid Splash spell instructs the caster to choose one or two creatures. That language defines the legal targets for the spell.' },
				{ type: 'paragraph', content: 'An unattended object is not a creature, so it does not satisfy that requirement. A mundane lock, door, rope, chest, weapon, wall, or similar object therefore cannot be selected as an Acid Splash target under the normal rules.' },
				{ type: 'paragraph', content: 'The spell does not contain a separate sentence that allows objects, structures, surfaces, or points in space to be targeted. Without such permission, the creature restriction remains controlling.' }
			]
		},
		{
			id: 'acid-damage-does-not-change-targeting',
			title: 'Dealing acid damage does not change the target rules',
			blocks: [
				{ type: 'paragraph', content: 'Acid is a damage type, not a general permission to affect every material that real-world acid might corrode. The spell still resolves according to its own target restrictions.' },
				{ type: 'paragraph', content: 'This means the caster cannot bypass the creature requirement by arguing that an object would logically be vulnerable to acid. The damage type only matters after the spell has a valid target and its saving throw has been resolved.' },
				{ type: 'paragraph', content: 'Other rules can explicitly allow acid to damage objects. For example, the mundane acid item in the 2014 equipment rules can be used in an attack against a creature or object. That item rule does not alter Acid Splash.' }
			]
		},
		{
			id: 'fire-bolt-shows-the-wording-difference',
			title: 'Fire Bolt shows why the wording matters',
			blocks: [
				{ type: 'paragraph', content: 'Fire Bolt is a useful comparison because its 2014 spell text explicitly allows the caster to attack a creature or object. It also includes an additional rule for igniting certain flammable objects.' },
				{ type: 'paragraph', content: 'Acid Splash lacks both kinds of object language. This is evidence that object targeting is not something every damaging cantrip receives automatically.' },
				{ type: 'paragraph', content: 'When two spells use different target wording, the difference matters even if both spells deal elemental damage. A general expectation about what acid or fire should do does not replace the actual target entry of the spell.' }
			]
		},
		{
			id: 'what-about-held-or-worn-objects',
			title: 'What about held or worn objects?',
			blocks: [
				{ type: 'paragraph', content: 'A sword held by a creature, armor worn by a creature, or a pouch carried by a creature is still an object rather than a separate creature target. Acid Splash does not gain permission to target the item merely because a valid creature is carrying it.' },
				{ type: 'paragraph', content: 'Targeting the creature also does not automatically transfer the spell’s damage to everything the creature is wearing or carrying. The failed Dexterity save deals the spell’s acid damage to the targeted creature.' },
				{ type: 'paragraph', content: 'A specific monster trait, magic item rule, spell, or environmental rule could create an additional interaction, but that would come from that separate rule rather than from Acid Splash itself.' }
			]
		},
		{
			id: 'a-dm-can-allow-environmental-interactions',
			title: 'A DM can still allow environmental interactions',
			blocks: [
				{ type: 'paragraph', content: 'The restriction above describes the written spell mechanics. A DM is still free to decide that magical acid has a reasonable environmental effect in a particular scene.' },
				{ type: 'paragraph', content: 'For example, a DM might allow a creative use involving fragile material, an unusual hazard, or a narrative object. Such a ruling can be useful without changing the default spell entry for every future casting.' },
				{ type: 'paragraph', content: 'D&D Portal should distinguish those table rulings from the base rule. The canonical 2014 spell targets creatures; any broader object interaction is a DM adjudication or house rule unless another specific rule grants it.' }
			]
		}
	]
} as const;

export default question;

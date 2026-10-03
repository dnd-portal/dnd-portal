export const question = {
	slug: 'can-sculpt-spells-protect-creatures-from-acid-splash-in-5-5e',

	question: 'Can Sculpt Spells protect creatures from Acid Splash in D&D 5.5e?',

	shortAnswer:
		'Yes, when Acid Splash is cast as a Wizard Evocation and the 2024 Evoker’s Sculpt Spells feature applies. Acid Splash is an Evocation cantrip, so its spell level is 0. Sculpt Spells lets the Wizard choose a number of visible affected creatures equal to 1 plus the spell’s level, which means one creature for Acid Splash. That creature automatically succeeds on the Dexterity saving throw and therefore takes no Acid Splash damage.',

	introduction:
		'This interaction is specific to the 2024 redesign. Acid Splash changed from Conjuration in the 2014 rules to Evocation in the 2024 rules, bringing it into the school required by Sculpt Spells.\n\nBecause Acid Splash is also now an area spell that can catch allies, Sculpt Spells has a practical reason to matter: an Evoker can protect a limited number of creatures from the acid burst.',

	sections: [
		{
			id: 'acid-splash-is-now-evocation',
			title: 'The 2024 Acid Splash is an Evocation spell',
			blocks: [
				{ type: 'paragraph', content: 'Sculpt Spells applies when the Wizard casts an Evocation spell that affects other creatures the Wizard can see. The 2024 Acid Splash satisfies the school requirement because it is now classified as Evocation.' },
				{ type: 'paragraph', content: 'This is different from the 2014 Acid Splash, which was a Conjuration cantrip. The old school classification prevented the normal Sculpt Spells feature from applying to it.' },
				{ type: 'paragraph', content: 'The school change therefore creates a real mechanical interaction rather than being only a change in how the spell is categorized on the page.' }
			]
		},
		{
			id: 'a-cantrip-is-level-zero',
			title: 'Acid Splash counts as a level 0 spell',
			blocks: [
				{ type: 'paragraph', content: 'Sculpt Spells determines the number of protected creatures as 1 plus the spell’s level. Cantrips are level 0 spells in the 2024 rules.' },
				{ type: 'paragraph', content: 'For Acid Splash, the calculation is therefore 1 + 0. The Wizard can choose one eligible creature affected by the spell.' },
				{ type: 'paragraph', content: 'The Cantrip Upgrade at character levels 5, 11, and 17 changes Acid Splash’s damage dice but does not change its spell level. It remains a level 0 spell and Sculpt Spells still protects one creature.' }
			]
		},
		{
			id: 'the-protected-creature-automatically-succeeds',
			title: 'The protected creature automatically succeeds on the save',
			blocks: [
				{ type: 'paragraph', content: 'A creature chosen through Sculpt Spells automatically succeeds on its saving throw against the Evocation spell.' },
				{ type: 'paragraph', content: 'Acid Splash deals damage only when the Dexterity saving throw fails. A successful saving throw against the base spell causes no damage.' },
				{ type: 'paragraph', content: 'The protected creature therefore takes no Acid Splash damage. The additional Sculpt Spells rule about taking no damage when a successful save would normally deal half is not needed for Acid Splash because the spell already deals zero damage on success.' }
			]
		},
		{
			id: 'the-wizard-must-be-able-to-see-the-creature',
			title: 'Sculpt Spells has its own visibility requirement',
			blocks: [
				{ type: 'paragraph', content: 'Acid Splash itself does not explicitly require the caster to see the point of origin, but Sculpt Spells has its own requirement concerning the creatures the Wizard protects.' },
				{ type: 'paragraph', content: 'The Wizard can choose affected creatures that the Wizard can see. An ally who is inside Acid Splash but cannot be seen by the Wizard cannot be selected for Sculpt Spells through that feature’s normal wording.' },
				{ type: 'paragraph', content: 'This is a useful example of why spell targeting rules and class-feature targeting rules must be evaluated separately. Acid Splash and Sculpt Spells each contribute their own requirements to the combined interaction.' }
			]
		},
		{
			id: 'sculpt-spells-does-not-remove-the-creature-from-the-area',
			title: 'Sculpt Spells does not remove the creature from the Sphere',
			blocks: [
				{ type: 'paragraph', content: 'The protected creature is still inside Acid Splash’s area of effect. Sculpt Spells changes the saving-throw result rather than physically creating an empty hole in the Sphere for every game purpose.' },
				{ type: 'paragraph', content: 'For Acid Splash, that distinction rarely changes the immediate outcome because the spell’s only normal effect is acid damage based on the Dexterity save.' },
				{ type: 'paragraph', content: 'For other Evocation spells with additional effects, the exact Sculpt Spells wording can matter more. D&D Portal should therefore describe the feature as automatic saving-throw protection rather than saying the selected creature was never affected by the area at all.' }
			]
		}
	]
} as const;

export default question;

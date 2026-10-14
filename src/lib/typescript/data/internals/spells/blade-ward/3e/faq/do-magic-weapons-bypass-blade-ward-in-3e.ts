export const question = {
	slug: 'do-magic-weapons-bypass-blade-ward-in-3e',
	question: 'Do magic weapons bypass Blade Ward in D&D 3e?',
	shortAnswer:
		'No, not merely because they are magical. The Portal Conversion grants DR 1/—, so it has no +1, +2, or other weapon-enhancement threshold listed as a bypass. A mundane weapon and a magic weapon are both reduced by 1 when the normal Damage Reduction rules apply. Specific effects that ignore DR still follow their own rules.',
	introduction:
		'This question is particularly important in D&D 3e because the edition commonly expresses Damage Reduction with weapon-enhancement thresholds. A creature might have DR 10/+1, meaning a sufficiently enhanced weapon can bypass the reduction.\n\nBlade Ward intentionally uses different notation: DR 1/—.',
	sections: [
		{
			id: 'enhancement-threshold-dr',
			title: '3e Commonly Uses Enhancement Thresholds',
			blocks: [
				{ type: 'paragraph', content: 'Many 3e forms of Damage Reduction use entries such as +1, +2, or higher after the slash.' },
				{ type: 'paragraph', content: 'Those entries tell you what level of weapon enhancement is required to bypass that particular DR.' },
				{ type: 'paragraph', content: 'A weapon that meets the threshold can ignore that reduction even though a mundane weapon cannot.' }
			]
		},
		{
			id: 'blade-ward-has-no-threshold',
			title: 'Blade Ward Has No Enhancement Threshold',
			blocks: [
				{ type: 'paragraph', content: 'Blade Ward is written as DR 1/— rather than DR 1/+1.' },
				{ type: 'paragraph', content: 'The dash means the spell does not designate a normal weapon enhancement bonus as its bypass condition.' },
				{ type: 'paragraph', content: 'A +1, +2, or more highly enhanced weapon therefore does not automatically defeat the ward.' }
			]
		},
		{
			id: 'magic-can-still-add-unprotected-damage',
			title: 'Magic Weapons Can Still Deal Unprotected Damage',
			blocks: [
				{ type: 'paragraph', content: 'A magical weapon may deal extra energy damage in addition to its ordinary physical weapon damage.' },
				{ type: 'paragraph', content: 'Blade Ward can reduce the physical portion by 1 while leaving fire, cold, electricity, acid, sonic, or other energy damage unaffected under the normal DR rules.' },
				{ type: 'paragraph', content: 'The fact that the weapon itself does not bypass DR 1/— does not turn Blade Ward into resistance against every magical property attached to that weapon.' }
			]
		},
		{
			id: 'specific-effects-still-win',
			title: 'Specific Effects Can Still Ignore DR',
			blocks: [
				{ type: 'paragraph', content: 'DR 1/— means no normal weapon enhancement threshold is the bypass; it does not mean nothing in the game can ever ignore the reduction.' },
				{ type: 'paragraph', content: 'Spells, supernatural effects, energy damage, or other rules that bypass or ignore ordinary Damage Reduction remain governed by their own mechanics.' },
				{ type: 'paragraph', content: 'Blade Ward adds no exception to those general rules.' }
			]
		}
	]
} as const;

export default question;

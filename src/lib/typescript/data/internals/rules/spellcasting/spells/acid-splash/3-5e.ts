import type {
	InlineContent,
	InlineContentNode,
	PageContentBlock
} from '$lib/typescript/pages/content-types';
import type { NewSpell } from '../spell-types';
import { acidSplashFaq } from './faq/_index_';
import {
	combatLinks,
	damageTypeLinks,
	equipmentLinks,
	spellcastingLinks
} from '../../../../classes/barbarian/page';

const text = (value: string): InlineContentNode => ({ type: 'text', text: value });
const paragraph = (content: InlineContent): PageContentBlock => ({ type: 'paragraph', content });
const plainParagraph = (value: string): PageContentBlock => paragraph([text(value)]);
const textOnly = (node: InlineContentNode & { readonly type: 'link' }): InlineContentNode => ({ ...node, showIcon: false });
const sorcerer = { type: 'link', path: 'internals.classes.sorcerer.page', label: 'Sorcerer' } as const;
const wizard = { type: 'link', path: 'internals.classes.wizard.page', label: 'Wizard' } as const;

const spell = {
	id: 'acid-splash',
	edition: '3-5e',
	source: 'phb-3-5e',
	name: 'Acid Splash',
	level: 0,
	school: 'Conjuration',
	subschool: 'Creation',
	descriptors: ['Acid'],
	castingTime: { value: 1, unit: 'standard-action' },
	range: { type: 'close', base: 25, scaling: { distance: 5, perCasterLevels: 2 }, unit: 'feet' },
	effect: 'One missile of acid',
	duration: { type: 'instantaneous' },
	components: { verbal: true, somatic: true, material: false },
	savingThrow: { allowed: false },
	spellResistance: false,
	spellLists: [{ class: 'Sorcerer', level: 0 }, { class: 'Wizard', level: 0 }],
	attack: { type: 'ranged-touch' },
	damage: { dice: '1d3', type: 'acid' },
	content: [paragraph([
		text('You conjure a small amount of magical '), damageTypeLinks.acid,
		text(' and launch it toward a target within range. Make a ranged touch attack against the target. On a successful hit, the target takes 1d3 '), textOnly(damageTypeLinks.acid),
		text(' damage. The acid exists only as part of the instantaneous magical effect unless another rule specifically causes a lasting result.')
	])],
	summary: [
		text('Acid Splash is a simple ranged cantrip that creates a small missile of '),
		damageTypeLinks.acid,
		text('. It requires a ranged touch attack, deals '),
		{ type: 'link', path: 'internals.utility.diceRoller', label: '1d3', query: '?d=1d3' },
		text(' acid damage on a hit, allows no saving throw, and is not affected by spell resistance.')
	],
	sections: [
		{
			id: 'how-acid-splash-works', title: 'How Acid Splash Works', blocks: [
				plainParagraph('Acid Splash is a 0-level Conjuration spell with the Creation subschool and the Acid descriptor. Casting it takes one standard action and requires both verbal and somatic components. The spell creates a single missile of magical acid that is directed at a target within range.'),
				plainParagraph('The spell is resolved with a ranged touch attack rather than a saving throw. If the attack succeeds, the target takes 1d3 acid damage. A failed attack deals no damage. Acid Splash is instantaneous, so the spell does not create an ongoing damaging effect after the attack has been resolved.'),
				plainParagraph('Spell resistance does not apply to Acid Splash. This means the spell can affect a creature with spell resistance without requiring a caster level check to overcome that resistance, although the ranged touch attack still has to hit.')
			]
		},
		{
			id: 'range-and-targeting', title: 'Range and Targeting', blocks: [
				plainParagraph('Acid Splash uses the Close range category. Its range begins at 25 feet and increases by 5 feet for every two caster levels. A 1st-level caster therefore has a range of 25 feet, while increasing caster level gradually extends the distance from which the spell can be used.'),
				paragraph([text('Because Acid Splash uses a ranged touch attack, the attack is made against the target\'s touch '), combatLinks.armorClass, text(' rather than its normal '), textOnly(combatLinks.armorClass), text('. Protection that depends on armor, '), textOnly(equipmentLinks.shield), text('s, or natural armor is therefore less useful against the attack, while bonuses that still apply to touch AC continue to matter.')]),
				plainParagraph('The spell creates only one missile and resolves only one attack. It does not create an area of effect and does not splash damage onto nearby creatures. Normal rules for ranged attacks, line of effect, cover, concealment, and spellcasting in combat still apply where relevant.')
			]
		},
		{
			id: 'damage-and-combat-use', title: 'Damage and Combat Use', blocks: [
				paragraph([text('On a successful hit, Acid Splash deals 1d3 points of '), damageTypeLinks.acid, text(' damage. The damage does not automatically increase with caster level. Higher caster level improves the spell\'s Close range, but the base damage remains 1d3 unless another rule, feat, class feature, or effect modifies it.')]),
				paragraph([text('Its damage is small, but the combination of a ranged touch attack, no saving throw, and no spell resistance gives Acid Splash a distinct role. It can be useful when a target has a high normal '), combatLinks.armorClass, text(' but a substantially lower touch AC, or when spell resistance would make another offensive spell less reliable.')]),
				paragraph([text('Because Acid Splash requires an attack roll and deals damage, it can interact with general rules that apply to damaging spell attacks. For example, attack-roll spells can score '), combatLinks.criticalHit, text(' under the normal critical-hit rules.')]),
				paragraph([text('Acid damage can also interact with objects under the normal object-damage rules. That does not mean Acid Splash automatically melts doors, locks, weapons, or other objects. Hardness and '), textOnly(combatLinks.hitPoints), text(' still matter, and the spell\'s 1d3 damage is often too low to damage sturdy materials.')])
			]
		},
		{
			id: 'class-availability', title: 'Class Availability', blocks: [
				paragraph([text('Acid Splash appears on both the '), sorcerer, text(' and '), wizard, text(' spell lists as a 0-level spell. For both classes, it functions as a low-level offensive option that does not require a higher-level spell slot.')]),
				paragraph([text('Sorcerers use Acid Splash through their normal spells-known and '), textOnly(spellcastingLinks.spells), text(' rules, while Wizards use it through the Wizard spellbook and spell preparation system. The spell itself does not behave differently depending on which of the two classes casts it.')]),
				plainParagraph('Other classes, prestige classes, feats, magic items, or campaign options may provide access to Acid Splash separately. Those forms of access do not change the spell\'s base rules unless the feature granting access explicitly says otherwise.')
			]
		}
	],
	faq: acidSplashFaq.map(({ slug }) => slug)
} as const satisfies NewSpell;

export default spell;

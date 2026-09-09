import * as core from '$lib/typescript/data/core/_index_';
import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';
import type {
	CoreTraitsData,
	InlineContent,
	PageContentBlock,
	PageContentSection,
	ProgressionData
} from '$lib/typescript/pages/content-types';


import * as page from '../../page';

export const features = [
    page.featureSection('battlerager-restriction', 'Restriction: Dwarves Only', [
        page.textParagraph('This path is normally limited to dwarves, though a DM can lift that restriction to fit the campaign.')
    ]),
    page.featureSection('battlerager-armor', 'Battlerager Armor', [
        page.paragraph([
            { type: 'text', text: 'Spiked armor becomes part of your fighting style. While raging in it, you can make a spiked-armor ' },
            page.combatLinks.meleeWeaponAttack,
            { type: 'text', text: ' as a ' },
            page.actionLinks.bonusAction,
            { type: 'text', text: '.' }
        ]),
        page.paragraph([
            { type: 'text', text: 'The armor can also deal ' },
            page.damageTypeLinks.piercing,
            { type: 'text', text: ' damage when you successfully grapple a creature.' }
        ])
    ]),
    page.featureSection('reckless-abandon', 'Reckless Abandon', [
        page.paragraph([
            { type: 'text', text: 'When you use Reckless Attack while raging, you gain temporary ' },
            page.combatLinks.hitPoints,
            { type: 'text', text: ' based on your ' },
            page.abilityScoreLinks.constitution,
            { type: 'text', text: ' modifier.' }
        ])
    ]),
    page.featureSection('battlerager-charge', 'Battlerager Charge', [
        page.paragraph([
            { type: 'text', text: 'While raging, you can ' },
            page.actionLinks.dash,
            { type: 'text', text: ' as a ' },
            page.actionLinks.bonusAction,
            { type: 'text', text: '.' }
        ])
    ]),
    page.featureSection('spiked-retribution', 'Spiked Retribution', [
        page.paragraph([
            { type: 'text', text: 'When a nearby creature hits you with a ' },
            page.combatLinks.meleeAttack,
            { type: 'text', text: ', your spiked armor deals ' },
            page.damageTypeLinks.piercing,
            { type: 'text', text: ' damage back if you are raging and not ' },
            page.conditionLinks.incapacitated,
            { type: 'text', text: '.' }
        ])
    ])
];

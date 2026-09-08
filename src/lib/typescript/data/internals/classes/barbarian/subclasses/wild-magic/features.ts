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
    page.featureSection('magic-awareness', 'Magic Awareness', [
        page.paragraph([
            { type: 'text', text: 'As an action, you can sense nearby ' },
            page.spellcastingLinks.spells,
            { type: 'text', text: ' and magic items that are not hidden behind total cover.' }
        ]),
        page.paragraph([
            { type: 'text', text: 'Uses refresh after a ' },
            page.restLinks.longRest,
            { type: 'text', text: '.' }
        ])
    ]),
    page.featureSection('wild-surge', 'Wild Surge', [
        page.paragraph([
            { type: 'text', text: 'When you rage, you roll for a magical surge. Some results call for a ' },
            page.d20TestLinks.savingThrow,
            { type: 'text', text: ' against a DC based on your ' },
            page.abilityScoreLinks.constitution,
            { type: 'text', text: ' modifier.' }
        ]),
        page.textParagraph('The surge table can teleport you, harm enemies, protect allies, alter nearby terrain, or add temporary magical effects to your attacks.')
    ]),
    page.featureSection('bolstering-magic', 'Bolstering Magic', [
        page.paragraph([
            { type: 'text', text: 'As an action, you can touch a creature to improve an ' },
            page.combatLinks.attackRolls,
            { type: 'text', text: ' or ability check, or help restore a spell slot.' }
        ])
    ]),
    page.featureSection('unstable-backlash', 'Unstable Backlash', [
        page.paragraph([
            { type: 'text', text: 'While raging, taking damage or failing a ' },
            page.d20TestLinks.savingThrow,
            { type: 'text', text: ' lets you use your ' },
            page.actionLinks.reaction,
            { type: 'text', text: ' to roll a new Wild Surge effect.' }
        ])
    ]),
    page.featureSection('controlled-surge', 'Controlled Surge', [
        page.textParagraph('When rolling on the Wild Surge table, you can roll twice and choose the result, with duplicate rolls letting you choose any effect.')
    ])
];

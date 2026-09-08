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
    page.featureSection('divine-fury', 'Divine Fury', [
        page.paragraph([
            { type: 'text', text: 'While raging, the first creature you hit on each turn with a weapon attack takes extra ' },
            page.damageTypeLinks.necrotic,
            { type: 'text', text: ' or ' },
            page.damageTypeLinks.radiant,
            { type: 'text', text: ' damage.' }
        ])
    ]),
    page.featureSection('warrior-of-the-gods', 'Warrior of the Gods', [
        page.textParagraph('Magic that restores you to life can ignore the material component cost.')
    ]),
    page.featureSection('fanatical-focus', 'Fanatical Focus', [
        page.paragraph([
            { type: 'text', text: 'Once during each rage, you can reroll a failed ' },
            page.d20TestLinks.savingThrow,
            { type: 'text', text: ' and must use the new result.' }
        ])
    ]),
    page.featureSection('zealous-presence', 'Zealous Presence', [
        page.paragraph([
            { type: 'text', text: 'As a ' },
            page.actionLinks.bonusAction,
            { type: 'text', text: ', you can inspire nearby creatures and give them advantage on ' },
            page.combatLinks.attackRolls,
            { type: 'text', text: ' and ' },
            page.d20TestLinks.savingThrows,
            { type: 'text', text: ' until your next turn.' }
        ]),
        page.paragraph([
            { type: 'text', text: 'The use refreshes after a ' },
            page.restLinks.longRest,
            { type: 'text', text: '.' }
        ])
    ]),
    page.featureSection('rage-beyond-death', 'Rage Beyond Death', [
        page.paragraph([
            { type: 'text', text: 'While raging, dropping to 0 ' },
            page.combatLinks.hitPoints,
            { type: 'text', text: ' does not immediately make you ' },
            page.conditionLinks.unconscious,
            { type: 'text', text: '.' }
        ]),
        page.textParagraph('You still track death saves, and if your rage ends while you are still at 0 hit points, the accumulated results can still kill you.')
    ])
];

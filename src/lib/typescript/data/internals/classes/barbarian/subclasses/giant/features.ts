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
    page.featureSection('giants-power', "Giant's Power", [
        page.textParagraph('You learn the Giant language or another language if you already know it, and you gain a primal cantrip tied to giant magic.'),
        page.paragraph([
            { type: 'text', text: 'Your ' },
            page.abilityScoreLinks.wisdom,
            { type: 'text', text: ' is the spellcasting ability for that cantrip.' }
        ])
    ]),
    page.featureSection('giants-havoc', "Giant's Havoc", [
        page.paragraph([
            { type: 'text', text: 'While raging, your thrown weapon attacks can use your ' },
            page.abilityScoreLinks.strength,
            { type: 'text', text: ' and add your Rage Damage, and your reach increases as your body grows larger.' }
        ])
    ]),
    page.featureSection('elemental-cleaver', 'Elemental Cleaver', [
        page.paragraph([
            { type: 'text', text: 'When you rage, you can charge a weapon with ' },
            page.damageTypeLinks.acid,
            { type: 'text', text: ', ' },
            page.damageTypeLinks.cold,
            { type: 'text', text: ', ' },
            page.damageTypeLinks.fire,
            { type: 'text', text: ', ' },
            page.damageTypeLinks.lightning,
            { type: 'text', text: ', or ' },
            page.damageTypeLinks.thunder,
            { type: 'text', text: ' power. It deals extra damage, can be thrown, and returns to your hand after a thrown attack.' }
        ]),
        page.paragraph([
            { type: 'text', text: 'You can later change the selected damage type with a ' },
            page.actionLinks.bonusAction,
            { type: 'text', text: '.' }
        ])
    ]),
    page.featureSection('mighty-impel', 'Mighty Impel', [
        page.paragraph([
            { type: 'text', text: 'As a ' },
            page.actionLinks.bonusAction,
            { type: 'text', text: ', you can move a nearby creature to another space. Unwilling creatures make a ' },
            page.abilityScoreLinks.strength,
            { type: 'text', text: ' ' },
            page.d20TestLinks.savingThrow,
            { type: 'text', text: ' against your feature DC.' }
        ])
    ]),
    page.featureSection('demiurgic-colossus', 'Demiurgic Colossus', [
        page.textParagraph('Your rage makes you larger and extends your reach further, while Mighty Impel and Elemental Cleaver both become stronger.')
    ])
];

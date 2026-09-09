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
    page.featureSection('frenzy', 'Frenzy', [
        page.paragraph([
            { type: 'text', text: 'When you rage, you can enter a frenzy and make a ' },
            page.combatLinks.meleeWeaponAttack,
            { type: 'text', text: ' as a ' },
            page.actionLinks.bonusAction,
            { type: 'text', text: ' on later turns during that rage.' }
        ]),
        page.paragraph([
            { type: 'text', text: 'When the frenzy ends, the strain gives you a level of ' },
            page.conditionLinks.exhaustion,
            { type: 'text', text: '.' }
        ])
    ]),
    page.featureSection('mindless-rage', 'Mindless Rage', [
        page.paragraph([
            { type: 'text', text: 'While raging, you cannot be ' },
            page.conditionLinks.charmed,
            { type: 'text', text: ' or ' },
            page.conditionLinks.frightened,
            { type: 'text', text: ', and either effect is suspended if it was already affecting you.' }
        ])
    ]),
    page.featureSection('intimidating-presence', 'Intimidating Presence', [
        page.paragraph([
            { type: 'text', text: 'You can use your action to frighten a creature that can see or hear you. The save DC uses your ' },
            page.abilityScoreLinks.charisma,
            { type: 'text', text: ' modifier.' }
        ])
    ]),
    page.featureSection('retaliation', 'Retaliation', [
        page.paragraph([
            { type: 'text', text: 'When a creature within 5 feet damages you, you can use your ' },
            page.actionLinks.reaction,
            { type: 'text', text: ' to make a ' },
            page.combatLinks.meleeWeaponAttack,
            { type: 'text', text: ' against it.' }
        ])
    ])
];

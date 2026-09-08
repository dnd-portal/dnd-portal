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
    page.featureSection('storm-aura', 'Storm Aura', [
        page.paragraph([
            { type: 'text', text: 'When you rage, you create a 10-foot storm aura. You can activate its effect when rage begins and again as a ' },
            page.actionLinks.bonusAction,
            { type: 'text', text: '.' }
        ]),
        page.paragraph([
            { type: 'text', text: 'Desert deals ' },
            page.damageTypeLinks.fire,
            { type: 'text', text: ' damage nearby, sea calls ' },
            page.damageTypeLinks.lightning,
            { type: 'text', text: ' with a ' },
            page.abilityScoreLinks.dexterity,
            { type: 'text', text: ' ' },
            page.d20TestLinks.savingThrow,
            { type: 'text', text: ', and tundra grants temporary ' },
            page.combatLinks.hitPoints,
            { type: 'text', text: '.' }
        ])
    ]),
    page.featureSection('storm-soul', 'Storm Soul', [
        page.paragraph([
            { type: 'text', text: 'Your chosen storm environment grants resistance and a practical environmental benefit tied to desert heat, sea travel, or tundra ' },
            page.damageTypeLinks.cold,
            { type: 'text', text: '.' }
        ])
    ]),
    page.featureSection('shielding-storm', 'Shielding Storm', [
        page.textParagraph('Creatures you choose inside your storm aura gain the same damage resistance granted by Storm Soul.')
    ]),
    page.featureSection('raging-storm', 'Raging Storm', [
        page.paragraph([
            { type: 'text', text: 'Your aura gains a stronger retaliatory or control effect while raging, such as damaging attackers, knocking foes ' },
            page.conditionLinks.prone,
            { type: 'text', text: ', or reducing ' },
            page.movementLinks.speed,
            { type: 'text', text: '.' }
        ])
    ])
];

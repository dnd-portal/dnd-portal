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
    page.featureSection('ancestral-protectors', 'Ancestral Protectors', [
        page.paragraph([
            { type: 'text', text: 'While you are raging, the first creature you hit with an ' },
            page.combatLinks.attackRolls,
            { type: 'text', text: ' on your turn becomes the focus of your ancestral spirits until the start of your next turn.' }
        ]),
        page.textParagraph('That creature has a harder time harming anyone except you, and your allies are protected against the damage it deals.')
    ]),
    page.featureSection('spirit-shield', 'Spirit Shield', [
        page.paragraph([
            { type: 'text', text: 'While raging, you can use your ' },
            page.actionLinks.reaction,
            { type: 'text', text: ' to reduce damage taken by a creature you can see within 30 feet.' }
        ]),
        page.textParagraph('The spirit shield becomes stronger as you gain Barbarian levels.')
    ]),
    page.featureSection('consult-the-spirits', 'Consult the Spirits', [
        page.textParagraph('You can call on ancestral spirits to cast divination magic without using a spell slot or material components.'),
        page.paragraph([
            { type: 'text', text: 'Your ' },
            page.abilityScoreLinks.wisdom,
            { type: 'text', text: ' is the spellcasting ability for this feature, and the use refreshes after a ' },
            page.restLinks.shortRest,
            { type: 'text', text: ' or ' },
            page.restLinks.longRest,
            { type: 'text', text: '.' }
        ])
    ]),
    page.featureSection('vengeful-ancestors', 'Vengeful Ancestors', [
        page.paragraph([
            { type: 'text', text: 'When Spirit Shield prevents damage, your ancestral spirits also strike back with ' },
            page.damageTypeLinks.force,
            { type: 'text', text: ' damage equal to the amount prevented.' }
        ])
    ])
];

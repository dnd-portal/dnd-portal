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
    page.featureSection('form-of-the-beast', 'Form of the Beast', [
        page.paragraph([
            { type: 'text', text: 'When you rage, you manifest a natural weapon such as a bite, claws, or tail. It counts as a simple ' },
            page.combatLinks.meleeWeaponAttack,
            { type: 'text', text: ' option for you.' }
        ]),
        page.paragraph([
            { type: 'text', text: 'The forms focus on survival, extra attacks during the ' },
            page.actionLinks.attackAction,
            { type: 'text', text: ', or defensive ' },
            page.actionLinks.reaction,
            { type: 'text', text: ' options that can raise your ' },
            page.combatLinks.armorClass,
            { type: 'text', text: '.' }
        ])
    ]),
    page.featureSection('bestial-soul', 'Bestial Soul', [
        page.paragraph([
            { type: 'text', text: 'Your natural weapons become magical, and after a rest you can choose a bestial adaptation for ' },
            page.movementLinks.swimming,
            { type: 'text', text: ', ' },
            page.movementLinks.climbing,
            { type: 'text', text: ', or ' },
            page.movementLinks.jumping,
            { type: 'text', text: '.' }
        ]),
        page.paragraph([
            { type: 'text', text: 'Some options use your ' },
            page.movementLinks.speed,
            { type: 'text', text: ' or a ' },
            page.abilityScoreLinks.strength,
            { type: 'text', text: ' check to determine how far you can move.' }
        ])
    ]),
    page.featureSection('infectious-fury', 'Infectious Fury', [
        page.paragraph([
            { type: 'text', text: 'When you hit a creature with your natural weapon while raging, you can force a ' },
            page.d20TestLinks.savingThrow,
            { type: 'text', text: ' against a DC based on your ' },
            page.abilityScoreLinks.constitution,
            { type: 'text', text: ' modifier.' }
        ]),
        page.paragraph([
            { type: 'text', text: 'On a failed save, the target either lashes out at another creature or suffers ' },
            page.damageTypeLinks.psychic,
            { type: 'text', text: ' damage.' }
        ])
    ]),
    page.featureSection('call-the-hunt', 'Call the Hunt', [
        page.paragraph([
            { type: 'text', text: 'When you rage, you can empower willing allies nearby. You gain temporary ' },
            page.combatLinks.hitPoints,
            { type: 'text', text: ', and each empowered ally can add extra damage once on its turn.' }
        ])
    ])
];

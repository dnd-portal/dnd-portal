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
    page.featureSection('spirit-seeker', 'Spirit Seeker', [
        page.textParagraph('You gain ritual access to animal-focused magic that helps you sense through or speak with beasts.')
    ]),
    page.featureSection('totem-spirit', 'Totem Spirit', [
        page.paragraph([
            { type: 'text', text: 'When you adopt a totem spirit, your rage gains a persistent benefit such as broad damage resistance, improved movement, longer jumps, or pack support for allied ' },
            page.combatLinks.meleeAttack,
            { type: 'text', text: ' rolls.' }
        ])
    ]),
    page.featureSection('aspect-of-the-beast', 'Aspect of the Beast', [
        page.textParagraph('Your chosen spirit grants a broader exploration benefit tied to carrying, sight, travel pace, skills, tracking, or stealth.')
    ]),
    page.featureSection('spirit-walker', 'Spirit Walker', [
        page.textParagraph('You can commune with the natural world through your totem spirit by casting nature-focused divination magic as a ritual.')
    ]),
    page.featureSection('totemic-attunement', 'Totemic Attunement', [
        page.paragraph([
            { type: 'text', text: 'Your totem bond deepens into a combat feature that can protect allies, grant rage-powered flight, knock enemies ' },
            page.conditionLinks.prone,
            { type: 'text', text: ', or add another ' },
            page.combatLinks.meleeWeaponAttack,
            { type: 'text', text: '.' }
        ])
    ])
];

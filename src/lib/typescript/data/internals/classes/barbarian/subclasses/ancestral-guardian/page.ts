import * as pageData from '../../page';
import { features } from './features';

export const ancestralGuardianImages = {
    female: {
        ...pageData.barbarianImages.female,
        alt: 'An Ancestral Guardian Barbarian subclass fallback portrait.',
        position: 'right top'
    }
} as const;
export const page = pageData.createSubclassPage('ancestralGuardian', `Xanathar's Guide to Everything`, `An Ancestral Guardian fights through protective spirits, pulling
				enemy pressure onto themselves and shielding nearby allies.`, [
    [
        {
            type: 'text',
            text: `Ancestral Guardians turn rage into a bond with the
							warriors, guides, or guardian spirits of their people.`
        }
    ],
    [
        {
            type: 'text',
            text: `Their features mark enemies, reduce incoming harm,
							and eventually let the spirits retaliate when they
							protect someone.`
        }
    ]
], features, ancestralGuardianImages);

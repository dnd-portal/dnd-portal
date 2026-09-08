import * as pageData from '../../page';
import { features } from './features';

export const wildMagicImages = {
    female: {
        ...pageData.barbarianImages.female,
        alt: 'A Wild Magic Barbarian subclass fallback portrait.',
        position: 'right top'
    }
} as const;
export const page = pageData.createSubclassPage('wildMagic', `Tasha's Cauldron of Everything`, `A Wild Magic Barbarian erupts with unpredictable arcane power,
				turning rage into surges, support, and unstable reactions.`, [
    [
        {
            type: 'text',
            text: `Wild Magic Barbarians carry raw magic in their rage,
							releasing strange effects whenever battle pushes that
							power to the surface.`
        }
    ],
    [
        {
            type: 'text',
            text: `The path mixes randomness with support: surges can
							disrupt enemies, empower allies, and eventually become
							easier to guide.`
        }
    ]
], features, wildMagicImages);

import * as pageData from '../../page';
import { features } from './features';

export const beastImages = {
    female: {
        ...pageData.barbarianImages.female,
        alt: 'A Beast Barbarian subclass fallback portrait.',
        position: 'right top'
    }
} as const;
export const page = pageData.createSubclassPage('beast', `Tasha's Cauldron of Everything`, `A Beast Barbarian lets a feral shape surface through rage,
				gaining natural weapons, adaptations, and predatory fury.`, [
    [
        {
            type: 'text',
            text: `The Path of the Beast expresses rage as a physical
							transformation, drawing claws, teeth, tails, and other
							primal traits out of the body.`
        }
    ],
    [
        {
            type: 'text',
            text: `Its features combine flexible natural weapons,
							movement adaptations, psychic pressure, and party-wide
							hunting momentum.`
        }
    ]
], features, beastImages);

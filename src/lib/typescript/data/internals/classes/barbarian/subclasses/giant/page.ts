import * as pageData from '../../page';
import { features } from './features';

export const giantImages = {
    male: {
        ...pageData.barbarianImages.male,
        alt: 'A Giant Barbarian subclass fallback portrait.',
        position: 'right top'
    }
} as const;
export const page = pageData.createSubclassPage('giant', 'Bigby Presents: Glory of the Giants', `A Giant Barbarian grows into enormous battlefield presence,
				throwing weapons, hurling creatures, and channeling elemental force.`, [
    [
        {
            type: 'text',
            text: `Barbarians on the Path of the Giant draw on giant
							magic until rage changes their size, reach, and command
							over the battlefield.`
        }
    ],
    [
        {
            type: 'text',
            text: `The path favors thrown weapons, elemental damage,
							physical repositioning, and becoming too large to
							ignore.`
        }
    ]
], features, giantImages);

import * as pageData from '../../page';
import { features } from './features';

export const battleragerImages = {
    male: {
        ...pageData.barbarianImages.male,
        alt: 'A Battlerager Barbarian subclass fallback portrait.',
        position: 'right top'
    }
} as const;
export const page = pageData.createSubclassPage('battlerager', `Sword Coast Adventurer's Guide`, `A Battlerager throws themselves into brutal armored contact,
				using spiked armor, reckless momentum, and close pressure.`, [
    [
        {
            type: 'text',
            text: `Battleragers are reckless front-line Barbarians who
							make armor part of the attack instead of only defense.`
        }
    ],
    [
        {
            type: 'text',
            text: `The path focuses on spiked armor, grappling pressure,
							temporary hit points, and staying dangerous when
							enemies strike back.`
        }
    ]
], features, battleragerImages);

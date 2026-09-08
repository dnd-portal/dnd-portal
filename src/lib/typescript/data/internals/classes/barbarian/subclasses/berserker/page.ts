import * as pageData from '../../page';
import { features } from './features';

export const berserkerImages = {
    female: {
        ...pageData.barbarianImages.female,
        alt: 'A Berserker Barbarian subclass fallback portrait.',
        position: 'right top'
    }
} as const;
export const page = pageData.createSubclassPage('berserker', `Player's Handbook`, `A Berserker follows a path of unrestrained fury, turning
				rage into relentless close-range aggression and overwhelming
				physical pressure.`, [
    [
        {
            type: 'text',
            text: `Berserkers choose the most direct expression of
							Barbarian rage: more attacks, fewer restraints, and a
							willingness to exhaust the body for immediate force.`
        }
    ],
    [
        {
            type: 'text',
            text: `The subclass is simple, dangerous, and focused on
							staying frightening in melee even when enemies try to
							control or punish it.`
        }
    ]
], features, berserkerImages);

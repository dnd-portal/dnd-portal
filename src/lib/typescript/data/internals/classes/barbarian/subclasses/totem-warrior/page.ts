import * as pageData from '../../page';
import { features } from './features';

export const totemWarriorImages = {
    male: {
        ...pageData.barbarianImages.male,
        alt: 'A Totem Warrior Barbarian subclass fallback portrait.',
        position: 'right top'
    }
} as const;
export const page = pageData.createSubclassPage('totemWarrior', `Player's Handbook`, `A Totem Warrior shapes rage through spirit guides, choosing
				animal aspects for defense, movement, senses, or pack tactics.`, [
    [
        {
            type: 'text',
            text: `Totem Warriors bind their rage to spirit animals,
							choosing different benefits as their connection grows.`
        }
    ],
    [
        {
            type: 'text',
            text: `The subclass is modular: each totem choice changes
							how the Barbarian protects, moves, scouts, or controls
							melee space.`
        }
    ]
], features, totemWarriorImages);

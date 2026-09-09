import * as pageData from '../../page';
import { features } from './features';

export const stormHeraldImages = {
    female: {
        ...pageData.barbarianImages.female,
        alt: 'A Storm Herald Barbarian subclass fallback portrait.',
        position: 'right top'
    }
} as const;
export const page = pageData.createSubclassPage('stormHerald', `Xanathar's Guide to Everything`, `A Storm Herald carries a supernatural aura of desert, sea, or
				tundra, turning rage into weather around the front line.`, [
    [
        {
            type: 'text',
            text: `Storm Heralds manifest rage as an environmental
							aura. Desert heat, sea `
        },
        pageData.damageTypeLinks.lightning,
        {
            type: 'text',
            text: ', or tundra '
        },
        pageData.damageTypeLinks.cold,
        {
            type: 'text',
            text: ' follows them into battle.'
        }
    ],
    [
        {
            type: 'text',
            text: `Their features are built around repeated aura
							pressure, resistance, group protection, and stronger
							control while raging.`
        }
    ]
], features, stormHeraldImages);

import * as pageData from '../../page';
import { features } from './features';

export const zealotImages = {
    male: {
        ...pageData.barbarianImages.male,
        alt: 'A Zealot Barbarian subclass fallback portrait.',
        position: 'right top'
    }
} as const;
export const page = pageData.createSubclassPage('zealot', `Xanathar's Guide to Everything`, `A Zealot channels divine fury through rage, combining
				destructive sacred power with supernatural endurance and an
				almost impossible refusal to remain fallen.`, [
    [
        {
            type: 'text',
            text: `Zealots turn rage into sacred violence, driven by
							divine purpose, fanatical focus, or a power that refuses
							to let them fall easily.`
        }
    ],
    [
        {
            type: 'text',
            text: 'The path adds '
        },
        pageData.damageTypeLinks.radiant,
        {
            type: 'text',
            text: ' or '
        },
        pageData.damageTypeLinks.necrotic,
        {
            type: 'text',
            text: ` force, protects key saves, inspires allies, and lets
							the Barbarian fight on past the point where most
							warriors collapse.`
        }
    ]
], features, zealotImages);

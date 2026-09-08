import { question as q1 } from './how-does-movement-work-in-dnd';
import { question as q2 } from './can-you-split-movement-before-and-after-actions-or-attacks';
import { question as q3 } from './how-does-difficult-terrain-affect-movement';
import { question as q4 } from './how-do-climbing-swimming-crawling-and-jumping-work';
import { question as q5 } from './how-do-prone-creature-spaces-and-flying-movement-work';

export const movementFaq = { slug: 'movement', title: 'Movement', sourcePage: '/rules/movement/', questions: [q1, q2, q3, q4, q5] } as const;

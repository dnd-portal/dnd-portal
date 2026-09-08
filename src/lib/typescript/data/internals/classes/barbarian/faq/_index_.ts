import { question as q1 } from './what-is-barbarian-in-dnd';
import { question as q2 } from './how-to-play-barbarian-in-dnd';
import { question as q3 } from './what-is-the-hit-dice-for-barbarian-in-dnd';
import { question as q4 } from './how-does-rage-work-for-a-barbarian';
import { question as q5 } from './what-ability-scores-are-best-for-a-barbarian';

export const barbarianFaq = { slug: 'barbarian', title: 'Barbarian', sourcePage: '/classes/barbarian/', questions: [q1, q2, q3, q4, q5] } as const;

import { question as q1 } from './what-are-monsters-in-dnd';
import { question as q2 } from './how-do-monster-stat-blocks-work';
import { question as q3 } from './what-is-challenge-rating-in-dnd';
import { question as q4 } from './how-do-you-choose-monsters-for-an-encounter';
import { question as q5 } from './what-do-monster-resistances-and-immunities-mean';

export const monstersFaq = { slug: 'monsters', title: 'Monsters', sourcePage: '/monsters/', questions: [q1, q2, q3, q4, q5] } as const;

import { question as q1 } from './what-is-the-champion-class-in-dnd';
import { question as q2 } from './how-do-you-play-a-champion';
import { question as q3 } from './what-ability-scores-are-best-for-a-champion';
import { question as q4 } from './what-are-the-main-champion-class-features';
import { question as q5 } from './what-subclasses-can-a-champion-choose';

export const championFaq = { slug: 'champion', title: 'Champion', sourcePage: '/classes/champion/', questions: [q1, q2, q3, q4, q5] } as const;

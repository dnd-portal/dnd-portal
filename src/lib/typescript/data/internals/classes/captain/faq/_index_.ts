import { question as q1 } from './what-is-the-captain-class-in-dnd';
import { question as q2 } from './how-do-you-play-a-captain';
import { question as q3 } from './what-ability-scores-are-best-for-a-captain';
import { question as q4 } from './what-are-the-main-captain-class-features';
import { question as q5 } from './what-subclasses-can-a-captain-choose';

export const captainFaq = { slug: 'captain', title: 'Captain', sourcePage: '/classes/captain/', questions: [q1, q2, q3, q4, q5] } as const;

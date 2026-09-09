import { question as q1 } from './what-is-the-scholar-class-in-dnd';
import { question as q2 } from './how-do-you-play-a-scholar';
import { question as q3 } from './what-ability-scores-are-best-for-a-scholar';
import { question as q4 } from './what-are-the-main-scholar-class-features';
import { question as q5 } from './what-subclasses-can-a-scholar-choose';

export const scholarFaq = { slug: 'scholar', title: 'Scholar', sourcePage: '/classes/scholar/', questions: [q1, q2, q3, q4, q5] } as const;

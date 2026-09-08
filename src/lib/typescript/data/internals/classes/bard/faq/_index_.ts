import { question as q1 } from './what-is-a-bard-in-dnd';
import { question as q2 } from './how-do-you-play-a-bard';
import { question as q3 } from './what-ability-scores-are-best-for-a-bard';
import { question as q4 } from './what-are-the-main-bard-class-features';
import { question as q5 } from './what-subclasses-can-a-bard-choose';

export const bardFaq = { slug: 'bard', title: 'Bard', sourcePage: '/classes/bard/', questions: [q1, q2, q3, q4, q5] } as const;

import { question as q1 } from './what-is-a-ranger-in-dnd';
import { question as q2 } from './how-do-you-play-a-ranger';
import { question as q3 } from './what-ability-scores-are-best-for-a-ranger';
import { question as q4 } from './what-are-the-main-ranger-class-features';
import { question as q5 } from './what-subclasses-can-a-ranger-choose';

export const rangerFaq = { slug: 'ranger', title: 'Ranger', sourcePage: '/classes/ranger/', questions: [q1, q2, q3, q4, q5] } as const;

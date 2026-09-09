import { question as q1 } from './what-is-a-monk-in-dnd';
import { question as q2 } from './how-do-you-play-a-monk';
import { question as q3 } from './what-ability-scores-are-best-for-a-monk';
import { question as q4 } from './what-are-the-main-monk-class-features';
import { question as q5 } from './what-subclasses-can-a-monk-choose';

export const monkFaq = { slug: 'monk', title: 'Monk', sourcePage: '/classes/monk/', questions: [q1, q2, q3, q4, q5] } as const;

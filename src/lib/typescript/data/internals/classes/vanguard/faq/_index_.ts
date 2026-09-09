import { question as q1 } from './what-is-a-vanguard-in-dnd';
import { question as q2 } from './how-do-you-play-a-vanguard';
import { question as q3 } from './what-ability-scores-are-best-for-a-vanguard';
import { question as q4 } from './what-are-the-main-vanguard-class-features';
import { question as q5 } from './what-subclasses-can-a-vanguard-choose';

export const vanguardFaq = { slug: 'vanguard', title: 'Vanguard', sourcePage: '/classes/vanguard/', questions: [q1, q2, q3, q4, q5] } as const;

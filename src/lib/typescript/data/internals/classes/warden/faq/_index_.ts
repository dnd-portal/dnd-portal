import { question as q1 } from './what-is-the-warden-class-in-dnd';
import { question as q2 } from './how-do-you-play-a-warden';
import { question as q3 } from './what-ability-scores-are-best-for-a-warden';
import { question as q4 } from './what-are-the-main-warden-class-features';
import { question as q5 } from './what-subclasses-can-a-warden-choose';

export const wardenFaq = { slug: 'warden', title: 'Warden', sourcePage: '/classes/warden/', questions: [q1, q2, q3, q4, q5] } as const;

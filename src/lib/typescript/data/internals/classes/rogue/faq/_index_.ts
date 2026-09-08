import { question as q1 } from './what-is-a-rogue-in-dnd';
import { question as q2 } from './how-do-you-play-a-rogue';
import { question as q3 } from './what-ability-scores-are-best-for-a-rogue';
import { question as q4 } from './what-are-the-main-rogue-class-features';
import { question as q5 } from './what-subclasses-can-a-rogue-choose';

export const rogueFaq = { slug: 'rogue', title: 'Rogue', sourcePage: '/classes/rogue/', questions: [q1, q2, q3, q4, q5] } as const;

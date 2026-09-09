import { question as q1 } from './what-is-a-monster-hunter-in-dnd';
import { question as q2 } from './how-do-you-play-a-monster-hunter';
import { question as q3 } from './what-ability-scores-are-best-for-a-monster-hunter';
import { question as q4 } from './what-are-the-main-monster-hunter-class-features';
import { question as q5 } from './what-subclasses-can-a-monster-hunter-choose';

export const monsterHunterFaq = { slug: 'monster-hunter', title: 'Monster Hunter', sourcePage: '/classes/monster-hunter/', questions: [q1, q2, q3, q4, q5] } as const;

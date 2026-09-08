import { question as q1 } from './what-is-a-warlock-in-dnd';
import { question as q2 } from './how-do-you-play-a-warlock';
import { question as q3 } from './what-ability-scores-are-best-for-a-warlock';
import { question as q4 } from './what-are-the-main-warlock-class-features';
import { question as q5 } from './what-subclasses-can-a-warlock-choose';

export const warlockFaq = { slug: 'warlock', title: 'Warlock', sourcePage: '/classes/warlock/', questions: [q1, q2, q3, q4, q5] } as const;

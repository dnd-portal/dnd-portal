import { question as q1 } from './what-is-a-paladin-in-dnd';
import { question as q2 } from './how-do-you-play-a-paladin';
import { question as q3 } from './what-ability-scores-are-best-for-a-paladin';
import { question as q4 } from './what-are-the-main-paladin-class-features';
import { question as q5 } from './what-subclasses-can-a-paladin-choose';

export const paladinFaq = { slug: 'paladin', title: 'Paladin', sourcePage: '/classes/paladin/', questions: [q1, q2, q3, q4, q5] } as const;

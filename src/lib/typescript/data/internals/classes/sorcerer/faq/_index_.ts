import { question as q1 } from './what-is-a-sorcerer-in-dnd';
import { question as q2 } from './how-do-you-play-a-sorcerer';
import { question as q3 } from './what-ability-scores-are-best-for-a-sorcerer';
import { question as q4 } from './what-are-the-main-sorcerer-class-features';
import { question as q5 } from './what-subclasses-can-a-sorcerer-choose';

export const sorcererFaq = { slug: 'sorcerer', title: 'Sorcerer', sourcePage: '/classes/sorcerer/', questions: [q1, q2, q3, q4, q5] } as const;

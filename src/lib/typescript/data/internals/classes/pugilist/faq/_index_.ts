import { question as q1 } from './what-is-a-pugilist-in-dnd';
import { question as q2 } from './how-do-you-play-a-pugilist';
import { question as q3 } from './what-ability-scores-are-best-for-a-pugilist';
import { question as q4 } from './what-are-the-main-pugilist-class-features';
import { question as q5 } from './what-fight-clubs-can-a-pugilist-choose';

export const pugilistFaq = { slug: 'pugilist', title: 'Pugilist', sourcePage: '/classes/pugilist/', questions: [q1, q2, q3, q4, q5] } as const;

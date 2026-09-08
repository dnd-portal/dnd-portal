import { question as q1 } from './what-is-the-treasure-hunter-class-in-dnd';
import { question as q2 } from './how-do-you-play-a-treasure-hunter';
import { question as q3 } from './what-ability-scores-are-best-for-a-treasure-hunter';
import { question as q4 } from './what-are-the-main-treasure-hunter-class-features';
import { question as q5 } from './what-subclasses-can-a-treasure-hunter-choose';

export const treasureHunterFaq = { slug: 'treasure-hunter', title: 'Treasure Hunter', sourcePage: '/classes/treasure-hunter/', questions: [q1, q2, q3, q4, q5] } as const;

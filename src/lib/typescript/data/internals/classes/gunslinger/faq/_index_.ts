import { question as q1 } from './what-is-a-gunslinger-in-dnd';
import { question as q2 } from './how-do-you-play-a-gunslinger';
import { question as q3 } from './what-ability-scores-are-best-for-a-gunslinger';
import { question as q4 } from './what-are-the-main-gunslinger-class-features';
import { question as q5 } from './what-subclasses-can-a-gunslinger-choose';

export const gunslingerFaq = { slug: 'gunslinger', title: 'Gunslinger', sourcePage: '/classes/gunslinger/', questions: [q1, q2, q3, q4, q5] } as const;

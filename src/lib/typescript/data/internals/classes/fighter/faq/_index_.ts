import { question as q1 } from './what-is-a-fighter-in-dnd';
import { question as q2 } from './how-do-you-play-a-fighter';
import { question as q3 } from './what-ability-scores-are-best-for-a-fighter';
import { question as q4 } from './what-are-the-main-fighter-class-features';
import { question as q5 } from './what-subclasses-can-a-fighter-choose';

export const fighterFaq = { slug: 'fighter', title: 'Fighter', sourcePage: '/classes/fighter/', questions: [q1, q2, q3, q4, q5] } as const;

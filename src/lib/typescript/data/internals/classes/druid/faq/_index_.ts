import { question as q1 } from './what-is-a-druid-in-dnd';
import { question as q2 } from './how-do-you-play-a-druid';
import { question as q3 } from './what-ability-scores-are-best-for-a-druid';
import { question as q4 } from './what-are-the-main-druid-class-features';
import { question as q5 } from './what-subclasses-can-a-druid-choose';

export const druidFaq = { slug: 'druid', title: 'Druid', sourcePage: '/classes/druid/', questions: [q1, q2, q3, q4, q5] } as const;

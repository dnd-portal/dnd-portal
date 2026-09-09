import { question as q1 } from './what-is-an-artificer-in-dnd';
import { question as q2 } from './how-do-you-play-an-artificer';
import { question as q3 } from './what-ability-scores-are-best-for-an-artificer';
import { question as q4 } from './what-are-the-main-artificer-class-features';
import { question as q5 } from './what-subclasses-can-an-artificer-choose';

export const artificerFaq = { slug: 'artificer', title: 'Artificer', sourcePage: '/classes/artificer/', questions: [q1, q2, q3, q4, q5] } as const;

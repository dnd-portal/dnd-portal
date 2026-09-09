import { question as q1 } from './what-is-a-blood-hunter-in-dnd';
import { question as q2 } from './how-do-you-play-a-blood-hunter';
import { question as q3 } from './what-ability-scores-are-best-for-a-blood-hunter';
import { question as q4 } from './what-are-the-main-blood-hunter-class-features';
import { question as q5 } from './what-subclasses-can-a-blood-hunter-choose';

export const bloodHunterFaq = { slug: 'blood-hunter', title: 'Blood Hunter', sourcePage: '/classes/blood-hunter/', questions: [q1, q2, q3, q4, q5] } as const;

import { question as q1 } from './what-is-the-zealot';
import { question as q2 } from './what-are-the-main-zealot-features';
import { question as q3 } from './how-do-you-build-and-play-a-zealot-barbarian';
import { question as q4 } from './how-does-zealot-interact-with-rage';
import { question as q5 } from './how-does-rage-beyond-death-work';

export const zealotFaq = { slug: 'zealot', title: 'Path of the Zealot', sourcePage: '/classes/barbarian/zealot/', questions: [q1, q2, q3, q4, q5] } as const;

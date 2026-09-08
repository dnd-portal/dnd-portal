import { question as q1 } from './what-is-the-battlerager';
import { question as q2 } from './what-are-the-main-battlerager-features';
import { question as q3 } from './how-do-you-build-and-play-a-battlerager-barbarian';
import { question as q4 } from './how-does-battlerager-interact-with-rage';
import { question as q5 } from './do-you-have-to-be-a-dwarf-to-play-a-battlerager';

export const battleragerFaq = { slug: 'battlerager', title: 'Path of the Battlerager', sourcePage: '/classes/barbarian/battlerager/', questions: [q1, q2, q3, q4, q5] } as const;

import { question as q1 } from './what-is-the-berserker';
import { question as q2 } from './what-are-the-main-berserker-features';
import { question as q3 } from './how-do-you-build-and-play-a-berserker-barbarian';
import { question as q4 } from './how-does-berserker-interact-with-rage';
import { question as q5 } from './how-does-frenzy-and-exhaustion-work-for-a-2014-berserker';

export const berserkerFaq = { slug: 'berserker', title: 'Path of the Berserker', sourcePage: '/classes/barbarian/berserker/', questions: [q1, q2, q3, q4, q5] } as const;

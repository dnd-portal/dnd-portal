import { question as q1 } from './what-is-the-beast';
import { question as q2 } from './what-are-the-main-beast-features';
import { question as q3 } from './how-do-you-build-and-play-a-beast-barbarian';
import { question as q4 } from './how-does-beast-interact-with-rage';
import { question as q5 } from './how-do-the-path-of-the-beast-natural-weapons-work';

export const beastFaq = { slug: 'beast', title: 'Path of the Beast', sourcePage: '/classes/barbarian/beast/', questions: [q1, q2, q3, q4, q5] } as const;

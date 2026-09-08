import { question as q1 } from './what-is-the-storm-herald';
import { question as q2 } from './what-are-the-main-storm-herald-features';
import { question as q3 } from './how-do-you-build-and-play-a-storm-herald-barbarian';
import { question as q4 } from './how-does-storm-herald-interact-with-rage';
import { question as q5 } from './how-does-storm-aura-work';

export const stormHeraldFaq = { slug: 'storm-herald', title: 'Path of the Storm Herald', sourcePage: '/classes/barbarian/storm-herald/', questions: [q1, q2, q3, q4, q5] } as const;

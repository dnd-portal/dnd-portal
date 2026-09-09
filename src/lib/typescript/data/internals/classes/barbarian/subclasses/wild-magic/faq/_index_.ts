import { question as q1 } from './what-is-the-wild-magic';
import { question as q2 } from './what-are-the-main-wild-magic-features';
import { question as q3 } from './how-do-you-build-and-play-a-wild-magic-barbarian';
import { question as q4 } from './how-does-wild-magic-interact-with-rage';
import { question as q5 } from './are-wild-surge-effects-spells-and-can-they-work-while-raging';

export const wildMagicFaq = { slug: 'wild-magic', title: 'Path of Wild Magic', sourcePage: '/classes/barbarian/wild-magic/', questions: [q1, q2, q3, q4, q5] } as const;

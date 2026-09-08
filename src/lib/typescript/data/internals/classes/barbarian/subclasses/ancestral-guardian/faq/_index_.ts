import { question as q1 } from './what-is-the-ancestral-guardian';
import { question as q2 } from './what-are-the-main-ancestral-guardian-features';
import { question as q3 } from './how-do-you-build-and-play-a-ancestral-guardian-barbarian';
import { question as q4 } from './how-does-ancestral-guardian-interact-with-rage';
import { question as q5 } from './how-does-ancestral-protectors-protect-allies';

export const ancestralGuardianFaq = { slug: 'ancestral-guardian', title: 'Path of the Ancestral Guardian', sourcePage: '/classes/barbarian/ancestral-guardian/', questions: [q1, q2, q3, q4, q5] } as const;

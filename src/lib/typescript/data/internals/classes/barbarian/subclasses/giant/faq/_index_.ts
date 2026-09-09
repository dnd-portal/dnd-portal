import { question as q1 } from './what-is-the-giant';
import { question as q2 } from './what-are-the-main-giant-features';
import { question as q3 } from './how-do-you-build-and-play-a-giant-barbarian';
import { question as q4 } from './how-does-giant-interact-with-rage';
import { question as q5 } from './can-mighty-impel-throw-allies-and-enemies';

export const giantFaq = { slug: 'giant', title: 'Path of the Giant', sourcePage: '/classes/barbarian/giant/', questions: [q1, q2, q3, q4, q5] } as const;

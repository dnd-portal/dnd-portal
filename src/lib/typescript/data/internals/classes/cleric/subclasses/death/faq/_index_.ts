import { question as q1 } from './what-is-the-death-domain';
import { question as q2 } from './what-are-the-main-death-domain-features';
import { question as q3 } from './how-do-you-build-and-play-a-death-domain-cleric';
import { question as q4 } from './how-do-reaper-and-improved-reaper-work';
import { question as q5 } from './how-do-touch-of-death-and-inescapable-destruction-work-together';

export const deathDomainFaq = { slug: 'death-domain', title: 'Death Domain', sourcePage: '/classes/cleric/death-domain/', questions: [q1, q2, q3, q4, q5] } as const;

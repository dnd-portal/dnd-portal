import { question as q1 } from './what-is-the-life-domain';
import { question as q2 } from './what-are-the-main-life-domain-features';
import { question as q3 } from './how-do-you-build-and-play-a-life-domain-cleric';
import { question as q4 } from './how-do-life-domain-spells-work';
import { question as q5 } from './how-do-disciple-of-life-blessed-healer-and-supreme-healing-work-together';

export const lifeDomainFaq = { slug: 'life-domain', title: 'Life Domain', sourcePage: '/classes/cleric/life-domain/', questions: [q1, q2, q3, q4, q5] } as const;

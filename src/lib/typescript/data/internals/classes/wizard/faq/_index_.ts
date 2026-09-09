import { question as q1 } from './what-is-a-wizard-in-dnd';
import { question as q2 } from './how-do-you-play-a-wizard';
import { question as q3 } from './what-ability-scores-are-best-for-a-wizard';
import { question as q4 } from './what-are-the-main-wizard-class-features';
import { question as q5 } from './what-subclasses-can-a-wizard-choose';

export const wizardFaq = { slug: 'wizard', title: 'Wizard', sourcePage: '/classes/wizard/', questions: [q1, q2, q3, q4, q5] } as const;

import { question as q1 } from './what-is-the-messenger-class-in-dnd';
import { question as q2 } from './how-do-you-play-a-messenger';
import { question as q3 } from './what-ability-scores-are-best-for-a-messenger';
import { question as q4 } from './what-are-the-main-messenger-class-features';
import { question as q5 } from './what-subclasses-can-a-messenger-choose';

export const messengerFaq = { slug: 'messenger', title: 'Messenger', sourcePage: '/classes/messenger/', questions: [q1, q2, q3, q4, q5] } as const;

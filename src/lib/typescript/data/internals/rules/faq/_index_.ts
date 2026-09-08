import { question as q1 } from './what-are-rules-in-dnd';
import { question as q2 } from './how-do-dnd-rules-work-during-play';
import { question as q3 } from './what-is-the-difference-between-core-optional-and-house-rules';
import { question as q4 } from './who-decides-when-a-dnd-rule-is-unclear';
import { question as q5 } from './how-do-dnd-portal-campaign-notes-affect-the-rules';

export const rulesFaq = { slug: 'rules', title: 'Rules', sourcePage: '/rules/', questions: [q1, q2, q3, q4, q5] } as const;

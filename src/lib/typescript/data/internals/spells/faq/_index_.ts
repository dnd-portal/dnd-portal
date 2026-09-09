import { question as q1 } from './how-do-spells-work-in-dnd';
import { question as q2 } from './how-do-spell-slots-work';
import { question as q3 } from './how-do-you-learn-or-prepare-spells';
import { question as q4 } from './what-are-the-different-spell-levels';
import { question as q5 } from './what-is-the-difference-between-a-spell-and-a-cantrip';

export const spellsFaq = { slug: 'spells', title: 'Spells', sourcePage: '/spells/', questions: [q1, q2, q3, q4, q5] } as const;

import { question as q1 } from './what-is-a-shinobi-in-dnd';
import { question as q2 } from './how-do-you-play-a-shinobi';
import { question as q3 } from './what-ability-scores-are-best-for-a-shinobi';
import { question as q4 } from './what-are-the-main-shinobi-class-features';
import { question as q5 } from './what-paths-can-a-shinobi-choose';

export const shinobiFaq = { slug: 'shinobi', title: 'Shinobi', sourcePage: '/classes/shinobi/', questions: [q1, q2, q3, q4, q5] } as const;

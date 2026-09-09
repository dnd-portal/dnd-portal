import { question as q1 } from './what-are-species-in-dnd';
import { question as q2 } from './how-do-you-choose-a-species-for-your-character';
import { question as q3 } from './what-abilities-do-dnd-species-give-you';
import { question as q4 } from './does-your-species-affect-your-characters-class';
import { question as q5 } from './what-is-the-best-species-for-a-new-dnd-player';

export const speciesFaq = { slug: 'species', title: 'Species', sourcePage: '/species/', questions: [q1, q2, q3, q4, q5] } as const;

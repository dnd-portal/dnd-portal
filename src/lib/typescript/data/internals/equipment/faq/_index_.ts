import { question as q1 } from './how-does-equipment-work-in-dnd';
import { question as q2 } from './what-weapons-can-characters-use';
import { question as q3 } from './how-does-armor-affect-armor-class';
import { question as q4 } from './how-does-weapon-and-armor-proficiency-work';
import { question as q5 } from './how-much-does-equipment-cost';

export const equipmentFaq = { slug: 'equipment', title: 'Equipment', sourcePage: '/equipment/', questions: [q1, q2, q3, q4, q5] } as const;

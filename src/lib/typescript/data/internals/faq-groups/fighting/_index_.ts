import { question as q1 } from './how-does-combat-work-in-dnd';
import { question as q2 } from './how-do-initiative-and-surprise-work';
import { question as q3 } from './what-can-you-do-on-your-turn-in-combat';
import { question as q4 } from './how-do-attack-rolls-armor-class-and-opportunity-attacks-work';
import { question as q5 } from './how-do-damage-critical-hits-resistance-and-vulnerability-work';

export const fightingFaq = { slug: 'fighting', title: 'Fighting', sourcePage: '/rules/fighting/', questions: [q1, q2, q3, q4, q5] } as const;

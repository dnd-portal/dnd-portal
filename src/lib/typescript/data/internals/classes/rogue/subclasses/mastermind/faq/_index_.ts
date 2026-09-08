import { question as q1 } from './what-is-the-mastermind-roguish-archetype';
import { question as q2 } from './what-are-the-main-mastermind-features';
import { question as q3 } from './how-do-you-build-and-play-a-mastermind-rogue';
import { question as q4 } from './how-does-mastermind-interact-with-sneak-attack';
import { question as q5 } from './how-does-master-of-tactics-work';

export const mastermindFaq = { slug: 'mastermind', title: "Mastermind", sourcePage: "internals.classes.rogue.subclasses.mastermind", questions: [q1, q2, q3, q4, q5] } as const;

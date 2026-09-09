import { question as q1 } from './what-is-the-inquisitive-roguish-archetype';
import { question as q2 } from './what-are-the-main-inquisitive-features';
import { question as q3 } from './how-do-you-build-and-play-a-inquisitive-rogue';
import { question as q4 } from './how-does-inquisitive-interact-with-sneak-attack';
import { question as q5 } from './how-does-insightful-fighting-work';

export const inquisitiveFaq = { slug: 'inquisitive', title: "Inquisitive", sourcePage: "internals.classes.rogue.subclasses.inquisitive", questions: [q1, q2, q3, q4, q5] } as const;

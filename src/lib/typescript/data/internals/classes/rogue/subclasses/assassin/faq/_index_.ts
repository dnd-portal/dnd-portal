import { question as q1 } from './what-is-the-assassin-roguish-archetype';
import { question as q2 } from './what-are-the-main-assassin-features';
import { question as q3 } from './how-do-you-build-and-play-a-assassin-rogue';
import { question as q4 } from './how-does-assassin-interact-with-sneak-attack';
import { question as q5 } from './how-does-assassinate-work-with-surprise';

export const assassinFaq = { slug: 'assassin', title: "Assassin", sourcePage: "internals.classes.rogue.subclasses.assassin", questions: [q1, q2, q3, q4, q5] } as const;

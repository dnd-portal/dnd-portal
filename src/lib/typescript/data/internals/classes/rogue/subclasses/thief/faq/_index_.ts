import { question as q1 } from './what-is-the-thief-roguish-archetype';
import { question as q2 } from './what-are-the-main-thief-features';
import { question as q3 } from './how-do-you-build-and-play-a-thief-rogue';
import { question as q4 } from './how-does-thief-interact-with-sneak-attack';
import { question as q5 } from './what-can-fast-hands-do-in-the-2014-rules';

export const thiefFaq = { slug: 'thief', title: "Thief", sourcePage: "internals.classes.rogue.subclasses.thief", questions: [q1, q2, q3, q4, q5] } as const;

import { question as q1 } from './what-is-the-phantom-roguish-archetype';
import { question as q2 } from './what-are-the-main-phantom-features';
import { question as q3 } from './how-do-you-build-and-play-a-phantom-rogue';
import { question as q4 } from './how-does-phantom-interact-with-sneak-attack';
import { question as q5 } from './how-do-soul-trinkets-work-for-a-phantom-rogue';

export const phantomFaq = { slug: 'phantom', title: "Phantom", sourcePage: "internals.classes.rogue.subclasses.phantom", questions: [q1, q2, q3, q4, q5] } as const;

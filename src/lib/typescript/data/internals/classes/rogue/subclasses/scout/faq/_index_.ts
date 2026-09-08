import { question as q1 } from './what-is-the-scout-roguish-archetype';
import { question as q2 } from './what-are-the-main-scout-features';
import { question as q3 } from './how-do-you-build-and-play-a-scout-rogue';
import { question as q4 } from './how-does-scout-interact-with-sneak-attack';
import { question as q5 } from './how-does-skirmisher-work';

export const scoutFaq = { slug: 'scout', title: "Scout", sourcePage: "internals.classes.rogue.subclasses.scout", questions: [q1, q2, q3, q4, q5] } as const;

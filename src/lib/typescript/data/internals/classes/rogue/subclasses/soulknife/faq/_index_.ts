import { question as q1 } from './what-is-the-soulknife-roguish-archetype';
import { question as q2 } from './what-are-the-main-soulknife-features';
import { question as q3 } from './how-do-you-build-and-play-a-soulknife-rogue';
import { question as q4 } from './how-does-soulknife-interact-with-sneak-attack';
import { question as q5 } from './how-do-psionic-energy-dice-and-psychic-blades-work';

export const soulknifeFaq = { slug: 'soulknife', title: "Soulknife", sourcePage: "internals.classes.rogue.subclasses.soulknife", questions: [q1, q2, q3, q4, q5] } as const;

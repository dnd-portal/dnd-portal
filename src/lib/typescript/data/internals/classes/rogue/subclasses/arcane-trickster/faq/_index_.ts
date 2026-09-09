import { question as q1 } from './what-is-the-arcane-trickster-roguish-archetype';
import { question as q2 } from './what-are-the-main-arcane-trickster-features';
import { question as q3 } from './how-do-you-build-and-play-a-arcane-trickster-rogue';
import { question as q4 } from './how-does-arcane-trickster-interact-with-sneak-attack';
import { question as q5 } from './how-does-arcane-trickster-spellcasting-work';

export const arcaneTricksterFaq = { slug: 'arcane-trickster', title: "Arcane Trickster", sourcePage: "internals.classes.rogue.subclasses.arcaneTrickster", questions: [q1, q2, q3, q4, q5] } as const;

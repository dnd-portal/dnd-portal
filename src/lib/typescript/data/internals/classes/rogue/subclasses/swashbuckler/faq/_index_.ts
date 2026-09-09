import { question as q1 } from './what-is-the-swashbuckler-roguish-archetype';
import { question as q2 } from './what-are-the-main-swashbuckler-features';
import { question as q3 } from './how-do-you-build-and-play-a-swashbuckler-rogue';
import { question as q4 } from './how-does-swashbuckler-interact-with-sneak-attack';
import { question as q5 } from './how-does-rakish-audacity-change-sneak-attack';

export const swashbucklerFaq = { slug: 'swashbuckler', title: "Swashbuckler", sourcePage: "internals.classes.rogue.subclasses.swashbuckler", questions: [q1, q2, q3, q4, q5] } as const;

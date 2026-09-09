import { question as q1 } from './what-is-the-totem-warrior';
import { question as q2 } from './what-are-the-main-totem-warrior-features';
import { question as q3 } from './how-do-you-build-and-play-a-totem-warrior-barbarian';
import { question as q4 } from './how-does-totem-warrior-interact-with-rage';
import { question as q5 } from './do-all-of-your-totem-warrior-animal-choices-have-to-match';

export const totemWarriorFaq = { slug: 'totem-warrior', title: 'Path of the Totem Warrior', sourcePage: '/classes/barbarian/totem-warrior/', questions: [q1, q2, q3, q4, q5] } as const;

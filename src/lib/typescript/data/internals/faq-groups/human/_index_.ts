import { question as q1 } from './what-is-the-human-species-in-dnd';
import { question as q2 } from './what-traits-does-a-2014-human-get';
import { question as q3 } from './is-the-2014-human-good-for-every-class';
import { question as q4 } from './does-the-standard-2014-human-get-a-feat';
import { question as q5 } from './what-changes-for-human-characters-in-party-1';

export const humanFaq = { slug: 'human', title: 'Human', questions: [q1, q2, q3, q4, q5] } as const;

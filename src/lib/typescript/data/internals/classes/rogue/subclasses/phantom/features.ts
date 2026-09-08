import { page } from './page';

const content = page.content as { readonly featureSections?: readonly unknown[]; readonly sections?: readonly unknown[] };
export const features = content.featureSections ?? content.sections ?? [];

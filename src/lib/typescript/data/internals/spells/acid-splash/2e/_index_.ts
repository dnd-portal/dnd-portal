import acidSplash2e from './2e';
import acidSplash2eFaq from './faq/_index_';

export { acidSplash2e, acidSplash2eFaq };

export default {
	...acidSplash2e,
	faq: acidSplash2eFaq
} as const;

import acidSplash35e from './3-5e';
import acidSplashFaq from './faq/_index_';

export { acidSplash35e, acidSplashFaq };

export const acidSplash = {
	id: 'acid-splash',
	editions: {
		'3-5e': acidSplash35e
	},
	faq: acidSplashFaq
} as const;

export default acidSplash;

import acidSplash3e from './3e/3e';
import acidSplash35e from './3-5e/3-5e';

export { acidSplash3e, acidSplash35e };

export const acidSplashEditions = {
	'3e': acidSplash3e,
	'3-5e': acidSplash35e
} as const;

export default acidSplashEditions;

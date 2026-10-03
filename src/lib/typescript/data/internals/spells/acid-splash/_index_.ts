import acidSplash3e from './3e/3e';
import acidSplash1e from './1e/1e';
import acidSplash2e from './2e/2e';
import acidSplash35e from './3-5e/3-5e';
import acidSplash4e from './4e/4e';
import acidSplash5e from './5e/5e';
import acidSplash55e from './5-5e/5-5e';

export { acidSplash1e, acidSplash2e, acidSplash3e, acidSplash35e, acidSplash4e, acidSplash5e, acidSplash55e };

export const acidSplashEditions = {
	'2e': acidSplash2e,
	'1e': acidSplash1e,
	'3e': acidSplash3e,
	'3-5e': acidSplash35e,
	'4e': acidSplash4e,
	'5e': acidSplash5e,
	'5-5e': acidSplash55e
} as const;

export default acidSplashEditions;

import * as core from '../core/_index_';
import { createInternalPage } from './_helpers_';

const website = core.internals.website;

export const newSpells = {
	acidSplash: createInternalPage({
		href: '/new-spells/acid-splash',
		label: 'Acid Splash',
		title: `${website.name.short} - Acid Splash (New)`,
		subTitle: 'Temporary spell development page',
		description: 'Temporary development page for the new Acid Splash spell data structure.',
		navigation: {
			label: 'Acid Splash'
		}
	}),
	acidSplash35e: createInternalPage({
		href: '/new-spells/acid-splash_3-5e',
		label: 'Acid Splash 3.5e',
		title: `${website.name.short} - Acid Splash 3.5e (New)`,
		subTitle: 'Temporary spell development page',
		description: 'Temporary development page for the new Acid Splash 3.5e spell data structure.',
		navigation: {
			label: 'Acid Splash 3.5e',
			hidden: true
		}
	}),
	acidSplash3e: createInternalPage({
		href: '/new-spells/acid-splash_3e',
		label: 'Acid Splash 3e',
		title: `${website.name.short} - Acid Splash 3e (New)`,
		subTitle: 'Temporary spell development page',
		description: 'Temporary development page for the new Acid Splash 3e spell data structure.',
		navigation: {
			label: 'Acid Splash 3e',
			hidden: true
		}
	})
} as const;

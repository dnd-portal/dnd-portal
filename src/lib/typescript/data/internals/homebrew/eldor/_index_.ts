import { createInternalPage } from '../../_helpers_';
import {
	magicItemPages,
	magicItems
} from '$lib/typescript/data/core/internals/homebrew/eldor/magic-items/_index_';
import type { HomebrewCollectionMetadata } from '../types';

const icon = '/icons/white/homebrew/eldor-sigil.svg';
const magicItemIcon = '/icons/white/entity/magic-item.svg';

export const eldor = {
	metadata: {
		setting: { name: 'Aetherbound' },
		creator: { name: 'Toon van Berkel', href: 'externals.toonvb.profile' },
		copyright: {
			holder: 'Toon van Berkel',
			notice: 'Unless otherwise stated, all Eldor homebrew content published on D&D Portal is © Toon van Berkel.'
		},
		about: {
			title: 'About Eldor',
			description: 'Eldor is a deity from the Aetherbound setting.',
			attribution: 'The Eldor homebrew collection — including its magic items, lore, rules, and other related content — was written and created by Toon van Berkel.',
			disclaimer: 'Eldor and its associated homebrew content are original creative works created for the Aetherbound setting. This is unofficial fan-created content and is not affiliated with or endorsed by Wizards of the Coast.'
		}
	} satisfies HomebrewCollectionMetadata,
	page: createInternalPage({
		href: '/homebrew/eldor/',
		title: 'D&D Portal Wiki - Eldor',
		subTitle: 'Homebrew',
		label: 'Eldor',
		description: 'A homebrew collection of original content connected to the world of Eldor. All Eldor homebrew content is protected by copyright.',
		img: { href: icon, alt: 'Eldor sigil' },
		navigation: { iconSize: 'large' },
		tags: ['homebrew', 'eldor'],
		sourceMetadata: [{ label: 'Category', value: 'Homebrew' }]
	}),
	magicItems: {
		page: createInternalPage({
			href: '/homebrew/eldor/magic-items/',
			title: 'D&D Portal Wiki - Eldor Magic Items',
			subTitle: 'Eldor homebrew',
			label: 'Magic Items',
			description: `${magicItems.length} custom magic items connected to Eldor. All Eldor homebrew content is protected by copyright.`,
			img: { href: magicItemIcon, alt: 'Magic item icon' },
			tags: ['homebrew', 'eldor', 'magic items']
		}),
		...magicItemPages
	}
} as const;

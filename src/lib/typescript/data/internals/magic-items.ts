import { createInternalPage } from './_helpers_';
import { item as mimicStick } from '$lib/typescript/data/core/internals/homebrew/eldor/magic-items/mimic-stick/page';

export const magicItems = {
	page: createInternalPage({
		href: '/magic-items/',
		title: 'D&D Portal Wiki - Magic Items',
		subTitle: 'Magic items',
		label: 'Magic Items',
		description: 'Browse magic items and their rules, properties, and uses.',
		img: { href: '/icons/white/entity/magic-item.svg', alt: 'Magic item icon.' }
	}),
	mimicStick: createInternalPage({
		href: '/magic-items/the-mimic-stick/',
		title: 'D&D Portal Wiki - The Mimic Stick',
		subTitle: 'Magic item',
		label: 'The Mimic Stick',
		description: 'The Mimic Stick is an Eldor homebrew magic item.',
		img: mimicStick.img,
		navigation: { parent: 'internals.magicItems.page' },
		tags: mimicStick.tags
	})
} as const;

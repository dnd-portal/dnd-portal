import { createInternalPage } from '$lib/typescript/data/internals/_helpers_';
import type { HomebrewMagicItem } from '$lib/typescript/data/internals/homebrew/types';
import { item as mimicStick } from './mimic-stick/page';

export const magicItems: readonly HomebrewMagicItem[] = [
	mimicStick
];

export const magicItemPages = Object.fromEntries(
	magicItems.map((item) => [
		item.slug,
		createInternalPage({
			href: `/homebrew/eldor/magic-items/${item.slug}/`,
			title: `D&D Portal Wiki - ${item.name}`,
			subTitle: 'Eldor homebrew magic item',
			label: item.name,
			description: `${item.name} is an Eldor homebrew magic item.`,
			img: item.img,
			navigation: {
				parent: 'internals.homebrew.eldor.magicItems.page',
				hidden: true
			},
			tags: item.tags
		})
	])
) as Record<string, ReturnType<typeof createInternalPage>>;

export function getEldorMagicItemBySlug(slug: string): HomebrewMagicItem | null {
	return magicItems.find((item) => item.slug === slug) ?? null;
}

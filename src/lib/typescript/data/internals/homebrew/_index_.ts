import { createInternalPage } from '../_helpers_';
import { eldor } from './eldor/_index_';
import {
	magicItemPages as eldorMagicItemPages,
	magicItems as eldorMagicItems
} from '$lib/typescript/data/core/internals/homebrew/eldor/magic-items/_index_';
import type { HomebrewCollectionMetadata, HomebrewMagicItem } from './types';

export const homebrew = {
	page: createInternalPage({
		href: '/homebrew/',
		title: 'D&D Portal Wiki - Homebrew',
		subTitle: 'Homebrew collections',
		description: 'Explore original settings, rules, items, and other community-built content for D&D Portal.',
		img: {
			href: '/icons/white/homebrew/eldor-sigil.svg',
			alt: 'Homebrew collection icon'
		},
		tags: ['homebrew', 'custom content', 'campaign content']
	}),
	eldor
} as const;

export const homebrewCollections = [
	'internals.homebrew.eldor.page'
] as const;

const homebrewCollectionsBySlug = {
	eldor
} as const;

export function getHomebrewCollection(slug: string): {
	readonly metadata: HomebrewCollectionMetadata;
} | null {
	return homebrewCollectionsBySlug[slug as keyof typeof homebrewCollectionsBySlug] ?? null;
}

const magicItemsByCollection: Readonly<Record<string, readonly HomebrewMagicItem[]>> = {
	eldor: eldorMagicItems
};

export const homebrewMagicItemEntries = Object.entries(magicItemsByCollection).flatMap(
	([collection, items]) => items.map((item) => ({ collection, category: 'magic-items', item: item.slug }))
);

export function getHomebrewMagicItem(
	collection: string,
	category: string,
	slug: string
): HomebrewMagicItem | null {
	if (category !== 'magic-items') {
		return null;
	}

	return magicItemsByCollection[collection]?.find((item) => item.slug === slug) ?? null;
}

export function getHomebrewMagicItems(
	collection: string,
	category: string
): readonly HomebrewMagicItem[] {
	return category === 'magic-items' ? magicItemsByCollection[collection] ?? [] : [];
}

export function getHomebrewMagicItemPagePath(collection: string, slug: string): string | null {
	if (collection !== 'eldor' || !eldorMagicItemPages[slug]) {
		return null;
	}

	return `internals.homebrew.eldor.magicItems.${slug}`;
}

export type HomebrewCollection = typeof homebrew.eldor;

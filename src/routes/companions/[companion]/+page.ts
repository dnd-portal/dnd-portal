import { companionItems, getCompanionBySlug } from '$lib/typescript/data/internals/companions';
export function entries() { return companionItems.map((companion) => ({ companion: companion.slug })); }
export function load({ params }) {
	const companion = getCompanionBySlug(params.companion);

	return {
		companion,
		...(params.companion === 'puddle-slime'
			? {
				seo: {
					title: 'Puddle Slime',
					description: 'Meet the Puddle Slime, a cheerful, water-loving ooze that makes a curious and surprisingly useful adventuring companion.',
					image: {
						href: '/images/companions/puddle-slime-og.jpg',
						alt: 'A cute, translucent blue Puddle Slime resting in a sunlit forest pond.',
						width: 1200,
						height: 630
					},
					type: 'article' as const
				}
			}
			: {})
	};
}

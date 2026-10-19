import { getCompanionBySlug } from '$lib/typescript/data/internals/companions';

export const prerender = true;

export function entries() {
	return [{ collection: 'eldor', companion: 'puddle-slime' }];
}

export function load({ params }: { params: { companion: string } }) {
	return {
		path: 'internals.homebrew.eldor.companions.puddleSlime' as const,
		companion: getCompanionBySlug(params.companion)
	};
}

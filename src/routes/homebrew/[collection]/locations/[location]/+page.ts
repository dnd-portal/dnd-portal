import { getData } from '$lib/typescript/data/_index_';

export const prerender = true;

export function entries() {
	return [
		{ collection: 'eldor', location: 'brinehook-harbor' },
		{ collection: 'eldor', location: 'gildersprout-reach' }
	];
}

export function load({ params }: { params: { location: string } }) {
	const contentPath = params.location === 'gildersprout-reach'
		? 'internals.locations.gildersproutReach.page'
		: 'internals.locations.brinehookHarbor.page';
	const path = params.location === 'gildersprout-reach'
		? 'internals.homebrew.eldor.locations.gildersproutReach'
		: 'internals.homebrew.eldor.locations.brinehookHarbor';
	return { path, pageData: getData(contentPath) };
}

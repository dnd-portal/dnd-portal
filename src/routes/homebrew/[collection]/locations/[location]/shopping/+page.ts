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
		? 'internals.locations.gildersproutReach.shopping'
		: 'internals.locations.brinehookHarbor.shopping';
	const path = params.location === 'gildersprout-reach'
		? 'internals.locations.gildersproutReach.shopping'
		: 'internals.locations.brinehookHarbor.shopping';
	return { path, pageData: getData(contentPath) };
}

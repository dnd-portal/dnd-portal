import { getData } from '$lib/typescript/data/_index_';

export function entries() {
	return [{ location: 'brinehook-harbor' }];
}

export function load() {
	return { path: 'internals.locations.brinehookHarbor.page', pageData: getData('internals.locations.brinehookHarbor.page') };
}

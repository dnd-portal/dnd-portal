import { getData } from '$lib/typescript/data/_index_';

export function load() {
	return { path: 'internals.organizations.page', pageData: getData('internals.organizations.page') };
}

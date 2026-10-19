import { getData } from '$lib/typescript/data/_index_';

export function load() {
	return { path: 'internals.homebrew.eldor.organizations.page', pageData: getData('internals.homebrew.eldor.organizations.page') };
}

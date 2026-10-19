import { getData } from '$lib/typescript/data/_index_';

export function entries() {
	return [{ collection: 'eldor', organization: 'glueco' }];
}

export function load() {
	return { path: 'internals.homebrew.eldor.organizations.glueCo', pageData: getData('internals.homebrew.eldor.organizations.glueCo') };
}

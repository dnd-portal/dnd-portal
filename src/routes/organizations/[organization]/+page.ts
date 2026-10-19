import { getData } from '$lib/typescript/data/_index_';

export function entries() {
	return [{ organization: 'glueco' }];
}

export function load() {
	return {
		path: 'internals.organizations.glueCo',
		pageData: getData('internals.organizations.glueCo')
	};
}

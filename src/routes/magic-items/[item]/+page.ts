import { getData } from '$lib/typescript/data/_index_';

export const prerender = true;

export function entries() {
	return [{ item: 'the-mimic-stick' }];
}

export function load() {
	return { path: 'internals.magicItems.mimicStick', pageData: getData('internals.magicItems.mimicStick') };
}

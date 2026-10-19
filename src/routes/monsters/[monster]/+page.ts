import { getData } from '$lib/typescript/data/_index_';

export const prerender = true;

export function entries() {
	return [{ monster: 'the-rotwood-sovereign' }];
}

export function load() {
	return { path: 'internals.monsters.rotwoodSovereign', pageData: getData('internals.monsters.rotwoodSovereign') };
}

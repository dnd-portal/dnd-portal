import { getData } from '$lib/typescript/data/_index_';
import { rotwoodSovereign } from '$lib/typescript/data/internals/monsters/rotwood-sovereign';
export function entries() { return [{ collection: 'eldor', monster: rotwoodSovereign.slug }]; }
export function load() {
	return {
		path: 'internals.homebrew.eldor.monsters.rotwoodSovereign' as const,
		pageData: getData('internals.monsters.rotwoodSovereign')
	};
}

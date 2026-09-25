import type { PageServerLoad } from './$types';

const classLoaders = {
	artificer: () => import('$lib/typescript/data/internals/classes/artificer/_index_').then((module) => module.artificer),
	barbarian: () => import('$lib/typescript/data/internals/classes/barbarian/_index_').then((module) => module.barbarian),
	bard: () => import('$lib/typescript/data/internals/classes/bard/_index_').then((module) => module.bard),
	cleric: () => import('$lib/typescript/data/internals/classes/cleric/_index_').then((module) => module.cleric),
	druid: () => import('$lib/typescript/data/internals/classes/druid/_index_').then((module) => module.druid),
	fighter: () => import('$lib/typescript/data/internals/classes/fighter/_index_').then((module) => module.fighter),
	monk: () => import('$lib/typescript/data/internals/classes/monk/_index_').then((module) => module.monk),
	paladin: () => import('$lib/typescript/data/internals/classes/paladin/_index_').then((module) => module.paladin),
	ranger: () => import('$lib/typescript/data/internals/classes/ranger/_index_').then((module) => module.ranger),
	rogue: () => import('$lib/typescript/data/internals/classes/rogue/_index_').then((module) => module.rogue),
	sorcerer: () => import('$lib/typescript/data/internals/classes/sorcerer/_index_').then((module) => module.sorcerer),
	warlock: () => import('$lib/typescript/data/internals/classes/warlock/_index_').then((module) => module.warlock),
	wizard: () => import('$lib/typescript/data/internals/classes/wizard/_index_').then((module) => module.wizard),
	'blood-hunter': () => import('$lib/typescript/data/internals/classes/blood-hunter/_index_').then((module) => module.bloodHunter),
	captain: () => import('$lib/typescript/data/internals/classes/captain/_index_').then((module) => module.captain),
	champion: () => import('$lib/typescript/data/internals/classes/champion/_index_').then((module) => module.champion),
	gunslinger: () => import('$lib/typescript/data/internals/classes/gunslinger/_index_').then((module) => module.gunslinger),
	illrigger: () => import('$lib/typescript/data/internals/classes/illrigger/_index_').then((module) => module.illrigger),
	messenger: () => import('$lib/typescript/data/internals/classes/messenger/_index_').then((module) => module.messenger),
	'monster-hunter': () => import('$lib/typescript/data/internals/classes/monster-hunter/_index_').then((module) => module.monsterHunter),
	mournbound: () => import('$lib/typescript/data/internals/classes/mournbound/_index_').then((module) => module.mournbound),
	pugilist: () => import('$lib/typescript/data/internals/classes/pugilist/_index_').then((module) => module.pugilist),
	scholar: () => import('$lib/typescript/data/internals/classes/scholar/_index_').then((module) => module.scholar),
	shinobi: () => import('$lib/typescript/data/internals/classes/shinobi/_index_').then((module) => module.shinobi),
	'treasure-hunter': () => import('$lib/typescript/data/internals/classes/treasure-hunter/_index_').then((module) => module.treasureHunter),
	vampyr: () => import('$lib/typescript/data/internals/classes/vampyr/_index_').then((module) => module.vampyr),
	vanguard: () => import('$lib/typescript/data/internals/classes/vanguard/_index_').then((module) => module.vanguard),
	warden: () => import('$lib/typescript/data/internals/classes/warden/_index_').then((module) => module.warden)
} as const;

const classSlugs = new Set(Object.keys(classLoaders));
const editionSuffixes = [
	['3-5e', '3.5e'], ['5e', '5e'], ['4e', '4e'], ['3e', '3e'], ['2e', '2e'], ['1e', '1e']
] as const;

export const load: PageServerLoad = async ({ params }) => {
	const routeSlug = params.class ?? '';
	const loader = classLoaders[routeSlug as keyof typeof classLoaders];

	if (loader) {
		const classData = await loader();
		const pageContent = routeSlug === 'barbarian'
			? (await import('$lib/typescript/data/internals/classes/edition-content')).createCurrentBarbarianContent()
			: classData.content;
		return { classData, pageContent, resolvedRoute: { baseClassSlug: routeSlug, edition: '5.5e' as const } };
	}

	const editionMatch = editionSuffixes.find(([suffix]) => routeSlug.endsWith(`-${suffix}`));
	const baseClassSlug = editionMatch ? routeSlug.slice(0, -(editionMatch[0].length + 1)) : routeSlug;
	if (!editionMatch || !classSlugs.has(baseClassSlug)) {
		return { classData: null, pageContent: null, resolvedRoute: null };
	}

	const classData = await classLoaders[baseClassSlug as keyof typeof classLoaders]?.();
	const editionData = (await import('$lib/typescript/data/internals/classes/edition-data')).getClassEditionData(baseClassSlug, editionMatch[1]);
	const pageContent = editionData
		? (await import('$lib/typescript/data/internals/classes/edition-content')).createClassEditionContent(editionData)
		: classData?.content ?? null;

	return { classData, pageContent, resolvedRoute: { baseClassSlug, edition: editionMatch[1] }, editionData };
};

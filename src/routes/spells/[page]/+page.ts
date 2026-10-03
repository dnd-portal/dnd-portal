/*
	Location: src/routes/spells/[page]/+page.ts
	Use: Static prerender entries for spell list and spell detail routes.
*/
import { spells, spellLevels } from '$lib/typescript/data/internals/rules/spellcasting/spells/spell-data';
import { createSpellSeoMetadata } from '$lib/typescript/pages/seo';
import { redirect } from '@sveltejs/kit';

export function entries() {
	return [
		{ page: 'spellcasting' },
		...spellLevels.map((level) => ({ page: level.slug })),
		...spells.map((spell) => ({ page: spell.slug }))
	];
}

export function load({ params, url }) {
	if (params.page === 'acid-splash') {
		const edition = url.searchParams.get('edition');
		const destination = edition && ['1e', '2e', '3e', '3-5e', '4e', '5e'].includes(edition)
			? `/spells/acid-splash/${edition}/`
			: '/spells/acid-splash/';
		throw redirect(308, destination);
	}
	const spell = spells.find((item) => item.slug === params.page);

	if (!spell) {
		return {};
	}

	return {
		seo: createSpellSeoMetadata(spell)
	};
}

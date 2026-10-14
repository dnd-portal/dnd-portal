import { error } from '@sveltejs/kit';
const editions = ['1e', '2e', '3e', '3-5e', '4e', '5e'] as const;
export const entries = () => editions.map((edition) => ({ edition }));
export function load({ params }) {
	if (!editions.includes(params.edition as (typeof editions)[number])) throw error(404, 'Blade Ward edition not found');
	const labels = { '1e': 'D&D 1e', '2e': 'AD&D 2e', '3e': 'D&D 3e', '3-5e': 'D&D 3.5e', '4e': 'D&D 4e', '5e': 'D&D 5e' } as const;
	return { seo: { title: `Blade Ward - ${labels[params.edition as (typeof editions)[number]]}`, description: `Blade Ward for ${labels[params.edition as (typeof editions)[number]]}.` } };
}

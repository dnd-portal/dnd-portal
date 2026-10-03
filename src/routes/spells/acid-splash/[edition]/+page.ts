import { error } from '@sveltejs/kit';

const editions = ['1e', '2e', '3e', '3-5e', '4e', '5e'] as const;

export function entries() {
	return editions.map((edition) => ({ edition }));
}

export function load({ params }) {
	if (!editions.includes(params.edition as (typeof editions)[number])) {
		throw error(404, 'Acid Splash edition not found');
	}

	const edition = params.edition as (typeof editions)[number];
	const labels = {
		'1e': 'D&D 1e',
		'2e': 'AD&D 2e',
		'3e': 'D&D 3e',
		'3-5e': 'D&D 3.5e',
		'4e': 'D&D 4e',
		'5e': 'D&D 5e'
	} as const;

	return {
		edition,
		seo: {
			title: `Acid Splash - ${labels[edition]}`,
			description: `Acid Splash for ${labels[edition]}, including its edition-specific rules, usage, and FAQ.`
		}
	};
}

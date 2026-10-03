import { error } from '@sveltejs/kit';

export const prerender = true;

export function load() {
	return {
		seo: {
			title: 'Acid Splash - D&D 5.5e',
			description: 'Acid Splash for D&D 5.5e, including its rules, scaling, spell lists, and FAQ.'
		}
	};
}

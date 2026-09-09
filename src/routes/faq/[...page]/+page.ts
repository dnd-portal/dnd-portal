import { faq } from '$lib/typescript/data/internals/faq';
import { getFaqGroup, getFaqQuestion } from '$lib/typescript/data/internals/faq';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
	const groups = Object.values(faq) as readonly Record<string, { href: string }>[];

	return groups.flatMap((group) =>
		Object.values(group).map((page) => ({
			page: page.href.replace(/^\/faq\//, '').replace(/\/$/, '')
		}))
	);
}

export function load({ params }) {
	const segments = (params.page ?? '').split('/').filter(Boolean);
	const group = getFaqGroup(segments[0] ?? '');

	if (!group) {
		throw error(404, 'FAQ group not found');
	}

	if (segments[1] && !getFaqQuestion(group.slug, segments[1])) {
		throw error(404, 'FAQ question not found');
	}

	return {};
}

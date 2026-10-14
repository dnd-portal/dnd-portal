import { describe, expect, it } from 'vitest';
import { getDynamicSpellBreadcrumbItems } from '$lib/typescript/pages/currentPage';

describe('D&D Portal test environment', () => {
    it('runs unit tests successfully', () => {
        expect(true).toBe(true);
    });

	it.each([
		['blade-ward', ['Spells', 'Cantrips', 'Blade Ward']],
		['magic-missile', ['Spells', '1st Level', 'Magic Missile']]
	])('keeps dynamic spell breadcrumb keys unique for %s', (slug, labels) => {
		const items = getDynamicSpellBreadcrumbItems(slug);
		const keys = items.map((item) => item.key);
		expect(new Set(keys).size).toBe(keys.length);
		expect(items.map((item) => item.label)).toEqual(labels);
	});
});

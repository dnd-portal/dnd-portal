/*
	Location: src/routes/classes/[class]/[subclass]/+page.ts
	Use: Static prerender entries for generic class subclass pages.
*/
import {
	classList,
	getClassBySlug
} from '$lib/typescript/data/internals/classes/_index_';

export function entries() {
	return classList.flatMap(({ slug }) => {
		const classData = getClassBySlug(slug);

		if (!classData || !('subclasses' in classData)) {
			return [];
		}

		return Object.values(classData.subclasses).flatMap((subclass) => {
			const page = 'page' in subclass ? subclass.page : subclass;
			const parts = page.href.replace(/\/+$/, '').split('/').filter(Boolean);

			return parts.length >= 3
				? [{ class: parts[1], subclass: parts[2] }]
				: [];
		});
	});
}

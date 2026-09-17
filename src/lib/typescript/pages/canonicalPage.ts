import { getData, type PageData, type PagePath } from '$lib/typescript/data/_index_';

/** Resolve full page content for route-local rendering only. */
export function getCanonicalPageData(path: PagePath | null): PageData | null {
	return path ? (getData(path) as PageData) : null;
}

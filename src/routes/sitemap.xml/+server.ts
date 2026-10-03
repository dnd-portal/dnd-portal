import { runtimeLinkEntries } from '$lib/typescript/data/runtime/generated';
import { siteMetadata } from '$lib/typescript/data/runtime/site-metadata';

export const prerender = true;

const escapeXml = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');

export function GET() {
	const requiredAcidSplashHrefs = [
		'/spells/acid-splash/',
		'/spells/acid-splash/1e/',
		'/spells/acid-splash/2e/',
		'/spells/acid-splash/3e/',
		'/spells/acid-splash/3-5e/',
		'/spells/acid-splash/4e/',
		'/spells/acid-splash/5e/'
	] as const;
	const hrefs = [...new Set([...runtimeLinkEntries
		.filter(([, href, external]) => !external && href.startsWith('/') && !href.startsWith('/new-spells') && !href.startsWith('/spell:acid-splash'))
		.map(([, href]) => href.endsWith('/') ? href : `${href}/`), ...requiredAcidSplashHrefs])];
	const urls = hrefs.map((href) => `\t<url>\n\t\t<loc>${escapeXml(`${siteMetadata.baseUrl}${href}`)}</loc>${href === '/spells/acid-splash/' ? '\n\t\t<lastmod>2026-10-03</lastmod>' : ''}\n\t</url>`).join('\n');
	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

	return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

/*
	Adding an issue:
	1. Copy one object in the `publicIssues` array.
	2. Give it a unique ID.
	3. Set reportedAt as YYYY-MM-DD.
	4. Update status, updatedAt, resolution, and links when the item changes.

	The page sorts unresolved items before resolved, declined, and duplicates.
	No route or component changes are required.
*/
import type { PublicIssue } from './_types_';
import { isResolvedIssue } from './_types_';

const publicIssueItems: readonly PublicIssue[] = [
	{
		id: 'prelive-audit-did-not-recognize-faq-routes',
		title: 'Pre-live audit did not recognize canonical FAQ routes',
		summary:
			'The route-shape validator treated valid /faq/<group>/ and /faq/<group>/<question>/ links as unknown after the FAQ registry became fully modular.',
		status: 'resolved',
		source: 'internal',
		category: 'technical',
		reportedAt: '2026-09-08',
		updatedAt: '2026-09-08',
		resolution:
			'Added strict validation for the supported FAQ route depths without broad route exclusions.',
		relatedPage: 'internals.project.changelog',
		relatedRelease: '0.9.2'
	},
	{
		id: 'stale-messenger-faq-compatibility-paths',
		title: 'Stale Messenger FAQ compatibility paths survived migration',
		summary:
			'Legacy Messenger-specific FAQ aliases referenced paths that no longer existed after Messenger moved to the generic modular FAQ registry.',
		status: 'resolved',
		source: 'internal',
		category: 'technical',
		reportedAt: '2026-09-08',
		updatedAt: '2026-09-08',
		resolution:
			'Removed the dead Messenger-only mapping and kept Messenger on the canonical generic FAQ path and registry.',
		relatedPage: 'internals.classes.messenger.page',
		relatedRelease: '0.9.2'
	},
	{
		id: 'prelive-placeholder-detector-flagged-normal-prose',
		title: 'Placeholder audit flagged normal “still needs” prose',
		summary:
			'The unfinished-content detector treated ordinary rules prose such as “the Rogue still needs...” as a placeholder.',
		status: 'resolved',
		source: 'internal',
		category: 'technical',
		reportedAt: '2026-09-08',
		updatedAt: '2026-09-08',
		resolution:
			'Refined the matcher to retain explicit unfinished wording while allowing ordinary English uses of “still needs”.',
		relatedPage: 'internals.project.changelog',
		relatedRelease: '0.9.2'
	},
	{
		id: 'faq-group-pages-rendered-ordinary-page-titles',
		title: 'FAQ group pages rendered ordinary page titles',
		summary:
			'FAQ group PageData exposed a plain group label to SEO, causing group pages such as Classes FAQ to share titles with the ordinary Classes page.',
		status: 'resolved',
		source: 'internal',
		category: 'seo',
		reportedAt: '2026-09-08',
		updatedAt: '2026-09-08',
		resolution:
			'FAQ group labels now include the FAQ context, producing distinct descriptive titles without route-specific special cases.',
		relatedPage: 'internals.utility.faq',
		relatedRelease: '0.9.2'
	},
	{
		id: 'repository-local-pnpm-store-was-not-ignored',
		title: 'Repository-local pnpm store was not ignored',
		summary:
			'Local pnpm database artifacts could appear as repository changes under .pnpm-store.',
		status: 'resolved',
		source: 'internal',
		category: 'technical',
		reportedAt: '2026-09-08',
		updatedAt: '2026-09-08',
		resolution:
			'Added a repository-local /.pnpm-store/ ignore rule; tracked project content was not present in that directory.',
		relatedPage: 'internals.project.changelog',
		relatedRelease: '0.9.2'
	},
	{
		id: 'faq-runtime-depended-on-editorial-markdown',
		title: 'FAQ runtime depended on the editorial Markdown master',
		summary:
			'The production FAQ registry depended on faqMasterReady and the editorial Markdown master instead of keeping all published FAQ content in runtime modules.',
		status: 'resolved',
		source: 'internal',
		category: 'technical',
		reportedAt: '2026-09-08',
		updatedAt: '2026-09-08',
		resolution:
			'All 60 FAQ groups and 300 articles now use structured modular TypeScript, so production no longer imports faqMasterReady or the FAQ Markdown master.',
		relatedPage: 'internals.utility.faq',
		relatedRelease: '0.9.2'
	},
	{
		id: 'faq-source-page-required-for-ownerless-topics',
		title: 'FAQ source-page metadata implied owners that did not exist',
		summary:
			'FAQ sourcePage was treated as mandatory even for Human, Elf, Astral Elf, and Fighting topics without ordinary runtime pages.',
		status: 'resolved',
		source: 'internal',
		category: 'technical',
		reportedAt: '2026-09-08',
		updatedAt: '2026-09-08',
		resolution:
			'FaqGroup sourcePage is now optional. Attached groups retain source-page lookup, while ownerless groups use neutral FAQ storage and remain fully routable and searchable without fake page owners.',
		relatedPage: 'internals.utility.faq',
		relatedRelease: '0.9.2'
	},
	{
		id: 'faq-editorial-source-pages-were-aspirational',
		title: 'Some FAQ sourcePage values were stale or aspirational',
		summary:
			'The editorial FAQ metadata referenced Human, Elf, Astral Elf, and Fighting page paths that were not runtime owners in the application.',
		status: 'resolved',
		source: 'internal',
		category: 'content',
		reportedAt: '2026-09-08',
		updatedAt: '2026-09-08',
		resolution:
			'Those groups now omit sourcePage in production and are represented as standalone FAQ entities; the editorial source remains migration input rather than a claim about runtime ownership.',
		relatedPage: 'internals.utility.faq',
		relatedRelease: '0.9.2'
	},
	{
		id: 'faq-rendered-markdown-heading-leak',
		title: 'FAQ output exposed raw Markdown heading syntax',
		summary:
			'At least one rendered FAQ article exposed a literal ## marker inherited from Markdown migration input.',
		status: 'resolved',
		source: 'internal',
		category: 'content',
		reportedAt: '2026-09-08',
		updatedAt: '2026-09-08',
		resolution:
			'Removed the leaked heading marker from modular FAQ data and verified the built FAQ output with the static content-leak audit.',
		relatedPage: 'internals.utility.faq',
		relatedRelease: '0.9.2'
	},
	{
		id: 'migration-process-files-polluted-repository-root',
		title: 'Migration runs left process artifacts in the repository root',
		summary:
			'Batch migration runs accumulated generated PID and log files at the project root.',
		status: 'resolved',
		source: 'internal',
		category: 'technical',
		reportedAt: '2026-09-08',
		updatedAt: '2026-09-08',
		resolution:
			'Removed completed root-level process clutter and added an ignored codex workspace for Codex-only scripts, reports, previews, and temporary artifacts.',
		relatedPage: 'internals.project.changelog',
		relatedRelease: '0.9.2'
	},
	{
		id: 'migration-tooling-boundary-was-unclear',
		title: 'Migration-only tooling was mixed with project files',
		summary:
			'Completed migration scripts and generated previews were not clearly separated from canonical project runtime and documentation.',
		status: 'resolved',
		source: 'internal',
		category: 'technical',
		reportedAt: '2026-09-08',
		updatedAt: '2026-09-08',
		resolution:
			'Completed Codex migration artifacts now live under the ignored codex workspace, while maintained project validation remains in scripts and canonical architecture documentation remains in docs.',
		relatedPage: 'internals.project.changelog',
		relatedRelease: '0.9.2'
	},
	{
		id: 'mobile-navigation-rendered-as-desktop-sidebar',
		title: 'Mobile navigation behaved like the desktop sidebar',
		summary:
			'On small screens the navigation opened as a desktop-style side panel, making the menu hard to read, scroll, and tap reliably.',
		status: 'resolved',
		source: 'discord',
		category: 'ui',
		reportedAt: '2026-09-05',
		updatedAt: '2026-09-05',
		resolution:
			'Small-screen navigation now opens as an opaque off-canvas drawer with a backdrop, close action, scrollable content, larger tap targets, Escape handling, and page-scroll locking while open.',
		relatedPage: 'internals.website.homepage',
		relatedRelease: '0.9.1'
	},
	{
		id: 'mobile-navigation-trigger-hidden',
		title: 'Mobile navigation button was not visible',
		summary:
			'The mobile Navigation trigger existed in the markup but remained hidden because the mobile breakpoint did not override the base display style.',
		status: 'resolved',
		source: 'discord',
		category: 'ui',
		reportedAt: '2026-09-05',
		updatedAt: '2026-09-05',
		resolution:
			'The mobile breakpoint now explicitly displays the Navigation trigger as an accessible 44-pixel tap target.',
		relatedPage: 'internals.website.homepage',
		relatedRelease: '0.9.1'
	},
	{
		id: 'navbar-did-not-return-on-up-scroll',
		title: 'Navbar did not return after scrolling slightly upward',
		summary:
			'After scrolling down, the navbar could stay out of reach until the visitor returned much closer to the top of the page.',
		status: 'resolved',
		source: 'discord',
		category: 'ui',
		reportedAt: '2026-09-05',
		updatedAt: '2026-09-05',
		resolution:
			'The navbar now tracks scroll direction, hides while scrolling down past the header area, and returns when the visitor scrolls slightly upward.',
		relatedPage: 'internals.website.homepage',
		relatedRelease: '0.9.1'
	},
	{
		id: 'homepage-background-stopped-at-ultrawide-content-width',
		title: 'Homepage background stopped at the ultrawide content width',
		summary:
			'On ultrawide screens the homepage background image stopped at the normal content max-width, leaving black columns on both sides.',
		status: 'resolved',
		source: 'discord',
		category: 'ui',
		reportedAt: '2026-09-05',
		updatedAt: '2026-09-05',
		resolution:
			'The homepage layout now lets only the background layer span beyond the normal content max-width while keeping text and cards aligned inside the readable content width.',
		relatedPage: 'internals.website.homepage',
		relatedRelease: '0.9.1'
	},
	{
		id: 'equipment-listed-under-rules',
		title: 'Equipment items were listed as rules pages',
		summary:
			'Individual items such as greataxes, handaxes, javelins, and explorer\'s packs appeared under Rules instead of the Equipment section.',
		status: 'resolved',
		source: 'discord',
		category: 'content',
		reportedAt: '2026-09-04',
		updatedAt: '2026-09-04',
		resolution:
			'Equipment now has its own top-level section, with item pages generated under type-based Equipment paths while Rules keeps only rule concepts.',
		relatedPage: 'internals.equipment.page',
		relatedRelease: '0.9.1'
	},
	{
		id: 'adventuring-gear-missing-item-pages',
		title: 'Adventuring Gear needed real item pages',
		summary:
			'Common supplies such as backpacks, torches, rope, rations, crowbars, grappling hooks, healer\'s kits, lanterns, and explorer\'s packs needed proper central item data and pages.',
		status: 'resolved',
		source: 'discord',
		category: 'content',
		reportedAt: '2026-09-04',
		updatedAt: '2026-09-04',
		resolution:
			'Added Adventuring Gear data and generated detail pages for the requested practical equipment references.',
		relatedPage: 'internals.equipment.adventuringGear',
		relatedRelease: '0.9.1'
	},
	{
		id: 'npcs-hidden-under-monsters',
		title: 'NPCs were grouped under Monsters',
		summary:
			'NPC references needed their own top-level category instead of being treated as monster content.',
		status: 'resolved',
		source: 'discord',
		category: 'content',
		reportedAt: '2026-09-04',
		updatedAt: '2026-09-04',
		resolution:
			'NPCs now have their own top-level navigation section and generated detail pages.',
		relatedPage: 'internals.npcs.page',
		relatedRelease: '0.9.1'
	},
	{
		id: 'npc-and-equipment-details-too-dense',
		title: 'NPC and equipment detail pages were hard to scan',
		summary:
			'NPC stat blocks and equipment statistics were rendered as dense reference text instead of using the existing structured detail and table components.',
		status: 'resolved',
		source: 'discord',
		category: 'ui',
		reportedAt: '2026-09-04',
		updatedAt: '2026-09-04',
		resolution:
			'NPC pages now use a structured detail component, and equipment statistics now render through the shared trait table component.',
		relatedPage: 'internals.npcs.page',
		relatedRelease: '0.9.1'
	},
	{
		id: 'missing-route-showed-blank-page',
		title: 'Missing pages could render as a blank page',
		summary:
			'Unknown or unavailable routes did not always show a useful not-found experience.',
		status: 'resolved',
		source: 'discord',
		category: 'ui',
		reportedAt: '2026-09-04',
		updatedAt: '2026-09-04',
		resolution:
			'Added a styled not-found page with search and related navigation paths so visitors are not left on a blank screen.',
		relatedPage: 'internals.utility.search',
		relatedRelease: '0.9.1'
	},
	{
		id: 'homepage-background-did-not-reach-edges',
		title: 'Homepage background did not fill the intended area',
		summary:
			'The homepage background image stopped inside the normal content padding instead of reaching the content edges and top boundary.',
		status: 'resolved',
		source: 'discord',
		category: 'ui',
		reportedAt: '2026-09-04',
		updatedAt: '2026-09-04',
		resolution:
			'The homepage article now uses the shared layout padding variables to let the background reach the edges while preserving the inner text alignment.',
		relatedPage: 'internals.website.homepage',
		relatedRelease: '0.9.1'
	},
	{
		id: 'homepage-cards-needed-clearer-visual-identity',
		title: 'Homepage cards needed stronger visual identity',
		summary:
			'Homepage cards looked too similar and did not visually reflect the subject of each card.',
		status: 'resolved',
		source: 'discord',
		category: 'ui',
		reportedAt: '2026-09-04',
		updatedAt: '2026-09-04',
		resolution:
			'Homepage cards now use glass-like surfaces with per-card accent colors while keeping the icon shape clean and separately colored.',
		relatedPage: 'internals.website.homepage',
		relatedRelease: '0.9.1'
	},
	{
		id: 'page-image-view-dialog-misplaced',
		title: 'Page image View dialog opened in the wrong position',
		summary:
			'Clicking View on class artwork could open the expanded image dialog in the top-left corner of the page.',
		status: 'resolved',
		source: 'discord',
		category: 'ui',
		reportedAt: '2026-09-04',
		updatedAt: '2026-09-04',
		resolution:
			'The image dialog now explicitly restores native dialog centering that was lost through the global reset.',
		relatedPage: 'internals.classes.barbarian.page',
		relatedRelease: '0.9.1'
	},
	{
		id: 'pugilist-progression-table-readability',
		title: 'Pugilist progression table was hard to read',
		summary:
			'The Pugilist progression table layout did not match the readability and spacing expected from the class pages.',
		status: 'resolved',
		source: 'discord',
		category: 'ui',
		reportedAt: '2026-09-04',
		updatedAt: '2026-09-04',
		resolution:
			'The Pugilist progression presentation was cleaned up and multiclassing was aligned with the class overview pattern.',
		relatedPage: 'internals.classes.pugilist.page',
		relatedRelease: '0.9.1'
	},
	{
		id: 'search-result-logo-preview',
		title: 'Search results can show the wrong favicon or logo',
		summary:
			'External search previews may still show an outdated or incorrect image while search providers refresh cached metadata.',
		status: 'in-progress',
		source: 'discord',
		category: 'seo',
		reportedAt: '2026-08-04',
		updatedAt: '2026-08-04',
		relatedPage: 'internals.community.roadmap'
	},
	{
		id: 'social-preview-inconsistent-images',
		title: 'Social previews used inconsistent page images',
		summary:
			'Some routes used class or old logo images instead of the dedicated social sharing preview image.',
		status: 'resolved',
		source: 'internal',
		category: 'seo',
		reportedAt: '2026-08-04',
		updatedAt: '2026-08-04',
		resolution:
			'The SEO helper now uses the dedicated D&D Portal Wiki social preview image by default for all pages.',
		relatedPage: 'internals.project.changelog'
	},
	{
		id: 'github-actions-pnpm-version-mismatch',
		title: 'GitHub Actions failed on pnpm version mismatch',
		summary:
			'The workflow configured pnpm 10 while package.json declared pnpm 11.10.0.',
		status: 'resolved',
		source: 'github',
		category: 'technical',
		reportedAt: '2026-08-04',
		updatedAt: '2026-08-04',
		resolution:
			'The hard-coded workflow pnpm version was removed so the action uses packageManager from package.json.',
		relatedPage: 'internals.project.changelog'
	},
	{
		id: 'monsters-locations-species-content-gaps',
		title: 'Some content areas still need more public detail',
		summary:
			'Monsters, locations, and species pages exist as public areas but still need deeper content expansion.',
		status: 'planned',
		source: 'internal',
		category: 'content',
		reportedAt: '2026-08-04',
		updatedAt: '2026-08-04',
		relatedPage: 'internals.community.roadmap'
	}
];

export const publicIssues = [...publicIssueItems].sort((left, right) => {
	const leftResolved = isResolvedIssue(left.status);
	const rightResolved = isResolvedIssue(right.status);

	if (leftResolved !== rightResolved) {
		return leftResolved ? 1 : -1;
	}

	return (right.updatedAt ?? right.reportedAt).localeCompare(left.updatedAt ?? left.reportedAt);
});

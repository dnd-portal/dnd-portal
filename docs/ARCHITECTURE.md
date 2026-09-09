# Architecture

D&D Portal Wiki is a static SvelteKit site. Most page content is defined in TypeScript data modules and rendered through reusable Svelte components.

## Main Areas

```text
src/lib/typescript/data/
```

Central source for internal pages, external links, social links, class data, spell data, rules pages, project pages, legal pages, route metadata, images, and tags.

```text
src/lib/typescript/pages/
```

Page-building helpers, current-page resolution, SEO metadata generation, and content types.

```text
src/lib/svelte/components/
```

Reusable Svelte components for links, page headers, content blocks, cards, tables, changelog entries, search, spell browsing, navigation, breadcrumbs, sidebars, and footer UI.

```text
src/lib/scss/
```

Global styling, tokens, layout styling, and component-specific SCSS partials.

```text
src/routes/
```

SvelteKit route entry points. Dynamic routes resolve pages from the central data system where possible.

```text
static/
```

Public static assets copied directly into the production build.

## Content Model

The project prefers structured page data over route-local page markup. A page should normally define:

- `href`
- `title`
- `subTitle`
- `description`
- optional `descriptions.long`
- image metadata
- content sections
- table-of-contents entries
- cards or child navigation where needed

Inline text that contains links should use the existing inline-content model instead of hand-written HTML.

## Links

Internal Wiki links should use central data paths and the existing Link or InlineContent components.

Avoid:

- hard-coded internal hrefs
- duplicated route strings
- plain internal `<a>` elements when a component exists
- invented routes for pages that do not exist

External links are also represented centrally where possible.

## FAQ architecture

FAQ content is structured TypeScript data aggregated by
`src/lib/typescript/data/internals/faq.ts`. Every group has a canonical slug,
question modules, and `/faq/<slug>/` routes. The FAQ route entry points are
`src/routes/faq/+page.svelte` and `src/routes/faq/[...page]/+page.ts`.

There are two supported ownership modes:

- **Attached FAQ:** the group has a `sourcePage` pointing to a real runtime
  page. Source-page lookup can attach the group to that page, while routes,
  Search, Related FAQ, and prerendering remain generic.
- **Ownerless FAQ:** the group has no ordinary page owner and omits
  `sourcePage`. It still has normal FAQ routes, Search, Related FAQ, and
  prerendering, but is deliberately excluded from source-page attachment.

The ownerless groups are `human`, `elf`, `astral-elf`, and `fighting`. Their
canonical storage is:

```text
src/lib/typescript/data/internals/faq-groups/<slug>/
```

Do not invent a runtime page or route solely to house an FAQ. Attached groups
live beside their genuine owners: classes and subclasses under
`src/lib/typescript/data/internals/classes/`, Rules pages under
`src/lib/typescript/data/internals/rules/`, Species under
`src/lib/typescript/data/internals/species/`, and analogous owner folders for
Monsters, Spells, and Equipment.

The final registry contains 60 modular groups and 300 structured questions.
There are no Markdown-derived FAQ groups in production.

## Data ownership and validation

- Classes use modular owner folders under
  `src/lib/typescript/data/internals/classes/`. Standard classes expose
  `_index_.ts`, `page.ts`, `progression.ts`, and `features.ts` where the data
  warrants that split. The compact BasicClass family uses `_index_.ts` plus
  `data.ts`; a `faq/` folder exists only for groups with canonical FAQ data.
- Rules data lives under `src/lib/typescript/data/internals/rules/`, including
  the standalone `movement.ts` owner and its `movement/faq/` attachment.
- Species data lives under `src/lib/typescript/data/internals/species/`.
  The current Species runtime owner is the index page; the four ownerless FAQ
  topics do not imply Species child pages.
- FAQ Search is assembled by
  `src/lib/typescript/pages/search.ts`, which indexes structured FAQ questions
  generically and categorizes ownerless groups as project FAQ content.
- FAQ rendering uses `src/lib/svelte/components/page/Faq.svelte` and the
  generic FAQ routes above. Related questions are resolved from the central
  group/question registry.
- The maintained static-site audit is `scripts/audit-prelive.mjs`; the
  focused FAQ output audit is retained as Codex migration tooling at
  `codex/scripts/audit-faq-static.mjs`. Run the project validation commands
  from the repository root:

```bash
pnpm check
pnpm build
pnpm audit:prelive:crawl
```

The ignored `codex/` directory is for local migration scripts, reports,
notes, and temporary artifacts only. It is not canonical project
documentation or production runtime data.

## Routing

The site is statically generated. Dynamic routes that need static output must provide prerender entries when SvelteKit cannot infer all pages automatically.

Current examples include:

- spell detail pages
- level-specific spellcasting pages
- central Wiki page routes
- class and subclass routes

## SEO

SEO metadata is generated centrally through `src/lib/typescript/pages/seo.ts`.

The layout emits:

- page title
- meta description
- canonical URL
- robots metadata
- Open Graph metadata
- Twitter card metadata
- icon and Apple touch icon links

Page-specific route data may override SEO values where needed, such as individual spell pages.

## Styling

The SCSS structure should remain component-oriented. Large page-level styles should be split into focused partials rather than being added back into one large file.

## Validation

Use:

```bash
pnpm check
pnpm build
pnpm audit:prelive:crawl
```

The pre-live audit checks central data paths, route shapes, static assets, spell slugs, placeholder markers, and built static output.

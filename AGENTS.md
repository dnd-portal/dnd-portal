# Repository Instructions

## Project

D&D Portal Wiki is a static website built with:

- SvelteKit
- Svelte 5
- TypeScript
- SCSS
- pnpm

The production website is hosted on GitHub Pages:

```text
https://dnd-portal.com/
```

## Working Principles

Before making changes:

- Inspect the relevant existing code first.
- Follow the existing project structure and conventions.
- Prefer small, focused changes over broad rewrites.
- Do not refactor unrelated code unless the task requires it.
- Reuse existing utilities, components, types, and data structures where possible.
- Do not invent missing requirements or silently assume behavior.
- If something is unclear or unsupported by the repository, state that explicitly.

## Package Manager

Use pnpm.

Do not use npm or yarn unless the repository configuration is intentionally changed.

The repository currently uses:

```text
Node.js 25.9.0
pnpm 11.10.0
```

## Development Commands

Start the local development server:

```bash
pnpm dev
```

Create a production build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Validation Commands

Run Svelte and TypeScript checks:

```bash
pnpm check
```

Run the unit test suite:

```bash
pnpm test
```

The following command is equivalent and may be used when specifically referring to unit tests:

```bash
pnpm test:unit
```

Run unit tests in watch mode during development:

```bash
pnpm test:unit:watch
```

Run the pre-live audit:

```bash
pnpm audit:prelive
```

Run the pre-live audit against the generated static build:

```bash
pnpm audit:prelive:crawl
```

`audit:prelive:crawl` expects the static website to have been built first.

Use:

```bash
pnpm build
pnpm audit:prelive:crawl
```

## Required Validation

Before considering implementation work complete, normally run:

```bash
pnpm check
pnpm test
pnpm build
```

For changes affecting public pages, routes, links, metadata, generated output, or static-site behavior, also run:

```bash
pnpm audit:prelive:crawl
```

A complete validation sequence is therefore:

```bash
pnpm check
pnpm test
pnpm build
pnpm audit:prelive:crawl
```

Do not claim that a command or check passed unless it was actually executed successfully.

## Static Hosting

The application is intentionally deployed as a static GitHub Pages website.

Keep these settings unless hosting is deliberately migrated:

- `@sveltejs/adapter-static`
- `prerender = true`
- `trailingSlash = 'always'`
- no repository base path such as `/dnd-wiki`
- deployment through `actions/upload-pages-artifact`
- deployment through `actions/deploy-pages`

Do not introduce server-only functionality without first accounting for the static hosting architecture.

## Data and Routing

Prefer shared data under:

```text
src/lib/typescript/data/
```

Rules:

- Use central data definitions where they already exist.
- Use central paths for internal links.
- Do not duplicate route metadata, titles, URLs, tags, or image metadata.
- Do not hard-code internal URLs when an existing data path is available.
- Prefer the existing internal-link components over plain `<a>` elements where applicable.
- Preserve existing route conventions.

## Svelte and TypeScript

- Prefer type-safe implementations.
- Do not use `any` merely to bypass type errors.
- Keep component responsibilities focused.
- Reuse existing shared components before creating near-duplicates.
- Follow existing Svelte 5 patterns used by the repository.
- Use SvelteKit navigation APIs where appropriate.

For browser history operations, use the SvelteKit navigation APIs instead of calling the browser History API directly.

## Accessibility

Preserve or improve accessibility.

In particular:

- use semantic HTML
- preserve keyboard navigation
- preserve visible focus states
- properly associate labels and form controls
- add appropriate `id` or `name` attributes to form fields
- do not replace accessible native behavior with inaccessible custom behavior

## Styling

- Keep SCSS organized by component or page area.
- Follow the existing visual language.
- Preserve established spacing, hierarchy, cards, tables, filters, and page-header behavior.
- Avoid introducing large unrelated style blocks into existing files.
- Avoid duplicating styles when an existing reusable pattern already exists.

## Content

Do not invent D&D rules, source claims, routes, legal wording, or fallback content.

When information is incomplete:

- preserve the gap
- make the missing information explicit
- do not fill it with plausible-sounding content

Keep legal, privacy, cookie, contribution, and content-removal pages consistent with the public site.

Do not add a repository-wide license unless the licensing of source code, written content, data, artwork, icons, and homebrew material has been deliberately decided.

## Git and Scope

- Do not commit generated or local-only files unless they belong in version control.
- Do not modify unrelated files.
- Preserve existing line endings and formatting where practical.
- Avoid destructive Git operations unless explicitly requested.
- Do not discard existing uncommitted user changes.

## Local Agent Instructions

Optional user-specific agent instructions may exist in:

```text
.agents/
```

If the directory exists, read the relevant files before starting substantial work.

The `.agents/` directory is local-only and may differ between contributors.

Its absence is normal and must not block development.

Repository-wide rules in this `AGENTS.md` take precedence over local preferences when they conflict with project requirements.
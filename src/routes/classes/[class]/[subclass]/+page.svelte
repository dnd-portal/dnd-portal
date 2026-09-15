<!--
	Location: src/routes/classes/[class]/[subclass]/+page.svelte
	Use: Generic subclass page for central subclass data.
-->
<script lang="ts">
	import { page } from '$app/state';
	import type { LinkPath } from '$lib/typescript/data/_index_';
	import { getSubclassBySlug } from '$lib/typescript/data/internals/classes/_index_';

	import NotFound from '$lib/svelte/components/page/NotFound.svelte';
	import Faq from '$lib/svelte/components/page/Faq.svelte';
	import PageContentSection from '$lib/svelte/components/page/PageContentSection.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import TableOfContents from '$lib/svelte/components/page/TableOfContents.svelte';
	import EditionSelector from '$lib/svelte/components/page/EditionSelector.svelte';
	import { editions } from '$lib/typescript/data/internals/editions';
	import { getCurrentPageContext } from '$lib/svelte/context/currentPage';
	import { getFaqItems } from '$lib/typescript/pages/faq';
	import { getFaqGroupBySourcePage } from '$lib/typescript/data/internals/faq';

	let subclassData = $derived(
		getSubclassBySlug(
			page.params.class ?? '',
			page.params.subclass ?? ''
		)
	);
	let content = $derived(subclassData?.content);
	let sourceMetadata = $derived(subclassData?.page?.sourceMetadata ?? []);
	const currentPage = getCurrentPageContext();
	let faqGroup = $derived(getFaqGroupBySourcePage(currentPage.path));
	let faqItems = $derived(faqGroup
		? faqGroup.questions.map((question) => ({
				question: question.question,
				answer: question.shortAnswer,
				reference: faqGroup.sourcePage as LinkPath,
				referenceLabel: faqGroup.title,
				faqPath: `internals.faq.${faqGroup.slug}.${question.slug}` as LinkPath
			}))
		: getFaqItems(currentPage.path));
</script>

{#if content}
	<div class="page-layout">
		<article class="wiki-article page-layout__article">
			<PageHeader>
				{#snippet headerMeta()}
					<div class="page-header__metadata">
						<EditionSelector current="5.5e" options={[{ id: '5.5e', label: `${editions['5.5e'].shortName} - Current`, href: page.url.pathname }]} />
						<div class="source-metadata" aria-label="Source metadata">
							{#each sourceMetadata as source}
								<span class="source-metadata__badge">{#if source.icon}<img src={source.icon} alt="" aria-hidden="true" />{/if}{source.label}: {source.value}</span>
							{/each}
						</div>
					</div>
				{/snippet}
			</PageHeader>

			{#each content.featureSections as section}
				<PageContentSection {section} />
			{/each}

			{#if faqItems.length}
				<Faq items={faqItems} />
			{/if}
		</article>

		<aside class="page-layout__toc">
			<TableOfContents sections={content.tableOfContents} />
		</aside>
	</div>
{:else}
	<NotFound />
{/if}

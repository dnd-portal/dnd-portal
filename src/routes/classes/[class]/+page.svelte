<!--
	Location: src/routes/classes/[class]/+page.svelte
	Use: Generic class page for central class data.
-->
<script lang="ts">
	import { page } from '$app/state';
	import EditionSelector from '$lib/svelte/components/page/EditionSelector.svelte';
	import { editions } from '$lib/typescript/data/internals/editions';
	import { getClassEditionRoute } from '$lib/typescript/data/internals/classes/edition-route';

	import ClassPageContent from '$lib/svelte/components/page/ClassPageContent.svelte';
	import NotFound from '$lib/svelte/components/page/NotFound.svelte';
	import type { EditionId } from '$lib/typescript/data/internals/editions';
	import type { ClassPageContentData } from '$lib/typescript/pages/class-content-types';
	import type { LinkPath } from '$lib/typescript/data/_index_';
	import { getOptionalRuntimeData, getRuntimeChildren, getRuntimeData } from '$lib/typescript/data/runtime';

	let { data } = $props();
	let resolvedRoute = $derived(data.resolvedRoute);
	let classData = $derived(data.classData);
	let editionData = $derived(data.editionData ?? null);
	let availableEditions = $derived(
		resolvedRoute
			? 'availableEditions' in (classData ?? {})
				? (classData as { availableEditions?: readonly EditionId[] }).availableEditions ?? []
				: []
			: []
	);
	let pageContent = $derived(data.pageContent ?? classData?.content);
	let faqItems = $derived.by(() => {
		const slug = resolvedRoute?.baseClassSlug;
		if (!slug) return [];

		const groupPath = `internals.faq.${slug}.page`;
		const group = getOptionalRuntimeData(groupPath);
		if (!group) return [];
		const questionPaths = getRuntimeChildren(groupPath);

		return questionPaths.map((questionPath) => {
			const question = getRuntimeData(questionPath);
			return {
				question: question.label ?? question.title,
				answer: question.description,
				reference: `/classes/${slug}/` as LinkPath,
				referenceLabel: group.title,
				faqPath: questionPath as LinkPath
			};
		});
	});
	let currentSourceMetadata = $derived(
		classData && 'sourceMetadata' in classData.page ? classData.page.sourceMetadata : []
	);
	let editionOptions = $derived(
		(availableEditions.length ? availableEditions : ['5.5e' as EditionId]).map((id) => ({
			id,
			label: editions[id].current ? `${editions[id].shortName} - Current` : editions[id].shortName,
			href: getClassEditionRoute(resolvedRoute?.baseClassSlug ?? '', id)
		}))
	);
</script>

{#if pageContent && resolvedRoute}
	<ClassPageContent
		content={pageContent as ClassPageContentData}
		faqItems={faqItems}
		header={{
			title: classData?.page.label ?? 'Barbarian',
			subtitle: classData?.page.subTitle ?? 'Character class',
			description: editionData?.intro ?? classData?.page.descriptions?.short ?? '',
			descriptionContent: classData?.page.descriptions?.long
		}}
	>
		{#snippet headerMeta()}
			{#if editionData || classData}
				<div class="page-header__metadata">
					<EditionSelector current={editionData?.edition ?? (resolvedRoute.edition ?? '5.5e')} options={editionOptions} />
					<div class="source-metadata" aria-label="Source metadata">
						{#each editionData ? [{ label: 'Source', value: editionData.source }, { label: 'Category', value: editionData.category }] : currentSourceMetadata as source}
							<span class="source-metadata__badge">
								{#if 'icon' in source && source.icon}<img src={source.icon} alt="" aria-hidden="true" />{/if}
								{source.label}: {source.value}
							</span>
						{/each}
					</div>
				</div>
			{/if}
		{/snippet}
	</ClassPageContent>
	{:else if pageContent}
		<ClassPageContent content={pageContent as unknown as ClassPageContentData} />
{:else}
	<NotFound />
{/if}

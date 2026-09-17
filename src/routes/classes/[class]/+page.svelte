<!--
	Location: src/routes/classes/[class]/+page.svelte
	Use: Generic class page for central class data.
-->
<script lang="ts">
	import { page } from '$app/state';
	import {
		getClassBySlug,
		resolveClassRoute
	} from '$lib/typescript/data/internals/classes/_index_';
	import { getClassEditionData } from '$lib/typescript/data/internals/classes/edition-data';
	import {
		createClassEditionContent,
		createCurrentBarbarianContent
	} from '$lib/typescript/data/internals/classes/edition-content';
	import EditionSelector from '$lib/svelte/components/page/EditionSelector.svelte';
	import { editions } from '$lib/typescript/data/internals/editions';
	import { getClassEditionRoute } from '$lib/typescript/data/internals/classes/edition-route';

	import ClassPageContent from '$lib/svelte/components/page/ClassPageContent.svelte';
	import NotFound from '$lib/svelte/components/page/NotFound.svelte';
	import type { EditionId } from '$lib/typescript/data/internals/editions';
	import type { ClassPageContentData } from '$lib/typescript/pages/class-content-types';

	let resolvedRoute = $derived(resolveClassRoute(page.params.class ?? ''));
	let classData = $derived(
		resolvedRoute?.edition === '5.5e'
			? getClassBySlug(resolvedRoute.baseClassSlug)
			: null
	);
	let editionData = $derived(
		resolvedRoute && resolvedRoute.edition !== '5.5e'
			? getClassEditionData(resolvedRoute.baseClassSlug, resolvedRoute.edition)
			: null
	);
	let content = $derived(classData?.content);
	let availableEditions = $derived(
		resolvedRoute
			? 'availableEditions' in (getClassBySlug(resolvedRoute.baseClassSlug) ?? {})
				? (getClassBySlug(resolvedRoute.baseClassSlug) as { availableEditions?: readonly EditionId[] }).availableEditions ?? []
				: []
			: []
	);
	let editionContent = $derived(editionData ? createClassEditionContent(editionData) : null);
	let currentContent = $derived(classData ? createCurrentBarbarianContent() : null);
	let pageContent = $derived(editionContent ?? currentContent ?? content);
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
	{:else if content}
		<ClassPageContent content={content as unknown as ClassPageContentData} />
{:else}
	<NotFound />
{/if}

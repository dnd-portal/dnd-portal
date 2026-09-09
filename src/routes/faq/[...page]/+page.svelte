<!-- FAQ detail pages use the same central page data and content blocks as Wiki pages. -->
<script lang="ts">
	import { page as appPage } from '$app/state';
	import type { LinkPath } from '$lib/typescript/data/_index_';
	import { getFaqGroup, getFaqQuestion } from '$lib/typescript/data/internals/faq';
	import { getCurrentPageContext } from '$lib/svelte/context/currentPage';

	import NotFound from '$lib/svelte/components/page/NotFound.svelte';
	import Faq from '$lib/svelte/components/page/Faq.svelte';
	import Link from '$lib/svelte/components/Link.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';

	const currentPage = getCurrentPageContext();
	let faqSegments = $derived((appPage.params.page ?? '').split('/').filter(Boolean));
	const group = $derived(getFaqGroup(faqSegments[0] ?? ''));
	const question = $derived(
		faqSegments[1] ? getFaqQuestion(faqSegments[0] ?? '', faqSegments[1]) : null
	);
	const faqReference = $derived((group?.sourcePage ?? '') as LinkPath);
	const faqItems = $derived(group?.questions.map((item) => ({
		question: item.question,
		answer: item.shortAnswer,
		reference: faqReference,
		referenceLabel: group.title,
		faqPath: `internals.faq.${group.slug}.${item.slug}` as LinkPath,
		faqLabel: 'Read full explanation'
	})) ?? []);
</script>

{#if currentPage.data}
	<div class="page-layout">
		<article class="wiki-article page-layout__article">
			<PageHeader />

			{#if question && group}
				<header class="faq-article__header">
					<p>{question.fullAnswer.introduction}</p>
				</header>

				{#each question.fullAnswer.sections as section}
					<section class="faq-article__section">
						<h2>{section.title}</h2>
						{#if section.blocks}
							{#each section.blocks as block}
								{#if block.type === 'paragraph'}
									<p>{block.content}</p>
								{:else}
									<ul>
										{#each block.items as item}
											<li>{item}</li>
										{/each}
									</ul>
								{/if}
							{/each}
						{:else}
							{#each section.paragraphs as paragraph}
								<p>{paragraph}</p>
							{/each}
						{/if}
					</section>
				{/each}

				<section class="faq-article__related" aria-labelledby="related-faq-title">
					<h2 id="related-faq-title">Related {group.title} FAQ</h2>
					<ul>
						{#each group.questions.filter((item) => item.slug !== question.slug) as relatedQuestion}
							<li>
								<Link
									goto={`internals.faq.${group.slug}.${relatedQuestion.slug}` as LinkPath}
									placeholder={relatedQuestion.question}
									popup="none"
								/>
							</li>
						{/each}
					</ul>
				</section>
			{:else if group}
				<Faq
					items={faqItems}
				/>
			{/if}
		</article>

	</div>
{:else}
	<NotFound />
{/if}

<!-- FAQ index: renders only registered FAQ groups from the central dataset. -->
<script lang="ts">
	import type { LinkPath } from '$lib/typescript/data/_index_';
	import { faqGroups } from '$lib/typescript/data/internals/faq';

	import Link from '$lib/svelte/components/Link.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';

</script>

<article class="wiki-article wiki-faq-index">
	<PageHeader />

	<section class="wiki-faq-index__section" aria-labelledby="faq-groups-title">
		<h2 id="faq-groups-title">FAQ Groups</h2>

		<div class="wiki-faq-index__grid">
			{#each faqGroups as group (group.slug)}
				<article class="wiki-faq-index__card">
					<h3>
						<Link
							goto={`internals.faq.${group.slug}.page` as LinkPath}
							placeholder={group.title}
							popup="none"
						/>
					</h3>
					<p>{group.description}</p>
					<p class="wiki-faq-index__count">
						{group.questions.length} questions
					</p>
					<Link
						goto={`internals.faq.${group.slug}.page` as LinkPath}
						placeholder="View FAQ →"
						popup="none"
					/>
				</article>
			{/each}
		</div>
	</section>
</article>

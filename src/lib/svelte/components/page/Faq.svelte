<!--
	Location: src/lib/svelte/components/page/Faq.svelte
	Use: Accessible FAQ disclosure list for page-level questions.
-->
<script lang="ts">
	import type { LinkPath } from '$lib/typescript/data/_index_';

	import Link from '$lib/svelte/components/Link.svelte';

	type FaqItem = {
		readonly question: string;
		readonly answer: string;
		readonly reference: string;
		readonly referenceLabel: string;
		readonly faqPath?: string;
		readonly faqLabel?: string;
	};

	let { items }: { items: readonly FaqItem[] } = $props();
</script>

<section class="faq" aria-labelledby="faq-title">
	<h2 id="faq-title">FAQ</h2>

	<div class="faq__list">
		{#each items as item}
			<details class="faq__item">
				<summary>
					<span class="faq__question">{item.question}</span>
					<span class="faq__chevron" aria-hidden="true"></span>
				</summary>

				<div class="faq__answer">
					{#if item.answer}
						<p>{item.answer}</p>
					{/if}
					<p class="faq__reference">
						<span>Read more:</span>
						<Link
							goto={(item.faqPath ?? item.reference) as LinkPath}
							placeholder={item.faqLabel ?? item.referenceLabel}
							popup="full"
						/>
					</p>
				</div>
			</details>
		{/each}
	</div>
</section>

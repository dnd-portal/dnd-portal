<script lang="ts">
	import InlineContent from './InlineContent.svelte';
	import type { InlineContent as InlineContentData } from '$lib/typescript/pages/content-types';

	type Trait = {
		label: string | InlineContentData;
		value: InlineContentData | string;
		items?: readonly InlineContentData[];
		supporting?: string;
		layout?: unknown
	};

	function labelText(label: Trait['label']): string {
		return typeof label === 'string' ? label : label.map((node) => node.type === 'text' ? node.text : '').join('');
	}

	function isWide(layout: Trait['layout']): boolean {
		return typeof layout === 'object' && layout !== null && 'width' in layout && layout.width === 'wide';
	}

	let {
		traits,
		icons = {}
	}: {
		traits: readonly Trait[];
		icons?: Record<string, string>
	} = $props();
</script>

{#snippet traitCard(trait: Trait)}
	<article class="class-trait-card" class:class-trait-card--wide={isWide(trait.layout)}>
		<header class="class-trait-card__header">
			<span class="class-trait-card__icon">
				<img
					 src={icons[labelText(trait.label)] ?? '/icons/white/entity/book.svg'}
					alt="" aria-hidden="true"
				/>
			</span>
			<h3>{#if typeof trait.label === 'string'}{trait.label}{:else}<InlineContent content={trait.label} />{/if}</h3>
		</header>

		<div class="class-trait-card__body">
			<div class="class-trait-card__value">
				{#if typeof trait.value === 'string'}
					{trait.value}
				{:else}
					<InlineContent content={trait.value} />
				{/if}

				{#if trait.items?.length}
					<ul class="class-trait-card__items">
						{#each trait.items as item}
							<li>
								<InlineContent content={item} />
							</li>
						{/each}
					</ul>
				{/if}
			</div>
			{#if trait.supporting}
				<small>{trait.supporting}</small>
			{/if}
		</div>
	</article>
{/snippet}

<div class="class-trait-cards">
	{#each traits as trait}
		{@render traitCard(trait)}
	{/each}
</div>

<script lang="ts">
	import InlineContent from './InlineContent.svelte';
	import type { InlineContent as InlineContentData } from '$lib/typescript/pages/content-types';

	type Trait = { label: string; value: InlineContentData | string; items?: readonly InlineContentData[]; supporting?: string; layout?: { featured?: boolean } };
	let { traits, icons = {} }: { traits: readonly Trait[]; icons?: Record<string, string> } = $props();
	let featuredTraits = $derived(traits.filter((trait) => trait.layout?.featured));
	let normalTraits = $derived(traits.filter((trait) => !trait.layout?.featured));
</script>

{#snippet traitCard(trait: Trait)}
	<article class="class-trait-card">
		<header class="class-trait-card__header">
			<span class="class-trait-card__icon"><img src={icons[trait.label] ?? '/icons/white/entity/book.svg'} alt="" aria-hidden="true" /></span>
			<h3>{trait.label}</h3>
		</header>
		<div class="class-trait-card__body">
			<div class="class-trait-card__value">
				{#if typeof trait.value === 'string'}{trait.value}{:else}<InlineContent content={trait.value} />{/if}
				{#if trait.items?.length}<ul class="class-trait-card__items">{#each trait.items as item}<li><InlineContent content={item} /></li>{/each}</ul>{/if}
			</div>
			{#if trait.supporting}<small>{trait.supporting}</small>{/if}
		</div>
	</article>
{/snippet}

<div class="class-trait-cards">
	{#if featuredTraits.length}<div class="class-trait-cards__featured">{#each featuredTraits as trait}{@render traitCard(trait)}{/each}</div>{/if}
	<div class="class-trait-cards__normal">{#each normalTraits as trait}{@render traitCard(trait)}{/each}</div>
</div>

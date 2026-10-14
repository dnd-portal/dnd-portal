<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';
	import HomebrewCollectionInfo from '$lib/svelte/components/page/HomebrewCollectionInfo.svelte';
	import { getHomebrewCollection } from '$lib/typescript/data/internals/homebrew/_index_';

	let { children }: { children: Snippet } = $props();
	let collection = $derived(getHomebrewCollection(page.params.collection ?? ''));
</script>

{@render children()}

{#if collection}
	<HomebrewCollectionInfo metadata={collection.metadata} />
{/if}

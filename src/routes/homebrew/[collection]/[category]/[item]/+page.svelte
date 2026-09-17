<script lang="ts">
	import { page } from '$app/state';
	import EquipmentDetail from '$lib/svelte/components/page/EquipmentDetail.svelte';
	import NotFound from '$lib/svelte/components/page/NotFound.svelte';
	import { getHomebrewMagicItem } from '$lib/typescript/data/internals/homebrew/_index_';

	let item = $derived(
		getHomebrewMagicItem(
			page.params.collection ?? '',
			page.params.category ?? '',
			page.params.item ?? ''
		)
	);
</script>

{#if item}
	<EquipmentDetail {item} />
{:else}
	<NotFound />
{/if}

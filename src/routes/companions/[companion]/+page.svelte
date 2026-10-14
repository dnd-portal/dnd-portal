<script lang="ts">
	import { page } from '$app/state';
	import CompanionDetail from '$lib/svelte/components/page/CompanionDetail.svelte';
	import { getCompanionBySlug } from '$lib/typescript/data/internals/companions';
	import NotFound from '$lib/svelte/components/page/NotFound.svelte';
	const companion = $derived(getCompanionBySlug(page.params.companion ?? ''));
</script>
{#if companion}<CompanionDetail {companion} />{:else}<NotFound />{/if}

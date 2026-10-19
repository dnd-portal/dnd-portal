<script lang="ts">
	import CompanionDetail from '$lib/svelte/components/page/CompanionDetail.svelte';
	import NotFound from '$lib/svelte/components/page/NotFound.svelte';

	let { data } = $props();
</script>

{#if data.companion}
	<CompanionDetail companion={data.companion} />
{:else}
	<NotFound />
{/if}

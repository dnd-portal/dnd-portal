<script>
	import { browser } from '$app/environment';
	import '../app.scss';

	let { children } = $props();
</script>

<svelte:head>
	{#if browser}
		<meta name="head-hydration-repro" content="client-only" />
	{/if}
</svelte:head>

{@render children()}

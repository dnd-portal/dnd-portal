<script lang="ts">
	import AcidSplashPage from '$lib/svelte/components/page/AcidSplashPage.svelte';
	import { page } from '$app/state';

	const editions = ['1e', '2e', '3e', '3-5e', '4e', '5e'] as const;
	const edition = $derived(editions.includes(page.params.edition as (typeof editions)[number]) ? page.params.edition as (typeof editions)[number] : '3-5e');
</script>

<AcidSplashPage {edition} />

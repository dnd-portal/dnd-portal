<script lang="ts">
	import { page } from '$app/state';
 import BladeWardPage from '$lib/svelte/components/page/BladeWardSharedPage.svelte';
	const edition = $derived(page.params.edition as '1e' | '2e' | '3e' | '3-5e' | '4e' | '5e');
</script>
<BladeWardPage {edition} />

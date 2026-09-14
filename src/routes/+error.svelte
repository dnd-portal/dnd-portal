<!--
	Location: src/routes/+error.svelte
	Use: User-facing error page for missing or failed routes.
-->
<script lang="ts">
	import { page } from '$app/state';
	import NotFound from '$lib/svelte/components/page/NotFound.svelte';
</script>

<NotFound analyticsPathname={page.url.pathname} />

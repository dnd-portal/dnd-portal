<!--
	Location: src/lib/svelte/components/Analytics.svelte
	Use: Send GA4 page views after SvelteKit has rendered the current document title.
-->
<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	function sendPageView(): void {
		(window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'page_view', {
			page_title: document.title,
			page_location: window.location.href,
			page_path: page.url.pathname
		});
	}

	onMount(() => {
		queueMicrotask(sendPageView);
		afterNavigate(() => queueMicrotask(sendPageView));
	});
</script>

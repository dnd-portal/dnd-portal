<script lang="ts">
	import type { PageContentSection, PageTableOfContentsSection } from '$lib/typescript/data/_index_';
	import { getData } from '$lib/typescript/data/_index_';
	import LocationPage from '$lib/svelte/components/page/LocationPage.svelte';

	const pageData = getData('internals.locations.brinehookHarbor.shopping') as {
		content: { sections: readonly PageContentSection[]; tableOfContents: readonly PageTableOfContentsSection[] };
	};
</script>

<LocationPage sections={pageData.content.sections} tableOfContents={pageData.content.tableOfContents} />

<script lang="ts">
	import type { HomebrewCollectionMetadata } from '$lib/typescript/data/internals/homebrew/types';
	import type { LinkPath } from '$lib/typescript/data/_index_';
	import Link from '$lib/svelte/components/Link.svelte';

	let { metadata }: { metadata: HomebrewCollectionMetadata } = $props();
</script>

<section class="homebrew-info wiki-article__section" aria-labelledby="homebrew-info-title">
	<h2 id="homebrew-info-title">{metadata.about.title}</h2>
	<p>{metadata.about.description}</p>
	<p>{metadata.about.attribution}</p>
	<p>{metadata.about.disclaimer}</p>

	<dl class="homebrew-info__metadata">
		<div>
			<dt>Setting</dt>
			<dd>{metadata.setting.name}</dd>
		</div>
		<div>
			<dt>Created by</dt>
			<dd>
				{#if metadata.creator.href}
					<Link goto={metadata.creator.href as LinkPath} popup="full" />
				{:else}
					{metadata.creator.name}
				{/if}
			</dd>
		</div>
		<div>
			<dt>Copyright</dt>
			<dd>© {metadata.copyright.holder}</dd>
		</div>
	</dl>

	<p class="homebrew-info__notice">{metadata.copyright.notice}</p>
</section>

<script lang="ts">
	import { getRuntimeData } from '$lib/typescript/data/runtime';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';

	const toolPaths = ['internals.utility.diceRoller', 'internals.utility.myCharacter'] as const;
	const tools = toolPaths.map((path) => ({ path, data: getRuntimeData(path) }));
</script>

<article class="wiki-article tools-page">
	<PageHeader />
	<div class="tools-page__grid">
		{#each tools as tool}
			<a class="tools-page__card" href={tool.data.href}>
				<img src={tool.data.img.href} alt="" aria-hidden="true" />
				<span>
					<strong>{tool.data.label ?? tool.data.title}</strong>
					<small>{tool.data.description}</small>
				</span>
			</a>
		{/each}
	</div>
</article>

<script lang="ts">
	import type { MonsterEntry } from '$lib/typescript/data/internals/monsters/rotwood-sovereign';
	let { items }: { items: readonly MonsterEntry[] } = $props();
	let query = $state('');
	let type = $state('all');
	let size = $state('all');
	let challengeRating = $state('all');
	let ruleset = $state('all');
	let contentType = $state('all');
	let world = $state('all');
	let visible = $derived(items.filter((item) => (!query.trim() || `${item.name} ${item.alternativeName} ${item.world}`.toLowerCase().includes(query.trim().toLowerCase())) && (type === 'all' || item.type === type) && (size === 'all' || item.size === size) && (challengeRating === 'all' || item.challengeRating === challengeRating) && (ruleset === 'all' || item.ruleset === ruleset) && (contentType === 'all' || item.contentType === contentType) && (world === 'all' || item.world === world)));
</script>

<section class="monster-browser" id="monster-browser" aria-labelledby="monster-browser-title">
	<header><h2 id="monster-browser-title">Monster Browser</h2><p>{visible.length} monster{visible.length === 1 ? '' : 's'}</p></header>
	<div class="monster-browser__filters" aria-label="Monster filters">
		<label>Search<input id="monster-search" name="monster-search" type="search" bind:value={query} placeholder="Search monsters" /></label>
		<label>Creature Type<select id="monster-type" name="monster-type" bind:value={type}><option value="all">All types</option><option>Plant</option></select></label>
		<label>Size<select id="monster-size" name="monster-size" bind:value={size}><option value="all">All sizes</option><option>Gargantuan</option></select></label>
		<label>Challenge Rating<select id="monster-cr" name="monster-cr" bind:value={challengeRating}><option value="all">All CRs</option><option value="10">CR 10</option></select></label>
		<label>Ruleset<select id="monster-ruleset" name="monster-ruleset" bind:value={ruleset}><option value="all">All rulesets</option><option>D&amp;D 5e (2014)</option></select></label>
		<label>Content Type<select id="monster-content" name="monster-content" bind:value={contentType}><option value="all">All content</option><option>Homebrew</option></select></label>
		<label>World<select id="monster-world" name="monster-world" bind:value={world}><option value="all">All worlds</option><option>Eldor</option></select></label>
	</div>
	<div class="monster-browser__grid">
		{#each visible as item}<a class="monster-browser__card" href={`/homebrew/eldor/monsters/${item.slug}/`}><small>{item.size} {item.type} · {item.contentType}</small><h3>{item.name}</h3><p>{item.description}</p><span>CR {item.challengeRating} · {item.role}</span></a>{/each}
	</div>
</section>

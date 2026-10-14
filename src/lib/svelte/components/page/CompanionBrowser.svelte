<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import type { Companion } from '$lib/typescript/data/internals/companions';
	import PageCard from '$lib/svelte/components/PageCard.svelte';
	let { items }: { items: readonly Companion[] } = $props();
	let searchTerm = $state('');
	let selectedType = $state('all');
	let selectedRole = $state('all');
	let selectedSize = $state('all');
	let selectedAlignment = $state('all');
	let types = $derived([...new Set(items.map((item) => item.type))].sort());
	let roles = $derived([...new Set(items.map((item) => item.role))].sort());
	let sizes = $derived([...new Set(items.map((item) => item.size))].sort());
	let alignments = $derived([...new Set(items.map((item) => item.alignment))].sort());
	let visibleItems = $derived(items.filter((item) => {
		const query = searchTerm.trim().toLowerCase();
		const matchesSearch = !query || `${item.name} ${item.type} ${item.size} ${item.role} ${item.description}`.toLowerCase().includes(query);
		return matchesSearch && (selectedType === 'all' || item.type === selectedType) && (selectedRole === 'all' || item.role === selectedRole) && (selectedSize === 'all' || item.size === selectedSize) && (selectedAlignment === 'all' || item.alignment === selectedAlignment);
	}));
	let activeFilterCount = $derived([searchTerm.trim().length > 0, selectedType !== 'all', selectedRole !== 'all', selectedSize !== 'all', selectedAlignment !== 'all'].filter(Boolean).length);
	function resetFilters(): void { searchTerm = ''; selectedType = 'all'; selectedRole = 'all'; selectedSize = 'all'; selectedAlignment = 'all'; }
	onMount(() => {
		selectedType = page.url.searchParams.get('type') ?? 'all';
		selectedRole = page.url.searchParams.get('role') ?? 'all';
		selectedSize = page.url.searchParams.get('size') ?? 'all';
		selectedAlignment = page.url.searchParams.get('alignment') ?? 'all';
	});
</script>

<section class="companion-browser" id="companion-browser" aria-labelledby="companion-browser-title">
	<h2 id="companion-browser-title">Companion Browser</h2>
	<p>Explore the available companions below. Select a companion to view its statistics, abilities, background information, and any associated campaign notes.</p>
	<div class="companion-browser__toolbar" aria-label="Companion filters">
		<label><span>Search</span><span class="companion-browser__search-control"><input id="companion-search" name="companion-search" type="search" bind:value={searchTerm} placeholder="Name, type, role..." />{#if searchTerm}<button type="button" class="companion-browser__clear-search" aria-label="Clear companion search" onclick={() => (searchTerm = '')}><img src="/icons/white/util/cross.svg" alt="" aria-hidden="true" /></button>{/if}</span></label>
		<label><span>Type</span><select id="companion-type" name="companion-type" bind:value={selectedType}><option value="all">All types</option>{#each types as type}<option value={type}>{type}</option>{/each}</select></label>
		<label><span>Role</span><select id="companion-role" name="companion-role" bind:value={selectedRole}><option value="all">All roles</option>{#each roles as role}<option value={role}>{role}</option>{/each}</select></label>
		<label><span>Size</span><select id="companion-size" name="companion-size" bind:value={selectedSize}><option value="all">All sizes</option>{#each sizes as size}<option value={size}>{size}</option>{/each}</select></label>
		<label><span>Alignment</span><select id="companion-alignment" name="companion-alignment" bind:value={selectedAlignment}><option value="all">All alignments</option>{#each alignments as alignment}<option value={alignment}>{alignment}</option>{/each}</select></label>
		{#if activeFilterCount > 0}<div class="companion-browser__filter-summary" role="status"><span>{activeFilterCount} filter{activeFilterCount === 1 ? '' : 's'} active</span><button type="button" onclick={resetFilters}>Reset</button></div>{/if}
	</div>
	{#if visibleItems.length}<div class="wiki-article__image-cards">{#each visibleItems as companion}<PageCard page={companion.pagePath} variant="image" eyebrow={`${companion.size} ${companion.type}`} descriptionText={companion.slug === 'puddle-slime' ? 'A cheerful, water-loving ooze with a curious personality. Able to slip through narrow spaces, sense nearby water, and blend into its surroundings, the Puddle Slime makes an unusual but surprisingly useful adventuring companion.' : companion.description.split('\n\n')[0]} />{/each}</div>{:else}<p class="companion-browser__empty">No companions match the current filters.</p>{/if}
</section>

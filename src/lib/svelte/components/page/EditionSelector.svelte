<script lang="ts">
	import { goto } from '$app/navigation';
	import { tick } from 'svelte';
	import type { EditionId } from '$lib/typescript/data/internals/editions';

	type EditionOption = { id: EditionId; label: string; href: string };
	let { current, options }: { current: EditionId; options: readonly EditionOption[] } = $props();
	let open = $state(false);
	let highlightedIndex = $state(0);
	let container: HTMLDivElement;
	let optionButtons: HTMLButtonElement[] = [];

	function selectedOption() { return options.find((option) => option.id === current) ?? options[0]; }
	function focusHighlighted() { tick().then(() => optionButtons[highlightedIndex]?.focus()); }
	function openMenu(index = Math.max(0, options.findIndex((option) => option.id === current))) {
		highlightedIndex = index; open = true; focusHighlighted();
	}
	function closeMenu() { open = false; }
	function toggleMenu() { if (open) closeMenu(); else openMenu(); }
	async function selectEdition(option: EditionOption) {
		highlightedIndex = options.indexOf(option); closeMenu();
		if (option.id !== current) await goto(option.href);
	}
	function moveHighlight(direction: 1 | -1) {
		if (!options.length) return;
		highlightedIndex = (highlightedIndex + direction + options.length) % options.length; focusHighlighted();
	}
	function handleTriggerKeydown(event: KeyboardEvent) {
		if (event.key === 'ArrowDown') { event.preventDefault(); if (open) moveHighlight(1); else openMenu(); }
		else if (event.key === 'ArrowUp') { event.preventDefault(); if (open) moveHighlight(-1); else openMenu(Math.max(0, options.length - 1)); }
		else if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggleMenu(); }
		else if (event.key === 'Escape' && open) { event.preventDefault(); closeMenu(); }
	}
	function handleOptionKeydown(event: KeyboardEvent, index: number) {
		if (event.key === 'ArrowDown') { event.preventDefault(); moveHighlight(1); }
		else if (event.key === 'ArrowUp') { event.preventDefault(); moveHighlight(-1); }
		else if (event.key === 'Home') { event.preventDefault(); highlightedIndex = 0; focusHighlighted(); }
		else if (event.key === 'End') { event.preventDefault(); highlightedIndex = options.length - 1; focusHighlighted(); }
		else if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectEdition(options[index]); }
		else if (event.key === 'Escape') { event.preventDefault(); closeMenu(); }
	}
</script>

<svelte:window onclick={(event) => open && container && !container.contains(event.target as Node) && closeMenu()} />

<div class="metadata-pill edition-selector" class:is-open={open} bind:this={container}>
	<img class="edition-selector__icon" src="/icons/white/game/source-book.svg" alt="" aria-hidden="true" />
	<span class="edition-selector__label">Edition:</span>
	<button type="button" class="edition-selector__trigger" aria-haspopup="listbox" aria-expanded={open} aria-controls="edition-selector-options" onclick={toggleMenu} onkeydown={handleTriggerKeydown}>
		<span>{selectedOption()?.label}</span><span class="edition-selector__chevron" aria-hidden="true">⌄</span>
	</button>
	{#if open}
		<div id="edition-selector-options" class="edition-selector__options" role="listbox" aria-label="Select D&D edition">
			{#each options as option, index}
				<button type="button" class="edition-selector__option" class:is-highlighted={index === highlightedIndex} role="option" aria-selected={option.id === current} bind:this={optionButtons[index]} onclick={() => selectEdition(option)} onkeydown={(event) => handleOptionKeydown(event, index)}>
					<span>{option.label}</span>{#if option.id === current}<span aria-hidden="true">✓</span>{/if}
				</button>
			{/each}
		</div>
	{/if}
</div>

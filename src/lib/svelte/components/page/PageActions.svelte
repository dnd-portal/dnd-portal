<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageAction } from '$lib/typescript/pages/page-actions';

	let { actions }: { actions: readonly PageAction[] } = $props();
	let isOpen = $state(false);

	function activate(action: PageAction): void {
		action.onActivate();
		isOpen = false;
	}

	onMount(() => {
		const handleKeydown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') isOpen = false;
		};

		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});
</script>

<div class="page-actions" class:page-actions--open={isOpen}>
	<div class="page-actions__list" aria-hidden={!isOpen} inert={!isOpen}>
		{#each actions as action, index}
			<button
				class="page-actions__action"
				style={`--page-action-index: ${index}`}
				type="button"
				aria-label={action.ariaLabel ?? action.label}
				onclick={() => activate(action)}
			>
				<span>{action.label}</span>
				<img src={action.icon} alt="" aria-hidden="true" />
			</button>
		{/each}
	</div>

	<button
		class="page-actions__trigger"
		type="button"
		aria-label={isOpen ? 'Close page actions' : 'Open page actions'}
		aria-expanded={isOpen}
		aria-haspopup="menu"
		onclick={() => (isOpen = !isOpen)}
	>
		<img src={isOpen ? '/icons/white/util/cross.svg' : '/icons/white/util/cog.svg'} alt="" aria-hidden="true" />
	</button>
</div>

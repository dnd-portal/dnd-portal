<!--
	Location: src/lib/svelte/components/page/EquipmentChoiceCard.svelte
	Use: Displays one informational starting-equipment group.
-->
<script lang="ts">
	import type { EquipmentChoiceGroup } from '$lib/typescript/data/_index_';

	import InlineContent from './InlineContent.svelte';

	let { group }: { group: EquipmentChoiceGroup } = $props();
</script>

<article class="equipment-card">
	<header>
			<p class="equipment-card__eyebrow">{group.instruction ?? 'Included'}</p>
		<h3>{group.label}</h3>
	</header>
	<div class="equipment-card__divider" aria-hidden="true"></div>

	{#if group.choices?.length}
		<div class="equipment-card__list">
			{#each group.choices as choice, index}
				<div class="equipment-card__choice">
					<InlineContent content={choice} />
				</div>

				{#if index < group.choices.length - 1}
					<div class="equipment-card__separator">or</div>
				{/if}
			{/each}
		</div>
	{/if}

	{#if group.items?.length}
		<div class="equipment-card__list">
			{#each group.items as item, index}
				<div class="equipment-card__choice">
					<InlineContent content={item} />
				</div>
			{/each}
		</div>
	{/if}
</article>

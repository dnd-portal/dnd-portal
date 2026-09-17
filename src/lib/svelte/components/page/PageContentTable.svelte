<script lang="ts">
	import type {
		PageContentTableColumn,
		PageContentTableRow
	} from '$lib/typescript/data/_index_';
	import InlineContent from './InlineContent.svelte';

	let {
		caption,
		columns,
		rows,
		showCaption = false
	}: {
		caption: string;
		columns: readonly PageContentTableColumn[];
		rows: readonly PageContentTableRow[];
		showCaption?: boolean;
	} = $props();
</script>

<div class="table-scroller">
	<table class="trait-table">
		<caption class={showCaption ? 'trait-table__caption--visible' : undefined}>{caption}</caption>
		<thead>
			<tr>
				{#each columns as column}
					<th scope="col">{column.label}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each rows as row}
				<tr>
					{#each columns as column, index}
						<td class:table-row-header={index === 0}>
							<InlineContent content={row[column.key] ?? []} />
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

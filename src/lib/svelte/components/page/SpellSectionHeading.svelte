<script lang="ts">
	let {
		id,
		title,
		icon
	}: {
		readonly id: string;
		readonly title: string;
		readonly icon: string;
	} = $props();
</script>

<h2 class="spell-section-heading" {id}>
	<img src={icon} alt="" aria-hidden="true" />
	<span>{title}</span>
</h2>

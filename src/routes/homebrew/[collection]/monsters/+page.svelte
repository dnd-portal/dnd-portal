<script lang="ts">
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import MonsterBrowser from '$lib/svelte/components/page/MonsterBrowser.svelte';
	import { rotwoodSovereign } from '$lib/typescript/data/internals/monsters/_index_';
</script>
<div class="page-layout"><article class="wiki-article page-layout__article"><PageHeader /><MonsterBrowser items={[rotwoodSovereign]} /></article></div>

<script lang="ts">
 import SpellDetailPage from '$lib/svelte/components/page/SpellDetailPage.svelte';
 import { buildAcidSplashDetail } from '$lib/typescript/pages/acidSplashDetail';
</script>

<SpellDetailPage model={buildAcidSplashDetail('5-5e')} />

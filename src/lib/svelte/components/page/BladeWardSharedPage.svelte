<script lang="ts">
 import SpellDetailPage from '$lib/svelte/components/page/SpellDetailPage.svelte';
 import type { SpellDetailViewModel } from '$lib/typescript/pages/spellDetail';
 import bladeWard55e from '$lib/typescript/data/internals/spells/blade-ward/5-5e/5-5e';
 let { edition = '5-5e' }: { edition?: string } = $props();
 const spell: any = bladeWard55e;
 const model = $derived<SpellDetailViewModel>({ slug: 'blade-ward', name: spell.name, level: spell.level === 0 ? 'Cantrip' : `Level ${spell.level}`, school: spell.school, source: "Player's Handbook (2024)", edition: edition === '5-5e' ? '5.5e' : edition, summary: spell.description?.[0], metadata: [{ id: 'level', label: 'Level', value: 'Cantrip', layout: 'compact' }, { id: 'school', label: 'School', value: spell.school ?? '', layout: 'compact' }, { id: 'casting-time', label: 'Casting Time', value: spell.castingTime?.value ? `${spell.castingTime.value} ${spell.castingTime.unit ?? ''}` : '1 action', layout: 'compact' }, { id: 'range', label: 'Range', value: spell.range?.label ?? spell.range?.type ?? 'Self', layout: 'compact' }, { id: 'duration', label: 'Duration', value: spell.duration?.type ?? '1 round', layout: 'compact' }, { id: 'components', label: 'Components', value: 'Verbal, Somatic', layout: 'compact' }, ...(spell.spellLists?.length ? [{ id: 'classes', label: 'Spell Lists', value: spell.spellLists.map((x: any) => `${x.class} ${x.level}`).join(', '), layout: 'full' as const }] : [])], sections: [{ id: 'blade-ward-description', title: 'Description', paragraphs: spell.description ?? [], icon: '/icons/white/entity/scroll.svg' }] });
</script>
<SpellDetailPage {model} />

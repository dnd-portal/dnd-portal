<!--
	Location: src/routes/spells/[page]/+page.svelte
	Use: Spell level, spellcasting overview, and spell detail pages.
-->
<script lang="ts">
	import { page as appPage } from '$app/state';
	import {
		getSpellBySlug,
		spellLevels,
		type SpellLevel
	} from '$lib/typescript/data/internals/rules/spellcasting/spells/spell-data';

	import NotFound from '$lib/svelte/components/page/NotFound.svelte';
	import Faq from '$lib/svelte/components/page/Faq.svelte';
	import PageCard from '$lib/svelte/components/PageCard.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import SpellBrowser from '$lib/svelte/components/page/SpellBrowser.svelte';
	import { getCurrentPageContext } from '$lib/svelte/context/currentPage';
	import { getFaqItems } from '$lib/typescript/pages/faq';
	import SpellDetailPage from '$lib/svelte/components/page/SpellDetailPage.svelte';
	import type { SpellDetailViewModel } from '$lib/typescript/pages/spellDetail';

	const slug = $derived(appPage.params.page ?? '');
	const level = $derived(spellLevels.find((item) => item.slug === slug));
	const spell = $derived(getSpellBySlug(slug));
	const isSpellcastingOverview = $derived(slug === 'spellcasting');
	const currentPage = getCurrentPageContext();
	let faqItems = $derived(getFaqItems(currentPage.path));

	const metadataLayout = (value: string, fallback: 'compact' | 'wide' | 'full' = 'compact') => {
		if (fallback === 'full') return fallback;
		return value.length > 34 ? 'wide' : fallback;
	};
</script>

{#if level}
	<div class="page-layout">
		<article class="wiki-article page-layout__article">
			<PageHeader />
			<SpellBrowser initialLevel={level.level as SpellLevel} showLevelFilter={false} />
			{#if faqItems.length}<Faq items={faqItems} />{/if}
		</article>
	</div>
{:else if isSpellcastingOverview}
	<div class="page-layout">
		<article class="wiki-article page-layout__article">
			<PageHeader />

			<section class="wiki-article__section" aria-labelledby="spellcasting-rules-title">
				<h2 id="spellcasting-rules-title">Spellcasting Rules</h2>

				<div class="wiki-article__cards">
					<PageCard page="internals.rules.spellcasting.page" density="compact" />
					<PageCard page="internals.rules.spellcasting.concentration" density="compact" />
					<PageCard page="internals.rules.spellcasting.cantrips" density="compact" />
				</div>
			</section>
			{#if faqItems.length}<Faq items={faqItems} />{/if}
		</article>
	</div>
{:else if spell && slug !== 'acid-splash'}
	{@const model: SpellDetailViewModel = {
		slug,
		name: spell.name,
		level: spell.levelLabel,
		school: spell.school,
		source: spell.sourceBook,
		edition: '5e',
		summary: spell.description[0],
		metadata: [
			{ id: 'level', label: 'Level', value: spell.levelLabel, layout: 'compact' },
			{ id: 'school', label: 'School', value: spell.school, layout: 'compact' },
			{ id: 'casting-time', label: 'Casting Time', value: spell.castingTime, layout: 'compact' },
			{ id: 'range', label: 'Range', value: spell.range, layout: 'compact' },
			{ id: 'duration', label: 'Duration', value: spell.duration, layout: 'compact' },
			{ id: 'components', label: 'Components', value: spell.components.raw, layout: metadataLayout(spell.components.raw) },
			{ id: 'classes', label: 'Spell Lists', value: spell.classes.join(', '), layout: 'full' },
			{ id: 'flags', label: 'Flags', value: [spell.ritual ? 'Ritual' : '', spell.concentration ? 'Concentration' : ''].filter(Boolean).join(', ') || 'None', layout: 'compact' }
		],
		sections: [
			{ id: 'spell-text', title: 'Description', paragraphs: spell.description, icon: '/icons/white/entity/scroll.svg' },
			...(spell.higherLevel.length ? [{ id: 'higher-levels', title: 'At Higher Levels', paragraphs: spell.higherLevel }] : [])
		]
	}}
	<SpellDetailPage {model} />
{:else}
	<NotFound />
{/if}

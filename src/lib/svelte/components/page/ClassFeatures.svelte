<script lang="ts">
	import type { PageContentSection as PageContentSectionData, ProgressionData } from '$lib/typescript/pages/content-types';
	import PageContentSection from './PageContentSection.svelte';

	let { overview, sections, progression }: { overview: PageContentSectionData; sections: readonly PageContentSectionData[]; progression: ProgressionData<string> } = $props();
	let levelBySection = $derived(new Map(progression.rows.flatMap((row) => row.features.filter((feature) => feature.sectionId).map((feature) => [feature.sectionId!, row.level]))));
	let groups = $derived(
		[...new Set(sections.map((section) => levelBySection.get(section.id) ?? null))].map((level) => ({
			level,
			sections: sections.filter((section) => (levelBySection.get(section.id) ?? null) === level)
		}))
	);

	function getFeatureIcon(section: PageContentSectionData): string {
		if (section.icon) return section.icon;
		const title = section.title.toLowerCase();
		if (title.includes('rage')) return '/icons/white/d20test/attacking.svg';
		if (title.includes('armor') || title.includes('defense')) return '/icons/white/attribute/ac.svg';
		if (title.includes('weapon') || title.includes('attack') || title.includes('strike')) return '/icons/white/weapon/strike.svg';
		if (title.includes('movement') || title.includes('pounce')) return '/icons/white/movement/walking.svg';
		if (title.includes('sense') || title.includes('instinct')) return '/icons/white/attribute/vision.svg';
		return '/icons/white/attribute/bonus.svg';
	}
</script>

<PageContentSection section={overview} />

<div class="class-features">
	{#each groups as group}
		<section class="class-features__level" aria-labelledby={group.level === null ? undefined : `class-features-level-${group.level}`}>
			<div class="class-features__divider">
				{#if group.level !== null}<h3 id={`class-features-level-${group.level}`}>Level {group.level}</h3>{:else}<h3>Additional features</h3>{/if}
				<span>{group.sections.length} {group.sections.length === 1 ? 'feature' : 'features'}</span>
			</div>
			{#each group.sections as section}
				<article class="class-feature">
					<div class="class-feature__icon" aria-hidden="true">
						<img src={getFeatureIcon(section)} alt="" />
					</div>
					<div class="class-feature__content"><PageContentSection {section} headingLevel="subsection" /></div>
					{#if group.level !== null}<span class="class-feature__level">Level {group.level}</span>{/if}
				</article>
			{/each}
		</section>
	{/each}
</div>

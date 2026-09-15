<script lang="ts">
	type QuickLink = readonly [string, string, string, string];
	const defaultLinks: readonly QuickLink[] = [['#class-features', 'Features', 'Explore class features', '/icons/white/util/build.svg'], ['#progression', 'Progression', 'See level-by-level growth', '/icons/white/util/trade.svg'], ['#subclasses', 'Subclasses', 'Choose a Primal Path', '/icons/white/game/party.svg'], ['#starting-equipment', 'Starting Equipment', 'Review starting gear', '/icons/white/entity/pack.svg']];
	let { className = 'Barbarian', links = defaultLinks }: { className?: string; links?: readonly QuickLink[] } = $props();
</script>
<nav class="quick-links" aria-label="Quick links"><header class="class-section-heading"><h2>Quick Links</h2><p>Jump to key information about the {className}.</p></header>{#each links as [href, title, description, icon]}<a {href}><span class="quick-link__icon"><img src={icon} alt="" aria-hidden="true" /></span><span class="quick-link__content"><strong>{title}</strong><small>{description}</small></span><span class="quick-link__arrow" aria-hidden="true">→</span></a>{/each}</nav>

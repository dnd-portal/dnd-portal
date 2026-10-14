<script lang="ts">
	import type { Companion } from '$lib/typescript/data/internals/companions';
	let { companion }: { companion: Companion } = $props();
	const intro = $derived(companion.description.split('\n\n')[0]);
	const stats = $derived([['🛡', 'Armor Class', companion.armorClass], ['♥', 'Hit Points', companion.hitPoints], ['↝', 'Speed', companion.speed], ['✦', 'Proficiency Bonus', companion.proficiencyBonus], ['◆', 'Size', companion.size]]);
	const info = $derived([['Name', companion.name], ['Type', companion.type], ['Size', companion.size], ['Alignment', companion.alignment], ['Proficiency Bonus', companion.proficiencyBonus], ['Role', companion.role]]);
</script>

<div class="companion-detail">
	<div class="companion-detail__main">
		<header class="companion-detail__header"><p class="companion-detail__eyebrow">Companion</p><h1>{companion.name}</h1><div class="companion-detail__badges"><a href={`/companions/?size=${encodeURIComponent(companion.size)}`}><img src="/icons/white/entity/object.svg" alt="" aria-hidden="true" />{companion.size}</a><a href={`/companions/?type=${encodeURIComponent(companion.type)}`}><img src="/icons/white/monster/ooze.svg" alt="" aria-hidden="true" />{companion.type}</a><a href={`/companions/?alignment=${encodeURIComponent(companion.alignment)}`}><img src="/icons/white/attribute/skillcheck.svg" alt="" aria-hidden="true" />{companion.alignment}</a><a href={`/companions/?role=${encodeURIComponent(companion.role)}`}><img src="/icons/white/entity/pet.svg" alt="" aria-hidden="true" />Companion</a></div><p>{intro}</p></header>
		<section class="companion-detail__section" aria-labelledby="core-statistics"><h2 id="core-statistics">Core Statistics</h2><div class="companion-detail__stats">{#each stats as stat}<div class="companion-stat"><span class="companion-stat__icon" aria-hidden="true">{stat[0]}</span><span><small>{stat[1]}</small><strong>{stat[2]}</strong></span></div>{/each}</div></section>
		<section class="companion-detail__section" aria-labelledby="ability-scores"><h2 id="ability-scores">Ability Scores</h2><div class="companion-detail__abilities">{#each companion.abilities as ability}<div><strong>{ability.name}</strong><b>{ability.score}</b><small>{ability.modifier}</small></div>{/each}</div></section>
		<section class="companion-detail__section" aria-labelledby="additional-statistics"><h2 id="additional-statistics">Additional Statistics</h2><div class="companion-detail__panels"><div><h3>Damage Resistances</h3><p>{companion.resistances}</p></div><div><h3>Condition Immunities</h3><p>{companion.immunities}</p></div><div><h3>Senses</h3><p>{companion.senses}</p></div><div><h3>Languages</h3><p>{companion.languages}</p></div></div></section>
		<section class="companion-detail__section" aria-labelledby="traits"><h2 id="traits">Traits</h2><div class="companion-detail__traits">{#each companion.traits as trait}<article><h3>{trait.name}</h3>{#each trait.description.split('\n\n') as paragraph}<p>{paragraph}</p>{/each}</article>{/each}</div></section>
		<section class="companion-detail__section" aria-labelledby="companion-about"><h2 id="companion-about">About {companion.name}</h2>{#each companion.description.split('\n\n') as paragraph}<p>{paragraph}</p>{/each}</section>
	</div>
	<aside class="companion-detail__aside"><div class="companion-artwork"><img src="/images/companions/puddle-slime.webp" alt="Puddle Slime resting in a sunlit wetland pond" /></div><section class="companion-panel"><h2>Basic Information</h2><dl>{#each info as item}<div><dt>{item[0]}</dt><dd>{item[1]}</dd></div>{/each}</dl></section><section class="companion-panel"><h2>Source &amp; Notes</h2><dl><div><dt>Source</dt><dd>{companion.source}</dd></div><div><dt>Notes</dt><dd>{companion.notes}</dd></div></dl></section></aside>
</div>

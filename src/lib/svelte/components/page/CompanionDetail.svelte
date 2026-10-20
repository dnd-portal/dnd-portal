<script lang="ts">
	import type { Companion, CompanionAction } from '$lib/typescript/data/internals/companions';
	let { companion }: { companion: Companion } = $props();
	const intro = $derived(companion.description.split('\n\n')[0]);
	const stats = $derived([['🛡', 'Armor Class', companion.armorClass], ['♥', 'Hit Points', companion.hitPoints], ['↝', 'Speed', companion.speed], ['✦', 'Proficiency Bonus', companion.proficiencyBonus], ['◆', 'Size', companion.size]]);
	const info = $derived([['Name', companion.name], ['Type', companion.type], ['Size', companion.size], ['Alignment', companion.alignment], ['Proficiency Bonus', companion.proficiencyBonus], ['Role', companion.role]]);
	const actions = $derived(companion.actions ?? []);
	const combatBehavior = $derived(companion.combatBehavior ?? []);
	function getActionIcon(action: CompanionAction): string {
		if (action.icon) return action.icon;
		if (action.name === 'Pseudopod') return '/icons/white/weapon/sword.svg';
		if (action.name === 'Splash!') return '/icons/white/util/bubble.svg';
		if (action.name === 'Absorb Water') return '/icons/white/util/water-drop.svg';
		return '/icons/white/combat/action.svg';
	}
</script>

<div class="companion-detail">
	<div class="companion-detail__upper">
	<div class="companion-detail__main">
		<header class="companion-detail__header"><p class="companion-detail__eyebrow">Companion</p><h1>{companion.name}</h1><div class="companion-detail__badges"><a href={`/companions/?size=${encodeURIComponent(companion.size)}`}><img src="/icons/white/entity/object.svg" alt="" aria-hidden="true" />{companion.size}</a><a href={`/companions/?type=${encodeURIComponent(companion.type)}`}><img src="/icons/white/monster/ooze.svg" alt="" aria-hidden="true" />{companion.type}</a><a href={`/companions/?alignment=${encodeURIComponent(companion.alignment)}`}><img src="/icons/white/attribute/skillcheck.svg" alt="" aria-hidden="true" />{companion.alignment}</a><a href={`/companions/?role=${encodeURIComponent(companion.role)}`}><img src="/icons/white/entity/pet.svg" alt="" aria-hidden="true" />Companion</a></div><p>{intro}</p></header>
		<section class="companion-detail__section" aria-labelledby="core-statistics"><h2 id="core-statistics">Core Statistics</h2><div class="companion-detail__stats">{#each stats as stat}<div class="companion-stat"><span class="companion-stat__icon" aria-hidden="true">{stat[0]}</span><span><small>{stat[1]}</small><strong>{stat[2]}</strong></span></div>{/each}</div></section>
		<section class="companion-detail__section" aria-labelledby="ability-scores"><h2 id="ability-scores">Ability Scores</h2><div class="companion-detail__abilities">{#each companion.abilities as ability}<div><strong>{ability.name}</strong><b>{ability.score}</b><small>{ability.modifier}</small></div>{/each}</div></section>
		<section class="companion-detail__section" aria-labelledby="additional-statistics"><h2 id="additional-statistics">Additional Statistics</h2><div class="companion-detail__panels"><div><h3>Damage Resistances</h3><p>{companion.resistances}</p></div><div><h3>Condition Immunities</h3><p>{companion.immunities}</p></div><div><h3>Senses</h3><p>{companion.senses}</p></div><div><h3>Languages</h3><p>{companion.languages}</p></div></div></section>
	</div>
	<aside class="companion-detail__aside"><div class="companion-artwork"><img src="/images/homebrew/companions/puddle-slime.webp" alt="Puddle Slime resting in a sunlit wetland pond" /></div><section class="companion-panel"><h2>Basic Information</h2><dl>{#each info as item}<div><dt>{item[0]}</dt><dd>{item[1]}</dd></div>{/each}</dl></section><section class="companion-panel"><h2>Source &amp; Notes</h2><dl><div><dt>Source</dt><dd>{companion.source}</dd></div><div><dt>Notes</dt><dd>{companion.notes}</dd></div></dl></section></aside>
	</div>
		<section class="companion-detail__section" aria-labelledby="traits"><h2 id="traits">Traits</h2><div class="companion-detail__traits">{#each companion.traits as trait}<article><h3>{trait.name}</h3>{#each trait.description.split('\n\n') as paragraph}<p>{paragraph}</p>{/each}</article>{/each}</div></section>
		{#if actions.length > 0}<section class="companion-detail__section" aria-labelledby="actions"><div class="companion-actions__divider"><h2 id="actions">Actions</h2><span>{actions.length} {actions.length === 1 ? 'action' : 'actions'}</span></div><div class="companion-detail__actions">{#each actions as action}<article class="companion-action"><div class="companion-action__icon" aria-hidden="true"><img src={getActionIcon(action)} alt="" /></div><div class="companion-action__content"><h3>{action.name}{#if action.usage} <small>{action.usage}</small>{/if}</h3>{#if action.attackType}<p><strong>{action.attackType}:</strong> {action.attackBonus}, {action.range}, {action.target}.</p>{/if}{#if action.savingThrow}<p><strong>{action.savingThrow}</strong></p>{/if}{#if action.damage}<p><strong>Damage:</strong> {action.damage}</p>{/if}{#if action.recharge}<p><strong>Recharge:</strong> Roll a d6 at the beginning of the Puddle Slime's turn when this ability is unavailable. It recharges on a roll of 5 or 6.</p>{/if}{#if action.onHit}<p><strong>Hit:</strong> {action.onHit}</p>{/if}{#if action.onSave}<p><strong>Successful Save:</strong> {action.onSave}</p>{/if}{#if action.limitedUse}<p><strong>Usage:</strong> {action.limitedUse}</p>{/if}{#if action.description.length > 0}<p>{action.description.join(' ')}</p>{/if}</div></article>{/each}</div></section>{/if}
		{#if combatBehavior.length > 0}<section class="companion-detail__section" aria-labelledby="combat-behavior"><h2 id="combat-behavior">Combat Behavior</h2><ol class="companion-detail__behavior">{#each combatBehavior as rule}<li>{rule}</li>{/each}</ol></section>{/if}
		<section class="companion-detail__section" aria-labelledby="companion-about"><h2 id="companion-about">About {companion.name}</h2>{#each companion.description.split('\n\n') as paragraph}<p>{paragraph}</p>{/each}</section>
</div>

<script lang="ts">
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import { onMount } from 'svelte';

	type Die = { sides: number; icon: string; label: string };
	type Result = { value: number; sides: number; kept: boolean };

	const standardDice: readonly Die[] = [
		{ sides: 4, icon: '/icons/white/dice/d4.svg', label: 'd4' },
		{ sides: 6, icon: '/icons/white/dice/d6.svg', label: 'd6' },
		{ sides: 8, icon: '/icons/white/dice/d8.svg', label: 'd8' },
		{ sides: 10, icon: '/icons/white/dice/d10.svg', label: 'd10' },
		{ sides: 12, icon: '/icons/white/dice/d12.svg', label: 'd12' },
		{ sides: 20, icon: '/icons/white/dice/d20.svg', label: 'd20' }
	];

	let count = $state(1);
	let sides = $state(20);
	let mode = $state<'normal' | 'advantage' | 'disadvantage'>('normal');
	let results = $state<Result[]>([]);
	let total = $derived(results.filter((result) => result.kept).reduce((sum, result) => sum + result.value, 0));

	onMount(() => {
		const params = new URLSearchParams(window.location.search);
		const dice = params.get('d')?.match(/^(\d+)d(\d+)$/i);
		const countParam = Number(params.get('a'));
		const sidesParam = Number(params.get('f'));

		if (dice) {
			count = Math.min(100, Math.max(1, Number(dice[1])));
			sides = Math.min(1000, Math.max(2, Number(dice[2])));
		} else if (Number.isInteger(countParam) && Number.isInteger(sidesParam)) {
			count = Math.min(100, Math.max(1, countParam));
			sides = Math.min(1000, Math.max(2, sidesParam));
		} else {
			return;
		}

		roll();
	});

	function chooseDie(value: number) {
		sides = value;
	}

	function roll() {
		const rolled: Result[] = [];
		for (let index = 0; index < Math.min(100, Math.max(1, count)); index += 1) {
			const first = Math.floor(Math.random() * sides) + 1;
			if (mode === 'normal') {
				rolled.push({ value: first, sides, kept: true });
				continue;
			}
			const second = Math.floor(Math.random() * sides) + 1;
			const keepFirst = mode === 'advantage' ? first >= second : first <= second;
			rolled.push({ value: first, sides, kept: keepFirst });
			rolled.push({ value: second, sides, kept: !keepFirst });
		}
		results = rolled;
	}
</script>

<svelte:head>
	<meta name="description" content="Roll standard or custom dice with advantage and disadvantage." />
</svelte:head>

<article class="wiki-article dice-roller-page">
	<PageHeader />
		<section class="dice-roller">
		<div class="dice-roller__panel">
			<div class="dice-roller__dice-grid" aria-label="Choose a die">
				{#each standardDice as die}
					<button class:active={sides === die.sides} type="button" aria-pressed={sides === die.sides} onclick={() => chooseDie(die.sides)}>
						<img src={die.icon} alt="" aria-hidden="true" />
						<span>{die.label}</span>
					</button>
				{/each}
			</div>

			<div class="dice-roller__fields">
				<label>Number of dice<input type="number" min="1" max="100" bind:value={count} /></label>
				<label>Custom number of sides<input type="number" min="2" max="1000" bind:value={sides} /></label>
			</div>

			<div class="dice-roller__modes" role="group" aria-label="Roll mode">
				<button class:active={mode === 'normal'} type="button" onclick={() => (mode = 'normal')}>Normal</button>
				<button class:active={mode === 'advantage'} class:advantage-active={mode === 'advantage'} type="button" onclick={() => (mode = 'advantage')}><img src="/icons/white/dice/advantage.svg" alt="" aria-hidden="true" /> Advantage</button>
				<button class:active={mode === 'disadvantage'} class:disadvantage-active={mode === 'disadvantage'} type="button" onclick={() => (mode = 'disadvantage')}><img src="/icons/white/dice/disadvantage.svg" alt="" aria-hidden="true" /> Disadvantage</button>
			</div>

			<button class="dice-roller__roll button button--primary" type="button" onclick={roll}><img src="/icons/white/dice/roll.svg" alt="" aria-hidden="true" /> Roll</button>
		</div>

		{#if results.length > 0}
			<section class="dice-roller__results" aria-live="polite">
				<div><span class="eyebrow">Total</span><strong>{total}</strong></div>
				<div class="dice-roller__result-list">
					{#each results as result}
						<span class:discarded={!result.kept} title={result.kept ? 'Kept' : 'Discarded'}>{result.value}<small>d{result.sides}</small></span>
					{/each}
				</div>
			</section>
		{/if}
	</section>
</article>

<style lang="scss">
	.dice-roller { width: 100%; margin: 0; padding: 0; }
	.eyebrow { color: var(--color-accent, #d7b56d); font-size: .75rem; letter-spacing: .12em; text-transform: uppercase; margin: 0 0 .5rem; }
	.dice-roller__panel, .dice-roller__results { margin: 0; padding: 0; }
	.dice-roller__dice-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: .75rem; }
	.dice-roller button { color: inherit; cursor: pointer; border: 1px solid rgba(255,255,255,.16); border-radius: .5rem; background: rgba(0,0,0,.16); padding: .75rem; font: inherit; }
	.dice-roller button:hover, .dice-roller button.active { border-color: var(--color-accent, #d7b56d); background: rgba(215,181,109,.14); }
	.dice-roller button.active { color: var(--color-accent, #d7b56d); }
	.dice-roller__dice-grid button { display: grid; justify-items: center; gap: .35rem; }
	.dice-roller__dice-grid img { width: 2.5rem; height: 2.5rem; filter: brightness(0) invert(1); }
	.dice-roller__dice-grid button.active img { filter: brightness(0) saturate(100%) invert(75%) sepia(34%) saturate(555%) hue-rotate(359deg) brightness(89%) contrast(88%); }
	.dice-roller__fields { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1.5rem 0; }
	.dice-roller label { display: grid; gap: .4rem; font-weight: 600; }
	.dice-roller input { width: 100%; box-sizing: border-box; padding: .7rem; border: 1px solid rgba(255,255,255,.2); border-radius: .4rem; background: rgba(0,0,0,.2); color: inherit; font: inherit; }
	.dice-roller__modes { display: flex; gap: .6rem; flex-wrap: wrap; }
	.dice-roller__modes button { display: inline-flex; align-items: center; gap: .4rem; }
	.dice-roller__modes img, .dice-roller__roll img { width: 1.2rem; height: 1.2rem; filter: brightness(0) invert(1); }
	.dice-roller__modes button.active img { filter: brightness(0) saturate(100%) invert(75%) sepia(34%) saturate(555%) hue-rotate(359deg) brightness(89%) contrast(88%); }
	.dice-roller__modes button.advantage-active { color: #69c982; border-color: #69c982; background: rgba(105, 201, 130, .14); }
	.dice-roller__modes button.advantage-active img { filter: brightness(0) saturate(100%) invert(71%) sepia(28%) saturate(873%) hue-rotate(85deg) brightness(92%) contrast(87%); }
	.dice-roller__modes button.disadvantage-active { color: #e87979; border-color: #e87979; background: rgba(232, 121, 121, .14); }
	.dice-roller__modes button.disadvantage-active img { filter: brightness(0) saturate(100%) invert(59%) sepia(47%) saturate(1051%) hue-rotate(315deg) brightness(97%) contrast(86%); }
	.dice-roller__roll { margin-top: 1.5rem; display: inline-flex; align-items: center; gap: .5rem; }
	.dice-roller__results { display: flex; align-items: center; gap: 2rem; margin-top: 1rem; }
	.dice-roller__results strong { display: block; font-size: 2.5rem; }
	.dice-roller__result-list { display: flex; gap: .5rem; flex-wrap: wrap; }
	.dice-roller__result-list span { padding: .55rem .7rem; border-radius: .4rem; background: rgba(215,181,109,.18); font-weight: 700; }
	.dice-roller__result-list span.discarded { opacity: .4; text-decoration: line-through; }
	.dice-roller__result-list small { display: block; font-size: .65rem; font-weight: 400; }
	@media (max-width: 600px) { .dice-roller__dice-grid { grid-template-columns: repeat(3, 1fr); } .dice-roller__fields { grid-template-columns: 1fr; } .dice-roller__results { align-items: flex-start; flex-direction: column; gap: 1rem; } }
</style>

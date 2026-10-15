<script lang="ts">
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import { convertCurrency, currencies } from '$lib/typescript/tools/currency';

	let amounts = $state<string[]>(currencies.map(() => '0'));

	function updateCurrency(index: number, event: Event): void {
		const input = event.currentTarget as HTMLInputElement;
		const value = input.value;

		if (value === '') {
			amounts = currencies.map(() => '');
			return;
		}

		if (!/^\d*(?:\.\d*)?$/.test(value)) return;
		amounts = convertCurrency(value, index);
	}
</script>

<article class="wiki-article currency-converter-page">
	<PageHeader />

	<section class="currency-converter" aria-labelledby="currency-converter-title">
		<div class="currency-converter__panel">
			<h2 id="currency-converter-title">Currency Converter</h2>
			<p>Convert between the five standard D&amp;D currencies using their value in gold pieces.</p>

			<div class="currency-converter__fields">
				{#each currencies as currency, index}
					<label class="currency-converter__card">
						<span class="currency-converter__card-title">{currency.name} <small>{currency.abbreviation}</small></span>
						<input
							id={`currency-${currency.abbreviation.toLowerCase()}`}
							name={`currency-${currency.abbreviation.toLowerCase()}`}
							type="number"
							min="0"
							step="any"
							value={amounts[index]}
							oninput={(event) => updateCurrency(index, event)}
						/>
					</label>
				{/each}
			</div>
		</div>

		<section class="currency-converter__reference" aria-labelledby="currency-reference-title">
			<h2 id="currency-reference-title">Exchange Rates</h2>
			<table>
				<thead><tr><th scope="col">Currency</th><th scope="col">Abbreviation</th><th scope="col">Value in GP</th></tr></thead>
				<tbody>
					{#each currencies as currency}
						<tr><th scope="row">{currency.name}</th><td>{currency.abbreviation}</td><td>{currency.gpValue}</td></tr>
					{/each}
				</tbody>
			</table>
		</section>
	</section>
</article>

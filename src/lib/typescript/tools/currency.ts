export const currencies = [
	{ abbreviation: 'CP', name: 'Copper Pieces', copperValue: 1, gpValue: '0.01 GP' },
	{ abbreviation: 'SP', name: 'Silver Pieces', copperValue: 10, gpValue: '0.1 GP' },
	{ abbreviation: 'EP', name: 'Electrum Pieces', copperValue: 50, gpValue: '0.5 GP' },
	{ abbreviation: 'GP', name: 'Gold Pieces', copperValue: 100, gpValue: '1 GP' },
	{ abbreviation: 'PP', name: 'Platinum Pieces', copperValue: 1000, gpValue: '10 GP' }
] as const;

export function convertCurrency(amount: string, currencyIndex: number): string[] {
	const parsed = Number(amount);
	if (!Number.isFinite(parsed) || parsed < 0) return currencies.map(() => '');

	const copper = parsed * currencies[currencyIndex].copperValue;
	return currencies.map((currency) => formatAmount(copper / currency.copperValue));
}

function formatAmount(value: number): string {
	if (value === 0) return '0';
	return Number(value.toPrecision(12)).toString();
}

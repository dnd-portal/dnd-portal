export type SpellSource = {
	readonly name: string;
	readonly shortName: string;
	readonly edition: string;
};

export const spellSources = {
	'phb-3-5e': {
		name: "Player's Handbook",
		shortName: 'PHB',
		edition: '3-5e'
	}
} as const satisfies Readonly<Record<string, SpellSource>>;

export type SpellSourceKey = keyof typeof spellSources;

export default spellSources;

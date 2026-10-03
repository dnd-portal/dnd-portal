export type SpellSource = {
	readonly name: string;
	readonly shortName: string;
	readonly edition: string;
};

export const spellSources = {
	'dnd-portal-conversion': {
		name: 'D&D Portal Conversion',
		shortName: 'Portal Conversion',
		edition: '2e'
	},
	'phb-3-5e': {
		name: "Player's Handbook",
		shortName: 'PHB',
		edition: '3-5e'
	},
	'portal-conversion-4e': {
		name: 'D&D Portal Conversion',
		shortName: 'Portal Conversion',
		edition: '4e'
	},
	'players-handbook-5e': {
		name: "Player's Handbook",
		shortName: 'PHB',
		edition: '5e'
	},
	'players-handbook-2024': {
		name: "Player's Handbook",
		shortName: 'PHB',
		edition: '5-5e'
	}
} as const satisfies Readonly<Record<string, SpellSource>>;

export type SpellSourceKey = keyof typeof spellSources;

export default spellSources;

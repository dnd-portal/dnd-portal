export type ClassEditionFeature = {
	level: number;
	name: string;
	description: string;
};

export type ClassEditionRow = {
	level: number;
	attack?: string;
	fortitude?: string;
	reflex?: string;
	will?: string;
	features: string;
};

export type ClassEditionData = {
	edition: '5e' | '4e' | '3.5e' | '3e';
	label: string;
	source: string;
	category: string;
	intro: string;
	traits: readonly { label: string; value: string; supporting?: string }[];
	features: readonly ClassEditionFeature[];
	progression: readonly ClassEditionRow[];
	sections: readonly { id: string; title: string; text: string }[];
	levelCap: number;
};

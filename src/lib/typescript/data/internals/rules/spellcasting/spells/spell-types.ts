export type NewSpellLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

import type { InlineContent, PageContentBlock } from '$lib/typescript/pages/content-types';
import type { SpellSourceKey } from './sources';

export type NewSpellContentBlock = PageContentBlock;

export type NewSpellExplanationSection = {
	readonly id: string;
	readonly title: string;
	readonly blocks: readonly NewSpellContentBlock[];
};

export type NewSpell = {
	readonly id: string;
	readonly edition: string;
	readonly source: SpellSourceKey;
	readonly name: string;
	readonly level: NewSpellLevel;
	readonly school: string;
	readonly subschool: string;
	readonly descriptors: readonly string[];
	readonly castingTime: {
		readonly value: number;
		readonly unit: string;
	};
	readonly range: {
		readonly type: string;
		readonly base: number;
		readonly scaling: {
			readonly distance: number;
			readonly perCasterLevels: number;
		};
		readonly unit: string;
	};
	readonly effect: string;
	readonly duration: {
		readonly type: string;
	};
	readonly components: {
		readonly verbal: boolean;
		readonly somatic: boolean;
		readonly material: boolean;
	};
	readonly savingThrow: {
		readonly allowed: boolean;
	};
	readonly spellResistance: boolean;
	readonly spellLists: readonly {
		readonly class: string;
		readonly level: NewSpellLevel;
	}[];
	readonly attack: {
		readonly type: string;
	};
	readonly damage: {
		readonly dice: string;
		readonly type: string;
	};
	readonly content: readonly NewSpellContentBlock[];
	readonly summary: InlineContent;
	readonly sections: readonly NewSpellExplanationSection[];
	readonly faq: readonly string[];
};

import type {
	InlineContent,
	PageContentSection,
	PageTableOfContentsSection,
	ProgressionData
} from '$lib/typescript/pages/content-types';
import type { ClassPageContentData } from '$lib/typescript/pages/class-content-types';
import type { ClassEditionData } from './edition-types';
import { barbarianFaqEntries } from '../faq';
import { barbarian } from './barbarian/_index_';
import { page as barbarianPage } from './barbarian/page';

const text = (value: string): InlineContent => [{ type: 'text', text: value }];

function slugify(value: string): string {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function section(id: string, title: string, content: readonly string[]): PageContentSection {
	return {
		id,
		title,
		blocks: content.map((paragraph) => ({ type: 'paragraph', content: text(paragraph) }))
	};
}

export function createClassEditionContent(data: ClassEditionData): ClassPageContentData {
	const featureSections = data.features.map((feature) =>
		section(slugify(feature.name), feature.name, [feature.description])
	);
	const progression: ProgressionData<string> = {
		title: `${data.label} Barbarian progression`,
		heading: 'Progression',
		columns:
			data.edition === '4e'
				? [
						{ key: 'level', label: 'Level', format: 'ordinal' },
						{ key: 'features', label: 'Features' }
				  ]
				: data.edition === '5e'
					? [
							{ key: 'level', label: 'Level', format: 'ordinal' },
							{ key: 'proficiencyBonus', label: 'Proficiency Bonus', format: 'signed' },
							{ key: 'features', label: 'Features' },
							{ key: 'rages', label: 'Rages' },
							{ key: 'rageDamage', label: 'Rage Damage', format: 'signed' }
						  ]
						: [
								{ key: 'level', label: 'Level', format: 'ordinal' },
								{ key: 'baseAttackBonus', label: 'BAB' },
								{ key: 'fortitude', label: 'Fort' },
								{ key: 'reflex', label: 'Ref' },
								{ key: 'will', label: 'Will' },
								{ key: 'features', label: 'Special' }
							  ],
		rows: data.progression.map((row) => ({
			level: row.level,
			proficiencyBonus: 0,
			features: row.features.split(', ').map((label) => ({ label })),
			values: {
				baseAttackBonus: row.attack ?? '',
				fortitude: row.fortitude ?? '',
				reflex: row.reflex ?? '',
				will: row.will ?? '',
				rages: row.level >= 20 ? 'Unlimited' : Math.min(6, Math.max(2, Math.ceil(row.level / 3))),
				rageDamage: row.level >= 16 ? 4 : row.level >= 9 ? 3 : 2
			}
		}))
	};

	const editionSections = data.sections.map((item) => section(item.id, item.title, [item.text]));
	const allSections = [
		section('identity', 'About the Barbarian', [data.intro]),
		{
			id: 'core-traits',
			title: 'Core Traits',
			subtitle: 'The fundamental mechanics of this Barbarian edition.',
			blocks: [
				{
					type: 'field-list' as const,
					items: data.traits.map((trait) => ({ label: trait.label, content: text(trait.value) }))
				}
			]
		},
		section('class-features', 'Features', ['Edition-specific class mechanics.']),
		...featureSections,
		...editionSections
	];

	return {
		startingEquipment: [],
		progression,
		sections: {
			identity: allSections[0],
			coreTraits: allSections[1],
			classFeaturesOverview: allSections[2],
			featureSections,
			detailSections: editionSections,
			subclasses: undefined
		},
		tableOfContents: [
			{ id: 'identity', title: 'About the Barbarian' },
			{ id: 'core-traits', title: 'Core Traits' },
			{ id: 'progression', title: 'Progression' },
			{
				id: 'class-features',
				title: 'Features',
				children: featureSections.map((feature) => ({ id: feature.id, title: feature.title }))
			},
			...editionSections.map(({ id, title }) => ({ id, title }))
		] satisfies readonly PageTableOfContentsSection[]
	};
}

export function createCurrentBarbarianContent(): ClassPageContentData {
	const source = barbarian.content;
	const featureSections = source.classFeatureSections.slice(3) as readonly PageContentSection[];
	const primalPath = featureSections.find((item: PageContentSection) => item.title === 'Primal Path');
	const subclasses = primalPath ? { ...primalPath, id: 'subclasses', title: 'Subclasses' } : undefined;
	const identity: PageContentSection = {
		id: 'identity',
		title: 'About the Barbarian',
		blocks: (barbarianPage.descriptions?.long ?? []).map((paragraph: InlineContent) => ({
			type: 'paragraph' as const,
			content: paragraph
		}))
	};
	const traitItems: { label: string; content: InlineContent }[] = [
		...source.coreTraits.traits.map((trait) => ({ label: trait.label, content: trait.value as InlineContent })),
		{
			label: 'Multiclassing',
			content: [
				{ type: 'link', path: 'internals.rules.abilityScores.strength', label: 'Strength' },
				{ type: 'text', text: ' 13 or higher' }
			]
		}
	];
	const quickLinks = [
		['#class-features', 'Features', 'Explore class features', '/icons/white/util/build.svg'],
		['#progression', 'Progression', 'See level-by-level growth', '/icons/white/util/trade.svg'],
		['#subclasses', 'Subclasses', 'Choose a Primal Path', '/icons/white/game/party.svg'],
		['#starting-equipment', 'Starting Equipment', 'Review starting gear', '/icons/white/entity/pack.svg']
	] as const;
	const tableOfContents: readonly PageTableOfContentsSection[] =
		(source.tableOfContents as unknown as readonly PageTableOfContentsSection[])
		.filter((item) => !['multiclassing', 'hit-points', 'proficiencies'].includes(item.id))
		.map((item) => ({
			...item,
			id: item.id === 'primal-path' ? 'subclasses' : item.id,
			title: item.id === 'primal-path' ? 'Subclasses' : item.title,
			children: item.children
				?.filter((child) => child.id !== 'hit-points' && child.id !== 'proficiencies')
				.map((child) => ({
					...child,
					id: child.id === 'primal-path' ? 'subclasses' : child.id,
					title: child.id === 'primal-path' ? 'Subclasses' : child.title
				}))
		}));

	return {
		startingEquipment: source.coreTraits.startingEquipment,
		startingEquipmentIntro: source.startingEquipmentIntro,
		quickLinks: quickLinks.map(([href, title, description, icon]) => ({ href, title, description, icon })),
		faqItems: barbarianFaqEntries,
		progression: source.progression,
		sections: {
			identity,
			coreTraits: {
				...source.sections.coreTraits,
				blocks: [
					{
						type: 'field-list',
						items: traitItems
					}
				]
			},
			classFeaturesOverview: source.classFeatureSections[0],
			featureSections: featureSections.filter((item: PageContentSection) => item !== primalPath),
			subclasses,
			detailSections: [],
			referenceSections: []
		},
		tableOfContents
	};
}

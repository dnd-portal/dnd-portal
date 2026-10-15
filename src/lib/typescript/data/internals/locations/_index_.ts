import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';
import { brinehookHarborShoppingSections } from './brinehook-harbor';

const website = core.internals.website;
const current = core.internals.locations;

export const locations = {
	page: createInternalPage({
		href: current.baseUrl,

		img: current.logos.simple,

		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'World locations',
		description: `Explore regions, settlements, landmarks, planes,
			and other important locations within campaign settings.`
	}),

	brinehookHarbor: {
	page: createInternalPage({
		href: `${current.baseUrl}/brinehook-harbor/`,
		title: `${website.name.short} - Brinehook Harbor`,
		subTitle: 'Location',
		label: 'Brinehook Harbor',
		description: 'Brinehook Harbor',
		img: {
			href: '/icons/white/entity/anchor.svg',
			alt: 'A white anchor icon representing Brinehook Harbor.'
		},
		navigation: { parent: 'internals.locations.page' },
		images: {
			header: {
				female: {
					alt: 'Brinehook Harbor viewed from the sea.',
					sources: {
						s: '/images/locations/brinehook-harbor/brinehook_harbor-view_from_sea-close.webp',
						m: '/images/locations/brinehook-harbor/brinehook_harbor-view_from_sea-close.webp',
						l: '/images/locations/brinehook-harbor/brinehook_harbor-view_from_sea-close.webp'
					}
				}
			}
		},
		content: {
			sections: [
				{
					id: 'brinehook-shopping',
					title: 'Brinehook Harbor',
					blocks: [
						{
							type: 'paragraph',
							content: [
								{
									type: 'link',
									path: 'internals.locations.brinehookHarbor.shopping',
									label: 'What Can You Buy Here?'
								}
							]
						}
					]
				}
			],
			tableOfContents: [{ id: 'brinehook-shopping', title: 'Brinehook Harbor' }]
		}
	}),

	shopping: createInternalPage({
		href: `${current.baseUrl}/brinehook-harbor/shopping/`,
		title: `Marketplace & Goods - Brinehook Harbor - ${website.name.short}`,
		subTitle: 'Marketplace & Goods',
		description: 'Browse the goods and prices available in Brinehook Harbor.',
		img: {
			href: '/icons/white/entity/anchor.svg',
			alt: 'A white anchor icon representing Brinehook Harbor marketplace.'
		},
		navigation: { parent: 'internals.locations.brinehookHarbor.page', label: 'Marketplace & Goods' },
		content: {
			sections: [
				{
					id: 'market-introduction',
						title: 'Marketplace & Goods',
					blocks: [
						{
							type: 'paragraph',
							content: [
								{
									type: 'text',
									text: 'Brinehook Harbor is a heavily fortified trading center filled with merchants, sailors, mercenaries, pirates, and smugglers. Below is an overview of the goods available in and around the harbor.'
								}
							]
						}
					]
				},
				...brinehookHarborShoppingSections
			],
			tableOfContents: [
				{ id: 'market-introduction', title: 'Marketplace & Goods' },
				...brinehookHarborShoppingSections.map(({ id, title }) => ({ id, title }))
			]
		}
	})
	}
} as const;

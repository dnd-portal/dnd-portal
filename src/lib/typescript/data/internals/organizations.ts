import { createInternalPage } from './_helpers_';

export const organizations = {
	page: createInternalPage({
		href: '/organizations/',
		title: 'D&D Portal Wiki - Organizations',
		subTitle: 'Organizations',
		description: 'Browse factions, guilds, faiths, companies, and other organizations connected to the campaign world.',
		img: {
			href: '/icons/white/entity/organization.svg',
			alt: 'A stylized organization chart icon representing groups and organizations.'
		},
	}),
	glueCo: createInternalPage({
		href: '/organizations/glueco/',
		title: 'D&D Portal Wiki - GlueCo',
		subTitle: 'Organization',
		label: 'GlueCo',
		description: 'GlueCo organization reference.',
		img: {
			href: '/icons/white/homebrew/glueco.svg',
			alt: 'GlueCo organization icon.'
		},
		navigation: { parent: 'internals.organizations.page' }
	})
} as const;

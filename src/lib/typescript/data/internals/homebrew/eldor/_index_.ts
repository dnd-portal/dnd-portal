import { createInternalPage } from '../../_helpers_';
import {
	magicItemPages,
	magicItems
} from '$lib/typescript/data/core/internals/homebrew/eldor/magic-items/_index_';
import type { HomebrewCollectionMetadata } from '../types';
import { rotwoodSovereign, rotwoodSovereignPage } from '$lib/typescript/data/internals/monsters/_index_';
import { organizations } from '$lib/typescript/data/internals/organizations';
import { locations as wikiLocations } from '$lib/typescript/data/internals/locations/_index_';
import { companions as wikiCompanions } from '$lib/typescript/data/internals/companions';

const icon = '/icons/white/homebrew/eldor-sigil.svg';
const magicItemIcon = '/icons/white/entity/magic-item.svg';

export const eldor = {
	metadata: {
		setting: { name: 'Aetherbound' },
		creator: { name: 'Toon van Berkel', href: 'externals.toonvb.profile' },
		copyright: {
			holder: 'Toon van Berkel',
			notice: 'Unless otherwise stated, all Eldor homebrew content published on D&D Portal is © Toon van Berkel.'
		},
		about: {
			title: 'About Eldor',
			description: 'Eldor is a deity from the Aetherbound setting.',
			attribution: 'The Eldor homebrew collection — including its magic items, lore, rules, and other related content — was written and created by Toon van Berkel.',
			disclaimer: 'Eldor and its associated homebrew content are original creative works created for the Aetherbound setting. This is unofficial fan-created content and is not affiliated with or endorsed by Wizards of the Coast.'
		}
	} satisfies HomebrewCollectionMetadata,
	page: createInternalPage({
		href: '/homebrew/eldor/',
		title: 'D&D Portal Wiki - Eldor',
		subTitle: 'Homebrew',
		label: 'Eldor',
		description: 'A homebrew collection of original content connected to the world of Eldor. All Eldor homebrew content is protected by copyright.',
		img: { href: icon, alt: 'Eldor sigil' },
		navigation: { iconSize: 'large' },
		tags: ['homebrew', 'eldor'],
		sourceMetadata: [{ label: 'Category', value: 'Homebrew' }]
	}),
	magicItems: {
		page: createInternalPage({
			href: '/homebrew/eldor/magic-items/',
			title: 'D&D Portal Wiki - Magic Items',
			subTitle: 'Eldor homebrew',
			label: 'Magic Items',
			description: `${magicItems.length} custom magic items connected to Eldor. All Eldor homebrew content is protected by copyright.`,
			img: { href: magicItemIcon, alt: 'Magic item icon' },
			tags: ['homebrew', 'eldor', 'magic items']
		}),
		...magicItemPages
	},
	locations: {
		page: createInternalPage({
			href: '/homebrew/eldor/locations/',
			title: 'D&D Portal Wiki - Locations',
			subTitle: 'Eldor locations',
			label: 'Locations',
			description: 'Locations connected to the world of Eldor.',
			img: { href: '/icons/white/entity/location.svg', alt: 'A location icon representing Eldor locations.' },
			navigation: { parent: 'internals.homebrew.eldor.page' },
			tags: ['homebrew', 'eldor', 'locations'],
			content: {
				sections: [
					{
						id: 'eldor-locations',
						title: 'Locations',
						blocks: [
							{
								type: 'paragraph',
								content: [
					{ type: 'link', path: 'internals.homebrew.eldor.locations.brinehookHarbor', label: 'Brinehook Harbor' },
									{ type: 'text', text: ' — a fortified harbor and trading center.' }
								]
							},
							{
								type: 'paragraph',
								content: [
					{ type: 'link', path: 'internals.homebrew.eldor.locations.gildersproutReach', label: 'Gildersprout Reach' },
									{ type: 'text', text: ' — a peaceful halfling village beneath Saint Lucian\'s Root.' }
								]
							}
						]
					}
				],
				tableOfContents: [{ id: 'eldor-locations', title: 'Locations' }]
			}
		}),
		brinehookHarbor: createInternalPage({
			...wikiLocations.brinehookHarbor.page,
			href: '/homebrew/eldor/locations/brinehook-harbor/',
			navigation: { parent: 'internals.homebrew.eldor.locations.page' }
		}),
		gildersproutReach: createInternalPage({
			...wikiLocations.gildersproutReach.page,
			href: '/homebrew/eldor/locations/gildersprout-reach/',
			navigation: { parent: 'internals.homebrew.eldor.locations.page' }
		}),
		brinehookHarborShopping: createInternalPage({
			...wikiLocations.brinehookHarbor.shopping,
			href: '/homebrew/eldor/locations/brinehook-harbor/shopping/',
			navigation: { parent: 'internals.homebrew.eldor.locations.brinehookHarbor', label: 'Marketplace & Goods' }
		}),
		gildersproutReachShopping: createInternalPage({
			...wikiLocations.gildersproutReach.shopping,
			href: '/homebrew/eldor/locations/gildersprout-reach/shopping/',
			navigation: { parent: 'internals.homebrew.eldor.locations.gildersproutReach', label: 'Market & Goods' }
		})
	},
	monsters: {
		page: createInternalPage({
			href: '/homebrew/eldor/monsters/',
			title: 'D&D Portal Wiki - Monsters',
			subTitle: 'Eldor homebrew', label: 'Monsters',
			description: 'Browse Eldor homebrew monsters and encounter-ready stat blocks.',
			img: { href: '/icons/white/game/monster.svg', alt: 'Monster icon.' },
			navigation: { parent: 'internals.homebrew.eldor.page' }, tags: ['homebrew', 'eldor', 'monsters']
		}),
		rotwoodSovereign: createInternalPage({
			...rotwoodSovereignPage,
			href: '/homebrew/eldor/monsters/the-rotwood-sovereign/',
			navigation: { parent: 'internals.homebrew.eldor.monsters.page' }
		}),
		entries: [rotwoodSovereign]
	},
	companions: {
		page: createInternalPage({
			href: '/homebrew/eldor/companions/',
			title: 'D&D Portal Wiki - Companions',
			subTitle: 'Eldor homebrew',
			label: 'Companions',
			description: 'Homebrew companions connected to Eldor.',
			img: { href: '/icons/white/entity/pet.svg', alt: 'Companion icon.' },
			navigation: { parent: 'internals.homebrew.eldor.page' },
			tags: ['homebrew', 'eldor', 'companions']
		}),
		puddleSlime: createInternalPage({
		...wikiCompanions.puddleSlime,
			href: '/homebrew/eldor/companions/puddle-slime/',
			title: 'D&D Portal Wiki - Puddle Slime',
			subTitle: 'Companion',
			label: 'Puddle Slime',
			description: 'A cheerful, water-loving ooze and utility companion.',
			navigation: { parent: 'internals.homebrew.eldor.companions.page' },
			tags: ['homebrew', 'eldor', 'companion']
		})
	},
	organizations: {
		page: createInternalPage({
			href: '/homebrew/eldor/organizations/',
			title: 'D&D Portal Wiki - Organizations', subTitle: 'Eldor homebrew', label: 'Organizations',
			description: 'Organizations connected to Eldor.',
			img: { href: '/icons/white/entity/organization.svg', alt: 'Organization icon.' },
			navigation: { parent: 'internals.homebrew.eldor.page' }, tags: ['homebrew', 'eldor', 'organizations']
		}),
		glueCo: createInternalPage({
			...organizations.glueCo,
			href: '/homebrew/eldor/organizations/glueco/',
			navigation: { parent: 'internals.homebrew.eldor.organizations.page' }
		})
	}
} as const;

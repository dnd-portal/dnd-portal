import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';

import { artificer } from './artificer/_index_';
import { barbarian } from './barbarian/_index_';
import { bard } from './bard/_index_';
import { bloodHunter } from './blood-hunter/_index_';
import { captain } from './captain/_index_';
import { champion } from './champion/_index_';
import { cleric } from './cleric/_index_';
import { druid } from './druid/_index_';
import { fighter } from './fighter/_index_';
import { gunslinger } from './gunslinger/_index_';
import { illrigger } from './illrigger/_index_';
import { messenger } from './messenger/_index_';
import { monk } from './monk/_index_';
import { monsterHunter } from './monster-hunter/_index_';
import { mournbound } from './mournbound/_index_';
import { paladin } from './paladin/_index_';
import { pugilist } from './pugilist/_index_';
import { ranger } from './ranger/_index_';
import { rogue } from './rogue/_index_';
import { scholar } from './scholar/_index_';
import { shinobi } from './shinobi/_index_';
import { sorcerer } from './sorcerer/_index_';
import { treasureHunter } from './treasure-hunter/_index_';
import { vampyr } from './vampyr/_index_';
import { vanguard } from './vanguard/_index_';
import { warlock } from './warlock/_index_';
import { warden } from './warden/_index_';
import { wizard } from './wizard/_index_';

const website = core.internals.website;
const current = core.internals.classes;

export const classes = {
	page: createInternalPage({
		href: current.baseUrl,

		img: current.logos.simple,

		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Character classes',
		description: `Browse available classes, their core features,
			progression, abilities, subclasses, and character options.`,

		tags: [
			'classes',
			'character creation',
			'player options',
			'progression',
			'class features',
			'subclasses',
			'abilities'
		]
	}),

	artificer,
	barbarian,
	bard,
	cleric,
	druid,
	fighter,
	monk,
	paladin,
	ranger,
	rogue,
	sorcerer,
	warlock,
	wizard,
	bloodHunter,
	captain,
	champion,
	gunslinger,
	illrigger,
	messenger,
	monsterHunter,
	mournbound,
	pugilist,
	scholar,
	shinobi,
	treasureHunter,
	vampyr,
	vanguard,
	warden
} as const;

export const classList = [
	{
		name: 'Artificer',
		slug: 'artificer',
		path: 'internals.classes.artificer.page'
	},
	{
		name: 'Barbarian',
		slug: 'barbarian',
		path: 'internals.classes.barbarian.page'
	},
	{
		name: 'Bard',
		slug: 'bard',
		path: 'internals.classes.bard.page'
	},
	{
		name: 'Cleric',
		slug: 'cleric',
		path: 'internals.classes.cleric.page'
	},
	{
		name: 'Druid',
		slug: 'druid',
		path: 'internals.classes.druid.page'
	},
	{
		name: 'Fighter',
		slug: 'fighter',
		path: 'internals.classes.fighter.page'
	},
	{
		name: 'Monk',
		slug: 'monk',
		path: 'internals.classes.monk.page'
	},
	{
		name: 'Paladin',
		slug: 'paladin',
		path: 'internals.classes.paladin.page'
	},
	{
		name: 'Ranger',
		slug: 'ranger',
		path: 'internals.classes.ranger.page'
	},
	{
		name: 'Rogue',
		slug: 'rogue',
		path: 'internals.classes.rogue.page'
	},
	{
		name: 'Sorcerer',
		slug: 'sorcerer',
		path: 'internals.classes.sorcerer.page'
	},
	{
		name: 'Warlock',
		slug: 'warlock',
		path: 'internals.classes.warlock.page'
	},
	{
		name: 'Wizard',
		slug: 'wizard',
		path: 'internals.classes.wizard.page'
	},
	{
		name: 'Blood Hunter',
		slug: 'blood-hunter',
		path: 'internals.classes.bloodHunter.page'
	},
	{
		name: 'Captain',
		slug: 'captain',
		path: 'internals.classes.captain.page'
	},
	{
		name: 'Champion',
		slug: 'champion',
		path: 'internals.classes.champion.page'
	},
	{
		name: 'Gunslinger',
		slug: 'gunslinger',
		path: 'internals.classes.gunslinger.page'
	},
	{
		name: 'Illrigger',
		slug: 'illrigger',
		path: 'internals.classes.illrigger.page'
	},
	{
		name: 'Messenger',
		slug: 'messenger',
		path: 'internals.classes.messenger.page'
	},
	{
		name: 'Monster Hunter',
		slug: 'monster-hunter',
		path: 'internals.classes.monsterHunter.page'
	},
	{
		name: 'Mournbound',
		slug: 'mournbound',
		path: 'internals.classes.mournbound.page'
	},
	{
		name: 'Pugilist',
		slug: 'pugilist',
		path: 'internals.classes.pugilist.page'
	},
	{
		name: 'Scholar',
		slug: 'scholar',
		path: 'internals.classes.scholar.page'
	},
	{
		name: 'Shinobi',
		slug: 'shinobi',
		path: 'internals.classes.shinobi.page'
	},
	{
		name: 'Treasure Hunter',
		slug: 'treasure-hunter',
		path: 'internals.classes.treasureHunter.page'
	},
	{
		name: 'Vampyr',
		slug: 'vampyr',
		path: 'internals.classes.vampyr.page'
	},
	{
		name: 'Vanguard',
		slug: 'vanguard',
		path: 'internals.classes.vanguard.page'
	},
	{
		name: 'Warden',
		slug: 'warden',
		path: 'internals.classes.warden.page'
	}
] as const;

const genericClassEntries = [
	{
		slug: 'artificer',
		data: artificer
	},
	{
		slug: 'bard',
		data: bard
	},
	{
		slug: 'cleric',
		data: cleric
	},
	{
		slug: 'druid',
		data: druid
	},
	{
		slug: 'fighter',
		data: fighter
	},
	{
		slug: 'monk',
		data: monk
	},
	{
		slug: 'paladin',
		data: paladin
	},
	{
		slug: 'ranger',
		data: ranger
	},
	{
		slug: 'rogue',
		data: rogue
	},
	{
		slug: 'sorcerer',
		data: sorcerer
	},
	{
		slug: 'warlock',
		data: warlock
	},
	{
		slug: 'wizard',
		data: wizard
	},
	{
		slug: 'blood-hunter',
		data: bloodHunter
	},
	{
		slug: 'captain',
		data: captain
	},
	{
		slug: 'champion',
		data: champion
	},
	{
		slug: 'gunslinger',
		data: gunslinger
	},
	{
		slug: 'illrigger',
		data: illrigger
	},
	{
		slug: 'messenger',
		data: messenger
	},
	{
		slug: 'monster-hunter',
		data: monsterHunter
	},
	{
		slug: 'mournbound',
		data: mournbound
	},
	{
		slug: 'pugilist',
		data: pugilist
	},
	{
		slug: 'scholar',
		data: scholar
	},
	{
		slug: 'shinobi',
		data: shinobi
	},
	{
		slug: 'treasure-hunter',
		data: treasureHunter
	},
	{
		slug: 'vampyr',
		data: vampyr
	},
	{
		slug: 'vanguard',
		data: vanguard
	},
	{
		slug: 'warden',
		data: warden
	}
] as const;

export function getClassBySlug(slug: string) {
	return genericClassEntries.find((entry) => entry.slug === slug)?.data ?? null;
}

export function getSubclassBySlug(
	classSlug: string,
	subclassSlug: string
) {
	const classData = getClassBySlug(classSlug);

	if (!classData || !('subclasses' in classData)) {
		return null;
	}

	const subclasses = Object.values(classData.subclasses);

	return subclasses.find((subclass) => {
		const href = 'page' in subclass ? subclass.page.href : subclass.href;
		const parts = href.split('/');

		return parts[parts.length - 1] === subclassSlug;
	}) ?? null;
}

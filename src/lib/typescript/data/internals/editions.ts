export const editions = {
	'5.5e': {
		id: '5.5e',
		name: 'D&D 5.5e',
		shortName: '5.5e',
		rulesYear: 2024,
		routeSuffix: null,
		current: true
	},
	'5e': {
		id: '5e',
		name: 'D&D 5th Edition',
		shortName: '5e',
		rulesYear: 2014,
		routeSuffix: '5e',
		current: false
	},
	'4e': {
		id: '4e',
		name: 'D&D 4th Edition',
		shortName: '4e',
		rulesYear: 2008,
		routeSuffix: '4e',
		current: false
	},
	'3.5e': {
		id: '3.5e',
		name: 'D&D v3.5',
		shortName: '3.5e',
		rulesYear: 2003,
		routeSuffix: '3-5e',
		current: false
	},
	'3e': {
		id: '3e',
		name: 'D&D 3rd Edition',
		shortName: '3e',
		rulesYear: 2000,
		routeSuffix: '3e',
		current: false
	},
	'2e': {
		id: '2e',
		name: 'AD&D 2nd Edition',
		shortName: '2e',
		rulesYear: 1989,
		routeSuffix: '2e',
		current: false
	},
	'1e': {
		id: '1e',
		name: 'AD&D 1st Edition',
		shortName: '1e',
		rulesYear: 1977,
		routeSuffix: '1e',
		current: false
	}
} as const;

export type EditionId = keyof typeof editions;

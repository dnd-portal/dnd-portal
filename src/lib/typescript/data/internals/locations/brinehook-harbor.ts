import type {
	InlineContent,
	PageContentSection,
	PageContentTableColumn,
	PageContentTableRow
} from '$lib/typescript/data/_index_';

const text = (value: string): InlineContent => [{ type: 'text', text: value }];

type ShoppingCategory = {
	readonly id: string;
	readonly title: string;
	readonly columns: readonly PageContentTableColumn[];
	readonly rows: readonly PageContentTableRow[];
	readonly homebrew?: boolean;
};

const row = (...values: string[]): PageContentTableRow =>
	Object.fromEntries(values.map((value, index) => [`column${index}`, text(value)]));

export const brinehookHarborShoppingCategories: readonly ShoppingCategory[] = [
	{
		id: 'food-and-drink',
		title: 'Food & Drinks',
		columns: [
			{ key: 'column0', label: 'Item' },
			{ key: 'column1', label: 'Description' },
			{ key: 'column2', label: 'Price' }
		],
		rows: [
			row('Freshly Baked Bread', 'Large, dark harbor loaf', '2 CP'), row('Grilled Fish', 'Freshly caught, with herbs', '5 CP'),
			row('Crab Soup', 'Hot, hearty soup', '8 CP'), row('Salted Meat', 'Keeps for several days', '5 SP'),
			row('Dried Fish', 'Suitable for long journeys', '3 SP'), row("Sailor's Stew", 'Meat, potatoes, and vegetables', '6 SP'),
			row('Roasted Boar', 'A luxury meal', '1 GP'), row('Giant Crab Legs', 'Harbor specialty', '2 GP'),
			row('Ship Ration (1 day)', 'Dried food for travel', '5 SP'), row('Apple Pie', 'Sweet pastry with cinnamon', '3 SP'),
			row('Common Ale', 'A sturdy mug', '4 CP'), row('Dark Pirate Ale', 'Strongly brewed harbor beer', '2 SP'),
			row('Spiced Rum', 'Popular among sailors', '5 SP'), row('Dwarven Whisky', 'Exceptionally strong liquor', '1 GP'),
			row('Sea King Wine', 'Exclusive imported wine', '8 GP')
		]
	},
	{
		id: 'armor-and-protection',
		title: 'Armor & Protection',
		columns: [
			{ key: 'column0', label: 'Item' },
			{ key: 'column1', label: 'AC' },
			{ key: 'column2', label: 'Price' }
		],
		rows: [
			row('Padded Armor', '11 + DEX', '5 GP'), row('Leather Armor', '11 + DEX', '10 GP'),
			row('Studded Leather', '12 + DEX', '45 GP'), row('Hide Armor', '12 + DEX (max 2)', '10 GP'),
			row('Chain Shirt', '13 + DEX (max 2)', '50 GP'), row('Scale Mail', '14 + DEX (max 2)', '50 GP'),
			row('Breastplate', '14 + DEX (max 2)', '400 GP'), row('Half Plate', '15 + DEX (max 2)', '750 GP'),
			row('Ring Mail', '14', '30 GP'), row('Chain Mail', '16', '75 GP'),
			row('Splint Armor', '17', '200 GP'), row('Plate Armor', '18', '1,500 GP'),
			row('Shield', '+2 AC', '10 GP')
		]
	},
	{
		id: 'weapons',
		title: 'Weapons',
		columns: [
			{ key: 'column0', label: 'Item' },
			{ key: 'column1', label: 'Damage' },
			{ key: 'column2', label: 'Price' }
		],
		rows: [
			row('Dagger', '1d4 piercing', '2 GP'), row('Shortsword', '1d6 piercing', '10 GP'),
			row('Scimitar', '1d6 slashing', '25 GP'), row('Rapier', '1d8 piercing', '25 GP'),
			row('Longsword', '1d8 slashing', '15 GP'), row('Greatsword', '2d6 slashing', '50 GP'),
			row('Battleaxe', '1d8 slashing', '10 GP'), row('Greataxe', '1d12 slashing', '30 GP'),
			row('Warhammer', '1d8 bludgeoning', '15 GP'), row('Trident', '1d6 piercing', '5 GP'),
			row('Spear', '1d6 piercing', '1 GP'), row('Light Crossbow', '1d8 piercing', '25 GP'),
			row('Heavy Crossbow', '1d10 piercing', '50 GP'), row('Longbow', '1d8 piercing', '50 GP'),
			row('Arrows (20)', 'Ammunition', '1 GP'), row('Crossbow Bolts (20)', 'Ammunition', '1 GP')
		]
	},
	{
		id: 'adventuring-gear',
		title: 'Adventuring Gear',
		columns: [
			{ key: 'column0', label: 'Item' },
			{ key: 'column1', label: 'Description' },
			{ key: 'column2', label: 'Price' }
		],
		rows: [
			row('Rope (50 ft)', 'Climbing and binding', '1 GP'), row('Grappling Hook', 'Boarding and climbing', '2 GP'),
			row('Torch', 'Lighting', '1 CP'), row('Lantern, Hooded', 'Shielded illumination', '5 GP'),
			row('Oil Flask', 'Lamp oil or fuel', '1 SP'), row('Waterskin', 'Storing water', '2 SP'),
			row('Backpack', 'Carrying supplies', '2 GP'), row('Bedroll', 'Sleeping while traveling', '1 GP'),
			row('Tent (2 people)', 'Shelter', '2 GP'), row('Fishing Tackle', 'Fishing', '1 GP'),
			row("Thieves' Tools", 'Opening locks', '25 GP'), row("Healer's Kit", 'Stabilizing (10 uses)', '5 GP'),
			row("Navigator's Tools", 'Navigating at sea', '25 GP'), row('Spyglass', 'Observing distant objects', '1,000 GP'),
			row('Potion of Healing', 'Restores 2d4 + 2 HP', '50 GP')
		]
	},
	{
		id: 'special-harbor-items',
		title: 'Special Harbor Items — Homebrew',
		homebrew: true,
		columns: [
			{ key: 'column0', label: 'Item' },
			{ key: 'column1', label: 'Effect' },
			{ key: 'column2', label: 'Price' }
		],
		rows: [
			row("Sailor's Lucky Coin", 'A one-time +1 bonus to an ability check, before the roll', '25 GP'),
			row('Potion of Sea Breathing', 'Breathe underwater for 10 minutes', '75 GP'),
			row('Kraken Ink Vial', 'Creates a dark underwater ink cloud (10 ft radius, 1 minute)', '40 GP'),
			row('Stormglass Compass', 'Points toward the nearest storm for 1 hour', '90 GP'),
			row('Barnacle Shield', 'Normal shield with a distinctive appearance', '35 GP'),
			row("Smuggler's Hidden Pouch", 'Hidden compartment; +2 to checks to conceal its contents', '60 GP'),
			row("Siren's Tear", 'One-time advantage on a Persuasion check', '80 GP'),
			row('Sea Serpent Scale', 'Rare crafting material', '120 GP'),
			row("Captain's Signal Horn", 'Audible up to 1 mile under normal conditions', '30 GP'),
			row('Blackwater Dagger', 'Magic +1 dagger', '500 GP')
		]
	},
	{
		id: 'black-market',
		title: 'The Black Market',
		columns: [
			{ key: 'column0', label: 'Item' },
			{ key: 'column1', label: 'Description' },
			{ key: 'column2', label: 'Price' }
		],
		rows: [
			row('False Identity Papers', 'Forged trade documents', '50 GP'),
			row('Stolen Harbor Pass', 'Grants access to certain storage yards', '75 GP'),
			row('Smoke Bomb', 'Creates a 10 ft radius cloud of smoke for 1 round', '30 GP'),
			row('Poison, Basic (vial)', '1d4 poison damage on a failed DC 10 CON save', '100 GP'),
			row("Assassin's Blood", 'Poison that can inflict the poisoned condition', '150 GP'),
			row('Illegal Sea Chart', 'Shows secret smuggling routes', '200 GP'),
			row('Sealed Mysterious Chest', 'Unknown contents', '25 GP'),
			row('Ring of the Drowned', 'Water Breathing on yourself for 1 hour, once per day', '600 GP')
		]
	}
];

export const brinehookHarborShoppingSections: readonly PageContentSection[] =
	brinehookHarborShoppingCategories.map((category) => ({
		id: category.id,
		title: category.title,
		subtitle: category.homebrew ? 'Homebrew' : undefined,
		blocks: [
			{
				type: 'table' as const,
				caption: category.title,
				columns: category.columns,
				rows: category.rows
			}
		]
	}));

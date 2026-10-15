import type {
	InlineContent,
	PageContentSection,
	PageContentTableColumn,
	PageContentTableRow
} from '$lib/typescript/data/_index_';

type MarketVendor = {
	readonly id: string;
	readonly title: string;
	readonly description: string;
	readonly note?: string;
	readonly rows: readonly PageContentTableRow[];
};

const text = (value: string): InlineContent => [{ type: 'text', text: value }];
const row = (...values: string[]): PageContentTableRow =>
	Object.fromEntries(values.map((value, index) => [`column${index}`, text(value)]));

const columns: readonly PageContentTableColumn[] = [
	{ key: 'column0', label: 'Item' },
	{ key: 'column1', label: 'Description' },
	{ key: 'column2', label: 'Price' }
];

export const gildersproutReachMarketVendors: readonly MarketVendor[] = [
	{
		id: 'miri-dapple-food-stalls', title: 'Miri Dapple — Food Stalls',
		description: 'A cheerful halfling cook serving traditional meals and imported delicacies.',
		rows: [
			row('Nasi Goreng', 'Fried rice with vegetables, egg, and spices', '8 SP'), row('Special Nasi', 'Fried rice with chicken, egg, and spicy sauce', '1 GP'),
			row('Fried Noodles', 'Stir-fried noodles with vegetables', '4 SP'), row('Duck-Shaped Dumplings', 'Steamed dumplings shaped like ducks', '3 SP'),
			row('Mushroom Stew', 'Hearty forest mushroom stew', '3 SP'), row('Honey-Glazed Chicken', 'Chicken glazed with honey and herbs', '6 SP'),
			row('Crispy Potato Bites', 'Crispy fried potato bites', '2 SP'), row('Stuffed Bread Rolls', 'Bread filled with cheese and vegetables', '3 SP'),
			row('Festival Feast', 'A large halfling meal for two', '1 GP 5 SP')
		]
	},
	{
		id: 'jessa-honeyheel-bakery', title: 'Jessa Honeyheel — Bakery',
		description: 'A local baker famous for warm pastries, honey buns, and traditional halfling recipes.',
		rows: [
			row('Fresh Bread', 'Freshly baked bread', '2 CP'), row('Honey Buns', 'Sweet honey-glazed buns', '5 CP'),
			row('Apple Pie', 'Homemade warm apple pie', '2 SP'), row('Berry Muffins', 'Muffins filled with forest berries', '5 CP'),
			row('Cheese Bread', 'Bread baked with cheese and herbs', '1 SP'), row('Travel Rations', 'Food supplies for one day', '5 SP'),
			row('Jubilee Cake', 'Festival cake decorated with ducks', '5 SP')
		]
	},
	{
		id: 'halven-reed-general-goods', title: 'Halven Reed — General Goods',
		description: 'A practical merchant supplying everyday tools, equipment, and adventuring essentials.',
		rows: [
			row('Rope (50 ft.)', 'Hemp rope', '1 GP'), row('Torch', 'Standard torch', '1 CP'), row('Backpack', 'Standard adventuring backpack', '2 GP'),
			row('Waterskin', 'Leather waterskin', '2 SP'), row('Lantern', 'Basic lantern', '5 SP'), row('Oil Flask', 'Flask of lantern oil', '1 SP'),
			row('Fishing Rod', 'Simple fishing rod', '1 GP'), row('Blanket', 'Warm travel blanket', '5 SP'), row('Small Wooden Chest', 'Wooden storage chest', '5 SP')
		]
	},
	{
		id: 'soren-quill-rice-merchant', title: 'Soren Quill — Rice Merchant',
		description: 'A traveling merchant specializing in imported rice and exotic ingredients.',
		note: 'Rice is especially valuable in Gildersprout Reach because the villagers cannot cultivate it locally.',
		rows: [
			row('Small Rice Bag', '1 kg of imported rice', '5 SP'), row('Large Rice Sack', '10 kg of imported rice', '4 GP'),
			row('Exotic Spices', 'Rare imported spice blend', '8 SP'), row('Soy Sauce', 'Bottle of savory sauce', '3 SP'),
			row('Chili Paste', 'Jar of spicy chili paste', '2 SP'), row('Rice Wine', 'Bottle of rice wine', '5 SP'),
			row('Premium Golden Rice', '1 kg of premium golden rice', '1 GP')
		]
	},
	{
		id: 'nessa-tolm-crafts-artisans', title: 'Nessa Bristle & Tolm Gearleaf — Crafts & Artisans',
		description: 'Two local artisans selling handcrafted decorations, toys, tools, and equipment.',
		rows: [
			row('Wooden Rubber Duck', 'Hand-carved wooden duck', '5 SP'), row('Rubber Duck', 'Classic yellow rubber duck', '1 GP'),
			row('Blue Festival Duck', 'Decorative blue duck with golden details', '2 GP'), row('Holy Duck Charm', 'Religious good-luck charm', '3 GP'),
			row('Carved Wooden Figurine', 'Small handcrafted wooden figurine', '5 SP'), row('Handcrafted Dagger', 'Standard dagger', '2 GP'),
			row('Repair Kit', 'Basic equipment repair supplies', '1 GP'), row('Decorative Lantern', 'Festival lantern', '2 GP')
		]
	},
	{
		id: 'luma-duckyfern-sacred-goods', title: 'Luma Duckyfern — Sacred Goods',
		description: 'A devoted caretaker selling religious items associated with Lucian Ducky and the sacred Ducklight pond.',
		note: 'Truly divine rubber ducks personally blessed by Lucian Ducky are sacred offerings and cannot be purchased.',
		rows: [
			row('Blessed Duck Candle', 'Duck-shaped ceremonial candle', '5 SP'), row('Lucian Ducky Prayer Book', 'Small religious prayer book', '2 GP'),
			row('Ducklight Water', 'Bottle of ordinary pond water, not magical', '1 GP'), row('Festival Ribbon', 'Blue ceremonial ribbon', '2 SP'),
			row('Wooden Holy Symbol', 'Holy symbol of Lucian Ducky', '5 SP'), row('Ceremonial Rubber Duck', 'Duck used in religious ceremonies', '5 GP')
		]
	}
];

export const gildersproutReachMarketSections: readonly PageContentSection[] = gildersproutReachMarketVendors.map((vendor) => ({
	id: vendor.id,
	title: vendor.title,
	blocks: [
		{ type: 'paragraph' as const, content: text(vendor.description) },
		...(vendor.note ? [{ type: 'paragraph' as const, content: text(vendor.note) }] : []),
		{ type: 'table' as const, caption: vendor.title, responsiveCards: true, columns, rows: vendor.rows }
	]
}));

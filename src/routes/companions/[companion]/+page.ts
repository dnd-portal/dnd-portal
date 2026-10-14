import { companionItems, getCompanionBySlug } from '$lib/typescript/data/internals/companions';
export function entries() { return companionItems.map((companion) => ({ companion: companion.slug })); }
export function load({ params }) { return { companion: getCompanionBySlug(params.companion) }; }

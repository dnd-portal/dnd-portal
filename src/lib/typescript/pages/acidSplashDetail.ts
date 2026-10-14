import type { InlineContentNode } from '$lib/typescript/data/_index_';
import type { SpellDetailViewModel } from '$lib/typescript/pages/spellDetail';
import { spellSources } from '$lib/typescript/data/internals/rules/spellcasting/spells/sources';
import acidSplash1e from '$lib/typescript/data/internals/spells/acid-splash/1e/1e';
import acidSplash2e from '$lib/typescript/data/internals/spells/acid-splash/2e/2e';
import acidSplash3e from '$lib/typescript/data/internals/spells/acid-splash/3e/3e';
import acidSplash35e from '$lib/typescript/data/internals/spells/acid-splash/3-5e/3-5e';
import acidSplash4e from '$lib/typescript/data/internals/spells/acid-splash/4e/4e';
import acidSplash5e from '$lib/typescript/data/internals/spells/acid-splash/5e/5e';
import acidSplash55e from '$lib/typescript/data/internals/spells/acid-splash/5-5e/5-5e';
import { acidSplash1eFaq } from '$lib/typescript/data/internals/spells/acid-splash/1e/faq/_index_';
import acidSplash2eFaq from '$lib/typescript/data/internals/spells/acid-splash/2e/faq/_index_';
import { acidSplash3eFaq } from '$lib/typescript/data/internals/spells/acid-splash/3e/faq/_index_';
import { acidSplash35eFaq } from '$lib/typescript/data/internals/spells/acid-splash/3-5e/faq/_index_';
import { acidSplash4eFaq } from '$lib/typescript/data/internals/spells/acid-splash/4e/faq/_index_';
import { acidSplash5eFaq } from '$lib/typescript/data/internals/spells/acid-splash/5e/faq/_index_';
import { acidSplash55eFaq } from '$lib/typescript/data/internals/spells/acid-splash/5-5e/faq/_index_';

export type AcidSplashEdition = '1e' | '2e' | '3e' | '3-5e' | '4e' | '5e' | '5-5e';
const editions: readonly AcidSplashEdition[] = ['1e', '2e', '3e', '3-5e', '4e', '5e', '5-5e'];
const data: Record<AcidSplashEdition, unknown> = { '1e': acidSplash1e, '2e': acidSplash2e, '3e': acidSplash3e, '3-5e': acidSplash35e, '4e': acidSplash4e, '5e': acidSplash5e, '5-5e': acidSplash55e };
const sourceFor = (key: string | undefined) => spellSources[key as keyof typeof spellSources]?.name ?? (key === 'magic-of-faerun-3e' ? 'Magic of Faerûn' : 'D&D Portal Conversion');
const textNodes = (value: unknown): readonly InlineContentNode[] => typeof value === 'string' ? [{ type: 'text', text: value }] : Array.isArray(value) ? value as readonly InlineContentNode[] : [];
const value = (x: unknown): string => typeof x === 'string' || typeof x === 'number' ? String(x) : x && typeof x === 'object' ? String((x as Record<string, unknown>).label ?? (x as Record<string, unknown>).display ?? (x as Record<string, unknown>).type ?? '') : '';
const icon = (name: string) => `/icons/white/${name}.svg`;
const schoolIcon = (school: unknown): string => {
	const key = String(school ?? 'evocation').toLowerCase().split('/')[0].replace(/[^a-z-]/g, '');
	const supported = ['abjuration', 'conjuration', 'divination', 'enchantment', 'evocation', 'illusion', 'necromancy', 'transmutation'];
	return icon(`spell/${supported.includes(key) ? key : 'evocation'}`);
};
const sectionIcon = (id: string): string => ({
	'description': icon('game/spell'),
	'how-acid-splash-works': icon('game/spell'),
	'range-and-area': icon('attribute/range'),
	'damage-and-combat-use': icon('game/combat'),
	'class-availability': icon('entity/organization'),
	'what-changed-from-2014': icon('entity/book')
}[id] ?? icon('game/spell'));
const savingThrow = (data: unknown): string => {
	if (!data || typeof data !== 'object') return '';
	const entry = data as Record<string, unknown>;
	if (typeof entry.ability === 'string') return `${entry.ability} saving throw`;
	if (entry.allowed === false) return 'None';
	return entry.allowed === true ? 'Allowed' : '';
};
const components = (data: unknown): string => {
	if (!data || typeof data !== 'object') return '';
	const entry = data as Record<string, unknown>;
	if (typeof entry.raw === 'string') return entry.raw;
	return Object.entries(entry).filter(([key, enabled]) => enabled === true && ['verbal', 'somatic', 'material'].includes(key)).map(([key]) => key[0].toUpperCase()).join(', ');
};
const faqFor: Record<AcidSplashEdition, readonly unknown[]> = { '1e': acidSplash1eFaq, '2e': acidSplash2eFaq, '3e': acidSplash3eFaq, '3-5e': acidSplash35eFaq, '4e': acidSplash4eFaq, '5e': acidSplash5eFaq, '5-5e': acidSplash55eFaq };

export function buildAcidSplashDetail(edition: AcidSplashEdition): SpellDetailViewModel {
	const spell = data[edition] as any;
	const label = edition === '3-5e' ? '3.5e' : edition === '5-5e' ? '5.5e' : edition;
	const metadata = [
		{ id: 'level', label: edition === '4e' ? 'Power Level' : 'Level', value: edition === '4e' ? value(spell.power?.level) : spell.level === 0 ? 'Cantrip' : String(spell.level), layout: 'compact' as const },
		{ id: 'school', label: edition === '4e' ? 'Power Source' : 'School', value: edition === '4e' ? value(spell.power?.source) : value(spell.school), icon: schoolIcon(spell.school), layout: 'compact' as const },
		{ id: 'casting-time', label: edition === '4e' ? 'Action' : 'Casting Time', value: edition === '4e' ? value(spell.action?.label) : `${value(spell.castingTime?.value)} ${value(spell.castingTime?.unit)}`.trim(), icon: icon('entity/time'), layout: 'compact' as const },
		{ id: 'range', label: 'Range', value: edition === '4e' ? `${value(spell.range?.squares)} squares` : `${value(spell.range?.value ?? spell.range?.base)} ${value(spell.range?.unit)}`.trim(), icon: icon('attribute/range'), layout: 'compact' as const },
		{ id: 'duration', label: 'Duration', value: value(spell.duration?.type), icon: icon('spell/instantaneous'), layout: 'compact' as const },
		{ id: 'components', label: 'Components', value: components(spell.components), icon: icon('spell/material'), layout: 'compact' as const },
		{ id: 'effect', label: edition === '4e' ? 'Target' : 'Effect', value: edition === '4e' ? value(spell.target) : value(spell.effect ?? spell.areaOfEffect?.display ?? spell.areaOfEffect?.primary ?? (spell.area ? `${spell.area.radius}-foot-radius ${spell.area.shape}` : '')), icon: icon('target/sphere'), layout: 'full' as const },
		{ id: 'saving-throw', label: 'Saving Throw', value: savingThrow(spell.savingThrow), icon: icon('attribute/saving-throw'), layout: 'compact' as const },
		{ id: 'spell-resistance', label: 'Spell Resistance', value: spell.spellResistance === undefined ? '' : spell.spellResistance ? 'Yes' : 'No', icon: icon('damage/resistance'), layout: 'compact' as const },
		{ id: 'attack', label: edition === '4e' ? `Attack vs ${value(spell.attack?.defense)}` : 'Attack', value: edition === '4e' ? value(spell.attack?.defense) : value(spell.attack?.type), icon: icon('combat/target'), layout: 'compact' as const },
		{ id: 'damage', label: edition === '4e' ? 'Damage' : 'Damage', value: edition === '4e' ? `${value(spell.hit?.damage?.dice)} ${value(spell.hit?.damage?.type)}` : `${value(spell.damage?.dice)} ${value(spell.damage?.type)}`.trim(), icon: icon(`damage/${String(spell.damage?.type ?? spell.hit?.damage?.type ?? 'acid').toLowerCase()}`), layout: 'compact' as const },
		{ id: 'spell-lists', label: edition === '4e' ? 'Keywords / Classes' : 'Spell Lists', value: edition === '4e' ? (spell.keywords ?? []).join(', ') : (spell.spellLists ?? []).map((x: any) => `${x.class} ${x.level}`).join(', '), layout: 'full' as const }
	].filter((field) => field.value);
	const blocks = spell.content ?? spell.description ?? [];
	const sections = (spell.sections ?? []).map((section: any) => ({ id: section.id, title: section.title, icon: sectionIcon(section.id), content: (section.blocks ?? []).map((block: any) => textNodes(block.content ?? block.text)) }));
 const faq = (faqFor[edition] as readonly any[]).map((item) => ({ question: item.question, answer: item.shortAnswer ?? item.answer ?? '', reference: 'internals.spells.page', referenceLabel: `Acid Splash ${label}`, ...(item.slug ? { faqPath: `internals.faq.acid-splash-${edition}.${item.slug}`, faqLabel: 'Read full explanation' } : {}) }));
 return { slug: 'acid-splash', name: spell.name ?? 'Acid Splash', level: spell.level === 0 ? 'Cantrip' : value(spell.level), school: edition === '4e' ? value(spell.power?.source) : value(spell.school), source: sourceFor(spell.source), edition: label, editionId: edition, editionOptions: editions.map((id) => ({ id, label: id === '3-5e' ? '3.5e' : id === '5-5e' ? '5.5e' : id, href: id === '5-5e' ? '/spells/acid-splash/' : `/spells/acid-splash/${id}/` })), summaryContent: textNodes(spell.summary), metadata, sections: [{ id: 'description', title: 'Description', icon: sectionIcon('description'), content: blocks.map((block: any) => textNodes(block.content ?? block.text)) }, ...sections], faq };
}

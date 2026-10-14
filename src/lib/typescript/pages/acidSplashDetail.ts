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
const faqFor: Record<AcidSplashEdition, readonly unknown[]> = { '1e': acidSplash1eFaq, '2e': acidSplash2eFaq, '3e': acidSplash3eFaq, '3-5e': acidSplash35eFaq, '4e': acidSplash4eFaq, '5e': acidSplash5eFaq, '5-5e': acidSplash55eFaq };

export function buildAcidSplashDetail(edition: AcidSplashEdition): SpellDetailViewModel {
	const spell = data[edition] as any;
	const label = edition === '3-5e' ? '3.5e' : edition === '5-5e' ? '5.5e' : edition;
	const metadata = [
		{ id: 'level', label: edition === '4e' ? 'Power Level' : 'Level', value: edition === '4e' ? value(spell.power?.level) : spell.level === 0 ? 'Cantrip' : String(spell.level), layout: 'compact' as const },
		{ id: 'school', label: edition === '4e' ? 'Power Source' : 'School', value: edition === '4e' ? value(spell.power?.source) : value(spell.school), layout: 'compact' as const },
		{ id: 'casting-time', label: edition === '4e' ? 'Action' : 'Casting Time', value: edition === '4e' ? value(spell.action?.label) : `${value(spell.castingTime?.value)} ${value(spell.castingTime?.unit)}`.trim(), layout: 'compact' as const },
		{ id: 'range', label: 'Range', value: edition === '4e' ? `${value(spell.range?.squares)} squares` : `${value(spell.range?.value ?? spell.range?.base)} ${value(spell.range?.unit)}`.trim(), layout: 'compact' as const },
		{ id: 'duration', label: 'Duration', value: value(spell.duration?.type), layout: 'compact' as const },
		{ id: 'components', label: 'Components', value: spell.components?.raw ?? '', layout: 'compact' as const },
		{ id: 'effect', label: edition === '4e' ? 'Target' : 'Effect', value: edition === '4e' ? value(spell.target) : value(spell.effect ?? spell.areaOfEffect?.display ?? spell.areaOfEffect?.primary), layout: 'full' as const },
		{ id: 'saving-throw', label: 'Saving Throw', value: spell.savingThrow ? (spell.savingThrow.allowed ? 'Allowed' : 'None') : '', layout: 'compact' as const },
		{ id: 'spell-resistance', label: 'Spell Resistance', value: spell.spellResistance === undefined ? '' : spell.spellResistance ? 'Yes' : 'No', layout: 'compact' as const },
		{ id: 'attack', label: edition === '4e' ? `Attack vs ${value(spell.attack?.defense)}` : 'Attack', value: edition === '4e' ? value(spell.attack?.defense) : value(spell.attack?.type), layout: 'compact' as const },
		{ id: 'damage', label: edition === '4e' ? 'Damage' : 'Damage', value: edition === '4e' ? `${value(spell.hit?.damage?.dice)} ${value(spell.hit?.damage?.type)}` : `${value(spell.damage?.dice)} ${value(spell.damage?.type)}`.trim(), layout: 'compact' as const },
		{ id: 'spell-lists', label: edition === '4e' ? 'Keywords / Classes' : 'Spell Lists', value: edition === '4e' ? (spell.keywords ?? []).join(', ') : (spell.spellLists ?? []).map((x: any) => `${x.class} ${x.level}`).join(', '), layout: 'full' as const }
	].filter((field) => field.value);
	const blocks = spell.content ?? spell.description ?? [];
	const sections = (spell.sections ?? []).map((section: any) => ({ id: section.id, title: section.title, content: (section.blocks ?? []).map((block: any) => textNodes(block.content ?? block.text)) }));
 const faq = (faqFor[edition] as readonly any[]).map((item) => ({ question: item.question, answer: item.shortAnswer ?? item.answer ?? '', reference: 'internals.spells.page', referenceLabel: `Acid Splash ${label}`, ...(item.slug ? { faqPath: `internals.faq.acid-splash-${edition}.${item.slug}`, faqLabel: 'Read full explanation' } : {}) }));
 return { slug: 'acid-splash', name: spell.name ?? 'Acid Splash', level: spell.level === 0 ? 'Cantrip' : value(spell.level), school: edition === '4e' ? value(spell.power?.source) : value(spell.school), source: sourceFor(spell.source), edition: label, editionId: edition, editionOptions: editions.map((id) => ({ id, label: id === '3-5e' ? '3.5e' : id === '5-5e' ? '5.5e' : id, href: id === '5-5e' ? '/spells/acid-splash/' : `/spells/acid-splash/${id}/` })), summaryContent: textNodes(spell.summary), metadata, sections: [{ id: 'description', title: 'Description', content: blocks.map((block: any) => textNodes(block.content ?? block.text)) }, ...sections], faq };
}

import type { Character } from './types';
export type CharacterFileHandle = { createWritable: () => Promise<{ write: (data: string) => Promise<void>; close: () => Promise<void> }> };
export const canUseFilePicker = (): boolean => typeof window !== 'undefined' && 'showOpenFilePicker' in window && 'showSaveFilePicker' in window;
export function fileName(character: Character): string { const name = character.character.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); return `${name || 'dnd-character'}.character.json`; }
export function serialize(character: Character): string { return JSON.stringify(character, null, 2); }
export async function downloadCharacter(character: Character): Promise<void> { const blob = new Blob([serialize(character)], { type: 'application/json' }); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = fileName(character); link.click(); URL.revokeObjectURL(url); }
export async function writeCharacter(character: Character, handle: CharacterFileHandle): Promise<void> { const writable = await handle.createWritable(); await writable.write(serialize(character)); await writable.close(); }

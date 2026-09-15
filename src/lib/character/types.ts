export type AbilityName = 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma';
export type SkillName = 'acrobatics' | 'animalHandling' | 'arcana' | 'athletics' | 'deception' | 'history' | 'insight' | 'intimidation' | 'investigation' | 'medicine' | 'nature' | 'perception' | 'performance' | 'persuasion' | 'religion' | 'sleightOfHand' | 'stealth' | 'survival';
export type AbilityScores = Record<AbilityName, number>;
export type Proficiencies = Record<AbilityName, boolean>;

export interface CharacterInfo { name: string; player: string; race: string; class: string; subclass: string; level: number; background: string; alignment: string; xp: number; }
export interface SkillProficiency { proficient: boolean; expertise: boolean; }
export interface Attack { name: string; bonus: string; damage: string; damageType: string; notes: string; }
export interface EquipmentItem { id: string | null; name: string; quantity: number; equipped: boolean; notes: string; }
export interface Feature { name: string; description: string; source: string; }
export interface SpellEntry { id: string | null; name: string; level: number; prepared: boolean; }
export interface SessionNote { id: string; title: string; date: string; notes: string; }
export interface Character { schemaVersion: 1; character: CharacterInfo; abilities: AbilityScores; combat: { armorClass: number; speed: number; maxHp: number; currentHp: number; temporaryHp: number; inspiration: boolean; deathSaves: { successes: number; failures: number }; hitDice: { type: string; total: number; used: number } }; savingThrows: Proficiencies; skills: Record<SkillName, SkillProficiency>; attacks: Attack[]; currency: { cp: number; sp: number; ep: number; gp: number; pp: number }; equipment: EquipmentItem[]; features: Feature[]; proficiencies: { languages: string[]; armor: string[]; weapons: string[]; tools: string[] }; spells: { ability: AbilityName | null; slots: Record<string, { max: number; used: number }>; known: SpellEntry[] }; notes: { personalityTraits: string; ideals: string; bonds: string; flaws: string; backstory: string; additionalNotes: string; sessionNotes: SessionNote[] }; }

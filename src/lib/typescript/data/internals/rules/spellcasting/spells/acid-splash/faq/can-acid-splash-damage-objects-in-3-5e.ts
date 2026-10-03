export const question = {
	slug: 'can-acid-splash-damage-objects-in-3-5e',
	question: 'Can Acid Splash damage objects in D&D 3.5e?',
	shortAnswer: 'Yes. The D&D 3.5e version of Acid Splash is not restricted to creature targets, and acid damage can damage most objects. You still need to successfully hit the object, and its hardness and hit points determine whether the spell actually causes meaningful damage.',
	introduction: 'Acid Splash can be used against objects in D&D 3.5e, but that does not mean a cantrip can automatically melt through every lock, door, weapon, or wall.\n\nObjects have their own damage rules, including hardness and hit points, and Acid Splash only deals 1d3 acid damage on a successful hit.',
	sections: [
		{ id: 'targets', title: 'Acid Splash is not limited to creatures', blocks: [{ type: 'paragraph', content: 'The spell creates one missile and is not written as a creature-only effect, so an object can be a target when the normal targeting and attack rules allow it.' }] },
		{ id: 'acid', title: 'Acid damage can affect objects', blocks: [{ type: 'paragraph', content: 'Acid damage can be applied to an object under the normal object-damage rules.' }] },
		{ id: 'hardness', title: 'Object hardness still applies', blocks: [{ type: 'paragraph', content: 'Hardness reduces incoming damage before the object loses hit points. The object\'s hit points then determine whether the remaining damage matters.' }] },
		{ id: 'not-melt', title: 'Acid Splash does not automatically melt objects', blocks: [{ type: 'paragraph', content: 'A successful spell attack is not an automatic destruction effect. Sturdy materials can ignore or survive 1d3 damage.' }] },
		{ id: 'held', title: 'Held and worn objects can be more complicated', blocks: [{ type: 'paragraph', content: 'Objects carried or worn by a creature may involve additional targeting, attack, cover, or adjudication rules. The spell does not bypass those rules.' }] },
		{ id: 'edition', title: 'Why the edition matters', blocks: [{ type: 'paragraph', content: 'This object-targeting interpretation belongs to the 3.5e implementation. Other editions may define Acid Splash and object interactions differently.' }] }
	]
} as const;

export default question;

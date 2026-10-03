export const question = {
	slug: 'do-you-need-to-see-where-you-cast-acid-splash-in-5-5e',

	question: 'Do you need to see where you cast Acid Splash in D&D 5.5e?',

	shortAnswer:
		'Not explicitly. The 2024 Acid Splash spell says that its acidic bubble appears at a point within range and does not say that the caster must see that point. However, this does not let the spell pass freely through walls or other Total Cover. The general 2024 area-of-effect rules state that if an unseen chosen point is blocked by an obstruction, the point of origin can come into being on the near side of that obstruction instead.',

	introduction:
		'Visibility and a clear path are separate concepts in the 2024 rules. A spell can omit a requirement to see a point while still being limited by cover and the rules governing how areas of effect originate and spread.\n\nAcid Splash is a useful example because the 2014 spell explicitly required visible creatures, while the 2024 spell instead places a Sphere at a point within range.',

	sections: [
		{
			id: 'the-spell-does-not-require-a-visible-point',
			title: 'Acid Splash does not explicitly require a visible point',
			blocks: [
				{ type: 'paragraph', content: 'The 2024 spell creates its acidic bubble at a point within range. Its spell description does not add wording that requires the caster to see that point.' },
				{ type: 'paragraph', content: 'That makes Acid Splash different from spells whose descriptions explicitly say “a point you can see” or require the caster to choose a creature they can see.' },
				{ type: 'paragraph', content: 'As a result, lack of sight by itself does not automatically make a point invalid under Acid Splash’s own spell text. The general spell and area rules still have to be applied.' }
			]
		},
		{
			id: 'unseen-does-not-mean-through-walls',
			title: 'An unseen point is not the same as a point behind a wall',
			blocks: [
				{ type: 'paragraph', content: 'An unseen location might be hidden by darkness, blindness, fog, or another effect that blocks vision without necessarily providing Total Cover. Those situations are different from a solid wall standing between the caster and the chosen point.' },
				{ type: 'paragraph', content: 'The 2024 area-of-effect rules specifically address an unseen chosen point with an obstruction between the creator and that point. In that situation, the point of origin comes into being on the near side of the obstruction.' },
				{ type: 'paragraph', content: 'Acid Splash therefore cannot be treated as a method for freely placing an explosion inside a sealed room simply because the spell description lacks the words “you can see.”' }
			]
		},
		{
			id: 'total-cover-also-limits-the-sphere',
			title: 'Total Cover can also limit the Sphere itself',
			blocks: [
				{ type: 'paragraph', content: 'An area of effect extends outward from its point of origin. Locations that cannot be reached by the required straight lines because they are blocked by Total Cover are not included in the area.' },
				{ type: 'paragraph', content: 'A wall can therefore matter twice: it can affect where an unseen point of origin appears, and it can prevent the resulting Sphere from extending into locations protected by Total Cover.' },
				{ type: 'paragraph', content: 'This is why “does not require sight” should not be stored or explained as “ignores cover.” They are separate rules with different effects on the casting.' }
			]
		},
		{
			id: 'visibility-and-clear-path-should-be-kept-separate',
			title: 'Visibility and clear path should be tracked separately',
			blocks: [
				{ type: 'paragraph', content: 'For D&D Portal data, a simple field such as requiresSight: false would risk implying more than the spell actually says. The useful fact is that Acid Splash itself contains no explicit sight requirement.' },
				{ type: 'paragraph', content: 'General spell targeting, area-of-effect, point-of-origin, and Total Cover rules remain active. Those rules should be linked or explained separately rather than collapsed into the spell’s visibility metadata.' },
				{ type: 'paragraph', content: 'That distinction also makes edition comparisons clearer: the 2014 spell directly required visible creature targets, while the 2024 spell uses a point-based area and relies more heavily on the general area rules.' }
			]
		}
	]
} as const;

export default question;

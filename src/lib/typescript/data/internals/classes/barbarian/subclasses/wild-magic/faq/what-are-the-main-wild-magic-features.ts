export const question = {
  "slug": "what-are-the-main-wild-magic-features",
  "question": "What are the main Path of Wild Magic features?",
  "shortAnswer": "Path of Wild Magic makes each Rage produce a temporary magical effect. Magic Awareness detects nearby magic, Wild Surge rolls a random combat effect when Rage begins, Bolstering Magic supports attacks, checks, or spell-slot recovery, Unstable Backlash can replace a surge after you are hurt or fail a save, and Controlled Surge gives you much more control over the table.",
  "introduction": "",
  "sections": [
    {
      "id": "3rd-level-magic-awareness",
      "title": "3rd level — Magic Awareness",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Use an action to sense nearby spells and magic items for a brief period, learning their locations and schools of magic when applicable. Uses are limited by proficiency bonus and recover on a long rest."
        }
      ]
    },
    {
      "id": "3rd-level-wild-surge",
      "title": "3rd level — Wild Surge",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Whenever you enter Rage, roll on the subclass's Wild Magic table and immediately create the rolled magical effect. Several results continue to provide an action, bonus action or passive benefit during that Rage."
        }
      ]
    },
    {
      "id": "6th-level-bolstering-magic",
      "title": "6th level — Bolstering Magic",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Use an action to touch a creature and grant either a temporary d3 bonus to attack rolls and ability checks or restore one expended spell slot of a limited level determined by a d3. Uses are limited by proficiency bonus."
        }
      ]
    },
    {
      "id": "10th-level-unstable-backlash",
      "title": "10th level — Unstable Backlash",
      "blocks": [
        {
          "type": "paragraph",
          "content": "While raging, when you take damage or fail a saving throw, you can use your reaction to reroll the Wild Magic table and replace the current Wild Surge effect with the new result."
        }
      ]
    },
    {
      "id": "14th-level-controlled-surge",
      "title": "14th level — Controlled Surge",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Whenever Wild Surge requires a table roll, roll twice and choose which result to use, greatly improving control over the subclass's randomness."
        }
      ]
    },
    {
      "id": "how-the-features-work-together",
      "title": "How the features work together",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The subclass rewards adaptation. Wild Surge changes what your best turn looks like from Rage to Rage, Bolstering Magic contributes between fights, and Unstable Backlash lets a bad or spent surge evolve during combat. Controlled Surge eventually keeps the randomness while making the result far more reliable."
        }
      ]
    }
  ]
} as const;
export default question;

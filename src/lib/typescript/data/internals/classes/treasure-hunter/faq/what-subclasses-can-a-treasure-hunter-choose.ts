export const question = {
  "slug": "what-subclasses-can-a-treasure-hunter-choose",
  "question": "What subclasses can a Treasure Hunter choose?",
  "shortAnswer": "A Treasure Hunter chooses one of two **Specialities** at 3rd level: **Burglar** or **Spy**. Burglar expands Cunning Action into object use and Sleight of Hand, improves climbing and jumping, and later rewards careful stealth. Spy improves Insight and Perception, can Search as a bonus action, can study a target through Weak Spot to enable Sneak Attack, and later gains stronger careful observation.",
  "introduction": "The Treasure Hunter subclass is called a Speciality.",
  "sections": [
    {
      "id": "burglar",
      "title": "Burglar",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Burglar is the physical infiltration specialist."
        },
        {
          "type": "paragraph",
          "content": "Clever-Handed allows the bonus action from Cunning Action to make a Sleight of Hand check or take the Use an Object action."
        },
        {
          "type": "paragraph",
          "content": "Tree-Climber removes the normal extra movement cost of climbing and improves climbing and jumping through Dexterity."
        },
        {
          "type": "paragraph",
          "content": "At 7th level, Quiet-Footed grants advantage on Stealth and Sleight of Hand checks when the Burglar moves no more than half speed on the same turn."
        },
        {
          "type": "paragraph",
          "content": "Choose Burglar for locks, ruins, climbing, stealth, and manipulating objects under pressure."
        }
      ]
    },
    {
      "id": "spy",
      "title": "Spy",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Spy is the observation and intelligence specialist."
        },
        {
          "type": "paragraph",
          "content": "Cunning Eye adds Intelligence to qualifying Insight and Perception checks and adds Search to Cunning Action."
        },
        {
          "type": "paragraph",
          "content": "Weak Spot allows the Spy to study a creature with Investigation or Perception opposed by the target's Stealth. Success creates a personal Sneak Attack route against that target under the feature's restrictions."
        },
        {
          "type": "paragraph",
          "content": "At 7th level, Sharp-Eyed grants advantage on Investigation and Perception checks when moving no more than half speed."
        },
        {
          "type": "paragraph",
          "content": "Choose Spy for surveillance, detecting deception, identifying targets, and reconnaissance."
        }
      ]
    },
    {
      "id": "choosing-between-them",
      "title": "Choosing between them",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Burglar → infiltration, climbing, objects, stealth\nSpy     → observation, Search, investigation, target analysis"
        }
      ]
    }
  ]
} as const;
export default question;

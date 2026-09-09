export const question = {
  "slug": "how-does-movement-work-in-dnd",
  "question": "How does movement work in D&D?",
  "shortAnswer": "Your speed is the distance you can normally move on your turn. In combat you can use as much or as little of that movement as you want, before and after your action, and you can often divide it into several pieces. Walking, climbing, swimming, crawling, jumping and other movement all consume the same available movement unless a feature gives a separate rule or speed.",
  "introduction": "",
  "sections": [
    {
      "id": "speed-is-a-movement-budget",
      "title": "Speed is a movement budget",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A creature with a 30-foot speed can normally move up to 30 feet during its turn. It does not need to move the full distance."
        }
      ]
    },
    {
      "id": "movement-is-not-normally-an-action",
      "title": "Movement is not normally an action",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Your normal movement exists alongside your action. The Dash action increases how much movement is available; it does not create a second kind of movement detached from your speed."
        }
      ]
    },
    {
      "id": "movement-can-be-split",
      "title": "Movement can be split",
      "blocks": [
        {
          "type": "paragraph",
          "content": "You can move, take an action and continue moving. If your Attack action includes multiple weapon attacks, you can also move between those attacks as long as you have movement remaining."
        }
      ]
    },
    {
      "id": "different-movement-modes-can-share-the-turn",
      "title": "Different movement modes can share the turn",
      "blocks": [
        {
          "type": "paragraph",
          "content": "If you have walking, flying, swimming or another speed, switching between speeds requires accounting for distance already moved. You do not usually receive the full value of every movement speed as separate pools."
        }
      ]
    },
    {
      "id": "special-movement-has-additional-costs",
      "title": "Special movement has additional costs",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Climbing, swimming and crawling normally cost extra movement unless an appropriate special speed or feature says otherwise. Difficult terrain also increases movement cost."
        }
      ]
    },
    {
      "id": "movement-can-trigger-reactions",
      "title": "Movement can trigger reactions",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Leaving a hostile creature's reach using your movement can provoke an opportunity attack unless Disengage or another exception applies."
        }
      ]
    },
    {
      "id": "features-can-alter-the-baseline",
      "title": "Features can alter the baseline",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Cunning Action Dash, Fast Movement, Step of the Wind, a fly speed, teleportation, difficult-terrain immunity and many other features modify normal movement. Apply the specific feature after understanding the baseline."
        }
      ]
    }
  ]
} as const;
export default question;

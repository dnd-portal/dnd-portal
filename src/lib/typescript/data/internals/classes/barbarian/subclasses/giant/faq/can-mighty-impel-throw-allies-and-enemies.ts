export const question = {
  "slug": "can-mighty-impel-throw-allies-and-enemies",
  "question": "Can Mighty Impel throw allies and enemies?",
  "shortAnswer": "Yes. While raging, Mighty Impel can target one Medium or smaller creature within your reach and move it to an unoccupied space you can see within 30 feet. A willing creature is moved without a saving throw; an unwilling creature can resist with a Strength save based on your Strength and proficiency bonus.",
  "introduction": "",
  "sections": [
    {
      "id": "allies-can-be-willing-targets",
      "title": "Allies can be willing targets",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The feature is a movement tool as much as an offensive one. A willing ally can be repositioned onto a ledge, across a gap, out of melee or closer to a priority target."
        }
      ]
    },
    {
      "id": "enemies-receive-a-strength-save",
      "title": "Enemies receive a Strength save",
      "blocks": [
        {
          "type": "paragraph",
          "content": "An unwilling creature is not automatically moved. It must fail the feature's Strength saving throw."
        }
      ]
    },
    {
      "id": "the-destination-must-be-unoccupied",
      "title": "The destination must be unoccupied",
      "blocks": [
        {
          "type": "paragraph",
          "content": "You choose an unoccupied space you can see within the feature's range."
        }
      ]
    },
    {
      "id": "unsupported-creatures-fall",
      "title": "Unsupported creatures fall",
      "blocks": [
        {
          "type": "paragraph",
          "content": "If the destination does not provide a surface or liquid capable of supporting the creature, the feature explicitly causes the creature to fall, taking normal falling consequences and landing prone."
        }
      ]
    },
    {
      "id": "demiurgic-colossus-increases-the-size-limit",
      "title": "Demiurgic Colossus increases the size limit",
      "blocks": [
        {
          "type": "paragraph",
          "content": "At 14th level, the upgraded feature can affect larger creatures than the original Medium-or-smaller limit."
        }
      ]
    }
  ]
} as const;
export default question;

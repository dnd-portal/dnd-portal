export const question = {
  "slug": "how-does-starlight-step-work",
  "question": "How does Starlight Step work?",
  "shortAnswer": "Starlight Step is a bonus-action species trait that magically teleports an Astral Elf up to 30 feet to an unoccupied space the Elf can see. It is not a spell, uses no spell slot, and can be used a number of times equal to proficiency bonus, with all expended uses returning after a long rest.",
  "introduction": "",
  "sections": [
    {
      "id": "bonus-action",
      "title": "Bonus action",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Using Starlight Step consumes the character's bonus action for that turn."
        }
      ]
    },
    {
      "id": "30-foot-teleport",
      "title": "30-foot teleport",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Choose an unoccupied space you can see within 30 feet. The movement is teleportation rather than ordinary walking."
        }
      ]
    },
    {
      "id": "proficiency-bonus-uses",
      "title": "Proficiency-bonus uses",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The number of uses scales with proficiency bonus, so it naturally increases as total character level rises."
        }
      ]
    },
    {
      "id": "long-rest-recovery",
      "title": "Long-rest recovery",
      "blocks": [
        {
          "type": "paragraph",
          "content": "All expended uses return after a long rest."
        }
      ]
    },
    {
      "id": "it-is-not-misty-step",
      "title": "It is not misty step",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The effect resembles a short teleport but is a species feature, not the misty step spell. It therefore does not consume a spell slot and is not itself a spellcasting action."
        }
      ]
    },
    {
      "id": "spellcasting-restrictions-do-not-automatically-apply",
      "title": "Spellcasting restrictions do not automatically apply",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Because Starlight Step is not a spell, rules that specifically restrict casting spells do not automatically prevent the trait. A separate effect that prevents teleportation could still matter."
        }
      ]
    },
    {
      "id": "positioning-value",
      "title": "Positioning value",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The teleport can escape a threatened space, cross a gap, bypass some terrain, reach elevation or create a better line of sight, provided the destination is valid and visible."
        }
      ]
    }
  ]
} as const;
export default question;

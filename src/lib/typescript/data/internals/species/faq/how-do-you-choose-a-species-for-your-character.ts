export const question = {
  "slug": "how-do-you-choose-a-species-for-your-character",
  "question": "How do you choose a species for your character?",
  "shortAnswer": "Choose a species by checking three things: whether it is available in your campaign, whether its traits support the kind of character you want to play, and whether its story fits the concept you want. You do not need to choose the mathematically strongest pairing. In D&D Portal, availability and campaign notes matter because a published species can still be restricted or modified for a particular party.",
  "introduction": "",
  "sections": [
    {
      "id": "check-campaign-availability-first",
      "title": "Check campaign availability first",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A species can be published and mechanically valid without being available in every campaign."
        },
        {
          "type": "paragraph",
          "content": "Setting, campaign premise, party restrictions or a DM decision can all affect availability."
        },
        {
          "type": "paragraph",
          "content": "Confirm campaign availability before building the rest of the character around that species."
        }
      ]
    },
    {
      "id": "read-the-traits-that-will-actually-affect-play",
      "title": "Read the traits that will actually affect play",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Look at practical mechanics such as:"
        },
        {
          "type": "list",
          "items": [
            "ability-score rules from that source;",
            "size;",
            "walking or special speeds;",
            "Darkvision;",
            "resistances;",
            "skill or tool proficiencies;",
            "innate spells;",
            "teleports or other limited-use abilities;",
            "rest or sleep traits."
          ]
        }
      ]
    },
    {
      "id": "think-about-the-class-without-treating-synergy-as-a-requirement",
      "title": "Think about the class without treating synergy as a requirement",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A species trait can complement a class."
        },
        {
          "type": "paragraph",
          "content": "For example, mobility can help a melee character reach targets, a useful cantrip can give a martial class a ranged or utility option, and a skill proficiency can reinforce a scout or investigator."
        },
        {
          "type": "paragraph",
          "content": "But a character does not become invalid because every trait is not optimized."
        }
      ]
    },
    {
      "id": "consider-the-character-concept",
      "title": "Consider the character concept",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Species can shape a character's history, family, community, lifespan, relationship to the setting and how the character experiences the world."
        },
        {
          "type": "paragraph",
          "content": "Those story questions can be more important to a long campaign than a small numerical advantage."
        }
      ]
    },
    {
      "id": "check-the-source-and-edition",
      "title": "Check the source and edition",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A Human from the 2014 Basic Rules and a Human from the 2024 Player's Handbook do not use the same trait package."
        },
        {
          "type": "paragraph",
          "content": "An Astral Elf from Spelljammer likewise uses its own later pre-2024 design structure."
        },
        {
          "type": "paragraph",
          "content": "Do not combine the preferred pieces of different versions unless the campaign explicitly creates such a variant."
        }
      ]
    },
    {
      "id": "read-campaign-notes-separately",
      "title": "Read campaign notes separately",
      "blocks": [
        {
          "type": "paragraph",
          "content": "D&D Portal can attach a party-specific note to a species."
        },
        {
          "type": "paragraph",
          "content": "That note can add an availability condition or small campaign rule without changing what the published species normally does."
        },
        {
          "type": "paragraph",
          "content": "The Human and Astral Elf pages currently contain Party 1 notes, and those notes must remain visibly scoped to Party 1."
        }
      ]
    }
  ]
} as const;
export default question;

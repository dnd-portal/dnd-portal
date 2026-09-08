export const question = {
  "slug": "how-do-climbing-swimming-crawling-and-jumping-work",
  "question": "How do climbing, swimming, crawling, and jumping work?",
  "shortAnswer": "Climbing, swimming, and crawling normally cost 1 extra foot of movement for every foot traveled. A climb or swim speed can remove the extra cost for its matching movement. Difficult or dangerous climbing and swimming can require Strength (Athletics) checks at the DM's discretion. Jump distance is determined mainly by Strength, with running jumps covering more distance than standing jumps.",
  "introduction": "",
  "sections": [
    {
      "id": "climbing",
      "title": "Climbing",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Without a climb speed or another exception, each foot climbed normally costs one additional foot of movement. A slippery wall or a surface with few handholds may require a Strength (Athletics) check."
        }
      ]
    },
    {
      "id": "swimming",
      "title": "Swimming",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Without a swim speed or another exception, each foot swum normally costs one additional foot of movement. Rough water may require a Strength (Athletics) check."
        }
      ]
    },
    {
      "id": "crawling",
      "title": "Crawling",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Crawling uses the same extra-movement principle. Crawling through difficult terrain becomes especially expensive because both movement costs matter under the 2014 rule."
        }
      ]
    },
    {
      "id": "running-long-jump",
      "title": "Running long jump",
      "blocks": [
        {
          "type": "paragraph",
          "content": "With at least a 10-foot approach immediately before the jump, a long jump can cover a number of feet up to the creature's Strength score, subject to available movement and terrain."
        }
      ]
    },
    {
      "id": "standing-long-jump",
      "title": "Standing long jump",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Without the running start, the normal long-jump distance is halved."
        }
      ]
    },
    {
      "id": "running-high-jump",
      "title": "Running high jump",
      "blocks": [
        {
          "type": "paragraph",
          "content": "With the 10-foot approach, high-jump height is based on 3 + Strength modifier, subject to the rule's minimum and available movement."
        }
      ]
    },
    {
      "id": "standing-high-jump",
      "title": "Standing high jump",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A standing high jump normally covers half the running high-jump distance."
        }
      ]
    },
    {
      "id": "jumping-consumes-movement",
      "title": "Jumping consumes movement",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A jump does not create free distance. Each foot cleared uses movement from the current turn."
        }
      ]
    },
    {
      "id": "checks-are-situational",
      "title": "Checks are situational",
      "blocks": [
        {
          "type": "paragraph",
          "content": "The base jump distances do not automatically require an Athletics check. The DM can call for checks for obstacles, dangerous landings or exceptional circumstances specified by the rules."
        }
      ]
    },
    {
      "id": "party-3-campaign-note",
      "title": "Party 3 campaign note",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Party 3 uses stricter climbing and swimming checks during wilderness expeditions. That is a campaign-specific rule for that party; the published 2014 movement rules described above remain the baseline for other campaigns."
        }
      ]
    }
  ]
} as const;
export default question;

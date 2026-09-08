export const question = {
  "slug": "how-do-first-aid-technique-and-medical-training-work-together",
  "question": "How do First Aid Technique and Medical Training work together?",
  "shortAnswer": "Medical Training gives you First Aid Technique if you do not already know it and makes it a stronger repeatable support tool. A creature can regain hit points from your First Aid Technique twice per short or long rest instead of once, and whenever one of your Shinobi techniques restores hit points, the target also gains temporary hit points equal to your proficiency bonus.",
  "fullAnswer": {
    "introduction": "",
    "sections": [
      {
        "title": "First Aid becomes a free known technique",
        "paragraphs": [
          "If you did not already know First Aid Technique, you learn it without consuming one of the normal techniques-known slots."
        ]
      },
      {
        "title": "The per-creature benefit limit improves",
        "paragraphs": [
          "The base First Aid Technique normally limits how often a particular creature can regain hit points from it. Medical Training doubles that availability from once to twice per short or long rest."
        ]
      },
      {
        "title": "Temporary hit points are separate",
        "paragraphs": [
          "The extra temporary hit points are granted when a Shinobi technique restores hit points. They do not increase the amount of actual hit points restored and follow the normal rule that temporary hit points do not stack with another pool of temporary hit points."
        ]
      },
      {
        "title": "The improvement applies to Shinobi-technique healing",
        "paragraphs": [
          "The temporary-hit-point rider is broader than First Aid alone: it applies whenever one of your Shinobi techniques restores hit points."
        ]
      },
      {
        "title": "Chakra still matters",
        "paragraphs": [
          "Improved efficiency does not make healing free. The actual technique still uses whatever Chakra cost and activation rules its own entry specifies."
        ]
      }
    ]
  }
} as const;
export default question;

export const question = {
  "slug": "how-do-spells-work-in-dnd",
  "question": "How do spells work in D&D?",
  "shortAnswer": "A spell is a discrete magical effect with its own level, school, casting time, range, components, duration, and rules text. To cast a leveled spell, a character normally needs access to that spell and must expend a spell slot of the spell's level or higher. Cantrips are level 0 and normally do not use spell slots. Some spells require concentration, some can be cast as rituals, and each class has its own rules for learning, knowing, preparing, or accessing spells.",
  "introduction": "Spellcasting in Fifth Edition uses two layers of rules.\n\nThe first layer is the **general spellcasting system**: spell levels, spell slots, targets, casting time, range, components, duration, concentration, rituals, attack rolls, saving throws, and higher-level casting.\n\nThe second layer is the **class or feature that gives you the spell**.\n\nA Wizard, Cleric, Sorcerer, Warlock, Ranger, Paladin, Bard, Druid, Artificer, or subclass spellcaster may all cast spells, but they do not necessarily learn and prepare them in the same way.",
  "sections": [
    {
      "id": "every-spell-has-a-rules-entry",
      "title": "Every spell has a rules entry",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A spell entry normally tells you:"
        },
        {
          "type": "list",
          "items": [
            "its name;",
            "spell level;",
            "school of magic;",
            "casting time;",
            "range;",
            "components;",
            "duration;",
            "whether it requires concentration;",
            "whether it has the ritual tag;",
            "its actual magical effect;",
            "any effect from using a higher-level spell slot."
          ]
        },
        {
          "type": "paragraph",
          "content": "These fields form the common structure used to read a spell."
        },
        {
          "type": "paragraph",
          "content": "The individual spell entry is the authority for how that spell works."
        },
        {
          "type": "paragraph",
          "content": "Do not assume two spells with the same level or school have similar targeting, damage, duration, or components."
        }
      ]
    },
    {
      "id": "you-must-have-access-to-the-spell",
      "title": "You must have access to the spell",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Knowing that a spell exists is not enough to cast it."
        },
        {
          "type": "paragraph",
          "content": "The character needs a class feature, subclass feature, feat, magic item, monster trait, or other rule that actually provides access to the spell."
        },
        {
          "type": "paragraph",
          "content": "Different spellcasters then handle that access differently."
        },
        {
          "type": "paragraph",
          "content": "A Wizard may have a spell in a spellbook but not have it prepared today."
        },
        {
          "type": "paragraph",
          "content": "A Cleric may prepare from the Cleric spell list after a long rest."
        },
        {
          "type": "paragraph",
          "content": "A Sorcerer normally knows a smaller fixed selection of spells."
        },
        {
          "type": "paragraph",
          "content": "A Warlock knows spells but casts most of its 1st- through 5th-level magic through Pact Magic."
        },
        {
          "type": "paragraph",
          "content": "The class or feature determines access to a spell; the spell entry determines what the spell does."
        }
      ]
    },
    {
      "id": "leveled-spells-normally-use-spell-slots",
      "title": "Leveled spells normally use spell slots",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Spells of 1st level through 9th level normally require a spell slot when cast."
        },
        {
          "type": "paragraph",
          "content": "The slot must be at least as high as the spell's level."
        },
        {
          "type": "paragraph",
          "content": "For example:"
        },
        {
          "type": "paragraph",
          "content": "1st-level spell → 1st-level slot or higher\n3rd-level spell → 3rd-level slot or higher\n7th-level spell → 7th-level slot or higher"
        },
        {
          "type": "paragraph",
          "content": "Some class features and magic items explicitly let a character cast a spell without spending a slot."
        },
        {
          "type": "paragraph",
          "content": "Those are exceptions created by the specific feature."
        }
      ]
    },
    {
      "id": "casting-at-a-higher-level",
      "title": "Casting at a higher level",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A lower-level spell can normally be cast using a higher-level spell slot."
        },
        {
          "type": "paragraph",
          "content": "For that casting, the spell counts as the level of the slot used."
        },
        {
          "type": "paragraph",
          "content": "However, a stronger slot only improves the spell when the spell's rules actually provide a higher-level benefit."
        },
        {
          "type": "paragraph",
          "content": "For example, a spell may gain:"
        },
        {
          "type": "list",
          "items": [
            "more damage;",
            "more healing;",
            "additional targets;",
            "longer duration;",
            "another numerical benefit."
          ]
        },
        {
          "type": "paragraph",
          "content": "If a spell does not list a higher-level benefit, using a higher-level slot does not create an extra numerical bonus by itself."
        }
      ]
    },
    {
      "id": "casting-time-matters",
      "title": "Casting time matters",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Many spells use an action."
        },
        {
          "type": "paragraph",
          "content": "Others may use:"
        },
        {
          "type": "list",
          "items": [
            "a bonus action;",
            "a reaction;",
            "1 minute;",
            "10 minutes;",
            "1 hour;",
            "another specified casting time."
          ]
        },
        {
          "type": "paragraph",
          "content": "A reaction spell tells you what event triggers the reaction."
        },
        {
          "type": "paragraph",
          "content": "A spell with a long casting time requires the caster to continue casting for that entire period under the normal rules."
        },
        {
          "type": "paragraph",
          "content": "The 2014 rules also have a specific restriction around bonus-action spellcasting, so a bonus-action spell should not be treated as simply “faster and otherwise unrestricted.”"
        }
      ]
    },
    {
      "id": "range-and-targets-matter",
      "title": "Range and targets matter",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A spell can only initially target or originate where its range permits."
        },
        {
          "type": "paragraph",
          "content": "Common ranges include:"
        },
        {
          "type": "list",
          "items": [
            "Self;",
            "Touch;",
            "a number of feet;",
            "Sight;",
            "special ranges defined by the spell."
          ]
        },
        {
          "type": "paragraph",
          "content": "Some spells target creatures."
        },
        {
          "type": "paragraph",
          "content": "Others target objects, points in space, areas, or the caster."
        },
        {
          "type": "paragraph",
          "content": "Once a spell has been cast, its ongoing effects are not automatically cancelled just because something later moves beyond the original casting range unless the spell says otherwise."
        }
      ]
    },
    {
      "id": "components-matter",
      "title": "Components matter",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Spell components are represented by:"
        },
        {
          "type": "paragraph",
          "content": "V = Verbal\nS = Somatic\nM = Material"
        },
        {
          "type": "paragraph",
          "content": "A spell can require one, two, or all three."
        },
        {
          "type": "paragraph",
          "content": "The exact component rules matter when a caster is:"
        },
        {
          "type": "list",
          "items": [
            "silenced;",
            "unable to gesture;",
            "deprived of a focus or component pouch;",
            "using a costly material component;",
            "using a material component that the spell consumes."
          ]
        },
        {
          "type": "paragraph",
          "content": "A spellcasting focus can replace many ordinary material components, but not every material component."
        },
        {
          "type": "paragraph",
          "content": "If the spell specifies a cost or says the component is consumed, read that spell's exact requirement."
        }
      ]
    },
    {
      "id": "duration-and-concentration-are-different-concepts",
      "title": "Duration and concentration are different concepts",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A spell's duration tells you how long the effect can last."
        },
        {
          "type": "paragraph",
          "content": "Examples include:"
        },
        {
          "type": "list",
          "items": [
            "Instantaneous;",
            "1 round;",
            "1 minute;",
            "10 minutes;",
            "1 hour;",
            "Until dispelled."
          ]
        },
        {
          "type": "paragraph",
          "content": "If the Duration field says **Concentration**, the caster must maintain concentration to keep the effect active."
        },
        {
          "type": "paragraph",
          "content": "A character can normally concentrate on only one spell at a time."
        },
        {
          "type": "paragraph",
          "content": "Casting another concentration spell ends the first one's concentration."
        },
        {
          "type": "paragraph",
          "content": "Taking damage can also force a Constitution saving throw to maintain concentration."
        }
      ]
    },
    {
      "id": "rituals-are-a-special-casting-method",
      "title": "Rituals are a special casting method",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A spell with the ritual tag can potentially be cast as a ritual."
        },
        {
          "type": "paragraph",
          "content": "Casting it as a ritual takes 10 minutes longer than normal and does not spend a spell slot."
        },
        {
          "type": "paragraph",
          "content": "However, the character must have a feature that actually allows ritual casting."
        },
        {
          "type": "paragraph",
          "content": "Classes can also differ in what “available” means for ritual casting."
        },
        {
          "type": "paragraph",
          "content": "For example, the 2014 Wizard can ritual-cast a Wizard ritual from the spellbook without having it prepared, while the 2014 Cleric normally needs the ritual spell prepared."
        }
      ]
    },
    {
      "id": "spell-attacks-and-saving-throws",
      "title": "Spell attacks and saving throws",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Some spells require the caster to make a spell attack roll."
        },
        {
          "type": "paragraph",
          "content": "Others make the target roll a saving throw against the caster's spell save DC."
        },
        {
          "type": "paragraph",
          "content": "Those values are normally based on the character's spellcasting ability and proficiency bonus."
        },
        {
          "type": "paragraph",
          "content": "The spell entry tells you which method applies."
        },
        {
          "type": "paragraph",
          "content": "Do not add an attack roll to a save-based spell or a save to a spell that simply works automatically under its stated conditions."
        }
      ]
    },
    {
      "id": "read-the-complete-spell-entry",
      "title": "Read the complete spell entry",
      "blocks": [
        {
          "type": "paragraph",
          "content": "A spell should be resolved from its own entry rather than from its name, school, or level alone."
        },
        {
          "type": "paragraph",
          "content": "The fields that matter most during play are casting time, range, components, duration, concentration, target wording, attack or saving-throw procedure, and any higher-level effect."
        },
        {
          "type": "paragraph",
          "content": "Two spells of the same level and school can still function completely differently, so the individual rules text is always the final reference for how a particular spell resolves."
        }
      ]
    }
  ]
} as const;
export default question;

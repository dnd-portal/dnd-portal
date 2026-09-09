export const question = {
  "slug": "what-subclasses-can-a-vanguard-choose",
  "question": "What subclasses can a Vanguard choose?",
  "shortAnswer": "The Vanguard has three subclasses: **Thaumaturgist, Saboteur, and Living Shield**. Thaumaturgist specializes in healing and restoration, Saboteur specializes in weakening and marking enemies, and Living Shield specializes in taking or sharing damage that would otherwise harm allies. Each uses its own Vanguard subclass mechanics.",
  "introduction": "The Vanguard chooses a subclass at 3rd level.\n\nThe Vanguard has three subclass options.",
  "sections": [
    {
      "id": "thaumaturgist",
      "title": "Thaumaturgist",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Thaumaturgist is the healing specialist."
        },
        {
          "type": "paragraph",
          "content": "Its early features improve the amount or impact of healing and allow Tool Points to function as a healing resource."
        },
        {
          "type": "paragraph",
          "content": "From 5th level, Thaumaturgist can attach one of several boosts when it heals: +10 feet of movement until the end of the Vanguard's next turn, +1 AC for that duration, or 1d6 added to the target's next d20 roll."
        },
        {
          "type": "paragraph",
          "content": "Later features improve emergency healing when an ally drops to 0 hit points and eventually allow excess healing to become temporary hit points according to the subclass feature."
        },
        {
          "type": "paragraph",
          "content": "Choose Thaumaturgist when the player wants the Vanguard's support identity to centre on restoration and keeping allies active."
        }
      ]
    },
    {
      "id": "saboteur",
      "title": "Saboteur",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Saboteur weakens enemies instead of primarily strengthening allies."
        },
        {
          "type": "paragraph",
          "content": "Its early features identify enemy weaknesses and allow a target to be marked through Tool Points."
        },
        {
          "type": "paragraph",
          "content": "The subclass later adds longer-duration hex-style debuffs, attack redirection, and additional negative effects attached to offensive spell hits."
        },
        {
          "type": "paragraph",
          "content": "Choose Saboteur when encounter control and priority-target debuffing are the main appeal."
        }
      ]
    },
    {
      "id": "living-shield",
      "title": "Living Shield",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Living Shield is the self-sacrifice subclass."
        },
        {
          "type": "paragraph",
          "content": "It can redirect or share damage suffered by nearby allies."
        },
        {
          "type": "paragraph",
          "content": "Later features reward the Vanguard for accepting that damage, create a stronger bond with a protected creature, and improve nearby allies when the Vanguard is badly injured."
        },
        {
          "type": "paragraph",
          "content": "Its high-level identity culminates in the ability to take an ally's place in an otherwise lethal moment under the subclass feature."
        },
        {
          "type": "paragraph",
          "content": "Choose Living Shield when the character concept is literally “hurt me instead.”"
        }
      ]
    },
    {
      "id": "choosing-between-them",
      "title": "Choosing between them",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Thaumaturgist → healing, restoration, ally boosts\nSaboteur      → marks, debuffs, attack redirection, control\nLiving Shield → damage interception, sacrifice, protection"
        }
      ]
    },
    {
      "id": "because-vanguard-is-homebrew",
      "title": "Because Vanguard is homebrew",
      "blocks": [
        {
          "type": "paragraph",
          "content": "Vanguard mechanics intentionally differ from official class benchmarks. Tool Point costs, healing values, immunity effects, damage interception, and subclass numbers should therefore be used as written for this homebrew rather than normalized to a different class."
        }
      ]
    }
  ]
} as const;
export default question;

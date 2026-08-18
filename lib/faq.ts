export type FaqItem = { question: string; answer: string };

// General, defensible answers only. Anything that makes a specific claim
// about how Regressive itself operates (e.g. "we pull every permit") should
// be confirmed with the client before publishing — see the round-2 audit's
// data-needed list.
export const FAQ: FaqItem[] = [
  {
    question: "Do I need a permit for seawall or dock work?",
    answer:
      "Most marine construction in Florida needs a permit, sometimes from the county, sometimes from the state, and occasionally from the Army Corps of Engineers depending on the waterway. Requirements vary by project and location, so this gets confirmed as part of your estimate rather than guessed at up front.",
  },
  {
    question: "How does storm season affect scheduling?",
    answer:
      "Hurricane season runs June through November on the Gulf Coast. Storm-prep work books up fastest in the weeks before a named storm approaches, and post-storm repair work is triaged by urgency. Getting on the schedule earlier in the season means more flexibility, not less.",
  },
  {
    question: "Do you work with condo associations and HOAs?",
    answer:
      "Yes. Association and property-management work typically involves board approval, sometimes a formal bid process, and often a maintenance schedule rather than a single job. That's handled as a separate conversation from a single-property estimate.",
  },
  {
    question: "Repair or full replacement, how is that decided?",
    answer:
      "It depends on the condition of what's already there. A cracked cap or a section of failing panel is often a repair. Undermining, significant lean, or age past the material's expected life usually means replacement makes more sense than patching. That call gets made after an on-site look, not from a phone description.",
  },
  {
    question: "What does a project cost?",
    answer:
      "Marine construction pricing depends on length, material, site access, and current permitting and material costs, so a number can't be quoted without seeing the property. A free on-site estimate is the fastest way to get a real range.",
  },
  {
    question: "How long does a typical job take?",
    answer:
      "Boat lift service and cap repairs are often days, not weeks. A full seawall or dock rebuild runs longer once permitting timelines are factored in. Your estimate will include a realistic timeline for your specific scope.",
  },
];

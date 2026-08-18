export type ServiceDetail = {
  slug: string;
  n: string;
  title: string;
  desc: string;
  whatItCovers: string[];
  typicalTimeline: string;
};

// Timeline ranges are general industry ranges, not commitments — every
// estimate states the real timeline for that job.
export const SERVICES: ServiceDetail[] = [
  {
    slug: "dock-repair",
    n: "01",
    title: "Dock Repair & Reconstruction",
    desc: "From spot repairs to full rebuilds, decked out to take the next fifteen years.",
    whatItCovers: [
      "Deck board and joist replacement",
      "Piling repair and replacement",
      "Structural leveling and re-anchoring",
      "Full teardown and rebuild",
    ],
    typicalTimeline: "A few days for spot repairs, several weeks for a full rebuild once permitted.",
  },
  {
    slug: "boat-lift-service",
    n: "02",
    title: "Boat Lift Service & Replacement",
    desc: "Cables, motors, cradles, full replacements. Diagnosed straight, fixed right.",
    whatItCovers: [
      "Cable and motor diagnostics and repair",
      "Cradle and bunk replacement",
      "Full lift replacement and reinstallation",
      "Seasonal maintenance",
    ],
    typicalTimeline: "Most service calls are same-day to a few days; full replacements typically run about a week.",
  },
  {
    slug: "seawall-cap-repair",
    n: "03",
    title: "Seawall & Cap Repair",
    desc: "Cracking, undermining, and cap failure caught before it becomes a bigger bill.",
    whatItCovers: [
      "Cap replacement and resealing",
      "Panel repair and reinforcement",
      "Undermining and erosion correction",
      "Full seawall replacement",
    ],
    typicalTimeline: "Cap repairs often run days to a couple weeks; full seawall replacement is longer once permitting is factored in.",
  },
  {
    slug: "waterfront-structural-maintenance",
    n: "04",
    title: "Waterfront Structural Maintenance",
    desc: "Preventative work that keeps the emergency call from ever happening.",
    whatItCovers: [
      "Scheduled structural inspections",
      "Hardware and fastener checks",
      "Early-stage corrosion and rot treatment",
      "Documented maintenance history",
    ],
    typicalTimeline: "Ongoing, on a schedule set to your property, not a one-time visit.",
  },
  {
    slug: "storm-prep-recovery",
    n: "05",
    title: "Storm Prep & Recovery",
    desc: "Before the season and after the storm, on properties across the Gulf Coast.",
    whatItCovers: [
      "Pre-season structural checks",
      "Lift and dock securing ahead of a named storm",
      "Post-storm damage assessment",
      "Emergency repair triage",
    ],
    typicalTimeline: "Pre-season checks book by appointment; post-storm work is triaged by urgency.",
  },
  {
    slug: "commercial-marine-maintenance",
    n: "06",
    title: "Commercial Marine Maintenance",
    desc: "Marinas, hospitality, and condo association properties on a real schedule.",
    whatItCovers: [
      "Annual and semiannual maintenance programs",
      "Multi-structure marina upkeep",
      "Association and property-management coordination",
      "Documented condition reporting",
    ],
    typicalTimeline: "Set up as a recurring program, scoped to the property.",
  },
  {
    slug: "waterfront-inspections",
    n: "07",
    title: "Waterfront Inspections",
    desc: "A straight read on what's actually going on before you buy, sell, or renew a policy.",
    whatItCovers: [
      "Pre-purchase dock and seawall inspection",
      "Insurance renewal condition reports",
      "Written findings with photos",
      "Repair recommendations and rough scope",
    ],
    typicalTimeline: "Usually scheduled and completed within a few days.",
  },
  {
    slug: "exterior-coastal-repairs",
    n: "08",
    title: "Exterior Coastal Repairs",
    desc: "Salt, sun, and storm surge wear down more than the dock. We handle the rest of the exterior too.",
    whatItCovers: [
      "Exterior structural repair beyond the waterline",
      "Salt and storm-surge damage",
      "Exterior hardware and fastener replacement",
    ],
    typicalTimeline: "Scoped per project after an on-site look.",
  },
  {
    slug: "marina-construction-rehabilitation",
    n: "09",
    title: "Marina Construction & Rehabilitation",
    desc: "Marina dock repair, reconstruction, and rehab, from pilings to full infrastructure upgrades.",
    whatItCovers: [
      "Marina dock repair and reconstruction",
      "Structural rehabilitation and pilings",
      "Decking and boat lift work",
      "Waterfront infrastructure improvements and ongoing marina maintenance",
    ],
    typicalTimeline: "Varies by scope and permitting; discussed as part of your estimate.",
  },
];

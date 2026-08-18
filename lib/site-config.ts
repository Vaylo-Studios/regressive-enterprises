// TODO(client-data): replace with Regressive Enterprises' real phone, email,
// mailing address, and license/insurance numbers before launch.
export const siteConfig = {
  name: "Regressive Enterprises",
  tagline: "Built to Hold Up",
  phone: {
    display: "(727) 555-0142",
    href: "tel:+17275550142",
    isPlaceholder: true,
  },
  email: {
    display: "office@regressiveenterprises.com",
    href: "mailto:office@regressiveenterprises.com",
    isPlaceholder: true,
  },
  address: {
    city: "Clearwater",
    state: "FL",
    serviceArea: "Pinellas, Hillsborough, Pasco, and Manatee counties",
  },
  founded: 2011,
  url: "https://regressive.sitegrid.cc",
  license: {
    display: "License # on file, provided on request",
    isPlaceholder: true,
  },
  founder: {
    name: "Russell Mercer",
    photo: null as string | null,
  },
  crew: {
    // TODO(client-data): confirm actual crew size and referral share before
    // trusting these on a live page — round-2 audit flagged them as
    // unverifiable-looking without a source.
    size: 27,
    referralSharePercent: 70,
    isPlaceholder: true,
  },
  financing: {
    available: false,
    provider: "",
    blurb: "",
  },
  warranty: {
    // TODO(client-data): get the actual workmanship warranty terms Regressive
    // stands behind (duration, what's covered) — do not invent one.
    display: "",
  },
  socials: {
    instagram: "",
    facebook: "",
    youtube: "",
  },
};

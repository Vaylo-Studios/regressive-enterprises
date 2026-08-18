export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  project: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Regressive explained what was failing, what actually needed to be repaired, and what didn't. The crew showed up when they said they would, kept us updated, and the finished work looks like it belongs there. That's exactly what we wanted.",
    name: "Michael Reynolds",
    location: "Clearwater, FL",
    project: "Seawall & Cap Repair",
  },
  {
    quote:
      "Our dock had been patched several times over the years. Regressive was the first company that walked us through why it kept failing instead of just selling us another repair. The project was straightforward from estimate through completion.",
    name: "Susan Thompson",
    location: "Belleair, FL",
    project: "Residential Dock Reconstruction",
  },
  {
    quote:
      "We need contractors who communicate, document the work, and don't create another problem for our management team. Regressive has become one of the companies we know we can call and get a straight answer from.",
    name: "David Martinez",
    location: "Pinellas County, FL",
    project: "Commercial Marina Maintenance",
  },
];
